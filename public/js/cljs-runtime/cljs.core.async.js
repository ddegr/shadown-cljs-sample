goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32992 = arguments.length;
switch (G__32992) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32996 = (function (f,blockable,meta32997){
this.f = f;
this.blockable = blockable;
this.meta32997 = meta32997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32998,meta32997__$1){
var self__ = this;
var _32998__$1 = this;
return (new cljs.core.async.t_cljs$core$async32996(self__.f,self__.blockable,meta32997__$1));
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32998){
var self__ = this;
var _32998__$1 = this;
return self__.meta32997;
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32997","meta32997",-470907059,null)], null);
}));

(cljs.core.async.t_cljs$core$async32996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32996");

(cljs.core.async.t_cljs$core$async32996.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32996.
 */
cljs.core.async.__GT_t_cljs$core$async32996 = (function cljs$core$async$__GT_t_cljs$core$async32996(f__$1,blockable__$1,meta32997){
return (new cljs.core.async.t_cljs$core$async32996(f__$1,blockable__$1,meta32997));
});

}

return (new cljs.core.async.t_cljs$core$async32996(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33027 = arguments.length;
switch (G__33027) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33045 = arguments.length;
switch (G__33045) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33047 = arguments.length;
switch (G__33047) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34501 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34501) : fn1.call(null,val_34501));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34501) : fn1.call(null,val_34501));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33058 = arguments.length;
switch (G__33058) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34503 = n;
var x_34504 = (0);
while(true){
if((x_34504 < n__4741__auto___34503)){
(a[x_34504] = x_34504);

var G__34505 = (x_34504 + (1));
x_34504 = G__34505;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33066 = (function (flag,meta33067){
this.flag = flag;
this.meta33067 = meta33067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33068,meta33067__$1){
var self__ = this;
var _33068__$1 = this;
return (new cljs.core.async.t_cljs$core$async33066(self__.flag,meta33067__$1));
}));

(cljs.core.async.t_cljs$core$async33066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33068){
var self__ = this;
var _33068__$1 = this;
return self__.meta33067;
}));

(cljs.core.async.t_cljs$core$async33066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33067","meta33067",1197891582,null)], null);
}));

(cljs.core.async.t_cljs$core$async33066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33066");

(cljs.core.async.t_cljs$core$async33066.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33066.
 */
cljs.core.async.__GT_t_cljs$core$async33066 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33066(flag__$1,meta33067){
return (new cljs.core.async.t_cljs$core$async33066(flag__$1,meta33067));
});

}

return (new cljs.core.async.t_cljs$core$async33066(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33073 = (function (flag,cb,meta33074){
this.flag = flag;
this.cb = cb;
this.meta33074 = meta33074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33075,meta33074__$1){
var self__ = this;
var _33075__$1 = this;
return (new cljs.core.async.t_cljs$core$async33073(self__.flag,self__.cb,meta33074__$1));
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33075){
var self__ = this;
var _33075__$1 = this;
return self__.meta33074;
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33074","meta33074",1493569644,null)], null);
}));

(cljs.core.async.t_cljs$core$async33073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33073");

(cljs.core.async.t_cljs$core$async33073.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33073.
 */
cljs.core.async.__GT_t_cljs$core$async33073 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33073(flag__$1,cb__$1,meta33074){
return (new cljs.core.async.t_cljs$core$async33073(flag__$1,cb__$1,meta33074));
});

}

return (new cljs.core.async.t_cljs$core$async33073(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33076_SHARP_){
var G__33078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33076_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33078) : fret.call(null,G__33078));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33077_SHARP_){
var G__33079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33077_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33079) : fret.call(null,G__33079));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34508 = (i + (1));
i = G__34508;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34509 = arguments.length;
var i__4865__auto___34510 = (0);
while(true){
if((i__4865__auto___34510 < len__4864__auto___34509)){
args__4870__auto__.push((arguments[i__4865__auto___34510]));

var G__34511 = (i__4865__auto___34510 + (1));
i__4865__auto___34510 = G__34511;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33082){
var map__33083 = p__33082;
var map__33083__$1 = cljs.core.__destructure_map(map__33083);
var opts = map__33083__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33080){
var G__33081 = cljs.core.first(seq33080);
var seq33080__$1 = cljs.core.next(seq33080);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33081,seq33080__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33085 = arguments.length;
switch (G__33085) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32882__auto___34513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33109){
var state_val_33110 = (state_33109[(1)]);
if((state_val_33110 === (7))){
var inst_33105 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33111_34514 = state_33109__$1;
(statearr_33111_34514[(2)] = inst_33105);

(statearr_33111_34514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (1))){
var state_33109__$1 = state_33109;
var statearr_33112_34515 = state_33109__$1;
(statearr_33112_34515[(2)] = null);

(statearr_33112_34515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (4))){
var inst_33088 = (state_33109[(7)]);
var inst_33088__$1 = (state_33109[(2)]);
var inst_33089 = (inst_33088__$1 == null);
var state_33109__$1 = (function (){var statearr_33113 = state_33109;
(statearr_33113[(7)] = inst_33088__$1);

return statearr_33113;
})();
if(cljs.core.truth_(inst_33089)){
var statearr_33114_34516 = state_33109__$1;
(statearr_33114_34516[(1)] = (5));

} else {
var statearr_33115_34518 = state_33109__$1;
(statearr_33115_34518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (13))){
var state_33109__$1 = state_33109;
var statearr_33116_34519 = state_33109__$1;
(statearr_33116_34519[(2)] = null);

(statearr_33116_34519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (6))){
var inst_33088 = (state_33109[(7)]);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33109__$1,(11),to,inst_33088);
} else {
if((state_val_33110 === (3))){
var inst_33107 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33109__$1,inst_33107);
} else {
if((state_val_33110 === (12))){
var state_33109__$1 = state_33109;
var statearr_33117_34520 = state_33109__$1;
(statearr_33117_34520[(2)] = null);

(statearr_33117_34520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (2))){
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33109__$1,(4),from);
} else {
if((state_val_33110 === (11))){
var inst_33098 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33098)){
var statearr_33118_34521 = state_33109__$1;
(statearr_33118_34521[(1)] = (12));

} else {
var statearr_33119_34522 = state_33109__$1;
(statearr_33119_34522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (9))){
var state_33109__$1 = state_33109;
var statearr_33120_34523 = state_33109__$1;
(statearr_33120_34523[(2)] = null);

(statearr_33120_34523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (5))){
var state_33109__$1 = state_33109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33121_34524 = state_33109__$1;
(statearr_33121_34524[(1)] = (8));

} else {
var statearr_33122_34525 = state_33109__$1;
(statearr_33122_34525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (14))){
var inst_33103 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33123_34527 = state_33109__$1;
(statearr_33123_34527[(2)] = inst_33103);

(statearr_33123_34527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (10))){
var inst_33095 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33124_34529 = state_33109__$1;
(statearr_33124_34529[(2)] = inst_33095);

(statearr_33124_34529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (8))){
var inst_33092 = cljs.core.async.close_BANG_(to);
var state_33109__$1 = state_33109;
var statearr_33125_34530 = state_33109__$1;
(statearr_33125_34530[(2)] = inst_33092);

(statearr_33125_34530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_33126 = [null,null,null,null,null,null,null,null];
(statearr_33126[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_33126[(1)] = (1));

return statearr_33126;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_33109){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33109);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33127){var ex__32817__auto__ = e33127;
var statearr_33128_34531 = state_33109;
(statearr_33128_34531[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33109[(4)]))){
var statearr_33129_34532 = state_33109;
(statearr_33129_34532[(1)] = cljs.core.first((state_33109[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34533 = state_33109;
state_33109 = G__34533;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_33109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_33109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33130 = f__32883__auto__();
(statearr_33130[(6)] = c__32882__auto___34513);

return statearr_33130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33131){
var vec__33132 = p__33131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(1),null);
var job = vec__33132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32882__auto___34536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33139){
var state_val_33140 = (state_33139[(1)]);
if((state_val_33140 === (1))){
var state_33139__$1 = state_33139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33139__$1,(2),res,v);
} else {
if((state_val_33140 === (2))){
var inst_33136 = (state_33139[(2)]);
var inst_33137 = cljs.core.async.close_BANG_(res);
var state_33139__$1 = (function (){var statearr_33141 = state_33139;
(statearr_33141[(7)] = inst_33136);

return statearr_33141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33139__$1,inst_33137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0 = (function (){
var statearr_33142 = [null,null,null,null,null,null,null,null];
(statearr_33142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__);

(statearr_33142[(1)] = (1));

return statearr_33142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1 = (function (state_33139){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33139);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33143){var ex__32817__auto__ = e33143;
var statearr_33144_34537 = state_33139;
(statearr_33144_34537[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33139[(4)]))){
var statearr_33145_34538 = state_33139;
(statearr_33145_34538[(1)] = cljs.core.first((state_33139[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34540 = state_33139;
state_33139 = G__34540;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = function(state_33139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1.call(this,state_33139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33146 = f__32883__auto__();
(statearr_33146[(6)] = c__32882__auto___34536);

return statearr_33146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33147){
var vec__33148 = p__33147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33148,(1),null);
var job = vec__33148;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34542 = n;
var __34543 = (0);
while(true){
if((__34543 < n__4741__auto___34542)){
var G__33151_34544 = type;
var G__33151_34545__$1 = (((G__33151_34544 instanceof cljs.core.Keyword))?G__33151_34544.fqn:null);
switch (G__33151_34545__$1) {
case "compute":
var c__32882__auto___34547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34543,c__32882__auto___34547,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async){
return (function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = ((function (__34543,c__32882__auto___34547,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async){
return (function (state_33164){
var state_val_33165 = (state_33164[(1)]);
if((state_val_33165 === (1))){
var state_33164__$1 = state_33164;
var statearr_33166_34548 = state_33164__$1;
(statearr_33166_34548[(2)] = null);

(statearr_33166_34548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (2))){
var state_33164__$1 = state_33164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33164__$1,(4),jobs);
} else {
if((state_val_33165 === (3))){
var inst_33162 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33164__$1,inst_33162);
} else {
if((state_val_33165 === (4))){
var inst_33154 = (state_33164[(2)]);
var inst_33155 = process(inst_33154);
var state_33164__$1 = state_33164;
if(cljs.core.truth_(inst_33155)){
var statearr_33167_34550 = state_33164__$1;
(statearr_33167_34550[(1)] = (5));

} else {
var statearr_33168_34551 = state_33164__$1;
(statearr_33168_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (5))){
var state_33164__$1 = state_33164;
var statearr_33169_34553 = state_33164__$1;
(statearr_33169_34553[(2)] = null);

(statearr_33169_34553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (6))){
var state_33164__$1 = state_33164;
var statearr_33170_34554 = state_33164__$1;
(statearr_33170_34554[(2)] = null);

(statearr_33170_34554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (7))){
var inst_33160 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33171_34555 = state_33164__$1;
(statearr_33171_34555[(2)] = inst_33160);

(statearr_33171_34555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34543,c__32882__auto___34547,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async))
;
return ((function (__34543,switch__32813__auto__,c__32882__auto___34547,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0 = (function (){
var statearr_33172 = [null,null,null,null,null,null,null];
(statearr_33172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__);

(statearr_33172[(1)] = (1));

return statearr_33172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1 = (function (state_33164){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33164);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33173){var ex__32817__auto__ = e33173;
var statearr_33174_34556 = state_33164;
(statearr_33174_34556[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33164[(4)]))){
var statearr_33175_34557 = state_33164;
(statearr_33175_34557[(1)] = cljs.core.first((state_33164[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_33164;
state_33164 = G__34558;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = function(state_33164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1.call(this,state_33164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__;
})()
;})(__34543,switch__32813__auto__,c__32882__auto___34547,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async))
})();
var state__32884__auto__ = (function (){var statearr_33176 = f__32883__auto__();
(statearr_33176[(6)] = c__32882__auto___34547);

return statearr_33176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
});})(__34543,c__32882__auto___34547,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async))
);


break;
case "async":
var c__32882__auto___34559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34543,c__32882__auto___34559,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async){
return (function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = ((function (__34543,c__32882__auto___34559,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async){
return (function (state_33189){
var state_val_33190 = (state_33189[(1)]);
if((state_val_33190 === (1))){
var state_33189__$1 = state_33189;
var statearr_33191_34560 = state_33189__$1;
(statearr_33191_34560[(2)] = null);

(statearr_33191_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (2))){
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33189__$1,(4),jobs);
} else {
if((state_val_33190 === (3))){
var inst_33187 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33189__$1,inst_33187);
} else {
if((state_val_33190 === (4))){
var inst_33179 = (state_33189[(2)]);
var inst_33180 = async(inst_33179);
var state_33189__$1 = state_33189;
if(cljs.core.truth_(inst_33180)){
var statearr_33192_34561 = state_33189__$1;
(statearr_33192_34561[(1)] = (5));

} else {
var statearr_33193_34563 = state_33189__$1;
(statearr_33193_34563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (5))){
var state_33189__$1 = state_33189;
var statearr_33194_34564 = state_33189__$1;
(statearr_33194_34564[(2)] = null);

(statearr_33194_34564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (6))){
var state_33189__$1 = state_33189;
var statearr_33195_34566 = state_33189__$1;
(statearr_33195_34566[(2)] = null);

(statearr_33195_34566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (7))){
var inst_33185 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
var statearr_33196_34567 = state_33189__$1;
(statearr_33196_34567[(2)] = inst_33185);

(statearr_33196_34567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34543,c__32882__auto___34559,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async))
;
return ((function (__34543,switch__32813__auto__,c__32882__auto___34559,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0 = (function (){
var statearr_33197 = [null,null,null,null,null,null,null];
(statearr_33197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__);

(statearr_33197[(1)] = (1));

return statearr_33197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1 = (function (state_33189){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33189);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33198){var ex__32817__auto__ = e33198;
var statearr_33199_34568 = state_33189;
(statearr_33199_34568[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33189[(4)]))){
var statearr_33200_34569 = state_33189;
(statearr_33200_34569[(1)] = cljs.core.first((state_33189[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34570 = state_33189;
state_33189 = G__34570;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = function(state_33189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1.call(this,state_33189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__;
})()
;})(__34543,switch__32813__auto__,c__32882__auto___34559,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async))
})();
var state__32884__auto__ = (function (){var statearr_33201 = f__32883__auto__();
(statearr_33201[(6)] = c__32882__auto___34559);

return statearr_33201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
});})(__34543,c__32882__auto___34559,G__33151_34544,G__33151_34545__$1,n__4741__auto___34542,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33151_34545__$1)].join('')));

}

var G__34571 = (__34543 + (1));
__34543 = G__34571;
continue;
} else {
}
break;
}

var c__32882__auto___34572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33223){
var state_val_33224 = (state_33223[(1)]);
if((state_val_33224 === (7))){
var inst_33219 = (state_33223[(2)]);
var state_33223__$1 = state_33223;
var statearr_33225_34573 = state_33223__$1;
(statearr_33225_34573[(2)] = inst_33219);

(statearr_33225_34573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (1))){
var state_33223__$1 = state_33223;
var statearr_33226_34574 = state_33223__$1;
(statearr_33226_34574[(2)] = null);

(statearr_33226_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (4))){
var inst_33204 = (state_33223[(7)]);
var inst_33204__$1 = (state_33223[(2)]);
var inst_33205 = (inst_33204__$1 == null);
var state_33223__$1 = (function (){var statearr_33227 = state_33223;
(statearr_33227[(7)] = inst_33204__$1);

return statearr_33227;
})();
if(cljs.core.truth_(inst_33205)){
var statearr_33228_34575 = state_33223__$1;
(statearr_33228_34575[(1)] = (5));

} else {
var statearr_33229_34576 = state_33223__$1;
(statearr_33229_34576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (6))){
var inst_33204 = (state_33223[(7)]);
var inst_33209 = (state_33223[(8)]);
var inst_33209__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33211 = [inst_33204,inst_33209__$1];
var inst_33212 = (new cljs.core.PersistentVector(null,2,(5),inst_33210,inst_33211,null));
var state_33223__$1 = (function (){var statearr_33230 = state_33223;
(statearr_33230[(8)] = inst_33209__$1);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33223__$1,(8),jobs,inst_33212);
} else {
if((state_val_33224 === (3))){
var inst_33221 = (state_33223[(2)]);
var state_33223__$1 = state_33223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33223__$1,inst_33221);
} else {
if((state_val_33224 === (2))){
var state_33223__$1 = state_33223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33223__$1,(4),from);
} else {
if((state_val_33224 === (9))){
var inst_33216 = (state_33223[(2)]);
var state_33223__$1 = (function (){var statearr_33231 = state_33223;
(statearr_33231[(9)] = inst_33216);

return statearr_33231;
})();
var statearr_33232_34579 = state_33223__$1;
(statearr_33232_34579[(2)] = null);

(statearr_33232_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (5))){
var inst_33207 = cljs.core.async.close_BANG_(jobs);
var state_33223__$1 = state_33223;
var statearr_33233_34580 = state_33223__$1;
(statearr_33233_34580[(2)] = inst_33207);

(statearr_33233_34580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (8))){
var inst_33209 = (state_33223[(8)]);
var inst_33214 = (state_33223[(2)]);
var state_33223__$1 = (function (){var statearr_33234 = state_33223;
(statearr_33234[(10)] = inst_33214);

return statearr_33234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33223__$1,(9),results,inst_33209);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1 = (function (state_33223){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33223);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33236){var ex__32817__auto__ = e33236;
var statearr_33237_34581 = state_33223;
(statearr_33237_34581[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33223[(4)]))){
var statearr_33238_34582 = state_33223;
(statearr_33238_34582[(1)] = cljs.core.first((state_33223[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34583 = state_33223;
state_33223 = G__34583;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = function(state_33223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1.call(this,state_33223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33239 = f__32883__auto__();
(statearr_33239[(6)] = c__32882__auto___34572);

return statearr_33239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


var c__32882__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33277){
var state_val_33278 = (state_33277[(1)]);
if((state_val_33278 === (7))){
var inst_33273 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33279_34584 = state_33277__$1;
(statearr_33279_34584[(2)] = inst_33273);

(statearr_33279_34584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (20))){
var state_33277__$1 = state_33277;
var statearr_33280_34586 = state_33277__$1;
(statearr_33280_34586[(2)] = null);

(statearr_33280_34586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (1))){
var state_33277__$1 = state_33277;
var statearr_33281_34587 = state_33277__$1;
(statearr_33281_34587[(2)] = null);

(statearr_33281_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (4))){
var inst_33242 = (state_33277[(7)]);
var inst_33242__$1 = (state_33277[(2)]);
var inst_33243 = (inst_33242__$1 == null);
var state_33277__$1 = (function (){var statearr_33282 = state_33277;
(statearr_33282[(7)] = inst_33242__$1);

return statearr_33282;
})();
if(cljs.core.truth_(inst_33243)){
var statearr_33283_34588 = state_33277__$1;
(statearr_33283_34588[(1)] = (5));

} else {
var statearr_33284_34589 = state_33277__$1;
(statearr_33284_34589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (15))){
var inst_33255 = (state_33277[(8)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33277__$1,(18),to,inst_33255);
} else {
if((state_val_33278 === (21))){
var inst_33268 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33285_34590 = state_33277__$1;
(statearr_33285_34590[(2)] = inst_33268);

(statearr_33285_34590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (13))){
var inst_33270 = (state_33277[(2)]);
var state_33277__$1 = (function (){var statearr_33286 = state_33277;
(statearr_33286[(9)] = inst_33270);

return statearr_33286;
})();
var statearr_33287_34591 = state_33277__$1;
(statearr_33287_34591[(2)] = null);

(statearr_33287_34591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (6))){
var inst_33242 = (state_33277[(7)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33277__$1,(11),inst_33242);
} else {
if((state_val_33278 === (17))){
var inst_33263 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33263)){
var statearr_33288_34592 = state_33277__$1;
(statearr_33288_34592[(1)] = (19));

} else {
var statearr_33289_34593 = state_33277__$1;
(statearr_33289_34593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (3))){
var inst_33275 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33277__$1,inst_33275);
} else {
if((state_val_33278 === (12))){
var inst_33252 = (state_33277[(10)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33277__$1,(14),inst_33252);
} else {
if((state_val_33278 === (2))){
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33277__$1,(4),results);
} else {
if((state_val_33278 === (19))){
var state_33277__$1 = state_33277;
var statearr_33290_34598 = state_33277__$1;
(statearr_33290_34598[(2)] = null);

(statearr_33290_34598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (11))){
var inst_33252 = (state_33277[(2)]);
var state_33277__$1 = (function (){var statearr_33291 = state_33277;
(statearr_33291[(10)] = inst_33252);

return statearr_33291;
})();
var statearr_33292_34599 = state_33277__$1;
(statearr_33292_34599[(2)] = null);

(statearr_33292_34599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (9))){
var state_33277__$1 = state_33277;
var statearr_33293_34600 = state_33277__$1;
(statearr_33293_34600[(2)] = null);

(statearr_33293_34600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (5))){
var state_33277__$1 = state_33277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33294_34601 = state_33277__$1;
(statearr_33294_34601[(1)] = (8));

} else {
var statearr_33295_34602 = state_33277__$1;
(statearr_33295_34602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (14))){
var inst_33257 = (state_33277[(11)]);
var inst_33255 = (state_33277[(8)]);
var inst_33255__$1 = (state_33277[(2)]);
var inst_33256 = (inst_33255__$1 == null);
var inst_33257__$1 = cljs.core.not(inst_33256);
var state_33277__$1 = (function (){var statearr_33296 = state_33277;
(statearr_33296[(11)] = inst_33257__$1);

(statearr_33296[(8)] = inst_33255__$1);

return statearr_33296;
})();
if(inst_33257__$1){
var statearr_33297_34603 = state_33277__$1;
(statearr_33297_34603[(1)] = (15));

} else {
var statearr_33298_34604 = state_33277__$1;
(statearr_33298_34604[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (16))){
var inst_33257 = (state_33277[(11)]);
var state_33277__$1 = state_33277;
var statearr_33299_34605 = state_33277__$1;
(statearr_33299_34605[(2)] = inst_33257);

(statearr_33299_34605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (10))){
var inst_33249 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33300_34606 = state_33277__$1;
(statearr_33300_34606[(2)] = inst_33249);

(statearr_33300_34606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (18))){
var inst_33260 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33301_34607 = state_33277__$1;
(statearr_33301_34607[(2)] = inst_33260);

(statearr_33301_34607[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (8))){
var inst_33246 = cljs.core.async.close_BANG_(to);
var state_33277__$1 = state_33277;
var statearr_33302_34608 = state_33277__$1;
(statearr_33302_34608[(2)] = inst_33246);

(statearr_33302_34608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0 = (function (){
var statearr_33303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__);

(statearr_33303[(1)] = (1));

return statearr_33303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1 = (function (state_33277){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33277);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33304){var ex__32817__auto__ = e33304;
var statearr_33305_34609 = state_33277;
(statearr_33305_34609[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33277[(4)]))){
var statearr_33306_34610 = state_33277;
(statearr_33306_34610[(1)] = cljs.core.first((state_33277[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34611 = state_33277;
state_33277 = G__34611;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__ = function(state_33277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1.call(this,state_33277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33307 = f__32883__auto__();
(statearr_33307[(6)] = c__32882__auto__);

return statearr_33307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));

return c__32882__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33309 = arguments.length;
switch (G__33309) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33311 = arguments.length;
switch (G__33311) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33313 = arguments.length;
switch (G__33313) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32882__auto___34617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33339){
var state_val_33340 = (state_33339[(1)]);
if((state_val_33340 === (7))){
var inst_33335 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
var statearr_33341_34618 = state_33339__$1;
(statearr_33341_34618[(2)] = inst_33335);

(statearr_33341_34618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (1))){
var state_33339__$1 = state_33339;
var statearr_33342_34619 = state_33339__$1;
(statearr_33342_34619[(2)] = null);

(statearr_33342_34619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (4))){
var inst_33316 = (state_33339[(7)]);
var inst_33316__$1 = (state_33339[(2)]);
var inst_33317 = (inst_33316__$1 == null);
var state_33339__$1 = (function (){var statearr_33343 = state_33339;
(statearr_33343[(7)] = inst_33316__$1);

return statearr_33343;
})();
if(cljs.core.truth_(inst_33317)){
var statearr_33344_34620 = state_33339__$1;
(statearr_33344_34620[(1)] = (5));

} else {
var statearr_33345_34621 = state_33339__$1;
(statearr_33345_34621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (13))){
var state_33339__$1 = state_33339;
var statearr_33346_34622 = state_33339__$1;
(statearr_33346_34622[(2)] = null);

(statearr_33346_34622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (6))){
var inst_33316 = (state_33339[(7)]);
var inst_33322 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33316) : p.call(null,inst_33316));
var state_33339__$1 = state_33339;
if(cljs.core.truth_(inst_33322)){
var statearr_33347_34624 = state_33339__$1;
(statearr_33347_34624[(1)] = (9));

} else {
var statearr_33348_34628 = state_33339__$1;
(statearr_33348_34628[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (3))){
var inst_33337 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33339__$1,inst_33337);
} else {
if((state_val_33340 === (12))){
var state_33339__$1 = state_33339;
var statearr_33349_34632 = state_33339__$1;
(statearr_33349_34632[(2)] = null);

(statearr_33349_34632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (2))){
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33339__$1,(4),ch);
} else {
if((state_val_33340 === (11))){
var inst_33316 = (state_33339[(7)]);
var inst_33326 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33339__$1,(8),inst_33326,inst_33316);
} else {
if((state_val_33340 === (9))){
var state_33339__$1 = state_33339;
var statearr_33350_34633 = state_33339__$1;
(statearr_33350_34633[(2)] = tc);

(statearr_33350_34633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (5))){
var inst_33319 = cljs.core.async.close_BANG_(tc);
var inst_33320 = cljs.core.async.close_BANG_(fc);
var state_33339__$1 = (function (){var statearr_33351 = state_33339;
(statearr_33351[(8)] = inst_33319);

return statearr_33351;
})();
var statearr_33352_34634 = state_33339__$1;
(statearr_33352_34634[(2)] = inst_33320);

(statearr_33352_34634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (14))){
var inst_33333 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
var statearr_33353_34638 = state_33339__$1;
(statearr_33353_34638[(2)] = inst_33333);

(statearr_33353_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (10))){
var state_33339__$1 = state_33339;
var statearr_33354_34639 = state_33339__$1;
(statearr_33354_34639[(2)] = fc);

(statearr_33354_34639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (8))){
var inst_33328 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
if(cljs.core.truth_(inst_33328)){
var statearr_33355_34640 = state_33339__$1;
(statearr_33355_34640[(1)] = (12));

} else {
var statearr_33356_34641 = state_33339__$1;
(statearr_33356_34641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_33357 = [null,null,null,null,null,null,null,null,null];
(statearr_33357[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_33357[(1)] = (1));

return statearr_33357;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_33339){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33339);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33358){var ex__32817__auto__ = e33358;
var statearr_33359_34645 = state_33339;
(statearr_33359_34645[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33339[(4)]))){
var statearr_33360_34646 = state_33339;
(statearr_33360_34646[(1)] = cljs.core.first((state_33339[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34647 = state_33339;
state_33339 = G__34647;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_33339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_33339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33361 = f__32883__auto__();
(statearr_33361[(6)] = c__32882__auto___34617);

return statearr_33361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32882__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33383){
var state_val_33384 = (state_33383[(1)]);
if((state_val_33384 === (7))){
var inst_33379 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33385_34651 = state_33383__$1;
(statearr_33385_34651[(2)] = inst_33379);

(statearr_33385_34651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (1))){
var inst_33362 = init;
var inst_33363 = inst_33362;
var state_33383__$1 = (function (){var statearr_33386 = state_33383;
(statearr_33386[(7)] = inst_33363);

return statearr_33386;
})();
var statearr_33387_34652 = state_33383__$1;
(statearr_33387_34652[(2)] = null);

(statearr_33387_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (4))){
var inst_33366 = (state_33383[(8)]);
var inst_33366__$1 = (state_33383[(2)]);
var inst_33367 = (inst_33366__$1 == null);
var state_33383__$1 = (function (){var statearr_33388 = state_33383;
(statearr_33388[(8)] = inst_33366__$1);

return statearr_33388;
})();
if(cljs.core.truth_(inst_33367)){
var statearr_33389_34653 = state_33383__$1;
(statearr_33389_34653[(1)] = (5));

} else {
var statearr_33390_34654 = state_33383__$1;
(statearr_33390_34654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (6))){
var inst_33366 = (state_33383[(8)]);
var inst_33370 = (state_33383[(9)]);
var inst_33363 = (state_33383[(7)]);
var inst_33370__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33363,inst_33366) : f.call(null,inst_33363,inst_33366));
var inst_33371 = cljs.core.reduced_QMARK_(inst_33370__$1);
var state_33383__$1 = (function (){var statearr_33391 = state_33383;
(statearr_33391[(9)] = inst_33370__$1);

return statearr_33391;
})();
if(inst_33371){
var statearr_33392_34662 = state_33383__$1;
(statearr_33392_34662[(1)] = (8));

} else {
var statearr_33393_34663 = state_33383__$1;
(statearr_33393_34663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (3))){
var inst_33381 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33383__$1,inst_33381);
} else {
if((state_val_33384 === (2))){
var state_33383__$1 = state_33383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33383__$1,(4),ch);
} else {
if((state_val_33384 === (9))){
var inst_33370 = (state_33383[(9)]);
var inst_33363 = inst_33370;
var state_33383__$1 = (function (){var statearr_33394 = state_33383;
(statearr_33394[(7)] = inst_33363);

return statearr_33394;
})();
var statearr_33395_34664 = state_33383__$1;
(statearr_33395_34664[(2)] = null);

(statearr_33395_34664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (5))){
var inst_33363 = (state_33383[(7)]);
var state_33383__$1 = state_33383;
var statearr_33396_34665 = state_33383__$1;
(statearr_33396_34665[(2)] = inst_33363);

(statearr_33396_34665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (10))){
var inst_33377 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33397_34669 = state_33383__$1;
(statearr_33397_34669[(2)] = inst_33377);

(statearr_33397_34669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (8))){
var inst_33370 = (state_33383[(9)]);
var inst_33373 = cljs.core.deref(inst_33370);
var state_33383__$1 = state_33383;
var statearr_33398_34670 = state_33383__$1;
(statearr_33398_34670[(2)] = inst_33373);

(statearr_33398_34670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32814__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32814__auto____0 = (function (){
var statearr_33399 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33399[(0)] = cljs$core$async$reduce_$_state_machine__32814__auto__);

(statearr_33399[(1)] = (1));

return statearr_33399;
});
var cljs$core$async$reduce_$_state_machine__32814__auto____1 = (function (state_33383){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33383);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33400){var ex__32817__auto__ = e33400;
var statearr_33401_34674 = state_33383;
(statearr_33401_34674[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33383[(4)]))){
var statearr_33402_34675 = state_33383;
(statearr_33402_34675[(1)] = cljs.core.first((state_33383[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34676 = state_33383;
state_33383 = G__34676;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32814__auto__ = function(state_33383){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32814__auto____1.call(this,state_33383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32814__auto____0;
cljs$core$async$reduce_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32814__auto____1;
return cljs$core$async$reduce_$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33403 = f__32883__auto__();
(statearr_33403[(6)] = c__32882__auto__);

return statearr_33403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));

return c__32882__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32882__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33409){
var state_val_33410 = (state_33409[(1)]);
if((state_val_33410 === (1))){
var inst_33404 = cljs.core.async.reduce(f__$1,init,ch);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33409__$1,(2),inst_33404);
} else {
if((state_val_33410 === (2))){
var inst_33406 = (state_33409[(2)]);
var inst_33407 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33406) : f__$1.call(null,inst_33406));
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33409__$1,inst_33407);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32814__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32814__auto____0 = (function (){
var statearr_33411 = [null,null,null,null,null,null,null];
(statearr_33411[(0)] = cljs$core$async$transduce_$_state_machine__32814__auto__);

(statearr_33411[(1)] = (1));

return statearr_33411;
});
var cljs$core$async$transduce_$_state_machine__32814__auto____1 = (function (state_33409){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33409);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33412){var ex__32817__auto__ = e33412;
var statearr_33413_34680 = state_33409;
(statearr_33413_34680[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33409[(4)]))){
var statearr_33414_34681 = state_33409;
(statearr_33414_34681[(1)] = cljs.core.first((state_33409[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34682 = state_33409;
state_33409 = G__34682;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32814__auto__ = function(state_33409){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32814__auto____1.call(this,state_33409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32814__auto____0;
cljs$core$async$transduce_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32814__auto____1;
return cljs$core$async$transduce_$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33415 = f__32883__auto__();
(statearr_33415[(6)] = c__32882__auto__);

return statearr_33415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));

return c__32882__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33417 = arguments.length;
switch (G__33417) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32882__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33442){
var state_val_33443 = (state_33442[(1)]);
if((state_val_33443 === (7))){
var inst_33424 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33444_34685 = state_33442__$1;
(statearr_33444_34685[(2)] = inst_33424);

(statearr_33444_34685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (1))){
var inst_33418 = cljs.core.seq(coll);
var inst_33419 = inst_33418;
var state_33442__$1 = (function (){var statearr_33445 = state_33442;
(statearr_33445[(7)] = inst_33419);

return statearr_33445;
})();
var statearr_33446_34686 = state_33442__$1;
(statearr_33446_34686[(2)] = null);

(statearr_33446_34686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (4))){
var inst_33419 = (state_33442[(7)]);
var inst_33422 = cljs.core.first(inst_33419);
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33442__$1,(7),ch,inst_33422);
} else {
if((state_val_33443 === (13))){
var inst_33436 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33447_34687 = state_33442__$1;
(statearr_33447_34687[(2)] = inst_33436);

(statearr_33447_34687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (6))){
var inst_33427 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
if(cljs.core.truth_(inst_33427)){
var statearr_33448_34688 = state_33442__$1;
(statearr_33448_34688[(1)] = (8));

} else {
var statearr_33449_34689 = state_33442__$1;
(statearr_33449_34689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (3))){
var inst_33440 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33442__$1,inst_33440);
} else {
if((state_val_33443 === (12))){
var state_33442__$1 = state_33442;
var statearr_33450_34690 = state_33442__$1;
(statearr_33450_34690[(2)] = null);

(statearr_33450_34690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (2))){
var inst_33419 = (state_33442[(7)]);
var state_33442__$1 = state_33442;
if(cljs.core.truth_(inst_33419)){
var statearr_33451_34691 = state_33442__$1;
(statearr_33451_34691[(1)] = (4));

} else {
var statearr_33452_34692 = state_33442__$1;
(statearr_33452_34692[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (11))){
var inst_33433 = cljs.core.async.close_BANG_(ch);
var state_33442__$1 = state_33442;
var statearr_33453_34693 = state_33442__$1;
(statearr_33453_34693[(2)] = inst_33433);

(statearr_33453_34693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (9))){
var state_33442__$1 = state_33442;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33454_34694 = state_33442__$1;
(statearr_33454_34694[(1)] = (11));

} else {
var statearr_33455_34695 = state_33442__$1;
(statearr_33455_34695[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (5))){
var inst_33419 = (state_33442[(7)]);
var state_33442__$1 = state_33442;
var statearr_33456_34696 = state_33442__$1;
(statearr_33456_34696[(2)] = inst_33419);

(statearr_33456_34696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (10))){
var inst_33438 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33457_34697 = state_33442__$1;
(statearr_33457_34697[(2)] = inst_33438);

(statearr_33457_34697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (8))){
var inst_33419 = (state_33442[(7)]);
var inst_33429 = cljs.core.next(inst_33419);
var inst_33419__$1 = inst_33429;
var state_33442__$1 = (function (){var statearr_33458 = state_33442;
(statearr_33458[(7)] = inst_33419__$1);

return statearr_33458;
})();
var statearr_33459_34698 = state_33442__$1;
(statearr_33459_34698[(2)] = null);

(statearr_33459_34698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_33460 = [null,null,null,null,null,null,null,null];
(statearr_33460[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_33460[(1)] = (1));

return statearr_33460;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_33442){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33442);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33461){var ex__32817__auto__ = e33461;
var statearr_33462_34699 = state_33442;
(statearr_33462_34699[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33442[(4)]))){
var statearr_33463_34700 = state_33442;
(statearr_33463_34700[(1)] = cljs.core.first((state_33442[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34701 = state_33442;
state_33442 = G__34701;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_33442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_33442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33464 = f__32883__auto__();
(statearr_33464[(6)] = c__32882__auto__);

return statearr_33464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));

return c__32882__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33466 = arguments.length;
switch (G__33466) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34703 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34703(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34704 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34704(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34710 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34710(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34712 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34712(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33467 = (function (ch,cs,meta33468){
this.ch = ch;
this.cs = cs;
this.meta33468 = meta33468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33469,meta33468__$1){
var self__ = this;
var _33469__$1 = this;
return (new cljs.core.async.t_cljs$core$async33467(self__.ch,self__.cs,meta33468__$1));
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33469){
var self__ = this;
var _33469__$1 = this;
return self__.meta33468;
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33468","meta33468",-54574121,null)], null);
}));

(cljs.core.async.t_cljs$core$async33467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33467");

(cljs.core.async.t_cljs$core$async33467.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33467.
 */
cljs.core.async.__GT_t_cljs$core$async33467 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33467(ch__$1,cs__$1,meta33468){
return (new cljs.core.async.t_cljs$core$async33467(ch__$1,cs__$1,meta33468));
});

}

return (new cljs.core.async.t_cljs$core$async33467(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32882__auto___34715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33602){
var state_val_33603 = (state_33602[(1)]);
if((state_val_33603 === (7))){
var inst_33598 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33604_34716 = state_33602__$1;
(statearr_33604_34716[(2)] = inst_33598);

(statearr_33604_34716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (20))){
var inst_33503 = (state_33602[(7)]);
var inst_33515 = cljs.core.first(inst_33503);
var inst_33516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33515,(0),null);
var inst_33517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33515,(1),null);
var state_33602__$1 = (function (){var statearr_33605 = state_33602;
(statearr_33605[(8)] = inst_33516);

return statearr_33605;
})();
if(cljs.core.truth_(inst_33517)){
var statearr_33606_34721 = state_33602__$1;
(statearr_33606_34721[(1)] = (22));

} else {
var statearr_33607_34722 = state_33602__$1;
(statearr_33607_34722[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (27))){
var inst_33552 = (state_33602[(9)]);
var inst_33545 = (state_33602[(10)]);
var inst_33472 = (state_33602[(11)]);
var inst_33547 = (state_33602[(12)]);
var inst_33552__$1 = cljs.core._nth(inst_33545,inst_33547);
var inst_33553 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33552__$1,inst_33472,done);
var state_33602__$1 = (function (){var statearr_33608 = state_33602;
(statearr_33608[(9)] = inst_33552__$1);

return statearr_33608;
})();
if(cljs.core.truth_(inst_33553)){
var statearr_33609_34723 = state_33602__$1;
(statearr_33609_34723[(1)] = (30));

} else {
var statearr_33610_34726 = state_33602__$1;
(statearr_33610_34726[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (1))){
var state_33602__$1 = state_33602;
var statearr_33611_34727 = state_33602__$1;
(statearr_33611_34727[(2)] = null);

(statearr_33611_34727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (24))){
var inst_33503 = (state_33602[(7)]);
var inst_33522 = (state_33602[(2)]);
var inst_33523 = cljs.core.next(inst_33503);
var inst_33481 = inst_33523;
var inst_33482 = null;
var inst_33483 = (0);
var inst_33484 = (0);
var state_33602__$1 = (function (){var statearr_33612 = state_33602;
(statearr_33612[(13)] = inst_33483);

(statearr_33612[(14)] = inst_33481);

(statearr_33612[(15)] = inst_33482);

(statearr_33612[(16)] = inst_33522);

(statearr_33612[(17)] = inst_33484);

return statearr_33612;
})();
var statearr_33613_34730 = state_33602__$1;
(statearr_33613_34730[(2)] = null);

(statearr_33613_34730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (39))){
var state_33602__$1 = state_33602;
var statearr_33617_34731 = state_33602__$1;
(statearr_33617_34731[(2)] = null);

(statearr_33617_34731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (4))){
var inst_33472 = (state_33602[(11)]);
var inst_33472__$1 = (state_33602[(2)]);
var inst_33473 = (inst_33472__$1 == null);
var state_33602__$1 = (function (){var statearr_33618 = state_33602;
(statearr_33618[(11)] = inst_33472__$1);

return statearr_33618;
})();
if(cljs.core.truth_(inst_33473)){
var statearr_33619_34735 = state_33602__$1;
(statearr_33619_34735[(1)] = (5));

} else {
var statearr_33620_34736 = state_33602__$1;
(statearr_33620_34736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (15))){
var inst_33483 = (state_33602[(13)]);
var inst_33481 = (state_33602[(14)]);
var inst_33482 = (state_33602[(15)]);
var inst_33484 = (state_33602[(17)]);
var inst_33499 = (state_33602[(2)]);
var inst_33500 = (inst_33484 + (1));
var tmp33614 = inst_33483;
var tmp33615 = inst_33481;
var tmp33616 = inst_33482;
var inst_33481__$1 = tmp33615;
var inst_33482__$1 = tmp33616;
var inst_33483__$1 = tmp33614;
var inst_33484__$1 = inst_33500;
var state_33602__$1 = (function (){var statearr_33621 = state_33602;
(statearr_33621[(13)] = inst_33483__$1);

(statearr_33621[(14)] = inst_33481__$1);

(statearr_33621[(15)] = inst_33482__$1);

(statearr_33621[(18)] = inst_33499);

(statearr_33621[(17)] = inst_33484__$1);

return statearr_33621;
})();
var statearr_33622_34747 = state_33602__$1;
(statearr_33622_34747[(2)] = null);

(statearr_33622_34747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (21))){
var inst_33526 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33626_34748 = state_33602__$1;
(statearr_33626_34748[(2)] = inst_33526);

(statearr_33626_34748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (31))){
var inst_33552 = (state_33602[(9)]);
var inst_33556 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33552);
var state_33602__$1 = state_33602;
var statearr_33627_34749 = state_33602__$1;
(statearr_33627_34749[(2)] = inst_33556);

(statearr_33627_34749[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (32))){
var inst_33545 = (state_33602[(10)]);
var inst_33544 = (state_33602[(19)]);
var inst_33546 = (state_33602[(20)]);
var inst_33547 = (state_33602[(12)]);
var inst_33558 = (state_33602[(2)]);
var inst_33559 = (inst_33547 + (1));
var tmp33623 = inst_33545;
var tmp33624 = inst_33544;
var tmp33625 = inst_33546;
var inst_33544__$1 = tmp33624;
var inst_33545__$1 = tmp33623;
var inst_33546__$1 = tmp33625;
var inst_33547__$1 = inst_33559;
var state_33602__$1 = (function (){var statearr_33628 = state_33602;
(statearr_33628[(10)] = inst_33545__$1);

(statearr_33628[(21)] = inst_33558);

(statearr_33628[(19)] = inst_33544__$1);

(statearr_33628[(20)] = inst_33546__$1);

(statearr_33628[(12)] = inst_33547__$1);

return statearr_33628;
})();
var statearr_33629_34750 = state_33602__$1;
(statearr_33629_34750[(2)] = null);

(statearr_33629_34750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (40))){
var inst_33571 = (state_33602[(22)]);
var inst_33575 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33571);
var state_33602__$1 = state_33602;
var statearr_33630_34751 = state_33602__$1;
(statearr_33630_34751[(2)] = inst_33575);

(statearr_33630_34751[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (33))){
var inst_33562 = (state_33602[(23)]);
var inst_33564 = cljs.core.chunked_seq_QMARK_(inst_33562);
var state_33602__$1 = state_33602;
if(inst_33564){
var statearr_33631_34752 = state_33602__$1;
(statearr_33631_34752[(1)] = (36));

} else {
var statearr_33632_34753 = state_33602__$1;
(statearr_33632_34753[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (13))){
var inst_33493 = (state_33602[(24)]);
var inst_33496 = cljs.core.async.close_BANG_(inst_33493);
var state_33602__$1 = state_33602;
var statearr_33633_34754 = state_33602__$1;
(statearr_33633_34754[(2)] = inst_33496);

(statearr_33633_34754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (22))){
var inst_33516 = (state_33602[(8)]);
var inst_33519 = cljs.core.async.close_BANG_(inst_33516);
var state_33602__$1 = state_33602;
var statearr_33634_34755 = state_33602__$1;
(statearr_33634_34755[(2)] = inst_33519);

(statearr_33634_34755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (36))){
var inst_33562 = (state_33602[(23)]);
var inst_33566 = cljs.core.chunk_first(inst_33562);
var inst_33567 = cljs.core.chunk_rest(inst_33562);
var inst_33568 = cljs.core.count(inst_33566);
var inst_33544 = inst_33567;
var inst_33545 = inst_33566;
var inst_33546 = inst_33568;
var inst_33547 = (0);
var state_33602__$1 = (function (){var statearr_33635 = state_33602;
(statearr_33635[(10)] = inst_33545);

(statearr_33635[(19)] = inst_33544);

(statearr_33635[(20)] = inst_33546);

(statearr_33635[(12)] = inst_33547);

return statearr_33635;
})();
var statearr_33636_34756 = state_33602__$1;
(statearr_33636_34756[(2)] = null);

(statearr_33636_34756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (41))){
var inst_33562 = (state_33602[(23)]);
var inst_33577 = (state_33602[(2)]);
var inst_33578 = cljs.core.next(inst_33562);
var inst_33544 = inst_33578;
var inst_33545 = null;
var inst_33546 = (0);
var inst_33547 = (0);
var state_33602__$1 = (function (){var statearr_33637 = state_33602;
(statearr_33637[(10)] = inst_33545);

(statearr_33637[(19)] = inst_33544);

(statearr_33637[(25)] = inst_33577);

(statearr_33637[(20)] = inst_33546);

(statearr_33637[(12)] = inst_33547);

return statearr_33637;
})();
var statearr_33638_34757 = state_33602__$1;
(statearr_33638_34757[(2)] = null);

(statearr_33638_34757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (43))){
var state_33602__$1 = state_33602;
var statearr_33639_34764 = state_33602__$1;
(statearr_33639_34764[(2)] = null);

(statearr_33639_34764[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (29))){
var inst_33586 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33640_34765 = state_33602__$1;
(statearr_33640_34765[(2)] = inst_33586);

(statearr_33640_34765[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (44))){
var inst_33595 = (state_33602[(2)]);
var state_33602__$1 = (function (){var statearr_33641 = state_33602;
(statearr_33641[(26)] = inst_33595);

return statearr_33641;
})();
var statearr_33642_34766 = state_33602__$1;
(statearr_33642_34766[(2)] = null);

(statearr_33642_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (6))){
var inst_33536 = (state_33602[(27)]);
var inst_33535 = cljs.core.deref(cs);
var inst_33536__$1 = cljs.core.keys(inst_33535);
var inst_33537 = cljs.core.count(inst_33536__$1);
var inst_33538 = cljs.core.reset_BANG_(dctr,inst_33537);
var inst_33543 = cljs.core.seq(inst_33536__$1);
var inst_33544 = inst_33543;
var inst_33545 = null;
var inst_33546 = (0);
var inst_33547 = (0);
var state_33602__$1 = (function (){var statearr_33643 = state_33602;
(statearr_33643[(10)] = inst_33545);

(statearr_33643[(28)] = inst_33538);

(statearr_33643[(27)] = inst_33536__$1);

(statearr_33643[(19)] = inst_33544);

(statearr_33643[(20)] = inst_33546);

(statearr_33643[(12)] = inst_33547);

return statearr_33643;
})();
var statearr_33644_34767 = state_33602__$1;
(statearr_33644_34767[(2)] = null);

(statearr_33644_34767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (28))){
var inst_33544 = (state_33602[(19)]);
var inst_33562 = (state_33602[(23)]);
var inst_33562__$1 = cljs.core.seq(inst_33544);
var state_33602__$1 = (function (){var statearr_33645 = state_33602;
(statearr_33645[(23)] = inst_33562__$1);

return statearr_33645;
})();
if(inst_33562__$1){
var statearr_33646_34768 = state_33602__$1;
(statearr_33646_34768[(1)] = (33));

} else {
var statearr_33647_34769 = state_33602__$1;
(statearr_33647_34769[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (25))){
var inst_33546 = (state_33602[(20)]);
var inst_33547 = (state_33602[(12)]);
var inst_33549 = (inst_33547 < inst_33546);
var inst_33550 = inst_33549;
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33550)){
var statearr_33648_34770 = state_33602__$1;
(statearr_33648_34770[(1)] = (27));

} else {
var statearr_33649_34771 = state_33602__$1;
(statearr_33649_34771[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (34))){
var state_33602__$1 = state_33602;
var statearr_33650_34772 = state_33602__$1;
(statearr_33650_34772[(2)] = null);

(statearr_33650_34772[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (17))){
var state_33602__$1 = state_33602;
var statearr_33651_34773 = state_33602__$1;
(statearr_33651_34773[(2)] = null);

(statearr_33651_34773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (3))){
var inst_33600 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33602__$1,inst_33600);
} else {
if((state_val_33603 === (12))){
var inst_33531 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33652_34774 = state_33602__$1;
(statearr_33652_34774[(2)] = inst_33531);

(statearr_33652_34774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (2))){
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33602__$1,(4),ch);
} else {
if((state_val_33603 === (23))){
var state_33602__$1 = state_33602;
var statearr_33653_34775 = state_33602__$1;
(statearr_33653_34775[(2)] = null);

(statearr_33653_34775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (35))){
var inst_33584 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33654_34782 = state_33602__$1;
(statearr_33654_34782[(2)] = inst_33584);

(statearr_33654_34782[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (19))){
var inst_33503 = (state_33602[(7)]);
var inst_33507 = cljs.core.chunk_first(inst_33503);
var inst_33508 = cljs.core.chunk_rest(inst_33503);
var inst_33509 = cljs.core.count(inst_33507);
var inst_33481 = inst_33508;
var inst_33482 = inst_33507;
var inst_33483 = inst_33509;
var inst_33484 = (0);
var state_33602__$1 = (function (){var statearr_33655 = state_33602;
(statearr_33655[(13)] = inst_33483);

(statearr_33655[(14)] = inst_33481);

(statearr_33655[(15)] = inst_33482);

(statearr_33655[(17)] = inst_33484);

return statearr_33655;
})();
var statearr_33656_34783 = state_33602__$1;
(statearr_33656_34783[(2)] = null);

(statearr_33656_34783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (11))){
var inst_33481 = (state_33602[(14)]);
var inst_33503 = (state_33602[(7)]);
var inst_33503__$1 = cljs.core.seq(inst_33481);
var state_33602__$1 = (function (){var statearr_33657 = state_33602;
(statearr_33657[(7)] = inst_33503__$1);

return statearr_33657;
})();
if(inst_33503__$1){
var statearr_33658_34784 = state_33602__$1;
(statearr_33658_34784[(1)] = (16));

} else {
var statearr_33659_34785 = state_33602__$1;
(statearr_33659_34785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (9))){
var inst_33533 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33660_34786 = state_33602__$1;
(statearr_33660_34786[(2)] = inst_33533);

(statearr_33660_34786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (5))){
var inst_33479 = cljs.core.deref(cs);
var inst_33480 = cljs.core.seq(inst_33479);
var inst_33481 = inst_33480;
var inst_33482 = null;
var inst_33483 = (0);
var inst_33484 = (0);
var state_33602__$1 = (function (){var statearr_33661 = state_33602;
(statearr_33661[(13)] = inst_33483);

(statearr_33661[(14)] = inst_33481);

(statearr_33661[(15)] = inst_33482);

(statearr_33661[(17)] = inst_33484);

return statearr_33661;
})();
var statearr_33662_34787 = state_33602__$1;
(statearr_33662_34787[(2)] = null);

(statearr_33662_34787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (14))){
var state_33602__$1 = state_33602;
var statearr_33663_34788 = state_33602__$1;
(statearr_33663_34788[(2)] = null);

(statearr_33663_34788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (45))){
var inst_33592 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33664_34789 = state_33602__$1;
(statearr_33664_34789[(2)] = inst_33592);

(statearr_33664_34789[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (26))){
var inst_33536 = (state_33602[(27)]);
var inst_33588 = (state_33602[(2)]);
var inst_33589 = cljs.core.seq(inst_33536);
var state_33602__$1 = (function (){var statearr_33665 = state_33602;
(statearr_33665[(29)] = inst_33588);

return statearr_33665;
})();
if(inst_33589){
var statearr_33666_34790 = state_33602__$1;
(statearr_33666_34790[(1)] = (42));

} else {
var statearr_33667_34791 = state_33602__$1;
(statearr_33667_34791[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (16))){
var inst_33503 = (state_33602[(7)]);
var inst_33505 = cljs.core.chunked_seq_QMARK_(inst_33503);
var state_33602__$1 = state_33602;
if(inst_33505){
var statearr_33668_34792 = state_33602__$1;
(statearr_33668_34792[(1)] = (19));

} else {
var statearr_33669_34793 = state_33602__$1;
(statearr_33669_34793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (38))){
var inst_33581 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33670_34794 = state_33602__$1;
(statearr_33670_34794[(2)] = inst_33581);

(statearr_33670_34794[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (30))){
var state_33602__$1 = state_33602;
var statearr_33671_34795 = state_33602__$1;
(statearr_33671_34795[(2)] = null);

(statearr_33671_34795[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (10))){
var inst_33482 = (state_33602[(15)]);
var inst_33484 = (state_33602[(17)]);
var inst_33492 = cljs.core._nth(inst_33482,inst_33484);
var inst_33493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33492,(0),null);
var inst_33494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33492,(1),null);
var state_33602__$1 = (function (){var statearr_33672 = state_33602;
(statearr_33672[(24)] = inst_33493);

return statearr_33672;
})();
if(cljs.core.truth_(inst_33494)){
var statearr_33673_34802 = state_33602__$1;
(statearr_33673_34802[(1)] = (13));

} else {
var statearr_33674_34803 = state_33602__$1;
(statearr_33674_34803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (18))){
var inst_33529 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33675_34804 = state_33602__$1;
(statearr_33675_34804[(2)] = inst_33529);

(statearr_33675_34804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (42))){
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33602__$1,(45),dchan);
} else {
if((state_val_33603 === (37))){
var inst_33571 = (state_33602[(22)]);
var inst_33472 = (state_33602[(11)]);
var inst_33562 = (state_33602[(23)]);
var inst_33571__$1 = cljs.core.first(inst_33562);
var inst_33572 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33571__$1,inst_33472,done);
var state_33602__$1 = (function (){var statearr_33676 = state_33602;
(statearr_33676[(22)] = inst_33571__$1);

return statearr_33676;
})();
if(cljs.core.truth_(inst_33572)){
var statearr_33677_34805 = state_33602__$1;
(statearr_33677_34805[(1)] = (39));

} else {
var statearr_33678_34806 = state_33602__$1;
(statearr_33678_34806[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (8))){
var inst_33483 = (state_33602[(13)]);
var inst_33484 = (state_33602[(17)]);
var inst_33486 = (inst_33484 < inst_33483);
var inst_33487 = inst_33486;
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33487)){
var statearr_33679_34807 = state_33602__$1;
(statearr_33679_34807[(1)] = (10));

} else {
var statearr_33680_34808 = state_33602__$1;
(statearr_33680_34808[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32814__auto__ = null;
var cljs$core$async$mult_$_state_machine__32814__auto____0 = (function (){
var statearr_33681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33681[(0)] = cljs$core$async$mult_$_state_machine__32814__auto__);

(statearr_33681[(1)] = (1));

return statearr_33681;
});
var cljs$core$async$mult_$_state_machine__32814__auto____1 = (function (state_33602){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33602);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33682){var ex__32817__auto__ = e33682;
var statearr_33683_34809 = state_33602;
(statearr_33683_34809[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33602[(4)]))){
var statearr_33684_34810 = state_33602;
(statearr_33684_34810[(1)] = cljs.core.first((state_33602[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34811 = state_33602;
state_33602 = G__34811;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32814__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32814__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32814__auto____0;
cljs$core$async$mult_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32814__auto____1;
return cljs$core$async$mult_$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33685 = f__32883__auto__();
(statearr_33685[(6)] = c__32882__auto___34715);

return statearr_33685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33687 = arguments.length;
switch (G__33687) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34813 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34813(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34814 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34814(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34815 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34815(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34816 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34816(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34817 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34817(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34819 = arguments.length;
var i__4865__auto___34824 = (0);
while(true){
if((i__4865__auto___34824 < len__4864__auto___34819)){
args__4870__auto__.push((arguments[i__4865__auto___34824]));

var G__34825 = (i__4865__auto___34824 + (1));
i__4865__auto___34824 = G__34825;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33692){
var map__33693 = p__33692;
var map__33693__$1 = cljs.core.__destructure_map(map__33693);
var opts = map__33693__$1;
var statearr_33694_34826 = state;
(statearr_33694_34826[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33695_34827 = state;
(statearr_33695_34827[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33696_34828 = state;
(statearr_33696_34828[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33688){
var G__33689 = cljs.core.first(seq33688);
var seq33688__$1 = cljs.core.next(seq33688);
var G__33690 = cljs.core.first(seq33688__$1);
var seq33688__$2 = cljs.core.next(seq33688__$1);
var G__33691 = cljs.core.first(seq33688__$2);
var seq33688__$3 = cljs.core.next(seq33688__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33689,G__33690,G__33691,seq33688__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33697 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33698){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33698 = meta33698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33699,meta33698__$1){
var self__ = this;
var _33699__$1 = this;
return (new cljs.core.async.t_cljs$core$async33697(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33698__$1));
}));

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33699){
var self__ = this;
var _33699__$1 = this;
return self__.meta33698;
}));

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33698","meta33698",-1134369626,null)], null);
}));

(cljs.core.async.t_cljs$core$async33697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33697");

(cljs.core.async.t_cljs$core$async33697.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33697.
 */
cljs.core.async.__GT_t_cljs$core$async33697 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33698){
return (new cljs.core.async.t_cljs$core$async33697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33698));
});

}

return (new cljs.core.async.t_cljs$core$async33697(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32882__auto___34833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33767){
var state_val_33768 = (state_33767[(1)]);
if((state_val_33768 === (7))){
var inst_33727 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
if(cljs.core.truth_(inst_33727)){
var statearr_33769_34834 = state_33767__$1;
(statearr_33769_34834[(1)] = (8));

} else {
var statearr_33770_34835 = state_33767__$1;
(statearr_33770_34835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (20))){
var inst_33720 = (state_33767[(7)]);
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33767__$1,(23),out,inst_33720);
} else {
if((state_val_33768 === (1))){
var inst_33703 = calc_state();
var inst_33704 = cljs.core.__destructure_map(inst_33703);
var inst_33705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33704,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33704,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33704,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33708 = inst_33703;
var state_33767__$1 = (function (){var statearr_33771 = state_33767;
(statearr_33771[(8)] = inst_33708);

(statearr_33771[(9)] = inst_33706);

(statearr_33771[(10)] = inst_33705);

(statearr_33771[(11)] = inst_33707);

return statearr_33771;
})();
var statearr_33772_34836 = state_33767__$1;
(statearr_33772_34836[(2)] = null);

(statearr_33772_34836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (24))){
var inst_33711 = (state_33767[(12)]);
var inst_33708 = inst_33711;
var state_33767__$1 = (function (){var statearr_33773 = state_33767;
(statearr_33773[(8)] = inst_33708);

return statearr_33773;
})();
var statearr_33774_34837 = state_33767__$1;
(statearr_33774_34837[(2)] = null);

(statearr_33774_34837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (4))){
var inst_33722 = (state_33767[(13)]);
var inst_33720 = (state_33767[(7)]);
var inst_33719 = (state_33767[(2)]);
var inst_33720__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33719,(0),null);
var inst_33721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33719,(1),null);
var inst_33722__$1 = (inst_33720__$1 == null);
var state_33767__$1 = (function (){var statearr_33775 = state_33767;
(statearr_33775[(13)] = inst_33722__$1);

(statearr_33775[(14)] = inst_33721);

(statearr_33775[(7)] = inst_33720__$1);

return statearr_33775;
})();
if(cljs.core.truth_(inst_33722__$1)){
var statearr_33776_34838 = state_33767__$1;
(statearr_33776_34838[(1)] = (5));

} else {
var statearr_33777_34839 = state_33767__$1;
(statearr_33777_34839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (15))){
var inst_33712 = (state_33767[(15)]);
var inst_33741 = (state_33767[(16)]);
var inst_33741__$1 = cljs.core.empty_QMARK_(inst_33712);
var state_33767__$1 = (function (){var statearr_33778 = state_33767;
(statearr_33778[(16)] = inst_33741__$1);

return statearr_33778;
})();
if(inst_33741__$1){
var statearr_33779_34840 = state_33767__$1;
(statearr_33779_34840[(1)] = (17));

} else {
var statearr_33780_34841 = state_33767__$1;
(statearr_33780_34841[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (21))){
var inst_33711 = (state_33767[(12)]);
var inst_33708 = inst_33711;
var state_33767__$1 = (function (){var statearr_33781 = state_33767;
(statearr_33781[(8)] = inst_33708);

return statearr_33781;
})();
var statearr_33782_34843 = state_33767__$1;
(statearr_33782_34843[(2)] = null);

(statearr_33782_34843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (13))){
var inst_33734 = (state_33767[(2)]);
var inst_33735 = calc_state();
var inst_33708 = inst_33735;
var state_33767__$1 = (function (){var statearr_33783 = state_33767;
(statearr_33783[(8)] = inst_33708);

(statearr_33783[(17)] = inst_33734);

return statearr_33783;
})();
var statearr_33784_34845 = state_33767__$1;
(statearr_33784_34845[(2)] = null);

(statearr_33784_34845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (22))){
var inst_33761 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33785_34846 = state_33767__$1;
(statearr_33785_34846[(2)] = inst_33761);

(statearr_33785_34846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (6))){
var inst_33721 = (state_33767[(14)]);
var inst_33725 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33721,change);
var state_33767__$1 = state_33767;
var statearr_33786_34847 = state_33767__$1;
(statearr_33786_34847[(2)] = inst_33725);

(statearr_33786_34847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (25))){
var state_33767__$1 = state_33767;
var statearr_33787_34848 = state_33767__$1;
(statearr_33787_34848[(2)] = null);

(statearr_33787_34848[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (17))){
var inst_33721 = (state_33767[(14)]);
var inst_33713 = (state_33767[(18)]);
var inst_33743 = (inst_33713.cljs$core$IFn$_invoke$arity$1 ? inst_33713.cljs$core$IFn$_invoke$arity$1(inst_33721) : inst_33713.call(null,inst_33721));
var inst_33744 = cljs.core.not(inst_33743);
var state_33767__$1 = state_33767;
var statearr_33788_34849 = state_33767__$1;
(statearr_33788_34849[(2)] = inst_33744);

(statearr_33788_34849[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (3))){
var inst_33765 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33767__$1,inst_33765);
} else {
if((state_val_33768 === (12))){
var state_33767__$1 = state_33767;
var statearr_33789_34850 = state_33767__$1;
(statearr_33789_34850[(2)] = null);

(statearr_33789_34850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (2))){
var inst_33708 = (state_33767[(8)]);
var inst_33711 = (state_33767[(12)]);
var inst_33711__$1 = cljs.core.__destructure_map(inst_33708);
var inst_33712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33711__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33711__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33711__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33767__$1 = (function (){var statearr_33790 = state_33767;
(statearr_33790[(18)] = inst_33713);

(statearr_33790[(15)] = inst_33712);

(statearr_33790[(12)] = inst_33711__$1);

return statearr_33790;
})();
return cljs.core.async.ioc_alts_BANG_(state_33767__$1,(4),inst_33714);
} else {
if((state_val_33768 === (23))){
var inst_33752 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
if(cljs.core.truth_(inst_33752)){
var statearr_33791_34851 = state_33767__$1;
(statearr_33791_34851[(1)] = (24));

} else {
var statearr_33792_34852 = state_33767__$1;
(statearr_33792_34852[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (19))){
var inst_33747 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33793_34853 = state_33767__$1;
(statearr_33793_34853[(2)] = inst_33747);

(statearr_33793_34853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (11))){
var inst_33721 = (state_33767[(14)]);
var inst_33731 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33721);
var state_33767__$1 = state_33767;
var statearr_33794_34854 = state_33767__$1;
(statearr_33794_34854[(2)] = inst_33731);

(statearr_33794_34854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (9))){
var inst_33738 = (state_33767[(19)]);
var inst_33721 = (state_33767[(14)]);
var inst_33712 = (state_33767[(15)]);
var inst_33738__$1 = (inst_33712.cljs$core$IFn$_invoke$arity$1 ? inst_33712.cljs$core$IFn$_invoke$arity$1(inst_33721) : inst_33712.call(null,inst_33721));
var state_33767__$1 = (function (){var statearr_33795 = state_33767;
(statearr_33795[(19)] = inst_33738__$1);

return statearr_33795;
})();
if(cljs.core.truth_(inst_33738__$1)){
var statearr_33796_34855 = state_33767__$1;
(statearr_33796_34855[(1)] = (14));

} else {
var statearr_33797_34856 = state_33767__$1;
(statearr_33797_34856[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (5))){
var inst_33722 = (state_33767[(13)]);
var state_33767__$1 = state_33767;
var statearr_33798_34857 = state_33767__$1;
(statearr_33798_34857[(2)] = inst_33722);

(statearr_33798_34857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (14))){
var inst_33738 = (state_33767[(19)]);
var state_33767__$1 = state_33767;
var statearr_33799_34858 = state_33767__$1;
(statearr_33799_34858[(2)] = inst_33738);

(statearr_33799_34858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (26))){
var inst_33757 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33800_34859 = state_33767__$1;
(statearr_33800_34859[(2)] = inst_33757);

(statearr_33800_34859[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (16))){
var inst_33749 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
if(cljs.core.truth_(inst_33749)){
var statearr_33801_34860 = state_33767__$1;
(statearr_33801_34860[(1)] = (20));

} else {
var statearr_33802_34861 = state_33767__$1;
(statearr_33802_34861[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (10))){
var inst_33763 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33803_34862 = state_33767__$1;
(statearr_33803_34862[(2)] = inst_33763);

(statearr_33803_34862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (18))){
var inst_33741 = (state_33767[(16)]);
var state_33767__$1 = state_33767;
var statearr_33804_34864 = state_33767__$1;
(statearr_33804_34864[(2)] = inst_33741);

(statearr_33804_34864[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (8))){
var inst_33720 = (state_33767[(7)]);
var inst_33729 = (inst_33720 == null);
var state_33767__$1 = state_33767;
if(cljs.core.truth_(inst_33729)){
var statearr_33805_34865 = state_33767__$1;
(statearr_33805_34865[(1)] = (11));

} else {
var statearr_33806_34866 = state_33767__$1;
(statearr_33806_34866[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32814__auto__ = null;
var cljs$core$async$mix_$_state_machine__32814__auto____0 = (function (){
var statearr_33807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33807[(0)] = cljs$core$async$mix_$_state_machine__32814__auto__);

(statearr_33807[(1)] = (1));

return statearr_33807;
});
var cljs$core$async$mix_$_state_machine__32814__auto____1 = (function (state_33767){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33767);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33808){var ex__32817__auto__ = e33808;
var statearr_33809_34867 = state_33767;
(statearr_33809_34867[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33767[(4)]))){
var statearr_33810_34868 = state_33767;
(statearr_33810_34868[(1)] = cljs.core.first((state_33767[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34869 = state_33767;
state_33767 = G__34869;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32814__auto__ = function(state_33767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32814__auto____1.call(this,state_33767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32814__auto____0;
cljs$core$async$mix_$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32814__auto____1;
return cljs$core$async$mix_$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33811 = f__32883__auto__();
(statearr_33811[(6)] = c__32882__auto___34833);

return statearr_33811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34874 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34874(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34875 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34875(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34876 = (function() {
var G__34877 = null;
var G__34877__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34877__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34877 = function(p,v){
switch(arguments.length){
case 1:
return G__34877__1.call(this,p);
case 2:
return G__34877__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34877.cljs$core$IFn$_invoke$arity$1 = G__34877__1;
G__34877.cljs$core$IFn$_invoke$arity$2 = G__34877__2;
return G__34877;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33813 = arguments.length;
switch (G__33813) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34876(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34876(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33816 = arguments.length;
switch (G__33816) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33814_SHARP_){
if(cljs.core.truth_((p1__33814_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33814_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33814_SHARP_.call(null,topic)))){
return p1__33814_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33814_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33817 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33818){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33818 = meta33818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33819,meta33818__$1){
var self__ = this;
var _33819__$1 = this;
return (new cljs.core.async.t_cljs$core$async33817(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33818__$1));
}));

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33819){
var self__ = this;
var _33819__$1 = this;
return self__.meta33818;
}));

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33818","meta33818",-718242574,null)], null);
}));

(cljs.core.async.t_cljs$core$async33817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33817");

(cljs.core.async.t_cljs$core$async33817.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33817.
 */
cljs.core.async.__GT_t_cljs$core$async33817 = (function cljs$core$async$__GT_t_cljs$core$async33817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33818){
return (new cljs.core.async.t_cljs$core$async33817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33818));
});

}

return (new cljs.core.async.t_cljs$core$async33817(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32882__auto___34900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33891){
var state_val_33892 = (state_33891[(1)]);
if((state_val_33892 === (7))){
var inst_33887 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
var statearr_33893_34901 = state_33891__$1;
(statearr_33893_34901[(2)] = inst_33887);

(statearr_33893_34901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (20))){
var state_33891__$1 = state_33891;
var statearr_33894_34902 = state_33891__$1;
(statearr_33894_34902[(2)] = null);

(statearr_33894_34902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (1))){
var state_33891__$1 = state_33891;
var statearr_33895_34903 = state_33891__$1;
(statearr_33895_34903[(2)] = null);

(statearr_33895_34903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (24))){
var inst_33870 = (state_33891[(7)]);
var inst_33879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33870);
var state_33891__$1 = state_33891;
var statearr_33896_34904 = state_33891__$1;
(statearr_33896_34904[(2)] = inst_33879);

(statearr_33896_34904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (4))){
var inst_33822 = (state_33891[(8)]);
var inst_33822__$1 = (state_33891[(2)]);
var inst_33823 = (inst_33822__$1 == null);
var state_33891__$1 = (function (){var statearr_33897 = state_33891;
(statearr_33897[(8)] = inst_33822__$1);

return statearr_33897;
})();
if(cljs.core.truth_(inst_33823)){
var statearr_33898_34905 = state_33891__$1;
(statearr_33898_34905[(1)] = (5));

} else {
var statearr_33899_34906 = state_33891__$1;
(statearr_33899_34906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (15))){
var inst_33864 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
var statearr_33900_34907 = state_33891__$1;
(statearr_33900_34907[(2)] = inst_33864);

(statearr_33900_34907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (21))){
var inst_33884 = (state_33891[(2)]);
var state_33891__$1 = (function (){var statearr_33901 = state_33891;
(statearr_33901[(9)] = inst_33884);

return statearr_33901;
})();
var statearr_33902_34908 = state_33891__$1;
(statearr_33902_34908[(2)] = null);

(statearr_33902_34908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (13))){
var inst_33846 = (state_33891[(10)]);
var inst_33848 = cljs.core.chunked_seq_QMARK_(inst_33846);
var state_33891__$1 = state_33891;
if(inst_33848){
var statearr_33903_34910 = state_33891__$1;
(statearr_33903_34910[(1)] = (16));

} else {
var statearr_33904_34911 = state_33891__$1;
(statearr_33904_34911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (22))){
var inst_33876 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
if(cljs.core.truth_(inst_33876)){
var statearr_33905_34913 = state_33891__$1;
(statearr_33905_34913[(1)] = (23));

} else {
var statearr_33906_34914 = state_33891__$1;
(statearr_33906_34914[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (6))){
var inst_33872 = (state_33891[(11)]);
var inst_33822 = (state_33891[(8)]);
var inst_33870 = (state_33891[(7)]);
var inst_33870__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33822) : topic_fn.call(null,inst_33822));
var inst_33871 = cljs.core.deref(mults);
var inst_33872__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33871,inst_33870__$1);
var state_33891__$1 = (function (){var statearr_33907 = state_33891;
(statearr_33907[(11)] = inst_33872__$1);

(statearr_33907[(7)] = inst_33870__$1);

return statearr_33907;
})();
if(cljs.core.truth_(inst_33872__$1)){
var statearr_33908_34915 = state_33891__$1;
(statearr_33908_34915[(1)] = (19));

} else {
var statearr_33909_34916 = state_33891__$1;
(statearr_33909_34916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (25))){
var inst_33881 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
var statearr_33910_34917 = state_33891__$1;
(statearr_33910_34917[(2)] = inst_33881);

(statearr_33910_34917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (17))){
var inst_33846 = (state_33891[(10)]);
var inst_33855 = cljs.core.first(inst_33846);
var inst_33856 = cljs.core.async.muxch_STAR_(inst_33855);
var inst_33857 = cljs.core.async.close_BANG_(inst_33856);
var inst_33858 = cljs.core.next(inst_33846);
var inst_33832 = inst_33858;
var inst_33833 = null;
var inst_33834 = (0);
var inst_33835 = (0);
var state_33891__$1 = (function (){var statearr_33911 = state_33891;
(statearr_33911[(12)] = inst_33857);

(statearr_33911[(13)] = inst_33832);

(statearr_33911[(14)] = inst_33834);

(statearr_33911[(15)] = inst_33835);

(statearr_33911[(16)] = inst_33833);

return statearr_33911;
})();
var statearr_33912_34918 = state_33891__$1;
(statearr_33912_34918[(2)] = null);

(statearr_33912_34918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (3))){
var inst_33889 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33891__$1,inst_33889);
} else {
if((state_val_33892 === (12))){
var inst_33866 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
var statearr_33913_34919 = state_33891__$1;
(statearr_33913_34919[(2)] = inst_33866);

(statearr_33913_34919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (2))){
var state_33891__$1 = state_33891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33891__$1,(4),ch);
} else {
if((state_val_33892 === (23))){
var state_33891__$1 = state_33891;
var statearr_33914_34920 = state_33891__$1;
(statearr_33914_34920[(2)] = null);

(statearr_33914_34920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (19))){
var inst_33872 = (state_33891[(11)]);
var inst_33822 = (state_33891[(8)]);
var inst_33874 = cljs.core.async.muxch_STAR_(inst_33872);
var state_33891__$1 = state_33891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33891__$1,(22),inst_33874,inst_33822);
} else {
if((state_val_33892 === (11))){
var inst_33832 = (state_33891[(13)]);
var inst_33846 = (state_33891[(10)]);
var inst_33846__$1 = cljs.core.seq(inst_33832);
var state_33891__$1 = (function (){var statearr_33915 = state_33891;
(statearr_33915[(10)] = inst_33846__$1);

return statearr_33915;
})();
if(inst_33846__$1){
var statearr_33916_34921 = state_33891__$1;
(statearr_33916_34921[(1)] = (13));

} else {
var statearr_33917_34922 = state_33891__$1;
(statearr_33917_34922[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (9))){
var inst_33868 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
var statearr_33918_34923 = state_33891__$1;
(statearr_33918_34923[(2)] = inst_33868);

(statearr_33918_34923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (5))){
var inst_33829 = cljs.core.deref(mults);
var inst_33830 = cljs.core.vals(inst_33829);
var inst_33831 = cljs.core.seq(inst_33830);
var inst_33832 = inst_33831;
var inst_33833 = null;
var inst_33834 = (0);
var inst_33835 = (0);
var state_33891__$1 = (function (){var statearr_33919 = state_33891;
(statearr_33919[(13)] = inst_33832);

(statearr_33919[(14)] = inst_33834);

(statearr_33919[(15)] = inst_33835);

(statearr_33919[(16)] = inst_33833);

return statearr_33919;
})();
var statearr_33920_34924 = state_33891__$1;
(statearr_33920_34924[(2)] = null);

(statearr_33920_34924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (14))){
var state_33891__$1 = state_33891;
var statearr_33924_34925 = state_33891__$1;
(statearr_33924_34925[(2)] = null);

(statearr_33924_34925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (16))){
var inst_33846 = (state_33891[(10)]);
var inst_33850 = cljs.core.chunk_first(inst_33846);
var inst_33851 = cljs.core.chunk_rest(inst_33846);
var inst_33852 = cljs.core.count(inst_33850);
var inst_33832 = inst_33851;
var inst_33833 = inst_33850;
var inst_33834 = inst_33852;
var inst_33835 = (0);
var state_33891__$1 = (function (){var statearr_33925 = state_33891;
(statearr_33925[(13)] = inst_33832);

(statearr_33925[(14)] = inst_33834);

(statearr_33925[(15)] = inst_33835);

(statearr_33925[(16)] = inst_33833);

return statearr_33925;
})();
var statearr_33926_34926 = state_33891__$1;
(statearr_33926_34926[(2)] = null);

(statearr_33926_34926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (10))){
var inst_33832 = (state_33891[(13)]);
var inst_33834 = (state_33891[(14)]);
var inst_33835 = (state_33891[(15)]);
var inst_33833 = (state_33891[(16)]);
var inst_33840 = cljs.core._nth(inst_33833,inst_33835);
var inst_33841 = cljs.core.async.muxch_STAR_(inst_33840);
var inst_33842 = cljs.core.async.close_BANG_(inst_33841);
var inst_33843 = (inst_33835 + (1));
var tmp33921 = inst_33832;
var tmp33922 = inst_33834;
var tmp33923 = inst_33833;
var inst_33832__$1 = tmp33921;
var inst_33833__$1 = tmp33923;
var inst_33834__$1 = tmp33922;
var inst_33835__$1 = inst_33843;
var state_33891__$1 = (function (){var statearr_33927 = state_33891;
(statearr_33927[(13)] = inst_33832__$1);

(statearr_33927[(14)] = inst_33834__$1);

(statearr_33927[(15)] = inst_33835__$1);

(statearr_33927[(17)] = inst_33842);

(statearr_33927[(16)] = inst_33833__$1);

return statearr_33927;
})();
var statearr_33928_34927 = state_33891__$1;
(statearr_33928_34927[(2)] = null);

(statearr_33928_34927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (18))){
var inst_33861 = (state_33891[(2)]);
var state_33891__$1 = state_33891;
var statearr_33929_34932 = state_33891__$1;
(statearr_33929_34932[(2)] = inst_33861);

(statearr_33929_34932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33892 === (8))){
var inst_33834 = (state_33891[(14)]);
var inst_33835 = (state_33891[(15)]);
var inst_33837 = (inst_33835 < inst_33834);
var inst_33838 = inst_33837;
var state_33891__$1 = state_33891;
if(cljs.core.truth_(inst_33838)){
var statearr_33930_34933 = state_33891__$1;
(statearr_33930_34933[(1)] = (10));

} else {
var statearr_33931_34934 = state_33891__$1;
(statearr_33931_34934[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_33932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33932[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_33932[(1)] = (1));

return statearr_33932;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_33891){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33891);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e33933){var ex__32817__auto__ = e33933;
var statearr_33934_34935 = state_33891;
(statearr_33934_34935[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33891[(4)]))){
var statearr_33935_34936 = state_33891;
(statearr_33935_34936[(1)] = cljs.core.first((state_33891[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34937 = state_33891;
state_33891 = G__34937;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_33891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_33891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_33936 = f__32883__auto__();
(statearr_33936[(6)] = c__32882__auto___34900);

return statearr_33936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33938 = arguments.length;
switch (G__33938) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33940 = arguments.length;
switch (G__33940) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33942 = arguments.length;
switch (G__33942) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32882__auto___34946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_33985){
var state_val_33986 = (state_33985[(1)]);
if((state_val_33986 === (7))){
var state_33985__$1 = state_33985;
var statearr_33987_34948 = state_33985__$1;
(statearr_33987_34948[(2)] = null);

(statearr_33987_34948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (1))){
var state_33985__$1 = state_33985;
var statearr_33988_34949 = state_33985__$1;
(statearr_33988_34949[(2)] = null);

(statearr_33988_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (4))){
var inst_33946 = (state_33985[(7)]);
var inst_33945 = (state_33985[(8)]);
var inst_33948 = (inst_33946 < inst_33945);
var state_33985__$1 = state_33985;
if(cljs.core.truth_(inst_33948)){
var statearr_33989_34950 = state_33985__$1;
(statearr_33989_34950[(1)] = (6));

} else {
var statearr_33990_34951 = state_33985__$1;
(statearr_33990_34951[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (15))){
var inst_33971 = (state_33985[(9)]);
var inst_33976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33971);
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33985__$1,(17),out,inst_33976);
} else {
if((state_val_33986 === (13))){
var inst_33971 = (state_33985[(9)]);
var inst_33971__$1 = (state_33985[(2)]);
var inst_33972 = cljs.core.some(cljs.core.nil_QMARK_,inst_33971__$1);
var state_33985__$1 = (function (){var statearr_33991 = state_33985;
(statearr_33991[(9)] = inst_33971__$1);

return statearr_33991;
})();
if(cljs.core.truth_(inst_33972)){
var statearr_33992_34952 = state_33985__$1;
(statearr_33992_34952[(1)] = (14));

} else {
var statearr_33993_34954 = state_33985__$1;
(statearr_33993_34954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (6))){
var state_33985__$1 = state_33985;
var statearr_33994_34958 = state_33985__$1;
(statearr_33994_34958[(2)] = null);

(statearr_33994_34958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (17))){
var inst_33978 = (state_33985[(2)]);
var state_33985__$1 = (function (){var statearr_33996 = state_33985;
(statearr_33996[(10)] = inst_33978);

return statearr_33996;
})();
var statearr_33997_34959 = state_33985__$1;
(statearr_33997_34959[(2)] = null);

(statearr_33997_34959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (3))){
var inst_33983 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33985__$1,inst_33983);
} else {
if((state_val_33986 === (12))){
var _ = (function (){var statearr_33998 = state_33985;
(statearr_33998[(4)] = cljs.core.rest((state_33985[(4)])));

return statearr_33998;
})();
var state_33985__$1 = state_33985;
var ex33995 = (state_33985__$1[(2)]);
var statearr_33999_34960 = state_33985__$1;
(statearr_33999_34960[(5)] = ex33995);


if((ex33995 instanceof Object)){
var statearr_34000_34961 = state_33985__$1;
(statearr_34000_34961[(1)] = (11));

(statearr_34000_34961[(5)] = null);

} else {
throw ex33995;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (2))){
var inst_33944 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33945 = cnt;
var inst_33946 = (0);
var state_33985__$1 = (function (){var statearr_34001 = state_33985;
(statearr_34001[(11)] = inst_33944);

(statearr_34001[(7)] = inst_33946);

(statearr_34001[(8)] = inst_33945);

return statearr_34001;
})();
var statearr_34002_34962 = state_33985__$1;
(statearr_34002_34962[(2)] = null);

(statearr_34002_34962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (11))){
var inst_33950 = (state_33985[(2)]);
var inst_33951 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33985__$1 = (function (){var statearr_34003 = state_33985;
(statearr_34003[(12)] = inst_33950);

return statearr_34003;
})();
var statearr_34004_34963 = state_33985__$1;
(statearr_34004_34963[(2)] = inst_33951);

(statearr_34004_34963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (9))){
var inst_33946 = (state_33985[(7)]);
var _ = (function (){var statearr_34005 = state_33985;
(statearr_34005[(4)] = cljs.core.cons((12),(state_33985[(4)])));

return statearr_34005;
})();
var inst_33957 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33946) : chs__$1.call(null,inst_33946));
var inst_33958 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33946) : done.call(null,inst_33946));
var inst_33959 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33957,inst_33958);
var ___$1 = (function (){var statearr_34006 = state_33985;
(statearr_34006[(4)] = cljs.core.rest((state_33985[(4)])));

return statearr_34006;
})();
var state_33985__$1 = state_33985;
var statearr_34007_34964 = state_33985__$1;
(statearr_34007_34964[(2)] = inst_33959);

(statearr_34007_34964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (5))){
var inst_33969 = (state_33985[(2)]);
var state_33985__$1 = (function (){var statearr_34008 = state_33985;
(statearr_34008[(13)] = inst_33969);

return statearr_34008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33985__$1,(13),dchan);
} else {
if((state_val_33986 === (14))){
var inst_33974 = cljs.core.async.close_BANG_(out);
var state_33985__$1 = state_33985;
var statearr_34009_34965 = state_33985__$1;
(statearr_34009_34965[(2)] = inst_33974);

(statearr_34009_34965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (16))){
var inst_33981 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34010_34966 = state_33985__$1;
(statearr_34010_34966[(2)] = inst_33981);

(statearr_34010_34966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (10))){
var inst_33946 = (state_33985[(7)]);
var inst_33962 = (state_33985[(2)]);
var inst_33963 = (inst_33946 + (1));
var inst_33946__$1 = inst_33963;
var state_33985__$1 = (function (){var statearr_34011 = state_33985;
(statearr_34011[(14)] = inst_33962);

(statearr_34011[(7)] = inst_33946__$1);

return statearr_34011;
})();
var statearr_34012_34967 = state_33985__$1;
(statearr_34012_34967[(2)] = null);

(statearr_34012_34967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (8))){
var inst_33967 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34013_34968 = state_33985__$1;
(statearr_34013_34968[(2)] = inst_33967);

(statearr_34013_34968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_34014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34014[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_34014[(1)] = (1));

return statearr_34014;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_33985){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_33985);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34015){var ex__32817__auto__ = e34015;
var statearr_34016_34969 = state_33985;
(statearr_34016_34969[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_33985[(4)]))){
var statearr_34017_34970 = state_33985;
(statearr_34017_34970[(1)] = cljs.core.first((state_33985[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34971 = state_33985;
state_33985 = G__34971;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_33985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_33985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34018 = f__32883__auto__();
(statearr_34018[(6)] = c__32882__auto___34946);

return statearr_34018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34021 = arguments.length;
switch (G__34021) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32882__auto___34973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_34053){
var state_val_34054 = (state_34053[(1)]);
if((state_val_34054 === (7))){
var inst_34033 = (state_34053[(7)]);
var inst_34032 = (state_34053[(8)]);
var inst_34032__$1 = (state_34053[(2)]);
var inst_34033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34032__$1,(0),null);
var inst_34034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34032__$1,(1),null);
var inst_34035 = (inst_34033__$1 == null);
var state_34053__$1 = (function (){var statearr_34055 = state_34053;
(statearr_34055[(7)] = inst_34033__$1);

(statearr_34055[(8)] = inst_34032__$1);

(statearr_34055[(9)] = inst_34034);

return statearr_34055;
})();
if(cljs.core.truth_(inst_34035)){
var statearr_34056_34974 = state_34053__$1;
(statearr_34056_34974[(1)] = (8));

} else {
var statearr_34057_34975 = state_34053__$1;
(statearr_34057_34975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34054 === (1))){
var inst_34022 = cljs.core.vec(chs);
var inst_34023 = inst_34022;
var state_34053__$1 = (function (){var statearr_34058 = state_34053;
(statearr_34058[(10)] = inst_34023);

return statearr_34058;
})();
var statearr_34059_34977 = state_34053__$1;
(statearr_34059_34977[(2)] = null);

(statearr_34059_34977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34054 === (4))){
var inst_34023 = (state_34053[(10)]);
var state_34053__$1 = state_34053;
return cljs.core.async.ioc_alts_BANG_(state_34053__$1,(7),inst_34023);
} else {
if((state_val_34054 === (6))){
var inst_34049 = (state_34053[(2)]);
var state_34053__$1 = state_34053;
var statearr_34060_34981 = state_34053__$1;
(statearr_34060_34981[(2)] = inst_34049);

(statearr_34060_34981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34054 === (3))){
var inst_34051 = (state_34053[(2)]);
var state_34053__$1 = state_34053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34053__$1,inst_34051);
} else {
if((state_val_34054 === (2))){
var inst_34023 = (state_34053[(10)]);
var inst_34025 = cljs.core.count(inst_34023);
var inst_34026 = (inst_34025 > (0));
var state_34053__$1 = state_34053;
if(cljs.core.truth_(inst_34026)){
var statearr_34062_34982 = state_34053__$1;
(statearr_34062_34982[(1)] = (4));

} else {
var statearr_34063_34983 = state_34053__$1;
(statearr_34063_34983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34054 === (11))){
var inst_34023 = (state_34053[(10)]);
var inst_34042 = (state_34053[(2)]);
var tmp34061 = inst_34023;
var inst_34023__$1 = tmp34061;
var state_34053__$1 = (function (){var statearr_34064 = state_34053;
(statearr_34064[(11)] = inst_34042);

(statearr_34064[(10)] = inst_34023__$1);

return statearr_34064;
})();
var statearr_34065_34984 = state_34053__$1;
(statearr_34065_34984[(2)] = null);

(statearr_34065_34984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34054 === (9))){
var inst_34033 = (state_34053[(7)]);
var state_34053__$1 = state_34053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34053__$1,(11),out,inst_34033);
} else {
if((state_val_34054 === (5))){
var inst_34047 = cljs.core.async.close_BANG_(out);
var state_34053__$1 = state_34053;
var statearr_34066_34985 = state_34053__$1;
(statearr_34066_34985[(2)] = inst_34047);

(statearr_34066_34985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34054 === (10))){
var inst_34045 = (state_34053[(2)]);
var state_34053__$1 = state_34053;
var statearr_34067_34986 = state_34053__$1;
(statearr_34067_34986[(2)] = inst_34045);

(statearr_34067_34986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34054 === (8))){
var inst_34033 = (state_34053[(7)]);
var inst_34032 = (state_34053[(8)]);
var inst_34034 = (state_34053[(9)]);
var inst_34023 = (state_34053[(10)]);
var inst_34037 = (function (){var cs = inst_34023;
var vec__34028 = inst_34032;
var v = inst_34033;
var c = inst_34034;
return (function (p1__34019_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34019_SHARP_);
});
})();
var inst_34038 = cljs.core.filterv(inst_34037,inst_34023);
var inst_34023__$1 = inst_34038;
var state_34053__$1 = (function (){var statearr_34068 = state_34053;
(statearr_34068[(10)] = inst_34023__$1);

return statearr_34068;
})();
var statearr_34069_34987 = state_34053__$1;
(statearr_34069_34987[(2)] = null);

(statearr_34069_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_34053){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_34053);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34071){var ex__32817__auto__ = e34071;
var statearr_34072_34988 = state_34053;
(statearr_34072_34988[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_34053[(4)]))){
var statearr_34073_34989 = state_34053;
(statearr_34073_34989[(1)] = cljs.core.first((state_34053[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34990 = state_34053;
state_34053 = G__34990;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_34053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_34053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34074 = f__32883__auto__();
(statearr_34074[(6)] = c__32882__auto___34973);

return statearr_34074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34076 = arguments.length;
switch (G__34076) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32882__auto___34993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_34100){
var state_val_34101 = (state_34100[(1)]);
if((state_val_34101 === (7))){
var inst_34082 = (state_34100[(7)]);
var inst_34082__$1 = (state_34100[(2)]);
var inst_34083 = (inst_34082__$1 == null);
var inst_34084 = cljs.core.not(inst_34083);
var state_34100__$1 = (function (){var statearr_34102 = state_34100;
(statearr_34102[(7)] = inst_34082__$1);

return statearr_34102;
})();
if(inst_34084){
var statearr_34103_34994 = state_34100__$1;
(statearr_34103_34994[(1)] = (8));

} else {
var statearr_34104_34995 = state_34100__$1;
(statearr_34104_34995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (1))){
var inst_34077 = (0);
var state_34100__$1 = (function (){var statearr_34105 = state_34100;
(statearr_34105[(8)] = inst_34077);

return statearr_34105;
})();
var statearr_34106_34996 = state_34100__$1;
(statearr_34106_34996[(2)] = null);

(statearr_34106_34996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (4))){
var state_34100__$1 = state_34100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34100__$1,(7),ch);
} else {
if((state_val_34101 === (6))){
var inst_34095 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34107_34997 = state_34100__$1;
(statearr_34107_34997[(2)] = inst_34095);

(statearr_34107_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (3))){
var inst_34097 = (state_34100[(2)]);
var inst_34098 = cljs.core.async.close_BANG_(out);
var state_34100__$1 = (function (){var statearr_34108 = state_34100;
(statearr_34108[(9)] = inst_34097);

return statearr_34108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34100__$1,inst_34098);
} else {
if((state_val_34101 === (2))){
var inst_34077 = (state_34100[(8)]);
var inst_34079 = (inst_34077 < n);
var state_34100__$1 = state_34100;
if(cljs.core.truth_(inst_34079)){
var statearr_34109_34998 = state_34100__$1;
(statearr_34109_34998[(1)] = (4));

} else {
var statearr_34110_34999 = state_34100__$1;
(statearr_34110_34999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (11))){
var inst_34077 = (state_34100[(8)]);
var inst_34087 = (state_34100[(2)]);
var inst_34088 = (inst_34077 + (1));
var inst_34077__$1 = inst_34088;
var state_34100__$1 = (function (){var statearr_34111 = state_34100;
(statearr_34111[(8)] = inst_34077__$1);

(statearr_34111[(10)] = inst_34087);

return statearr_34111;
})();
var statearr_34112_35004 = state_34100__$1;
(statearr_34112_35004[(2)] = null);

(statearr_34112_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (9))){
var state_34100__$1 = state_34100;
var statearr_34113_35005 = state_34100__$1;
(statearr_34113_35005[(2)] = null);

(statearr_34113_35005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (5))){
var state_34100__$1 = state_34100;
var statearr_34114_35006 = state_34100__$1;
(statearr_34114_35006[(2)] = null);

(statearr_34114_35006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (10))){
var inst_34092 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34115_35008 = state_34100__$1;
(statearr_34115_35008[(2)] = inst_34092);

(statearr_34115_35008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (8))){
var inst_34082 = (state_34100[(7)]);
var state_34100__$1 = state_34100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34100__$1,(11),out,inst_34082);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_34116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34116[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_34116[(1)] = (1));

return statearr_34116;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_34100){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_34100);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34117){var ex__32817__auto__ = e34117;
var statearr_34118_35009 = state_34100;
(statearr_34118_35009[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_34100[(4)]))){
var statearr_34119_35010 = state_34100;
(statearr_34119_35010[(1)] = cljs.core.first((state_34100[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35011 = state_34100;
state_34100 = G__35011;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_34100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_34100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34120 = f__32883__auto__();
(statearr_34120[(6)] = c__32882__auto___34993);

return statearr_34120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34122 = (function (f,ch,meta34123){
this.f = f;
this.ch = ch;
this.meta34123 = meta34123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34124,meta34123__$1){
var self__ = this;
var _34124__$1 = this;
return (new cljs.core.async.t_cljs$core$async34122(self__.f,self__.ch,meta34123__$1));
}));

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34124){
var self__ = this;
var _34124__$1 = this;
return self__.meta34123;
}));

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34125 = (function (f,ch,meta34123,_,fn1,meta34126){
this.f = f;
this.ch = ch;
this.meta34123 = meta34123;
this._ = _;
this.fn1 = fn1;
this.meta34126 = meta34126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34127,meta34126__$1){
var self__ = this;
var _34127__$1 = this;
return (new cljs.core.async.t_cljs$core$async34125(self__.f,self__.ch,self__.meta34123,self__._,self__.fn1,meta34126__$1));
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34127){
var self__ = this;
var _34127__$1 = this;
return self__.meta34126;
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34121_SHARP_){
var G__34128 = (((p1__34121_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34121_SHARP_) : self__.f.call(null,p1__34121_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34128) : f1.call(null,G__34128));
});
}));

(cljs.core.async.t_cljs$core$async34125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34123","meta34123",570143412,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34122","cljs.core.async/t_cljs$core$async34122",1581615121,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34126","meta34126",-419475767,null)], null);
}));

(cljs.core.async.t_cljs$core$async34125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34125");

(cljs.core.async.t_cljs$core$async34125.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34125.
 */
cljs.core.async.__GT_t_cljs$core$async34125 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34125(f__$1,ch__$1,meta34123__$1,___$2,fn1__$1,meta34126){
return (new cljs.core.async.t_cljs$core$async34125(f__$1,ch__$1,meta34123__$1,___$2,fn1__$1,meta34126));
});

}

return (new cljs.core.async.t_cljs$core$async34125(self__.f,self__.ch,self__.meta34123,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34129 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34129) : self__.f.call(null,G__34129));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34123","meta34123",570143412,null)], null);
}));

(cljs.core.async.t_cljs$core$async34122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34122");

(cljs.core.async.t_cljs$core$async34122.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34122.
 */
cljs.core.async.__GT_t_cljs$core$async34122 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34122(f__$1,ch__$1,meta34123){
return (new cljs.core.async.t_cljs$core$async34122(f__$1,ch__$1,meta34123));
});

}

return (new cljs.core.async.t_cljs$core$async34122(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34130 = (function (f,ch,meta34131){
this.f = f;
this.ch = ch;
this.meta34131 = meta34131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34132,meta34131__$1){
var self__ = this;
var _34132__$1 = this;
return (new cljs.core.async.t_cljs$core$async34130(self__.f,self__.ch,meta34131__$1));
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34132){
var self__ = this;
var _34132__$1 = this;
return self__.meta34131;
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34131","meta34131",-1368441011,null)], null);
}));

(cljs.core.async.t_cljs$core$async34130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34130");

(cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34130.
 */
cljs.core.async.__GT_t_cljs$core$async34130 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34130(f__$1,ch__$1,meta34131){
return (new cljs.core.async.t_cljs$core$async34130(f__$1,ch__$1,meta34131));
});

}

return (new cljs.core.async.t_cljs$core$async34130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34133 = (function (p,ch,meta34134){
this.p = p;
this.ch = ch;
this.meta34134 = meta34134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34135,meta34134__$1){
var self__ = this;
var _34135__$1 = this;
return (new cljs.core.async.t_cljs$core$async34133(self__.p,self__.ch,meta34134__$1));
}));

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34135){
var self__ = this;
var _34135__$1 = this;
return self__.meta34134;
}));

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34134","meta34134",-659214757,null)], null);
}));

(cljs.core.async.t_cljs$core$async34133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34133");

(cljs.core.async.t_cljs$core$async34133.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34133.
 */
cljs.core.async.__GT_t_cljs$core$async34133 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34133(p__$1,ch__$1,meta34134){
return (new cljs.core.async.t_cljs$core$async34133(p__$1,ch__$1,meta34134));
});

}

return (new cljs.core.async.t_cljs$core$async34133(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34137 = arguments.length;
switch (G__34137) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32882__auto___35022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_34158){
var state_val_34159 = (state_34158[(1)]);
if((state_val_34159 === (7))){
var inst_34154 = (state_34158[(2)]);
var state_34158__$1 = state_34158;
var statearr_34160_35023 = state_34158__$1;
(statearr_34160_35023[(2)] = inst_34154);

(statearr_34160_35023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (1))){
var state_34158__$1 = state_34158;
var statearr_34161_35024 = state_34158__$1;
(statearr_34161_35024[(2)] = null);

(statearr_34161_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (4))){
var inst_34140 = (state_34158[(7)]);
var inst_34140__$1 = (state_34158[(2)]);
var inst_34141 = (inst_34140__$1 == null);
var state_34158__$1 = (function (){var statearr_34162 = state_34158;
(statearr_34162[(7)] = inst_34140__$1);

return statearr_34162;
})();
if(cljs.core.truth_(inst_34141)){
var statearr_34163_35025 = state_34158__$1;
(statearr_34163_35025[(1)] = (5));

} else {
var statearr_34164_35026 = state_34158__$1;
(statearr_34164_35026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (6))){
var inst_34140 = (state_34158[(7)]);
var inst_34145 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34140) : p.call(null,inst_34140));
var state_34158__$1 = state_34158;
if(cljs.core.truth_(inst_34145)){
var statearr_34165_35027 = state_34158__$1;
(statearr_34165_35027[(1)] = (8));

} else {
var statearr_34166_35028 = state_34158__$1;
(statearr_34166_35028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (3))){
var inst_34156 = (state_34158[(2)]);
var state_34158__$1 = state_34158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34158__$1,inst_34156);
} else {
if((state_val_34159 === (2))){
var state_34158__$1 = state_34158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34158__$1,(4),ch);
} else {
if((state_val_34159 === (11))){
var inst_34148 = (state_34158[(2)]);
var state_34158__$1 = state_34158;
var statearr_34167_35029 = state_34158__$1;
(statearr_34167_35029[(2)] = inst_34148);

(statearr_34167_35029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (9))){
var state_34158__$1 = state_34158;
var statearr_34168_35030 = state_34158__$1;
(statearr_34168_35030[(2)] = null);

(statearr_34168_35030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (5))){
var inst_34143 = cljs.core.async.close_BANG_(out);
var state_34158__$1 = state_34158;
var statearr_34169_35031 = state_34158__$1;
(statearr_34169_35031[(2)] = inst_34143);

(statearr_34169_35031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (10))){
var inst_34151 = (state_34158[(2)]);
var state_34158__$1 = (function (){var statearr_34170 = state_34158;
(statearr_34170[(8)] = inst_34151);

return statearr_34170;
})();
var statearr_34171_35032 = state_34158__$1;
(statearr_34171_35032[(2)] = null);

(statearr_34171_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34159 === (8))){
var inst_34140 = (state_34158[(7)]);
var state_34158__$1 = state_34158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34158__$1,(11),out,inst_34140);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_34172 = [null,null,null,null,null,null,null,null,null];
(statearr_34172[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_34172[(1)] = (1));

return statearr_34172;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_34158){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_34158);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34173){var ex__32817__auto__ = e34173;
var statearr_34174_35034 = state_34158;
(statearr_34174_35034[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_34158[(4)]))){
var statearr_34175_35035 = state_34158;
(statearr_34175_35035[(1)] = cljs.core.first((state_34158[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35036 = state_34158;
state_34158 = G__35036;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_34158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_34158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34176 = f__32883__auto__();
(statearr_34176[(6)] = c__32882__auto___35022);

return statearr_34176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34178 = arguments.length;
switch (G__34178) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32882__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_34240){
var state_val_34241 = (state_34240[(1)]);
if((state_val_34241 === (7))){
var inst_34236 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34242_35038 = state_34240__$1;
(statearr_34242_35038[(2)] = inst_34236);

(statearr_34242_35038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (20))){
var inst_34206 = (state_34240[(7)]);
var inst_34217 = (state_34240[(2)]);
var inst_34218 = cljs.core.next(inst_34206);
var inst_34192 = inst_34218;
var inst_34193 = null;
var inst_34194 = (0);
var inst_34195 = (0);
var state_34240__$1 = (function (){var statearr_34243 = state_34240;
(statearr_34243[(8)] = inst_34194);

(statearr_34243[(9)] = inst_34193);

(statearr_34243[(10)] = inst_34217);

(statearr_34243[(11)] = inst_34195);

(statearr_34243[(12)] = inst_34192);

return statearr_34243;
})();
var statearr_34244_35039 = state_34240__$1;
(statearr_34244_35039[(2)] = null);

(statearr_34244_35039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (1))){
var state_34240__$1 = state_34240;
var statearr_34245_35040 = state_34240__$1;
(statearr_34245_35040[(2)] = null);

(statearr_34245_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (4))){
var inst_34181 = (state_34240[(13)]);
var inst_34181__$1 = (state_34240[(2)]);
var inst_34182 = (inst_34181__$1 == null);
var state_34240__$1 = (function (){var statearr_34246 = state_34240;
(statearr_34246[(13)] = inst_34181__$1);

return statearr_34246;
})();
if(cljs.core.truth_(inst_34182)){
var statearr_34247_35041 = state_34240__$1;
(statearr_34247_35041[(1)] = (5));

} else {
var statearr_34248_35042 = state_34240__$1;
(statearr_34248_35042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (15))){
var state_34240__$1 = state_34240;
var statearr_34252_35043 = state_34240__$1;
(statearr_34252_35043[(2)] = null);

(statearr_34252_35043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (21))){
var state_34240__$1 = state_34240;
var statearr_34253_35044 = state_34240__$1;
(statearr_34253_35044[(2)] = null);

(statearr_34253_35044[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (13))){
var inst_34194 = (state_34240[(8)]);
var inst_34193 = (state_34240[(9)]);
var inst_34195 = (state_34240[(11)]);
var inst_34192 = (state_34240[(12)]);
var inst_34202 = (state_34240[(2)]);
var inst_34203 = (inst_34195 + (1));
var tmp34249 = inst_34194;
var tmp34250 = inst_34193;
var tmp34251 = inst_34192;
var inst_34192__$1 = tmp34251;
var inst_34193__$1 = tmp34250;
var inst_34194__$1 = tmp34249;
var inst_34195__$1 = inst_34203;
var state_34240__$1 = (function (){var statearr_34254 = state_34240;
(statearr_34254[(8)] = inst_34194__$1);

(statearr_34254[(14)] = inst_34202);

(statearr_34254[(9)] = inst_34193__$1);

(statearr_34254[(11)] = inst_34195__$1);

(statearr_34254[(12)] = inst_34192__$1);

return statearr_34254;
})();
var statearr_34255_35045 = state_34240__$1;
(statearr_34255_35045[(2)] = null);

(statearr_34255_35045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (22))){
var state_34240__$1 = state_34240;
var statearr_34256_35046 = state_34240__$1;
(statearr_34256_35046[(2)] = null);

(statearr_34256_35046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (6))){
var inst_34181 = (state_34240[(13)]);
var inst_34190 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34181) : f.call(null,inst_34181));
var inst_34191 = cljs.core.seq(inst_34190);
var inst_34192 = inst_34191;
var inst_34193 = null;
var inst_34194 = (0);
var inst_34195 = (0);
var state_34240__$1 = (function (){var statearr_34257 = state_34240;
(statearr_34257[(8)] = inst_34194);

(statearr_34257[(9)] = inst_34193);

(statearr_34257[(11)] = inst_34195);

(statearr_34257[(12)] = inst_34192);

return statearr_34257;
})();
var statearr_34258_35047 = state_34240__$1;
(statearr_34258_35047[(2)] = null);

(statearr_34258_35047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (17))){
var inst_34206 = (state_34240[(7)]);
var inst_34210 = cljs.core.chunk_first(inst_34206);
var inst_34211 = cljs.core.chunk_rest(inst_34206);
var inst_34212 = cljs.core.count(inst_34210);
var inst_34192 = inst_34211;
var inst_34193 = inst_34210;
var inst_34194 = inst_34212;
var inst_34195 = (0);
var state_34240__$1 = (function (){var statearr_34259 = state_34240;
(statearr_34259[(8)] = inst_34194);

(statearr_34259[(9)] = inst_34193);

(statearr_34259[(11)] = inst_34195);

(statearr_34259[(12)] = inst_34192);

return statearr_34259;
})();
var statearr_34260_35048 = state_34240__$1;
(statearr_34260_35048[(2)] = null);

(statearr_34260_35048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (3))){
var inst_34238 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34240__$1,inst_34238);
} else {
if((state_val_34241 === (12))){
var inst_34226 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34261_35049 = state_34240__$1;
(statearr_34261_35049[(2)] = inst_34226);

(statearr_34261_35049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (2))){
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34240__$1,(4),in$);
} else {
if((state_val_34241 === (23))){
var inst_34234 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34262_35050 = state_34240__$1;
(statearr_34262_35050[(2)] = inst_34234);

(statearr_34262_35050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (19))){
var inst_34221 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34263_35051 = state_34240__$1;
(statearr_34263_35051[(2)] = inst_34221);

(statearr_34263_35051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (11))){
var inst_34206 = (state_34240[(7)]);
var inst_34192 = (state_34240[(12)]);
var inst_34206__$1 = cljs.core.seq(inst_34192);
var state_34240__$1 = (function (){var statearr_34264 = state_34240;
(statearr_34264[(7)] = inst_34206__$1);

return statearr_34264;
})();
if(inst_34206__$1){
var statearr_34265_35053 = state_34240__$1;
(statearr_34265_35053[(1)] = (14));

} else {
var statearr_34266_35054 = state_34240__$1;
(statearr_34266_35054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (9))){
var inst_34228 = (state_34240[(2)]);
var inst_34229 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34240__$1 = (function (){var statearr_34267 = state_34240;
(statearr_34267[(15)] = inst_34228);

return statearr_34267;
})();
if(cljs.core.truth_(inst_34229)){
var statearr_34268_35058 = state_34240__$1;
(statearr_34268_35058[(1)] = (21));

} else {
var statearr_34269_35059 = state_34240__$1;
(statearr_34269_35059[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (5))){
var inst_34184 = cljs.core.async.close_BANG_(out);
var state_34240__$1 = state_34240;
var statearr_34270_35060 = state_34240__$1;
(statearr_34270_35060[(2)] = inst_34184);

(statearr_34270_35060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (14))){
var inst_34206 = (state_34240[(7)]);
var inst_34208 = cljs.core.chunked_seq_QMARK_(inst_34206);
var state_34240__$1 = state_34240;
if(inst_34208){
var statearr_34271_35065 = state_34240__$1;
(statearr_34271_35065[(1)] = (17));

} else {
var statearr_34272_35066 = state_34240__$1;
(statearr_34272_35066[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (16))){
var inst_34224 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34273_35067 = state_34240__$1;
(statearr_34273_35067[(2)] = inst_34224);

(statearr_34273_35067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (10))){
var inst_34193 = (state_34240[(9)]);
var inst_34195 = (state_34240[(11)]);
var inst_34200 = cljs.core._nth(inst_34193,inst_34195);
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34240__$1,(13),out,inst_34200);
} else {
if((state_val_34241 === (18))){
var inst_34206 = (state_34240[(7)]);
var inst_34215 = cljs.core.first(inst_34206);
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34240__$1,(20),out,inst_34215);
} else {
if((state_val_34241 === (8))){
var inst_34194 = (state_34240[(8)]);
var inst_34195 = (state_34240[(11)]);
var inst_34197 = (inst_34195 < inst_34194);
var inst_34198 = inst_34197;
var state_34240__$1 = state_34240;
if(cljs.core.truth_(inst_34198)){
var statearr_34274_35069 = state_34240__$1;
(statearr_34274_35069[(1)] = (10));

} else {
var statearr_34275_35071 = state_34240__$1;
(statearr_34275_35071[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32814__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32814__auto____0 = (function (){
var statearr_34276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34276[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32814__auto__);

(statearr_34276[(1)] = (1));

return statearr_34276;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32814__auto____1 = (function (state_34240){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_34240);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34277){var ex__32817__auto__ = e34277;
var statearr_34278_35072 = state_34240;
(statearr_34278_35072[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_34240[(4)]))){
var statearr_34279_35073 = state_34240;
(statearr_34279_35073[(1)] = cljs.core.first((state_34240[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35074 = state_34240;
state_34240 = G__35074;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32814__auto__ = function(state_34240){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32814__auto____1.call(this,state_34240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32814__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32814__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34280 = f__32883__auto__();
(statearr_34280[(6)] = c__32882__auto__);

return statearr_34280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));

return c__32882__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34282 = arguments.length;
switch (G__34282) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34284 = arguments.length;
switch (G__34284) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34286 = arguments.length;
switch (G__34286) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32882__auto___35078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_34310){
var state_val_34311 = (state_34310[(1)]);
if((state_val_34311 === (7))){
var inst_34305 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34312_35079 = state_34310__$1;
(statearr_34312_35079[(2)] = inst_34305);

(statearr_34312_35079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (1))){
var inst_34287 = null;
var state_34310__$1 = (function (){var statearr_34313 = state_34310;
(statearr_34313[(7)] = inst_34287);

return statearr_34313;
})();
var statearr_34314_35080 = state_34310__$1;
(statearr_34314_35080[(2)] = null);

(statearr_34314_35080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (4))){
var inst_34290 = (state_34310[(8)]);
var inst_34290__$1 = (state_34310[(2)]);
var inst_34291 = (inst_34290__$1 == null);
var inst_34292 = cljs.core.not(inst_34291);
var state_34310__$1 = (function (){var statearr_34315 = state_34310;
(statearr_34315[(8)] = inst_34290__$1);

return statearr_34315;
})();
if(inst_34292){
var statearr_34316_35081 = state_34310__$1;
(statearr_34316_35081[(1)] = (5));

} else {
var statearr_34317_35082 = state_34310__$1;
(statearr_34317_35082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (6))){
var state_34310__$1 = state_34310;
var statearr_34318_35083 = state_34310__$1;
(statearr_34318_35083[(2)] = null);

(statearr_34318_35083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (3))){
var inst_34307 = (state_34310[(2)]);
var inst_34308 = cljs.core.async.close_BANG_(out);
var state_34310__$1 = (function (){var statearr_34319 = state_34310;
(statearr_34319[(9)] = inst_34307);

return statearr_34319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34310__$1,inst_34308);
} else {
if((state_val_34311 === (2))){
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34310__$1,(4),ch);
} else {
if((state_val_34311 === (11))){
var inst_34290 = (state_34310[(8)]);
var inst_34299 = (state_34310[(2)]);
var inst_34287 = inst_34290;
var state_34310__$1 = (function (){var statearr_34320 = state_34310;
(statearr_34320[(7)] = inst_34287);

(statearr_34320[(10)] = inst_34299);

return statearr_34320;
})();
var statearr_34321_35084 = state_34310__$1;
(statearr_34321_35084[(2)] = null);

(statearr_34321_35084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (9))){
var inst_34290 = (state_34310[(8)]);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34310__$1,(11),out,inst_34290);
} else {
if((state_val_34311 === (5))){
var inst_34287 = (state_34310[(7)]);
var inst_34290 = (state_34310[(8)]);
var inst_34294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34290,inst_34287);
var state_34310__$1 = state_34310;
if(inst_34294){
var statearr_34323_35085 = state_34310__$1;
(statearr_34323_35085[(1)] = (8));

} else {
var statearr_34324_35086 = state_34310__$1;
(statearr_34324_35086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (10))){
var inst_34302 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34325_35087 = state_34310__$1;
(statearr_34325_35087[(2)] = inst_34302);

(statearr_34325_35087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (8))){
var inst_34287 = (state_34310[(7)]);
var tmp34322 = inst_34287;
var inst_34287__$1 = tmp34322;
var state_34310__$1 = (function (){var statearr_34326 = state_34310;
(statearr_34326[(7)] = inst_34287__$1);

return statearr_34326;
})();
var statearr_34327_35088 = state_34310__$1;
(statearr_34327_35088[(2)] = null);

(statearr_34327_35088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_34328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34328[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_34328[(1)] = (1));

return statearr_34328;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_34310){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_34310);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34329){var ex__32817__auto__ = e34329;
var statearr_34330_35089 = state_34310;
(statearr_34330_35089[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_34310[(4)]))){
var statearr_34331_35090 = state_34310;
(statearr_34331_35090[(1)] = cljs.core.first((state_34310[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35091 = state_34310;
state_34310 = G__35091;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_34310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_34310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34332 = f__32883__auto__();
(statearr_34332[(6)] = c__32882__auto___35078);

return statearr_34332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34334 = arguments.length;
switch (G__34334) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32882__auto___35093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_34372){
var state_val_34373 = (state_34372[(1)]);
if((state_val_34373 === (7))){
var inst_34368 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34374_35094 = state_34372__$1;
(statearr_34374_35094[(2)] = inst_34368);

(statearr_34374_35094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (1))){
var inst_34335 = (new Array(n));
var inst_34336 = inst_34335;
var inst_34337 = (0);
var state_34372__$1 = (function (){var statearr_34375 = state_34372;
(statearr_34375[(7)] = inst_34337);

(statearr_34375[(8)] = inst_34336);

return statearr_34375;
})();
var statearr_34376_35095 = state_34372__$1;
(statearr_34376_35095[(2)] = null);

(statearr_34376_35095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (4))){
var inst_34340 = (state_34372[(9)]);
var inst_34340__$1 = (state_34372[(2)]);
var inst_34341 = (inst_34340__$1 == null);
var inst_34342 = cljs.core.not(inst_34341);
var state_34372__$1 = (function (){var statearr_34377 = state_34372;
(statearr_34377[(9)] = inst_34340__$1);

return statearr_34377;
})();
if(inst_34342){
var statearr_34378_35096 = state_34372__$1;
(statearr_34378_35096[(1)] = (5));

} else {
var statearr_34379_35097 = state_34372__$1;
(statearr_34379_35097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (15))){
var inst_34362 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34380_35098 = state_34372__$1;
(statearr_34380_35098[(2)] = inst_34362);

(statearr_34380_35098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (13))){
var state_34372__$1 = state_34372;
var statearr_34381_35099 = state_34372__$1;
(statearr_34381_35099[(2)] = null);

(statearr_34381_35099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (6))){
var inst_34337 = (state_34372[(7)]);
var inst_34358 = (inst_34337 > (0));
var state_34372__$1 = state_34372;
if(cljs.core.truth_(inst_34358)){
var statearr_34382_35100 = state_34372__$1;
(statearr_34382_35100[(1)] = (12));

} else {
var statearr_34383_35101 = state_34372__$1;
(statearr_34383_35101[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (3))){
var inst_34370 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34372__$1,inst_34370);
} else {
if((state_val_34373 === (12))){
var inst_34336 = (state_34372[(8)]);
var inst_34360 = cljs.core.vec(inst_34336);
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34372__$1,(15),out,inst_34360);
} else {
if((state_val_34373 === (2))){
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34372__$1,(4),ch);
} else {
if((state_val_34373 === (11))){
var inst_34352 = (state_34372[(2)]);
var inst_34353 = (new Array(n));
var inst_34336 = inst_34353;
var inst_34337 = (0);
var state_34372__$1 = (function (){var statearr_34384 = state_34372;
(statearr_34384[(7)] = inst_34337);

(statearr_34384[(8)] = inst_34336);

(statearr_34384[(10)] = inst_34352);

return statearr_34384;
})();
var statearr_34385_35102 = state_34372__$1;
(statearr_34385_35102[(2)] = null);

(statearr_34385_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (9))){
var inst_34336 = (state_34372[(8)]);
var inst_34350 = cljs.core.vec(inst_34336);
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34372__$1,(11),out,inst_34350);
} else {
if((state_val_34373 === (5))){
var inst_34345 = (state_34372[(11)]);
var inst_34337 = (state_34372[(7)]);
var inst_34336 = (state_34372[(8)]);
var inst_34340 = (state_34372[(9)]);
var inst_34344 = (inst_34336[inst_34337] = inst_34340);
var inst_34345__$1 = (inst_34337 + (1));
var inst_34346 = (inst_34345__$1 < n);
var state_34372__$1 = (function (){var statearr_34386 = state_34372;
(statearr_34386[(11)] = inst_34345__$1);

(statearr_34386[(12)] = inst_34344);

return statearr_34386;
})();
if(cljs.core.truth_(inst_34346)){
var statearr_34387_35103 = state_34372__$1;
(statearr_34387_35103[(1)] = (8));

} else {
var statearr_34388_35104 = state_34372__$1;
(statearr_34388_35104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (14))){
var inst_34365 = (state_34372[(2)]);
var inst_34366 = cljs.core.async.close_BANG_(out);
var state_34372__$1 = (function (){var statearr_34390 = state_34372;
(statearr_34390[(13)] = inst_34365);

return statearr_34390;
})();
var statearr_34391_35105 = state_34372__$1;
(statearr_34391_35105[(2)] = inst_34366);

(statearr_34391_35105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (10))){
var inst_34356 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34392_35106 = state_34372__$1;
(statearr_34392_35106[(2)] = inst_34356);

(statearr_34392_35106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (8))){
var inst_34345 = (state_34372[(11)]);
var inst_34336 = (state_34372[(8)]);
var tmp34389 = inst_34336;
var inst_34336__$1 = tmp34389;
var inst_34337 = inst_34345;
var state_34372__$1 = (function (){var statearr_34393 = state_34372;
(statearr_34393[(7)] = inst_34337);

(statearr_34393[(8)] = inst_34336__$1);

return statearr_34393;
})();
var statearr_34394_35107 = state_34372__$1;
(statearr_34394_35107[(2)] = null);

(statearr_34394_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_34395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34395[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_34395[(1)] = (1));

return statearr_34395;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_34372){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_34372);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34396){var ex__32817__auto__ = e34396;
var statearr_34397_35108 = state_34372;
(statearr_34397_35108[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_34372[(4)]))){
var statearr_34398_35109 = state_34372;
(statearr_34398_35109[(1)] = cljs.core.first((state_34372[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35110 = state_34372;
state_34372 = G__35110;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_34372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_34372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34399 = f__32883__auto__();
(statearr_34399[(6)] = c__32882__auto___35093);

return statearr_34399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34401 = arguments.length;
switch (G__34401) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32882__auto___35112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32883__auto__ = (function (){var switch__32813__auto__ = (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (7))){
var inst_34442 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34448_35113 = state_34446__$1;
(statearr_34448_35113[(2)] = inst_34442);

(statearr_34448_35113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (1))){
var inst_34402 = [];
var inst_34403 = inst_34402;
var inst_34404 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34446__$1 = (function (){var statearr_34449 = state_34446;
(statearr_34449[(7)] = inst_34403);

(statearr_34449[(8)] = inst_34404);

return statearr_34449;
})();
var statearr_34450_35114 = state_34446__$1;
(statearr_34450_35114[(2)] = null);

(statearr_34450_35114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (4))){
var inst_34407 = (state_34446[(9)]);
var inst_34407__$1 = (state_34446[(2)]);
var inst_34408 = (inst_34407__$1 == null);
var inst_34409 = cljs.core.not(inst_34408);
var state_34446__$1 = (function (){var statearr_34451 = state_34446;
(statearr_34451[(9)] = inst_34407__$1);

return statearr_34451;
})();
if(inst_34409){
var statearr_34452_35115 = state_34446__$1;
(statearr_34452_35115[(1)] = (5));

} else {
var statearr_34453_35116 = state_34446__$1;
(statearr_34453_35116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (15))){
var inst_34403 = (state_34446[(7)]);
var inst_34434 = cljs.core.vec(inst_34403);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(18),out,inst_34434);
} else {
if((state_val_34447 === (13))){
var inst_34429 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34454_35117 = state_34446__$1;
(statearr_34454_35117[(2)] = inst_34429);

(statearr_34454_35117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (6))){
var inst_34403 = (state_34446[(7)]);
var inst_34431 = inst_34403.length;
var inst_34432 = (inst_34431 > (0));
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34432)){
var statearr_34455_35118 = state_34446__$1;
(statearr_34455_35118[(1)] = (15));

} else {
var statearr_34456_35119 = state_34446__$1;
(statearr_34456_35119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (17))){
var inst_34439 = (state_34446[(2)]);
var inst_34440 = cljs.core.async.close_BANG_(out);
var state_34446__$1 = (function (){var statearr_34457 = state_34446;
(statearr_34457[(10)] = inst_34439);

return statearr_34457;
})();
var statearr_34458_35120 = state_34446__$1;
(statearr_34458_35120[(2)] = inst_34440);

(statearr_34458_35120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (3))){
var inst_34444 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34446__$1,inst_34444);
} else {
if((state_val_34447 === (12))){
var inst_34403 = (state_34446[(7)]);
var inst_34422 = cljs.core.vec(inst_34403);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(14),out,inst_34422);
} else {
if((state_val_34447 === (2))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34446__$1,(4),ch);
} else {
if((state_val_34447 === (11))){
var inst_34407 = (state_34446[(9)]);
var inst_34411 = (state_34446[(11)]);
var inst_34403 = (state_34446[(7)]);
var inst_34419 = inst_34403.push(inst_34407);
var tmp34459 = inst_34403;
var inst_34403__$1 = tmp34459;
var inst_34404 = inst_34411;
var state_34446__$1 = (function (){var statearr_34460 = state_34446;
(statearr_34460[(7)] = inst_34403__$1);

(statearr_34460[(8)] = inst_34404);

(statearr_34460[(12)] = inst_34419);

return statearr_34460;
})();
var statearr_34461_35121 = state_34446__$1;
(statearr_34461_35121[(2)] = null);

(statearr_34461_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (9))){
var inst_34404 = (state_34446[(8)]);
var inst_34415 = cljs.core.keyword_identical_QMARK_(inst_34404,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34446__$1 = state_34446;
var statearr_34462_35122 = state_34446__$1;
(statearr_34462_35122[(2)] = inst_34415);

(statearr_34462_35122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (5))){
var inst_34407 = (state_34446[(9)]);
var inst_34411 = (state_34446[(11)]);
var inst_34412 = (state_34446[(13)]);
var inst_34404 = (state_34446[(8)]);
var inst_34411__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34407) : f.call(null,inst_34407));
var inst_34412__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34411__$1,inst_34404);
var state_34446__$1 = (function (){var statearr_34463 = state_34446;
(statearr_34463[(11)] = inst_34411__$1);

(statearr_34463[(13)] = inst_34412__$1);

return statearr_34463;
})();
if(inst_34412__$1){
var statearr_34464_35123 = state_34446__$1;
(statearr_34464_35123[(1)] = (8));

} else {
var statearr_34465_35124 = state_34446__$1;
(statearr_34465_35124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (14))){
var inst_34407 = (state_34446[(9)]);
var inst_34411 = (state_34446[(11)]);
var inst_34424 = (state_34446[(2)]);
var inst_34425 = [];
var inst_34426 = inst_34425.push(inst_34407);
var inst_34403 = inst_34425;
var inst_34404 = inst_34411;
var state_34446__$1 = (function (){var statearr_34466 = state_34446;
(statearr_34466[(14)] = inst_34424);

(statearr_34466[(7)] = inst_34403);

(statearr_34466[(15)] = inst_34426);

(statearr_34466[(8)] = inst_34404);

return statearr_34466;
})();
var statearr_34467_35125 = state_34446__$1;
(statearr_34467_35125[(2)] = null);

(statearr_34467_35125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (16))){
var state_34446__$1 = state_34446;
var statearr_34468_35126 = state_34446__$1;
(statearr_34468_35126[(2)] = null);

(statearr_34468_35126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (10))){
var inst_34417 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34417)){
var statearr_34469_35127 = state_34446__$1;
(statearr_34469_35127[(1)] = (11));

} else {
var statearr_34470_35128 = state_34446__$1;
(statearr_34470_35128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (18))){
var inst_34436 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34471_35129 = state_34446__$1;
(statearr_34471_35129[(2)] = inst_34436);

(statearr_34471_35129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (8))){
var inst_34412 = (state_34446[(13)]);
var state_34446__$1 = state_34446;
var statearr_34472_35130 = state_34446__$1;
(statearr_34472_35130[(2)] = inst_34412);

(statearr_34472_35130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32814__auto__ = null;
var cljs$core$async$state_machine__32814__auto____0 = (function (){
var statearr_34473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34473[(0)] = cljs$core$async$state_machine__32814__auto__);

(statearr_34473[(1)] = (1));

return statearr_34473;
});
var cljs$core$async$state_machine__32814__auto____1 = (function (state_34446){
while(true){
var ret_value__32815__auto__ = (function (){try{while(true){
var result__32816__auto__ = switch__32813__auto__(state_34446);
if(cljs.core.keyword_identical_QMARK_(result__32816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32816__auto__;
}
break;
}
}catch (e34474){var ex__32817__auto__ = e34474;
var statearr_34475_35131 = state_34446;
(statearr_34475_35131[(2)] = ex__32817__auto__);


if(cljs.core.seq((state_34446[(4)]))){
var statearr_34476_35132 = state_34446;
(statearr_34476_35132[(1)] = cljs.core.first((state_34446[(4)])));

} else {
throw ex__32817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35133 = state_34446;
state_34446 = G__35133;
continue;
} else {
return ret_value__32815__auto__;
}
break;
}
});
cljs$core$async$state_machine__32814__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32814__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32814__auto____0;
cljs$core$async$state_machine__32814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32814__auto____1;
return cljs$core$async$state_machine__32814__auto__;
})()
})();
var state__32884__auto__ = (function (){var statearr_34477 = f__32883__auto__();
(statearr_34477[(6)] = c__32882__auto___35112);

return statearr_34477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32884__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
