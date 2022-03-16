goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37129){
var map__37130 = p__37129;
var map__37130__$1 = cljs.core.__destructure_map(map__37130);
var m = map__37130__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37130__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37131_37334 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37132_37335 = null;
var count__37133_37336 = (0);
var i__37134_37337 = (0);
while(true){
if((i__37134_37337 < count__37133_37336)){
var f_37338 = chunk__37132_37335.cljs$core$IIndexed$_nth$arity$2(null,i__37134_37337);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37338], 0));


var G__37339 = seq__37131_37334;
var G__37340 = chunk__37132_37335;
var G__37341 = count__37133_37336;
var G__37342 = (i__37134_37337 + (1));
seq__37131_37334 = G__37339;
chunk__37132_37335 = G__37340;
count__37133_37336 = G__37341;
i__37134_37337 = G__37342;
continue;
} else {
var temp__5753__auto___37343 = cljs.core.seq(seq__37131_37334);
if(temp__5753__auto___37343){
var seq__37131_37344__$1 = temp__5753__auto___37343;
if(cljs.core.chunked_seq_QMARK_(seq__37131_37344__$1)){
var c__4679__auto___37345 = cljs.core.chunk_first(seq__37131_37344__$1);
var G__37346 = cljs.core.chunk_rest(seq__37131_37344__$1);
var G__37347 = c__4679__auto___37345;
var G__37348 = cljs.core.count(c__4679__auto___37345);
var G__37349 = (0);
seq__37131_37334 = G__37346;
chunk__37132_37335 = G__37347;
count__37133_37336 = G__37348;
i__37134_37337 = G__37349;
continue;
} else {
var f_37350 = cljs.core.first(seq__37131_37344__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37350], 0));


var G__37351 = cljs.core.next(seq__37131_37344__$1);
var G__37352 = null;
var G__37353 = (0);
var G__37354 = (0);
seq__37131_37334 = G__37351;
chunk__37132_37335 = G__37352;
count__37133_37336 = G__37353;
i__37134_37337 = G__37354;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37355 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37355], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37355)))?cljs.core.second(arglists_37355):arglists_37355)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37138_37360 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37139_37361 = null;
var count__37140_37362 = (0);
var i__37141_37363 = (0);
while(true){
if((i__37141_37363 < count__37140_37362)){
var vec__37153_37364 = chunk__37139_37361.cljs$core$IIndexed$_nth$arity$2(null,i__37141_37363);
var name_37365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37153_37364,(0),null);
var map__37156_37366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37153_37364,(1),null);
var map__37156_37367__$1 = cljs.core.__destructure_map(map__37156_37366);
var doc_37368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156_37367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156_37367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37365], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37369], 0));

if(cljs.core.truth_(doc_37368)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37368], 0));
} else {
}


var G__37372 = seq__37138_37360;
var G__37373 = chunk__37139_37361;
var G__37374 = count__37140_37362;
var G__37375 = (i__37141_37363 + (1));
seq__37138_37360 = G__37372;
chunk__37139_37361 = G__37373;
count__37140_37362 = G__37374;
i__37141_37363 = G__37375;
continue;
} else {
var temp__5753__auto___37378 = cljs.core.seq(seq__37138_37360);
if(temp__5753__auto___37378){
var seq__37138_37379__$1 = temp__5753__auto___37378;
if(cljs.core.chunked_seq_QMARK_(seq__37138_37379__$1)){
var c__4679__auto___37380 = cljs.core.chunk_first(seq__37138_37379__$1);
var G__37381 = cljs.core.chunk_rest(seq__37138_37379__$1);
var G__37382 = c__4679__auto___37380;
var G__37383 = cljs.core.count(c__4679__auto___37380);
var G__37384 = (0);
seq__37138_37360 = G__37381;
chunk__37139_37361 = G__37382;
count__37140_37362 = G__37383;
i__37141_37363 = G__37384;
continue;
} else {
var vec__37158_37385 = cljs.core.first(seq__37138_37379__$1);
var name_37386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37158_37385,(0),null);
var map__37161_37387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37158_37385,(1),null);
var map__37161_37388__$1 = cljs.core.__destructure_map(map__37161_37387);
var doc_37389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37161_37388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37161_37388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37386], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37390], 0));

if(cljs.core.truth_(doc_37389)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37389], 0));
} else {
}


var G__37391 = cljs.core.next(seq__37138_37379__$1);
var G__37392 = null;
var G__37393 = (0);
var G__37394 = (0);
seq__37138_37360 = G__37391;
chunk__37139_37361 = G__37392;
count__37140_37362 = G__37393;
i__37141_37363 = G__37394;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37162 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37163 = null;
var count__37164 = (0);
var i__37165 = (0);
while(true){
if((i__37165 < count__37164)){
var role = chunk__37163.cljs$core$IIndexed$_nth$arity$2(null,i__37165);
var temp__5753__auto___37399__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___37399__$1)){
var spec_37400 = temp__5753__auto___37399__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37400)], 0));
} else {
}


var G__37401 = seq__37162;
var G__37402 = chunk__37163;
var G__37403 = count__37164;
var G__37404 = (i__37165 + (1));
seq__37162 = G__37401;
chunk__37163 = G__37402;
count__37164 = G__37403;
i__37165 = G__37404;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__37162);
if(temp__5753__auto____$1){
var seq__37162__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37162__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37162__$1);
var G__37406 = cljs.core.chunk_rest(seq__37162__$1);
var G__37407 = c__4679__auto__;
var G__37408 = cljs.core.count(c__4679__auto__);
var G__37409 = (0);
seq__37162 = G__37406;
chunk__37163 = G__37407;
count__37164 = G__37408;
i__37165 = G__37409;
continue;
} else {
var role = cljs.core.first(seq__37162__$1);
var temp__5753__auto___37410__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___37410__$2)){
var spec_37411 = temp__5753__auto___37410__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37411)], 0));
} else {
}


var G__37412 = cljs.core.next(seq__37162__$1);
var G__37413 = null;
var G__37414 = (0);
var G__37415 = (0);
seq__37162 = G__37412;
chunk__37163 = G__37413;
count__37164 = G__37414;
i__37165 = G__37415;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37416 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37417 = cljs.core.ex_cause(t);
via = G__37416;
t = G__37417;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37190 = datafied_throwable;
var map__37190__$1 = cljs.core.__destructure_map(map__37190);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37190__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37190__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37190__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37191 = cljs.core.last(via);
var map__37191__$1 = cljs.core.__destructure_map(map__37191);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37192 = data;
var map__37192__$1 = cljs.core.__destructure_map(map__37192);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37193 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37193__$1 = cljs.core.__destructure_map(map__37193);
var top_data = map__37193__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37201 = phase;
var G__37201__$1 = (((G__37201 instanceof cljs.core.Keyword))?G__37201.fqn:null);
switch (G__37201__$1) {
case "read-source":
var map__37202 = data;
var map__37202__$1 = cljs.core.__destructure_map(map__37202);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37203 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37203__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37203,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37203);
var G__37203__$2 = (cljs.core.truth_((function (){var fexpr__37216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37216.cljs$core$IFn$_invoke$arity$1 ? fexpr__37216.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37216.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37203__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37203__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37203__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37203__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37227 = top_data;
var G__37227__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37227,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37227);
var G__37227__$2 = (cljs.core.truth_((function (){var fexpr__37235 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37235.cljs$core$IFn$_invoke$arity$1 ? fexpr__37235.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37235.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37227__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37227__$1);
var G__37227__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37227__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37227__$2);
var G__37227__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37227__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37227__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37227__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37227__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37245 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(3),null);
var G__37248 = top_data;
var G__37248__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37248,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37248);
var G__37248__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37248__$1);
var G__37248__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37248__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37248__$2);
var G__37248__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37248__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37248__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37248__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37248__$4;
}

break;
case "execution":
var vec__37267 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37267,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37267,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37267,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37267,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37172_SHARP_){
var or__4253__auto__ = (p1__37172_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__37273 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37273.cljs$core$IFn$_invoke$arity$1 ? fexpr__37273.cljs$core$IFn$_invoke$arity$1(p1__37172_SHARP_) : fexpr__37273.call(null,p1__37172_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__37282 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37282__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37282,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37282);
var G__37282__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37282__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37282__$1);
var G__37282__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37282__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37282__$2);
var G__37282__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37282__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37282__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37282__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37282__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37201__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37290){
var map__37291 = p__37290;
var map__37291__$1 = cljs.core.__destructure_map(map__37291);
var triage_data = map__37291__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37293 = phase;
var G__37293__$1 = (((G__37293 instanceof cljs.core.Keyword))?G__37293.fqn:null);
switch (G__37293__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37294 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37295 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37296 = loc;
var G__37297 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37299_37427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37300_37428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37301_37429 = true;
var _STAR_print_fn_STAR__temp_val__37302_37430 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37301_37429);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37302_37430);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37288_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37288_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37300_37428);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37299_37427);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37294,G__37295,G__37296,G__37297) : format.call(null,G__37294,G__37295,G__37296,G__37297));

break;
case "macroexpansion":
var G__37304 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37305 = cause_type;
var G__37306 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37307 = loc;
var G__37308 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37304,G__37305,G__37306,G__37307,G__37308) : format.call(null,G__37304,G__37305,G__37306,G__37307,G__37308));

break;
case "compile-syntax-check":
var G__37309 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37310 = cause_type;
var G__37311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37312 = loc;
var G__37313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37309,G__37310,G__37311,G__37312,G__37313) : format.call(null,G__37309,G__37310,G__37311,G__37312,G__37313));

break;
case "compilation":
var G__37315 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37316 = cause_type;
var G__37317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37318 = loc;
var G__37319 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37315,G__37316,G__37317,G__37318,G__37319) : format.call(null,G__37315,G__37316,G__37317,G__37318,G__37319));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37320 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37321 = symbol;
var G__37322 = loc;
var G__37323 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37324_37432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37325_37433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37326_37434 = true;
var _STAR_print_fn_STAR__temp_val__37327_37435 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37326_37434);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37327_37435);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37289_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37289_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37325_37433);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37324_37432);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37320,G__37321,G__37322,G__37323) : format.call(null,G__37320,G__37321,G__37322,G__37323));
} else {
var G__37329 = "Execution error%s at %s(%s).\n%s\n";
var G__37330 = cause_type;
var G__37331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37332 = loc;
var G__37333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37329,G__37330,G__37331,G__37332,G__37333) : format.call(null,G__37329,G__37330,G__37331,G__37332,G__37333));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37293__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
