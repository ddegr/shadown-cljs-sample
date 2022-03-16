goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27357__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27359__i = 0, G__27359__a = new Array(arguments.length -  0);
while (G__27359__i < G__27359__a.length) {G__27359__a[G__27359__i] = arguments[G__27359__i + 0]; ++G__27359__i;}
  args = new cljs.core.IndexedSeq(G__27359__a,0,null);
} 
return G__27357__delegate.call(this,args);};
G__27357.cljs$lang$maxFixedArity = 0;
G__27357.cljs$lang$applyTo = (function (arglist__27360){
var args = cljs.core.seq(arglist__27360);
return G__27357__delegate(args);
});
G__27357.cljs$core$IFn$_invoke$arity$variadic = G__27357__delegate;
return G__27357;
})()
);

(o.error = (function() { 
var G__27361__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27362__i = 0, G__27362__a = new Array(arguments.length -  0);
while (G__27362__i < G__27362__a.length) {G__27362__a[G__27362__i] = arguments[G__27362__i + 0]; ++G__27362__i;}
  args = new cljs.core.IndexedSeq(G__27362__a,0,null);
} 
return G__27361__delegate.call(this,args);};
G__27361.cljs$lang$maxFixedArity = 0;
G__27361.cljs$lang$applyTo = (function (arglist__27363){
var args = cljs.core.seq(arglist__27363);
return G__27361__delegate(args);
});
G__27361.cljs$core$IFn$_invoke$arity$variadic = G__27361__delegate;
return G__27361;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
