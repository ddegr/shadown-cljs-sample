goog.provide('app.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.core","initialize-db","app.core/initialize-db",-1080380188),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.core","navigate","app.core/navigate",-338722231),(function (db,p__29923){
var vec__29924 = p__29923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.core","navigate!","app.core/navigate!",-1096531368),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.core","navigated","app.core/navigated",-476135584),(function (db,p__29927){
var vec__29928 = p__29927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29928,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29928,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),new_match);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.core","current-route","app.core/current-route",10281556),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_fx(new cljs.core.Keyword("app.core","navigate!","app.core/navigate!",-1096531368),(function (k,params,query){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));
app.core.href = (function app$core$href(var_args){
var G__29932 = arguments.length;
switch (G__29932) {
case 1:
return app.core.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.core.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.core.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.core.href.cljs$core$IFn$_invoke$arity$1 = (function (k){
return app.core.href.cljs$core$IFn$_invoke$arity$3(k,null,null);
}));

(app.core.href.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return app.core.href.cljs$core$IFn$_invoke$arity$3(k,params,null);
}));

(app.core.href.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));

(app.core.href.cljs$lang$maxFixedArity = 3);

app.core.home_page = (function app$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello from CLJS"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-me","console-me",1219807358),"the very front"], null));
})], null),"Click me"], null),console.log(app.core.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","contacts","app.core/contacts",1359430778))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),app.core.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","contacts","app.core/contacts",1359430778))], null),"Got to contacts"], null)], null);
});
app.core.contacts_page = (function app$core$contacts_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Contacts"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-me","console-me",1219807358),"from the contacts"], null));
})], null),"Click me"], null)], null);
});
app.core.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","home","app.core/home",1018164047),new cljs.core.Keyword(null,"view","view",1247994814),app.core.home_page,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Home",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__29946__delegate = function (params){
return console.log("Entering home page");
};
var G__29946 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29947__i = 0, G__29947__a = new Array(arguments.length -  0);
while (G__29947__i < G__29947__a.length) {G__29947__a[G__29947__i] = arguments[G__29947__i + 0]; ++G__29947__i;}
  params = new cljs.core.IndexedSeq(G__29947__a,0,null);
} 
return G__29946__delegate.call(this,params);};
G__29946.cljs$lang$maxFixedArity = 0;
G__29946.cljs$lang$applyTo = (function (arglist__29948){
var params = cljs.core.seq(arglist__29948);
return G__29946__delegate(params);
});
G__29946.cljs$core$IFn$_invoke$arity$variadic = G__29946__delegate;
return G__29946;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__29949__delegate = function (params){
return console.log("Leaving home page");
};
var G__29949 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29950__i = 0, G__29950__a = new Array(arguments.length -  0);
while (G__29950__i < G__29950__a.length) {G__29950__a[G__29950__i] = arguments[G__29950__i + 0]; ++G__29950__i;}
  params = new cljs.core.IndexedSeq(G__29950__a,0,null);
} 
return G__29949__delegate.call(this,params);};
G__29949.cljs$lang$maxFixedArity = 0;
G__29949.cljs$lang$applyTo = (function (arglist__29951){
var params = cljs.core.seq(arglist__29951);
return G__29949__delegate(params);
});
G__29949.cljs$core$IFn$_invoke$arity$variadic = G__29949__delegate;
return G__29949;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contacts",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","contacts","app.core/contacts",1359430778),new cljs.core.Keyword(null,"view","view",1247994814),app.core.contacts_page,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Sub page 1",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__29952__delegate = function (params){
return console.log("Entering sub-page 1");
};
var G__29952 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29953__i = 0, G__29953__a = new Array(arguments.length -  0);
while (G__29953__i < G__29953__a.length) {G__29953__a[G__29953__i] = arguments[G__29953__i + 0]; ++G__29953__i;}
  params = new cljs.core.IndexedSeq(G__29953__a,0,null);
} 
return G__29952__delegate.call(this,params);};
G__29952.cljs$lang$maxFixedArity = 0;
G__29952.cljs$lang$applyTo = (function (arglist__29954){
var params = cljs.core.seq(arglist__29954);
return G__29952__delegate(params);
});
G__29952.cljs$core$IFn$_invoke$arity$variadic = G__29952__delegate;
return G__29952;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__29955__delegate = function (params){
return console.log("Leaving sub-page 1");
};
var G__29955 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29956__i = 0, G__29956__a = new Array(arguments.length -  0);
while (G__29956__i < G__29956__a.length) {G__29956__a[G__29956__i] = arguments[G__29956__i + 0]; ++G__29956__i;}
  params = new cljs.core.IndexedSeq(G__29956__a,0,null);
} 
return G__29955__delegate.call(this,params);};
G__29955.cljs$lang$maxFixedArity = 0;
G__29955.cljs$lang$applyTo = (function (arglist__29957){
var params = cljs.core.seq(arglist__29957);
return G__29955__delegate(params);
});
G__29955.cljs$core$IFn$_invoke$arity$variadic = G__29955__delegate;
return G__29955;
})()
], null)], null)], null)], null)], null);
app.core.on_navigate = (function app$core$on_navigate(new_match){
var old_match = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","current-route","app.core/current-route",10281556)], null));
if(cljs.core.truth_(new_match)){
var cs = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(old_match)),new_match);
var m = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cs);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","navigated","app.core/navigated",-476135584),m], null));
} else {
return null;
}
});
app.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(app.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
app.core.init_routes_BANG_ = (function app$core$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(app.core.router,app.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});
app.core.nav = (function app$core$nav(p__29933){
var map__29934 = p__29933;
var map__29934__$1 = cljs.core.__destructure_map(map__29934);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29934__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29934__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4652__auto__ = (function app$core$nav_$_iter__29935(s__29936){
return (new cljs.core.LazySeq(null,(function (){
var s__29936__$1 = s__29936;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29936__$1);
if(temp__5753__auto__){
var s__29936__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29936__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29936__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29938 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29937 = (0);
while(true){
if((i__29937 < size__4651__auto__)){
var route_name = cljs.core._nth(c__4650__auto__,i__29937);
var route = reitit.core.match_by_name(router,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
cljs.core.chunk_append(b__29938,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))))?"> ":null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),app.core.href.cljs$core$IFn$_invoke$arity$1(route_name)], null),text], null)], null));

var G__29958 = (i__29937 + (1));
i__29937 = G__29958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29938),app$core$nav_$_iter__29935(cljs.core.chunk_rest(s__29936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29938),null);
}
} else {
var route_name = cljs.core.first(s__29936__$2);
var route = reitit.core.match_by_name(router,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))))?"> ":null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),app.core.href.cljs$core$IFn$_invoke$arity$1(route_name)], null),text], null)], null),app$core$nav_$_iter__29935(cljs.core.rest(s__29936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(reitit.core.route_names(router));
})());
});
app.core.router_component = (function app$core$router_component(p__29939){
var map__29940 = p__29939;
var map__29940__$1 = cljs.core.__destructure_map(map__29940);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29940__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","current-route","app.core/current-route",10281556)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.nav,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),router,new cljs.core.Keyword(null,"current-route","current-route",2067529448),current_route], null)], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))], null):null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console-me","console-me",1219807358),(function (_,p__29941){
var vec__29942 = p__29941;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(1),null);
return console.log(msg);
}));
app.core.mount_root = (function app$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

app.core.init_routes_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.router_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),app.core.router], null)], null),document.getElementById("root"));
});
app.core.init = (function app$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","initialize-db","app.core/initialize-db",-1080380188)], null));

return app.core.mount_root();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
