goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__27958){
var map__27959 = p__27958;
var map__27959__$1 = cljs.core.__destructure_map(map__27959);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__27960_27992 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__27961_27993 = null;
var count__27962_27994 = (0);
var i__27963_27995 = (0);
while(true){
if((i__27963_27995 < count__27962_27994)){
var vec__27974_27996 = chunk__27961_27993.cljs$core$IIndexed$_nth$arity$2(null,i__27963_27995);
var k_27997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974_27996,(0),null);
var cb_27998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974_27996,(1),null);
try{var G__27978_27999 = cljs.core.deref(re_frame.trace.traces);
(cb_27998.cljs$core$IFn$_invoke$arity$1 ? cb_27998.cljs$core$IFn$_invoke$arity$1(G__27978_27999) : cb_27998.call(null,G__27978_27999));
}catch (e27977){var e_28000 = e27977;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27997,"while storing",cljs.core.deref(re_frame.trace.traces),e_28000], 0));
}

var G__28001 = seq__27960_27992;
var G__28002 = chunk__27961_27993;
var G__28003 = count__27962_27994;
var G__28004 = (i__27963_27995 + (1));
seq__27960_27992 = G__28001;
chunk__27961_27993 = G__28002;
count__27962_27994 = G__28003;
i__27963_27995 = G__28004;
continue;
} else {
var temp__5753__auto___28005 = cljs.core.seq(seq__27960_27992);
if(temp__5753__auto___28005){
var seq__27960_28006__$1 = temp__5753__auto___28005;
if(cljs.core.chunked_seq_QMARK_(seq__27960_28006__$1)){
var c__4679__auto___28007 = cljs.core.chunk_first(seq__27960_28006__$1);
var G__28008 = cljs.core.chunk_rest(seq__27960_28006__$1);
var G__28009 = c__4679__auto___28007;
var G__28010 = cljs.core.count(c__4679__auto___28007);
var G__28011 = (0);
seq__27960_27992 = G__28008;
chunk__27961_27993 = G__28009;
count__27962_27994 = G__28010;
i__27963_27995 = G__28011;
continue;
} else {
var vec__27979_28012 = cljs.core.first(seq__27960_28006__$1);
var k_28013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27979_28012,(0),null);
var cb_28014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27979_28012,(1),null);
try{var G__27983_28015 = cljs.core.deref(re_frame.trace.traces);
(cb_28014.cljs$core$IFn$_invoke$arity$1 ? cb_28014.cljs$core$IFn$_invoke$arity$1(G__27983_28015) : cb_28014.call(null,G__27983_28015));
}catch (e27982){var e_28016 = e27982;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_28013,"while storing",cljs.core.deref(re_frame.trace.traces),e_28016], 0));
}

var G__28017 = cljs.core.next(seq__27960_28006__$1);
var G__28018 = null;
var G__28019 = (0);
var G__28020 = (0);
seq__27960_27992 = G__28017;
chunk__27961_27993 = G__28018;
count__27962_27994 = G__28019;
i__27963_27995 = G__28020;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
