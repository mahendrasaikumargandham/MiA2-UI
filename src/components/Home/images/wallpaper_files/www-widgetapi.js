(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.P=b.prototype}
function ra(){this.v=!1;this.m=null;this.j=void 0;this.i=1;this.u=this.o=0;this.I=this.l=null}
function sa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
ra.prototype.D=function(a){this.j=a};
function ua(a,b){a.l={Xa:b,eb:!0};a.i=a.o||a.u}
ra.prototype.return=function(a){this.l={return:a};this.i=this.u};
function x(a,b,c){a.i=c;return{value:b}}
ra.prototype.B=function(a){this.i=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a,b){a.i=b;a.o=0}
function za(a){a.o=0;var b=a.l.Xa;a.l=null;return b}
function Aa(a){a.I=[a.l];a.o=0;a.u=0}
function Ba(a){var b=a.I.splice(0)[0];(b=a.l=a.l||b)?b.eb?a.i=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.i=b.B,a.l=null):a.i=a.u:a.i=0}
function Ca(a){this.i=new ra;this.j=a}
function Da(a,b){sa(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.v=!1,e;var f=e.value}catch(g){return a.i.m=null,ua(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.v=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ua(a.i,c)}a.i.v=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.eb)throw b.Xa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){sa(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.D):(a.i.D(b),b=Fa(a));return b};
this.throw=function(b){sa(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.D):(ua(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.v=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.u()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.u=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ha),reject:g(this.u)}};
b.prototype.Ha=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.nb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ga(g):this.o(g)}};
b.prototype.Ga=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ob(h,g):this.o(g)};
b.prototype.u=function(g){this.D(2,g)};
b.prototype.o=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.Ia();this.I()};
b.prototype.Ia=function(){var g=this;e(function(){if(g.Z()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.Z=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.I=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.nb=function(g){var h=this.m();g.ya(h.resolve,h.reject)};
b.prototype.ob=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(w){try{l(t(w))}catch(z){m(z)}}:q}
var l,m,p=new b(function(t,q){l=t;m=q});
this.ya(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ya=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ya(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(w){return function(z){t[w]=z;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).ya(p(t.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b,c){a=a.split(".");c=c||A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Yb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Xa,Error);Xa.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function $a(){}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},db=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function eb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function F(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")||F("Silk")}
;var Mb={};function Nb(a){this.i=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.i.toString()};var Ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(a){return a?decodeURI(a):a}
function Ub(a){return Pb(a.match(Ob)[3]||null)}
function Vb(a){var b=a.match(Ob);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Wb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Wb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Xb(a){var b=[],c;for(c in a)Wb(c,a[c],b);return b.join("&")}
var Yb=/#|$/;function Zb(a,b){var c=a.search(Yb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function $b(a){A.setTimeout(function(){throw a;},0)}
;function ac(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function bc(a){bc[" "](a);return a}
bc[" "]=function(){};var cc=F("Opera"),dc=F("Trident")||F("MSIE"),ec=F("Edge"),fc=F("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),gc=-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge");function hc(){var a=A.document;return a?a.documentMode:void 0}
var ic;a:{var jc="",kc=function(){var a=Kb();if(fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ec)return/Edge\/([\d\.]+)/.exec(a);if(dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gc)return/WebKit\/(\S+)/.exec(a);if(cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(jc=kc?kc[1]:"");if(dc){var lc=hc();if(null!=lc&&lc>parseFloat(jc)){ic=String(lc);break a}}ic=jc}var mc=ic,nc;if(A.document&&dc){var oc=hc();nc=oc?oc:parseInt(mc,10)||void 0}else nc=void 0;var pc=nc;var rc=ac()||F("iPod"),sc=F("iPad");!F("Android")||Lb();Lb();var tc=F("Safari")&&!(Lb()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(ac()||F("iPad")||F("iPod"));var uc={},vc=null;function wc(a,b){Oa(a);void 0===b&&(b=0);xc();b=uc[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function yc(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;zc(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function zc(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=vc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
xc();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function xc(){if(!vc){vc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));uc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===vc[f]&&(vc[f]=e)}}}}
;var Ac="undefined"!==typeof Uint8Array;function Bc(a){return Ac&&null!=a&&a instanceof Uint8Array}
var Cc={};var Dc;function Ec(){if(Cc!==Cc)throw Error("illegal external caller");}
function Fc(a){Ec();this.ra=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Fc.prototype.isEmpty=function(){return null==this.ra};
Fc.prototype.sizeBytes=function(){Ec();var a=this.ra;null==a||Bc(a)||("string"===typeof a?a=yc(a):(Na(a),a=null));return(a=null==a?a:this.ra=a)?a.length:0};var Gc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Hc(a,b){Object.isFrozen(a)||(Gc?a[Gc]|=b:void 0!==a.N?a.N|=b:Object.defineProperties(a,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Lc(a,b){Object.isExtensible(a)&&(Gc?a[Gc]&&(a[Gc]&=~b):void 0!==a.N&&(a.N&=~b))}
function Mc(a){var b;Gc?b=a[Gc]:b=a.N;return null==b?0:b}
function Nc(a,b){Gc?a[Gc]=b:void 0!==a.N?a.N=b:Object.defineProperties(a,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Oc(a){Hc(a,1);return a}
function Pc(a){Hc(a,17);return a}
function H(a){return a?!!(Mc(a)&2):!1}
function Qc(a){Hc(a,16);return a}
function Rc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");Lc(a,16)}
function Sc(a,b){Nc(b,(Mc(a)|0)&-51)}
;var Tc={};function Uc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Vc,Wc=Object,Xc=Wc.freeze,Yc=[];Hc(Yc,3);var Zc=Xc.call(Wc,Yc);function $c(a){if(H(a.s))throw Error("Cannot mutate an immutable Message");}
;function ad(a){return a.displayName||a.name||"unknown type name"}
function bd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ad(b)+" but got "+(a&&ad(a.constructor)));return a}
;function cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Bc(a))return wc(a);if(a instanceof Fc){var b=a.ra;return null==b?"":"string"===typeof b?b:a.ra=wc(b)}}}return a}
;function dd(a,b,c,d){if(null!=a){if(Array.isArray(a))a=ed(a,b,c,void 0!==d);else if(Uc(a)){var e={},f;for(f in a)e[f]=dd(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function ed(a,b,c,d){d=d?!!(Mc(a)&16):void 0;var e=Array.prototype.slice.call(a);c(a,e);for(a=0;a<e.length;a++)e[a]=dd(e[a],b,c,d);return e}
function fd(a){return a.Oa===Tc?a.toJSON():cd(a)}
function gd(a){if(!a)return a;if("object"===typeof a){if(Bc(a))return new Uint8Array(a);if(a.Oa===Tc)return a.clone()}return a}
function hd(){}
;function id(a,b,c){return-1===b?null:b>=a.X?a.G?a.G[b]:void 0:(void 0===c?0:c)&&a.G&&(c=a.G[b],null!=c)?c:a.s[b+a.T]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||$c(a);a.cb&&(a.cb=void 0);if(b>=a.X||d)return(a.G||(a.G=a.s[a.X+a.T]={}))[b]=c,a;void 0!==a.G&&a.X>=a.s.length?(d=a.s.length-1,e=b+a.T,e>=d?(a.s[d]=void 0,a.s[e]=c,a.s.push(a.G)):a.s[e]=c):a.s[b+a.T]=c;void 0!==a.G&&b in a.G&&delete a.G[b];return a}
function jd(a,b,c,d){var e=id(a,b,d);Array.isArray(e)||(e=Zc);var f=Mc(e);f&1||Oc(e);H(a.s)?(f&2||Hc(e,2),c&1||Object.freeze(e)):e===Zc||!(c&1&&c&2)&&f&2?(e=Oc(Array.prototype.slice.call(e)),I(a,b,e,d)):!(c&2)&&f&16&&Rc(e);return e}
function kd(a,b,c,d){$c(a);(c=ld(a,c))&&c!==b&&null!=d&&I(a,c,void 0,!1);return I(a,b,d)}
function ld(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function md(a,b,c){var d=void 0===d?!1:d;var e=id(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Oa!==Tc?f?new b(e):void 0:e;g!==e&&null!=g&&(I(a,c,g,d,!0),Hc(g.s,Mc(a.s)&-33));b=g;if(null==b)return b;H(b.s)&&!H(a.s)&&(b=nd(b),I(a,c,b,d));return b}
function od(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=a.i[c],g=jd(a,c,3,d),h=H(a.s),k=!!(Mc(a.s)&16),l=H(g),m=h||l;!e&&l&&(g=Oc(Array.prototype.slice.call(g)),I(a,c,g,d));if(!f){f=[];d=m;for(l=0;l<g.length;l++){var p=g[l];d=d||H(p);var t=b,q=k,w=!1;w=void 0===w?!1:w;q=void 0===q?!1:q;p=Array.isArray(p)?new t(q?Qc(p):p):w?new t:void 0;void 0!==p&&(f.push(p),m&&Hc(p.s,2))}a.i[c]=f;b=g;g=!d;Object.isFrozen(b)||(k=Mc(b)|33,Nc(b,g?k|8:k&-9))}e=h||e;h=H(f);e&&!h&&(Object.isFrozen(f)&&(a.i[c]=f=f.slice()),
Hc(f,2),Object.freeze(f));!e&&h&&(a.i[c]=f=f.slice());return f}
function J(a,b,c,d){$c(a);null!=d?bd(d,b):d=void 0;return I(a,c,d)}
function pd(a,b,c,d,e){$c(a);null!=e?bd(e,b):e=void 0;kd(a,c,d,e)}
function qd(a,b,c,d){$c(a);if(null!=d){var e=Oc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=bd(d[g],b).s,f=f||H(e[g]);a.i||(a.i={});a.i[c]=d;b=e;f?Lc(b,8):Hc(b,8)}else a.i&&(a.i[c]=void 0),e=Zc;return I(a,c,e)}
function rd(a,b,c,d){$c(a);var e=od(a,c,b,void 0,!1);c=null!=d?bd(d,c):new c;a=jd(a,b,2);e.push(c);a.push(c.s);H(c.s)&&Lc(a,8)}
function sd(a,b){return id(a,b)}
function td(a,b){a=id(a,b);return null==a?"":a}
;function ud(a,b,c,d,e,f){(a=a.i&&a.i[c])?(e=f.Ka?Oc(a.slice()):a,qd(b,0<e.length?e[0].constructor:void 0,c,e)):(null!=d?Ac&&d instanceof Uint8Array?e=d.length?new Fc(new Uint8Array(d)):Dc||(Dc=new Fc(null)):(Array.isArray(d)&&(e?Hc(d,2):d&&Mc(d)&1&&f.Ka?(e=Array.prototype.slice.call(d),Nc(e,(Mc(d)|0)&-51),d=e):Rc(d)),e=d):e=void 0,I(b,c,e))}
;function L(a,b,c){null==a&&(a=vd);vd=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j,g,h=!1;if(a){if(g=!!(Mc(a)&16))h=Mc(a),Nc(a,h|32),h=!!(h&32)}else g=f?[f]:[],Hc(g,48),a=g,g=!0;e&&0<a.length&&Uc(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.T=(f?0:-1)-d;this.i=void 0;this.s=a;a:{f=this.s.length;d=f-1;if(f&&(f=this.s[d],Uc(f))){this.G=f;b=Object.keys(f);0<b.length&&db(b,isNaN)?this.X=Number.MAX_VALUE:this.X=d-this.T;break a}void 0!==b&&-1<b?(this.X=Math.max(b,d+1-this.T),this.G=void 0):
this.X=Number.MAX_VALUE}if(!e&&this.G&&"g"in this.G)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c)for(e=g&&!h?Pc:Oc,b=0;b<c.length;b++)g=c[b],(h=id(this,g))?Array.isArray(h)&&e(h):I(this,g,Zc,!1,!0)}
n=L.prototype;n.toJSON=function(){var a=this.s,b;Vc?b=a:b=ed(a,fd,hd);return b};
function wd(a){Vc=!0;try{return JSON.stringify(a.toJSON(),xd)}finally{Vc=!1}}
n.clone=function(){var a=ed(this.s,gd,Sc);Qc(a);vd=a;a=new this.constructor(a);vd=null;yd(a,this);return a};
n.isMutable=function(){return!H(this.s)};
function nd(a){if(H(a.s)){var b={Ka:!0},c=H(a.s);if(c&&!b.Ka)throw Error("copyRepeatedFields must be true for frozen messages");c||Rc(a.s);var d=new a.constructor;a.la&&(d.la=a.la.slice());for(var e=a.s,f=0;f<e.length;f++){var g=e[f];if(f===e.length-1&&Uc(g))for(var h in g){var k=+h;Number.isNaN(k)?(d.G||(d.G=d.s[d.X+d.T]={}))[h]=g[h]:ud(a,d,k,g[h],c,b)}else ud(a,d,f-a.T,g,c,b)}d.cb=a;a=d}return a}
n.Oa=Tc;n.toString=function(){return this.s.toString()};
function xd(a,b){return cd(b)}
function yd(a,b){b.la&&(a.la=b.la.slice());var c=b.i;if(c){b=b.G;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;var l=H(h.s);f=od(h,e[0].constructor,g,k,l);g=jd(h,g,3,k);if(h=!l&&g){if(!g)throw Error("cannot check mutability state of non-array");h=!(Mc(g)&8)}if(h){for(h=0;h<f.length;h++)(l=f[h])&&H(l.s)&&(f[h]=nd(f[h]),g[h]=f[h].s);Hc(g,8)}for(g=0;g<Math.min(f.length,e.length);g++)yd(f[g],e[g])}}else throw Error("unexpected object: type: "+
Na(e)+": "+e);}}}}
var vd;var zd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");function Ad(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Bd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Cd[c])c=Cd[c];else{c=String(c);if(!Cd[c]){var f=/function\s+([^\(]+)/m.exec(c);Cd[c]=f?f[1]:"[Anonymous]"}c=Cd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Bd(a,b){b||(b={});b[Dd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Dd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Bd(a,b));return c}
function Dd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Cd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ed;try{new URL("s://g"),Ed=!0}catch(a){Ed=!1}var Fd=Ed;function Gd(a,b){a.removeAttribute("srcdoc");if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.i:(Na(b),b="type_error:SafeUrl");else{b:if(Fd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Hd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Hd.prototype;n.clone=function(){return new Hd(this.x,this.y)};
n.equals=function(a){return a instanceof Hd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Id(a,b){this.width=a;this.height=b}
n=Id.prototype;n.clone=function(){return new Id(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Jd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ld(a){var b=Md;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Nd(){var a=[];Ld(function(b){a.push(b)});
return a}
var Md={Gb:"allow-forms",Hb:"allow-modals",Ib:"allow-orientation-lock",Jb:"allow-pointer-lock",Kb:"allow-popups",Lb:"allow-popups-to-escape-sandbox",Mb:"allow-presentation",Nb:"allow-same-origin",Ob:"allow-scripts",Pb:"allow-top-navigation",Qb:"allow-top-navigation-by-user-activation"},Qd=ab(function(){return Nd()});
function Rd(){var a=Sd(),b={};E(Qd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Sd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Td(a){this.isValid=a}
function Ud(a){return new Td(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Vd=[Ud("data"),Ud("http"),Ud("https"),Ud("mailto"),Ud("ftp"),new Td(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Wd(a,b){b=void 0===b?Vd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Td&&d.isValid(a))return new Hb(a,Ib)}}
function Xd(a){var b=void 0===b?Vd:b;return Wd(a,b)||Jb}
;var Yd=(new Date).getTime();function Zd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var $d="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia($d);function ae(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],z=e[2],G=e[3],K=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var M=G^w&(z^G);var O=1518500249}else M=w^z^G,O=1859775393;else 60>q?(M=w&z|G&(w|z),O=2400959708):(M=w^z^G,O=3395469782);M=((p<<5|p>>>27)&4294967295)+M+K+O+t[q]&4294967295;K=G;G=z;z=(w<<30|w>>>2)&4294967295;w=p;p=M}e[0]=e[0]+p&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+K&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],w=0,z=p.length;w<z;++w)q.push(p.charCodeAt(w));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<t;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var w=24;0<=w;w-=8)p[t++]=e[q]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,rb:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function be(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,ce(Zd(d),a,c||null)].join(" "):null}
function ce(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),de(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=de(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function de(a){var b=ae();b.update(a);return b.rb().toLowerCase()}
;var ee={};function fe(a){this.i=a||{cookie:""}}
n=fe.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ma:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.fc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ma:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ge=new fe("undefined"==typeof document?null:document);function he(a){return!!ee.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ie(a,b,c,d){(a=A[a])||(a=(new fe(document)).get(b));return a?be(a,c,d):null}
function je(a){var b=void 0===b?!1:b;var c=Zd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;he(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new fe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");he(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new fe(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?be(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&he(b)&&((b=ie("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ie("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ke(){this.l=this.l;this.u=this.u}
ke.prototype.l=!1;ke.prototype.dispose=function(){this.l||(this.l=!0,this.fa())};
ke.prototype.fa=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function le(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
le.prototype.stopPropagation=function(){this.l=!0};
le.prototype.preventDefault=function(){this.defaultPrevented=!0};var me=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ne(a,b){le.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
D(ne,le);var oe={2:"touch",3:"pen",4:"mouse"};
ne.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(fc){a:{try{bc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:oe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ne.P.preventDefault.call(this)};
ne.prototype.stopPropagation=function(){ne.P.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ne.prototype.preventDefault=function(){ne.P.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var pe="closure_listenable_"+(1E6*Math.random()|0);var qe=0;function re(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ba=e;this.key=++qe;this.na=this.xa=!1}
function se(a){a.na=!0;a.listener=null;a.proxy=null;a.src=null;a.Ba=null}
;function te(a){this.src=a;this.listeners={};this.i=0}
te.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=ue(a,b,d,e);-1<g?(b=a[g],c||(b.xa=!1)):(b=new re(b,this.src,f,!!d,e),b.xa=c,a.push(b));return b};
te.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ue(e,b,c,d);return-1<b?(se(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function ve(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(se(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function ue(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.na&&f.listener==b&&f.capture==!!c&&f.Ba==d)return e}return-1}
;var we="closure_lm_"+(1E6*Math.random()|0),xe={},ye=0;function ze(a,b,c,d,e){if(d&&d.once)Ae(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Be(c),a&&a[pe]?a.aa(b,c,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!1,d,e)}
function Ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=De(a);h||(a[we]=h=new te(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ee();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)me||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ye++}}
function Ee(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ge;return a}
function Ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Be(c),a&&a[pe]?a.i.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!0,d,e)}
function He(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)He(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Be(c),a&&a[pe])?a.i.remove(String(b),c,d,e):a&&(a=De(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ue(b,c,d,e)),(c=-1<a?b[a]:null)&&Ie(c))}
function Ie(a){if("number"!==typeof a&&a&&!a.na){var b=a.src;if(b&&b[pe])ve(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ye--;(c=De(b))?(ve(c,a),0==c.i&&(c.src=null,b[we]=null)):se(a)}}}
function Fe(a){return a in xe?xe[a]:xe[a]="on"+a}
function Ge(a,b){if(a.na)a=!0;else{b=new ne(b,this);var c=a.listener,d=a.Ba||a.src;a.xa&&Ie(a);a=c.call(d,b)}return a}
function De(a){a=a[we];return a instanceof te?a:null}
var Je="__closure_events_fn_"+(1E9*Math.random()>>>0);function Be(a){if("function"===typeof a)return a;a[Je]||(a[Je]=function(b){return a.handleEvent(b)});
return a[Je]}
;function Ke(){ke.call(this);this.i=new te(this);this.Z=this;this.D=null}
D(Ke,ke);Ke.prototype[pe]=!0;Ke.prototype.addEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
Ke.prototype.removeEventListener=function(a,b,c,d){He(this,a,b,c,d)};
function Le(a,b){var c=a.D;if(c){var d=[];for(var e=1;c;c=c.D)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new le(b,a):b instanceof le?b.target=b.target||a:(e=b,b=new le(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Me(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Me(g,c,!0,b)&&e,b.l||(e=Me(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Me(g,c,!1,b)&&e}
Ke.prototype.fa=function(){Ke.P.fa.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,se(d[e]);delete a.listeners[c];a.i--}}this.D=null};
Ke.prototype.aa=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Me(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.na&&g.capture==c){var h=g.listener,k=g.Ba||g.src;g.xa&&ve(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ne(a){Ke.call(this);var b=this;this.I=this.m=0;this.L=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
da:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return y(function(e){return x(e,Oe(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.I||Pe(this)}
v(Ne,Ke);function Qe(){var a=Re;Ne.i||(Ne.i=new Ne(a));return Ne.i}
Ne.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.L.da(this.I);delete Ne.i};
Ne.prototype.K=function(){return this.j};
function Pe(a){a.I=a.L.S(function(){var b;return y(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.B(3):x(c,Oe(a),3):x(c,Oe(a),3);Pe(a);c.i=0})},3E4)}
function Oe(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.m=a.L.S(function(){d.abort()},b||2E4)),x(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.v=void 0;a.m&&(a.L.da(a.m),a.m=0);g!==a.j&&(a.j=g,a.j?Le(a,"networkstatus-online"):Le(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.B(3)}})})}
;function Se(){this.data_=[];this.i=-1}
Se.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Se.prototype.get=function(a){return!!this.data_[a]};
function Te(a){-1===a.i&&(a.i=cb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Ue(a){L.call(this,a,-1,Ve)}
v(Ue,L);function We(a,b){return I(a,2,b)}
function Xe(a,b){return I(a,3,b)}
function Ye(a,b){return I(a,4,b)}
function Ze(a,b){return I(a,5,b)}
function $e(a,b){return I(a,9,b)}
function af(a,b){return qd(a,bf,10,b)}
function cf(a,b){return I(a,11,b)}
function df(a,b){return I(a,1,b)}
function ef(a,b){return I(a,7,b)}
function bf(a){L.call(this,a)}
v(bf,L);var Ve=[10,6];var ff="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function gf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function hf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function jf(){var a=window;if(!hf(a))return null;var b=gf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ff).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function kf(a){var b;return cf(af(Ze(We(df(Ye(ef($e(Xe(new Ue,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new bf;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function lf(){var a,b;return null!=(b=null==(a=jf())?void 0:a.then(function(c){return kf(c)}))?b:null}
;function mf(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
mf.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function nf(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var of;function pf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Jd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Va;c.Va=null;e()}};
return function(e){d.next={Va:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function qf(){this.j=this.i=null}
qf.prototype.add=function(a,b){var c=rf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
qf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var rf=new mf(function(){return new sf},function(a){return a.reset()});
function sf(){this.next=this.scope=this.i=null}
sf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
sf.prototype.reset=function(){this.next=this.scope=this.i=null};var tf,uf=!1,vf=new qf;function wf(a,b){tf||xf();uf||(tf(),uf=!0);vf.add(a,b)}
function xf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);tf=function(){a.then(yf)}}else tf=function(){var b=yf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!F("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(of||(of=pf()),of(b)):A.setImmediate(b)}}
function yf(){for(var a;a=vf.remove();){try{a.i.call(a.scope)}catch(b){$b(b)}nf(rf,a)}uf=!1}
;function zf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
zf.prototype[Symbol.iterator]=function(){return this};
zf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Af(a,b){return new zf(a,b)}
;function Bf(){this.blockSize=-1}
;function Cf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.u=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
D(Cf,Bf);Cf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Df(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.j;d<b;){if(0==f)for(;d<=c;)Df(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Df(this,e);f=0;break}}this.j=f;this.m+=b}};
Cf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Df(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Ef(){}
Ef.prototype.next=function(){return Ff};
var Ff={done:!0,value:void 0};function Gf(a){return{value:a,done:!1}}
Ef.prototype.M=function(){return this};function Hf(a){if(a instanceof If||a instanceof Jf||a instanceof Kf)return a;if("function"==typeof a.next)return new If(function(){return a});
if("function"==typeof a[Symbol.iterator])return new If(function(){return a[Symbol.iterator]()});
if("function"==typeof a.M)return new If(function(){return a.M()});
throw Error("Not an iterator or iterable.");}
function If(a){this.j=a}
If.prototype.M=function(){return new Jf(this.j())};
If.prototype[Symbol.iterator]=function(){return new Kf(this.j())};
If.prototype.i=function(){return new Kf(this.j())};
function Jf(a){this.j=a}
v(Jf,Ef);Jf.prototype.next=function(){return this.j.next()};
Jf.prototype[Symbol.iterator]=function(){return new Kf(this.j)};
Jf.prototype.i=function(){return new Kf(this.j)};
function Kf(a){If.call(this,function(){return a});
this.l=a}
v(Kf,If);Kf.prototype.next=function(){return this.l.next()};function hg(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hg)for(c=ig(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ig(a){jg(a);return a.i.concat()}
n=hg.prototype;n.has=function(a){return kg(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||lg;jg(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function lg(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return kg(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&jg(this),!0):!1};
function jg(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];kg(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],kg(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return kg(this.j,a)?this.j[a]:b};
n.set=function(a,b){kg(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=ig(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new hg(this)};
n.keys=function(){return Hf(this.M(!0)).i()};
n.values=function(){return Hf(this.M(!1)).i()};
n.entries=function(){var a=this;return Af(this.keys(),function(b){return[b,a.get(b)]})};
n.M=function(a){jg(this);var b=0,c=this.l,d=this,e=new Ef;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Ff;var f=d.i[b++];return Gf(a?f:d.j[f])};
return e};
function kg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var mg=A.JSON.stringify;function ng(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function og(a){this.i=0;this.v=void 0;this.m=this.j=this.l=null;this.u=this.o=!1;if(a!=$a)try{var b=this;a.call(void 0,function(c){pg(b,2,c)},function(c){pg(b,3,c)})}catch(c){pg(this,3,c)}}
function qg(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
qg.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var rg=new mf(function(){return new qg},function(a){a.reset()});
function sg(a,b,c){var d=rg.get();d.j=a;d.onRejected=b;d.context=c;return d}
og.prototype.then=function(a,b,c){return tg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
og.prototype.$goog_Thenable=!0;og.prototype.cancel=function(a){if(0==this.i){var b=new ug(a);wf(function(){vg(this,b)},this)}};
function vg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?vg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):wg(c),xg(c,e,3,b)))}a.l=null}else pg(a,3,b)}
function yg(a,b){a.j||2!=a.i&&3!=a.i||zg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function tg(a,b,c,d){var e=sg(null,null,null);e.i=new og(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ug?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;yg(a,e);return e.i}
og.prototype.I=function(a){this.i=0;pg(this,2,a)};
og.prototype.Z=function(a){this.i=0;pg(this,3,a)};
function pg(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.I,f=a.Z;if(d instanceof og){yg(d,sg(e||$a,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){Ag(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.i=b,a.l=null,zg(a),3!=b||c instanceof ug||Bg(a,c))}}
function Ag(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function zg(a){a.o||(a.o=!0,wf(a.D,a))}
function wg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
og.prototype.D=function(){for(var a;a=wg(this);)xg(this,a,this.i,this.v);this.o=!1};
function xg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.u;a=a.l)a.u=!1;if(b.i)b.i.l=null,Cg(b,c,d);else try{b.l?b.j.call(b.context):Cg(b,c,d)}catch(e){Dg.call(null,e)}nf(rg,b)}
function Cg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Bg(a,b){a.u=!0;wf(function(){a.u&&Dg.call(null,b)})}
var Dg=$b;function ug(a){Xa.call(this,a)}
D(ug,Xa);ug.prototype.name="cancel";function N(a){ke.call(this);this.v=1;this.m=[];this.o=0;this.i=[];this.j={};this.D=!!a}
D(N,ke);n=N.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.v;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.v=e+3;d.push(e);return e};
function Eg(a,b,c){var d=Fg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.qa(a)}}
n.qa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.o?(this.m.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Gg(this.i[g+1],this.i[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.qa(c)}}return 0!=e}return!1};
function Gg(a,b,c){wf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.qa,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.fa=function(){N.P.fa.call(this);this.clear();this.m.length=0};function Hg(a){this.i=a}
Hg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,mg(b))};
Hg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hg.prototype.remove=function(a){this.i.remove(a)};function Ig(a){this.i=a}
D(Ig,Hg);function Jg(a){this.data=a}
function Kg(a){return void 0===a||a instanceof Jg?a:new Jg(a)}
Ig.prototype.set=function(a,b){Ig.P.set.call(this,a,Kg(b))};
Ig.prototype.j=function(a){a=Ig.P.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ig.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Lg(a){this.i=a}
D(Lg,Ig);Lg.prototype.set=function(a,b,c){if(b=Kg(b)){if(c){if(c<Date.now()){Lg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Lg.P.set.call(this,a,b)};
Lg.prototype.j=function(a){var b=Lg.P.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Lg.prototype.remove.call(this,a);else return b}};function Mg(){}
;function Ng(){}
D(Ng,Mg);Ng.prototype[Symbol.iterator]=function(){return Hf(this.M(!0)).i()};
Ng.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Og(a){this.i=a}
D(Og,Ng);n=Og.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.M=function(a){var b=0,c=this.i,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c.key(b++);if(a)return Gf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Pg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
D(Pg,Og);function Qg(a,b){this.j=a;this.i=null;var c;if(c=dc)c=!(9<=Number(pc));if(c){Rg||(Rg=new hg);this.i=Rg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Rg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
D(Qg,Ng);var Sg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rg=null;function Tg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Sg[b]})}
n=Qg.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Tg(a),b);Ug(this)};
n.get=function(a){a=this.i.getAttribute(Tg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Tg(a));Ug(this)};
n.M=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c[b++];if(a)return Gf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ug(this)};
function Ug(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Vg(a,b){this.j=a;this.i=b+"::"}
D(Vg,Ng);Vg.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Vg.prototype.get=function(a){return this.j.get(this.i+a)};
Vg.prototype.remove=function(a){this.j.remove(this.i+a)};
Vg.prototype.M=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Ef;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Gf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Wg(a){L.call(this,a)}
v(Wg,L);Wg.prototype.getKey=function(){return id(this,1)};
Wg.prototype.V=function(){return sd(this,2===ld(this,Xg)?2:-1)};
Wg.prototype.setValue=function(a){return kd(this,2,Xg,a)};
var Xg=[2,3,4,5,6];function Yg(a){L.call(this,a)}
v(Yg,L);function Zg(a){L.call(this,a)}
v(Zg,L);function $g(a){L.call(this,a,-1,ah)}
v($g,L);var ah=[2];function bh(a){L.call(this,a,-1,ch)}
v(bh,L);bh.prototype.getPlayerType=function(){return id(this,36)};
bh.prototype.setHomeGroupInfo=function(a){return J(this,$g,81,a)};
var ch=[9,66,24,32,86,100,101];function dh(a){L.call(this,a,-1,eh)}
v(dh,L);var eh=[15,26,28];function fh(a){L.call(this,a)}
v(fh,L);fh.prototype.setToken=function(a){return I(this,2,a)};function gh(a){L.call(this,a,-1,hh)}
v(gh,L);gh.prototype.setSafetyMode=function(a){return I(this,5,a)};
var hh=[12];function ih(a){L.call(this,a,-1,jh)}
v(ih,L);var jh=[12];var kh={Vb:"WEB_DISPLAY_MODE_UNKNOWN",Rb:"WEB_DISPLAY_MODE_BROWSER",Tb:"WEB_DISPLAY_MODE_MINIMAL_UI",Ub:"WEB_DISPLAY_MODE_STANDALONE",Sb:"WEB_DISPLAY_MODE_FULLSCREEN"};function lh(a){L.call(this,a,-1,mh)}
v(lh,L);function nh(a){L.call(this,a)}
v(nh,L);nh.prototype.getKey=function(){return td(this,1)};
nh.prototype.V=function(){return td(this,2)};
nh.prototype.setValue=function(a){return I(this,2,a)};
var mh=[4,5];function oh(a){L.call(this,a)}
v(oh,L);function ph(a){L.call(this,a)}
v(ph,L);var qh=[2,3,4];function rh(a){L.call(this,a)}
v(rh,L);function sh(a){L.call(this,a)}
v(sh,L);function th(a){L.call(this,a)}
v(th,L);function uh(a){L.call(this,a,-1,vh)}
v(uh,L);var vh=[10,17];function wh(a){L.call(this,a)}
v(wh,L);function xh(a){L.call(this,a)}
v(xh,L);function yh(a){L.call(this,a)}
v(yh,L);function zh(a){L.call(this,a,449)}
v(zh,L);
var Ah=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];function Bh(a){L.call(this,a)}
v(Bh,L);function Ch(a){L.call(this,a)}
v(Ch,L);Ch.prototype.setVideoId=function(a){return kd(this,1,Dh,a)};
Ch.prototype.getPlaylistId=function(){return sd(this,2===ld(this,Dh)?2:-1)};
var Dh=[1,2];function Eh(a){L.call(this,a,-1,Fh)}
v(Eh,L);var Fh=[3];var Gh=A.window,Hh,Ih,Jh=(null==Gh?void 0:null==(Hh=Gh.yt)?void 0:Hh.config_)||(null==Gh?void 0:null==(Ih=Gh.ytcfg)?void 0:Ih.data_)||{};B("yt.config_",Jh);function Kh(){var a=arguments;1<a.length?Jh[a[0]]=a[1]:1===a.length&&Object.assign(Jh,a[0])}
function P(a,b){return a in Jh?Jh[a]:b}
function Lh(){return P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Mh(){var a=Jh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Nh=[];function Oh(a){Nh.forEach(function(b){return b(a)})}
function Ph(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Qh(b)}}:a}
function Qh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=P("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Kh("ERRORS",e));Oh(a)}
function Rh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=P("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Kh("ERRORS",e))}
;var Sh=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Sh});var Th={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Uh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Th||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function Vh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
Uh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Uh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Uh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb);var Wh=A.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Wh);
function Xh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Yh(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Zh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Zh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function $h(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Xh(a,b,c,d);if(e)return e;e=++Wh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Uh(h);if(!Kd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Uh(h);
h.currentTarget=a;return c.call(a,h)};
g=Ph(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Zh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
;function ai(a,b){"function"===typeof a&&(a=Ph(a));return window.setTimeout(a,b)}
function bi(a,b){"function"===typeof a&&(a=Ph(a));return window.setInterval(a,b)}
;var ci=/^[\w.]*$/,di={q:!0,search_query:!0};function ei(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=fi(f[0]||""),h=fi(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(ei);k.args=[{key:l,value:f[1],query:a,method:gi==m?"unchanged":m}];di.hasOwnProperty(l)||Rh(k)}}return c}
var gi=String(ei);function hi(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ii(a){"?"==a.charAt(0)&&(a=a.substr(1));return ei(a,"&")}
function ji(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ii(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Xb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ki(a){if(!b)var b=window.location.href;var c=a.match(Ob)[1]||null,d=Ub(a);c&&d?(a=a.match(Ob),b=b.match(Ob),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ub(b)==d&&(Number(b.match(Ob)[4]||null)||null)==(Number(a.match(Ob)[4]||null)||null):!0;return a}
function fi(a){return a&&a.match(ci)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=li(a);return"string"===typeof a&&"false"===a?!1:!!a}
function mi(a,b){a=li(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function li(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function ni(){var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=P("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function oi(a){var b=pi;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(Y){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?zd:g;try{var h=g.history.length}catch(Y){h=0}e.u_his=h;var k;e.u_h=null==(k=zd.screen)?void 0:k.height;var l;e.u_w=null==(l=zd.screen)?void 0:l.width;var m;e.u_ah=null==(m=zd.screen)?void 0:m.availHeight;var p;e.u_aw=null==
(p=zd.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=zd.screen)?void 0:t.colorDepth}catch(Y){}h=b.i;try{var q=h.screenX;var w=h.screenY}catch(Y){}try{var z=h.outerWidth;var G=h.outerHeight}catch(Y){}try{var K=h.innerWidth;var M=h.innerHeight}catch(Y){}try{var O=h.screenLeft;var kb=h.screenTop}catch(Y){}try{K=h.innerWidth,M=h.innerHeight}catch(Y){}try{var qc=h.screen.availWidth;var ya=h.screen.availTop}catch(Y){}q=[O,kb,q,w,qc,ya,z,G,K,M];w=b.i.top;try{var ta=(w||window).document,Z="CSS1Compat"==
ta.compatMode?ta.documentElement:ta.body;var da=(new Id(Z.clientWidth,Z.clientHeight)).round()}catch(Y){da=new Id(-12245933,-12245933)}ta=da;da={};var ea=void 0===ea?A:ea;Z=new Se;ea.SVGElement&&ea.document.createElementNS&&Z.set(0);w=Rd();w["allow-top-navigation-by-user-activation"]&&Z.set(1);w["allow-popups-to-escape-sandbox"]&&Z.set(2);ea.crypto&&ea.crypto.subtle&&Z.set(3);ea.TextDecoder&&ea.TextEncoder&&Z.set(4);ea=Te(Z);da.bc=ea;da.bih=ta.height;da.biw=ta.width;da.brdim=q.join();b=b.j;b=(da.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,da.wgl=!!zd.WebGLRenderingContext,da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pi=new function(){var a=window.document;this.i=window;this.j=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return hi(oi(a))});Date.now();var qi="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function ri(){if(!qi)return null;var a=qi();return"open"in a?a:null}
;var si={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ti="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia($d)),ui=!1;
function vi(a,b){b=void 0===b?{}:b;var c=ki(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in si){var f=P(si[e]);"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&Ub(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ub(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ub(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&Ub(a)||(b["X-YouTube-Ad-Signals"]=hi(oi()));return b}
function wi(a){var b=window.location.search,c=Ub(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ki(a)&&(c=document.location.hostname);var d=Pb(a.match(Ob)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ii(b),f={};E(ti,function(g){e[g]&&(f[g]=e[g])});
return ji(a,f||{},!1)}
function xi(a,b){var c=b.format||"JSON";a=yi(a,b);var d=zi(a,b),e=!1,f=Ai(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)m=Bi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||A;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ai(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function yi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ji(a,b||{},!0);return a}
function zi(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ub(a)&&!b.withCredentials&&Ub(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ii(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Xb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!ui&&a&&"POST"!=b.method&&(ui=!0,Qh(Error("AJAX request with postData should use POST")));return e}
function Bi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Rh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ci(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Di(g)})}d&&Ei(e);
return e}
function Ei(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===qb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){A.console&&A.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Nb(d)}else Ei(a[b])}}
function Ci(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Di(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ai(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ph(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ri();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=wi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Fi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Gi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Hi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ii={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Ji={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ki(){var a=A.navigator;return a?a.connection:void 0}
;function Li(){}
function Mi(a,b){return Ni(a,0,b)}
Li.prototype.S=function(a,b){return Ni(a,1,b)};
function Oi(a,b){Ni(a,2,b)}
;function Pi(){Li.apply(this,arguments)}
v(Pi,Li);function Qi(){Pi.i||(Pi.i=new Pi);return Pi.i}
function Ni(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ai(a,c||0)}
Pi.prototype.da=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Pi.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Re=Qi();function Ri(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(Ri,Error);function Si(){try{return Ti(),!0}catch(a){return!1}}
function Ti(){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new Ri("Datasync ID not set","unknown");}
;var Ui=rc||sc;function Vi(a){var b=new Pg;(b=b.isAvailable()?a?new Vg(b,a):b:null)||(a=new Qg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Lg(a):null;this.j=document.domain||window.location.hostname}
Vi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(mg(b))}catch(f){return}else e=escape(b);b=this.j;ge.set(""+a,e,{Ma:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Vi.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=ge.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vi.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ge.remove(""+a,"/",void 0===b?"youtube.com":b)};var Wi=function(){var a;return function(){a||(a=new Vi("ytidb"));return a}}();
function Xi(){var a;return null==(a=Wi())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Yi=[],Zi=!1;function $i(a){Zi||(Yi.push({type:"ERROR",payload:a}),10<Yi.length&&Yi.shift())}
function aj(a,b){Zi||(Yi.push({type:"EVENT",eventType:a,payload:b}),10<Yi.length&&Yi.shift())}
;function bj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function cj(a){return a.substr(0,a.indexOf(":"))||a}
;var dj={},ej=(dj.AUTH_INVALID="No user identifier specified.",dj.EXPLICIT_ABORT="Transaction was explicitly aborted.",dj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dj.MISSING_INDEX="Index not created.",dj.MISSING_OBJECT_STORES="Object stores not created.",dj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",dj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",dj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
dj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",dj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",dj),fj={},gj=(fj.AUTH_INVALID="ERROR",fj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fj.EXPLICIT_ABORT="IGNORED",fj.IDB_NOT_SUPPORTED="ERROR",fj.MISSING_INDEX=
"WARNING",fj.MISSING_OBJECT_STORES="ERROR",fj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fj.QUOTA_EXCEEDED="WARNING",fj.QUOTA_MAYBE_EXCEEDED="WARNING",fj.UNKNOWN_ABORT="WARNING",fj.INCOMPATIBLE_DB_VERSION="WARNING",fj),hj={},ij=(hj.AUTH_INVALID=!1,hj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hj.EXPLICIT_ABORT=!1,hj.IDB_NOT_SUPPORTED=!1,hj.MISSING_INDEX=!1,hj.MISSING_OBJECT_STORES=!1,hj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,hj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,hj.QUOTA_EXCEEDED=!1,hj.QUOTA_MAYBE_EXCEEDED=!0,hj.UNKNOWN_ABORT=!0,hj.INCOMPATIBLE_DB_VERSION=!1,hj);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ej[a]:c;d=void 0===d?gj[a]:d;e=void 0===e?ij[a]:e;Ri.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,T.prototype)}
v(T,Ri);function jj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ej.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,jj.prototype)}
v(jj,T);function kj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,kj.prototype)}
v(kj,Error);var lj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function mj(a,b,c,d){b=cj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(tc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof kj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&lj.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ec:e.name})];e.level="WARNING";return e}
function nj(a,b,c){var d=Xi();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function oj(a){if(!a)throw Error();throw a;}
function pj(a){return a}
function qj(a){this.i=a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(new qj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ca:0};f.ca<a.length;f={ca:f.ca},++f.ca)rj(U.resolve(a[f.ca]).then(function(g){return function(h){d[g.ca]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
U.resolve=function(a){return new U(new qj(function(b,c){a instanceof U?a.then(b,c):b(a)}))};
U.reject=function(a){return new U(new qj(function(b,c){c(a)}))};
U.prototype.then=function(a,b){var c=this,d=null!=a?a:pj,e=null!=b?b:oj;return new U(new qj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){sj(c,c,d,f,g)}),c.onRejected.push(function(){tj(c,c,e,f,g)})):"FULFILLED"===c.state.status?sj(c,c,d,f,g):"REJECTED"===c.state.status&&tj(c,c,e,f,g)}))};
function rj(a,b){a.then(void 0,b)}
function sj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?uj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?uj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function uj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?uj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function vj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function wj(a){return new Promise(function(b,c){vj(a,b,c)})}
function V(a){return new U(new qj(function(b,c){vj(a,b,c)}))}
;function xj(a,b){return new U(new qj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var yj=window,W=yj.ytcsi&&yj.ytcsi.now?yj.ytcsi.now:yj.performance&&yj.performance.timing&&yj.performance.now&&yj.performance.timing.navigationStart?function(){return yj.performance.timing.navigationStart+yj.performance.now()}:function(){return(new Date).getTime()};function zj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(W());this.j=!1}
n=zj.prototype;n.add=function(a,b,c){return Aj(this,[a],{mode:"readwrite",J:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Aj(this,[a],{mode:"readwrite",J:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Aj(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).count(b)})};
function Bj(a,b,c){a=a.i.createObjectStore(b,c);return new Cj(a)}
n.delete=function(a,b){return Aj(this,[a],{mode:"readwrite",J:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Aj(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).get(b)})};
function Dj(a,b){return Aj(a,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(c){c=c.objectStore("LogsRequestsStore");return V(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Aj(a,b,c,d){var e,f,g,h,k,l,m,p,t,q,w,z;return y(function(G){switch(G.i){case 1:var K={mode:"readonly",J:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.J?3:1;g=0;case 2:if(h){G.B(3);break}g++;k=Math.round(W());wa(G,4);l=a.i.transaction(b,e.mode);K=new sk(l);K=tk(K,d);return x(G,K,6);case 6:return m=G.j,p=Math.round(W()),uk(a,k,p,g,void 0,b.join(),e),G.return(m);case 4:t=za(G);q=Math.round(W());w=mj(t,a.i.name,b.join(),a.i.version);
if((z=w instanceof T&&!w.i)||g>=f)uk(a,k,q,g,w,b.join(),e),h=w;G.B(2);break;case 3:return G.return(Promise.reject(h))}})}
function uk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&aj("QUOTA_EXCEEDED",{dbName:cj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),aj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),vk(a,!1,d,f,b,g.tag),$i(e)):vk(a,!0,d,f,b,g.tag)}
function vk(a,b,c,d,e,f){aj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function Cj(a){this.i=a}
n=Cj.prototype;n.add=function(a,b){return V(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return V(this.i.clear()).then(function(){})};
n.count=function(a){return V(this.i.count(a))};
function wk(a,b){return xk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?wk(this,a):V(this.i.delete(a))};
n.get=function(a){return V(this.i.get(a))};
n.index=function(a){try{return new yk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new kj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function xk(a,b,c){a=a.i.openCursor(b.query,b.direction);return zk(a).then(function(d){return xj(d,c)})}
function sk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=T;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function tk(a,b){var c=new Promise(function(d,e){try{rj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
sk.prototype.abort=function(){this.i.abort();this.j=!0;throw new T("EXPLICIT_ABORT");};
sk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Cj(a),this.l.set(a,b));return b};
function yk(a){this.i=a}
n=yk.prototype;n.count=function(a){return V(this.i.count(a))};
n.delete=function(a){return Ak(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return V(this.i.get(a))};
n.getKey=function(a){return V(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Ak(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return zk(a).then(function(d){return xj(d,c)})}
function Bk(a,b){this.request=a;this.cursor=b}
function zk(a){return V(a).then(function(b){return b?new Bk(a,b):null})}
n=Bk.prototype;n.advance=function(a){this.cursor.advance(a);return zk(this.request)};
n.continue=function(a){this.cursor.continue(a);return zk(this.request)};
n.delete=function(){return V(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.V=function(){return this.cursor.value};
n.update=function(a){return V(this.cursor.update(a))};function Ck(a,b,c){return new Promise(function(d,e){function f(){t||(t=new zj(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Eb,m=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&aj("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:cj(a)});var w=f(),z=new sk(g.transaction);
m&&m(w,function(G){return q.oldVersion<G&&q.newVersion>=G},z);
z.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){aj("IDB_UNEXPECTEDLY_CLOSED",{dbName:cj(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Dk(a,b,c){c=void 0===c?{}:c;return Ck(a,b,c)}
function Ek(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.i)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),x(g,wj(c),4);
if(2!=g.i)return xa(g,0);f=za(g);throw mj(f,a,"",-1);})}
;function Fk(a){return new Promise(function(b){Oi(function(){b()},a)})}
function Gk(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.u=0;this.j=500}
Gk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Dk(a,b,c)};
Gk.prototype.delete=function(a){a=void 0===a?{}:a;return Ek(this.name,a)};
function Hk(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ik(a,b){if(!b)throw nj("openWithToken",cj(a.name));return Jk(a)}
function Jk(a){function b(){var f,g,h,k,l,m,p,t,q,w;return y(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",wa(z,2),x(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var G=a.options,K=[],M=u(Object.keys(G.ma)),O=M.next();!O.done;O=M.next()){O=O.value;var kb=G.ma[O],qc=void 0===kb.Cb?Number.MAX_VALUE:kb.Cb;!(h.i.version>=kb.Ja)||h.i.version>=qc||h.i.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){z.B(5);break}l=Object.keys(a.options.ma);m=h.objectStoreNames();
if(a.o<mi("ytidb_reopen_db_retries",0))return a.o++,h.close(),$i(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.u<mi("ytidb_remake_db_retries",1))){z.B(6);break}a.u++;if(!R("ytidb_remake_db_enable_backoff_delay")){z.B(7);break}return x(z,Fk(a.j),8);case 8:a.j*=2;case 7:return x(z,a.delete(),9);case 9:return $i(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new jj(m,l);case 5:return z.return(h);case 2:p=za(z);if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.B(10);break}return x(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:t=z.j;q=t.i.version;if(void 0!==a.options.version&&q>a.options.version+1)throw t.close(),
a.m=!1,Hk(a,q);return z.return(t);case 10:throw c(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),mj(p,a.name,"",null!=(w=a.options.version)?w:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Hk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,Eb:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Kk=new Gk("YtIdbMeta",{ma:{databases:{Ja:1}},upgrade:function(a,b){b(1)&&Bj(a,"databases",{keyPath:"actualName"})}});
function Lk(a,b){var c;return y(function(d){if(1==d.i)return x(d,Ik(Kk,b),2);c=d.j;return d.return(Aj(c,["databases"],{J:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return V(f.i.put(a,void 0)).then(function(){})})}))})}
function Mk(a,b){var c;return y(function(d){if(1==d.i)return a?x(d,Ik(Kk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Nk(a,b){var c,d;return y(function(e){return 1==e.i?(c=[],x(e,Ik(Kk,b),2)):3!=e.i?(d=e.j,x(e,Aj(d,["databases"],{J:!0,mode:"readonly"},function(f){c.length=0;return xk(f.objectStore("databases"),{},function(g){a(g.V())&&c.push(g.V());return g.continue()})}),3)):e.return(c)})}
function Ok(a){return Nk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Pk,Qk=new function(){}(new function(){});
function Rk(){var a,b,c,d;return y(function(e){switch(e.i){case 1:a=Xi();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ui)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||ec)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(e,Lk(d,Qk),4);case 4:return x(e,Mk("yt-idb-test-do-not-use",Qk),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Sk(){if(void 0!==Pk)return Pk;Zi=!0;return Pk=Rk().then(function(a){Zi=!1;var b;if(null!=(b=Wi())&&b.i){var c;b={hasSucceededOnce:(null==(c=Xi())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Wi())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Tk(){var a=C("ytglobal.idbToken_")||void 0;return a?Promise.resolve(a):Sk().then(function(b){(b=b?Qk:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new ng;function Uk(a){if(!Si())throw a=new T("AUTH_INVALID",{dbName:a}),$i(a),a;var b=Ti();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Vk(a,b,c,d){var e,f,g,h,k,l;return y(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",x(m,Tk(),2);case 2:g=m.j;if(!g)throw h=nj("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),$i(h),h;bj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Uk(a);wa(m,3);return x(m,Lk(k,g),5);case 5:return x(m,Dk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=za(m),wa(m,7),x(m,Mk(k.actualName,g),9);case 9:xa(m,
8);break;case 7:za(m);case 8:throw l;}})}
function Wk(a,b,c){c=void 0===c?{}:c;return Vk(a,b,!1,c)}
function Xk(a,b,c){c=void 0===c?{}:c;return Vk(a,b,!0,c)}
function Yk(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.i)return x(e,Tk(),2);if(3!=e.i){c=e.j;if(!c)return e.return();bj(a);d=Uk(a);return x(e,Ek(d.actualName,b),3)}return x(e,Mk(d.actualName,c),0)})}
function Zk(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.i?x(e,Ek(d.actualName,b),2):x(e,Mk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function $k(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.i)return x(d,Tk(),2);if(3!=d.i){b=d.j;if(!b)return d.return();bj("LogsDatabaseV2");return x(d,Ok(b),3)}c=d.j;return x(d,Zk(c,a,b),0)})}
function al(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.i)return x(d,Tk(),2);if(3!=d.i){c=d.j;if(!c)return d.return();bj(a);return x(d,Ek(a,b),3)}return x(d,Mk(a,c),0)})}
;function bl(a,b){Gk.call(this,a,b);this.options=b;bj(a)}
v(bl,Gk);function cl(a,b){var c;return function(){c||(c=new bl(a,b));return c}}
bl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Sa?Xk:Wk)(a,b,Object.assign({},c))};
bl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Sa?al:Yk)(this.name,a)};
function dl(a,b){return cl(a,b)}
;function el(){}
;function fl(){return"INNERTUBE_API_KEY"in Jh&&"INNERTUBE_API_VERSION"in Jh}
function gl(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),La:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Za:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),wb:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),bb:P("INNERTUBE_CONTEXT_HL"),ab:P("INNERTUBE_CONTEXT_GL"),xb:P("INNERTUBE_HOST_OVERRIDE")||"",zb:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),yb:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function hl(a){var b={client:{hl:a.bb,gl:a.ab,clientName:a.Za,clientVersion:a.innertubeContextClientVersion,configInfo:a.La}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ni();0<c.length&&(b.request={internalExperimentFlags:c});il(a,void 0,b);jl(void 0,b);kl(a,void 0,b);ll(void 0,b);R("start_sending_config_hash")&&ml(void 0,b);P("DELEGATED_SESSION_ID")&&
!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(ii(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function nl(a){var b=new ih,c=new bh;I(c,1,a.bb);I(c,2,a.ab);I(c,16,a.wb);I(c,17,a.innertubeContextClientVersion);if(a.La){var d=a.La,e=new Yg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,Yg,62,e)}(d=A.devicePixelRatio)&&1!=d&&I(c,65,d);d=P("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=ni();if(0<d.length){e=new dh;for(var f=0;f<d.length;f++){var g=new Wg;I(g,1,d[f].key);g.setValue(d[f].value);
rd(e,15,Wg,g)}J(b,dh,5,e)}il(a,c);jl(c);kl(a,c);ll(c);R("start_sending_config_hash")&&ml(c);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new gh,I(a,3,P("DELEGATED_SESSION_ID")));a=u(Object.entries(ii(P("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,bh,1,c);return b}
function il(a,b,c){a=a.Za;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=md(b,Zg,96)||new Zg;var d=Fi();d=Object.keys(kh).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,Zg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Fi())}
function jl(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function kl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=md(b,Yg,62))?d:new Yg;I(c,6,a.appInstallData);J(b,Yg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function ll(a,b){a:{var c=Ki();if(c){var d=Gi[c.type||"unknown"]||"CONN_UNKNOWN";c=Gi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,Hi[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=Ki(),d=null!=d&&d.effectiveType?Ji.hasOwnProperty(d.effectiveType)?Ji[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,Ii[d]):
b&&(b.client.effectiveConnectionType=d)))}
function ol(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Xb||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Wb:b=je([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function ml(a,b){el.i||(el.i=new el);var c=C("yt.gcf.config.coldConfigData");var d=C("yt.gcf.config.hotHashData");var e=C("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=md(a,Yg,62))?f:new Yg;I(b,1,c);I(b,3,e);I(b,5,d);J(a,Yg,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function pl(a){a=Object.assign({},a);delete a.Authorization;var b=je();if(b){var c=new Cf;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=wc(c.digest(),3)}return a}
;var ql;function rl(){ql||(ql=new Vi("yt.innertube"));return ql}
function sl(a,b,c,d){if(d)return null;d=rl().get("nextId",!0)||1;var e=rl().get("requests",!0)||{};e[d]={method:a,request:b,authState:pl(c),requestTime:Math.round(W())};rl().set("nextId",d+1,86400,!0);rl().set("requests",e,86400,!0);return d}
function tl(a){var b=rl().get("requests",!0)||{};delete b[a];rl().set("requests",b,86400,!0)}
function ul(a){var b=rl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=pl(ol(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),vl(a,d.method,e,{}));delete b[c]}}rl().set("requests",b,86400,!0)}}
;function wl(a){this.wa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ga=function(){};
this.now=Date.now;this.ka=!1;var b;this.lb=null!=(b=a.lb)?b:100;var c;this.kb=null!=(c=a.kb)?c:1;var d;this.ib=null!=(d=a.ib)?d:2592E6;var e;this.hb=null!=(e=a.hb)?e:12E4;var f;this.jb=null!=(f=a.jb)?f:5E3;var g;this.A=null!=(g=a.A)?g:void 0;this.Aa=!!a.Aa;var h;this.za=null!=(h=a.za)?h:.1;var k;this.Da=null!=(k=a.Da)?k:10;a.handleError&&(this.handleError=a.handleError);a.ga&&(this.ga=a.ga);a.ka&&(this.ka=a.ka);a.wa&&(this.wa=a.wa);this.C=a.C;this.L=a.L;this.F=a.F;this.H=a.H;this.R=a.R;this.Qa=a.Qa;
this.Pa=a.Pa;xl(this)&&(!this.C||this.C("networkless_logging"))&&yl(this)}
function yl(a){xl(a)&&!a.ka&&(a.i=!0,a.Aa&&Math.random()<=a.za&&a.F.qb(a.A),zl(a),a.H.K()&&a.pa(),a.H.aa(a.Qa,a.pa.bind(a)),a.H.aa(a.Pa,a.Ua.bind(a)))}
n=wl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(xl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.A).then(function(e){d.id=e;c.H.K()&&Al(c,d)}).catch(function(e){Al(c,d);
Bl(c,e)})}else this.R(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(xl(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.K()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.i)return x(k,d.F.set(e,d.A).catch(function(l){Bl(d,l)}),2);
f(g,h);k.i=0})}}this.R(a,b,e.skipRetry)}else this.F.set(e,this.A).catch(function(g){d.R(a,b,e.skipRetry);
Bl(d,g)})}else this.R(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(xl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.ea(d.id,c.A):e=!0;c.H.ba&&c.C&&c.C("vss_network_hint")&&c.H.ba(!0);f(g,h)};
this.R(d.url,d.options);this.F.set(d,this.A).then(function(g){d.id=g;e&&c.F.ea(d.id,c.A)}).catch(function(g){Bl(c,g)})}else this.R(a,b)};
n.pa=function(){var a=this;if(!xl(this))throw nj("throttleSend");this.j||(this.j=this.L.S(function(){var b;return y(function(c){if(1==c.i)return x(c,a.F.Ya("NEW",a.A),2);if(3!=c.i)return b=c.j,b?x(c,Al(a,b),3):(a.Ua(),c.return());a.j&&(a.j=0,a.pa());c.i=0})},this.lb))};
n.Ua=function(){this.L.da(this.j);this.j=0};
function Al(a,b){var c,d;return y(function(e){switch(e.i){case 1:if(!xl(a))throw c=nj("immediateSend"),c;if(void 0===b.id){e.B(2);break}return x(e,a.F.Ab(b.id,a.A),3);case 3:(d=e.j)?b=d:a.ga(Error("The request cannot be found in the database."));case 2:if(Cl(a,b,a.ib)){e.B(4);break}a.ga(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.B(5);break}return x(e,a.F.ea(b.id,a.A),5);case 5:return e.return();case 4:b.skipRetry||(b=Dl(a,b));if(!b){e.B(0);break}if(!b.skipRetry||
void 0===b.id){e.B(8);break}return x(e,a.F.ea(b.id,a.A),8);case 8:a.R(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Dl(a,b){if(!xl(a))throw nj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return y(function(l){switch(l.i){case 1:g=El(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Da)){l.B(2);break}if(!a.H.Fa){l.B(3);break}return x(l,a.H.Fa(),3);case 3:if(a.H.K()){l.B(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.B(6);break}return x(l,a.F.Ra(b.id,a.A,!1),6);case 6:return l.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Da)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.B(8);break}return b.sendCount<a.kb?x(l,a.F.Ra(b.id,a.A),12):x(l,a.F.ea(b.id,a.A),8);case 12:a.L.S(function(){a.H.K()&&a.pa()},a.jb);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):x(h,a.F.ea(b.id,a.A),2);a.H.ba&&a.C&&a.C("vss_network_hint")&&a.H.ba(!0);d(e,f);h.i=0})};
return b}
function Cl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zl(a){if(!xl(a))throw nj("retryQueuedRequests");a.F.Ya("QUEUED",a.A).then(function(b){b&&!Cl(a,b,a.hb)?a.L.S(function(){return y(function(c){if(1==c.i)return void 0===b.id?c.B(2):x(c,a.F.Ra(b.id,a.A),2);zl(a);c.i=0})}):a.H.K()&&a.pa()})}
function Bl(a,b){a.mb&&!a.H.K()?a.mb(b):a.handleError(b)}
function xl(a){return!!a.A||a.wa}
function El(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Fl=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.qa;N.prototype.publish=N.prototype.ha;N.prototype.clear=N.prototype.clear;B("ytPubsub2Pubsub2Instance",Fl);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);var Gl;
function Hl(){if(Gl)return Gl();var a={};Gl=dl("LogsDatabaseV2",{ma:(a.LogsRequestsStore={Ja:2},a),Sa:!1,upgrade:function(b,c,d){c(2)&&Bj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return Gl()}
;function Il(a){return Ik(Hl(),a)}
function Jl(a,b){var c,d,e,f;return y(function(g){if(1==g.i)return c={startTime:W(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(g,Il(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(g,Dj(d,e),3);f=g.j;c.Fb=W();Kl(c);return g.return(f)})}
function Ll(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.i)return c={startTime:W(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(l,Il(b),2);if(3!=l.i)return d=l.j,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k=void 0,x(l,Aj(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(m){return Ak(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.V()&&(k=p.V(),"NEW"===a&&(k.status="QUEUED",p.update(k)))})}),
3);
c.Fb=W();Kl(c);return l.return(k)})}
function Ml(a,b){var c;return y(function(d){if(1==d.i)return x(d,Il(b),2);c=d.j;return d.return(Aj(c,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",V(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Nl(a,b,c){c=void 0===c?!0:c;var d;return y(function(e){if(1==e.i)return x(e,Il(b),2);d=e.j;return e.return(Aj(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),V(g.i.put(h,void 0)).then(function(){return h})):U.resolve(void 0)})}))})}
function Ol(a,b){var c;return y(function(d){if(1==d.i)return x(d,Il(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Pl(a){var b,c;return y(function(d){if(1==d.i)return x(d,Il(a),2);b=d.j;c=W()-2592E6;return x(d,Aj(b,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(e){return xk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.V().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ql(){y(function(a){return x(a,$k(),0)})}
function Kl(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Rl={},Sl=dl("ServiceWorkerLogsDatabase",{ma:(Rl.SWHealthLog={Ja:1},Rl),Sa:!0,upgrade:function(a,b){b(1)&&Bj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Tl(a){return Ik(Sl(),a)}
function Ul(a){var b,c;y(function(d){if(1==d.i)return x(d,Tl(a),2);b=d.j;c=W()-2592E6;return x(d,Aj(b,["SWHealthLog"],{mode:"readwrite",J:!0},function(e){return xk(e.objectStore("SWHealthLog"),{},function(f){if(f.V().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Vl(a){var b;return y(function(c){if(1==c.i)return x(c,Tl(a),2);b=c.j;return x(c,b.clear("SWHealthLog"),0)})}
;var Wl={},Xl=0;function Yl(a){var b=new Image,c=""+Xl++;Wl[c]=b;b.onload=b.onerror=function(){delete Wl[c]};
b.src=a}
;function Zl(){this.i=new Map;this.j=!1}
function $l(){if(!Zl.i){var a=C("yt.networkRequestMonitor.instance")||new Zl;B("yt.networkRequestMonitor.instance",a);Zl.i=a}return Zl.i}
Zl.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Zl.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Zl.prototype.removeParams=function(a){return a.split("?")[0]};
Zl.prototype.removeParams=Zl.prototype.removeParams;Zl.prototype.isEndpointCFR=Zl.prototype.isEndpointCFR;Zl.prototype.requestComplete=Zl.prototype.requestComplete;Zl.getInstance=$l;var am;function bm(){am||(am=new Vi("yt.offline"));return am}
function cm(a){if(R("offline_error_handling")){var b=bm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);bm().set("errors",b,2592E3,!0)}}
;function X(){Ke.call(this);var a=this;this.m=!1;this.j=Qe();this.j.aa("networkstatus-online",function(){if(a.m&&R("offline_error_handling")){var b=bm().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Ri(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Qh(d)}bm().set("errors",{},2592E3,!0)}}})}
v(X,Ke);function dm(){if(!X.i){var a=C("yt.networkStatusManager.instance")||new X;B("yt.networkStatusManager.instance",a);X.i=a}return X.i}
n=X.prototype;n.K=function(){return this.j.K()};
n.ba=function(a){this.j.j=a};
n.vb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.sb=function(){this.m=!0};
n.aa=function(a,b){return this.j.aa(a,b)};
n.Fa=function(a){a=Oe(this.j,a);a.then(function(b){R("use_cfr_monitor")&&$l().requestComplete("generate_204",b)});
return a};
X.prototype.sendNetworkCheckRequest=X.prototype.Fa;X.prototype.listen=X.prototype.aa;X.prototype.enableErrorFlushing=X.prototype.sb;X.prototype.getWindowStatus=X.prototype.vb;X.prototype.networkStatusHint=X.prototype.ba;X.prototype.isNetworkAvailable=X.prototype.K;X.getInstance=dm;function em(a){a=void 0===a?{}:a;Ke.call(this);var b=this;this.j=this.v=0;this.m=dm();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Ea?(this.Ea=a.Ea,c("networkstatus-online",function(){fm(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){fm(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Le(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Le(b,"publicytnetworkstatus-offline")})))}
v(em,Ke);em.prototype.K=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
em.prototype.ba=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
em.prototype.Fa=function(a){var b=this,c;return y(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return R("skip_network_check_if_cfr")&&$l().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ba((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.K())})):c?d.return(c(a)):d.return(!0)})};
function fm(a,b){a.Ea?a.j?(Re.da(a.v),a.v=Re.S(function(){a.o!==b&&(Le(a,b),a.o=b,a.j=W())},a.Ea-(W()-a.j))):(Le(a,b),a.o=b,a.j=W()):Le(a,b)}
;var gm;function hm(){var a=wl.call;gm||(gm=new em({cc:!0,ac:!0}));a.call(wl,this,{F:{qb:Pl,ea:Ol,Ya:Ll,Ab:Ml,Ra:Nl,set:Jl},H:gm,handleError:Qh,ga:Rh,R:im,now:W,mb:cm,L:Qi(),Qa:"publicytnetworkstatus-online",Pa:"publicytnetworkstatus-offline",Aa:!0,za:.1,Da:mi("potential_esf_error_limit",10),C:R,ka:!(Si()&&"www.youtube-nocookie.com"!==Ub(document.location.toString()))});this.l=new ng;R("networkless_immediately_drop_all_requests")&&Ql();al("LogsDatabaseV2")}
v(hm,wl);function jm(){var a=C("yt.networklessRequestController.instance");a||(a=new hm,B("yt.networklessRequestController.instance",a),R("networkless_logging")&&Tk().then(function(b){a.A=b;yl(a);a.l.resolve();a.Aa&&Math.random()<=a.za&&a.A&&Ul(a.A);R("networkless_immediately_drop_sw_health_store")&&km(a)}));
return a}
hm.prototype.writeThenSend=function(a,b){b||(b={});Si()||(this.i=!1);wl.prototype.writeThenSend.call(this,a,b)};
hm.prototype.sendThenWrite=function(a,b,c){b||(b={});Si()||(this.i=!1);wl.prototype.sendThenWrite.call(this,a,b,c)};
hm.prototype.sendAndWrite=function(a,b){b||(b={});Si()||(this.i=!1);wl.prototype.sendAndWrite.call(this,a,b)};
hm.prototype.awaitInitialization=function(){return this.l.promise};
function km(a){var b;y(function(c){if(!a.A)throw b=nj("clearSWHealthLogsDb"),b;return c.return(Vl(a.A).catch(function(d){a.handleError(d)}))})}
function im(a,b,c){R("use_cfr_monitor")&&lm(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Ai(a,void 0,"POST",e);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ai(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new Za({url:a});if(g.l&&g.j||
g.m){var h=Pb(a.match(Ob)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==Zb(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Yl(a)}}else xi(a,b)}
function lm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){$l().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){$l().requestComplete(a,!0);d(e,f)}}
;var mm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",mm);function nm(a){var b=this;this.config_=null;a?this.config_=a:fl()&&(this.config_=gl());Mi(function(){ul(b)},5E3)}
nm.prototype.isReady=function(){!this.config_&&fl()&&(this.config_=gl());return!!this.config_};
function vl(a,b,c,d){function e(w){w=void 0===w?!1:w;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(w||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=sl(b,c,l,k)),z)){var G=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){tl(z);G(M,O)};
c.onFetchSuccess=function(M,O){tl(z);K(M,O)}}try{w&&d.retry&&!d.fb.bypassNetworkless?(g.method="POST",d.fb.writeThenSend?jm().writeThenSend(q,g):jm().sendAndWrite(q,g)):R("web_all_payloads_via_jspb")?xi(q,g):(g.method="POST",g.postParams||(g.postParams={}),xi(q,g))}catch(M){if("InvalidAccessError"==M.name)z&&(tl(z),z=0),Rh(Error("An extension is blocking network request."));
else throw M;}z&&Mi(function(){ul(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Rh(new Ri("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Ri("innertube xhrclient not ready",b,c,d);Qh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,z){if(d.onError)d.onError(z)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.xb)&&(h=f);var k=a.config_.zb||!1,l=ol(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.yb&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var q=ji(""+h+m,p||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
mm.isNwlInitialized?Sk().then(function(w){e(w)}):e(!1)}
;var om=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function pm(a){this.I=a;this.i=null;this.o=0;this.D=null;this.v=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.m=0;this.Ga=$h(window,"mousemove",Va(this.Ha,this));this.Ia=bi(Va(this.Z,this),25)}
D(pm,ke);pm.prototype.Ha=function(a){void 0===a.i&&Vh(a);var b=a.i;void 0===a.j&&Vh(a);this.i=new Hd(b,a.j)};
pm.prototype.Z=function(){if(this.i){var a=om();if(0!=this.o){var b=this.D,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.j[this.m]=.5<Math.abs((d-this.v)/this.v)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.I();this.v=d}this.o=a;this.D=this.i;this.m=(this.m+1)%4}};
pm.prototype.fa=function(){window.clearInterval(this.Ia);Yh(this.Ga)};var qm={};
function rm(){var a={},b=void 0===a.Bb?!1:a.Bb;a=void 0===a.tb?!0:a.tb;if(null==C("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&sm();$h(document,"keydown",sm);$h(document,"keyup",sm);$h(document,"mousedown",sm);$h(document,"mouseup",sm);b?$h(window,"touchmove",function(){tm("touchmove",200)},{passive:!0}):($h(window,"resize",function(){tm("resize",200)}),a&&$h(window,"scroll",function(){tm("scroll",200)}));
new pm(function(){tm("mouse",100)});
$h(document,"touchstart",sm,{passive:!0});$h(document,"touchend",sm,{passive:!0})}}
function tm(a,b){qm[a]||(qm[a]=!0,Re.S(function(){sm();qm[a]=!1},b))}
function sm(){null==C("_lact",window)&&rm();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function um(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var vm=A.ytPubsubPubsubInstance||new N,wm=A.ytPubsubPubsubSubscribedKeys||{},xm=A.ytPubsubPubsubTopicToKeys||{},ym=A.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.qa;N.prototype.publish=N.prototype.ha;N.prototype.clear=N.prototype.clear;B("ytPubsubPubsubInstance",vm);B("ytPubsubPubsubTopicToKeys",xm);B("ytPubsubPubsubIsSynchronous",ym);B("ytPubsubPubsubSubscribedKeys",wm);function zm(){this.store={}}
zm.prototype.storePayload=function(a,b){a=Am(a);this.store[a]?this.store[a].push(b):this.store[a]=[b];return a};
zm.prototype.extractMatchingEntries=function(a){a=Bm(this,a);for(var b=[],c=0;c<a.length;c++)b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]];return b};
zm.prototype.getSequenceCount=function(a){a=Bm(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Bm(a,b){a=Object.keys(a.store)||[];if(1>=a.length&&Am(b)===a[0])return a;for(var c=[],d=0;d<a.length;d++){var e=a[d].split("/");if(Cm(b.auth,e[0])){var f=b.isJspb;Cm(void 0===f?"undefined":f?"true":"false",e[1])&&Cm(b.cttAuthInfo,e[2])&&c.push(a[d])}}return c}
function Cm(a,b){return void 0===a||"undefined"===a?!0:a===b}
zm.prototype.getSequenceCount=zm.prototype.getSequenceCount;zm.prototype.extractMatchingEntries=zm.prototype.extractMatchingEntries;zm.prototype.storePayload=zm.prototype.storePayload;function Am(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;var Dm=mi("initial_gel_batch_timeout",2E3),Em=Math.pow(2,16)-1,Fm=void 0;function Gm(){this.l=this.i=this.j=0}
var Hm=new Gm,Im=new Gm,Jm,Km=!0,Lm=A.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Lm);var Mm=A.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Mm);var Nm=A.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Nm);var Om=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Om);var Pm={};function Qm(){var a=C("yt.logging.ims");a||(a=new zm,B("yt.logging.ims",a));return a}
function Rm(a,b){R("web_all_payloads_via_jspb")&&Rh(new Ri("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Sm(a);var c=Tm(a);if(R("use_new_in_memory_storage")){Pm[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Qm().storePayload(d,a.payload);Um(b,[],c,!1,d)}else d=Lm.get(c)||[],Lm.set(c,d),d.push(a.payload),Um(b,d,c)}}
function Vm(a,b){if("log_event"===a.endpoint){Sm(void 0,a);var c=Tm(a,!0);if(R("use_new_in_memory_storage")){Pm[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Qm().storePayload(d,a.payload.toJSON());Um(b,[],c,!0,d)}else d=Mm.get(c)||[],Mm.set(c,d),a=a.payload.toJSON(),d.push(a),Um(b,d,c,!0)}}
function Um(a,b,c,d,e){d=void 0===d?!1:d;a&&(Fm=new a);a=mi("tvhtml5_logging_max_batch")||mi("web_logging_max_batch")||100;var f=W(),g=d?Im.l:Hm.l;b=b.length;e&&(b=Qm().getSequenceCount(e));b>=a?R("background_thread_flush_logs_due_to_batch_limit")?Jm||(Jm=Wm(function(){Xm({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d);Jm=void 0},0)):Xm({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d):10<=f-g&&(Ym(d),d?Im.l=f:Hm.l=f)}
function Zm(a,b){R("web_all_payloads_via_jspb")&&Rh(new Ri("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Sm(a);var c=Tm(a),d=new Map;d.set(c,[a.payload]);b&&(Fm=new b);return new og(function(e,f){Fm&&Fm.isReady()?$m(d,Fm,e,f,{bypassNetworkless:!0},!0):e()})}}
function an(a,b){if("log_event"===a.endpoint){Sm(void 0,a);var c=Tm(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Fm=new b);return new og(function(e){Fm&&Fm.isReady()?bn(d,Fm,e,{bypassNetworkless:!0},!0):e()})}}
function Tm(a,b){var c="";if(a.ja)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ch;c.videoId?d.setVideoId(c.videoId):c.playlistId&&kd(d,2,Dh,c.playlistId);Om[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Nm[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Xm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&R("web_all_payloads_via_jspb")&&Rh(new Ri("transport.flushLogs called for JSON in JSPB only experiment"));new og(function(d,e){c?(cn(Im.j),cn(Im.i),Im.i=0):(cn(Hm.j),cn(Hm.i),Hm.i=0);if(Fm&&Fm.isReady())if(R("use_new_in_memory_storage")){var f=a,g=c,h=Fm;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Qm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),bn(k,h,d,f)):(k=Qm().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),l.set(b,k),$m(l,h,d,e,f));else if(g){e=u(Object.keys(Pm));for(g=e.next();!g.done;g=e.next())l=g.value,g=Qm().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Pm[l];bn(k,h,d,f)}else{k=u(Object.keys(Pm));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Qm().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Pm[g]}$m(l,h,d,e,f)}}else f=a,k=c,h=Fm,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Mm.get(b)||[],e.set(b,
k),bn(e,h,d,f),Mm.delete(b)):(k=new Map,l=Lm.get(b)||[],k.set(b,l),$m(k,h,d,e,f),Lm.delete(b)):k?(bn(Mm,h,d,f),Mm.clear()):($m(Lm,h,d,e,f),Lm.clear());else Ym(c),d()})}
function Ym(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!Hm.i||a&&!Im.i)){var b=Wm(function(){Xm({writeThenSend:!0},void 0,a)},6E4);
a?Im.i=b:Hm.i=b}cn(a?Im.j:Hm.j);b=P("LOGGING_BATCH_TIMEOUT",mi("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Km&&(b=Dm);b=Wm(function(){Xm({writeThenSend:!0},void 0,a)},b);
a?Im.j=b:Hm.j=b}
function $m(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(W()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={sa:k.sa,Y:k.Y,ia:k.ia,va:k.va,ta:k.ta},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Y=nb({context:hl(b.config_||gl())});if(!Oa(m)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.Y.events=m;(m=Nm[l])&&dn(k.Y,l,m);delete Nm[l];k.ia="visitorOnlyApprovedKey"===l;en(k.Y,g,k.ia);fn(e);k.va=function(){h--;h||c()};
k.sa=0;k.ta=function(p){return function(){p.sa++;if(e.bypassNetworkless&&1===p.sa)try{vl(b,"log_event",p.Y,gn({writeThenSend:!0},p.ia,p.va,p.ta,f)),Km=!1}catch(t){Qh(t),d()}h--;h||c()}}(k);
try{vl(b,"log_event",k.Y,gn(e,k.ia,k.va,k.ta,f)),Km=!1}catch(p){Qh(p),d()}}}
function bn(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(W()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Eh;var p=nl(b.config_||gl());J(k,ih,1,p);m=m?hn(m):[];m=u(m);for(p=m.next();!p.done;p=m.next())rd(k,3,zh,p.value);(m=Om[l])&&jn(k,l,m);delete Om[l];l="visitorOnlyApprovedKey"===l;kn(k,f,l);fn(d);k=wd(k);l=gn(d,l,function(){g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;vl(b,"log_event","",l);Km=!1}}
function fn(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function gn(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,fb:a,ja:b,Zb:!!e,headers:{},postBodyFormat:"",postBody:""};ln()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function en(a,b,c){ln()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=mn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function kn(a,b,c){ln()||I(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=mn();var d=new Bh;I(d,1,b);I(d,2,c);J(a,Bh,5,d)}}
function mn(){var a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Em/2));a++;a>Em&&(a=1);Kh("BATCH_CLIENT_COUNTER",a);return a}
function dn(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function jn(a,b,c){if(sd(c,1===ld(c,Dh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,Ch,4,c);a=md(a,ih,1)||new ih;c=md(a,gh,3)||new gh;var e=new fh;e.setToken(b);I(e,1,d);rd(c,12,fh,e);J(a,gh,3,c)}
function hn(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new zh(a[c]))}catch(d){Qh(new Ri("Transport failed to deserialize "+String(a[c])))}return b}
function Sm(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function ln(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Wm(a,b){return R("transport_use_scheduler")?Mi(a,b):ai(a,b)}
function cn(a){R("transport_use_scheduler")?Re.da(a):window.clearTimeout(a)}
;var nn=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",nn);
function on(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&rm();a=um();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.oa&&(a=e.context,b=d.oa,b={index:pn(b),groupKey:b},a.sequence=b,d.ub&&delete nn[d.oa]);(d.Db?Zm:Rm)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ja:d.ja},c)}
function qn(a){Xm(void 0,void 0,void 0===a?!1:a)}
function pn(a){nn[a]=a in nn?nn[a]+1:0;return nn[a]}
;var rn=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",rn);function sn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;P("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:nm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||W());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=um();d=new yh;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.oa){e=b.oa;var f=pn(e),g=new xh;I(g,2,f);I(g,1,e);J(d,xh,3,g);b.ub&&delete rn[b.oa]}J(a,yh,33,d);(b.Db?an:Vm)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,ja:b.ja},c)}
;function tn(a,b){var c=void 0===c?{}:c;if(R("migrate_events_to_ts")){c=void 0===c?{}:c;var d=nm;P("ytLoggingEventsDefaultDisabled",!1)&&nm===nm&&(d=null);R("web_all_payloads_via_jspb")&&Rh(new Ri("Logs should be translated to JSPB but are sent as JSON instead",a));on(a,b,d,c)}else d=nm,P("ytLoggingEventsDefaultDisabled",!1)&&nm==nm&&(d=null),on(a,b,d,c)}
;var un=[{Na:function(a){return"Cannot read property '"+a.key+"'"},
Ca:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Na:function(a){return"Cannot call '"+a.key+"'"},
Ca:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Na:function(a){return a.key+" is not defined"},
Ca:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var wn={W:[],U:[{pb:vn,weight:500}]};function vn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function xn(){this.U=[];this.W=[]}
var yn;function zn(){if(!yn){var a=yn=new xn;a.W.length=0;a.U.length=0;wn.W&&a.W.push.apply(a.W,wn.W);wn.U&&a.U.push.apply(a.U,wn.U)}return yn}
;var An=new N;function Bn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Cn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Cn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Cn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Cn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Dn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=En(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Bn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?En(e+".ve",f,g,h):0;d+=g;d+=En(e,a[e],b,c);if(500<d)break}}else c[b]=Fn(a),d+=c[b].length;else c[b]=Fn(a),d+=c[b].length;return d}
function En(a,b,c,d){c+="."+a;a=Fn(b);d[c]=a;return c.length+a.length}
function Fn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Gn=new Set,Hn=0,In=0,Jn=0,Kn=[],Ln=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Mn(){for(var a=u(Ln),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Nn(){var a;return y(function(b){return(a=lf())?b.return(a.then(function(c){c=wd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return wc(d,3)})):b.return(Promise.resolve(null))})}
;var On={};function Pn(a){return On[a]||(On[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Qn={},Rn=[],Fg=new N,Sn={};function Tn(){for(var a=u(Rn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Un(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Pn(b)]:a.getAttribute("data-"+b):null;return c}
function Vn(a){Fg.ha.apply(Fg,arguments)}
;function Wn(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Xn(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Yn(a,b,c){Zn||(Zn={},$h(window,"message",function(d){a:{if(d.origin===Xn(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Zn[e.id])d.v=!0,d.v&&(E(d.o,d.sendMessage,d),d.o.length=0),d.Ta(e)}e=void 0}return e}));
Zn[c]=b}
var Zn=null;var $n=window;function ao(a,b,c){this.u=this.i=this.j=null;this.l=0;this.v=!1;this.o=[];this.m=null;this.I={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.D=c;this.setup(a,b)}
n=ao.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Ta=function(a){bo(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);co(this,a);return this};
function eo(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.D===b[0]&&co(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Qn[this.i.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.u){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.u,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);Zn&&(Zn[this.id]=null);this.j=null;a=this.i;for(var c in lb)lb[c][0]==a&&Yh(c);this.u=this.i=null};
n.Wa=function(){return{}};
function fo(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.v?a.sendMessage(b):a.o.push(b)}
function bo(a,b,c){a.m.l||(c={target:a,data:c},a.m.ha(b,c),Vn(a.D+"."+b,c))}
function go(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Xn(a.j,"title"));(b=Xn(a.j,"width"))&&c.setAttribute("width",b.toString());(b=Xn(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Wa();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Zb(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Xn(a.j,"host")+("/embed/"+Xn(a.j,"videoId"))+"?"+Xb(g);$n.yt_embedsEnableUaChProbe?Nn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Wd(l.href).toString();Gd(c,Xd(k));return k}):$n.yt_embedsEnableIframeSrcWithIntent?Gd(c,Xd(h)):c.src=h;
return c}
n.gb=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function ho(a){Yn(a.j,a,a.id);a.l=bi(a.gb.bind(a),250);$h(a.i,"load",function(){window.clearInterval(a.l);a.l=bi(a.gb.bind(a),250)})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Vb(a.src):"https://www.youtube.com"),this.j=new Wn(b),c||(b=go(this,a),this.u=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Qn[this.i.id]=this,window.postMessage){this.m=new N;ho(this);b=Xn(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Sn)Sn.hasOwnProperty(e)&&
eo(this,e)}};
function co(a,b){a.I[b]||(a.I[b]=!0,fo(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Vb(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Qb){if(Qb.name&&"SyntaxError"===Qb.name){if(!(Qb.message&&0<Qb.message.indexOf("target origin ''"))){var e=void 0,f=Qb;e=void 0===e?{}:e;e.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Hn)){var m=void 0,p=void 0,t=f,q=g,w=Ad(t),z=w.message||"Unknown Error",G=w.name||"UnknownError",
K=w.stack||t.j||"Not available";if(K.startsWith(G+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=w.lineNumber||"Not available",kb=w.fileName||"Not available",qc=K,ya=0;if(t.hasOwnProperty("args")&&t.args&&t.args.length)for(var ta=0;ta<t.args.length&&!(ya=Dn(t.args[ta],"params."+ta,q,ya),500<=ya);ta++);else if(t.hasOwnProperty("params")&&t.params){var Z=t.params;if("object"===typeof t.params)for(p in Z){if(Z[p]){var da="params."+p,ea=Fn(Z[p]);q[da]=ea;ya+=da.length+ea.length;if(500<ya)break}}else q.params=
Fn(Z)}if(Kn.length)for(var Y=0;Y<Kn.length&&!(ya=Dn(Kn[Y],"params.context."+Y,q,ya),500<=ya);Y++);navigator.vendor&&!q.hasOwnProperty("vendor")&&(q["device.vendor"]=navigator.vendor);var S={message:z,name:G,lineNumber:O,fileName:kb,stack:qc,params:q,sampleWeight:1},Ej=Number(t.columnNumber);isNaN(Ej)||(S.lineNumber=S.lineNumber+":"+Ej);if("IGNORED"===t.level)m=0;else a:{for(var Fj=zn(),Gj=u(Fj.W),Lf=Gj.next();!Lf.done;Lf=Gj.next()){var Hj=Lf.value;if(S.message&&S.message.match(Hj.dc)){m=Hj.weight;
break a}}for(var Ij=u(Fj.U),Mf=Ij.next();!Mf.done;Mf=Ij.next()){var Jj=Mf.value;if(Jj.pb(S)){m=Jj.weight;break a}}m=1}S.sampleWeight=m;for(var Kj=u(un),Nf=Kj.next();!Nf.done;Nf=Kj.next()){var Of=Nf.value;if(Of.Ca[S.name])for(var Lj=u(Of.Ca[S.name]),Pf=Lj.next();!Pf.done;Pf=Lj.next()){var Mj=Pf.value,Od=S.message.match(Mj.regexp);if(Od){S.params["params.error.original"]=Od[0];for(var Qf=Mj.groups,Nj={},Rb=0;Rb<Qf.length;Rb++)Nj[Qf[Rb]]=Od[Rb+1],S.params["params.error."+Qf[Rb]]=Od[Rb+1];S.message=Of.Na(Nj);
break}}}S.params||(S.params={});var Oj=zn();S.params["params.errorServiceSignature"]="msg="+Oj.W.length+"&cb="+Oj.U.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var va=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(va);if(0!==va.sampleWeight&&!Gn.has(va.message)){if("ERROR"===h){An.ha("handleError",
va);if(R("record_app_crashed_web")&&0===Jn&&1===va.sampleWeight)if(Jn++,R("errors_via_jspb")){var Rf=new wh;I(Rf,1,1);if(!R("report_client_error_with_app_crash_ks")){var Pj=new rh;I(Pj,1,va.message);var Qj=new sh;J(Qj,rh,3,Pj);var Rj=new th;J(Rj,sh,5,Qj);var Sj=new uh;J(Sj,th,9,Rj);J(Rf,uh,4,Sj)}var no=Rf,Tj=new zh;pd(Tj,wh,20,Ah,no);sn(Tj)}else{var Uj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(Uj.systemHealth={crashData:{clientError:{logMessage:{message:va.message}}}});
tn("appCrashed",Uj)}In++}else"WARNING"===h&&An.ha("handleWarning",va);if(R("kevlar_gel_error_routing"))a:{var Sf=void 0,Tf=void 0,Ic=h,Q=va;if(R("errors_via_jspb")){if(Mn())Tf=void 0;else{var Sb=new oh;I(Sb,1,Q.stack);Q.fileName&&I(Sb,4,Q.fileName);var Ka=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ka.length&&(1!==Ka.length||isNaN(Number(Ka[0]))?2!==Ka.length||isNaN(Number(Ka[0]))||isNaN(Number(Ka[1]))||(I(Sb,2,Number(Ka[0])),I(Sb,3,Number(Ka[1]))):I(Sb,2,Number(Ka[0])));var rb=
new rh;I(rb,1,Q.message);I(rb,3,Q.name);I(rb,6,Q.sampleWeight);"ERROR"===Ic?I(rb,2,2):"WARNING"===Ic?I(rb,2,1):I(rb,2,0);var Uf=new ph;I(Uf,1,!0);pd(Uf,oh,3,qh,Sb);var sb=new lh;I(sb,3,window.location.href);for(var Vj=P("FEXP_EXPERIMENTS",[]),Vf=0;Vf<Vj.length;Vf++){var Wj=sb,oo=Vj[Vf];$c(Wj);jd(Wj,5,2,!1).push(oo)}var Wf=Lh();if(!Mh()&&Wf)for(var Xj=u(Object.keys(Wf)),tb=Xj.next();!tb.done;tb=Xj.next()){var Yj=tb.value,Xf=new nh;I(Xf,1,Yj);Xf.setValue(String(Wf[Yj]));rd(sb,4,nh,Xf)}var Yf=Q.params;
if(Yf){var Zj=u(Object.keys(Yf));for(tb=Zj.next();!tb.done;tb=Zj.next()){var ak=tb.value,Zf=new nh;I(Zf,1,"client."+ak);Zf.setValue(String(Yf[ak]));rd(sb,4,nh,Zf)}}var bk=P("SERVER_NAME"),ck=P("SERVER_VERSION");if(bk&&ck){var $f=new nh;I($f,1,"server.name");$f.setValue(bk);rd(sb,4,nh,$f);var ag=new nh;I(ag,1,"server.version");ag.setValue(ck);rd(sb,4,nh,ag)}var Pd=new sh;J(Pd,lh,1,sb);J(Pd,ph,2,Uf);J(Pd,rh,3,rb);Tf=Pd}var dk=Tf;if(!dk)break a;var ek=new zh;pd(ek,sh,163,Ah,dk);sn(ek)}else{if(Mn())Sf=
void 0;else{var Jc={stackTrace:Q.stack};Q.fileName&&(Jc.filename=Q.fileName);var La=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==La.length&&(1!==La.length||isNaN(Number(La[0]))?2!==La.length||isNaN(Number(La[0]))||isNaN(Number(La[1]))||(Jc.lineNumber=Number(La[0]),Jc.columnNumber=Number(La[1])):Jc.lineNumber=Number(La[0]));var bg={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===Ic?bg.level="ERROR_LEVEL_ERROR":"WARNING"===
Ic&&(bg.level="ERROR_LEVEL_WARNNING");var po={isObfuscated:!0,browserStackInfo:Jc},Tb={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(Tb.experimentIds=P("FEXP_EXPERIMENTS"));var cg=Lh();if(!Mh()&&cg)for(var fk=u(Object.keys(cg)),ub=fk.next();!ub.done;ub=fk.next()){var gk=ub.value;Tb.kvPairs.push({key:gk,value:String(cg[gk])})}var dg=Q.params;if(dg){var hk=u(Object.keys(dg));for(ub=hk.next();!ub.done;ub=hk.next()){var ik=ub.value;Tb.kvPairs.push({key:"client."+ik,value:String(dg[ik])})}}var jk=
P("SERVER_NAME"),kk=P("SERVER_VERSION");jk&&kk&&(Tb.kvPairs.push({key:"server.name",value:jk}),Tb.kvPairs.push({key:"server.version",value:kk}));Sf={errorMetadata:Tb,stackTrace:po,logMessage:bg}}var lk=Sf;if(!lk)break a;tn("clientError",lk)}if("ERROR"===Ic||R("errors_flush_gel_always_killswitch"))b:if(R("migrate_events_to_ts"))c:{if(R("web_fp_via_jspb")&&(qn(!0),!R("web_fp_via_jspb_and_json")))break c;qn()}else{if(R("web_fp_via_jspb")&&(qn(!0),!R("web_fp_via_jspb_and_json")))break b;qn()}}if(!R("suppress_error_204_logging")){var vb=
va,Kc=vb.params||{},Ya={urlParams:{a:"logerror",t:"jserror",type:vb.name,msg:vb.message.substr(0,250),line:vb.lineNumber,level:h,"client.name":Kc.name},postParams:{url:P("PAGE_NAME",window.location.href),file:vb.fileName},method:"POST"};Kc.version&&(Ya["client.version"]=Kc.version);if(Ya.postParams){vb.stack&&(Ya.postParams.stack=vb.stack);for(var mk=u(Object.keys(Kc)),eg=mk.next();!eg.done;eg=mk.next()){var nk=eg.value;Ya.postParams["client."+nk]=Kc[nk]}var fg=Lh();if(fg)for(var ok=u(Object.keys(fg)),
gg=ok.next();!gg.done;gg=ok.next()){var pk=gg.value;Ya.postParams[pk]=fg[pk]}var qk=P("SERVER_NAME"),rk=P("SERVER_VERSION");qk&&rk&&(Ya.postParams["server.name"]=qk,Ya.postParams["server.version"]=rk)}xi(P("ECATCHER_REPORT_HOST","")+"/error_204",Ya)}try{Gn.add(va.message)}catch(uo){}Hn++}}}}}else throw Qb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function io(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function jo(a){return 0===a.search("get")||0===a.search("is")}
;function ko(a,b){ao.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.O={};this.playerInfo={};this.videoTitle=""}
v(ko,ao);n=ko.prototype;n.Wa=function(){var a=Xn(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Xn(this.j,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ta=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.O[c]=a[c]);break;case "infoDelivery":lo(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.l),this.playerInfo={},this.O={},mo(this,a.apiInterface),lo(this,a));break;default:bo(this,b,a)}};
function lo(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.i.setAttribute("title",b))):(a.videoTitle="",a.i.setAttribute("title","YouTube "+Xn(a.j,"title"))))}}
function mo(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:io(c)?this[c]=function(){this.playerInfo={};
this.O={};fo(this,c,arguments);return this}:jo(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){fo(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Xn(this.j,"host")+("/embed/"+Xn(this.j,"videoId")),b=Number(Xn(this.j,"width")),c=Number(Xn(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.O.namespaces?a?this.O[a]?this.O[a].options||[]:[]:this.O.namespaces||[]:[]};
n.getOption=function(a,b){if(this.O.namespaces&&a&&b&&this.O[a])return this.O[a][b]};
function qo(a){if("iframe"!==a.tagName.toLowerCase()){var b=Un(a,"videoid");b&&(b={videoId:b,width:Un(a,"width"),height:Un(a,"height")},new ko(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Qn[a]});
B("YT.scan",Tn);B("YT.subscribe",function(a,b,c){Fg.subscribe(a,b,c);Sn[a]=!0;for(var d in Qn)Qn.hasOwnProperty(d)&&eo(Qn[d],a)});
B("YT.unsubscribe",function(a,b,c){Eg(a,b,c)});
B("YT.Player",ko);ao.prototype.destroy=ao.prototype.destroy;ao.prototype.setSize=ao.prototype.setSize;ao.prototype.getIframe=ao.prototype.getIframe;ao.prototype.addEventListener=ao.prototype.addEventListener;ko.prototype.getVideoEmbedCode=ko.prototype.getVideoEmbedCode;ko.prototype.getOptions=ko.prototype.getOptions;ko.prototype.getOption=ko.prototype.getOption;
Rn.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);E(fb(a,b),qo)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Tn();var ro=A.onYTReady;ro&&ro();var so=A.onYouTubeIframeAPIReady;so&&so();var to=A.onYouTubePlayerAPIReady;to&&to();}).call(this);
