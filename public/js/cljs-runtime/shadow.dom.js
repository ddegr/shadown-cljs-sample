goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35203 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35203(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35204 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35204(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34506 = coll;
var G__34507 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34506,G__34507) : shadow.dom.lazy_native_coll_seq.call(null,G__34506,G__34507));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34528 = arguments.length;
switch (G__34528) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34535 = arguments.length;
switch (G__34535) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34541 = arguments.length;
switch (G__34541) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34552 = arguments.length;
switch (G__34552) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34565 = arguments.length;
switch (G__34565) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34578 = arguments.length;
switch (G__34578) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34585){if((e34585 instanceof Object)){
var e = e34585;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34585;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34594 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34595 = null;
var count__34596 = (0);
var i__34597 = (0);
while(true){
if((i__34597 < count__34596)){
var el = chunk__34595.cljs$core$IIndexed$_nth$arity$2(null,i__34597);
var handler_35211__$1 = ((function (seq__34594,chunk__34595,count__34596,i__34597,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34594,chunk__34595,count__34596,i__34597,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35211__$1);


var G__35212 = seq__34594;
var G__35213 = chunk__34595;
var G__35214 = count__34596;
var G__35215 = (i__34597 + (1));
seq__34594 = G__35212;
chunk__34595 = G__35213;
count__34596 = G__35214;
i__34597 = G__35215;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34594);
if(temp__5753__auto__){
var seq__34594__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34594__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34594__$1);
var G__35216 = cljs.core.chunk_rest(seq__34594__$1);
var G__35217 = c__4679__auto__;
var G__35218 = cljs.core.count(c__4679__auto__);
var G__35219 = (0);
seq__34594 = G__35216;
chunk__34595 = G__35217;
count__34596 = G__35218;
i__34597 = G__35219;
continue;
} else {
var el = cljs.core.first(seq__34594__$1);
var handler_35220__$1 = ((function (seq__34594,chunk__34595,count__34596,i__34597,el,seq__34594__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34594,chunk__34595,count__34596,i__34597,el,seq__34594__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35220__$1);


var G__35221 = cljs.core.next(seq__34594__$1);
var G__35222 = null;
var G__35223 = (0);
var G__35224 = (0);
seq__34594 = G__35221;
chunk__34595 = G__35222;
count__34596 = G__35223;
i__34597 = G__35224;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34615 = arguments.length;
switch (G__34615) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34623 = cljs.core.seq(events);
var chunk__34625 = null;
var count__34626 = (0);
var i__34627 = (0);
while(true){
if((i__34627 < count__34626)){
var vec__34642 = chunk__34625.cljs$core$IIndexed$_nth$arity$2(null,i__34627);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34642,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35226 = seq__34623;
var G__35227 = chunk__34625;
var G__35228 = count__34626;
var G__35229 = (i__34627 + (1));
seq__34623 = G__35226;
chunk__34625 = G__35227;
count__34626 = G__35228;
i__34627 = G__35229;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34623);
if(temp__5753__auto__){
var seq__34623__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34623__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34623__$1);
var G__35230 = cljs.core.chunk_rest(seq__34623__$1);
var G__35231 = c__4679__auto__;
var G__35232 = cljs.core.count(c__4679__auto__);
var G__35233 = (0);
seq__34623 = G__35230;
chunk__34625 = G__35231;
count__34626 = G__35232;
i__34627 = G__35233;
continue;
} else {
var vec__34648 = cljs.core.first(seq__34623__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34648,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35234 = cljs.core.next(seq__34623__$1);
var G__35235 = null;
var G__35236 = (0);
var G__35237 = (0);
seq__34623 = G__35234;
chunk__34625 = G__35235;
count__34626 = G__35236;
i__34627 = G__35237;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34655 = cljs.core.seq(styles);
var chunk__34656 = null;
var count__34657 = (0);
var i__34658 = (0);
while(true){
if((i__34658 < count__34657)){
var vec__34671 = chunk__34656.cljs$core$IIndexed$_nth$arity$2(null,i__34658);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34671,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34671,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35238 = seq__34655;
var G__35239 = chunk__34656;
var G__35240 = count__34657;
var G__35241 = (i__34658 + (1));
seq__34655 = G__35238;
chunk__34656 = G__35239;
count__34657 = G__35240;
i__34658 = G__35241;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34655);
if(temp__5753__auto__){
var seq__34655__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34655__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34655__$1);
var G__35242 = cljs.core.chunk_rest(seq__34655__$1);
var G__35243 = c__4679__auto__;
var G__35244 = cljs.core.count(c__4679__auto__);
var G__35245 = (0);
seq__34655 = G__35242;
chunk__34656 = G__35243;
count__34657 = G__35244;
i__34658 = G__35245;
continue;
} else {
var vec__34677 = cljs.core.first(seq__34655__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35246 = cljs.core.next(seq__34655__$1);
var G__35247 = null;
var G__35248 = (0);
var G__35249 = (0);
seq__34655 = G__35246;
chunk__34656 = G__35247;
count__34657 = G__35248;
i__34658 = G__35249;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34683_35250 = key;
var G__34683_35251__$1 = (((G__34683_35250 instanceof cljs.core.Keyword))?G__34683_35250.fqn:null);
switch (G__34683_35251__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35255 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_35255,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_35255,"aria-");
}
})())){
el.setAttribute(ks_35255,value);
} else {
(el[ks_35255] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34705){
var map__34706 = p__34705;
var map__34706__$1 = cljs.core.__destructure_map(map__34706);
var props = map__34706__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34707 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34707,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34707,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34707,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34711 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34711,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34711;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34714 = arguments.length;
switch (G__34714) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34717){
var vec__34718 = p__34717;
var seq__34719 = cljs.core.seq(vec__34718);
var first__34720 = cljs.core.first(seq__34719);
var seq__34719__$1 = cljs.core.next(seq__34719);
var nn = first__34720;
var first__34720__$1 = cljs.core.first(seq__34719__$1);
var seq__34719__$2 = cljs.core.next(seq__34719__$1);
var np = first__34720__$1;
var nc = seq__34719__$2;
var node = vec__34718;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34724 = nn;
var G__34725 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34724,G__34725) : create_fn.call(null,G__34724,G__34725));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34728 = nn;
var G__34729 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34728,G__34729) : create_fn.call(null,G__34728,G__34729));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34732 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34732,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34732,(1),null);
var seq__34737_35257 = cljs.core.seq(node_children);
var chunk__34738_35258 = null;
var count__34739_35259 = (0);
var i__34740_35260 = (0);
while(true){
if((i__34740_35260 < count__34739_35259)){
var child_struct_35261 = chunk__34738_35258.cljs$core$IIndexed$_nth$arity$2(null,i__34740_35260);
var children_35262 = shadow.dom.dom_node(child_struct_35261);
if(cljs.core.seq_QMARK_(children_35262)){
var seq__34776_35263 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35262));
var chunk__34778_35264 = null;
var count__34779_35265 = (0);
var i__34780_35266 = (0);
while(true){
if((i__34780_35266 < count__34779_35265)){
var child_35270 = chunk__34778_35264.cljs$core$IIndexed$_nth$arity$2(null,i__34780_35266);
if(cljs.core.truth_(child_35270)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35270);


var G__35271 = seq__34776_35263;
var G__35272 = chunk__34778_35264;
var G__35273 = count__34779_35265;
var G__35274 = (i__34780_35266 + (1));
seq__34776_35263 = G__35271;
chunk__34778_35264 = G__35272;
count__34779_35265 = G__35273;
i__34780_35266 = G__35274;
continue;
} else {
var G__35275 = seq__34776_35263;
var G__35276 = chunk__34778_35264;
var G__35277 = count__34779_35265;
var G__35278 = (i__34780_35266 + (1));
seq__34776_35263 = G__35275;
chunk__34778_35264 = G__35276;
count__34779_35265 = G__35277;
i__34780_35266 = G__35278;
continue;
}
} else {
var temp__5753__auto___35279 = cljs.core.seq(seq__34776_35263);
if(temp__5753__auto___35279){
var seq__34776_35280__$1 = temp__5753__auto___35279;
if(cljs.core.chunked_seq_QMARK_(seq__34776_35280__$1)){
var c__4679__auto___35281 = cljs.core.chunk_first(seq__34776_35280__$1);
var G__35282 = cljs.core.chunk_rest(seq__34776_35280__$1);
var G__35283 = c__4679__auto___35281;
var G__35284 = cljs.core.count(c__4679__auto___35281);
var G__35285 = (0);
seq__34776_35263 = G__35282;
chunk__34778_35264 = G__35283;
count__34779_35265 = G__35284;
i__34780_35266 = G__35285;
continue;
} else {
var child_35286 = cljs.core.first(seq__34776_35280__$1);
if(cljs.core.truth_(child_35286)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35286);


var G__35287 = cljs.core.next(seq__34776_35280__$1);
var G__35288 = null;
var G__35289 = (0);
var G__35290 = (0);
seq__34776_35263 = G__35287;
chunk__34778_35264 = G__35288;
count__34779_35265 = G__35289;
i__34780_35266 = G__35290;
continue;
} else {
var G__35291 = cljs.core.next(seq__34776_35280__$1);
var G__35292 = null;
var G__35293 = (0);
var G__35294 = (0);
seq__34776_35263 = G__35291;
chunk__34778_35264 = G__35292;
count__34779_35265 = G__35293;
i__34780_35266 = G__35294;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35262);
}


var G__35295 = seq__34737_35257;
var G__35296 = chunk__34738_35258;
var G__35297 = count__34739_35259;
var G__35298 = (i__34740_35260 + (1));
seq__34737_35257 = G__35295;
chunk__34738_35258 = G__35296;
count__34739_35259 = G__35297;
i__34740_35260 = G__35298;
continue;
} else {
var temp__5753__auto___35299 = cljs.core.seq(seq__34737_35257);
if(temp__5753__auto___35299){
var seq__34737_35300__$1 = temp__5753__auto___35299;
if(cljs.core.chunked_seq_QMARK_(seq__34737_35300__$1)){
var c__4679__auto___35301 = cljs.core.chunk_first(seq__34737_35300__$1);
var G__35302 = cljs.core.chunk_rest(seq__34737_35300__$1);
var G__35303 = c__4679__auto___35301;
var G__35304 = cljs.core.count(c__4679__auto___35301);
var G__35305 = (0);
seq__34737_35257 = G__35302;
chunk__34738_35258 = G__35303;
count__34739_35259 = G__35304;
i__34740_35260 = G__35305;
continue;
} else {
var child_struct_35306 = cljs.core.first(seq__34737_35300__$1);
var children_35307 = shadow.dom.dom_node(child_struct_35306);
if(cljs.core.seq_QMARK_(children_35307)){
var seq__34796_35308 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35307));
var chunk__34798_35309 = null;
var count__34799_35310 = (0);
var i__34800_35311 = (0);
while(true){
if((i__34800_35311 < count__34799_35310)){
var child_35312 = chunk__34798_35309.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35311);
if(cljs.core.truth_(child_35312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35312);


var G__35313 = seq__34796_35308;
var G__35314 = chunk__34798_35309;
var G__35315 = count__34799_35310;
var G__35316 = (i__34800_35311 + (1));
seq__34796_35308 = G__35313;
chunk__34798_35309 = G__35314;
count__34799_35310 = G__35315;
i__34800_35311 = G__35316;
continue;
} else {
var G__35317 = seq__34796_35308;
var G__35318 = chunk__34798_35309;
var G__35319 = count__34799_35310;
var G__35320 = (i__34800_35311 + (1));
seq__34796_35308 = G__35317;
chunk__34798_35309 = G__35318;
count__34799_35310 = G__35319;
i__34800_35311 = G__35320;
continue;
}
} else {
var temp__5753__auto___35321__$1 = cljs.core.seq(seq__34796_35308);
if(temp__5753__auto___35321__$1){
var seq__34796_35322__$1 = temp__5753__auto___35321__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34796_35322__$1)){
var c__4679__auto___35323 = cljs.core.chunk_first(seq__34796_35322__$1);
var G__35324 = cljs.core.chunk_rest(seq__34796_35322__$1);
var G__35325 = c__4679__auto___35323;
var G__35326 = cljs.core.count(c__4679__auto___35323);
var G__35327 = (0);
seq__34796_35308 = G__35324;
chunk__34798_35309 = G__35325;
count__34799_35310 = G__35326;
i__34800_35311 = G__35327;
continue;
} else {
var child_35328 = cljs.core.first(seq__34796_35322__$1);
if(cljs.core.truth_(child_35328)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35328);


var G__35329 = cljs.core.next(seq__34796_35322__$1);
var G__35330 = null;
var G__35331 = (0);
var G__35332 = (0);
seq__34796_35308 = G__35329;
chunk__34798_35309 = G__35330;
count__34799_35310 = G__35331;
i__34800_35311 = G__35332;
continue;
} else {
var G__35333 = cljs.core.next(seq__34796_35322__$1);
var G__35334 = null;
var G__35335 = (0);
var G__35336 = (0);
seq__34796_35308 = G__35333;
chunk__34798_35309 = G__35334;
count__34799_35310 = G__35335;
i__34800_35311 = G__35336;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35307);
}


var G__35337 = cljs.core.next(seq__34737_35300__$1);
var G__35338 = null;
var G__35339 = (0);
var G__35340 = (0);
seq__34737_35257 = G__35337;
chunk__34738_35258 = G__35338;
count__34739_35259 = G__35339;
i__34740_35260 = G__35340;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34820 = cljs.core.seq(node);
var chunk__34821 = null;
var count__34822 = (0);
var i__34823 = (0);
while(true){
if((i__34823 < count__34822)){
var n = chunk__34821.cljs$core$IIndexed$_nth$arity$2(null,i__34823);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35341 = seq__34820;
var G__35342 = chunk__34821;
var G__35343 = count__34822;
var G__35344 = (i__34823 + (1));
seq__34820 = G__35341;
chunk__34821 = G__35342;
count__34822 = G__35343;
i__34823 = G__35344;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34820);
if(temp__5753__auto__){
var seq__34820__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34820__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34820__$1);
var G__35345 = cljs.core.chunk_rest(seq__34820__$1);
var G__35346 = c__4679__auto__;
var G__35347 = cljs.core.count(c__4679__auto__);
var G__35348 = (0);
seq__34820 = G__35345;
chunk__34821 = G__35346;
count__34822 = G__35347;
i__34823 = G__35348;
continue;
} else {
var n = cljs.core.first(seq__34820__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35349 = cljs.core.next(seq__34820__$1);
var G__35350 = null;
var G__35351 = (0);
var G__35352 = (0);
seq__34820 = G__35349;
chunk__34821 = G__35350;
count__34822 = G__35351;
i__34823 = G__35352;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34830 = arguments.length;
switch (G__34830) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34832 = arguments.length;
switch (G__34832) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34844 = arguments.length;
switch (G__34844) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35356 = arguments.length;
var i__4865__auto___35357 = (0);
while(true){
if((i__4865__auto___35357 < len__4864__auto___35356)){
args__4870__auto__.push((arguments[i__4865__auto___35357]));

var G__35358 = (i__4865__auto___35357 + (1));
i__4865__auto___35357 = G__35358;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34870_35359 = cljs.core.seq(nodes);
var chunk__34871_35360 = null;
var count__34872_35361 = (0);
var i__34873_35362 = (0);
while(true){
if((i__34873_35362 < count__34872_35361)){
var node_35364 = chunk__34871_35360.cljs$core$IIndexed$_nth$arity$2(null,i__34873_35362);
fragment.appendChild(shadow.dom._to_dom(node_35364));


var G__35365 = seq__34870_35359;
var G__35366 = chunk__34871_35360;
var G__35367 = count__34872_35361;
var G__35368 = (i__34873_35362 + (1));
seq__34870_35359 = G__35365;
chunk__34871_35360 = G__35366;
count__34872_35361 = G__35367;
i__34873_35362 = G__35368;
continue;
} else {
var temp__5753__auto___35369 = cljs.core.seq(seq__34870_35359);
if(temp__5753__auto___35369){
var seq__34870_35370__$1 = temp__5753__auto___35369;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35370__$1)){
var c__4679__auto___35371 = cljs.core.chunk_first(seq__34870_35370__$1);
var G__35372 = cljs.core.chunk_rest(seq__34870_35370__$1);
var G__35373 = c__4679__auto___35371;
var G__35374 = cljs.core.count(c__4679__auto___35371);
var G__35375 = (0);
seq__34870_35359 = G__35372;
chunk__34871_35360 = G__35373;
count__34872_35361 = G__35374;
i__34873_35362 = G__35375;
continue;
} else {
var node_35376 = cljs.core.first(seq__34870_35370__$1);
fragment.appendChild(shadow.dom._to_dom(node_35376));


var G__35377 = cljs.core.next(seq__34870_35370__$1);
var G__35378 = null;
var G__35379 = (0);
var G__35380 = (0);
seq__34870_35359 = G__35377;
chunk__34871_35360 = G__35378;
count__34872_35361 = G__35379;
i__34873_35362 = G__35380;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34863){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34863));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34879_35381 = cljs.core.seq(scripts);
var chunk__34880_35382 = null;
var count__34881_35383 = (0);
var i__34882_35384 = (0);
while(true){
if((i__34882_35384 < count__34881_35383)){
var vec__34890_35386 = chunk__34880_35382.cljs$core$IIndexed$_nth$arity$2(null,i__34882_35384);
var script_tag_35387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35386,(0),null);
var script_body_35388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35386,(1),null);
eval(script_body_35388);


var G__35390 = seq__34879_35381;
var G__35391 = chunk__34880_35382;
var G__35392 = count__34881_35383;
var G__35393 = (i__34882_35384 + (1));
seq__34879_35381 = G__35390;
chunk__34880_35382 = G__35391;
count__34881_35383 = G__35392;
i__34882_35384 = G__35393;
continue;
} else {
var temp__5753__auto___35394 = cljs.core.seq(seq__34879_35381);
if(temp__5753__auto___35394){
var seq__34879_35395__$1 = temp__5753__auto___35394;
if(cljs.core.chunked_seq_QMARK_(seq__34879_35395__$1)){
var c__4679__auto___35396 = cljs.core.chunk_first(seq__34879_35395__$1);
var G__35397 = cljs.core.chunk_rest(seq__34879_35395__$1);
var G__35398 = c__4679__auto___35396;
var G__35399 = cljs.core.count(c__4679__auto___35396);
var G__35400 = (0);
seq__34879_35381 = G__35397;
chunk__34880_35382 = G__35398;
count__34881_35383 = G__35399;
i__34882_35384 = G__35400;
continue;
} else {
var vec__34893_35401 = cljs.core.first(seq__34879_35395__$1);
var script_tag_35402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893_35401,(0),null);
var script_body_35403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893_35401,(1),null);
eval(script_body_35403);


var G__35404 = cljs.core.next(seq__34879_35395__$1);
var G__35405 = null;
var G__35406 = (0);
var G__35407 = (0);
seq__34879_35381 = G__35404;
chunk__34880_35382 = G__35405;
count__34881_35383 = G__35406;
i__34882_35384 = G__35407;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34896){
var vec__34897 = p__34896;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34897,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34897,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34912 = arguments.length;
switch (G__34912) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34928 = cljs.core.seq(style_keys);
var chunk__34929 = null;
var count__34930 = (0);
var i__34931 = (0);
while(true){
if((i__34931 < count__34930)){
var it = chunk__34929.cljs$core$IIndexed$_nth$arity$2(null,i__34931);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35409 = seq__34928;
var G__35410 = chunk__34929;
var G__35411 = count__34930;
var G__35412 = (i__34931 + (1));
seq__34928 = G__35409;
chunk__34929 = G__35410;
count__34930 = G__35411;
i__34931 = G__35412;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34928);
if(temp__5753__auto__){
var seq__34928__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34928__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34928__$1);
var G__35413 = cljs.core.chunk_rest(seq__34928__$1);
var G__35414 = c__4679__auto__;
var G__35415 = cljs.core.count(c__4679__auto__);
var G__35416 = (0);
seq__34928 = G__35413;
chunk__34929 = G__35414;
count__34930 = G__35415;
i__34931 = G__35416;
continue;
} else {
var it = cljs.core.first(seq__34928__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35417 = cljs.core.next(seq__34928__$1);
var G__35418 = null;
var G__35419 = (0);
var G__35420 = (0);
seq__34928 = G__35417;
chunk__34929 = G__35418;
count__34930 = G__35419;
i__34931 = G__35420;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34940,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34947 = k34940;
var G__34947__$1 = (((G__34947 instanceof cljs.core.Keyword))?G__34947.fqn:null);
switch (G__34947__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34940,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34953){
var vec__34955 = p__34953;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34939){
var self__ = this;
var G__34939__$1 = this;
return (new cljs.core.RecordIter((0),G__34939__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34941,other34942){
var self__ = this;
var this34941__$1 = this;
return (((!((other34942 == null)))) && ((((this34941__$1.constructor === other34942.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34941__$1.x,other34942.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34941__$1.y,other34942.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34941__$1.__extmap,other34942.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34940){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34976 = k34940;
var G__34976__$1 = (((G__34976 instanceof cljs.core.Keyword))?G__34976.fqn:null);
switch (G__34976__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34940);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34939){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34978 = cljs.core.keyword_identical_QMARK_;
var expr__34979 = k__4511__auto__;
if(cljs.core.truth_((pred__34978.cljs$core$IFn$_invoke$arity$2 ? pred__34978.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34979) : pred__34978.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34979)))){
return (new shadow.dom.Coordinate(G__34939,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34978.cljs$core$IFn$_invoke$arity$2 ? pred__34978.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34979) : pred__34978.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34979)))){
return (new shadow.dom.Coordinate(self__.x,G__34939,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34939),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34939){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34939,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34944){
var extmap__4542__auto__ = (function (){var G__34991 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34944,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34944)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34991);
} else {
return G__34991;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34944),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34944),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35001,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35012 = k35001;
var G__35012__$1 = (((G__35012 instanceof cljs.core.Keyword))?G__35012.fqn:null);
switch (G__35012__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35001,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35013){
var vec__35014 = p__35013;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35014,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35014,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35000){
var self__ = this;
var G__35000__$1 = this;
return (new cljs.core.RecordIter((0),G__35000__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35002,other35003){
var self__ = this;
var this35002__$1 = this;
return (((!((other35003 == null)))) && ((((this35002__$1.constructor === other35003.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35002__$1.w,other35003.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35002__$1.h,other35003.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35002__$1.__extmap,other35003.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35001){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35017 = k35001;
var G__35017__$1 = (((G__35017 instanceof cljs.core.Keyword))?G__35017.fqn:null);
switch (G__35017__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35001);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35000){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35019 = cljs.core.keyword_identical_QMARK_;
var expr__35020 = k__4511__auto__;
if(cljs.core.truth_((pred__35019.cljs$core$IFn$_invoke$arity$2 ? pred__35019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35020) : pred__35019.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35020)))){
return (new shadow.dom.Size(G__35000,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35019.cljs$core$IFn$_invoke$arity$2 ? pred__35019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35020) : pred__35019.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35020)))){
return (new shadow.dom.Size(self__.w,G__35000,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35000),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35000){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35000,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35007){
var extmap__4542__auto__ = (function (){var G__35033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35007,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35007)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35033);
} else {
return G__35033;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35007),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35007),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__35434 = (i + (1));
var G__35435 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35434;
ret = G__35435;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35061){
var vec__35062 = p__35061;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35062,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35062,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35070 = arguments.length;
switch (G__35070) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35441 = ps;
var G__35442 = (i + (1));
el__$1 = G__35441;
i = G__35442;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35134 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35137_35443 = cljs.core.seq(props);
var chunk__35138_35444 = null;
var count__35139_35445 = (0);
var i__35140_35446 = (0);
while(true){
if((i__35140_35446 < count__35139_35445)){
var vec__35147_35447 = chunk__35138_35444.cljs$core$IIndexed$_nth$arity$2(null,i__35140_35446);
var k_35448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35447,(0),null);
var v_35449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35447,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35448);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35448),v_35449);


var G__35450 = seq__35137_35443;
var G__35451 = chunk__35138_35444;
var G__35452 = count__35139_35445;
var G__35453 = (i__35140_35446 + (1));
seq__35137_35443 = G__35450;
chunk__35138_35444 = G__35451;
count__35139_35445 = G__35452;
i__35140_35446 = G__35453;
continue;
} else {
var temp__5753__auto___35454 = cljs.core.seq(seq__35137_35443);
if(temp__5753__auto___35454){
var seq__35137_35455__$1 = temp__5753__auto___35454;
if(cljs.core.chunked_seq_QMARK_(seq__35137_35455__$1)){
var c__4679__auto___35456 = cljs.core.chunk_first(seq__35137_35455__$1);
var G__35457 = cljs.core.chunk_rest(seq__35137_35455__$1);
var G__35458 = c__4679__auto___35456;
var G__35459 = cljs.core.count(c__4679__auto___35456);
var G__35460 = (0);
seq__35137_35443 = G__35457;
chunk__35138_35444 = G__35458;
count__35139_35445 = G__35459;
i__35140_35446 = G__35460;
continue;
} else {
var vec__35150_35461 = cljs.core.first(seq__35137_35455__$1);
var k_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35150_35461,(0),null);
var v_35463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35150_35461,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35462);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35462),v_35463);


var G__35464 = cljs.core.next(seq__35137_35455__$1);
var G__35465 = null;
var G__35466 = (0);
var G__35467 = (0);
seq__35137_35443 = G__35464;
chunk__35138_35444 = G__35465;
count__35139_35445 = G__35466;
i__35140_35446 = G__35467;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35154 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154,(1),null);
var seq__35157_35468 = cljs.core.seq(node_children);
var chunk__35159_35469 = null;
var count__35160_35470 = (0);
var i__35161_35471 = (0);
while(true){
if((i__35161_35471 < count__35160_35470)){
var child_struct_35472 = chunk__35159_35469.cljs$core$IIndexed$_nth$arity$2(null,i__35161_35471);
if((!((child_struct_35472 == null)))){
if(typeof child_struct_35472 === 'string'){
var text_35473 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35473),child_struct_35472].join(''));
} else {
var children_35474 = shadow.dom.svg_node(child_struct_35472);
if(cljs.core.seq_QMARK_(children_35474)){
var seq__35175_35475 = cljs.core.seq(children_35474);
var chunk__35177_35476 = null;
var count__35178_35477 = (0);
var i__35179_35478 = (0);
while(true){
if((i__35179_35478 < count__35178_35477)){
var child_35479 = chunk__35177_35476.cljs$core$IIndexed$_nth$arity$2(null,i__35179_35478);
if(cljs.core.truth_(child_35479)){
node.appendChild(child_35479);


var G__35480 = seq__35175_35475;
var G__35481 = chunk__35177_35476;
var G__35482 = count__35178_35477;
var G__35483 = (i__35179_35478 + (1));
seq__35175_35475 = G__35480;
chunk__35177_35476 = G__35481;
count__35178_35477 = G__35482;
i__35179_35478 = G__35483;
continue;
} else {
var G__35484 = seq__35175_35475;
var G__35485 = chunk__35177_35476;
var G__35486 = count__35178_35477;
var G__35487 = (i__35179_35478 + (1));
seq__35175_35475 = G__35484;
chunk__35177_35476 = G__35485;
count__35178_35477 = G__35486;
i__35179_35478 = G__35487;
continue;
}
} else {
var temp__5753__auto___35488 = cljs.core.seq(seq__35175_35475);
if(temp__5753__auto___35488){
var seq__35175_35489__$1 = temp__5753__auto___35488;
if(cljs.core.chunked_seq_QMARK_(seq__35175_35489__$1)){
var c__4679__auto___35490 = cljs.core.chunk_first(seq__35175_35489__$1);
var G__35491 = cljs.core.chunk_rest(seq__35175_35489__$1);
var G__35492 = c__4679__auto___35490;
var G__35493 = cljs.core.count(c__4679__auto___35490);
var G__35494 = (0);
seq__35175_35475 = G__35491;
chunk__35177_35476 = G__35492;
count__35178_35477 = G__35493;
i__35179_35478 = G__35494;
continue;
} else {
var child_35495 = cljs.core.first(seq__35175_35489__$1);
if(cljs.core.truth_(child_35495)){
node.appendChild(child_35495);


var G__35496 = cljs.core.next(seq__35175_35489__$1);
var G__35497 = null;
var G__35498 = (0);
var G__35499 = (0);
seq__35175_35475 = G__35496;
chunk__35177_35476 = G__35497;
count__35178_35477 = G__35498;
i__35179_35478 = G__35499;
continue;
} else {
var G__35500 = cljs.core.next(seq__35175_35489__$1);
var G__35501 = null;
var G__35502 = (0);
var G__35503 = (0);
seq__35175_35475 = G__35500;
chunk__35177_35476 = G__35501;
count__35178_35477 = G__35502;
i__35179_35478 = G__35503;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35474);
}
}


var G__35504 = seq__35157_35468;
var G__35505 = chunk__35159_35469;
var G__35506 = count__35160_35470;
var G__35507 = (i__35161_35471 + (1));
seq__35157_35468 = G__35504;
chunk__35159_35469 = G__35505;
count__35160_35470 = G__35506;
i__35161_35471 = G__35507;
continue;
} else {
var G__35508 = seq__35157_35468;
var G__35509 = chunk__35159_35469;
var G__35510 = count__35160_35470;
var G__35511 = (i__35161_35471 + (1));
seq__35157_35468 = G__35508;
chunk__35159_35469 = G__35509;
count__35160_35470 = G__35510;
i__35161_35471 = G__35511;
continue;
}
} else {
var temp__5753__auto___35512 = cljs.core.seq(seq__35157_35468);
if(temp__5753__auto___35512){
var seq__35157_35513__$1 = temp__5753__auto___35512;
if(cljs.core.chunked_seq_QMARK_(seq__35157_35513__$1)){
var c__4679__auto___35514 = cljs.core.chunk_first(seq__35157_35513__$1);
var G__35515 = cljs.core.chunk_rest(seq__35157_35513__$1);
var G__35516 = c__4679__auto___35514;
var G__35517 = cljs.core.count(c__4679__auto___35514);
var G__35518 = (0);
seq__35157_35468 = G__35515;
chunk__35159_35469 = G__35516;
count__35160_35470 = G__35517;
i__35161_35471 = G__35518;
continue;
} else {
var child_struct_35519 = cljs.core.first(seq__35157_35513__$1);
if((!((child_struct_35519 == null)))){
if(typeof child_struct_35519 === 'string'){
var text_35520 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35520),child_struct_35519].join(''));
} else {
var children_35521 = shadow.dom.svg_node(child_struct_35519);
if(cljs.core.seq_QMARK_(children_35521)){
var seq__35181_35522 = cljs.core.seq(children_35521);
var chunk__35183_35523 = null;
var count__35184_35524 = (0);
var i__35185_35525 = (0);
while(true){
if((i__35185_35525 < count__35184_35524)){
var child_35526 = chunk__35183_35523.cljs$core$IIndexed$_nth$arity$2(null,i__35185_35525);
if(cljs.core.truth_(child_35526)){
node.appendChild(child_35526);


var G__35527 = seq__35181_35522;
var G__35528 = chunk__35183_35523;
var G__35529 = count__35184_35524;
var G__35530 = (i__35185_35525 + (1));
seq__35181_35522 = G__35527;
chunk__35183_35523 = G__35528;
count__35184_35524 = G__35529;
i__35185_35525 = G__35530;
continue;
} else {
var G__35531 = seq__35181_35522;
var G__35532 = chunk__35183_35523;
var G__35533 = count__35184_35524;
var G__35534 = (i__35185_35525 + (1));
seq__35181_35522 = G__35531;
chunk__35183_35523 = G__35532;
count__35184_35524 = G__35533;
i__35185_35525 = G__35534;
continue;
}
} else {
var temp__5753__auto___35535__$1 = cljs.core.seq(seq__35181_35522);
if(temp__5753__auto___35535__$1){
var seq__35181_35536__$1 = temp__5753__auto___35535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35181_35536__$1)){
var c__4679__auto___35537 = cljs.core.chunk_first(seq__35181_35536__$1);
var G__35538 = cljs.core.chunk_rest(seq__35181_35536__$1);
var G__35539 = c__4679__auto___35537;
var G__35540 = cljs.core.count(c__4679__auto___35537);
var G__35541 = (0);
seq__35181_35522 = G__35538;
chunk__35183_35523 = G__35539;
count__35184_35524 = G__35540;
i__35185_35525 = G__35541;
continue;
} else {
var child_35542 = cljs.core.first(seq__35181_35536__$1);
if(cljs.core.truth_(child_35542)){
node.appendChild(child_35542);


var G__35543 = cljs.core.next(seq__35181_35536__$1);
var G__35544 = null;
var G__35545 = (0);
var G__35546 = (0);
seq__35181_35522 = G__35543;
chunk__35183_35523 = G__35544;
count__35184_35524 = G__35545;
i__35185_35525 = G__35546;
continue;
} else {
var G__35547 = cljs.core.next(seq__35181_35536__$1);
var G__35548 = null;
var G__35549 = (0);
var G__35550 = (0);
seq__35181_35522 = G__35547;
chunk__35183_35523 = G__35548;
count__35184_35524 = G__35549;
i__35185_35525 = G__35550;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35521);
}
}


var G__35551 = cljs.core.next(seq__35157_35513__$1);
var G__35552 = null;
var G__35553 = (0);
var G__35554 = (0);
seq__35157_35468 = G__35551;
chunk__35159_35469 = G__35552;
count__35160_35470 = G__35553;
i__35161_35471 = G__35554;
continue;
} else {
var G__35555 = cljs.core.next(seq__35157_35513__$1);
var G__35556 = null;
var G__35557 = (0);
var G__35558 = (0);
seq__35157_35468 = G__35555;
chunk__35159_35469 = G__35556;
count__35160_35470 = G__35557;
i__35161_35471 = G__35558;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35559 = arguments.length;
var i__4865__auto___35564 = (0);
while(true){
if((i__4865__auto___35564 < len__4864__auto___35559)){
args__4870__auto__.push((arguments[i__4865__auto___35564]));

var G__35565 = (i__4865__auto___35564 + (1));
i__4865__auto___35564 = G__35565;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35187){
var G__35188 = cljs.core.first(seq35187);
var seq35187__$1 = cljs.core.next(seq35187);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35188,seq35187__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35190 = arguments.length;
switch (G__35190) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32882__auto___35567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_35195){
var state_val_35196 = (state_35195[(1)]);
if((state_val_35196 === (1))){
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35195__$1,(2),once_or_cleanup);
} else {
if((state_val_35196 === (2))){
var inst_35192 = (state_35195[(2)]);
var inst_35193 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35195__$1 = (function (){var statearr_35197 = state_35195;
(statearr_35197[(7)] = inst_35192);

return statearr_35197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35195__$1,inst_35193);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32814__auto__ = null;
var shadow$dom$state_machine__32814__auto____0 = (function (){
var statearr_35198 = [null,null,null,null,null,null,null,null];
(statearr_35198[(0)] = shadow$dom$state_machine__32814__auto__);

(statearr_35198[(1)] = (1));

return statearr_35198;
});
var shadow$dom$state_machine__32814__auto____1 = (function (state_35195){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_35195);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e35199){var ex__32817__auto__ = e35199;
var statearr_35200_35574 = state_35195;
(statearr_35200_35574[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_35195[(4)]))){
var statearr_35201_35575 = state_35195;
(statearr_35201_35575[(1)] = cljs.core.first((state_35195[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35576 = state_35195;
state_35195 = G__35576;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
shadow$dom$state_machine__32814__auto__ = function(state_35195){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32814__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32814__auto____1.call(this,state_35195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32814__auto____0;
shadow$dom$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32814__auto____1;
return shadow$dom$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_35202 = f__32883__auto__();
(statearr_35202[(6)] = c__32882__auto___35567);

return statearr_35202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
