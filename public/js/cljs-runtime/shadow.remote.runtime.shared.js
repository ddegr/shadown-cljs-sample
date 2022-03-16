goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36150,res){
var map__36151 = p__36150;
var map__36151__$1 = cljs.core.__destructure_map(map__36151);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36152 = res;
var G__36152__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36152,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36152);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36152__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36152__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36155 = arguments.length;
switch (G__36155) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36156,msg,handlers,timeout_after_ms){
var map__36157 = p__36156;
var map__36157__$1 = cljs.core.__destructure_map(map__36157);
var runtime = map__36157__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36227 = arguments.length;
var i__4865__auto___36228 = (0);
while(true){
if((i__4865__auto___36228 < len__4864__auto___36227)){
args__4870__auto__.push((arguments[i__4865__auto___36228]));

var G__36229 = (i__4865__auto___36228 + (1));
i__4865__auto___36228 = G__36229;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36161,ev,args){
var map__36162 = p__36161;
var map__36162__$1 = cljs.core.__destructure_map(map__36162);
var runtime = map__36162__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36163 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36166 = null;
var count__36167 = (0);
var i__36168 = (0);
while(true){
if((i__36168 < count__36167)){
var ext = chunk__36166.cljs$core$IIndexed$_nth$arity$2(null,i__36168);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36230 = seq__36163;
var G__36231 = chunk__36166;
var G__36232 = count__36167;
var G__36233 = (i__36168 + (1));
seq__36163 = G__36230;
chunk__36166 = G__36231;
count__36167 = G__36232;
i__36168 = G__36233;
continue;
} else {
var G__36234 = seq__36163;
var G__36235 = chunk__36166;
var G__36236 = count__36167;
var G__36237 = (i__36168 + (1));
seq__36163 = G__36234;
chunk__36166 = G__36235;
count__36167 = G__36236;
i__36168 = G__36237;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36163);
if(temp__5753__auto__){
var seq__36163__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36163__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36163__$1);
var G__36238 = cljs.core.chunk_rest(seq__36163__$1);
var G__36239 = c__4679__auto__;
var G__36240 = cljs.core.count(c__4679__auto__);
var G__36241 = (0);
seq__36163 = G__36238;
chunk__36166 = G__36239;
count__36167 = G__36240;
i__36168 = G__36241;
continue;
} else {
var ext = cljs.core.first(seq__36163__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36242 = cljs.core.next(seq__36163__$1);
var G__36243 = null;
var G__36244 = (0);
var G__36245 = (0);
seq__36163 = G__36242;
chunk__36166 = G__36243;
count__36167 = G__36244;
i__36168 = G__36245;
continue;
} else {
var G__36246 = cljs.core.next(seq__36163__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__36163 = G__36246;
chunk__36166 = G__36247;
count__36167 = G__36248;
i__36168 = G__36249;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36158){
var G__36159 = cljs.core.first(seq36158);
var seq36158__$1 = cljs.core.next(seq36158);
var G__36160 = cljs.core.first(seq36158__$1);
var seq36158__$2 = cljs.core.next(seq36158__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36159,G__36160,seq36158__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36173,p__36174){
var map__36175 = p__36173;
var map__36175__$1 = cljs.core.__destructure_map(map__36175);
var runtime = map__36175__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36175__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36176 = p__36174;
var map__36176__$1 = cljs.core.__destructure_map(map__36176);
var msg = map__36176__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36177 = cljs.core.deref(state_ref);
var map__36177__$1 = cljs.core.__destructure_map(map__36177);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36177__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36177__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36182){
var map__36183 = p__36182;
var map__36183__$1 = cljs.core.__destructure_map(map__36183);
var runtime = map__36183__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36183__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36185,msg){
var map__36192 = p__36185;
var map__36192__$1 = cljs.core.__destructure_map(map__36192);
var runtime = map__36192__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36193,key,p__36194){
var map__36195 = p__36193;
var map__36195__$1 = cljs.core.__destructure_map(map__36195);
var state = map__36195__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36195__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36196 = p__36194;
var map__36196__$1 = cljs.core.__destructure_map(map__36196);
var spec = map__36196__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36196__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36197,key,spec){
var map__36198 = p__36197;
var map__36198__$1 = cljs.core.__destructure_map(map__36198);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36199_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36199_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36200_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36200_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36201_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36201_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36202_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36202_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36203_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36203_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36204,key){
var map__36205 = p__36204;
var map__36205__$1 = cljs.core.__destructure_map(map__36205);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36206,msg){
var map__36207 = p__36206;
var map__36207__$1 = cljs.core.__destructure_map(map__36207);
var runtime = map__36207__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36208,p__36209){
var map__36210 = p__36208;
var map__36210__$1 = cljs.core.__destructure_map(map__36210);
var runtime = map__36210__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36211 = p__36209;
var map__36211__$1 = cljs.core.__destructure_map(map__36211);
var msg = map__36211__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36213 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36215 = null;
var count__36216 = (0);
var i__36217 = (0);
while(true){
if((i__36217 < count__36216)){
var map__36221 = chunk__36215.cljs$core$IIndexed$_nth$arity$2(null,i__36217);
var map__36221__$1 = cljs.core.__destructure_map(map__36221);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36221__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36253 = seq__36213;
var G__36254 = chunk__36215;
var G__36255 = count__36216;
var G__36256 = (i__36217 + (1));
seq__36213 = G__36253;
chunk__36215 = G__36254;
count__36216 = G__36255;
i__36217 = G__36256;
continue;
} else {
var G__36261 = seq__36213;
var G__36262 = chunk__36215;
var G__36263 = count__36216;
var G__36264 = (i__36217 + (1));
seq__36213 = G__36261;
chunk__36215 = G__36262;
count__36216 = G__36263;
i__36217 = G__36264;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36213);
if(temp__5753__auto__){
var seq__36213__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36213__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36213__$1);
var G__36265 = cljs.core.chunk_rest(seq__36213__$1);
var G__36266 = c__4679__auto__;
var G__36267 = cljs.core.count(c__4679__auto__);
var G__36268 = (0);
seq__36213 = G__36265;
chunk__36215 = G__36266;
count__36216 = G__36267;
i__36217 = G__36268;
continue;
} else {
var map__36222 = cljs.core.first(seq__36213__$1);
var map__36222__$1 = cljs.core.__destructure_map(map__36222);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36269 = cljs.core.next(seq__36213__$1);
var G__36270 = null;
var G__36271 = (0);
var G__36272 = (0);
seq__36213 = G__36269;
chunk__36215 = G__36270;
count__36216 = G__36271;
i__36217 = G__36272;
continue;
} else {
var G__36273 = cljs.core.next(seq__36213__$1);
var G__36274 = null;
var G__36275 = (0);
var G__36276 = (0);
seq__36213 = G__36273;
chunk__36215 = G__36274;
count__36216 = G__36275;
i__36217 = G__36276;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
