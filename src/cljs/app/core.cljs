(ns app.core
  (:require [reagent.dom :as reagent]
            [re-frame.core :as re-frame]
            [reitit.core :as r]
            [reitit.coercion :as rc]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]))

(re-frame.core/reg-event-db
 ::initialize-db
 (fn [_ _]
   {:current-route nil}))

(re-frame.core/reg-event-fx
 ::navigate
 (fn [db [_ route]]
   {::navigate! route}))

(re-frame.core/reg-event-db
 ::navigated
 (fn [db [_ new-match]]
   (assoc db :current-route new-match)))

(re-frame.core/reg-sub
 ::current-route
 (fn [db]
   (:current-route db)))

(re-frame.core/reg-fx
 ::navigate!
 (fn [k params query]
   (rfe/push-state k params query)))

(defn href
  ([k]
   (href k nil nil))
  ([k params]
   (href k params nil))
  ([k params query]
   (rfe/href k params query)))

(defn home-page []
  [:div
   [:h1 "Hello from CLJS"]
   [:button
    {:on-click #(re-frame.core/dispatch [:console-me "the very front"])}
    "Click me"]
   (js/console.log (href ::contacts))
   [:a {:href (href ::contacts)} "Got to contacts"]])

(defn contacts-page []
  [:div
   [:h1 "Contacts"]
   [:button
    {:on-click #(re-frame.core/dispatch [:console-me "from the contacts"])}
    "Click me"]])

(def routes
  ["/"
   [""
    {:name      ::home
     :view      home-page
     :link-text "Home"
     :controllers
     [{:start (fn [& params](js/console.log "Entering home page"))
       :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]
    ["contacts"
    {:name      ::contacts
     :view      contacts-page
     :link-text "Sub page 1"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering sub-page 1"))
       :stop  (fn [& params] (js/console.log "Leaving sub-page 1"))}]}]])

(defn on-navigate [new-match]
  (let [old-match (re-frame/subscribe [::current-route])]
    (when new-match
      (let [cs (rfc/apply-controllers (:controllers @old-match) new-match)
            m  (assoc new-match :controllers cs)]
        (re-frame/dispatch [::navigated m])))))

(def router
  (rf/router
   routes
   {:data {:coercion rss/coercion}}))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start!
   router
   on-navigate
   {:use-fragment false}))

(defn nav [{:keys [router current-route]}]
  (into
   [:ul]
   (for [route-name (r/route-names router)
         :let       [route (r/match-by-name router route-name)
                     text (-> route :data :link-text)]]
     [:li
      (when (= route-name (-> current-route :data :name))
        "> ")
      ;; Create a normal links that user can click
      [:a {:href (href route-name)} text]])))

(defn router-component [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [::current-route])]
    [:div
     [nav {:router router :current-route current-route}]
     (when current-route
       [(-> current-route :data :view)])]))

(re-frame.core/reg-event-fx
 :console-me
 (fn [_ [_ msg]] (js/console.log msg)))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (reagent/render [router-component {:router router}]
                  (.getElementById js/document "root")))

(defn ^:export init []
  (re-frame/dispatch-sync [::initialize-db])
  (mount-root))
