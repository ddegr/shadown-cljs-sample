goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__32623,match){
var map__32624 = p__32623;
var map__32624__$1 = cljs.core.__destructure_map(map__32624);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4251__auto__ = identity;
if(cljs.core.truth_(and__4251__auto__)){
return parameters;
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__32625(s__32626){
return (new cljs.core.LazySeq(null,(function (){
var s__32626__$1 = s__32626;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32626__$1);
if(temp__5753__auto__){
var s__32626__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32626__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__32626__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__32628 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__32627 = (0);
while(true){
if((i__32627 < size__4651__auto__)){
var vec__32629 = cljs.core._nth(c__4650__auto__,i__32627);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32629,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32629,(1),null);
cljs.core.chunk_append(b__32628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__32657 = (i__32627 + (1));
i__32627 = G__32657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32628),reitit$frontend$controllers$get_identity_$_iter__32625(cljs.core.chunk_rest(s__32626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32628),null);
}
} else {
var vec__32633 = cljs.core.first(s__32626__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__32625(cljs.core.rest(s__32626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__32637 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32637) : f.call(null,G__32637));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__32638_32661 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__32639_32662 = null;
var count__32640_32663 = (0);
var i__32641_32664 = (0);
while(true){
if((i__32641_32664 < count__32640_32663)){
var controller_32665 = chunk__32639_32662.cljs$core$IIndexed$_nth$arity$2(null,i__32641_32664);
reitit.frontend.controllers.apply_controller(controller_32665,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__32666 = seq__32638_32661;
var G__32667 = chunk__32639_32662;
var G__32668 = count__32640_32663;
var G__32669 = (i__32641_32664 + (1));
seq__32638_32661 = G__32666;
chunk__32639_32662 = G__32667;
count__32640_32663 = G__32668;
i__32641_32664 = G__32669;
continue;
} else {
var temp__5753__auto___32674 = cljs.core.seq(seq__32638_32661);
if(temp__5753__auto___32674){
var seq__32638_32675__$1 = temp__5753__auto___32674;
if(cljs.core.chunked_seq_QMARK_(seq__32638_32675__$1)){
var c__4679__auto___32676 = cljs.core.chunk_first(seq__32638_32675__$1);
var G__32677 = cljs.core.chunk_rest(seq__32638_32675__$1);
var G__32678 = c__4679__auto___32676;
var G__32679 = cljs.core.count(c__4679__auto___32676);
var G__32680 = (0);
seq__32638_32661 = G__32677;
chunk__32639_32662 = G__32678;
count__32640_32663 = G__32679;
i__32641_32664 = G__32680;
continue;
} else {
var controller_32681 = cljs.core.first(seq__32638_32675__$1);
reitit.frontend.controllers.apply_controller(controller_32681,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__32682 = cljs.core.next(seq__32638_32675__$1);
var G__32683 = null;
var G__32684 = (0);
var G__32685 = (0);
seq__32638_32661 = G__32682;
chunk__32639_32662 = G__32683;
count__32640_32663 = G__32684;
i__32641_32664 = G__32685;
continue;
}
} else {
}
}
break;
}

var seq__32645_32686 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__32646_32687 = null;
var count__32647_32688 = (0);
var i__32648_32689 = (0);
while(true){
if((i__32648_32689 < count__32647_32688)){
var controller_32690 = chunk__32646_32687.cljs$core$IIndexed$_nth$arity$2(null,i__32648_32689);
reitit.frontend.controllers.apply_controller(controller_32690,new cljs.core.Keyword(null,"start","start",-355208981));


var G__32691 = seq__32645_32686;
var G__32692 = chunk__32646_32687;
var G__32693 = count__32647_32688;
var G__32694 = (i__32648_32689 + (1));
seq__32645_32686 = G__32691;
chunk__32646_32687 = G__32692;
count__32647_32688 = G__32693;
i__32648_32689 = G__32694;
continue;
} else {
var temp__5753__auto___32695 = cljs.core.seq(seq__32645_32686);
if(temp__5753__auto___32695){
var seq__32645_32696__$1 = temp__5753__auto___32695;
if(cljs.core.chunked_seq_QMARK_(seq__32645_32696__$1)){
var c__4679__auto___32697 = cljs.core.chunk_first(seq__32645_32696__$1);
var G__32698 = cljs.core.chunk_rest(seq__32645_32696__$1);
var G__32699 = c__4679__auto___32697;
var G__32700 = cljs.core.count(c__4679__auto___32697);
var G__32701 = (0);
seq__32645_32686 = G__32698;
chunk__32646_32687 = G__32699;
count__32647_32688 = G__32700;
i__32648_32689 = G__32701;
continue;
} else {
var controller_32705 = cljs.core.first(seq__32645_32696__$1);
reitit.frontend.controllers.apply_controller(controller_32705,new cljs.core.Keyword(null,"start","start",-355208981));


var G__32706 = cljs.core.next(seq__32645_32696__$1);
var G__32707 = null;
var G__32708 = (0);
var G__32709 = (0);
seq__32645_32686 = G__32706;
chunk__32646_32687 = G__32707;
count__32647_32688 = G__32708;
i__32648_32689 = G__32709;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
