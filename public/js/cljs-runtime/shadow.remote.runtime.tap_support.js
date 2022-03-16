goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37576,p__37577){
var map__37578 = p__37576;
var map__37578__$1 = cljs.core.__destructure_map(map__37578);
var svc = map__37578__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37579 = p__37577;
var map__37579__$1 = cljs.core.__destructure_map(map__37579);
var msg = map__37579__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37579__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37581,p__37582){
var map__37583 = p__37581;
var map__37583__$1 = cljs.core.__destructure_map(map__37583);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37584 = p__37582;
var map__37584__$1 = cljs.core.__destructure_map(map__37584);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37585,p__37586){
var map__37587 = p__37585;
var map__37587__$1 = cljs.core.__destructure_map(map__37587);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37588 = p__37586;
var map__37588__$1 = cljs.core.__destructure_map(map__37588);
var msg = map__37588__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37588__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37590,tid){
var map__37591 = p__37590;
var map__37591__$1 = cljs.core.__destructure_map(map__37591);
var svc = map__37591__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37591__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37600 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37601 = null;
var count__37602 = (0);
var i__37603 = (0);
while(true){
if((i__37603 < count__37602)){
var vec__37621 = chunk__37601.cljs$core$IIndexed$_nth$arity$2(null,i__37603);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37621,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37621,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37641 = seq__37600;
var G__37642 = chunk__37601;
var G__37643 = count__37602;
var G__37644 = (i__37603 + (1));
seq__37600 = G__37641;
chunk__37601 = G__37642;
count__37602 = G__37643;
i__37603 = G__37644;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37600);
if(temp__5753__auto__){
var seq__37600__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37600__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37600__$1);
var G__37646 = cljs.core.chunk_rest(seq__37600__$1);
var G__37647 = c__4679__auto__;
var G__37648 = cljs.core.count(c__4679__auto__);
var G__37649 = (0);
seq__37600 = G__37646;
chunk__37601 = G__37647;
count__37602 = G__37648;
i__37603 = G__37649;
continue;
} else {
var vec__37627 = cljs.core.first(seq__37600__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37650 = cljs.core.next(seq__37600__$1);
var G__37651 = null;
var G__37652 = (0);
var G__37653 = (0);
seq__37600 = G__37650;
chunk__37601 = G__37651;
count__37602 = G__37652;
i__37603 = G__37653;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37596_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37596_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37597_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37597_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37598_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37598_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37599_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37599_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37630){
var map__37631 = p__37630;
var map__37631__$1 = cljs.core.__destructure_map(map__37631);
var svc = map__37631__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37631__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37631__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
