goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__28259 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28260 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28260);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___28357 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___28357)){
var new_db_28358 = temp__5753__auto___28357;
var fexpr__28265_28359 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28265_28359.cljs$core$IFn$_invoke$arity$1 ? fexpr__28265_28359.cljs$core$IFn$_invoke$arity$1(new_db_28358) : fexpr__28265_28359.call(null,new_db_28358));
} else {
}

var seq__28267 = cljs.core.seq(effects_without_db);
var chunk__28268 = null;
var count__28269 = (0);
var i__28270 = (0);
while(true){
if((i__28270 < count__28269)){
var vec__28280 = chunk__28268.cljs$core$IIndexed$_nth$arity$2(null,i__28270);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(1),null);
var temp__5751__auto___28360 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28360)){
var effect_fn_28361 = temp__5751__auto___28360;
(effect_fn_28361.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28361.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28361.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28362 = seq__28267;
var G__28363 = chunk__28268;
var G__28364 = count__28269;
var G__28365 = (i__28270 + (1));
seq__28267 = G__28362;
chunk__28268 = G__28363;
count__28269 = G__28364;
i__28270 = G__28365;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28267);
if(temp__5753__auto__){
var seq__28267__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28267__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28267__$1);
var G__28366 = cljs.core.chunk_rest(seq__28267__$1);
var G__28367 = c__4679__auto__;
var G__28368 = cljs.core.count(c__4679__auto__);
var G__28369 = (0);
seq__28267 = G__28366;
chunk__28268 = G__28367;
count__28269 = G__28368;
i__28270 = G__28369;
continue;
} else {
var vec__28289 = cljs.core.first(seq__28267__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28289,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28289,(1),null);
var temp__5751__auto___28370 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28370)){
var effect_fn_28371 = temp__5751__auto___28370;
(effect_fn_28371.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28371.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28371.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28372 = cljs.core.next(seq__28267__$1);
var G__28373 = null;
var G__28374 = (0);
var G__28375 = (0);
seq__28267 = G__28372;
chunk__28268 = G__28373;
count__28269 = G__28374;
i__28270 = G__28375;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__27936__auto___28376 = re_frame.interop.now();
var duration__27937__auto___28377 = (end__27936__auto___28376 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27937__auto___28377,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__27936__auto___28376);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28259);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___28378 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___28378)){
var new_db_28379 = temp__5753__auto___28378;
var fexpr__28293_28380 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28293_28380.cljs$core$IFn$_invoke$arity$1 ? fexpr__28293_28380.cljs$core$IFn$_invoke$arity$1(new_db_28379) : fexpr__28293_28380.call(null,new_db_28379));
} else {
}

var seq__28294 = cljs.core.seq(effects_without_db);
var chunk__28295 = null;
var count__28296 = (0);
var i__28297 = (0);
while(true){
if((i__28297 < count__28296)){
var vec__28305 = chunk__28295.cljs$core$IIndexed$_nth$arity$2(null,i__28297);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(1),null);
var temp__5751__auto___28381 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28381)){
var effect_fn_28382 = temp__5751__auto___28381;
(effect_fn_28382.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28382.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28382.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28383 = seq__28294;
var G__28384 = chunk__28295;
var G__28385 = count__28296;
var G__28386 = (i__28297 + (1));
seq__28294 = G__28383;
chunk__28295 = G__28384;
count__28296 = G__28385;
i__28297 = G__28386;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28294);
if(temp__5753__auto__){
var seq__28294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28294__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28294__$1);
var G__28389 = cljs.core.chunk_rest(seq__28294__$1);
var G__28390 = c__4679__auto__;
var G__28391 = cljs.core.count(c__4679__auto__);
var G__28392 = (0);
seq__28294 = G__28389;
chunk__28295 = G__28390;
count__28296 = G__28391;
i__28297 = G__28392;
continue;
} else {
var vec__28308 = cljs.core.first(seq__28294__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(1),null);
var temp__5751__auto___28393 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28393)){
var effect_fn_28394 = temp__5751__auto___28393;
(effect_fn_28394.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28394.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28394.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28395 = cljs.core.next(seq__28294__$1);
var G__28396 = null;
var G__28397 = (0);
var G__28398 = (0);
seq__28294 = G__28395;
chunk__28295 = G__28396;
count__28296 = G__28397;
i__28297 = G__28398;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__28311){
var map__28312 = p__28311;
var map__28312__$1 = cljs.core.__destructure_map(map__28312);
var effect = map__28312__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28312__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28312__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__28314 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28315 = null;
var count__28316 = (0);
var i__28317 = (0);
while(true){
if((i__28317 < count__28316)){
var effect = chunk__28315.cljs$core$IIndexed$_nth$arity$2(null,i__28317);
re_frame.fx.dispatch_later(effect);


var G__28399 = seq__28314;
var G__28400 = chunk__28315;
var G__28401 = count__28316;
var G__28402 = (i__28317 + (1));
seq__28314 = G__28399;
chunk__28315 = G__28400;
count__28316 = G__28401;
i__28317 = G__28402;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28314);
if(temp__5753__auto__){
var seq__28314__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28314__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28314__$1);
var G__28403 = cljs.core.chunk_rest(seq__28314__$1);
var G__28404 = c__4679__auto__;
var G__28405 = cljs.core.count(c__4679__auto__);
var G__28406 = (0);
seq__28314 = G__28403;
chunk__28315 = G__28404;
count__28316 = G__28405;
i__28317 = G__28406;
continue;
} else {
var effect = cljs.core.first(seq__28314__$1);
re_frame.fx.dispatch_later(effect);


var G__28407 = cljs.core.next(seq__28314__$1);
var G__28408 = null;
var G__28409 = (0);
var G__28410 = (0);
seq__28314 = G__28407;
chunk__28315 = G__28408;
count__28316 = G__28409;
i__28317 = G__28410;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__28333 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28334 = null;
var count__28335 = (0);
var i__28336 = (0);
while(true){
if((i__28336 < count__28335)){
var vec__28343 = chunk__28334.cljs$core$IIndexed$_nth$arity$2(null,i__28336);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28343,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___28411 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28411)){
var effect_fn_28412 = temp__5751__auto___28411;
(effect_fn_28412.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28412.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28412.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28413 = seq__28333;
var G__28414 = chunk__28334;
var G__28415 = count__28335;
var G__28416 = (i__28336 + (1));
seq__28333 = G__28413;
chunk__28334 = G__28414;
count__28335 = G__28415;
i__28336 = G__28416;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28333);
if(temp__5753__auto__){
var seq__28333__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28333__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28333__$1);
var G__28417 = cljs.core.chunk_rest(seq__28333__$1);
var G__28418 = c__4679__auto__;
var G__28419 = cljs.core.count(c__4679__auto__);
var G__28420 = (0);
seq__28333 = G__28417;
chunk__28334 = G__28418;
count__28335 = G__28419;
i__28336 = G__28420;
continue;
} else {
var vec__28346 = cljs.core.first(seq__28333__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28346,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28346,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___28421 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28421)){
var effect_fn_28423 = temp__5751__auto___28421;
(effect_fn_28423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28423.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28424 = cljs.core.next(seq__28333__$1);
var G__28425 = null;
var G__28426 = (0);
var G__28427 = (0);
seq__28333 = G__28424;
chunk__28334 = G__28425;
count__28335 = G__28426;
i__28336 = G__28427;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28349 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28350 = null;
var count__28351 = (0);
var i__28352 = (0);
while(true){
if((i__28352 < count__28351)){
var event = chunk__28350.cljs$core$IIndexed$_nth$arity$2(null,i__28352);
re_frame.router.dispatch(event);


var G__28429 = seq__28349;
var G__28430 = chunk__28350;
var G__28431 = count__28351;
var G__28432 = (i__28352 + (1));
seq__28349 = G__28429;
chunk__28350 = G__28430;
count__28351 = G__28431;
i__28352 = G__28432;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28349);
if(temp__5753__auto__){
var seq__28349__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28349__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28349__$1);
var G__28433 = cljs.core.chunk_rest(seq__28349__$1);
var G__28434 = c__4679__auto__;
var G__28435 = cljs.core.count(c__4679__auto__);
var G__28436 = (0);
seq__28349 = G__28433;
chunk__28350 = G__28434;
count__28351 = G__28435;
i__28352 = G__28436;
continue;
} else {
var event = cljs.core.first(seq__28349__$1);
re_frame.router.dispatch(event);


var G__28437 = cljs.core.next(seq__28349__$1);
var G__28438 = null;
var G__28439 = (0);
var G__28440 = (0);
seq__28349 = G__28437;
chunk__28350 = G__28438;
count__28351 = G__28439;
i__28352 = G__28440;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__28353 = cljs.core.seq(value);
var chunk__28354 = null;
var count__28355 = (0);
var i__28356 = (0);
while(true){
if((i__28356 < count__28355)){
var event = chunk__28354.cljs$core$IIndexed$_nth$arity$2(null,i__28356);
clear_event(event);


var G__28441 = seq__28353;
var G__28442 = chunk__28354;
var G__28443 = count__28355;
var G__28444 = (i__28356 + (1));
seq__28353 = G__28441;
chunk__28354 = G__28442;
count__28355 = G__28443;
i__28356 = G__28444;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28353);
if(temp__5753__auto__){
var seq__28353__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28353__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28353__$1);
var G__28445 = cljs.core.chunk_rest(seq__28353__$1);
var G__28446 = c__4679__auto__;
var G__28447 = cljs.core.count(c__4679__auto__);
var G__28448 = (0);
seq__28353 = G__28445;
chunk__28354 = G__28446;
count__28355 = G__28447;
i__28356 = G__28448;
continue;
} else {
var event = cljs.core.first(seq__28353__$1);
clear_event(event);


var G__28449 = cljs.core.next(seq__28353__$1);
var G__28450 = null;
var G__28451 = (0);
var G__28452 = (0);
seq__28353 = G__28449;
chunk__28354 = G__28450;
count__28355 = G__28451;
i__28356 = G__28452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
