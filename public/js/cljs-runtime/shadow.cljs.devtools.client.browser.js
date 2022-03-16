goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38093 = arguments.length;
var i__4865__auto___38094 = (0);
while(true){
if((i__4865__auto___38094 < len__4864__auto___38093)){
args__4870__auto__.push((arguments[i__4865__auto___38094]));

var G__38095 = (i__4865__auto___38094 + (1));
i__4865__auto___38094 = G__38095;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37803){
var G__37804 = cljs.core.first(seq37803);
var seq37803__$1 = cljs.core.next(seq37803);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37804,seq37803__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37808 = cljs.core.seq(sources);
var chunk__37809 = null;
var count__37810 = (0);
var i__37811 = (0);
while(true){
if((i__37811 < count__37810)){
var map__37820 = chunk__37809.cljs$core$IIndexed$_nth$arity$2(null,i__37811);
var map__37820__$1 = cljs.core.__destructure_map(map__37820);
var src = map__37820__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37822){var e_38096 = e37822;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38096);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38096.message)].join('')));
}

var G__38097 = seq__37808;
var G__38098 = chunk__37809;
var G__38099 = count__37810;
var G__38100 = (i__37811 + (1));
seq__37808 = G__38097;
chunk__37809 = G__38098;
count__37810 = G__38099;
i__37811 = G__38100;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37808);
if(temp__5753__auto__){
var seq__37808__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37808__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37808__$1);
var G__38101 = cljs.core.chunk_rest(seq__37808__$1);
var G__38102 = c__4679__auto__;
var G__38103 = cljs.core.count(c__4679__auto__);
var G__38104 = (0);
seq__37808 = G__38101;
chunk__37809 = G__38102;
count__37810 = G__38103;
i__37811 = G__38104;
continue;
} else {
var map__37823 = cljs.core.first(seq__37808__$1);
var map__37823__$1 = cljs.core.__destructure_map(map__37823);
var src = map__37823__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37823__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37823__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37823__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37823__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37824){var e_38105 = e37824;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38105);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38105.message)].join('')));
}

var G__38106 = cljs.core.next(seq__37808__$1);
var G__38107 = null;
var G__38108 = (0);
var G__38109 = (0);
seq__37808 = G__38106;
chunk__37809 = G__38107;
count__37810 = G__38108;
i__37811 = G__38109;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37825 = cljs.core.seq(js_requires);
var chunk__37826 = null;
var count__37827 = (0);
var i__37828 = (0);
while(true){
if((i__37828 < count__37827)){
var js_ns = chunk__37826.cljs$core$IIndexed$_nth$arity$2(null,i__37828);
var require_str_38110 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38110);


var G__38111 = seq__37825;
var G__38112 = chunk__37826;
var G__38113 = count__37827;
var G__38114 = (i__37828 + (1));
seq__37825 = G__38111;
chunk__37826 = G__38112;
count__37827 = G__38113;
i__37828 = G__38114;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37825);
if(temp__5753__auto__){
var seq__37825__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37825__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37825__$1);
var G__38115 = cljs.core.chunk_rest(seq__37825__$1);
var G__38116 = c__4679__auto__;
var G__38117 = cljs.core.count(c__4679__auto__);
var G__38118 = (0);
seq__37825 = G__38115;
chunk__37826 = G__38116;
count__37827 = G__38117;
i__37828 = G__38118;
continue;
} else {
var js_ns = cljs.core.first(seq__37825__$1);
var require_str_38119 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38119);


var G__38120 = cljs.core.next(seq__37825__$1);
var G__38121 = null;
var G__38122 = (0);
var G__38123 = (0);
seq__37825 = G__38120;
chunk__37826 = G__38121;
count__37827 = G__38122;
i__37828 = G__38123;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37832){
var map__37833 = p__37832;
var map__37833__$1 = cljs.core.__destructure_map(map__37833);
var msg = map__37833__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37833__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37833__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37834(s__37835){
return (new cljs.core.LazySeq(null,(function (){
var s__37835__$1 = s__37835;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37835__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37840 = cljs.core.first(xs__6308__auto__);
var map__37840__$1 = cljs.core.__destructure_map(map__37840);
var src = map__37840__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37840__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37840__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37835__$1,map__37840,map__37840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37833,map__37833__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37834_$_iter__37836(s__37837){
return (new cljs.core.LazySeq(null,((function (s__37835__$1,map__37840,map__37840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37833,map__37833__$1,msg,info,reload_info){
return (function (){
var s__37837__$1 = s__37837;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37837__$1);
if(temp__5753__auto____$1){
var s__37837__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37837__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37837__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37839 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37838 = (0);
while(true){
if((i__37838 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37838);
cljs.core.chunk_append(b__37839,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38124 = (i__37838 + (1));
i__37838 = G__38124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37839),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37834_$_iter__37836(cljs.core.chunk_rest(s__37837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37839),null);
}
} else {
var warning = cljs.core.first(s__37837__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37834_$_iter__37836(cljs.core.rest(s__37837__$2)));
}
} else {
return null;
}
break;
}
});})(s__37835__$1,map__37840,map__37840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37833,map__37833__$1,msg,info,reload_info))
,null,null));
});})(s__37835__$1,map__37840,map__37840__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37833,map__37833__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37834(cljs.core.rest(s__37835__$1)));
} else {
var G__38125 = cljs.core.rest(s__37835__$1);
s__37835__$1 = G__38125;
continue;
}
} else {
var G__38126 = cljs.core.rest(s__37835__$1);
s__37835__$1 = G__38126;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37841_38127 = cljs.core.seq(warnings);
var chunk__37842_38128 = null;
var count__37843_38129 = (0);
var i__37844_38130 = (0);
while(true){
if((i__37844_38130 < count__37843_38129)){
var map__37847_38131 = chunk__37842_38128.cljs$core$IIndexed$_nth$arity$2(null,i__37844_38130);
var map__37847_38132__$1 = cljs.core.__destructure_map(map__37847_38131);
var w_38133 = map__37847_38132__$1;
var msg_38134__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37847_38132__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37847_38132__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37847_38132__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37847_38132__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38137)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38135),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38136),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38134__$1)].join(''));


var G__38138 = seq__37841_38127;
var G__38139 = chunk__37842_38128;
var G__38140 = count__37843_38129;
var G__38141 = (i__37844_38130 + (1));
seq__37841_38127 = G__38138;
chunk__37842_38128 = G__38139;
count__37843_38129 = G__38140;
i__37844_38130 = G__38141;
continue;
} else {
var temp__5753__auto___38142 = cljs.core.seq(seq__37841_38127);
if(temp__5753__auto___38142){
var seq__37841_38143__$1 = temp__5753__auto___38142;
if(cljs.core.chunked_seq_QMARK_(seq__37841_38143__$1)){
var c__4679__auto___38144 = cljs.core.chunk_first(seq__37841_38143__$1);
var G__38145 = cljs.core.chunk_rest(seq__37841_38143__$1);
var G__38146 = c__4679__auto___38144;
var G__38147 = cljs.core.count(c__4679__auto___38144);
var G__38148 = (0);
seq__37841_38127 = G__38145;
chunk__37842_38128 = G__38146;
count__37843_38129 = G__38147;
i__37844_38130 = G__38148;
continue;
} else {
var map__37848_38149 = cljs.core.first(seq__37841_38143__$1);
var map__37848_38150__$1 = cljs.core.__destructure_map(map__37848_38149);
var w_38151 = map__37848_38150__$1;
var msg_38152__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37848_38150__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37848_38150__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37848_38150__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37848_38150__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38155)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38153),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38154),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38152__$1)].join(''));


var G__38156 = cljs.core.next(seq__37841_38143__$1);
var G__38157 = null;
var G__38158 = (0);
var G__38159 = (0);
seq__37841_38127 = G__38156;
chunk__37842_38128 = G__38157;
count__37843_38129 = G__38158;
i__37844_38130 = G__38159;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37831_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37831_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37849){
var map__37850 = p__37849;
var map__37850__$1 = cljs.core.__destructure_map(map__37850);
var msg = map__37850__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37851 = cljs.core.seq(updates);
var chunk__37853 = null;
var count__37854 = (0);
var i__37855 = (0);
while(true){
if((i__37855 < count__37854)){
var path = chunk__37853.cljs$core$IIndexed$_nth$arity$2(null,i__37855);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37965_38160 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37969_38161 = null;
var count__37970_38162 = (0);
var i__37971_38163 = (0);
while(true){
if((i__37971_38163 < count__37970_38162)){
var node_38164 = chunk__37969_38161.cljs$core$IIndexed$_nth$arity$2(null,i__37971_38163);
if(cljs.core.not(node_38164.shadow$old)){
var path_match_38165 = shadow.cljs.devtools.client.browser.match_paths(node_38164.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38165)){
var new_link_38166 = (function (){var G__37997 = node_38164.cloneNode(true);
G__37997.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38165),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37997;
})();
(node_38164.shadow$old = true);

(new_link_38166.onload = ((function (seq__37965_38160,chunk__37969_38161,count__37970_38162,i__37971_38163,seq__37851,chunk__37853,count__37854,i__37855,new_link_38166,path_match_38165,node_38164,path,map__37850,map__37850__$1,msg,updates,reload_info){
return (function (e){
var seq__37998_38167 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38000_38168 = null;
var count__38001_38169 = (0);
var i__38002_38170 = (0);
while(true){
if((i__38002_38170 < count__38001_38169)){
var map__38006_38171 = chunk__38000_38168.cljs$core$IIndexed$_nth$arity$2(null,i__38002_38170);
var map__38006_38172__$1 = cljs.core.__destructure_map(map__38006_38171);
var task_38173 = map__38006_38172__$1;
var fn_str_38174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38006_38172__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38006_38172__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38176 = goog.getObjectByName(fn_str_38174,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38175)].join(''));

(fn_obj_38176.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38176.cljs$core$IFn$_invoke$arity$2(path,new_link_38166) : fn_obj_38176.call(null,path,new_link_38166));


var G__38177 = seq__37998_38167;
var G__38178 = chunk__38000_38168;
var G__38179 = count__38001_38169;
var G__38180 = (i__38002_38170 + (1));
seq__37998_38167 = G__38177;
chunk__38000_38168 = G__38178;
count__38001_38169 = G__38179;
i__38002_38170 = G__38180;
continue;
} else {
var temp__5753__auto___38181 = cljs.core.seq(seq__37998_38167);
if(temp__5753__auto___38181){
var seq__37998_38182__$1 = temp__5753__auto___38181;
if(cljs.core.chunked_seq_QMARK_(seq__37998_38182__$1)){
var c__4679__auto___38183 = cljs.core.chunk_first(seq__37998_38182__$1);
var G__38184 = cljs.core.chunk_rest(seq__37998_38182__$1);
var G__38185 = c__4679__auto___38183;
var G__38186 = cljs.core.count(c__4679__auto___38183);
var G__38187 = (0);
seq__37998_38167 = G__38184;
chunk__38000_38168 = G__38185;
count__38001_38169 = G__38186;
i__38002_38170 = G__38187;
continue;
} else {
var map__38007_38188 = cljs.core.first(seq__37998_38182__$1);
var map__38007_38189__$1 = cljs.core.__destructure_map(map__38007_38188);
var task_38190 = map__38007_38189__$1;
var fn_str_38191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38007_38189__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38007_38189__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38193 = goog.getObjectByName(fn_str_38191,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38192)].join(''));

(fn_obj_38193.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38193.cljs$core$IFn$_invoke$arity$2(path,new_link_38166) : fn_obj_38193.call(null,path,new_link_38166));


var G__38194 = cljs.core.next(seq__37998_38182__$1);
var G__38195 = null;
var G__38196 = (0);
var G__38197 = (0);
seq__37998_38167 = G__38194;
chunk__38000_38168 = G__38195;
count__38001_38169 = G__38196;
i__38002_38170 = G__38197;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38164);
});})(seq__37965_38160,chunk__37969_38161,count__37970_38162,i__37971_38163,seq__37851,chunk__37853,count__37854,i__37855,new_link_38166,path_match_38165,node_38164,path,map__37850,map__37850__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38165], 0));

goog.dom.insertSiblingAfter(new_link_38166,node_38164);


var G__38198 = seq__37965_38160;
var G__38199 = chunk__37969_38161;
var G__38200 = count__37970_38162;
var G__38201 = (i__37971_38163 + (1));
seq__37965_38160 = G__38198;
chunk__37969_38161 = G__38199;
count__37970_38162 = G__38200;
i__37971_38163 = G__38201;
continue;
} else {
var G__38202 = seq__37965_38160;
var G__38203 = chunk__37969_38161;
var G__38204 = count__37970_38162;
var G__38205 = (i__37971_38163 + (1));
seq__37965_38160 = G__38202;
chunk__37969_38161 = G__38203;
count__37970_38162 = G__38204;
i__37971_38163 = G__38205;
continue;
}
} else {
var G__38206 = seq__37965_38160;
var G__38207 = chunk__37969_38161;
var G__38208 = count__37970_38162;
var G__38209 = (i__37971_38163 + (1));
seq__37965_38160 = G__38206;
chunk__37969_38161 = G__38207;
count__37970_38162 = G__38208;
i__37971_38163 = G__38209;
continue;
}
} else {
var temp__5753__auto___38210 = cljs.core.seq(seq__37965_38160);
if(temp__5753__auto___38210){
var seq__37965_38211__$1 = temp__5753__auto___38210;
if(cljs.core.chunked_seq_QMARK_(seq__37965_38211__$1)){
var c__4679__auto___38212 = cljs.core.chunk_first(seq__37965_38211__$1);
var G__38213 = cljs.core.chunk_rest(seq__37965_38211__$1);
var G__38214 = c__4679__auto___38212;
var G__38215 = cljs.core.count(c__4679__auto___38212);
var G__38216 = (0);
seq__37965_38160 = G__38213;
chunk__37969_38161 = G__38214;
count__37970_38162 = G__38215;
i__37971_38163 = G__38216;
continue;
} else {
var node_38217 = cljs.core.first(seq__37965_38211__$1);
if(cljs.core.not(node_38217.shadow$old)){
var path_match_38218 = shadow.cljs.devtools.client.browser.match_paths(node_38217.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38218)){
var new_link_38219 = (function (){var G__38008 = node_38217.cloneNode(true);
G__38008.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38218),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38008;
})();
(node_38217.shadow$old = true);

(new_link_38219.onload = ((function (seq__37965_38160,chunk__37969_38161,count__37970_38162,i__37971_38163,seq__37851,chunk__37853,count__37854,i__37855,new_link_38219,path_match_38218,node_38217,seq__37965_38211__$1,temp__5753__auto___38210,path,map__37850,map__37850__$1,msg,updates,reload_info){
return (function (e){
var seq__38009_38220 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38011_38221 = null;
var count__38012_38222 = (0);
var i__38013_38223 = (0);
while(true){
if((i__38013_38223 < count__38012_38222)){
var map__38017_38224 = chunk__38011_38221.cljs$core$IIndexed$_nth$arity$2(null,i__38013_38223);
var map__38017_38225__$1 = cljs.core.__destructure_map(map__38017_38224);
var task_38226 = map__38017_38225__$1;
var fn_str_38227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38017_38225__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38017_38225__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38229 = goog.getObjectByName(fn_str_38227,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38228)].join(''));

(fn_obj_38229.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38229.cljs$core$IFn$_invoke$arity$2(path,new_link_38219) : fn_obj_38229.call(null,path,new_link_38219));


var G__38230 = seq__38009_38220;
var G__38231 = chunk__38011_38221;
var G__38232 = count__38012_38222;
var G__38233 = (i__38013_38223 + (1));
seq__38009_38220 = G__38230;
chunk__38011_38221 = G__38231;
count__38012_38222 = G__38232;
i__38013_38223 = G__38233;
continue;
} else {
var temp__5753__auto___38234__$1 = cljs.core.seq(seq__38009_38220);
if(temp__5753__auto___38234__$1){
var seq__38009_38235__$1 = temp__5753__auto___38234__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38009_38235__$1)){
var c__4679__auto___38236 = cljs.core.chunk_first(seq__38009_38235__$1);
var G__38237 = cljs.core.chunk_rest(seq__38009_38235__$1);
var G__38238 = c__4679__auto___38236;
var G__38239 = cljs.core.count(c__4679__auto___38236);
var G__38240 = (0);
seq__38009_38220 = G__38237;
chunk__38011_38221 = G__38238;
count__38012_38222 = G__38239;
i__38013_38223 = G__38240;
continue;
} else {
var map__38018_38241 = cljs.core.first(seq__38009_38235__$1);
var map__38018_38242__$1 = cljs.core.__destructure_map(map__38018_38241);
var task_38243 = map__38018_38242__$1;
var fn_str_38244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38018_38242__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38018_38242__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38246 = goog.getObjectByName(fn_str_38244,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38245)].join(''));

(fn_obj_38246.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38246.cljs$core$IFn$_invoke$arity$2(path,new_link_38219) : fn_obj_38246.call(null,path,new_link_38219));


var G__38247 = cljs.core.next(seq__38009_38235__$1);
var G__38248 = null;
var G__38249 = (0);
var G__38250 = (0);
seq__38009_38220 = G__38247;
chunk__38011_38221 = G__38248;
count__38012_38222 = G__38249;
i__38013_38223 = G__38250;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38217);
});})(seq__37965_38160,chunk__37969_38161,count__37970_38162,i__37971_38163,seq__37851,chunk__37853,count__37854,i__37855,new_link_38219,path_match_38218,node_38217,seq__37965_38211__$1,temp__5753__auto___38210,path,map__37850,map__37850__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38218], 0));

goog.dom.insertSiblingAfter(new_link_38219,node_38217);


var G__38251 = cljs.core.next(seq__37965_38211__$1);
var G__38252 = null;
var G__38253 = (0);
var G__38254 = (0);
seq__37965_38160 = G__38251;
chunk__37969_38161 = G__38252;
count__37970_38162 = G__38253;
i__37971_38163 = G__38254;
continue;
} else {
var G__38255 = cljs.core.next(seq__37965_38211__$1);
var G__38256 = null;
var G__38257 = (0);
var G__38258 = (0);
seq__37965_38160 = G__38255;
chunk__37969_38161 = G__38256;
count__37970_38162 = G__38257;
i__37971_38163 = G__38258;
continue;
}
} else {
var G__38259 = cljs.core.next(seq__37965_38211__$1);
var G__38260 = null;
var G__38261 = (0);
var G__38262 = (0);
seq__37965_38160 = G__38259;
chunk__37969_38161 = G__38260;
count__37970_38162 = G__38261;
i__37971_38163 = G__38262;
continue;
}
}
} else {
}
}
break;
}


var G__38263 = seq__37851;
var G__38264 = chunk__37853;
var G__38265 = count__37854;
var G__38266 = (i__37855 + (1));
seq__37851 = G__38263;
chunk__37853 = G__38264;
count__37854 = G__38265;
i__37855 = G__38266;
continue;
} else {
var G__38267 = seq__37851;
var G__38268 = chunk__37853;
var G__38269 = count__37854;
var G__38270 = (i__37855 + (1));
seq__37851 = G__38267;
chunk__37853 = G__38268;
count__37854 = G__38269;
i__37855 = G__38270;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37851);
if(temp__5753__auto__){
var seq__37851__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37851__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37851__$1);
var G__38271 = cljs.core.chunk_rest(seq__37851__$1);
var G__38272 = c__4679__auto__;
var G__38273 = cljs.core.count(c__4679__auto__);
var G__38274 = (0);
seq__37851 = G__38271;
chunk__37853 = G__38272;
count__37854 = G__38273;
i__37855 = G__38274;
continue;
} else {
var path = cljs.core.first(seq__37851__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38019_38275 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38023_38276 = null;
var count__38024_38277 = (0);
var i__38025_38278 = (0);
while(true){
if((i__38025_38278 < count__38024_38277)){
var node_38279 = chunk__38023_38276.cljs$core$IIndexed$_nth$arity$2(null,i__38025_38278);
if(cljs.core.not(node_38279.shadow$old)){
var path_match_38280 = shadow.cljs.devtools.client.browser.match_paths(node_38279.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38280)){
var new_link_38281 = (function (){var G__38051 = node_38279.cloneNode(true);
G__38051.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38280),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38051;
})();
(node_38279.shadow$old = true);

(new_link_38281.onload = ((function (seq__38019_38275,chunk__38023_38276,count__38024_38277,i__38025_38278,seq__37851,chunk__37853,count__37854,i__37855,new_link_38281,path_match_38280,node_38279,path,seq__37851__$1,temp__5753__auto__,map__37850,map__37850__$1,msg,updates,reload_info){
return (function (e){
var seq__38052_38282 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38054_38283 = null;
var count__38055_38284 = (0);
var i__38056_38285 = (0);
while(true){
if((i__38056_38285 < count__38055_38284)){
var map__38060_38286 = chunk__38054_38283.cljs$core$IIndexed$_nth$arity$2(null,i__38056_38285);
var map__38060_38287__$1 = cljs.core.__destructure_map(map__38060_38286);
var task_38288 = map__38060_38287__$1;
var fn_str_38289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060_38287__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060_38287__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38291 = goog.getObjectByName(fn_str_38289,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38290)].join(''));

(fn_obj_38291.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38291.cljs$core$IFn$_invoke$arity$2(path,new_link_38281) : fn_obj_38291.call(null,path,new_link_38281));


var G__38292 = seq__38052_38282;
var G__38293 = chunk__38054_38283;
var G__38294 = count__38055_38284;
var G__38295 = (i__38056_38285 + (1));
seq__38052_38282 = G__38292;
chunk__38054_38283 = G__38293;
count__38055_38284 = G__38294;
i__38056_38285 = G__38295;
continue;
} else {
var temp__5753__auto___38296__$1 = cljs.core.seq(seq__38052_38282);
if(temp__5753__auto___38296__$1){
var seq__38052_38297__$1 = temp__5753__auto___38296__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38052_38297__$1)){
var c__4679__auto___38298 = cljs.core.chunk_first(seq__38052_38297__$1);
var G__38299 = cljs.core.chunk_rest(seq__38052_38297__$1);
var G__38300 = c__4679__auto___38298;
var G__38301 = cljs.core.count(c__4679__auto___38298);
var G__38302 = (0);
seq__38052_38282 = G__38299;
chunk__38054_38283 = G__38300;
count__38055_38284 = G__38301;
i__38056_38285 = G__38302;
continue;
} else {
var map__38061_38303 = cljs.core.first(seq__38052_38297__$1);
var map__38061_38304__$1 = cljs.core.__destructure_map(map__38061_38303);
var task_38305 = map__38061_38304__$1;
var fn_str_38306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061_38304__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061_38304__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38308 = goog.getObjectByName(fn_str_38306,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38307)].join(''));

(fn_obj_38308.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38308.cljs$core$IFn$_invoke$arity$2(path,new_link_38281) : fn_obj_38308.call(null,path,new_link_38281));


var G__38309 = cljs.core.next(seq__38052_38297__$1);
var G__38310 = null;
var G__38311 = (0);
var G__38312 = (0);
seq__38052_38282 = G__38309;
chunk__38054_38283 = G__38310;
count__38055_38284 = G__38311;
i__38056_38285 = G__38312;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38279);
});})(seq__38019_38275,chunk__38023_38276,count__38024_38277,i__38025_38278,seq__37851,chunk__37853,count__37854,i__37855,new_link_38281,path_match_38280,node_38279,path,seq__37851__$1,temp__5753__auto__,map__37850,map__37850__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38280], 0));

goog.dom.insertSiblingAfter(new_link_38281,node_38279);


var G__38313 = seq__38019_38275;
var G__38314 = chunk__38023_38276;
var G__38315 = count__38024_38277;
var G__38316 = (i__38025_38278 + (1));
seq__38019_38275 = G__38313;
chunk__38023_38276 = G__38314;
count__38024_38277 = G__38315;
i__38025_38278 = G__38316;
continue;
} else {
var G__38317 = seq__38019_38275;
var G__38318 = chunk__38023_38276;
var G__38319 = count__38024_38277;
var G__38320 = (i__38025_38278 + (1));
seq__38019_38275 = G__38317;
chunk__38023_38276 = G__38318;
count__38024_38277 = G__38319;
i__38025_38278 = G__38320;
continue;
}
} else {
var G__38321 = seq__38019_38275;
var G__38322 = chunk__38023_38276;
var G__38323 = count__38024_38277;
var G__38324 = (i__38025_38278 + (1));
seq__38019_38275 = G__38321;
chunk__38023_38276 = G__38322;
count__38024_38277 = G__38323;
i__38025_38278 = G__38324;
continue;
}
} else {
var temp__5753__auto___38325__$1 = cljs.core.seq(seq__38019_38275);
if(temp__5753__auto___38325__$1){
var seq__38019_38326__$1 = temp__5753__auto___38325__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38019_38326__$1)){
var c__4679__auto___38327 = cljs.core.chunk_first(seq__38019_38326__$1);
var G__38328 = cljs.core.chunk_rest(seq__38019_38326__$1);
var G__38329 = c__4679__auto___38327;
var G__38330 = cljs.core.count(c__4679__auto___38327);
var G__38331 = (0);
seq__38019_38275 = G__38328;
chunk__38023_38276 = G__38329;
count__38024_38277 = G__38330;
i__38025_38278 = G__38331;
continue;
} else {
var node_38332 = cljs.core.first(seq__38019_38326__$1);
if(cljs.core.not(node_38332.shadow$old)){
var path_match_38333 = shadow.cljs.devtools.client.browser.match_paths(node_38332.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38333)){
var new_link_38334 = (function (){var G__38062 = node_38332.cloneNode(true);
G__38062.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38333),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38062;
})();
(node_38332.shadow$old = true);

(new_link_38334.onload = ((function (seq__38019_38275,chunk__38023_38276,count__38024_38277,i__38025_38278,seq__37851,chunk__37853,count__37854,i__37855,new_link_38334,path_match_38333,node_38332,seq__38019_38326__$1,temp__5753__auto___38325__$1,path,seq__37851__$1,temp__5753__auto__,map__37850,map__37850__$1,msg,updates,reload_info){
return (function (e){
var seq__38063_38335 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38065_38336 = null;
var count__38066_38337 = (0);
var i__38067_38338 = (0);
while(true){
if((i__38067_38338 < count__38066_38337)){
var map__38071_38339 = chunk__38065_38336.cljs$core$IIndexed$_nth$arity$2(null,i__38067_38338);
var map__38071_38340__$1 = cljs.core.__destructure_map(map__38071_38339);
var task_38341 = map__38071_38340__$1;
var fn_str_38342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071_38340__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071_38340__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38344 = goog.getObjectByName(fn_str_38342,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38343)].join(''));

(fn_obj_38344.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38344.cljs$core$IFn$_invoke$arity$2(path,new_link_38334) : fn_obj_38344.call(null,path,new_link_38334));


var G__38345 = seq__38063_38335;
var G__38346 = chunk__38065_38336;
var G__38347 = count__38066_38337;
var G__38348 = (i__38067_38338 + (1));
seq__38063_38335 = G__38345;
chunk__38065_38336 = G__38346;
count__38066_38337 = G__38347;
i__38067_38338 = G__38348;
continue;
} else {
var temp__5753__auto___38349__$2 = cljs.core.seq(seq__38063_38335);
if(temp__5753__auto___38349__$2){
var seq__38063_38350__$1 = temp__5753__auto___38349__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38063_38350__$1)){
var c__4679__auto___38351 = cljs.core.chunk_first(seq__38063_38350__$1);
var G__38352 = cljs.core.chunk_rest(seq__38063_38350__$1);
var G__38353 = c__4679__auto___38351;
var G__38354 = cljs.core.count(c__4679__auto___38351);
var G__38355 = (0);
seq__38063_38335 = G__38352;
chunk__38065_38336 = G__38353;
count__38066_38337 = G__38354;
i__38067_38338 = G__38355;
continue;
} else {
var map__38072_38356 = cljs.core.first(seq__38063_38350__$1);
var map__38072_38357__$1 = cljs.core.__destructure_map(map__38072_38356);
var task_38358 = map__38072_38357__$1;
var fn_str_38359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38072_38357__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38072_38357__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38361 = goog.getObjectByName(fn_str_38359,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38360)].join(''));

(fn_obj_38361.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38361.cljs$core$IFn$_invoke$arity$2(path,new_link_38334) : fn_obj_38361.call(null,path,new_link_38334));


var G__38362 = cljs.core.next(seq__38063_38350__$1);
var G__38363 = null;
var G__38364 = (0);
var G__38365 = (0);
seq__38063_38335 = G__38362;
chunk__38065_38336 = G__38363;
count__38066_38337 = G__38364;
i__38067_38338 = G__38365;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38332);
});})(seq__38019_38275,chunk__38023_38276,count__38024_38277,i__38025_38278,seq__37851,chunk__37853,count__37854,i__37855,new_link_38334,path_match_38333,node_38332,seq__38019_38326__$1,temp__5753__auto___38325__$1,path,seq__37851__$1,temp__5753__auto__,map__37850,map__37850__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38333], 0));

goog.dom.insertSiblingAfter(new_link_38334,node_38332);


var G__38366 = cljs.core.next(seq__38019_38326__$1);
var G__38367 = null;
var G__38368 = (0);
var G__38369 = (0);
seq__38019_38275 = G__38366;
chunk__38023_38276 = G__38367;
count__38024_38277 = G__38368;
i__38025_38278 = G__38369;
continue;
} else {
var G__38370 = cljs.core.next(seq__38019_38326__$1);
var G__38371 = null;
var G__38372 = (0);
var G__38373 = (0);
seq__38019_38275 = G__38370;
chunk__38023_38276 = G__38371;
count__38024_38277 = G__38372;
i__38025_38278 = G__38373;
continue;
}
} else {
var G__38374 = cljs.core.next(seq__38019_38326__$1);
var G__38375 = null;
var G__38376 = (0);
var G__38377 = (0);
seq__38019_38275 = G__38374;
chunk__38023_38276 = G__38375;
count__38024_38277 = G__38376;
i__38025_38278 = G__38377;
continue;
}
}
} else {
}
}
break;
}


var G__38378 = cljs.core.next(seq__37851__$1);
var G__38379 = null;
var G__38380 = (0);
var G__38381 = (0);
seq__37851 = G__38378;
chunk__37853 = G__38379;
count__37854 = G__38380;
i__37855 = G__38381;
continue;
} else {
var G__38382 = cljs.core.next(seq__37851__$1);
var G__38383 = null;
var G__38384 = (0);
var G__38385 = (0);
seq__37851 = G__38382;
chunk__37853 = G__38383;
count__37854 = G__38384;
i__37855 = G__38385;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38073){
var map__38074 = p__38073;
var map__38074__$1 = cljs.core.__destructure_map(map__38074);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38074__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38075){
var map__38076 = p__38075;
var map__38076__$1 = cljs.core.__destructure_map(map__38076);
var _ = map__38076__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38077,done,error){
var map__38078 = p__38077;
var map__38078__$1 = cljs.core.__destructure_map(map__38078);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38079,done,error){
var map__38080 = p__38079;
var map__38080__$1 = cljs.core.__destructure_map(map__38080);
var msg = map__38080__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38081){
var map__38082 = p__38081;
var map__38082__$1 = cljs.core.__destructure_map(map__38082);
var src = map__38082__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38083 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38083) : done.call(null,G__38083));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38084){
var map__38085 = p__38084;
var map__38085__$1 = cljs.core.__destructure_map(map__38085);
var msg__$1 = map__38085__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38085__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38086){var ex = e38086;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38087){
var map__38088 = p__38087;
var map__38088__$1 = cljs.core.__destructure_map(map__38088);
var env = map__38088__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38088__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38089){
var map__38090 = p__38089;
var map__38090__$1 = cljs.core.__destructure_map(map__38090);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38090__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38090__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38091){
var map__38092 = p__38091;
var map__38092__$1 = cljs.core.__destructure_map(map__38092);
var svc = map__38092__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38092__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
