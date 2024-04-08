(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Vl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var WI={exports:{}},vh={},GI={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),XP=Symbol.for("react.portal"),ZP=Symbol.for("react.fragment"),eC=Symbol.for("react.strict_mode"),tC=Symbol.for("react.profiler"),nC=Symbol.for("react.provider"),rC=Symbol.for("react.context"),iC=Symbol.for("react.forward_ref"),sC=Symbol.for("react.suspense"),oC=Symbol.for("react.memo"),aC=Symbol.for("react.lazy"),yy=Symbol.iterator;function lC(t){return t===null||typeof t!="object"?null:(t=yy&&t[yy]||t["@@iterator"],typeof t=="function"?t:null)}var KI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},HI=Object.assign,QI={};function So(t,e,n){this.props=t,this.context=e,this.refs=QI,this.updater=n||KI}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function YI(){}YI.prototype=So.prototype;function Pm(t,e,n){this.props=t,this.context=e,this.refs=QI,this.updater=n||KI}var Cm=Pm.prototype=new YI;Cm.constructor=Pm;HI(Cm,So.prototype);Cm.isPureReactComponent=!0;var vy=Array.isArray,JI=Object.prototype.hasOwnProperty,Rm={current:null},XI={key:!0,ref:!0,__self:!0,__source:!0};function ZI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)JI.call(e,r)&&!XI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ml,type:t,key:s,ref:o,props:i,_owner:Rm.current}}function uC(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function km(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function cC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wy=/\/+/g;function Dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cC(""+t.key):e.toString(36)}function Ku(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ml:case XP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Dd(o,0):r,vy(i)?(n="",t!=null&&(n=t.replace(wy,"$&/")+"/"),Ku(i,e,n,"",function(u){return u})):i!=null&&(km(i)&&(i=uC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Dd(s,a);o+=Ku(s,e,n,l,i)}else if(l=lC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Dd(s,a++),o+=Ku(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gu(t,e,n){if(t==null)return t;var r=[],i=0;return Ku(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},Hu={transition:null},dC={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Hu,ReactCurrentOwner:Rm};ee.Children={map:gu,forEach:function(t,e,n){gu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gu(t,function(){e++}),e},toArray:function(t){return gu(t,function(e){return e})||[]},only:function(t){if(!km(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=So;ee.Fragment=ZP;ee.Profiler=tC;ee.PureComponent=Pm;ee.StrictMode=eC;ee.Suspense=sC;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dC;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=HI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)JI.call(e,l)&&!XI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ml,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:rC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nC,_context:t},t.Consumer=t};ee.createElement=ZI;ee.createFactory=function(t){var e=ZI.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:iC,render:t}};ee.isValidElement=km;ee.lazy=function(t){return{$$typeof:aC,_payload:{_status:-1,_result:t},_init:hC}};ee.memo=function(t,e){return{$$typeof:oC,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Hu.transition;Hu.transition={};try{t()}finally{Hu.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return Pt.current.useCallback(t,e)};ee.useContext=function(t){return Pt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Pt.current.useEffect(t,e)};ee.useId=function(){return Pt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Pt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};ee.useRef=function(t){return Pt.current.useRef(t)};ee.useState=function(t){return Pt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Pt.current.useTransition()};ee.version="18.2.0";GI.exports=ee;var q=GI.exports;const Ee=Vl(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fC=q,pC=Symbol.for("react.element"),mC=Symbol.for("react.fragment"),gC=Object.prototype.hasOwnProperty,_C=fC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yC={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gC.call(e,r)&&!yC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:pC,type:t,key:s,ref:o,props:i,_owner:_C.current}}vh.Fragment=mC;vh.jsx=e0;vh.jsxs=e0;WI.exports=vh;var y=WI.exports,Of={},t0={exports:{}},Kt={},n0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,B){var K=V.length;V.push(B);e:for(;0<K;){var ce=K-1>>>1,qe=V[ce];if(0<i(qe,B))V[ce]=B,V[K]=qe,K=ce;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var B=V[0],K=V.pop();if(K!==B){V[0]=K;e:for(var ce=0,qe=V.length,pu=qe>>>1;ce<pu;){var ci=2*(ce+1)-1,Nd=V[ci],hi=ci+1,mu=V[hi];if(0>i(Nd,K))hi<qe&&0>i(mu,Nd)?(V[ce]=mu,V[hi]=K,ce=hi):(V[ce]=Nd,V[ci]=K,ce=ci);else if(hi<qe&&0>i(mu,K))V[ce]=mu,V[hi]=K,ce=hi;else break e}}return B}function i(V,B){var K=V.sortIndex-B.sortIndex;return K!==0?K:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(V){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=V)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function S(V){if(v=!1,p(V),!_)if(n(l)!==null)_=!0,Un(A);else{var B=n(u);B!==null&&Qt(S,B.startTime-V)}}function A(V,B){_=!1,v&&(v=!1,g(b),b=-1),f=!0;var K=d;try{for(p(B),h=n(l);h!==null&&(!(h.expirationTime>B)||V&&!Pe());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var qe=ce(h.expirationTime<=B);B=t.unstable_now(),typeof qe=="function"?h.callback=qe:h===n(l)&&r(l),p(B)}else r(l);h=n(l)}if(h!==null)var pu=!0;else{var ci=n(u);ci!==null&&Qt(S,ci.startTime-B),pu=!1}return pu}finally{h=null,d=K,f=!1}}var E=!1,x=null,b=-1,Q=5,F=-1;function Pe(){return!(t.unstable_now()-F<Q)}function J(){if(x!==null){var V=t.unstable_now();F=V;var B=!0;try{B=x(!0,V)}finally{B?Rt():(E=!1,x=null)}}else E=!1}var Rt;if(typeof m=="function")Rt=function(){m(J)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,ui=Le.port2;Le.port1.onmessage=J,Rt=function(){ui.postMessage(null)}}else Rt=function(){w(J,0)};function Un(V){x=V,E||(E=!0,Rt())}function Qt(V,B){b=w(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){_||f||(_=!0,Un(A))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var K=d;d=B;try{return V()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var K=d;d=V;try{return B()}finally{d=K}},t.unstable_scheduleCallback=function(V,B,K){var ce=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ce+K:ce):K=ce,V){case 1:var qe=-1;break;case 2:qe=250;break;case 5:qe=1073741823;break;case 4:qe=1e4;break;default:qe=5e3}return qe=K+qe,V={id:c++,callback:B,priorityLevel:V,startTime:K,expirationTime:qe,sortIndex:-1},K>ce?(V.sortIndex=K,e(u,V),n(l)===null&&V===n(u)&&(v?(g(b),b=-1):v=!0,Qt(S,K-ce))):(V.sortIndex=qe,e(l,V),_||f||(_=!0,Un(A))),V},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(V){var B=d;return function(){var K=d;d=B;try{return V.apply(this,arguments)}finally{d=K}}}})(r0);n0.exports=r0;var vC=n0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=q,qt=vC;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,ja={};function rs(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(ja[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,wC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iy={},Ey={};function IC(t){return Vf.call(Ey,t)?!0:Vf.call(Iy,t)?!1:wC.test(t)?Ey[t]=!0:(Iy[t]=!0,!1)}function EC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TC(t,e,n,r){if(e===null||typeof e>"u"||EC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var xm=/[\-:]([a-z])/g;function bm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xm,bm);lt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xm,bm);lt[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xm,bm);lt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TC(e,n,i,r)&&(n=null),r||i===null?IC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_u=Symbol.for("react.element"),As=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),Vm=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),Ty=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=Ty&&t[Ty]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Od;function ua(t){if(Od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Od=e&&e[1]||""}return`
`+Od+t}var Vd=!1;function Md(t,e){if(!t||Vd)return"";Vd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function SC(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=Md(t.type,!1),t;case 11:return t=Md(t.type.render,!1),t;case 1:return t=Md(t.type,!0),t;default:return""}}function Uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case As:return"Portal";case Mf:return"Profiler";case Dm:return"StrictMode";case Lf:return"Suspense";case Ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a0:return(t.displayName||"Context")+".Consumer";case o0:return(t._context.displayName||"Context")+".Provider";case Om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vm:return e=t.displayName||null,e!==null?e:Uf(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return Uf(t(e))}catch{}}return null}function AC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uf(e);case 8:return e===Dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function u0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PC(t){var e=u0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yu(t){t._valueTracker||(t._valueTracker=PC(t))}function c0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=u0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h0(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function jf(t,e){h0(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&zf(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zf(t,e,n){(e!=="number"||vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function $s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Py(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(ca(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function d0(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function f0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?f0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vu,p0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vu=vu||document.createElement("div"),vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CC=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){CC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function g0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=m0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RC=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wf(t,e){if(e){if(RC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hf=null,js=null,zs=null;function Ry(t){if(t=Ul(t)){if(typeof Hf!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Sh(e),Hf(t.stateNode,t.type,e))}}function _0(t){js?zs?zs.push(t):zs=[t]:js=t}function y0(){if(js){var t=js,e=zs;if(zs=js=null,Ry(t),e)for(t=0;t<e.length;t++)Ry(e[t])}}function v0(t,e){return t(e)}function w0(){}var Ld=!1;function I0(t,e,n){if(Ld)return t(e,n);Ld=!0;try{return v0(t,e,n)}finally{Ld=!1,(js!==null||zs!==null)&&(w0(),y0())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var r=Sh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Qf=!1;if(Xn)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Qf=!1}function kC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ea=!1,wc=null,Ic=!1,Yf=null,xC={onError:function(t){Ea=!0,wc=t}};function bC(t,e,n,r,i,s,o,a,l){Ea=!1,wc=null,kC.apply(xC,arguments)}function NC(t,e,n,r,i,s,o,a,l){if(bC.apply(this,arguments),Ea){if(Ea){var u=wc;Ea=!1,wc=null}else throw Error(R(198));Ic||(Ic=!0,Yf=u)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ky(t){if(is(t)!==t)throw Error(R(188))}function DC(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ky(i),t;if(s===r)return ky(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function T0(t){return t=DC(t),t!==null?S0(t):null}function S0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=S0(t);if(e!==null)return e;t=t.sibling}return null}var A0=qt.unstable_scheduleCallback,xy=qt.unstable_cancelCallback,OC=qt.unstable_shouldYield,VC=qt.unstable_requestPaint,Oe=qt.unstable_now,MC=qt.unstable_getCurrentPriorityLevel,Lm=qt.unstable_ImmediatePriority,P0=qt.unstable_UserBlockingPriority,Ec=qt.unstable_NormalPriority,LC=qt.unstable_LowPriority,C0=qt.unstable_IdlePriority,wh=null,bn=null;function FC(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(wh,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:jC,UC=Math.log,$C=Math.LN2;function jC(t){return t>>>=0,t===0?32:31-(UC(t)/$C|0)|0}var wu=64,Iu=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ha(a):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function zC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R0(){var t=wu;return wu<<=1,!(wu&4194240)&&(wu=64),t}function Fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function qC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function k0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var x0,Um,b0,N0,D0,Xf=!1,Eu=[],Rr=null,kr=null,xr=null,qa=new Map,Wa=new Map,yr=[],WC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function by(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function qo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ul(e),e!==null&&Um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GC(t,e,n,r,i){switch(e){case"focusin":return Rr=qo(Rr,t,e,n,r,i),!0;case"dragenter":return kr=qo(kr,t,e,n,r,i),!0;case"mouseover":return xr=qo(xr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qa.set(s,qo(qa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wa.set(s,qo(Wa.get(s)||null,t,e,n,r,i)),!0}return!1}function O0(t){var e=Si(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=E0(n),e!==null){t.blockedOn=e,D0(t.priority,function(){b0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kf=r,n.target.dispatchEvent(r),Kf=null}else return e=Ul(n),e!==null&&Um(e),t.blockedOn=n,!1;e.shift()}return!0}function Ny(t,e,n){Qu(t)&&n.delete(e)}function KC(){Xf=!1,Rr!==null&&Qu(Rr)&&(Rr=null),kr!==null&&Qu(kr)&&(kr=null),xr!==null&&Qu(xr)&&(xr=null),qa.forEach(Ny),Wa.forEach(Ny)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Xf||(Xf=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,KC)))}function Ga(t){function e(i){return Wo(i,t)}if(0<Eu.length){Wo(Eu[0],t);for(var n=1;n<Eu.length;n++){var r=Eu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&Wo(Rr,t),kr!==null&&Wo(kr,t),xr!==null&&Wo(xr,t),qa.forEach(e),Wa.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&yr.shift()}var Bs=sr.ReactCurrentBatchConfig,Sc=!0;function HC(t,e,n,r){var i=se,s=Bs.transition;Bs.transition=null;try{se=1,$m(t,e,n,r)}finally{se=i,Bs.transition=s}}function QC(t,e,n,r){var i=se,s=Bs.transition;Bs.transition=null;try{se=4,$m(t,e,n,r)}finally{se=i,Bs.transition=s}}function $m(t,e,n,r){if(Sc){var i=Zf(t,e,n,r);if(i===null)Hd(t,e,r,Ac,n),by(t,r);else if(GC(i,t,e,n,r))r.stopPropagation();else if(by(t,r),e&4&&-1<WC.indexOf(t)){for(;i!==null;){var s=Ul(i);if(s!==null&&x0(s),s=Zf(t,e,n,r),s===null&&Hd(t,e,r,Ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hd(t,e,r,null,n)}}var Ac=null;function Zf(t,e,n,r){if(Ac=null,t=Mm(r),t=Si(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ac=t,null}function V0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MC()){case Lm:return 1;case P0:return 4;case Ec:case LC:return 16;case C0:return 536870912;default:return 16}default:return 16}}var Tr=null,jm=null,Yu=null;function M0(){if(Yu)return Yu;var t,e=jm,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yu=i.slice(t,1<r?1-r:void 0)}function Ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tu(){return!0}function Dy(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tu:Dy,this.isPropagationStopped=Dy,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tu)},persist:function(){},isPersistent:Tu}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=Ht(Ao),Fl=Ae({},Ao,{view:0,detail:0}),YC=Ht(Fl),Ud,$d,Go,Ih=Ae({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(Ud=t.screenX-Go.screenX,$d=t.screenY-Go.screenY):$d=Ud=0,Go=t),Ud)},movementY:function(t){return"movementY"in t?t.movementY:$d}}),Oy=Ht(Ih),JC=Ae({},Ih,{dataTransfer:0}),XC=Ht(JC),ZC=Ae({},Fl,{relatedTarget:0}),jd=Ht(ZC),eR=Ae({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),tR=Ht(eR),nR=Ae({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rR=Ht(nR),iR=Ae({},Ao,{data:0}),Vy=Ht(iR),sR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aR[t])?!!e[t]:!1}function Bm(){return lR}var uR=Ae({},Fl,{key:function(t){if(t.key){var e=sR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(t){return t.type==="keypress"?Ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cR=Ht(uR),hR=Ae({},Ih,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),My=Ht(hR),dR=Ae({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),fR=Ht(dR),pR=Ae({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),mR=Ht(pR),gR=Ae({},Ih,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_R=Ht(gR),yR=[9,13,27,32],qm=Xn&&"CompositionEvent"in window,Ta=null;Xn&&"documentMode"in document&&(Ta=document.documentMode);var vR=Xn&&"TextEvent"in window&&!Ta,L0=Xn&&(!qm||Ta&&8<Ta&&11>=Ta),Ly=" ",Fy=!1;function F0(t,e){switch(t){case"keyup":return yR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function wR(t,e){switch(t){case"compositionend":return U0(e);case"keypress":return e.which!==32?null:(Fy=!0,Ly);case"textInput":return t=e.data,t===Ly&&Fy?null:t;default:return null}}function IR(t,e){if(Cs)return t==="compositionend"||!qm&&F0(t,e)?(t=M0(),Yu=jm=Tr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L0&&e.locale!=="ko"?null:e.data;default:return null}}var ER={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ER[t.type]:e==="textarea"}function $0(t,e,n,r){_0(r),e=Pc(e,"onChange"),0<e.length&&(n=new zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Sa=null,Ka=null;function TR(t){J0(t,0)}function Eh(t){var e=xs(t);if(c0(e))return t}function SR(t,e){if(t==="change")return e}var j0=!1;if(Xn){var zd;if(Xn){var Bd="oninput"in document;if(!Bd){var $y=document.createElement("div");$y.setAttribute("oninput","return;"),Bd=typeof $y.oninput=="function"}zd=Bd}else zd=!1;j0=zd&&(!document.documentMode||9<document.documentMode)}function jy(){Sa&&(Sa.detachEvent("onpropertychange",z0),Ka=Sa=null)}function z0(t){if(t.propertyName==="value"&&Eh(Ka)){var e=[];$0(e,Ka,t,Mm(t)),I0(TR,e)}}function AR(t,e,n){t==="focusin"?(jy(),Sa=e,Ka=n,Sa.attachEvent("onpropertychange",z0)):t==="focusout"&&jy()}function PR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eh(Ka)}function CR(t,e){if(t==="click")return Eh(e)}function RR(t,e){if(t==="input"||t==="change")return Eh(e)}function kR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:kR;function Ha(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vf.call(e,i)||!pn(t[i],e[i]))return!1}return!0}function zy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function By(t,e){var n=zy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zy(n)}}function B0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?B0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vc(t.document)}return e}function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xR(t){var e=q0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&B0(n.ownerDocument.documentElement,n)){if(r!==null&&Wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=By(n,s);var o=By(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bR=Xn&&"documentMode"in document&&11>=document.documentMode,Rs=null,ep=null,Aa=null,tp=!1;function qy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tp||Rs==null||Rs!==vc(r)||(r=Rs,"selectionStart"in r&&Wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Ha(Aa,r)||(Aa=r,r=Pc(ep,"onSelect"),0<r.length&&(e=new zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rs)))}function Su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},qd={},W0={};Xn&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Th(t){if(qd[t])return qd[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W0)return qd[t]=e[n];return t}var G0=Th("animationend"),K0=Th("animationiteration"),H0=Th("animationstart"),Q0=Th("transitionend"),Y0=new Map,Wy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){Y0.set(t,e),rs(e,[t])}for(var Wd=0;Wd<Wy.length;Wd++){var Gd=Wy[Wd],NR=Gd.toLowerCase(),DR=Gd[0].toUpperCase()+Gd.slice(1);Xr(NR,"on"+DR)}Xr(G0,"onAnimationEnd");Xr(K0,"onAnimationIteration");Xr(H0,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(Q0,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OR=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Gy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NC(r,e,void 0,t),t.currentTarget=null}function J0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Gy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Gy(i,a,u),s=l}}}if(Ic)throw t=Yf,Ic=!1,Yf=null,t}function he(t,e){var n=e[op];n===void 0&&(n=e[op]=new Set);var r=t+"__bubble";n.has(r)||(X0(e,t,2,!1),n.add(r))}function Kd(t,e,n){var r=0;e&&(r|=4),X0(n,t,r,e)}var Au="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[Au]){t[Au]=!0,s0.forEach(function(n){n!=="selectionchange"&&(OR.has(n)||Kd(n,!1,t),Kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Au]||(e[Au]=!0,Kd("selectionchange",!1,e))}}function X0(t,e,n,r){switch(V0(e)){case 1:var i=HC;break;case 4:i=QC;break;default:i=$m}n=i.bind(null,e,n,t),i=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Hd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Si(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}I0(function(){var u=s,c=Mm(n),h=[];e:{var d=Y0.get(t);if(d!==void 0){var f=zm,_=t;switch(t){case"keypress":if(Ju(n)===0)break e;case"keydown":case"keyup":f=cR;break;case"focusin":_="focus",f=jd;break;case"focusout":_="blur",f=jd;break;case"beforeblur":case"afterblur":f=jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Oy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=XC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=fR;break;case G0:case K0:case H0:f=tR;break;case Q0:f=mR;break;case"scroll":f=YC;break;case"wheel":f=_R;break;case"copy":case"cut":case"paste":f=rR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=My}var v=(e&4)!==0,w=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,p;m!==null;){p=m;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,g!==null&&(S=Ba(m,g),S!=null&&v.push(Ya(m,S,p)))),w)break;m=m.return}0<v.length&&(d=new f(d,_,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Kf&&(_=n.relatedTarget||n.fromElement)&&(Si(_)||_[Zn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(_=n.relatedTarget||n.toElement,f=u,_=_?Si(_):null,_!==null&&(w=is(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(f=null,_=u),f!==_)){if(v=Oy,S="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=My,S="onPointerLeave",g="onPointerEnter",m="pointer"),w=f==null?d:xs(f),p=_==null?d:xs(_),d=new v(S,m+"leave",f,n,c),d.target=w,d.relatedTarget=p,S=null,Si(c)===u&&(v=new v(g,m+"enter",_,n,c),v.target=p,v.relatedTarget=w,S=v),w=S,f&&_)t:{for(v=f,g=_,m=0,p=v;p;p=fs(p))m++;for(p=0,S=g;S;S=fs(S))p++;for(;0<m-p;)v=fs(v),m--;for(;0<p-m;)g=fs(g),p--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=fs(v),g=fs(g)}v=null}else v=null;f!==null&&Ky(h,d,f,v,!1),_!==null&&w!==null&&Ky(h,w,_,v,!0)}}e:{if(d=u?xs(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var A=SR;else if(Uy(d))if(j0)A=RR;else{A=PR;var E=AR}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=CR);if(A&&(A=A(t,u))){$0(h,A,n,c);break e}E&&E(t,d,u),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&zf(d,"number",d.value)}switch(E=u?xs(u):window,t){case"focusin":(Uy(E)||E.contentEditable==="true")&&(Rs=E,ep=u,Aa=null);break;case"focusout":Aa=ep=Rs=null;break;case"mousedown":tp=!0;break;case"contextmenu":case"mouseup":case"dragend":tp=!1,qy(h,n,c);break;case"selectionchange":if(bR)break;case"keydown":case"keyup":qy(h,n,c)}var x;if(qm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Cs?F0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(L0&&n.locale!=="ko"&&(Cs||b!=="onCompositionStart"?b==="onCompositionEnd"&&Cs&&(x=M0()):(Tr=c,jm="value"in Tr?Tr.value:Tr.textContent,Cs=!0)),E=Pc(u,b),0<E.length&&(b=new Vy(b,t,null,n,c),h.push({event:b,listeners:E}),x?b.data=x:(x=U0(n),x!==null&&(b.data=x)))),(x=vR?wR(t,n):IR(t,n))&&(u=Pc(u,"onBeforeInput"),0<u.length&&(c=new Vy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}J0(h,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ba(t,n),s!=null&&r.unshift(Ya(t,s,i)),s=Ba(t,e),s!=null&&r.push(Ya(t,s,i))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ky(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ba(n,s),l!=null&&o.unshift(Ya(n,l,a))):i||(l=Ba(n,s),l!=null&&o.push(Ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VR=/\r\n?/g,MR=/\u0000|\uFFFD/g;function Hy(t){return(typeof t=="string"?t:""+t).replace(VR,`
`).replace(MR,"")}function Pu(t,e,n){if(e=Hy(e),Hy(t)!==e&&n)throw Error(R(425))}function Cc(){}var np=null,rp=null;function ip(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sp=typeof setTimeout=="function"?setTimeout:void 0,LR=typeof clearTimeout=="function"?clearTimeout:void 0,Qy=typeof Promise=="function"?Promise:void 0,FR=typeof queueMicrotask=="function"?queueMicrotask:typeof Qy<"u"?function(t){return Qy.resolve(null).then(t).catch(UR)}:sp;function UR(t){setTimeout(function(){throw t})}function Qd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ga(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Po=Math.random().toString(36).slice(2),wn="__reactFiber$"+Po,Ja="__reactProps$"+Po,Zn="__reactContainer$"+Po,op="__reactEvents$"+Po,$R="__reactListeners$"+Po,jR="__reactHandles$"+Po;function Si(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yy(t);t!==null;){if(n=t[wn])return n;t=Yy(t)}return e}t=n,n=t.parentNode}return null}function Ul(t){return t=t[wn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Sh(t){return t[Ja]||null}var ap=[],bs=-1;function Zr(t){return{current:t}}function pe(t){0>bs||(t.current=ap[bs],ap[bs]=null,bs--)}function le(t,e){bs++,ap[bs]=t.current,t.current=e}var Ur={},gt=Zr(Ur),Mt=Zr(!1),Ui=Ur;function to(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function Rc(){pe(Mt),pe(gt)}function Jy(t,e,n){if(gt.current!==Ur)throw Error(R(168));le(gt,e),le(Mt,n)}function Z0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,AC(t)||"Unknown",i));return Ae({},n,r)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ui=gt.current,le(gt,t),le(Mt,Mt.current),!0}function Xy(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=Z0(t,e,Ui),r.__reactInternalMemoizedMergedChildContext=t,pe(Mt),pe(gt),le(gt,t)):pe(Mt),le(Mt,n)}var zn=null,Ah=!1,Yd=!1;function eE(t){zn===null?zn=[t]:zn.push(t)}function zR(t){Ah=!0,eE(t)}function ei(){if(!Yd&&zn!==null){Yd=!0;var t=0,e=se;try{var n=zn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,Ah=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),A0(Lm,ei),i}finally{se=e,Yd=!1}}return null}var Ns=[],Ds=0,xc=null,bc=0,Jt=[],Xt=0,$i=null,Bn=1,qn="";function pi(t,e){Ns[Ds++]=bc,Ns[Ds++]=xc,xc=t,bc=e}function tE(t,e,n){Jt[Xt++]=Bn,Jt[Xt++]=qn,Jt[Xt++]=$i,$i=t;var r=Bn;t=qn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-dn(e)+i|n<<i|r,qn=s+t}else Bn=1<<s|n<<i|r,qn=t}function Gm(t){t.return!==null&&(pi(t,1),tE(t,1,0))}function Km(t){for(;t===xc;)xc=Ns[--Ds],Ns[Ds]=null,bc=Ns[--Ds],Ns[Ds]=null;for(;t===$i;)$i=Jt[--Xt],Jt[Xt]=null,qn=Jt[--Xt],Jt[Xt]=null,Bn=Jt[--Xt],Jt[Xt]=null}var Bt=null,jt=null,me=!1,hn=null;function nE(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,jt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$i!==null?{id:Bn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,jt=null,!0):!1;default:return!1}}function lp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function up(t){if(me){var e=jt;if(e){var n=e;if(!Zy(t,e)){if(lp(t))throw Error(R(418));e=br(n.nextSibling);var r=Bt;e&&Zy(t,e)?nE(r,n):(t.flags=t.flags&-4097|2,me=!1,Bt=t)}}else{if(lp(t))throw Error(R(418));t.flags=t.flags&-4097|2,me=!1,Bt=t}}}function ev(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Cu(t){if(t!==Bt)return!1;if(!me)return ev(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ip(t.type,t.memoizedProps)),e&&(e=jt)){if(lp(t))throw rE(),Error(R(418));for(;e;)nE(t,e),e=br(e.nextSibling)}if(ev(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Bt?br(t.stateNode.nextSibling):null;return!0}function rE(){for(var t=jt;t;)t=br(t.nextSibling)}function no(){jt=Bt=null,me=!1}function Hm(t){hn===null?hn=[t]:hn.push(t)}var BR=sr.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nc=Zr(null),Dc=null,Os=null,Qm=null;function Ym(){Qm=Os=Dc=null}function Jm(t){var e=Nc.current;pe(Nc),t._currentValue=e}function cp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){Dc=t,Qm=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Qm!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(Dc===null)throw Error(R(308));Os=t,Dc.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Ai=null;function Xm(t){Ai===null?Ai=[t]:Ai.push(t)}function iE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xm(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Zm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,Xm(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function Xu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fm(t,n)}}function tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oc(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(d=e,f=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(f,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(f,h,d):_,d==null)break e;h=Ae({},h,d);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zi|=o,t.lanes=o,t.memoizedState=h}}function nv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var oE=new i0.Component().refs;function hp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ph={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Or(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(fn(e,t,i,r),Xu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Or(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(fn(e,t,i,r),Xu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Or(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(fn(e,t,r,n),Xu(e,t,r))}};function rv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,r)||!Ha(i,s):!0}function aE(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Lt(e)?Ui:gt.current,r=e.contextTypes,s=(r=r!=null)?to(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ph,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function iv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ph.enqueueReplaceState(e,e.state,null)}function dp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=oE,Zm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Lt(e)?Ui:gt.current,i.context=to(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ph.enqueueReplaceState(i,i.state,null),Oc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===oE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ru(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sv(t){var e=t._init;return e(t._payload)}function lE(t){function e(g,m){if(t){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Vr(g,m),g.index=0,g.sibling=null,g}function s(g,m,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,p,S){return m===null||m.tag!==6?(m=rf(p,g.mode,S),m.return=g,m):(m=i(m,p),m.return=g,m)}function l(g,m,p,S){var A=p.type;return A===Ps?c(g,m,p.props.children,S,p.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===gr&&sv(A)===m.type)?(S=i(m,p.props),S.ref=Ko(g,m,p),S.return=g,S):(S=ic(p.type,p.key,p.props,null,g.mode,S),S.ref=Ko(g,m,p),S.return=g,S)}function u(g,m,p,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=sf(p,g.mode,S),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function c(g,m,p,S,A){return m===null||m.tag!==7?(m=Oi(p,g.mode,S,A),m.return=g,m):(m=i(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=rf(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _u:return p=ic(m.type,m.key,m.props,null,g.mode,p),p.ref=Ko(g,null,m),p.return=g,p;case As:return m=sf(m,g.mode,p),m.return=g,m;case gr:var S=m._init;return h(g,S(m._payload),p)}if(ca(m)||zo(m))return m=Oi(m,g.mode,p,null),m.return=g,m;Ru(g,m)}return null}function d(g,m,p,S){var A=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return A!==null?null:a(g,m,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _u:return p.key===A?l(g,m,p,S):null;case As:return p.key===A?u(g,m,p,S):null;case gr:return A=p._init,d(g,m,A(p._payload),S)}if(ca(p)||zo(p))return A!==null?null:c(g,m,p,S,null);Ru(g,p)}return null}function f(g,m,p,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(p)||null,a(m,g,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _u:return g=g.get(S.key===null?p:S.key)||null,l(m,g,S,A);case As:return g=g.get(S.key===null?p:S.key)||null,u(m,g,S,A);case gr:var E=S._init;return f(g,m,p,E(S._payload),A)}if(ca(S)||zo(S))return g=g.get(p)||null,c(m,g,S,A,null);Ru(m,S)}return null}function _(g,m,p,S){for(var A=null,E=null,x=m,b=m=0,Q=null;x!==null&&b<p.length;b++){x.index>b?(Q=x,x=null):Q=x.sibling;var F=d(g,x,p[b],S);if(F===null){x===null&&(x=Q);break}t&&x&&F.alternate===null&&e(g,x),m=s(F,m,b),E===null?A=F:E.sibling=F,E=F,x=Q}if(b===p.length)return n(g,x),me&&pi(g,b),A;if(x===null){for(;b<p.length;b++)x=h(g,p[b],S),x!==null&&(m=s(x,m,b),E===null?A=x:E.sibling=x,E=x);return me&&pi(g,b),A}for(x=r(g,x);b<p.length;b++)Q=f(x,g,b,p[b],S),Q!==null&&(t&&Q.alternate!==null&&x.delete(Q.key===null?b:Q.key),m=s(Q,m,b),E===null?A=Q:E.sibling=Q,E=Q);return t&&x.forEach(function(Pe){return e(g,Pe)}),me&&pi(g,b),A}function v(g,m,p,S){var A=zo(p);if(typeof A!="function")throw Error(R(150));if(p=A.call(p),p==null)throw Error(R(151));for(var E=A=null,x=m,b=m=0,Q=null,F=p.next();x!==null&&!F.done;b++,F=p.next()){x.index>b?(Q=x,x=null):Q=x.sibling;var Pe=d(g,x,F.value,S);if(Pe===null){x===null&&(x=Q);break}t&&x&&Pe.alternate===null&&e(g,x),m=s(Pe,m,b),E===null?A=Pe:E.sibling=Pe,E=Pe,x=Q}if(F.done)return n(g,x),me&&pi(g,b),A;if(x===null){for(;!F.done;b++,F=p.next())F=h(g,F.value,S),F!==null&&(m=s(F,m,b),E===null?A=F:E.sibling=F,E=F);return me&&pi(g,b),A}for(x=r(g,x);!F.done;b++,F=p.next())F=f(x,g,b,F.value,S),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?b:F.key),m=s(F,m,b),E===null?A=F:E.sibling=F,E=F);return t&&x.forEach(function(J){return e(g,J)}),me&&pi(g,b),A}function w(g,m,p,S){if(typeof p=="object"&&p!==null&&p.type===Ps&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case _u:e:{for(var A=p.key,E=m;E!==null;){if(E.key===A){if(A=p.type,A===Ps){if(E.tag===7){n(g,E.sibling),m=i(E,p.props.children),m.return=g,g=m;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===gr&&sv(A)===E.type){n(g,E.sibling),m=i(E,p.props),m.ref=Ko(g,E,p),m.return=g,g=m;break e}n(g,E);break}else e(g,E);E=E.sibling}p.type===Ps?(m=Oi(p.props.children,g.mode,S,p.key),m.return=g,g=m):(S=ic(p.type,p.key,p.props,null,g.mode,S),S.ref=Ko(g,m,p),S.return=g,g=S)}return o(g);case As:e:{for(E=p.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=sf(p,g.mode,S),m.return=g,g=m}return o(g);case gr:return E=p._init,w(g,m,E(p._payload),S)}if(ca(p))return _(g,m,p,S);if(zo(p))return v(g,m,p,S);Ru(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=rf(p,g.mode,S),m.return=g,g=m),o(g)):n(g,m)}return w}var ro=lE(!0),uE=lE(!1),$l={},Nn=Zr($l),Xa=Zr($l),Za=Zr($l);function Pi(t){if(t===$l)throw Error(R(174));return t}function eg(t,e){switch(le(Za,e),le(Xa,t),le(Nn,$l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qf(e,t)}pe(Nn),le(Nn,e)}function io(){pe(Nn),pe(Xa),pe(Za)}function cE(t){Pi(Za.current);var e=Pi(Nn.current),n=qf(e,t.type);e!==n&&(le(Xa,t),le(Nn,n))}function tg(t){Xa.current===t&&(pe(Nn),pe(Xa))}var Ie=Zr(0);function Vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jd=[];function ng(){for(var t=0;t<Jd.length;t++)Jd[t]._workInProgressVersionPrimary=null;Jd.length=0}var Zu=sr.ReactCurrentDispatcher,Xd=sr.ReactCurrentBatchConfig,ji=0,Te=null,je=null,Ke=null,Mc=!1,Pa=!1,el=0,qR=0;function ct(){throw Error(R(321))}function rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function ig(t,e,n,r,i,s){if(ji=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zu.current=t===null||t.memoizedState===null?HR:QR,t=n(r,i),Pa){s=0;do{if(Pa=!1,el=0,25<=s)throw Error(R(301));s+=1,Ke=je=null,e.updateQueue=null,Zu.current=YR,t=n(r,i)}while(Pa)}if(Zu.current=Lc,e=je!==null&&je.next!==null,ji=0,Ke=je=Te=null,Mc=!1,e)throw Error(R(300));return t}function sg(){var t=el!==0;return el=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Te.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function on(){if(je===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ke===null?Te.memoizedState:Ke.next;if(e!==null)Ke=e,je=t;else{if(t===null)throw Error(R(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ke===null?Te.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function tl(t,e){return typeof e=="function"?e(t):e}function Zd(t){var e=on(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ji&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Te.lanes|=c,zi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,pn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ef(t){var e=on(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pn(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hE(){}function dE(t,e){var n=Te,r=on(),i=e(),s=!pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,og(mE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,nl(9,pE.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(R(349));ji&30||fE(n,e,i)}return i}function fE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pE(t,e,n,r){e.value=n,e.getSnapshot=r,gE(e)&&_E(t)}function mE(t,e,n){return n(function(){gE(e)&&_E(t)})}function gE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function _E(t){var e=er(t,1);e!==null&&fn(e,t,1,-1)}function ov(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},e.queue=t,t=t.dispatch=KR.bind(null,Te,t),[e.memoizedState,t]}function nl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yE(){return on().memoizedState}function ec(t,e,n,r){var i=vn();Te.flags|=t,i.memoizedState=nl(1|e,n,void 0,r===void 0?null:r)}function Ch(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&rg(r,o.deps)){i.memoizedState=nl(e,n,s,r);return}}Te.flags|=t,i.memoizedState=nl(1|e,n,s,r)}function av(t,e){return ec(8390656,8,t,e)}function og(t,e){return Ch(2048,8,t,e)}function vE(t,e){return Ch(4,2,t,e)}function wE(t,e){return Ch(4,4,t,e)}function IE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function EE(t,e,n){return n=n!=null?n.concat([t]):null,Ch(4,4,IE.bind(null,e,t),n)}function ag(){}function TE(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function SE(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function AE(t,e,n){return ji&21?(pn(n,e)||(n=R0(),Te.lanes|=n,zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function WR(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=Xd.transition;Xd.transition={};try{t(!1),e()}finally{se=n,Xd.transition=r}}function PE(){return on().memoizedState}function GR(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CE(t))RE(e,n);else if(n=iE(t,e,n,r),n!==null){var i=It();fn(n,t,r,i),kE(n,e,r)}}function KR(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CE(t))RE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,pn(a,o)){var l=e.interleaved;l===null?(i.next=i,Xm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=iE(t,e,i,r),n!==null&&(i=It(),fn(n,t,r,i),kE(n,e,r))}}function CE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function RE(t,e){Pa=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fm(t,n)}}var Lc={readContext:sn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},HR={readContext:sn,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:av,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,IE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GR.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:ov,useDebugValue:ag,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=ov(!1),e=t[0];return t=WR.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=vn();if(me){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Qe===null)throw Error(R(349));ji&30||fE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,av(mE.bind(null,r,s,t),[t]),r.flags|=2048,nl(9,pE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=Qe.identifierPrefix;if(me){var n=qn,r=Bn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=el++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QR={readContext:sn,useCallback:TE,useContext:sn,useEffect:og,useImperativeHandle:EE,useInsertionEffect:vE,useLayoutEffect:wE,useMemo:SE,useReducer:Zd,useRef:yE,useState:function(){return Zd(tl)},useDebugValue:ag,useDeferredValue:function(t){var e=on();return AE(e,je.memoizedState,t)},useTransition:function(){var t=Zd(tl)[0],e=on().memoizedState;return[t,e]},useMutableSource:hE,useSyncExternalStore:dE,useId:PE,unstable_isNewReconciler:!1},YR={readContext:sn,useCallback:TE,useContext:sn,useEffect:og,useImperativeHandle:EE,useInsertionEffect:vE,useLayoutEffect:wE,useMemo:SE,useReducer:ef,useRef:yE,useState:function(){return ef(tl)},useDebugValue:ag,useDeferredValue:function(t){var e=on();return je===null?e.memoizedState=t:AE(e,je.memoizedState,t)},useTransition:function(){var t=ef(tl)[0],e=on().memoizedState;return[t,e]},useMutableSource:hE,useSyncExternalStore:dE,useId:PE,unstable_isNewReconciler:!1};function so(t,e){try{var n="",r=e;do n+=SC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JR=typeof WeakMap=="function"?WeakMap:Map;function xE(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uc||(Uc=!0,Tp=r),fp(t,e)},n}function bE(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fp(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hk.bind(null,t,e,n),e.then(t,t))}function uv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var XR=sr.ReactCurrentOwner,Nt=!1;function _t(t,e,n,r){e.child=t===null?uE(e,null,n,r):ro(e,t.child,n,r)}function hv(t,e,n,r,i){n=n.render;var s=e.ref;return qs(e,i),r=ig(t,e,n,r,s,i),n=sg(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(me&&n&&Gm(e),e.flags|=1,_t(t,e,r,i),e.child)}function dv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,NE(t,e,s,r,i)):(t=ic(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function NE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ha(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return pp(t,e,n,r,i)}function DE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ms,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Ms,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Ms,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Ms,Ut),Ut|=r;return _t(t,e,i,n),e.child}function OE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pp(t,e,n,r,i){var s=Lt(n)?Ui:gt.current;return s=to(e,s),qs(e,i),n=ig(t,e,n,r,s,i),r=sg(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(me&&r&&Gm(e),e.flags|=1,_t(t,e,n,i),e.child)}function fv(t,e,n,r,i){if(Lt(n)){var s=!0;kc(e)}else s=!1;if(qs(e,i),e.stateNode===null)tc(t,e),aE(e,n,r),dp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Lt(n)?Ui:gt.current,u=to(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&iv(e,o,r,u),_r=!1;var d=e.memoizedState;o.state=d,Oc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Mt.current||_r?(typeof c=="function"&&(hp(e,n,c,r),l=e.memoizedState),(a=_r||rv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=Lt(n)?Ui:gt.current,l=to(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&iv(e,o,r,l),_r=!1,d=e.memoizedState,o.state=d,Oc(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||Mt.current||_r?(typeof f=="function"&&(hp(e,n,f,r),_=e.memoizedState),(u=_r||rv(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return mp(t,e,n,r,s,i)}function mp(t,e,n,r,i,s){OE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xy(e,n,!1),tr(t,e,s);r=e.stateNode,XR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):_t(t,e,a,s),e.memoizedState=r.state,i&&Xy(e,n,!0),e.child}function VE(t){var e=t.stateNode;e.pendingContext?Jy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jy(t,e.context,!1),eg(t,e.containerInfo)}function pv(t,e,n,r,i){return no(),Hm(i),e.flags|=256,_t(t,e,n,r),e.child}var gp={dehydrated:null,treeContext:null,retryLane:0};function _p(t){return{baseLanes:t,cachePool:null,transitions:null}}function ME(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(Ie,i&1),t===null)return up(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xh(o,r,0,null),t=Oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_p(n),e.memoizedState=gp,t):lg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vr(a,s):(s=Oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_p(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gp,r}return s=t.child,t=s.sibling,r=Vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lg(t,e){return e=xh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ku(t,e,n,r){return r!==null&&Hm(r),ro(e,t.child,null,n),t=lg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tf(Error(R(422))),ku(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xh({mode:"visible",children:r.children},i,0,null),s=Oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=_p(o),e.memoizedState=gp,s);if(!(e.mode&1))return ku(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=tf(s,r,void 0),ku(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),fn(r,t,i,-1))}return pg(),r=tf(Error(R(421))),ku(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=br(i.nextSibling),Bt=e,me=!0,hn=null,t!==null&&(Jt[Xt++]=Bn,Jt[Xt++]=qn,Jt[Xt++]=$i,Bn=t.id,qn=t.overflow,$i=e),e=lg(e,r.children),e.flags|=4096,e)}function mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cp(t.return,e,n)}function nf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function LE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mv(t,n,e);else if(t.tag===19)mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nf(e,!0,n,null,s);break;case"together":nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ek(t,e,n){switch(e.tag){case 3:VE(e),no();break;case 5:cE(e);break;case 1:Lt(e.type)&&kc(e);break;case 4:eg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Nc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?ME(t,e,n):(le(Ie,Ie.current&1),t=tr(t,e,n),t!==null?t.sibling:null);le(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return LE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,DE(t,e,n)}return tr(t,e,n)}var FE,yp,UE,$E;FE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yp=function(){};UE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(Nn.current);var s=null;switch(n){case"input":i=$f(t,i),r=$f(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Bf(t,i),r=Bf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cc)}Wf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$E=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ho(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tk(t,e,n){var r=e.pendingProps;switch(Km(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Lt(e.type)&&Rc(),ht(e),null;case 3:return r=e.stateNode,io(),pe(Mt),pe(gt),ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Pp(hn),hn=null))),yp(t,e),ht(e),null;case 5:tg(e);var i=Pi(Za.current);if(n=e.type,t!==null&&e.stateNode!=null)UE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return ht(e),null}if(t=Pi(Nn.current),Cu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<da.length;i++)he(da[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Sy(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Py(r,s),he("invalid",r)}Wf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":yu(r),Ay(r,s,!0);break;case"textarea":yu(r),Cy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=f0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[Ja]=r,FE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gf(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<da.length;i++)he(da[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Sy(t,r),i=$f(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),he("invalid",t);break;case"textarea":Py(t,r),i=Bf(t,r),he("invalid",t);break;default:i=r}Wf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&he("scroll",t):l!=null&&Nm(t,s,l,o))}switch(n){case"input":yu(t),Ay(t,r,!1);break;case"textarea":yu(t),Cy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$s(t,!!r.multiple,s,!1):r.defaultValue!=null&&$s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)$E(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Pi(Za.current),Pi(Nn.current),Cu(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return ht(e),null;case 13:if(pe(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&jt!==null&&e.mode&1&&!(e.flags&128))rE(),no(),e.flags|=98560,s=!1;else if(s=Cu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[wn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else hn!==null&&(Pp(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?ze===0&&(ze=3):pg())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return io(),yp(t,e),t===null&&Qa(e.stateNode.containerInfo),ht(e),null;case 10:return Jm(e.type._context),ht(e),null;case 17:return Lt(e.type)&&Rc(),ht(e),null;case 19:if(pe(Ie),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ho(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vc(t),o!==null){for(e.flags|=128,Ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>oo&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return ht(e),null}else 2*Oe()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Ie.current,le(Ie,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function nk(t,e){switch(Km(e),e.tag){case 1:return Lt(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),pe(Mt),pe(gt),ng(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tg(e),null;case 13:if(pe(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(Ie),null;case 4:return io(),null;case 10:return Jm(e.type._context),null;case 22:case 23:return fg(),null;case 24:return null;default:return null}}var xu=!1,ft=!1,rk=typeof WeakSet=="function"?WeakSet:Set,L=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function vp(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var gv=!1;function ik(t,e){if(np=Sc,t=q0(),Wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rp={focusedElem:t,selectionRange:n},Sc=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:un(e.type,v),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){Ce(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return _=gv,gv=!1,_}function Ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vp(e,n,s)}i=i.next}while(i!==r)}}function Rh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jE(t){var e=t.alternate;e!==null&&(t.alternate=null,jE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[Ja],delete e[op],delete e[$R],delete e[jR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zE(t){return t.tag===5||t.tag===3||t.tag===4}function _v(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(r!==4&&(t=t.child,t!==null))for(Ip(t,e,n),t=t.sibling;t!==null;)Ip(t,e,n),t=t.sibling}function Ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}var tt=null,cn=!1;function hr(t,e,n){for(n=n.child;n!==null;)BE(t,e,n),n=n.sibling}function BE(t,e,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(wh,n)}catch{}switch(n.tag){case 5:ft||Vs(n,e);case 6:var r=tt,i=cn;tt=null,hr(t,e,n),tt=r,cn=i,tt!==null&&(cn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(cn?(t=tt,n=n.stateNode,t.nodeType===8?Qd(t.parentNode,n):t.nodeType===1&&Qd(t,n),Ga(t)):Qd(tt,n.stateNode));break;case 4:r=tt,i=cn,tt=n.stateNode.containerInfo,cn=!0,hr(t,e,n),tt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vp(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!ft&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,hr(t,e,n),ft=r):hr(t,e,n);break;default:hr(t,e,n)}}function yv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rk),e.forEach(function(r){var i=fk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,cn=!1;break e;case 3:tt=a.stateNode.containerInfo,cn=!0;break e;case 4:tt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(tt===null)throw Error(R(160));BE(s,o,i),tt=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qE(e,t),e=e.sibling}function qE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),yn(t),r&4){try{Ca(3,t,t.return),Rh(3,t)}catch(v){Ce(t,t.return,v)}try{Ca(5,t,t.return)}catch(v){Ce(t,t.return,v)}}break;case 1:ln(e,t),yn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(ln(e,t),yn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{za(i,"")}catch(v){Ce(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&h0(i,s),Gf(a,o);var u=Gf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?g0(i,h):c==="dangerouslySetInnerHTML"?p0(i,h):c==="children"?za(i,h):Nm(i,c,h,u)}switch(a){case"input":jf(i,s);break;case"textarea":d0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?$s(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?$s(i,!!s.multiple,s.defaultValue,!0):$s(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ja]=s}catch(v){Ce(t,t.return,v)}}break;case 6:if(ln(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ce(t,t.return,v)}}break;case 3:if(ln(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(v){Ce(t,t.return,v)}break;case 4:ln(e,t),yn(t);break;case 13:ln(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hg=Oe())),r&4&&yv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(u=ft)||c,ln(e,t),ft=u):ln(e,t),yn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ca(4,d,d.return);break;case 1:Vs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Ce(r,n,v)}}break;case 5:Vs(d,d.return);break;case 22:if(d.memoizedState!==null){wv(h);continue}}f!==null?(f.return=d,L=f):wv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m0("display",o))}catch(v){Ce(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ce(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ln(e,t),yn(t),r&4&&yv(t);break;case 21:break;default:ln(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zE(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(za(i,""),r.flags&=-33);var s=_v(t);Ep(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_v(t);Ip(t,a,o);break;default:throw Error(R(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sk(t,e,n){L=t,WE(t)}function WE(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ft;a=xu;var u=ft;if(xu=o,(ft=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Iv(i):l!==null?(l.return=o,L=l):Iv(i);for(;s!==null;)L=s,WE(s),s=s.sibling;L=i,xu=a,ft=u}vv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):vv(t)}}function vv(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||Rh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ft||e.flags&512&&wp(e)}catch(d){Ce(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function wv(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Iv(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rh(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{wp(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{wp(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var ok=Math.ceil,Fc=sr.ReactCurrentDispatcher,ug=sr.ReactCurrentOwner,rn=sr.ReactCurrentBatchConfig,ne=0,Qe=null,$e=null,st=0,Ut=0,Ms=Zr(0),ze=0,rl=null,zi=0,kh=0,cg=0,Ra=null,bt=null,hg=0,oo=1/0,jn=null,Uc=!1,Tp=null,Dr=null,bu=!1,Sr=null,$c=0,ka=0,Sp=null,nc=-1,rc=0;function It(){return ne&6?Oe():nc!==-1?nc:nc=Oe()}function Or(t){return t.mode&1?ne&2&&st!==0?st&-st:BR.transition!==null?(rc===0&&(rc=R0()),rc):(t=se,t!==0||(t=window.event,t=t===void 0?16:V0(t.type)),t):1}function fn(t,e,n,r){if(50<ka)throw ka=0,Sp=null,Error(R(185));Ll(t,n,r),(!(ne&2)||t!==Qe)&&(t===Qe&&(!(ne&2)&&(kh|=n),ze===4&&vr(t,st)),Ft(t,r),n===1&&ne===0&&!(e.mode&1)&&(oo=Oe()+500,Ah&&ei()))}function Ft(t,e){var n=t.callbackNode;BC(t,e);var r=Tc(t,t===Qe?st:0);if(r===0)n!==null&&xy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xy(n),e===1)t.tag===0?zR(Ev.bind(null,t)):eE(Ev.bind(null,t)),FR(function(){!(ne&6)&&ei()}),n=null;else{switch(k0(r)){case 1:n=Lm;break;case 4:n=P0;break;case 16:n=Ec;break;case 536870912:n=C0;break;default:n=Ec}n=ZE(n,GE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function GE(t,e){if(nc=-1,rc=0,ne&6)throw Error(R(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var r=Tc(t,t===Qe?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jc(t,r);else{e=r;var i=ne;ne|=2;var s=HE();(Qe!==t||st!==e)&&(jn=null,oo=Oe()+500,Di(t,e));do try{uk();break}catch(a){KE(t,a)}while(!0);Ym(),Fc.current=s,ne=i,$e!==null?e=0:(Qe=null,st=0,e=ze)}if(e!==0){if(e===2&&(i=Jf(t),i!==0&&(r=i,e=Ap(t,i))),e===1)throw n=rl,Di(t,0),vr(t,r),Ft(t,Oe()),n;if(e===6)vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ak(i)&&(e=jc(t,r),e===2&&(s=Jf(t),s!==0&&(r=s,e=Ap(t,s))),e===1))throw n=rl,Di(t,0),vr(t,r),Ft(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:mi(t,bt,jn);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=hg+500-Oe(),10<e)){if(Tc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sp(mi.bind(null,t,bt,jn),e);break}mi(t,bt,jn);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ok(r/1960))-r,10<r){t.timeoutHandle=sp(mi.bind(null,t,bt,jn),r);break}mi(t,bt,jn);break;case 5:mi(t,bt,jn);break;default:throw Error(R(329))}}}return Ft(t,Oe()),t.callbackNode===n?GE.bind(null,t):null}function Ap(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Di(t,e).flags|=256),t=jc(t,e),t!==2&&(e=bt,bt=n,e!==null&&Pp(e)),t}function Pp(t){bt===null?bt=t:bt.push.apply(bt,t)}function ak(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~cg,e&=~kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function Ev(t){if(ne&6)throw Error(R(327));Ws();var e=Tc(t,0);if(!(e&1))return Ft(t,Oe()),null;var n=jc(t,e);if(t.tag!==0&&n===2){var r=Jf(t);r!==0&&(e=r,n=Ap(t,r))}if(n===1)throw n=rl,Di(t,0),vr(t,e),Ft(t,Oe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,bt,jn),Ft(t,Oe()),null}function dg(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(oo=Oe()+500,Ah&&ei())}}function Bi(t){Sr!==null&&Sr.tag===0&&!(ne&6)&&Ws();var e=ne;ne|=1;var n=rn.transition,r=se;try{if(rn.transition=null,se=1,t)return t()}finally{se=r,rn.transition=n,ne=e,!(ne&6)&&ei()}}function fg(){Ut=Ms.current,pe(Ms)}function Di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LR(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Km(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rc();break;case 3:io(),pe(Mt),pe(gt),ng();break;case 5:tg(r);break;case 4:io();break;case 13:pe(Ie);break;case 19:pe(Ie);break;case 10:Jm(r.type._context);break;case 22:case 23:fg()}n=n.return}if(Qe=t,$e=t=Vr(t.current,null),st=Ut=e,ze=0,rl=null,cg=kh=zi=0,bt=Ra=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function KE(t,e){do{var n=$e;try{if(Ym(),Zu.current=Lc,Mc){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mc=!1}if(ji=0,Ke=je=Te=null,Pa=!1,el=0,ug.current=null,n===null||n.return===null){ze=1,rl=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=st,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=uv(o);if(f!==null){f.flags&=-257,cv(f,o,a,s,e),f.mode&1&&lv(s,u,e),e=f,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){lv(s,u,e),pg();break e}l=Error(R(426))}}else if(me&&a.mode&1){var w=uv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),cv(w,o,a,s,e),Hm(so(l,a));break e}}s=l=so(l,a),ze!==4&&(ze=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=xE(s,l,e);tv(s,g);break e;case 1:a=l;var m=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dr===null||!Dr.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=bE(s,a,e);tv(s,S);break e}}s=s.return}while(s!==null)}YE(n)}catch(A){e=A,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function HE(){var t=Fc.current;return Fc.current=Lc,t===null?Lc:t}function pg(){(ze===0||ze===3||ze===2)&&(ze=4),Qe===null||!(zi&268435455)&&!(kh&268435455)||vr(Qe,st)}function jc(t,e){var n=ne;ne|=2;var r=HE();(Qe!==t||st!==e)&&(jn=null,Di(t,e));do try{lk();break}catch(i){KE(t,i)}while(!0);if(Ym(),ne=n,Fc.current=r,$e!==null)throw Error(R(261));return Qe=null,st=0,ze}function lk(){for(;$e!==null;)QE($e)}function uk(){for(;$e!==null&&!OC();)QE($e)}function QE(t){var e=XE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?YE(t):$e=e,ug.current=null}function YE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nk(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,$e=null;return}}else if(n=tk(n,e,Ut),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);ze===0&&(ze=5)}function mi(t,e,n){var r=se,i=rn.transition;try{rn.transition=null,se=1,ck(t,e,n,r)}finally{rn.transition=i,se=r}return null}function ck(t,e,n,r){do Ws();while(Sr!==null);if(ne&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qC(t,s),t===Qe&&($e=Qe=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bu||(bu=!0,ZE(Ec,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=se;se=1;var a=ne;ne|=4,ug.current=null,ik(t,n),qE(n,t),xR(rp),Sc=!!np,rp=np=null,t.current=n,sk(n),VC(),ne=a,se=o,rn.transition=s}else t.current=n;if(bu&&(bu=!1,Sr=t,$c=i),s=t.pendingLanes,s===0&&(Dr=null),FC(n.stateNode),Ft(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uc)throw Uc=!1,t=Tp,Tp=null,t;return $c&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===Sp?ka++:(ka=0,Sp=t):ka=0,ei(),null}function Ws(){if(Sr!==null){var t=k0($c),e=rn.transition,n=se;try{if(rn.transition=null,se=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,$c=0,ne&6)throw Error(R(331));var i=ne;for(ne|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Ca(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,f=c.return;if(jE(c),c===u){L=null;break}if(d!==null){d.return=f,L=d;break}L=f}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var m=t.current;for(L=m;L!==null;){o=L;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,L=p;else e:for(o=m;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rh(9,a)}}catch(A){Ce(a,a.return,A)}if(a===o){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(ne=i,ei(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(wh,t)}catch{}r=!0}return r}finally{se=n,rn.transition=e}}return!1}function Tv(t,e,n){e=so(n,e),e=xE(t,e,1),t=Nr(t,e,1),e=It(),t!==null&&(Ll(t,1,e),Ft(t,e))}function Ce(t,e,n){if(t.tag===3)Tv(t,t,n);else for(;e!==null;){if(e.tag===3){Tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=so(n,t),t=bE(e,t,1),e=Nr(e,t,1),t=It(),e!==null&&(Ll(e,1,t),Ft(e,t));break}}e=e.return}}function hk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(st&n)===n&&(ze===4||ze===3&&(st&130023424)===st&&500>Oe()-hg?Di(t,0):cg|=n),Ft(t,e)}function JE(t,e){e===0&&(t.mode&1?(e=Iu,Iu<<=1,!(Iu&130023424)&&(Iu=4194304)):e=1);var n=It();t=er(t,e),t!==null&&(Ll(t,e,n),Ft(t,n))}function dk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),JE(t,n)}function fk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),JE(t,n)}var XE;XE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,ek(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,me&&e.flags&1048576&&tE(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tc(t,e),t=e.pendingProps;var i=to(e,gt.current);qs(e,n),i=ig(null,e,r,t,i,n);var s=sg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(s=!0,kc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zm(e),i.updater=Ph,e.stateNode=i,i._reactInternals=e,dp(e,r,t,n),e=mp(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Gm(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mk(r),t=un(r,t),i){case 0:e=pp(null,e,r,t,n);break e;case 1:e=fv(null,e,r,t,n);break e;case 11:e=hv(null,e,r,t,n);break e;case 14:e=dv(null,e,r,un(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),pp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),fv(t,e,r,i,n);case 3:e:{if(VE(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sE(t,e),Oc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=so(Error(R(423)),e),e=pv(t,e,r,n,i);break e}else if(r!==i){i=so(Error(R(424)),e),e=pv(t,e,r,n,i);break e}else for(jt=br(e.stateNode.containerInfo.firstChild),Bt=e,me=!0,hn=null,n=uE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){e=tr(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return cE(e),t===null&&up(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ip(r,i)?o=null:s!==null&&ip(r,s)&&(e.flags|=32),OE(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&up(e),null;case 13:return ME(t,e,n);case 4:return eg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),hv(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(Nc,r._currentValue),r._currentValue=o,s!==null)if(pn(s.value,o)){if(s.children===i.children&&!Mt.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=sn(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),dv(t,e,r,i,n);case 15:return NE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),tc(t,e),e.tag=1,Lt(r)?(t=!0,kc(e)):t=!1,qs(e,n),aE(e,r,i),dp(e,r,i,n),mp(null,e,r,!0,t,n);case 19:return LE(t,e,n);case 22:return DE(t,e,n)}throw Error(R(156,e.tag))};function ZE(t,e){return A0(t,e)}function pk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new pk(t,e,n,r)}function mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mk(t){if(typeof t=="function")return mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Om)return 11;if(t===Vm)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ps:return Oi(n.children,i,s,e);case Dm:o=8,i|=8;break;case Mf:return t=en(12,n,e,i|2),t.elementType=Mf,t.lanes=s,t;case Lf:return t=en(13,n,e,i),t.elementType=Lf,t.lanes=s,t;case Ff:return t=en(19,n,e,i),t.elementType=Ff,t.lanes=s,t;case l0:return xh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o0:o=10;break e;case a0:o=9;break e;case Om:o=11;break e;case Vm:o=14;break e;case gr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Oi(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function xh(t,e,n,r){return t=en(22,t,r,e),t.elementType=l0,t.lanes=n,t.stateNode={isHidden:!1},t}function rf(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function sf(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fd(0),this.expirationTimes=Fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gg(t,e,n,r,i,s,o,a,l){return t=new gk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),t}function _k(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function eT(t){if(!t)return Ur;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Lt(n))return Z0(t,n,e)}return e}function tT(t,e,n,r,i,s,o,a,l){return t=gg(n,r,!0,t,i,s,o,a,l),t.context=eT(null),n=t.current,r=It(),i=Or(n),s=Qn(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,Ll(t,i,r),Ft(t,r),t}function bh(t,e,n,r){var i=e.current,s=It(),o=Or(i);return n=eT(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(fn(t,i,o,s),Xu(t,i,o)),o}function zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _g(t,e){Sv(t,e),(t=t.alternate)&&Sv(t,e)}function yk(){return null}var nT=typeof reportError=="function"?reportError:function(t){console.error(t)};function yg(t){this._internalRoot=t}Nh.prototype.render=yg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));bh(t,e,null,null)};Nh.prototype.unmount=yg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bi(function(){bh(null,t,null,null)}),e[Zn]=null}};function Nh(t){this._internalRoot=t}Nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=N0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&O0(t)}};function vg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Av(){}function vk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zc(o);s.call(u)}}var o=tT(e,r,t,0,null,!1,!1,"",Av);return t._reactRootContainer=o,t[Zn]=o.current,Qa(t.nodeType===8?t.parentNode:t),Bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zc(l);a.call(u)}}var l=gg(t,0,!1,null,null,!1,!1,"",Av);return t._reactRootContainer=l,t[Zn]=l.current,Qa(t.nodeType===8?t.parentNode:t),Bi(function(){bh(e,l,n,r)}),l}function Oh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zc(o);a.call(l)}}bh(e,o,t,i)}else o=vk(n,e,t,i,r);return zc(o)}x0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(Fm(e,n|1),Ft(e,Oe()),!(ne&6)&&(oo=Oe()+500,ei()))}break;case 13:Bi(function(){var r=er(t,1);if(r!==null){var i=It();fn(r,t,1,i)}}),_g(t,1)}};Um=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=It();fn(e,t,134217728,n)}_g(t,134217728)}};b0=function(t){if(t.tag===13){var e=Or(t),n=er(t,e);if(n!==null){var r=It();fn(n,t,e,r)}_g(t,e)}};N0=function(){return se};D0=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};Hf=function(t,e,n){switch(e){case"input":if(jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sh(r);if(!i)throw Error(R(90));c0(r),jf(r,i)}}}break;case"textarea":d0(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};v0=dg;w0=Bi;var wk={usingClientEntryPoint:!1,Events:[Ul,xs,Sh,_0,y0,dg]},Qo={findFiberByHostInstance:Si,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ik={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T0(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{wh=Nu.inject(Ik),bn=Nu}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wk;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vg(e))throw Error(R(200));return _k(t,e,null,n)};Kt.createRoot=function(t,e){if(!vg(t))throw Error(R(299));var n=!1,r="",i=nT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gg(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,Qa(t.nodeType===8?t.parentNode:t),new yg(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=T0(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Bi(t)};Kt.hydrate=function(t,e,n){if(!Dh(e))throw Error(R(200));return Oh(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!vg(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tT(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,Qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nh(e)};Kt.render=function(t,e,n){if(!Dh(e))throw Error(R(200));return Oh(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Dh(t))throw Error(R(40));return t._reactRootContainer?(Bi(function(){Oh(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};Kt.unstable_batchedUpdates=dg;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dh(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Oh(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";function rT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rT)}catch(t){console.error(t)}}rT(),t0.exports=Kt;var iT=t0.exports;const wr=Vl(iT);var Pv=iT;Of.createRoot=Pv.createRoot,Of.hydrateRoot=Pv.hydrateRoot;var sT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cv=Ee.createContext&&Ee.createContext(sT),Ek=["attr","size","title"];function Tk(t,e){if(t==null)return{};var n=Sk(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Sk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bc.apply(this,arguments)}function Rv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function qc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rv(Object(n),!0).forEach(function(r){Ak(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ak(t,e,n){return e=Pk(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pk(t){var e=Ck(t,"string");return typeof e=="symbol"?e:String(e)}function Ck(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function oT(t){return t&&t.map((e,n)=>Ee.createElement(e.tag,qc({key:n},e.attr),oT(e.child)))}function aT(t){return e=>Ee.createElement(Rk,Bc({attr:qc({},t.attr)},e),oT(t.child))}function Rk(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Tk(t,Ek),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ee.createElement("svg",Bc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:qc(qc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ee.createElement("title",null,s),t.children)};return Cv!==void 0?Ee.createElement(Cv.Consumer,null,n=>e(n)):e(sT)}function kk(t){return aT({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(t)}function xk(t){return aT({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"},child:[]}]})(t)}var kv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},uT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Nk;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dk=function(t){const e=lT(t);return uT.encodeByteArray(e,!0)},Wc=function(t){return Dk(t).replace(/\./g,"")},cT=function(t){try{return uT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Gc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ok(n)||(t[n]=Gc(t[n],e[n]));return t}function Ok(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=()=>Vk().__FIREBASE_DEFAULTS__,Lk=()=>{if(typeof process>"u"||typeof kv>"u")return;const t=kv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cT(t[1]);return e&&JSON.parse(e)},Vh=()=>{try{return Mk()||Lk()||Fk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uk=t=>{var e,n;return(n=(e=Vh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$k=t=>{const e=Uk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hT=()=>{var t;return(t=Vh())===null||t===void 0?void 0:t.config},jk=t=>{var e;return(e=Vh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function wg(){var t;const e=(t=Vh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wk(){return typeof self=="object"&&self.self===self}function dT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fT(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pT(){return!wg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function il(){try{return typeof indexedDB=="object"}catch{return!1}}function Gk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="FirebaseError";class Et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kk,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Et(i,a,r)}}function Hk(t,e){return t.replace(Qk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bv(s)&&bv(o)){if(!sl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mT(t,e){const n=new Jk(t,e);return n.subscribe.bind(n)}class Jk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=of),i.error===void 0&&(i.error=of),i.complete===void 0&&(i.complete=of);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function of(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tx(e))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gi){return this.instances.has(e)}getOptions(e=gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ex(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gi){return this.component?this.component.multipleInstances?e:gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ex(t){return t===gi?void 0:t}function tx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=[];var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const gT={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},rx=Y.INFO,ix={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},sx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ix[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mh{constructor(e){this.name=e,this._logLevel=rx,this._logHandler=sx,this._userLogHandler=null,Eg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}function ox(t){Eg.forEach(e=>{e.setLogLevel(t)})}function ax(t,e){for(const n of Eg){let r=null;e&&e.level&&(r=gT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Y[s].toLowerCase(),message:a,args:o,type:i.name})}}}const lx=(t,e)=>e.some(n=>t instanceof n);let Nv,Dv;function ux(){return Nv||(Nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cx(){return Dv||(Dv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _T=new WeakMap,Cp=new WeakMap,yT=new WeakMap,af=new WeakMap,Tg=new WeakMap;function hx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_T.set(n,t)}).catch(()=>{}),Tg.set(e,t),e}function dx(t){if(Cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cp.set(t,e)}let Rp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fx(t){Rp=t(Rp)}function px(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lf(this),e,...n);return yT.set(r,e.sort?e.sort():[e]),Mr(r)}:cx().includes(t)?function(...e){return t.apply(lf(this),e),Mr(_T.get(this))}:function(...e){return Mr(t.apply(lf(this),e))}}function mx(t){return typeof t=="function"?px(t):(t instanceof IDBTransaction&&dx(t),lx(t,ux())?new Proxy(t,Rp):t)}function Mr(t){if(t instanceof IDBRequest)return hx(t);if(af.has(t))return af.get(t);const e=mx(t);return e!==t&&(af.set(t,e),Tg.set(e,t)),e}const lf=t=>Tg.get(t);function gx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _x=["get","getKey","getAll","getAllKeys","count"],yx=["put","add","delete","clear"],uf=new Map;function Ov(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uf.get(e))return uf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_x.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return uf.set(e,s),s}fx(t=>({...t,get:(e,n,r)=>Ov(e,n)||t.get(e,n,r),has:(e,n)=>!!Ov(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kp="@firebase/app",Vv="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Mh("@firebase/app"),Ix="@firebase/app-compat",Ex="@firebase/analytics-compat",Tx="@firebase/analytics",Sx="@firebase/app-check-compat",Ax="@firebase/app-check",Px="@firebase/auth",Cx="@firebase/auth-compat",Rx="@firebase/database",kx="@firebase/database-compat",xx="@firebase/functions",bx="@firebase/functions-compat",Nx="@firebase/installations",Dx="@firebase/installations-compat",Ox="@firebase/messaging",Vx="@firebase/messaging-compat",Mx="@firebase/performance",Lx="@firebase/performance-compat",Fx="@firebase/remote-config",Ux="@firebase/remote-config-compat",$x="@firebase/storage",jx="@firebase/storage-compat",zx="@firebase/firestore",Bx="@firebase/firestore-compat",qx="firebase",Wx="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]",Gx={[kp]:"fire-core",[Ix]:"fire-core-compat",[Tx]:"fire-analytics",[Ex]:"fire-analytics-compat",[Ax]:"fire-app-check",[Sx]:"fire-app-check-compat",[Px]:"fire-auth",[Cx]:"fire-auth-compat",[Rx]:"fire-rtdb",[kx]:"fire-rtdb-compat",[xx]:"fire-fn",[bx]:"fire-fn-compat",[Nx]:"fire-iid",[Dx]:"fire-iid-compat",[Ox]:"fire-fcm",[Vx]:"fire-fcm-compat",[Mx]:"fire-perf",[Lx]:"fire-perf-compat",[Fx]:"fire-rc",[Ux]:"fire-rc-compat",[$x]:"fire-gcs",[jx]:"fire-gcs-compat",[zx]:"fire-fst",[Bx]:"fire-fst-compat","fire-js":"fire-js",[qx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Map,ol=new Map;function Kc(t,e){try{t.container.addComponent(e)}catch(n){qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vT(t,e){t.container.addOrOverwriteComponent(e)}function zr(t){const e=t.name;if(ol.has(e))return qi.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,t);for(const n of jr.values())Kc(n,t);return!0}function Sg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kx(t,e,n=$r){Sg(t,e).clearInstance(n)}function Hx(){ol.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yn=new ss("app","Firebase",Qx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yx=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=Wx;function Ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$r,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=hT()),!n)throw Yn.create("no-options");const s=jr.get(i);if(s){if(sl(n,s.options)&&sl(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new nx(i);for(const l of ol.values())o.addComponent(l);const a=new Yx(n,r,o);return jr.set(i,a),a}function wT(t=$r){const e=jr.get(t);if(!e&&t===$r&&hT())return Ag();if(!e)throw Yn.create("no-app",{appName:t});return e}function Jx(){return Array.from(jr.values())}async function IT(t){const e=t.name;jr.has(e)&&(jr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Dn(t,e,n){var r;let i=(r=Gx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qi.warn(a.join(" "));return}zr(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ET(t,e){if(t!==null&&typeof t!="function")throw Yn.create("invalid-log-argument");ax(t,e)}function TT(t){ox(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="firebase-heartbeat-database",Zx=1,al="firebase-heartbeat-store";let cf=null;function ST(){return cf||(cf=gx(Xx,Zx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(al)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),cf}async function eb(t){try{const n=(await ST()).transaction(al),r=await n.objectStore(al).get(AT(t));return await n.done,r}catch(e){if(e instanceof Et)qi.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qi.warn(n.message)}}}async function Mv(t,e){try{const r=(await ST()).transaction(al,"readwrite");await r.objectStore(al).put(e,AT(t)),await r.done}catch(n){if(n instanceof Et)qi.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qi.warn(r.message)}}}function AT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=1024,nb=30*24*60*60*1e3;class rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lv(),{heartbeatsToSend:r,unsentEntries:i}=ib(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lv(){return new Date().toISOString().substring(0,10)}function ib(t,e=tb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return il()?Gk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fv(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){zr(new Vn("platform-logger",e=>new vx(e),"PRIVATE")),zr(new Vn("heartbeat",e=>new rb(e),"PRIVATE")),Dn(kp,Vv,t),Dn(kp,Vv,"esm2017"),Dn("fire-js","")}ob("");const ab=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Et,SDK_VERSION:ti,_DEFAULT_ENTRY_NAME:$r,_addComponent:Kc,_addOrOverwriteComponent:vT,_apps:jr,_clearComponents:Hx,_components:ol,_getProvider:Sg,_registerComponent:zr,_removeServiceInstance:Kx,deleteApp:IT,getApp:wT,getApps:Jx,initializeApp:Ag,onLog:ET,registerVersion:Dn,setLogLevel:TT},Symbol.toStringTag,{value:"Module"}));var lb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Pg=Pg||{},W=lb||self;function Lh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ub(t){return Object.prototype.hasOwnProperty.call(t,hf)&&t[hf]||(t[hf]=++cb)}var hf="closure_uid_"+(1e9*Math.random()>>>0),cb=0;function hb(t,e,n){return t.call.apply(t.bind,arguments)}function db(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=hb:pt=db,pt.apply(null,arguments)}function Du(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ni(){this.s=this.s,this.o=this.o}var fb=0;ni.prototype.s=!1;ni.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fb!=0)&&ub(this)};ni.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const PT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Uv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var pb=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};W.addEventListener("test",n,e),W.removeEventListener("test",n,e)}catch{}return t}();function ll(t){return/^[\s\xa0]*$/.test(t)}function Fh(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function In(t){return Fh().indexOf(t)!=-1}function Rg(t){return Rg[" "](t),t}Rg[" "]=function(){};function mb(t,e){var n=aN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gb=In("Opera"),ao=In("Trident")||In("MSIE"),CT=In("Edge"),xp=CT||ao,RT=In("Gecko")&&!(Fh().toLowerCase().indexOf("webkit")!=-1&&!In("Edge"))&&!(In("Trident")||In("MSIE"))&&!In("Edge"),_b=Fh().toLowerCase().indexOf("webkit")!=-1&&!In("Edge");function kT(){var t=W.document;return t?t.documentMode:void 0}var bp;e:{var df="",ff=function(){var t=Fh();if(RT)return/rv:([^\);]+)(\)|;)/.exec(t);if(CT)return/Edge\/([\d\.]+)/.exec(t);if(ao)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_b)return/WebKit\/(\S+)/.exec(t);if(gb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ff&&(df=ff?ff[1]:""),ao){var pf=kT();if(pf!=null&&pf>parseFloat(df)){bp=String(pf);break e}}bp=df}var Np;if(W.document&&ao){var $v=kT();Np=$v||parseInt(bp,10)||void 0}else Np=void 0;var yb=Np;function ul(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(RT){e:{try{Rg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ul.$.h.call(this)}}Xe(ul,mt);var vb={2:"touch",3:"pen",4:"mouse"};ul.prototype.h=function(){ul.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zl="closure_listenable_"+(1e6*Math.random()|0),wb=0;function Ib(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++wb,this.fa=this.ia=!1}function Uh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Eb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xT(t){const e={};for(const n in t)e[n]=t[n];return e}const jv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<jv.length;s++)n=jv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $h(t){this.src=t,this.g={},this.h=0}$h.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Op(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ib(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Dp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=PT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Uh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Op(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var xg="closure_lm_"+(1e6*Math.random()|0),mf={};function NT(t,e,n,r,i){if(r&&r.once)return OT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)NT(t,e[s],n,r,i);return null}return n=Dg(n),t&&t[zl]?t.O(e,n,jl(r)?!!r.capture:!!r,i):DT(t,e,n,!1,r,i)}function DT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=jl(i)?!!i.capture:!!i,a=Ng(t);if(a||(t[xg]=a=new $h(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Tb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(MT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Tb(){function t(n){return e.call(t.src,t.listener,n)}const e=Sb;return t}function OT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)OT(t,e[s],n,r,i);return null}return n=Dg(n),t&&t[zl]?t.P(e,n,jl(r)?!!r.capture:!!r,i):DT(t,e,n,!0,r,i)}function VT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)VT(t,e[s],n,r,i);else r=jl(r)?!!r.capture:!!r,n=Dg(n),t&&t[zl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Op(s,n,r,i),-1<n&&(Uh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ng(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Op(e,n,r,i)),(n=-1<t?e[t]:null)&&bg(n))}function bg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[zl])Dp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(MT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ng(e))?(Dp(n,t),n.h==0&&(n.src=null,e[xg]=null)):Uh(t)}}}function MT(t){return t in mf?mf[t]:mf[t]="on"+t}function Sb(t,e){if(t.fa)t=!0;else{e=new ul(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bg(t),t=n.call(r,e)}return t}function Ng(t){return t=t[xg],t instanceof $h?t:null}var gf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dg(t){return typeof t=="function"?t:(t[gf]||(t[gf]=function(e){return t.handleEvent(e)}),t[gf])}function Je(){ni.call(this),this.i=new $h(this),this.S=this,this.J=null}Xe(Je,ni);Je.prototype[zl]=!0;Je.prototype.removeEventListener=function(t,e,n,r){VT(this,t,e,n,r)};function ot(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(r,t),bT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ou(o,r,!0,e)&&i}if(o=e.g=t,i=Ou(o,r,!0,e)&&i,i=Ou(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ou(o,r,!1,e)&&i}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Uh(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ou(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Dp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Og=W.JSON.stringify;class Ab{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Pb(){var t=Vg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Cb{constructor(){this.h=this.g=null}add(e,n){const r=LT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var LT=new Ab(()=>new Rb,t=>t.reset());class Rb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xb(t){W.setTimeout(()=>{throw t},0)}let cl,hl=!1,Vg=new Cb,FT=()=>{const t=W.Promise.resolve(void 0);cl=()=>{t.then(bb)}};var bb=()=>{for(var t;t=Pb();){try{t.h.call(t.g)}catch(n){xb(n)}var e=LT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hl=!1};function jh(t,e){Je.call(this),this.h=t||1,this.g=e||W,this.j=pt(this.qb,this),this.l=Date.now()}Xe(jh,Je);O=jh.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(Mg(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){jh.$.N.call(this),Mg(this),delete this.g};function Lg(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function UT(t){t.g=Lg(()=>{t.g=null,t.i&&(t.i=!1,UT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Nb extends ni{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:UT(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dl(t){ni.call(this),this.h=t,this.g={}}Xe(dl,ni);var zv=[];function $T(t,e,n,r){Array.isArray(n)||(n&&(zv[0]=n.toString()),n=zv);for(var i=0;i<n.length;i++){var s=NT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function jT(t){kg(t.g,function(e,n){this.g.hasOwnProperty(n)&&bg(e)},t),t.g={}}dl.prototype.N=function(){dl.$.N.call(this),jT(this)};dl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zh(){this.g=!0}zh.prototype.Ea=function(){this.g=!1};function Db(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Ob(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Fs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Mb(t,n)+(r?" "+r:"")})}function Vb(t,e){t.info(function(){return"TIMEOUT: "+e})}zh.prototype.info=function(){};function Mb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Og(n)}catch{return e}}var os={},Bv=null;function Bh(){return Bv=Bv||new Je}os.Ta="serverreachability";function zT(t){mt.call(this,os.Ta,t)}Xe(zT,mt);function fl(t){const e=Bh();ot(e,new zT(e))}os.STAT_EVENT="statevent";function BT(t,e){mt.call(this,os.STAT_EVENT,t),this.stat=e}Xe(BT,mt);function wt(t){const e=Bh();ot(e,new BT(e,t))}os.Ua="timingevent";function qT(t,e){mt.call(this,os.Ua,t),this.size=e}Xe(qT,mt);function Bl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var qh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},WT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fg(){}Fg.prototype.h=null;function qv(t){return t.h||(t.h=t.i())}function GT(){}var ql={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ug(){mt.call(this,"d")}Xe(Ug,mt);function $g(){mt.call(this,"c")}Xe($g,mt);var Vp;function Wh(){}Xe(Wh,Fg);Wh.prototype.g=function(){return new XMLHttpRequest};Wh.prototype.i=function(){return{}};Vp=new Wh;function Wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new dl(this),this.P=Lb,t=xp?125:void 0,this.V=new jh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new KT}function KT(){this.i=null,this.g="",this.h=!1}var Lb=45e3,HT={},Mp={};O=Wl.prototype;O.setTimeout=function(t){this.P=t};function Lp(t,e,n){t.L=1,t.A=Kh(nr(e)),t.u=n,t.S=!0,QT(t,null)}function QT(t,e){t.G=Date.now(),Gl(t),t.B=nr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),rS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new KT,t.g=SS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Nb(pt(t.Pa,t,t.g),t.O)),$T(t.U,t.g,"readystatechange",t.nb),e=t.I?xT(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),fl(),Db(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&Pn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=Pn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||xp||this.g&&(this.h.h||this.g.ja()||Hv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?fl(3):fl(2)),Gh(this);var n=this.g.da();this.ca=n;t:if(YT(this)){var r=Hv(this.g);t="";var i=r.length,s=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ci(this),xa(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ob(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ll(a)){var u=a;break t}}u=null}if(n=u)Fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fp(this,n);else{this.i=!1,this.s=3,wt(12),Ci(this),xa(this);break e}}this.S?(JT(this,c,o),xp&&this.i&&c==3&&($T(this.U,this.V,"tick",this.mb),this.V.start())):(Fs(this.j,this.m,o,null),Fp(this,o)),c==4&&Ci(this),this.i&&!this.J&&(c==4?wS(this.l,this):(this.i=!1,Gl(this)))}else iN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Ci(this),xa(this)}}}catch{}finally{}};function YT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function JT(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=Fb(t,n),i==Mp){e==4&&(t.s=4,wt(14),r=!1),Fs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==HT){t.s=4,wt(15),Fs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fs(t.j,t.m,i,null),Fp(t,i);YT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gg(e),e.M=!0,wt(11))):(Fs(t.j,t.m,n,"[Invalid Chunked Response]"),Ci(t),xa(t))}O.mb=function(){if(this.g){var t=Pn(this.g),e=this.g.ja();this.o<e.length&&(Gh(this),JT(this,t,e),this.i&&t!=4&&Gl(this))}};function Fb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Mp:(n=Number(e.substring(n,r)),isNaN(n)?HT:(r+=1,r+n>e.length?Mp:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,Ci(this)};function Gl(t){t.Y=Date.now()+t.P,XT(t,t.P)}function XT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Bl(pt(t.lb,t),e)}function Gh(t){t.C&&(W.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Vb(this.j,this.B),this.L!=2&&(fl(),wt(17)),Ci(this),this.s=2,xa(this)):XT(this,this.Y-t)};function xa(t){t.l.H==0||t.J||wS(t.l,t)}function Ci(t){Gh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Mg(t.V),jT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Up(n.i,t))){if(!t.K&&Up(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Yc(n),Jh(n);else break e;Wg(n),wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bl(pt(n.ib,n),6e3));if(1>=oS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ri(n,11)}else if((t.K||n.g==t)&&Yc(n),!ll(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jg(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,de(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=TS(r,r.J?r.pa:null,r.Y),o.K){aS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Gh(a),Gl(a)),r.g=o}else yS(r);0<n.j.length&&Xh(n)}else u[0]!="stop"&&u[0]!="close"||Ri(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ri(n,7):qg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}fl(4)}catch{}}function Ub(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $b(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ZT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$b(t),r=Ub(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var eS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vi){this.h=t.h,Hc(this,t.j),this.s=t.s,this.g=t.g,Qc(this,t.m),this.l=t.l;var e=t.i,n=new pl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wv(this,n),this.o=t.o}else t&&(e=String(t).match(eS))?(this.h=!1,Hc(this,e[1]||"",!0),this.s=pa(e[2]||""),this.g=pa(e[3]||"",!0),Qc(this,e[4]),this.l=pa(e[5]||"",!0),Wv(this,e[6]||"",!0),this.o=pa(e[7]||"")):(this.h=!1,this.i=new pl(null,this.h))}Vi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ma(e,Gv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ma(e,Gv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ma(n,n.charAt(0)=="/"?qb:Bb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ma(n,Gb)),t.join("")};function nr(t){return new Vi(t)}function Hc(t,e,n){t.j=n?pa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wv(t,e,n){e instanceof pl?(t.i=e,Kb(t.i,t.h)):(n||(e=ma(e,Wb)),t.i=new pl(e,t.h))}function de(t,e,n){t.i.set(e,n)}function Kh(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ma(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gv=/[#\/\?@]/g,Bb=/[#\?:]/g,qb=/[#\?]/g,Wb=/[#\?@]/g,Gb=/#/g;function pl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ri(t){t.g||(t.g=new Map,t.h=0,t.i&&jb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=pl.prototype;O.add=function(t,e){ri(this),this.i=null,t=Ro(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tS(t,e){ri(t),e=Ro(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nS(t,e){return ri(t),e=Ro(t,e),t.g.has(e)}O.forEach=function(t,e){ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){ri(this);let e=[];if(typeof t=="string")nS(this,t)&&(e=e.concat(this.g.get(Ro(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return ri(this),this.i=null,t=Ro(this,t),nS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function rS(t,e,n){tS(t,e),0<n.length&&(t.i=null,t.g.set(Ro(t,e),Cg(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ro(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Kb(t,e){e&&!t.j&&(ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(tS(this,r),rS(this,i,n))},t)),t.j=e}var Hb=class{constructor(t,e){this.g=t,this.map=e}};function iS(t){this.l=t||Qb,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qb=10;function sS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function oS(t){return t.h?1:t.g?t.g.size:0}function Up(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jg(t,e){t.g?t.g.add(e):t.h=e}function aS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iS.prototype.cancel=function(){if(this.i=lS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cg(t.i)}var Yb=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function Jb(){this.g=new Yb}function Xb(t,e,n){const r=n||"";try{ZT(t,function(i,s){let o=i;jl(i)&&(o=Og(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Zb(t,e){const n=new zh;if(W.Image){const r=new Image;r.onload=Du(Vu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Du(Vu,n,r,"TestLoadImage: error",!1,e),r.onabort=Du(Vu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Du(Vu,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hh(t){this.l=t.ec||null,this.j=t.ob||!1}Xe(Hh,Fg);Hh.prototype.g=function(){return new Qh(this.l,this.j)};Hh.prototype.i=function(t){return function(){return t}}({});function Qh(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=zg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(Qh,Je);var zg=0;O=Qh.prototype;O.open=function(t,e){if(this.readyState!=zg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ml(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kl(this)),this.readyState=zg};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ml(this)),this.g&&(this.readyState=3,ml(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function uS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kl(this):ml(this),this.readyState==3&&uS(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Kl(this))};O.Ya=function(t){this.g&&(this.response=t,Kl(this))};O.ka=function(){this.g&&Kl(this)};function Kl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ml(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ml(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eN=W.JSON.parse;function ke(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cS,this.L=this.M=!1}Xe(ke,Je);var cS="",tN=/^https?$/i,nN=["POST","PUT"];O=ke.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vp.g(),this.C=this.u?qv(this.u):qv(Vp),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Kv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=PT(nN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fS(this),0<this.B&&((this.L=rN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=Lg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kv(this,s)}};function rN(t){return ao&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Pg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function Kv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hS(t),Yh(t)}function hS(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),Yh(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yh(this,!0)),ke.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?dS(this):this.kb())};O.kb=function(){dS(this)};function dS(t){if(t.h&&typeof Pg<"u"&&(!t.C[1]||Pn(t)!=4||t.da()!=2)){if(t.v&&Pn(t)==4)Lg(t.La,0,t);else if(ot(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(eS)[1]||null;!i&&W.self&&W.self.location&&(i=W.self.location.protocol.slice(0,-1)),r=!tN.test(i?i.toLowerCase():"")}n=r}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var s=2<Pn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",hS(t)}}finally{Yh(t)}}}}function Yh(t,e){if(t.g){fS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function fS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Pn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eN(e)}};function Hv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case cS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function iN(t){const e={};t=(t.g&&2<=Pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ll(t[r]))continue;var n=kb(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}Eb(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pS(t){let e="";return kg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Yo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mS(t){this.Ga=0,this.j=[],this.l=new zh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yo("baseRetryDelayMs",5e3,t),this.hb=Yo("retryDelaySeedMs",1e4,t),this.eb=Yo("forwardChannelMaxRetries",2,t),this.xa=Yo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new iS(t&&t.concurrentRequestLimit),this.Ja=new Jb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=mS.prototype;O.ra=8;O.H=1;function qg(t){if(gS(t),t.H==3){var e=t.W++,n=nr(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),Hl(t,n),e=new Wl(t,t.l,e),e.L=2,e.A=Kh(nr(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.A,n=!0),n||(e.g=SS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Gl(e)}ES(t)}function Jh(t){t.g&&(Gg(t),t.g.cancel(),t.g=null)}function gS(t){Jh(t),t.u&&(W.clearTimeout(t.u),t.u=null),Yc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Xh(t){if(!sS(t.i)&&!t.m){t.m=!0;var e=t.Na;cl||FT(),hl||(cl(),hl=!0),Vg.add(e,t),t.C=0}}function sN(t,e){return oS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bl(pt(t.Na,t,e),IS(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Wl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xT(s),bT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_S(this,i,e),n=nr(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),Hl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(pS(s)))+"&"+e:this.o&&Bg(n,this.o,s)),jg(this.i,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.aa=!0,Lp(i,n,null)):Lp(i,n,e),this.H=2}}else this.H==3&&(t?Qv(this,t):this.j.length==0||sS(this.i)||Qv(this))};function Qv(t,e){var n;e?n=e.m:n=t.W++;const r=nr(t.I);de(r,"SID",t.K),de(r,"RID",n),de(r,"AID",t.V),Hl(t,r),t.o&&t.s&&Bg(r,t.o,t.s),n=new Wl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=_S(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jg(t.i,n),Lp(n,r,e)}function Hl(t,e){t.na&&kg(t.na,function(n,r){de(e,r,n)}),t.h&&ZT({},function(n,r){de(e,r,n)})}function _S(t,e,n){n=Math.min(t.j.length,n);var r=t.h?pt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Xb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function yS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;cl||FT(),hl||(cl(),hl=!0),Vg.add(e,t),t.A=0}}function Wg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bl(pt(t.Ma,t),IS(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,vS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bl(pt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Jh(this),vS(this))};function Gg(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function vS(t){t.g=new Wl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nr(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),Hl(t,e),t.o&&t.s&&Bg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Kh(nr(e)),n.u=null,n.S=!0,QT(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Jh(this),Wg(this),wt(19))};function Yc(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function wS(t,e){var n=null;if(t.g==e){Yc(t),Gg(t),t.g=null;var r=2}else if(Up(t.i,e))n=e.F,aS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Bh(),ot(r,new qT(r,n)),Xh(t)}else yS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&sN(t,e)||r==2&&Wg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ri(t,5);break;case 4:Ri(t,10);break;case 3:Ri(t,6);break;default:Ri(t,2)}}}function IS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ri(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=pt(t.pb,t);n||(n=new Vi("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Hc(n,"https"),Kh(n)),Zb(n.toString(),r)}else wt(2);t.H=0,t.h&&t.h.za(e),ES(t),gS(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function ES(t){if(t.H=0,t.ma=[],t.h){const e=lS(t.i);(e.length!=0||t.j.length!=0)&&(Uv(t.ma,e),Uv(t.ma,t.j),t.i.i.length=0,Cg(t.j),t.j.length=0),t.h.ya()}}function TS(t,e,n){var r=n instanceof Vi?nr(n):new Vi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Qc(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Vi(null);r&&Hc(s,r),e&&(s.g=e),i&&Qc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.ra),Hl(t,r),r}function SS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ke(new Hh({ob:n})):new ke(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function AS(){}O=AS.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Jc(){if(ao&&!(10<=Number(yb)))throw Error("Environmental error: no available transport.")}Jc.prototype.g=function(t,e){return new Wt(t,e)};function Wt(t,e){Je.call(this),this.g=new mS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ll(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ll(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ko(this)}Xe(Wt,Je);Wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=TS(t,null,t.Y),Xh(t)};Wt.prototype.close=function(){qg(this.g)};Wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Og(t),t=n);e.j.push(new Hb(e.fb++,t)),e.H==3&&Xh(e)};Wt.prototype.N=function(){this.g.h=null,delete this.j,qg(this.g),delete this.g,Wt.$.N.call(this)};function PS(t){Ug.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(PS,Ug);function CS(){$g.call(this),this.status=1}Xe(CS,$g);function ko(t){this.g=t}Xe(ko,AS);ko.prototype.Ba=function(){ot(this.g,"a")};ko.prototype.Aa=function(t){ot(this.g,new PS(t))};ko.prototype.za=function(t){ot(this.g,new CS)};ko.prototype.ya=function(){ot(this.g,"b")};function oN(){this.blockSize=-1}function mn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(mn,oN);mn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _f(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}mn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)_f(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){_f(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){_f(this,r),i=0;break}}this.h=i,this.i+=e};mn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function oe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var aN={};function Kg(t){return-128<=t&&128>t?mb(t,function(e){return new oe([e|0],0>e?-1:0)}):new oe([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return Gs;if(0>t)return rt(Cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=$p;return new oe(e,0)}function RS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return rt(RS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),r=Gs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Cn(Math.pow(e,s)),r=r.R(s).add(Cn(o))):(r=r.R(n),r=r.add(Cn(o)))}return r}var $p=4294967296,Gs=Kg(0),jp=Kg(1),Yv=Kg(16777216);O=oe.prototype;O.ea=function(){if(Zt(this))return-rt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:$p+r)*e,e*=$p}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(Zt(this))return"-"+rt(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,r="";;){var i=Zc(n,e).g;n=Xc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Wn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Zt(t){return t.h==-1}O.X=function(t){return t=Xc(this,t),Zt(t)?-1:Wn(t)?0:1};function rt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new oe(n,~t.h).add(jp)}O.abs=function(){return Zt(this)?rt(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function Xc(t,e){return t.add(rt(e))}O.R=function(t){if(Wn(this)||Wn(t))return Gs;if(Zt(this))return Zt(t)?rt(this).R(rt(t)):rt(rt(this).R(t));if(Zt(t))return rt(this.R(rt(t)));if(0>this.X(Yv)&&0>t.X(Yv))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Mu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Mu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Mu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Mu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new oe(n,0)};function Mu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Jo(t,e){this.g=t,this.h=e}function Zc(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new Jo(Gs,Gs);if(Zt(t))return e=Zc(rt(t),e),new Jo(rt(e.g),rt(e.h));if(Zt(e))return e=Zc(t,rt(e)),new Jo(rt(e.g),e.h);if(30<t.g.length){if(Zt(t)||Zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jp,r=e;0>=r.X(t);)n=Jv(n),r=Jv(r);var i=ps(n,1),s=ps(r,1);for(r=ps(r,2),n=ps(n,2);!Wn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ps(r,1),n=ps(n,1)}return e=Xc(t,i.R(e)),new Jo(i,e)}for(i=Gs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Cn(n),o=s.R(e);Zt(o)||0<o.X(t);)n-=r,s=Cn(n),o=s.R(e);Wn(s)&&(s=jp),i=i.add(s),t=Xc(t,o)}return new Jo(i,t)}O.gb=function(t){return Zc(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new oe(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new oe(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new oe(n,this.h^t.h)};function Jv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new oe(n,t.h)}function ps(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new oe(i,t.h)}Jc.prototype.createWebChannel=Jc.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;qh.NO_ERROR=0;qh.TIMEOUT=8;qh.HTTP_ERROR=6;WT.COMPLETE="complete";GT.EventType=ql;ql.OPEN="a";ql.CLOSE="b";ql.ERROR="c";ql.MESSAGE="d";Je.prototype.listen=Je.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;mn.prototype.digest=mn.prototype.l;mn.prototype.reset=mn.prototype.reset;mn.prototype.update=mn.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=Cn;oe.fromString=RS;var lN=function(){return new Jc},uN=function(){return Bh()},yf=qh,cN=WT,hN=os,Xv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Lu=GT,dN=ke,fN=mn,Ks=oe;const Zv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Mh("@firebase/firestore");function ws(){return Br.logLevel}function pN(t){Br.setLogLevel(t)}function C(t,...e){if(Br.logLevel<=Y.DEBUG){const n=e.map(Hg);Br.debug(`Firestore (${xo}): ${t}`,...n)}}function Ve(t,...e){if(Br.logLevel<=Y.ERROR){const n=e.map(Hg);Br.error(`Firestore (${xo}): ${t}`,...n)}}function gn(t,...e){if(Br.logLevel<=Y.WARN){const n=e.map(Hg);Br.warn(`Firestore (${xo}): ${t}`,...n)}}function Hg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+t;throw Ve(e),new Error(e)}function U(t,e){t||M()}function mN(t,e){t||M()}function D(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class _N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yN{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ye;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ye,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ye)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new kS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new He(e)}}class vN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(U(typeof n.token=="string"),this.R=n.token,new IN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function lo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function bS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new ye(0,0))}static max(){return new $(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class X extends gl{construct(e,n,r){return new X(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new X(n)}static emptyPath(){return new X([])}}const SN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends gl{construct(e,n,r){return new ge(e,n,r)}static isValidIdentifier(e){return SN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(n)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(X.fromString(e))}static fromName(e){return new N(X.fromString(e).popFirst(5))}static empty(){return new N(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return X.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new X(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function zp(t){return t.fields.find(e=>e.kind===2)}function _i(t){return t.fields.filter(e=>e.kind!==2)}eh.UNKNOWN_ID=-1;class sc{constructor(e,n){this.fieldPath=e,this.kind=n}}class _l{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new _l(0,Gt.min())}}function NS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new Gt(i,N.empty(),e)}function DS(t){return new Gt(t.readTime,t.key,-1)}class Gt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gt($.min(),N.empty(),-1)}static max(){return new Gt($.max(),N.empty(),-1)}}function Qg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==OS)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Ye,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ba(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Yg(r.target.error);this.V.reject(new ba(e,i))}}static open(e,n,r,i){try{return new Zh(n,e.transaction(i,r))}catch(s){throw new ba(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new PN(n)}}class tn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,tn.S(we())===12.2&&Ve("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),yi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!il())return!1;if(tn.C())return!0;const e=we(),n=tn.S(e),r=0<n&&n<10,i=tn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ba(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new P(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new P(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ba(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Zh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),I.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class AN{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return yi(this.k.delete())}}class ba extends P{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function si(t){return t.name==="IndexedDbTransactionError"}class PN{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),yi(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),yi(this.store.add(e))}get(e){return yi(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),yi(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),yi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new I((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=Yg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new AN(a),u=n(a.primaryKey,a.value,l);if(u instanceof I){const c=u.catch(h=>(l.done(),I.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function yi(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Yg(r.target.error);n(i)}})}let ew=!1;function Yg(t){const e=tn.S(we());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new P("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ew||(ew=!0,setTimeout(()=>{throw r},0)),r}}return t}class CN{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){C("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){si(n)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await ii(n)}await this.ee(6e4)})}}class RN{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(C("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=DS(s);Qg(o,r)>0&&(r=o)}),new Gt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Dt._e=-1;function Ql(t){return t==null}function yl(t){return t===0&&1/t==-1/0}function MS(t){return typeof t=="number"&&Number.isInteger(t)&&!yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tw(e)),e=kN(t.get(n),e);return tw(e)}function kN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function tw(t){return t+""}function Rn(t){const e=t.length;if(U(e>=2),e===2)return U(t.charAt(0)===""&&t.charAt(1)===""),X.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&M(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:M()}s=o+2}return new X(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t,e){return[t,Tt(e)]}function LS(t,e,n){return[t,Tt(e),n]}const xN={},bN=["prefixPath","collectionGroup","readTime","documentId"],NN=["prefixPath","collectionGroup","documentId"],DN=["collectionGroup","readTime","prefixPath","documentId"],ON=["canonicalId","targetId"],VN=["targetId","path"],MN=["path","targetId"],LN=["collectionId","parent"],FN=["indexId","uid"],UN=["uid","sequenceNumber"],$N=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],jN=["indexId","uid","orderedDocumentKey"],zN=["userId","collectionPath","documentId"],BN=["userId","collectionPath","largestBatchId"],qN=["userId","collectionGroup","largestBatchId"],FS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],WN=[...FS,"documentOverlays"],US=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$S=US,GN=[...$S,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends VS{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function Ze(t,e){const n=D(t);return tn.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,n,r,i,s){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iw(this.data.getIterator())}getIteratorFrom(e){return new iw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ae(this.comparator);return n.data=e,n}}class iw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ms(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new ae(ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zS("Invalid base64 string: "+s):s}}(e);return new Be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const HN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(U(!!t),typeof t=="string"){let e=0;const n=HN.exec(t);if(U(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jg(t){const e=t.mapValue.fields.__previous_value__;return ed(e)?Jg(e):e}function vl(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ac={nullValue:"NULL_VALUE"};function Wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ed(t)?4:BS(t)?9007199254740991:10:M()}function Mn(t,e){if(t===e)return!0;const n=Wi(t);if(n!==Wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vl(t).isEqual(vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qr(i.timestampValue),a=qr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wr(i.bytesValue).isEqual(Wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),a=Re(s.doubleValue);return o===a?yl(o)===yl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return lo(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rw(o)!==rw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Mn(o[l],a[l])))return!1;return!0}(t,e);default:return M()}}function wl(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Kr(t,e){if(t===e)return 0;const n=Wi(t),r=Wi(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Re(s.integerValue||s.doubleValue),l=Re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return sw(t.timestampValue,e.timestampValue);case 4:return sw(vl(t),vl(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Wr(s),l=Wr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=G(a[u],l[u]);if(c!==0)return c}return G(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=G(Re(s.latitude),Re(o.latitude));return a!==0?a:G(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Kr(a[u],l[u]);if(c)return c}return G(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ar.mapValue&&o===Ar.mapValue)return 0;if(s===Ar.mapValue)return 1;if(o===Ar.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=G(l[h],c[h]);if(d!==0)return d;const f=Kr(a[l[h]],u[c[h]]);if(f!==0)return f}return G(l.length,c.length)}(t.mapValue,e.mapValue);default:throw M()}}function sw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=qr(t),r=qr(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function uo(t){return qp(t)}function qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qp(n.fields[o])}`;return i+"}"}(t.mapValue):M()}function Gi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wp(t){return!!t&&"integerValue"in t}function Il(t){return!!t&&"arrayValue"in t}function ow(t){return!!t&&"nullValue"in t}function aw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lc(t){return!!t&&"mapValue"in t}function Na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Na(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function YN(t){return"nullValue"in t?ac:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Gi(Gr.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:M()}function JN(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Gi(Gr.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Ar:M()}function lw(t,e){const n=Kr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function uw(t,e){const n=Kr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(n)}setAll(e){let n=ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());lc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];lc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){as(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new it(Na(this.value))}}function qS(t){const e=[];return as(t.fields,(n,r)=>{const i=new ge([n]);if(lc(r)){const s=qS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new fe(e,0,$.min(),$.min(),$.min(),it.empty(),0)}static newFoundDocument(e,n,r,i){return new fe(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new fe(e,2,n,$.min(),$.min(),it.empty(),0)}static newUnknownDocument(e,n){return new fe(e,3,n,$.min(),$.min(),it.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.position=e,this.inclusive=n}}function cw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=Kr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n="asc"){this.field=e,this.dir=n}}function XN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{}class Z extends WS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZN(e,n,r):n==="array-contains"?new nD(e,r):n==="in"?new JS(e,r):n==="not-in"?new rD(e,r):n==="array-contains-any"?new iD(e,r):new Z(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eD(e,r):new tD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&Wi(this.value)===Wi(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ie extends WS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ie(e,n)}matches(e){return co(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function co(t){return t.op==="and"}function Gp(t){return t.op==="or"}function Xg(t){return GS(t)&&co(t)}function GS(t){for(const e of t.filters)if(e instanceof ie)return!1;return!0}function Kp(t){if(t instanceof Z)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(Xg(t))return t.filters.map(e=>Kp(e)).join(",");{const e=t.filters.map(n=>Kp(n)).join(",");return`${t.op}(${e})`}}function KS(t,e){return t instanceof Z?function(r,i){return i instanceof Z&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&KS(o,i.filters[a]),!0):!1}(t,e):void M()}function HS(t,e){const n=t.filters.concat(e);return ie.create(n,t.op)}function QS(t){return t instanceof Z?function(n){return`${n.field.canonicalString()} ${n.op} ${uo(n.value)}`}(t):t instanceof ie?function(n){return n.op.toString()+" {"+n.getFilters().map(QS).join(" ,")+"}"}(t):"Filter"}class ZN extends Z{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class eD extends Z{constructor(e,n){super(e,"in",n),this.keys=YS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tD extends Z{constructor(e,n){super(e,"not-in",n),this.keys=YS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function YS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class nD extends Z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Il(n)&&wl(n.arrayValue,this.value)}}class JS extends Z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class rD extends Z{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class iD extends Z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Il(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Hp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sD(t,e,n,r,i,s,o)}function Ki(t){const e=D(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),e.ce=n}return e.ce}function Yl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hw(t.startAt,e.startAt)&&hw(t.endAt,e.endAt)}function th(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function nh(t,e){return t.filters.filter(n=>n instanceof Z&&n.field.isEqual(e))}function dw(t,e,n){let r=ac,i=!0;for(const s of nh(t,e)){let o=ac,a=!0;switch(s.op){case"<":case"<=":o=YN(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ac}lw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];lw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function fw(t,e,n){let r=Ar,i=!0;for(const s of nh(t,e)){let o=Ar,a=!0;switch(s.op){case">=":case">":o=JN(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ar}uw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];uw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function XS(t,e,n,r,i,s,o,a){return new or(t,e,n,r,i,s,o,a)}function bo(t){return new or(t)}function pw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zg(t){return t.collectionGroup!==null}function Hs(t){const e=D(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ae(ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new El(s,r))}),n.has(ge.keyField().canonicalString())||e.le.push(new El(ge.keyField(),r))}return e.le}function St(t){const e=D(t);return e.he||(e.he=oD(e,Hs(t))),e.he}function oD(t,e){if(t.limitType==="F")return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new El(i.field,s)});const n=t.endAt?new Hr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hr(t.startAt.position,t.startAt.inclusive):null;return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qp(t,e){const n=t.filters.concat([e]);return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rh(t,e,n){return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jl(t,e){return Yl(St(t),St(e))&&t.limitType===e.limitType}function ZS(t){return`${Ki(St(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>QS(i)).join(", ")}]`),Ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>uo(i)).join(",")),`Target(${r})`}(St(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Hs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=cw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Hs(r),i)||r.endAt&&!function(o,a,l){const u=cw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Hs(r),i))}(t,e)}function e1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function t1(t){return(e,n)=>{let r=!1;for(const i of Hs(t)){const s=aD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aD(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Kr(l,u):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=new ue(N.comparator);function Vt(){return lD}const n1=new ue(N.comparator);function ga(...t){let e=n1;for(const n of t)e=e.insert(n.key,n);return e}function r1(t){let e=n1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kn(){return Da()}function i1(){return Da()}function Da(){return new oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const uD=new ue(N.comparator),cD=new ae(N.comparator);function H(...t){let e=cD;for(const n of t)e=e.add(n);return e}const hD=new ae(G);function e_(){return hD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yl(e)?"-0":e}}function o1(t){return{integerValue:""+t}}function a1(t,e){return MS(e)?o1(e):s1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this._=void 0}}function dD(t,e,n){return t instanceof ho?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ed(s)&&(s=Jg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Hi?u1(t,e):t instanceof Qi?c1(t,e):function(i,s){const o=l1(i,s),a=mw(o)+mw(i.Ie);return Wp(o)&&Wp(i.Ie)?o1(a):s1(i.serializer,a)}(t,e)}function fD(t,e,n){return t instanceof Hi?u1(t,e):t instanceof Qi?c1(t,e):n}function l1(t,e){return t instanceof fo?function(r){return Wp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ho extends td{}class Hi extends td{constructor(e){super(),this.elements=e}}function u1(t,e){const n=h1(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qi extends td{constructor(e){super(),this.elements=e}}function c1(t,e){let n=h1(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class fo extends td{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function mw(t){return Re(t.integerValue||t.doubleValue)}function h1(t){return Il(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this.field=e,this.transform=n}}function pD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Hi&&i instanceof Hi||r instanceof Qi&&i instanceof Qi?lo(r.elements,i.elements,Mn):r instanceof fo&&i instanceof fo?Mn(r.Ie,i.Ie):r instanceof ho&&i instanceof ho}(t.transform,e.transform)}class mD{constructor(e,n){this.version=e,this.transformResults=n}}class _e{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nd{}function d1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Do(t.key,_e.none()):new No(t.key,t.data,_e.none());{const n=t.data,r=it.empty();let i=new ae(ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ar(t.key,r,new Ot(i.toArray()),_e.none())}}function gD(t,e,n){t instanceof No?function(i,s,o){const a=i.value.clone(),l=_w(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(i,s,o){if(!uc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=_w(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(f1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oa(t,e,n,r){return t instanceof No?function(s,o,a,l){if(!uc(s.precondition,o))return a;const u=s.value.clone(),c=yw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(s,o,a,l){if(!uc(s.precondition,o))return a;const u=yw(s.fieldTransforms,l,o),c=o.data;return c.setAll(f1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return uc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function _D(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=l1(r.transform,i||null);s!=null&&(n===null&&(n=it.empty()),n.set(r.field,s))}return n||null}function gw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&lo(r,i,(s,o)=>pD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class No extends nd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ar extends nd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function f1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _w(t,e,n){const r=new Map;U(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fD(o,a,n[i]))}return r}function yw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dD(s,o,e))}return r}class Do extends nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t_ extends nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=i1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=d1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(n,r)=>gw(n,r))&&lo(this.baseMutations,e.baseMutations,(n,r)=>gw(n,r))}}class r_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){U(e.mutations.length===r.length);let i=function(){return uD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new r_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,te;function p1(t){switch(t){default:return M();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function m1(t){if(t===void 0)return Ve("GRPC error has no .code"),T.UNKNOWN;switch(t){case Fe.OK:return T.OK;case Fe.CANCELLED:return T.CANCELLED;case Fe.UNKNOWN:return T.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return T.INTERNAL;case Fe.UNAVAILABLE:return T.UNAVAILABLE;case Fe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Fe.NOT_FOUND:return T.NOT_FOUND;case Fe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Fe.ABORTED:return T.ABORTED;case Fe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Fe.DATA_LOSS:return T.DATA_LOSS;default:return M()}}(te=Fe||(Fe={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new Ks([4294967295,4294967295],0);function vw(t){const e=g1().encode(t),n=new fN;return n.update(e),new Uint8Array(n.digest())}function ww(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ks([n,r],0),new Ks([i,s],0)]}class s_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ks.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ks.fromNumber(r)));return i.compare(vD)===1&&(i=new Ks([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=vw(e),[r,i]=ww(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new s_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=vw(e),[r,i]=ww(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new eu($.min(),i,new ue(G),Vt(),H())}}class tu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tu(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class _1{constructor(e,n){this.targetId=e,this.fe=n}}class y1{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Iw{constructor(){this.ge=0,this.pe=Tw(),this.ye=Be.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=H(),n=H(),r=H();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new tu(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Tw()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,U(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class wD{constructor(e){this.Be=e,this.ke=new Map,this.qe=Vt(),this.Qe=Ew(),this.Ke=new ue(G)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(th(s))if(r===0){const o=new N(s.path);this.We(n,o,fe.newNoDocument(o,$.min()))}else U(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Wr(r).toUint8Array()}catch(l){if(l instanceof zS)return gn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new s_(o,i,s)}catch(l){return gn(l instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&th(a.target)){const l=new N(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,fe.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=H();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new eu(e,n,this.Ke,this.qe,r);return this.qe=Vt(),this.Qe=Ew(),this.Ke=new ue(G),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Iw,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ae(G),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Iw),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Ew(){return new ue(N.comparator)}function Tw(){return new ue(N.comparator)}const ID={asc:"ASCENDING",desc:"DESCENDING"},ED={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TD={and:"AND",or:"OR"};class SD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yp(t,e){return t.useProto3Json||Ql(e)?e:{value:e}}function po(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AD(t,e){return po(t,e.toTimestamp())}function Me(t){return U(!!t),$.fromTimestamp(function(n){const r=qr(n);return new ye(r.seconds,r.nanos)}(t))}function o_(t,e){return Jp(t,e).canonicalString()}function Jp(t,e){const n=function(i){return new X(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function w1(t){const e=X.fromString(t);return U(x1(e)),e}function Tl(t,e){return o_(t.databaseId,e.path)}function On(t,e){const n=w1(e);if(n.get(1)!==t.databaseId.projectId)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(T1(n))}function I1(t,e){return o_(t.databaseId,e)}function E1(t){const e=w1(t);return e.length===4?X.emptyPath():T1(e)}function Xp(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T1(t){return U(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sw(t,e,n){return{name:Tl(t,e),fields:n.value.mapValue.fields}}function S1(t,e,n){const r=On(t,e.name),i=Me(e.updateTime),s=e.createTime?Me(e.createTime):$.min(),o=new it({mapValue:{fields:e.fields}}),a=fe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function PD(t,e){return"found"in e?function(r,i){U(!!i.found),i.found.name,i.found.updateTime;const s=On(r,i.found.name),o=Me(i.found.updateTime),a=i.found.createTime?Me(i.found.createTime):$.min(),l=new it({mapValue:{fields:i.found.fields}});return fe.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){U(!!i.missing),U(!!i.readTime);const s=On(r,i.missing),o=Me(i.readTime);return fe.newNoDocument(s,o)}(t,e):M()}function CD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(U(c===void 0||typeof c=="string"),Be.fromBase64String(c||"")):(U(c===void 0||c instanceof Uint8Array),Be.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:m1(u.code);return new P(c,u.message||"")}(o);n=new y1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=On(t,r.document.name),s=Me(r.document.updateTime),o=r.document.createTime?Me(r.document.createTime):$.min(),a=new it({mapValue:{fields:r.document.fields}}),l=fe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new cc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=On(t,r.document),s=r.readTime?Me(r.readTime):$.min(),o=fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=On(t,r.document),s=r.removedTargetIds||[];n=new cc([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yD(i,s),a=r.targetId;n=new _1(a,o)}}return n}function Sl(t,e){let n;if(e instanceof No)n={update:Sw(t,e.key,e.value)};else if(e instanceof Do)n={delete:Tl(t,e.key)};else if(e instanceof ar)n={update:Sw(t,e.key,e.data),updateMask:DD(e.fieldMask)};else{if(!(e instanceof t_))return M();n={verify:Tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(t,e.precondition)),n}function Zp(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?_e.updateTime(Me(s.updateTime)):s.exists!==void 0?_e.exists(s.exists):_e.none()}(e.currentDocument):_e.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)U(a.setToServerValue==="REQUEST_TIME"),l=new ho;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new Hi(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Qi(c)}else"increment"in a?l=new fo(o,a.increment):M();const u=ge.fromServerFormat(a.fieldPath);return new Zl(u,l)}(t,i)):[];if(e.update){e.update.name;const i=On(t,e.update.name),s=new it({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Ot(u.map(c=>ge.fromServerFormat(c)))}(e.updateMask);return new ar(i,s,o,n,r)}return new No(i,s,n,r)}if(e.delete){const i=On(t,e.delete);return new Do(i,n)}if(e.verify){const i=On(t,e.verify);return new t_(i,n)}return M()}function RD(t,e){return t&&t.length>0?(U(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Me(i.updateTime):Me(s);return o.isEqual($.min())&&(o=Me(s)),new mD(o,i.transformResults||[])}(n,e))):[]}function A1(t,e){return{documents:[I1(t,e.path)]}}function P1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=I1(t,i);const s=function(u){if(u.length!==0)return k1(ie.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Es(d.field),direction:xD(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Yp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function C1(t){let e=E1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){U(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=R1(h);return d instanceof ie&&Xg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new El(Ts(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ql(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Hr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Hr(f,d)}(n.endAt)),XS(e,i,o,s,a,"F",l,u)}function kD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function R1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ts(n.unaryFilter.field);return Z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ts(n.unaryFilter.field);return Z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(n){return Z.create(Ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ie.create(n.compositeFilter.filters.map(r=>R1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(t):M()}function xD(t){return ID[t]}function bD(t){return ED[t]}function ND(t){return TD[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Ts(t){return ge.fromServerFormat(t.fieldPath)}function k1(t){return t instanceof Z?function(n){if(n.op==="=="){if(aw(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(ow(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(aw(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(ow(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:bD(n.op),value:n.value}}}(t):t instanceof ie?function(n){const r=n.getFilters().map(i=>k1(i));return r.length===1?r[0]:{compositeFilter:{op:ND(n.op),filters:r}}}(t):M()}function DD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.ct=e}}function OD(t,e){let n;if(e.document)n=S1(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),i=Ji(e.noDocument.readTime);n=fe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const r=N.fromSegments(e.unknownDocument.path),i=Ji(e.unknownDocument.version);n=fe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ye(i[0],i[1]);return $.fromTimestamp(s)}(e.readTime)),n}function Aw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ih(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Tl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:po(s,o.version.toTimestamp()),createTime:po(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Yi(e.version)};else{if(!e.isUnknownDocument())return M();r.unknownDocument={path:n.path.toArray(),version:Yi(e.version)}}return r}function ih(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Yi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ji(t){const e=new ye(t.seconds,t.nanoseconds);return $.fromTimestamp(e)}function vi(t,e){const n=(e.baseMutations||[]).map(s=>Zp(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Zp(t.ct,s)),i=ye.fromMillis(e.localWriteTimeMs);return new n_(e.batchId,i,n,r)}function ya(t){const e=Ji(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ji(t.lastLimboFreeSnapshotVersion):$.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return U(s.documents.length===1),St(bo(E1(s.documents[0])))}(t.query):function(s){return St(C1(s))}(t.query),new Gn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Be.fromBase64String(t.resumeToken))}function N1(t,e){const n=Yi(e.snapshotVersion),r=Yi(e.lastLimboFreeSnapshotVersion);let i;i=th(e.target)?A1(t.ct,e.target):P1(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ki(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function a_(t){const e=C1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rh(e,e.limit,"L"):e}function vf(t,e){return new i_(e.largestBatchId,Zp(t.ct,e.overlayMutation))}function Pw(t,e){const n=e.path.lastSegment();return[t,Tt(e.path.popLast()),n]}function Cw(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Yi(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{getBundleMetadata(e,n){return Rw(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ji(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Rw(e).put(function(i){return{bundleId:i.id,createTime:Yi(Me(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return kw(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:a_(s.bundledQuery),readTime:Ji(s.readTime)}}(r)})}saveNamedQuery(e,n){return kw(e).put(function(i){return{name:i.name,readTime:Yi(Me(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Rw(t){return Ze(t,"bundles")}function kw(t){return Ze(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new rd(e,r)}getOverlay(e,n){return Xo(e).get(Pw(this.userId,n)).next(r=>r?vf(this.serializer,r):null)}getOverlays(e,n){const r=kn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new i_(n,o);i.push(this.ht(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Tt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Xo(e).H("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=kn(),s=Tt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=vf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=kn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Xo(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=vf(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return Xo(e).put(function(i,s,o){const[a,l,u]=Pw(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Sl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Xo(t){return Ze(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Re(e.integerValue));else if("doubleValue"in e){const r=Re(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),yl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Wr(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?BS(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):M()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),N.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}wi.bt=new wi;function MD(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function xw(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=MD(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class LD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=xw(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=xw(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class FD{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class UD{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Zo{constructor(){this.Gt=new LD,this.zt=new FD(this.Gt),this.jt=new UD(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ii(this.indexId,this.documentKey,this.arrayValue,r)}}function dr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=bw(t.arrayValue,e.arrayValue),n!==0?n:(n=bw(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function bw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.Yt=new ae((n,r)=>ge.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(U(e.collectionGroup===this.collectionId),this.en)return!1;const n=zp(e);if(n!==void 0&&!this.nn(n))return!1;const r=_i(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ae(ge.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new sc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new sc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new sc(r.field,r.dir==="asc"?0:1)));return new eh(eh.UNKNOWN_ID,this.collectionId,n,_l.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){var e,n;if(U(t instanceof Z||t instanceof ie),t instanceof Z){if(t instanceof JS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Z.create(t.field,"==",s)))||[];return ie.create(i,"or")}return t}const r=t.filters.map(i=>D1(i));return ie.create(r,t.op)}function $D(t){if(t.getFilters().length===0)return[];const e=nm(D1(t));return U(O1(e)),em(e)||tm(e)?[e]:e.getFilters()}function em(t){return t instanceof Z}function tm(t){return t instanceof ie&&Xg(t)}function O1(t){return em(t)||tm(t)||function(n){if(n instanceof ie&&Gp(n)){for(const r of n.getFilters())if(!em(r)&&!tm(r))return!1;return!0}return!1}(t)}function nm(t){if(U(t instanceof Z||t instanceof ie),t instanceof Z)return t;if(t.filters.length===1)return nm(t.filters[0]);const e=t.filters.map(r=>nm(r));let n=ie.create(e,t.op);return n=sh(n),O1(n)?n:(U(n instanceof ie),U(co(n)),U(n.filters.length>1),n.filters.reduce((r,i)=>l_(r,i)))}function l_(t,e){let n;return U(t instanceof Z||t instanceof ie),U(e instanceof Z||e instanceof ie),n=t instanceof Z?e instanceof Z?function(i,s){return ie.create([i,s],"and")}(t,e):Dw(t,e):e instanceof Z?Dw(e,t):function(i,s){if(U(i.filters.length>0&&s.filters.length>0),co(i)&&co(s))return HS(i,s.getFilters());const o=Gp(i)?i:s,a=Gp(i)?s:i,l=o.filters.map(u=>l_(u,a));return ie.create(l,"or")}(t,e),sh(n)}function Dw(t,e){if(co(e))return HS(e,t.getFilters());{const n=e.filters.map(r=>l_(t,r));return ie.create(n,"or")}}function sh(t){if(U(t instanceof Z||t instanceof ie),t instanceof Z)return t;const e=t.getFilters();if(e.length===1)return sh(e[0]);if(GS(t))return t;const n=e.map(i=>sh(i)),r=[];return n.forEach(i=>{i instanceof Z?r.push(i):i instanceof ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ie.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this._n=new u_}addToCollectionParentIndex(e,n){return this._n.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Gt.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Gt.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class u_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ae(X.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ae(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Uint8Array(0);class zD{constructor(e,n){this.databaseId=n,this.an=new u_,this.un=new oi(r=>Ki(r),(r,i)=>Yl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Tt(i)};return Ow(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[bS(n),""],!1,!0);return Ow(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Rn(o.parent))}return r})}addFieldIndex(e,n){const r=ea(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=_s(e);return s.next(a=>{o.put(Cw(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ea(e),i=_s(e),s=gs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ea(e),r=gs(e),i=_s(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return I.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Nw(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=gs(e);let i=!0;const s=new Map;return I.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=H();const a=[];return I.forEach(s,(l,u)=>{C("IndexedDbIndexManager",`Using index ${function(p){return`id=${p.indexId}|cg=${p.collectionGroup}|f=${p.fields.map(S=>`${S.fieldPath}:${S.kind}`).join(",")}`}(l)} to execute ${Ki(n)}`);const c=function(p,S){const A=zp(S);if(A===void 0)return null;for(const E of nh(p,A.fieldPath))switch(E.op){case"array-contains-any":return E.value.arrayValue.values||[];case"array-contains":return[E.value]}return null}(u,l),h=function(p,S){const A=new Map;for(const E of _i(S))for(const x of nh(p,E.fieldPath))switch(x.op){case"==":case"in":A.set(E.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return A.set(E.fieldPath.canonicalString(),x.value),Array.from(A.values())}return null}(u,l),d=function(p,S){const A=[];let E=!0;for(const x of _i(S)){const b=x.kind===0?dw(p,x.fieldPath,p.startAt):fw(p,x.fieldPath,p.startAt);A.push(b.value),E&&(E=b.inclusive)}return new Hr(A,E)}(u,l),f=function(p,S){const A=[];let E=!0;for(const x of _i(S)){const b=x.kind===0?fw(p,x.fieldPath,p.endAt):dw(p,x.fieldPath,p.endAt);A.push(b.value),E&&(E=b.inclusive)}return new Hr(A,E)}(u,l),_=this.hn(l,u,d),v=this.hn(l,u,f),w=this.Pn(l,u,h),g=this.In(l.indexId,c,_,d.inclusive,v,f.inclusive,w);return I.forEach(g,m=>r.j(m,n.limit).next(p=>{p.forEach(S=>{const A=N.fromSegments(S.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return I.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=$D(ie.create(e.filters,"and")).map(r=>Hp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.Tn(n[h/u]):Uu,f=this.En(e,d,r[h%u],i),_=this.dn(e,d,s[h%u],o),v=a.map(w=>this.En(e,d,w,!0));c.push(...this.createRange(f,_,v))}return c}En(e,n,r,i){const s=new Ii(e,N.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Ii(e,N.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new Nw(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return I.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ae(ge.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Zo;for(const i of _i(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);wi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Zo;return wi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Zo;return wi.bt.Pt(Gi(this.databaseId,n),r.Ht(function(s){const o=_i(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Zo);let s=0;for(const o of _i(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Il(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);wi.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Zo;l.seed(a.Wt()),wi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof Z&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ea(e),i=_s(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new _l(h.sequenceNumber,new Gt(Ji(h.readTime),new N(Rn(h.documentKey)),h.largestBatchId)):_l.empty(),f=c.fields.map(([_,v])=>new sc(ge.fromServerFormat(_),v));return new eh(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:G(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ea(e),s=_s(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,l=>s.put(Cw(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?I.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return gs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return gs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=gs(e);let s=new ae(dr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Ii(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ae(dr);const i=this.An(n,e);if(i==null)return r;const s=zp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Il(o))for(const a of o.arrayValue.values||[])r=r.add(new Ii(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Ii(n.indexId,e.key,Uu,i));return r}wn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),_=u.getIterator();let v=ms(f),w=ms(_);for(;v||w;){let g=!1,m=!1;if(v&&w){const p=c(v,w);p<0?m=!0:p>0&&(g=!0)}else v!=null?m=!0:g=!0;g?(h(w),w=ms(_)):m?(d(v),v=ms(f)):(v=ms(f),w=ms(_))}}(i,s,dr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),I.waitFor(o)}gn(e){let n=1;return _s(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>dr(o,a)).filter((o,a,l)=>!a||dr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=dr(o,e),l=dr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Uu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Uu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return dr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Vw)}getMinOffset(e,n){return I.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||M())).next(Vw)}}function Ow(t){return Ze(t,"collectionParents")}function gs(t){return Ze(t,"indexEntries")}function ea(t){return Ze(t,"indexConfiguration")}function _s(t){return Ze(t,"indexState")}function Vw(t){U(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Qg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Gt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class kt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{U(a===1)}));const u=[];for(const c of n.mutations){const h=LS(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return I.waitFor(s).next(()=>u)}function oh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw M();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(41943040,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);class id{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){U(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new id(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ss(e),o=fr(e);return o.add({}).next(a=>{U(typeof a=="number");const l=new n_(a,n,r,i),u=function(f,_,v){const w=v.baseMutations.map(m=>Sl(f.ct,m)),g=v.mutations.map(m=>Sl(f.ct,m));return{userId:_,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:w,mutations:g}}(this.serializer,this.userId,l),c=[];let h=new ae((d,f)=>G(d.canonicalString(),f.canonicalString()));for(const d of i){const f=LS(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,xN))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),I.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return fr(e).get(n).next(r=>r?(U(r.userId===this.userId),vi(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?I.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return fr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(U(a.batchId>=r),s=vi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return fr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return fr(e).W("userMutationsIndex",n).next(r=>r.map(i=>vi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=oc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ss(e).Y({range:i},(o,a,l)=>{const[u,c,h]=o,d=Rn(c);if(u===this.userId&&n.path.isEqual(d))return fr(e).get(h).next(f=>{if(!f)throw M();U(f.userId===this.userId),s.push(vi(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ae(G);const i=[];return n.forEach(s=>{const o=oc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ss(e).Y({range:a},(u,c,h)=>{const[d,f,_]=u,v=Rn(f);d===this.userId&&s.path.isEqual(v)?r=r.add(_):h.done()});i.push(l)}),I.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=oc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ae(G);return Ss(e).Y({range:o},(l,u,c)=>{const[h,d,f]=l,_=Rn(d);h===this.userId&&r.isPrefixOf(_)?_.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(fr(e).get(s).next(o=>{if(o===null)throw M();U(o.userId===this.userId),r.push(vi(this.serializer,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return V1(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ss(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Rn(s[1]);i.push(l)}else a.done()}).next(()=>{U(i.length===0)})})}containsKey(e,n){return M1(e,this.userId,n)}xn(e){return L1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function M1(t,e,n){const r=oc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ss(t).Y({range:s,J:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function fr(t){return Ze(t,"mutations")}function Ss(t){return Ze(t,"documentMutations")}function L1(t){return Ze(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Xi(0)}static Ln(){return new Xi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Xi(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>$.fromTimestamp(new ye(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ys(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(U(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ys(e).Y((o,a)=>{const l=ya(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ys(e).Y((r,i)=>{const s=ya(i);n(s)})}Bn(e){return Lw(e).get("targetGlobalKey").next(n=>(U(n!==null),n))}kn(e,n){return Lw(e).put("targetGlobalKey",n)}qn(e,n){return ys(e).put(N1(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ki(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ys(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=ya(a);Yl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Ir(e);return n.forEach(o=>{const a=Tt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=Ir(e);return I.forEach(n,s=>{const o=Tt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Ir(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Ir(e);let s=H();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Rn(o[1]),c=new N(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Tt(n.path),i=IDBKeyRange.bound([r],[bS(r)],!1,!0);let s=0;return Ir(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return ys(e).get(n).next(r=>r?ya(r):null)}}function ys(t){return Ze(t,"targets")}function Lw(t){return Ze(t,"targetGlobal")}function Ir(t){return Ze(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw([t,e],[n,r]){const i=G(t,n);return i===0?G(e,r):i}class qD{constructor(e){this.Kn=e,this.buffer=new ae(Fw),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Fw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class WD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){si(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ii(n)}await this.zn(3e5)})}}class GD{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(Dt._e);const r=new qD(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(Mw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mw):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ws()<=Y.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function KD(t,e){return new GD(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n){this.db=e,this.garbageCollector=KD(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return $u(e,r)}removeReference(e,n,r){return $u(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return $u(e,n)}er(e,n){return function(i,s){let o=!1;return L1(i).Z(a=>M1(i,a,s).next(l=>(l&&(o=!0),I.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,$.min()),Ir(e).delete(function(h){return[0,Tt(h.path)]}(o))))});i.push(l)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return $u(e,n)}Xn(e,n){const r=Ir(e);let i,s=Dt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Dt._e&&n(new N(Rn(i)),s),s=u,i=l):s=Dt._e}).next(()=>{s!==Dt._e&&n(new N(Rn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $u(t,e){return Ir(t).put(function(r,i){return{targetId:0,path:Tt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.changes=new oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return di(e).put(r)}removeEntry(e,n,r){return di(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],ih(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=fe.newInvalidDocument(n);return di(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ta(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:fe.newInvalidDocument(n)};return di(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ta(n))},(i,s)=>{r={document:this.nr(n,s),size:oh(s)}}).next(()=>r)}getEntries(e,n){let r=Vt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Vt(),i=new ue(N.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,oh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return I.resolve();let i=new ae(jw);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ta(i.first()),ta(i.last())),o=i.getIterator();let a=o.getNext();return di(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=N.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&jw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(ta(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),ih(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return di(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Vt();for(const h of u){const d=this.nr(N.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Xl(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Vt();const o=$w(n,r),a=$w(n,Gt.max());return di(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.nr(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new YD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Uw(e).get("remoteDocumentGlobalKey").next(n=>(U(!!n),n))}tr(e,n){return Uw(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=OD(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual($.min())))return r}return fe.newInvalidDocument(e)}}function U1(t){return new QD(t)}class YD extends F1{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new oi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ae((s,o)=>G(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Aw(this.ar.serializer,o);i=i.add(s.path.popLast());const u=oh(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Aw(this.ar.serializer,o.convertToNoDocument($.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Uw(t){return Ze(t,"remoteDocumentGlobal")}function di(t){return Ze(t,"remoteDocumentsV14")}function ta(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $w(t,e){const n=e.documentKey.path.toArray();return[t,ih(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function jw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=G(n[s],r[s]),i)return i;return i=G(n.length,r.length),i||(i=G(n[n.length-2],r[r.length-2]),i||G(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Oa(r.mutation,i,Ot.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=kn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ga();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vt();const o=Da(),a=function(){return Da()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ar)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Oa(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new JD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Da();let i=new ue((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ot.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=i1();c.forEach(d=>{if(!s.has(d)){const f=d1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Zg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(kn());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:r1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=ga();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ga();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(h,d){return new or(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,fe.newInvalidDocument(c)))});let a=ga();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Oa(c.mutation,u,Ot.empty(),ye.now()),Xl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Me(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:a_(i.bundledQuery),readTime:Me(i.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.overlays=new ue(N.comparator),this.hr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=kn(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=kn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=kn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new i_(n,r));let s=this.hr.get(n);s===void 0&&(s=H(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.Pr=new ae(Ge.Ir),this.Tr=new ae(Ge.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ge(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new N(new X([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new N(new X([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=H();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return N.comparator(e.key,n.key)||G(e.pr,n.pr)}static Er(e,n){return G(e.pr,n.pr)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ae(Ge.Ir)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ge(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ae(G);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new N(s),0);let a=new ae(G);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){U(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ge(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.vr=e,this.docs=function(){return new ue(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():fe.newInvalidDocument(n))}getEntries(e,n){let r=Vt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():fe.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vt();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Qg(DS(c),r)<=0||(i.has(c.key)||Xl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}Fr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nO(this)}getSize(e){return I.resolve(this.size)}}class nO extends F1{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.persistence=e,this.Mr=new oi(n=>Ki(n),Yl),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Or=0,this.Nr=new c_,this.targetCount=0,this.Lr=Xi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Xi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.qn(n),I.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.Br={},this.overlays={},this.kr=new Dt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new rO(this),this.indexManager=new jD,this.remoteDocumentCache=function(i){return new tO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new b1(n),this.$r=new XD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new eO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new iO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return I.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class iO extends VS{constructor(e){super(),this.currentSequenceNumber=e}}class sd{constructor(e){this.persistence=e,this.zr=new c_,this.jr=null}static Hr(e){return new sd(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const i=N.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.serializer=e}N(e,n,r,i){const s=new Zh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nw,{unique:!0}),l.createObjectStore("documentMutations")}(e),zw(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),zw(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:$.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nw,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return I.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:zN});u.createIndex("collectionPathOverlayIndex",BN,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",qN,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:bN});u.createIndex("documentKeyIndex",NN),u.createIndex("collectionGroupIndex",DN)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:FN}).createIndex("sequenceNumberIndex",UN,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:$N}).createIndex("documentKeyIndex",jN,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=oh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,l=>{U(l.userId===s.userId);const u=vi(this.serializer,l);return V1(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new X(o),u=function(h){return[0,Tt(h)]}(l);s.push(n.get(u).next(c=>c?I.resolve():(h=>n.put({targetId:0,path:Tt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>I.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:LN});const r=n.store("collectionParents"),i=new u_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Tt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new X(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Rn(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=ya(i),o=N1(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new N(X.fromString(h.document.name).popFirst(5)):h.noDocument?N.fromSegments(h.noDocument.path):h.unknownDocument?N.fromSegments(h.unknownDocument.path):M()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>I.waitFor(i))}si(e,n){const r=n.store("mutations"),i=U1(this.serializer),s=new j1(sd.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:H();vi(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),I.forEach(a,(l,u)=>{const c=new He(u),h=rd.lt(this.serializer,c),d=s.getIndexManager(c),f=id.lt(c,this.serializer,d,s.referenceDelegate);return new $1(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Bp(n,Dt._e),l).next()})})}}function zw(t){t.createObjectStore("targetDocuments",{keyPath:VN}).createIndex("documentTargetsIndex",MN,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ON,{unique:!0}),t.createObjectStore("targetGlobal")}const wf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class h_{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=h,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=d=>Promise.resolve(),!h_.D())throw new P(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new HD(this,i),this.Ti=n+"main",this.serializer=new b1(l),this.Ei=new tn(this.Ti,this.ui,new sO(this.serializer)),this.Qr=new BD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=U1(this.serializer),this.$r=new VD,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&Ve("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new P(T.FAILED_PRECONDITION,wf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Dt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ju(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(si(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return na(e).get("owner").next(n=>I.resolve(this.Si(n)))}bi(e){return ju(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ze(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?I.resolve(!0):na(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new P(T.FAILED_PRECONDITION,wf);return!1}}return!(!this.networkEnabled||!this.inForeground)||ju(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Bp(e,Dt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>ju(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return id.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zD(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return rd.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?GN:l===14?$S:l===13?US:l===12?WN:l===11?FS:void M()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Bp(a,this.kr?this.kr.next():Dt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Ve(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new P(T.FAILED_PRECONDITION,OS);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return na(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new P(T.FAILED_PRECONDITION,wf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return na(e).put("owner",n)}static D(){return tn.D()}yi(e){const n=na(e);return n.get("owner").next(r=>this.Si(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ve(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;pT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ve("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Ve("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function na(t){return Ze(t,"owner")}function ju(t){return Ze(t,"clientMetadata")}function d_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new f_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return pT()?8:tn.v(we())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new oO;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ws()<=Y.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(ws()<=Y.DEBUG&&C("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ws()<=Y.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,St(n))):I.resolve())}ji(e,n){if(pw(n))return I.resolve(null);let r=St(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rh(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,rh(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return pw(n)||i.isEqual($.min())?I.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(ws()<=Y.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Is(n)),this.es(e,o,n,NS(i,-1)).next(a=>a))})}Zi(e,n){let r=new ae(t1(e));return n.forEach((i,s)=>{Xl(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ws()<=Y.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Is(n)),this.zi.getDocumentsMatchingQuery(e,n,Gt.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ue(G),this.rs=new oi(s=>Ki(s),Yl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $1(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function B1(t,e,n,r){return new aO(t,e,n,r)}async function q1(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function lO(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=I.resolve();return d.forEach(_=>{f=f.next(()=>c.getEntry(l,_)).next(v=>{const w=u.docVersions.get(_);U(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=H();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function W1(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function uO(t,e){const n=D(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Be.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(v,w,g){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,c)&&a.push(n.Qr.updateTargetData(s,f))});let l=Vt(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(G1(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual($.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function G1(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function cO(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mo(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function go(t,e,n){const r=D(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!si(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function ah(t,e,n){const r=D(t);let i=$.min(),s=H();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=D(l),d=h.rs.get(c);return d!==void 0?I.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,St(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:H())).next(a=>(Q1(r,e1(e),a),{documents:a,hs:s})))}function K1(t,e){const n=D(t),r=D(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function H1(t,e){const n=D(t),r=n.ss.get(e)||$.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,NS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Q1(n,e,i),i))}function Q1(t,e,n){let r=t.ss.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function hO(t,e,n,r){const i=D(t);let s=H(),o=Vt();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const h=e.Is(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,h)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await mo(i,function(c){return St(bo(X.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>G1(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function dO(t,e,n=H()){const r=await mo(t,St(a_(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Me(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Be.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function Bw(t,e){return`firestore_clients_${t}_${e}`}function qw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function If(t,e){return`firestore_targets_${t}_${e}`}class lh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new P(i.error.code,i.error.message))),o?new lh(e,n,i.state,s):(Ve("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Va{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new P(r.error.code,r.error.message))),s?new Va(e,r.state,i):(Ve("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class uh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=e_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=MS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new uh(e,s):(Ve("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class p_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new p_(n.clientId,n.onlineState):(Ve("SharedClientState",`Failed to parse online state: ${e}`),null)}}class rm{constructor(){this.activeTargetIds=e_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ef{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ue(G),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=Bw(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new rm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(Bw(this.persistenceKey,r));if(i){const s=uh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(If(this.persistenceKey,e));if(r){const i=Va.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(If(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void Ve("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Dt._e;if(s!=null)try{const a=JSON.parse(s);U(typeof a=="number"),o=a}catch(a){Ve("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Dt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new lh(this.currentUser,e,n,r),s=qw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=qw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=If(this.persistenceKey,e),s=new Va(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return uh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return lh.Es(new He(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Va.Es(i,n)}xs(e){return p_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=e_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Y1{constructor(){this.no=new rm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new rm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu=null;function Tf(){return zu===null?zu=function(){return 268435456+Math.round(2147483648*Math.random())}():zu++,"0x"+zu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class gO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Tf(),l=this.bo(n,r.toUriEncodedString());C("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(C("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw gn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=pO[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Tf();return new Promise((o,a)=>{const l=new dN;l.setWithCredentials(!0),l.listenOnce(cN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yf.NO_ERROR:const c=l.getResponseJson();C(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case yf.TIMEOUT:C(dt,`RPC '${e}' ${s} timed out`),a(new P(T.DEADLINE_EXCEEDED,"Request time out"));break;case yf.HTTP_ERROR:const h=l.getStatus();if(C(dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(g)>=0?g:T.UNKNOWN}(f.status);a(new P(_,f.message))}else a(new P(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(T.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C(dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);C(dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Tf(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lN(),a=uN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");C(dt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const _=new mO({lo:w=>{f?C(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(C(dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),C(dt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},ho:()=>h.close()}),v=(w,g,m)=>{w.listen(g,p=>{try{m(p)}catch(S){setTimeout(()=>{throw S},0)}})};return v(h,Lu.EventType.OPEN,()=>{f||C(dt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Lu.EventType.CLOSE,()=>{f||(f=!0,C(dt,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),v(h,Lu.EventType.ERROR,w=>{f||(f=!0,gn(dt,`RPC '${e}' stream ${i} transport errored:`,w),_.Vo(new P(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,Lu.EventType.MESSAGE,w=>{var g;if(!f){const m=w.data[0];U(!!m);const p=m,S=p.error||((g=p[0])===null||g===void 0?void 0:g.error);if(S){C(dt,`RPC '${e}' stream ${i} received error:`,S);const A=S.status;let E=function(Q){const F=Fe[Q];if(F!==void 0)return m1(F)}(A),x=S.message;E===void 0&&(E=T.INTERNAL,x="Unknown error status: "+A+" with message "+S.message),f=!0,_.Vo(new P(E,x)),h.close()}else C(dt,`RPC '${e}' stream ${i} received:`,m),_.mo(m)}}),v(a,hN.STAT_EVENT,w=>{w.stat===Xv.PROXY?C(dt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Xv.NOPROXY&&C(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){return typeof window<"u"?window:null}function hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){return new SD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new m_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Ve(n.toString()),Ve("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new P(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _O extends X1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=CD(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Me(o.readTime):$.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Xp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=th(l)?{documents:A1(s,l)}:{query:P1(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=v1(s,o.resumeToken);const u=Yp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=po(s,o.snapshotVersion.toTimestamp());const u=Yp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=kD(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Xp(this.serializer),n.removeTarget=e,this.t_(n)}}class yO extends X1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=RD(e.writeResults,e.commitTime),r=Me(e.commitTime);return this.listener.T_(r,n)}return U(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Xp(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sl(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Jp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(T.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Jp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new P(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class wO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ve(n),this.g_=!1):C("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{ai(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.v_.add(4),await Oo(u),u.x_.set("Unknown"),u.v_.delete(4),await ru(u)}(this))})}),this.x_=new wO(r,i)}}async function ru(t){if(ai(t))for(const e of t.F_)await e(!0)}async function Oo(t){for(const e of t.F_)await e(!1)}function od(t,e){const n=D(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),y_(n)?__(n):Mo(n).Jo()&&g_(n,e))}function _o(t,e){const n=D(t),r=Mo(n);n.C_.delete(e),r.Jo()&&Z1(n,e),n.C_.size===0&&(r.Jo()?r.Xo():ai(n)&&n.x_.set("Unknown"))}function g_(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mo(t).c_(e)}function Z1(t,e){t.O_.Oe(e),Mo(t).l_(e)}function __(t){t.O_=new wD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Mo(t).start(),t.x_.p_()}function y_(t){return ai(t)&&!Mo(t).Ho()&&t.C_.size>0}function ai(t){return D(t).v_.size===0}function eA(t){t.O_=void 0}async function EO(t){t.C_.forEach((e,n)=>{g_(t,e)})}async function TO(t,e){eA(t),y_(t)?(t.x_.S_(e),__(t)):t.x_.set("Unknown")}async function SO(t,e,n){if(t.x_.set("Online"),e instanceof y1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ch(t,r)}else if(e instanceof cc?t.O_.$e(e):e instanceof _1?t.O_.Je(e):t.O_.Ge(e),!n.isEqual($.min()))try{const r=await W1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),Z1(s,l);const h=new Gn(c.target,l,u,c.sequenceNumber);g_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await ch(t,r)}}async function ch(t,e,n){if(!si(e))throw e;t.v_.add(1),await Oo(t),t.x_.set("Offline"),n||(n=()=>W1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await ru(t)})}function tA(t,e){return e().catch(n=>ch(t,n,e))}async function Vo(t){const e=D(t),n=Qr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;AO(e);)try{const i=await cO(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,PO(e,i)}catch(i){await ch(e,i)}nA(e)&&rA(e)}function AO(t){return ai(t)&&t.D_.length<10}function PO(t,e){t.D_.push(e);const n=Qr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function nA(t){return ai(t)&&!Qr(t).Ho()&&t.D_.length>0}function rA(t){Qr(t).start()}async function CO(t){Qr(t).d_()}async function RO(t){const e=Qr(t);for(const n of t.D_)e.I_(n.mutations)}async function kO(t,e,n){const r=t.D_.shift(),i=r_.from(r,e,n);await tA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vo(t)}async function xO(t,e){e&&Qr(t).P_&&await async function(r,i){if(function(o){return p1(o)&&o!==T.ABORTED}(i.code)){const s=r.D_.shift();Qr(r).Zo(),await tA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vo(r)}}(t,e),nA(t)&&rA(t)}async function Gw(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.v_.add(3),await Oo(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await ru(n)}async function im(t,e){const n=D(t);e?(n.v_.delete(2),await ru(n)):e||(n.v_.add(2),await Oo(n),n.x_.set("Unknown"))}function Mo(t){return t.N_||(t.N_=function(n,r,i){const s=D(n);return s.R_(),new _O(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:EO.bind(null,t),To:TO.bind(null,t),u_:SO.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),y_(t)?__(t):t.x_.set("Unknown")):(await t.N_.stop(),eA(t))})),t.N_}function Qr(t){return t.L_||(t.L_=function(n,r,i){const s=D(n);return s.R_(),new yO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:CO.bind(null,t),To:xO.bind(null,t),E_:RO.bind(null,t),T_:kO.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Vo(t)):(await t.L_.stop(),t.D_.length>0&&(C("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new v_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(t,e){if(Ve("AsyncQueue",`${e}: ${t}`),si(t))return new P(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=ga(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.B_=new ue(N.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):M():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yo(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class NO{constructor(){this.queries=new oi(e=>ZS(e),Jl),this.onlineState="Unknown",this.W_=new Set}}async function w_(t,e){const n=D(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new bO,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Lo(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&E_(n)}async function I_(t,e){const n=D(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DO(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&E_(n)}function OO(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function E_(t){t.W_.forEach(e=>{e.next()})}var sm,Hw;(Hw=sm||(sm={})).j_="default",Hw.Cache="cache";class T_{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==sm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n){this.na=e,this.byteLength=n}ra(){return"metadata"in this.na}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.serializer=e}Ps(e){return On(this.serializer,e)}Is(e){return e.metadata.exists?S1(this.serializer,e.document,!1):fe.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Me(e)}}class MO{constructor(e,n,r){this.ia=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=iA(e)}sa(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.na.namedQuery)this.queries.push(e.na.namedQuery);else if(e.na.documentMetadata){this.documents.push({metadata:e.na.documentMetadata}),e.na.documentMetadata.exists||++n;const r=X.fromString(e.na.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.na.document&&(this.documents[this.documents.length-1].document=e.na.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}oa(e){const n=new Map,r=new Qw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||H()).add(s);n.set(o,a)}}return n}async complete(){const e=await hO(this.localStore,new Qw(this.serializer),this.documents,this.ia.id),n=this.oa(this.documents);for(const r of this.queries)await dO(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,_a:this.collectionGroups,aa:e}}}function iA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.key=e}}class oA{constructor(e){this.key=e}}class aA{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=H(),this.mutatedKeys=H(),this.ha=t1(e),this.Pa=new Qs(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Kw,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Xl(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?_!==v&&(r.track({type:3,doc:f}),w=!0):this.da(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.ha(f,l)>0||u&&this.ha(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,h)=>function(f,_){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return v(f)-v(_)}(c.type,h.type)||this.ha(c.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new yo(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Kw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=H(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new oA(r))}),this.la.forEach(r=>{e.has(r)||n.push(new sA(r))}),n}fa(e){this.ua=e.hs,this.la=H();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return yo.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class LO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FO{constructor(e){this.key=e,this.pa=!1}}class UO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new oi(a=>ZS(a),Jl),this.Sa=new Map,this.ba=new Set,this.Da=new ue(N.comparator),this.Ca=new Map,this.va=new c_,this.Fa={},this.Ma=new Map,this.xa=Xi.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function $O(t,e,n=!0){const r=ad(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await lA(r,e,n,!0),i}async function jO(t,e){const n=ad(t);await lA(n,e,!0,!1)}async function lA(t,e,n,r){const i=await mo(t.localStore,St(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await S_(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&od(t.remoteStore,i),a}async function S_(t,e,n,r,i){t.Na=(h,d,f)=>async function(v,w,g,m){let p=w.view.Ta(g);p.Xi&&(p=await ah(v.localStore,w.query,!1).then(({documents:x})=>w.view.Ta(x,p)));const S=m&&m.targetChanges.get(w.targetId),A=m&&m.targetMismatches.get(w.targetId)!=null,E=w.view.applyChanges(p,v.isPrimaryClient,S,A);return om(v,w.targetId,E.Va),E.snapshot}(t,h,d,f);const s=await ah(t.localStore,e,!0),o=new aA(e,s.hs),a=o.Ta(s.documents),l=tu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);om(t,n,u.Va);const c=new LO(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function zO(t,e,n){const r=D(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!Jl(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await go(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&_o(r.remoteStore,i.targetId),vo(r,i.targetId)}).catch(ii)):(vo(r,i.targetId),await go(r.localStore,i.targetId,!0))}async function BO(t,e){const n=D(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_o(n.remoteStore,r.targetId))}async function qO(t,e,n){const r=R_(t);try{const i=await function(o,a){const l=D(o),u=ye.now(),c=a.reduce((f,_)=>f.add(_.key),H());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=Vt(),v=H();return l.os.getEntries(f,c).next(w=>{_=w,_.forEach((g,m)=>{m.isValidDocument()||(v=v.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,_)).next(w=>{h=w;const g=[];for(const m of a){const p=_D(m,h.get(m.key).overlayedDocument);p!=null&&g.push(new ar(m.key,p,qS(p.value.mapValue),_e.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,g,a)}).next(w=>{d=w;const g=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,w.batchId,g)})}).then(()=>({batchId:d.batchId,changes:r1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new ue(G)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await lr(r,i.changes),await Vo(r.remoteStore)}catch(i){const s=Lo(i,"Failed to persist write");n.reject(s)}}async function uA(t,e){const n=D(t);try{const r=await uO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?U(o.pa):i.removedDocuments.size>0&&(U(o.pa),o.pa=!1))}),await lr(n,r,e)}catch(r){await ii(r)}}function Yw(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.Q_)d.G_(a)&&(u=!0)}),u&&E_(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WO(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new ue(N.comparator);o=o.insert(s,fe.newNoDocument(s,$.min()));const a=H().add(s),l=new eu($.min(),new Map,new ue(G),o,a);await uA(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),C_(r)}else await go(r.localStore,e,!1).then(()=>vo(r,e,n)).catch(ii)}async function GO(t,e){const n=D(t),r=e.batch.batchId;try{const i=await lO(n.localStore,e);P_(n,r,null),A_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lr(n,i)}catch(i){await ii(i)}}async function KO(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(U(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);P_(r,e,n),A_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lr(r,i)}catch(i){await ii(i)}}async function HO(t,e){const n=D(t);ai(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ma.get(r)||[];i.push(e),n.Ma.set(r,i)}catch(r){const i=Lo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function A_(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function P_(t,e,n){const r=D(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function vo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||cA(t,r)})}function cA(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(_o(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),C_(t))}function om(t,e,n){for(const r of n)r instanceof sA?(t.va.addReference(r.key,e),QO(t,r)):r instanceof oA?(C("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||cA(t,r.key)):M()}function QO(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(C("SyncEngine","New document in limbo: "+n),t.ba.add(r),C_(t))}function C_(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new N(X.fromString(e)),r=t.xa.next();t.Ca.set(r,new FO(n)),t.Da=t.Da.insert(n,r),od(t.remoteStore,new Gn(St(bo(n.path)),r,"TargetPurposeLimboResolution",Dt._e))}}async function lr(t,e,n){const r=D(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=f_.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(u,d=>I.forEach(d.qi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>I.forEach(d.Qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!si(h))throw h;C("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ns.get(d),_=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(d,v)}}}(r.localStore,s))}async function YO(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await q1(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new P(T.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(n,r.us)}}function JO(t,e){const n=D(t),r=n.Ca.get(e);if(r&&r.pa)return H().add(r.key);{let i=H();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}async function XO(t,e){const n=D(t),r=await ah(n.localStore,e.query,!0),i=e.view.fa(r);return n.isPrimaryClient&&om(n,e.targetId,i.Va),i}async function ZO(t,e){const n=D(t);return H1(n.localStore,e).then(r=>lr(n,r))}async function eV(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.vn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Vo(i.remoteStore):n==="acknowledged"||n==="rejected"?(P_(i,e,r||null),A_(i,e),function(a,l){D(D(a).mutationQueue).Mn(l)}(i.localStore,e)):M(),await lr(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function tV(t,e){const n=D(t);if(ad(n),R_(n),e===!0&&n.Oa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Jw(n,r.toArray());n.Oa=!0,await im(n.remoteStore,!0);for(const s of i)od(n.remoteStore,s)}else if(e===!1&&n.Oa!==!1){const r=[];let i=Promise.resolve();n.Sa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(vo(n,o),go(n.localStore,o,!0))),_o(n.remoteStore,o)}),await i,await Jw(n,r),function(o){const a=D(o);a.Ca.forEach((l,u)=>{_o(a.remoteStore,u)}),a.va.mr(),a.Ca=new Map,a.Da=new ue(N.comparator)}(n),n.Oa=!1,await im(n.remoteStore,!1)}}async function Jw(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.Sa.get(o);if(l&&l.length!==0){a=await mo(r.localStore,St(l[0]));for(const u of l){const c=r.wa.get(u),h=await XO(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await K1(r.localStore,o);a=await mo(r.localStore,u),await S_(r,hA(u),o,!1,a.resumeToken)}i.push(a)}return r.ya.u_(s),i}function hA(t){return XS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function nV(t){return function(n){return D(D(n).persistence).Bi()}(D(t).localStore)}async function rV(t,e,n,r){const i=D(t);if(i.Oa)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i.Sa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await H1(i.localStore,e1(s[0])),a=eu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Be.EMPTY_BYTE_STRING);await lr(i,o,a);break}case"rejected":await go(i.localStore,e,!0),vo(i,e,r);break;default:M()}}async function iV(t,e,n){const r=ad(t);if(r.Oa){for(const i of e){if(r.Sa.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await K1(r.localStore,i),o=await mo(r.localStore,s);await S_(r,hA(s),o.targetId,!1,o.resumeToken),od(r.remoteStore,o)}for(const i of n)r.Sa.has(i)&&await go(r.localStore,i,!1).then(()=>{_o(r.remoteStore,i),vo(r,i)}).catch(ii)}}function ad(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WO.bind(null,e),e.ya.u_=DO.bind(null,e.eventManager),e.ya.La=OO.bind(null,e.eventManager),e}function R_(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KO.bind(null,e),e}function sV(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,_){const v=D(f),w=Me(_.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",g=>v.$r.getBundleMetadata(g,_.id)).then(g=>!!g&&g.createTime.compareTo(w)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(iA(l));const u=new MO(l,s.localStore,o.serializer);let c=await o.Ba();for(;c;){const d=await u.sa(c);d&&a._updateProgress(d),c=await o.Ba()}const h=await u.complete();return await lr(s,h.aa,void 0),await function(f,_){const v=D(f);return v.persistence.runTransaction("Save bundle","readwrite",w=>v.$r.saveBundleMetadata(w,_))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h._a)}catch(l){return gn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class am{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return B1(this.persistence,new z1,e.initialUser,this.serializer)}createPersistence(e){return new j1(sd.Hr,this.serializer)}createSharedClientState(e){return new Y1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dA extends am{constructor(e,n,r){super(),this.ka=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ka.initialize(this,e),await R_(this.ka.syncEngine),await Vo(this.ka.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return B1(this.persistence,new z1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new WD(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new RN(n,this.persistence);return new CN(e.asyncQueue,r)}createPersistence(e){const n=d_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new h_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,J1(),hc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Y1}}class oV extends dA{constructor(e,n){super(e,n,!1),this.ka=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ka.syncEngine;this.sharedClientState instanceof Ef&&(this.sharedClientState.syncEngine={Zs:eV.bind(null,n),Xs:rV.bind(null,n),eo:iV.bind(null,n),Bi:nV.bind(null,n),Ys:ZO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await tV(this.ka.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=J1();if(!Ef.D(n))throw new P(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=d_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ef(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class k_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YO.bind(null,this.syncEngine),await im(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NO}()}createDatastore(e){const n=nu(e.databaseInfo.databaseId),r=function(s){return new gO(s)}(e.databaseInfo);return function(s,o,a,l){return new vO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new IO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Yw(this.syncEngine,n,0),function(){return Ww.D()?new Ww:new fO}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new UO(i,s,o,a,l,u);return c&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=D(r);C("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Oo(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Ve("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,n){this.Ka=e,this.serializer=n,this.metadata=new Ye,this.buffer=new Uint8Array,this.$a=function(){return new TextDecoder("utf-8")}(),this.Ua().then(r=>{r&&r.ra()?this.metadata.resolve(r.na.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.na)}`))},r=>this.metadata.reject(r))}close(){return this.Ka.cancel()}async getMetadata(){return this.metadata.promise}async Ba(){return await this.getMetadata(),this.Ua()}async Ua(){const e=await this.Wa();if(e===null)return null;const n=this.$a.decode(e),r=Number(n);isNaN(r)&&this.Ga(`length string (${n}) is not valid number`);const i=await this.za(r);return new VO(JSON.parse(i),e.length+r)}ja(){return this.buffer.findIndex(e=>e===123)}async Wa(){for(;this.ja()<0&&!await this.Ha(););if(this.buffer.length===0)return null;const e=this.ja();e<0&&this.Ga("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async za(e){for(;this.buffer.length<e;)await this.Ha()&&this.Ga("Reached the end of bundle when more is expected.");const n=this.$a.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Ga(e){throw this.Ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ha(){const e=await this.Ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new P(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=D(i),a={documents:s.map(h=>Tl(o.serializer,h))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,X.emptyPath(),a,s.length),u=new Map;l.forEach(h=>{const d=PD(o.serializer,h);u.set(d.key.toString(),d)});const c=[];return s.forEach(h=>{const d=u.get(h.toString());U(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Do(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=N.fromPath(r);this.mutations.push(new t_(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o={writes:i.map(a=>Sl(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,X.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw M();n=$.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new P(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual($.min())?_e.exists(!1):_e.updateTime(n):_e.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual($.min()))throw new P(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _e.updateTime(n)}return _e.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Ja=r.maxAttempts,this.jo=new m_(this.asyncQueue,"transaction_retry")}Ya(){this.Ja-=1,this.Za()}Za(){this.jo.qo(async()=>{const e=new lV(this.datastore),n=this.Xa(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.eu(i)}))}).catch(r=>{this.eu(r)})})}Xa(e){try{const n=this.updateFunction(e);return!Ql(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}eu(e){this.Ja>0&&this.tu(e)?(this.Ja-=1,this.asyncQueue.enqueueAndForget(()=>(this.Za(),Promise.resolve()))):this.deferred.reject(e)}tu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!p1(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=xS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dc(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await q1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x_(t);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Gw(e.remoteStore,i)),t._onlineComponents=e}function fA(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function x_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fA(n))throw n;gn("Error using user provided cache. Falling back to memory cache: "+n),await dc(t,new am)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await dc(t,new am);return t._offlineComponents}async function ud(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await lm(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await lm(t,new k_))),t._onlineComponents}function pA(t){return x_(t).then(e=>e.persistence)}function b_(t){return x_(t).then(e=>e.localStore)}function mA(t){return ud(t).then(e=>e.remoteStore)}function N_(t){return ud(t).then(e=>e.syncEngine)}function hV(t){return ud(t).then(e=>e.datastore)}async function wo(t){const e=await ud(t),n=e.eventManager;return n.onListen=$O.bind(null,e.syncEngine),n.onUnlisten=zO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BO.bind(null,e.syncEngine),n}function dV(t){return t.asyncQueue.enqueue(async()=>{const e=await pA(t),n=await mA(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.v_.delete(0),ru(s)}(n)})}function fV(t){return t.asyncQueue.enqueue(async()=>{const e=await pA(t),n=await mA(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.v_.add(0),await Oo(s),s.x_.set("Offline")}(n)})}function pV(t,e){const n=new Ye;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=D(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new P(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Lo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await b_(t),e,n)),n.promise}function gA(t,e,n={}){const r=new Ye;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ld({next:d=>{o.enqueueAndForget(()=>I_(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new P(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new P(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new T_(bo(a.path),c,{includeMetadataChanges:!0,ta:!0});return w_(s,h)}(await wo(t),t.asyncQueue,e,n,r)),r.promise}function mV(t,e){const n=new Ye;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await ah(i,s,!0),l=new aA(s,a.hs),u=l.Ta(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Lo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await b_(t),e,n)),n.promise}function _A(t,e,n={}){const r=new Ye;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ld({next:d=>{o.enqueueAndForget(()=>I_(s,h)),d.fromCache&&l.source==="server"?u.reject(new P(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new T_(a,c,{includeMetadataChanges:!0,ta:!0});return w_(s,h)}(await wo(t),t.asyncQueue,e,n,r)),r.promise}function gV(t,e){const n=new ld(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).W_.add(s),s.next()}(await wo(t),n)),()=>{n.Qa(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).W_.delete(s)}(await wo(t),n))}}function _V(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?g1().encode(o):o,function(c,h){return new aV(c,h)}(function(c,h){if(c instanceof Uint8Array)return Xw(c,h);if(c instanceof ArrayBuffer)return Xw(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,nu(e));t.asyncQueue.enqueueAndForget(async()=>{sV(await N_(t),i,r)})}function yV(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await b_(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t,e,n){if(!n)throw new P(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vA(t,e,n,r){if(e===!0&&r===!0)throw new P(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function eI(t){if(!N.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tI(t){if(N.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function re(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cd(t);throw new P(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function wA(t,e){if(e<=0)throw new P(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new P(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new P(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new P(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gN;switch(r.type){case"firstParty":return new wN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new P(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zw.get(n);r&&(C("ComponentProvider","Removing Datastore"),Zw.delete(n),r.terminate())}(this),Promise.resolve()}}function IA(t,e,n,r={}){var i;const s=(t=re(t,iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=He.MOCK_USER;else{a=Bk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new He(u)}t._authCredentials=new _N(new kS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At=class EA{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new EA(this.firestore,e,this._query)}},Se=class TA{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new TA(this.firestore,e,this._key)}},Lr=class SA extends At{constructor(e,n,r){super(e,n,bo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new N(e))}withConverter(e){return new SA(this.firestore,e,this._path)}};function O_(t,e,...n){if(t=z(t),D_("collection","path",e),t instanceof iu){const r=X.fromString(e,...n);return tI(r),new Lr(t,null,r)}{if(!(t instanceof Se||t instanceof Lr))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return tI(r),new Lr(t.firestore,null,r)}}function vV(t,e){if(t=re(t,iu),D_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(t,null,function(r){return new or(X.emptyPath(),r)}(e))}function hh(t,e,...n){if(t=z(t),arguments.length===1&&(e=xS.newId()),D_("doc","path",e),t instanceof iu){const r=X.fromString(e,...n);return eI(r),new Se(t,null,new N(r))}{if(!(t instanceof Se||t instanceof Lr))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return eI(r),new Se(t.firestore,t instanceof Lr?t.converter:null,new N(r))}}function AA(t,e){return t=z(t),e=z(e),(t instanceof Se||t instanceof Lr)&&(e instanceof Se||e instanceof Lr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function PA(t,e){return t=z(t),e=z(e),t instanceof At&&e instanceof At&&t.firestore===e.firestore&&Jl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new m_(this,"async_queue_retry"),this.cu=()=>{const n=hc();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=hc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Ye;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!si(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ve("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=v_.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&M()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function um(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class IV{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ye,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV=-1;let xe=class extends iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new wV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||CA(this),this._firestoreClient.terminate()}};function TV(t,e){const n=typeof t=="object"?t:wT(),r=typeof t=="string"?t:e||"(default)",i=Sg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$k("firestore");s&&IA(i,...s)}return i}function et(t){return t._firestoreClient||CA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function CA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new QN(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,yA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function SV(t,e){kA(t=re(t,xe));const n=et(t);if(n._uninitializedComponentsProvider)throw new P(T.FAILED_PRECONDITION,"SDK cache is already specified.");gn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new k_;return RA(n,i,new dA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function AV(t){kA(t=re(t,xe));const e=et(t);if(e._uninitializedComponentsProvider)throw new P(T.FAILED_PRECONDITION,"SDK cache is already specified.");gn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new k_;return RA(e,r,new oV(r,n.cacheSizeBytes))}function RA(t,e,n){const r=new Ye;return t.asyncQueue.enqueue(async()=>{try{await dc(t,n),await lm(t,e),r.resolve()}catch(i){const s=i;if(!fA(s))throw s;gn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function PV(t){if(t._initialized&&!t._terminated)throw new P(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ye;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!tn.D())return Promise.resolve();const i=r+"main";await tn.delete(i)}(d_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function CV(t){return function(n){const r=new Ye;return n.asyncQueue.enqueueAndForget(async()=>HO(await N_(n),r)),r.promise}(et(t=re(t,xe)))}function RV(t){return dV(et(t=re(t,xe)))}function kV(t){return fV(et(t=re(t,xe)))}function xV(t,e){const n=et(t=re(t,xe)),r=new IV;return _V(n,t._databaseId,e,r),r}function bV(t,e){return yV(et(t=re(t,xe)),e).then(n=>n?new At(t,null,n.query):null)}function kA(t){if(t._initialized||t._terminated)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Be.fromBase64String(e))}catch(n){throw new P(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ln(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV=/^__.*__$/;class DV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new No(e,this.data,n,this.fieldTransforms)}}class xA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class dd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new dd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return dh(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(bA(this.Vu)&&NV.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class OV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nu(e)}Cu(e,n,r,i=!1){return new dd({Vu:e,methodName:n,Du:r,path:ge.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function us(t){const e=t._freezeSettings(),n=nu(t._databaseId);return new OV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fd(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);j_("Data must be an object, but it was:",o,r);const a=OA(r,o);let l,u;if(s.merge)l=new Ot(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=cm(e,h,n);if(!o.contains(d))throw new P(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MA(c,d)||c.push(d)}l=new Ot(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new DV(new it(a),l,u)}class su extends ls{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof su}}function NA(t,e,n){return new dd({Vu:3,Du:e.settings.Du,methodName:t._methodName,gu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class V_ extends ls{_toFieldTransform(e){return new Zl(e.path,new ho)}isEqual(e){return e instanceof V_}}class M_ extends ls{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=NA(this,e,!0),r=this.vu.map(s=>cs(s,n)),i=new Hi(r);return new Zl(e.path,i)}isEqual(e){return e instanceof M_&&sl(this.vu,e.vu)}}class L_ extends ls{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=NA(this,e,!0),r=this.vu.map(s=>cs(s,n)),i=new Qi(r);return new Zl(e.path,i)}isEqual(e){return e instanceof L_&&sl(this.vu,e.vu)}}class F_ extends ls{constructor(e,n){super(e),this.Fu=n}_toFieldTransform(e){const n=new fo(e.serializer,a1(e.serializer,this.Fu));return new Zl(e.path,n)}isEqual(e){return e instanceof F_&&this.Fu===e.Fu}}function U_(t,e,n,r){const i=t.Cu(1,e,n);j_("Data must be an object, but it was:",i,r);const s=[],o=it.empty();as(r,(l,u)=>{const c=z_(e,l,n);u=z(u);const h=i.yu(c);if(u instanceof su)s.push(c);else{const d=cs(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ot(s);return new xA(o,a,i.fieldTransforms)}function $_(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[cm(e,r,n)],l=[i];if(s.length%2!=0)throw new P(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(cm(e,s[d])),l.push(s[d+1]);const u=[],c=it.empty();for(let d=a.length-1;d>=0;--d)if(!MA(u,a[d])){const f=a[d];let _=l[d];_=z(_);const v=o.yu(f);if(_ instanceof su)u.push(f);else{const w=cs(_,v);w!=null&&(u.push(f),c.set(f,w))}}const h=new Ot(u);return new xA(c,h,o.fieldTransforms)}function DA(t,e,n,r=!1){return cs(n,t.Cu(r?4:3,e))}function cs(t,e){if(VA(t=z(t)))return j_("Unsupported field value:",e,t),OA(t,e);if(t instanceof ls)return function(r,i){if(!bA(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=cs(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return a1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:po(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:po(i.serializer,s)}}if(r instanceof hd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ln)return{bytesValue:v1(i.serializer,r._byteString)};if(r instanceof Se){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:o_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${cd(r)}`)}(t,e)}function OA(t,e){const n={};return jS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(r,i)=>{const s=cs(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function VA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof hd||t instanceof Ln||t instanceof Se||t instanceof ls)}function j_(t,e,n){if(!VA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=cd(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function cm(t,e,n){if((e=z(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return z_(t,e);throw dh("Field path arguments must be of type string or ",t,!1,void 0,n)}const VV=new RegExp("[~\\*/\\[\\]]");function z_(t,e,n){if(e.search(VV)>=0)throw dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yr(...e.split("."))._internalPath}catch{throw dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(T.INVALID_ARGUMENT,a+t+l)}function MA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MV extends Al{data(){return super.data()}}function pd(t,e){return typeof e=="string"?z_(t,e):e instanceof Yr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B_{}class ou extends B_{}function pr(t,e,...n){let r=[];e instanceof B_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof q_).length,a=s.filter(l=>l instanceof md).length;if(o>1||o>0&&a>0)throw new P(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class md extends ou{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new md(e,n,r)}_apply(e){const n=this._parse(e);return UA(e._query,n),new At(e.firestore,e.converter,Qp(e._query,n))}_parse(e){const n=us(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new P(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){iI(h,c);const f=[];for(const _ of h)f.push(rI(l,s,_));d={arrayValue:{values:f}}}else d=rI(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||iI(h,c),d=DA(a,o,h,c==="in"||c==="not-in");return Z.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LV(t,e,n){const r=e,i=pd("where",t);return md._create(i,r,n)}class q_ extends B_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new q_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)UA(o,l),o=Qp(o,l)}(e._query,n),new At(e.firestore,e.converter,Qp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class W_ extends ou{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new W_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new P(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new P(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new El(s,o)}(e._query,this._field,this._direction);return new At(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new or(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function FV(t,e="asc"){const n=e,r=pd("orderBy",t);return W_._create(r,n)}class gd extends ou{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new gd(e,n,r)}_apply(e){return new At(e.firestore,e.converter,rh(e._query,this._limit,this._limitType))}}function UV(t){return wA("limit",t),gd._create("limit",t,"F")}function $V(t){return wA("limitToLast",t),gd._create("limitToLast",t,"L")}class _d extends ou{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new _d(e,n,r)}_apply(e){const n=FA(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(i,s){return new or(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function jV(...t){return _d._create("startAt",t,!0)}function zV(...t){return _d._create("startAfter",t,!1)}class yd extends ou{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new yd(e,n,r)}_apply(e){const n=FA(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(i,s){return new or(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function BV(...t){return yd._create("endBefore",t,!1)}function qV(...t){return yd._create("endAt",t,!0)}function FA(t,e,n,r){if(n[0]=z(n[0]),n[0]instanceof Al)return function(s,o,a,l,u){if(!l)throw new P(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of Hs(s))if(h.field.isKeyField())c.push(Gi(o,l.key));else{const d=l.data.field(h.field);if(ed(d))throw new P(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new P(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new Hr(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=us(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new P(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let _=0;_<c.length;_++){const v=c[_];if(d[_].field.isKeyField()){if(typeof v!="string")throw new P(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!Zg(o)&&v.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const w=o.path.child(X.fromString(v));if(!N.isDocumentKey(w))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const g=new N(w);f.push(Gi(a,g))}else{const w=DA(l,u,v);f.push(w)}}return new Hr(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function rI(t,e,n){if(typeof(n=z(n))=="string"){if(n==="")throw new P(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zg(e)&&n.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(X.fromString(n));if(!N.isDocumentKey(r))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gi(t,new N(r))}if(n instanceof Se)return Gi(t,n._key);throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cd(n)}.`)}function iI(t,e){if(!Array.isArray(t)||t.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class G_{convertValue(e,n="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return as(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new hd(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const n=qr(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=X.fromString(e);U(x1(r));const i=new Gr(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||Ve(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class WV extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let rr=class extends Al{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Ma=class extends rr{data(e={}){return super.data(e)}},Jr=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ma(this._firestore,this._userDataWriter,r.key,r,new ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ma(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ma(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:GV(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function GV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function $A(t,e){return t instanceof rr&&e instanceof rr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Jr&&e instanceof Jr&&t._firestore===e._firestore&&PA(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){t=re(t,Se);const e=re(t.firestore,xe);return gA(et(e),t._key).then(n=>K_(e,t,n))}class hs extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,n)}}function HV(t){t=re(t,Se);const e=re(t.firestore,xe),n=et(e),r=new hs(e);return pV(n,t._key).then(i=>new rr(e,r,t._key,i,new ki(i!==null&&i.hasLocalMutations,!0),t.converter))}function QV(t){t=re(t,Se);const e=re(t.firestore,xe);return gA(et(e),t._key,{source:"server"}).then(n=>K_(e,t,n))}function jA(t){t=re(t,At);const e=re(t.firestore,xe),n=et(e),r=new hs(e);return LA(t._query),_A(n,t._query).then(i=>new Jr(e,r,t,i))}function YV(t){t=re(t,At);const e=re(t.firestore,xe),n=et(e),r=new hs(e);return mV(n,t._query).then(i=>new Jr(e,r,t,i))}function JV(t){t=re(t,At);const e=re(t.firestore,xe),n=et(e),r=new hs(e);return _A(n,t._query,{source:"server"}).then(i=>new Jr(e,r,t,i))}function sI(t,e,n){t=re(t,Se);const r=re(t.firestore,xe),i=vd(t.converter,e,n);return au(r,[fd(us(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_e.none())])}function oI(t,e,n,...r){t=re(t,Se);const i=re(t.firestore,xe),s=us(i);let o;return o=typeof(e=z(e))=="string"||e instanceof Yr?$_(s,"updateDoc",t._key,e,n,r):U_(s,"updateDoc",t._key,e),au(i,[o.toMutation(t._key,_e.exists(!0))])}function XV(t){return au(re(t.firestore,xe),[new Do(t._key,_e.none())])}function ZV(t,e){const n=re(t.firestore,xe),r=hh(t),i=vd(t.converter,e);return au(n,[fd(us(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_e.exists(!1))]).then(()=>r)}function zA(t,...e){var n,r,i;t=z(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||um(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(um(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Se)u=re(t.firestore,xe),c=bo(t._key.path),l={next:h=>{e[o]&&e[o](K_(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=re(t,At);u=re(h.firestore,xe),c=h._query;const d=new hs(u);l={next:f=>{e[o]&&e[o](new Jr(u,d,h,f))},error:e[o+1],complete:e[o+2]},LA(t._query)}return function(d,f,_,v){const w=new ld(v),g=new T_(f,w,_);return d.asyncQueue.enqueueAndForget(async()=>w_(await wo(d),g)),()=>{w.Qa(),d.asyncQueue.enqueueAndForget(async()=>I_(await wo(d),g))}}(et(u),c,a,l)}function eM(t,e){return gV(et(t=re(t,xe)),um(e)?e:{next:e})}function au(t,e){return function(r,i){const s=new Ye;return r.asyncQueue.enqueueAndForget(async()=>qO(await N_(r),i,s)),s.promise}(et(t),e)}function K_(t,e,n){const r=n.docs.get(e._key),i=new hs(t);return new rr(t,i,e._key,r,new ki(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nM=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=us(e)}set(e,n,r){this._verifyNotCommitted();const i=Er(e,this._firestore),s=vd(i.converter,n,r),o=fd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,_e.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Er(e,this._firestore);let o;return o=typeof(n=z(n))=="string"||n instanceof Yr?$_(this._dataReader,"WriteBatch.update",s._key,n,r,i):U_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,_e.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Er(e,this._firestore);return this._mutations=this._mutations.concat(new Do(n._key,_e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new P(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Er(t,e){if((t=z(t)).firestore!==e)throw new P(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rM=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=us(n)}get(n){const r=Er(n,this._firestore),i=new WV(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return M();const o=s[0];if(o.isFoundDocument())return new Al(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Al(this._firestore,i,r._key,null,r.converter);throw M()})}set(n,r,i){const s=Er(n,this._firestore),o=vd(s.converter,r,i),a=fd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Er(n,this._firestore);let a;return a=typeof(r=z(r))=="string"||r instanceof Yr?$_(this._dataReader,"Transaction.update",o._key,r,i,s):U_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Er(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Er(e,this._firestore),r=new hs(this._firestore);return super.get(e).then(i=>new rr(this._firestore,r,n._key,i._document,new ki(!1,!1),n.converter))}};function iM(t,e,n){t=re(t,xe);const r=Object.assign(Object.assign({},tM),n);return function(s){if(s.maxAttempts<1)throw new P(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Ye;return s.asyncQueue.enqueueAndForget(async()=>{const u=await hV(s);new uV(s.asyncQueue,u,a,o,l).Ya()}),l.promise}(et(t),i=>e(new rM(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(){return new su("deleteField")}function oM(){return new V_("serverTimestamp")}function aM(...t){return new M_("arrayUnion",t)}function lM(...t){return new L_("arrayRemove",t)}function uM(t){return new F_("increment",t)}(function(e,n=!0){(function(i){xo=i})(ti),zr(new Vn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new xe(new yN(r.getProvider("auth-internal")),new EN(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new P(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Dn(Zv,"4.5.0",e),Dn(Zv,"4.5.0","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n){this._delegate=e,this.firebase=n,Kc(e,new Vn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),IT(this._delegate)))}_getService(e,n=$r){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=$r){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Kc(this._delegate,e)}_addOrOverwriteComponent(e){vT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},aI=new ss("app-compat","Firebase",hM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Dn,setLogLevel:TT,onLog:ET,apps:null,SDK_VERSION:ti,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:ab}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||$r,!xv(e,u))throw aI.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=Ag(u,c);if(xv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(zr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw aI.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&Gc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(){const t=dM(cM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:BA,extendNamespace:e,createSubscribe:mT,ErrorFactory:ss,deepExtend:Gc});function e(n){Gc(t,n)}return t}const fM=BA();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new Mh("@firebase/app-compat"),pM="@firebase/app-compat",mM="0.2.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t){Dn(pM,mM,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Wk()&&self.firebase!==void 0){lI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&lI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ve=fM;gM();var _M="firebase",yM="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.registerVersion(_M,yM,"app-compat");const vM={apiKey:"AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",authDomain:"resturant-94f15.firebaseapp.com",projectId:"resturant-94f15",storageBucket:"resturant-94f15.appspot.com",messagingSenderId:"59447957183",appId:"1:59447957183:web:a14ae5107e9ec34479980a",measurementId:"G-KC29EGQM0Q"};ve.apps.length||ve.initializeApp(vM);const uI=TV(),qA=({theme:t})=>{const[e,n]=q.useState(0),[r,i]=q.useState([]);q.useEffect(()=>{(async()=>{try{const a=O_(uI,"images"),u=(await jA(a)).docs.map(c=>c.data().url);i(u)}catch(a){console.error("Error fetching image URLs:",a)}})()},[uI]),q.useEffect(()=>{const o=setInterval(()=>{n(a=>(a+1)%r.length)},3e3);return()=>clearInterval(o)},[r]);const s=[{title:"Welcome to Flavor Voyage ",description:"Experience a culinary journey like no other."}];return y.jsxs("div",{className:`${t==="light"?"light-hero":"dark-hero"}   min-h-screen flex flex-col md:flex-row md:py-10 justify-center items-center`,children:[y.jsx("div",{className:"text-center  md:w-1/2 p-8",children:s.map((o,a)=>y.jsxs("div",{className:"mb-12",children:[y.jsx("h2",{className:"text-4xl font-bold mb-4 overflow-hidden   sm:text-2xl md:text-4xl lg:text-5xl",children:o.title.split(" ").map((l,u)=>y.jsxs(Ee.Fragment,{children:[u!==0&&y.jsx("br",{}),l.split("").map((c,h)=>y.jsx("span",{className:"animate-text-reveal inline-block",style:{animationDelay:`${.01*h}s`},children:c===" "?" ":c},`${c}-${h}`))]},u))}),y.jsx("p",{className:"text-xl sm:text-lg md:text-xl leading-relaxed ",children:o.description})]},a))}),y.jsx("div",{className:"flex justify-center items-center w-screen h-screen md:w-1/2",children:r.map((o,a)=>y.jsx("img",{src:o,alt:`Image ${a+1}`,className:`w-full h-full rounded-2xl object-cover transition-opacity pr-2 pl-2 ${a===e?"opacity-100":"opacity-0"}`,style:{display:a===e?"block":"none"}},a))})]})},wM=({theme:t})=>{const e=[{title:"Our Story",description:"At Flavor Voyage, we are passionate about bringing unique flavors from around the world to your table. Our journey began with a simple idea: to create a dining experience that transports our guests to distant lands through the magic of taste."},{title:"Our Mission",description:"Our chefs meticulously craft each dish to capture the essence of its origin, using authentic ingredients and traditional cooking methods. Whether you crave the bold spices of Indian curry, the delicate flavors of Japanese sushi, or the comforting warmth of Italian pasta, we have something to tantalize every palate."},{title:"Join Us",description:"Join us on a culinary adventure and explore the diverse flavors of the world with Flavor Voyage."}];return y.jsx("div",{className:`${t==="light"?"light-about":"dark-about"} min-h-screen flex justify-center items-center py-32 px-4 md:py-16 md:px-8 sm:py-40 `,children:y.jsx("div",{className:"container mx-auto",children:e.map((n,r)=>y.jsxs("div",{className:"mb-8 md:mb-12",children:[y.jsx("h2",{className:"text-4xl font-bold mb-4 md:text-5xl lg:text-6xl overflow-hidden",children:n.title.split("").map((i,s)=>y.jsx("span",{className:"animate-text-reveal inline-block",style:{animationDelay:`${.1*s}s`},children:i===" "?" ":i},`${i}-${s}`))}),y.jsx("p",{className:"text-lg leading-relaxed",children:n.description})]},r))})})};var WA={exports:{}},IM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",EM=IM,TM=EM;function GA(){}function KA(){}KA.resetWarningCache=GA;var SM=function(){function t(r,i,s,o,a,l){if(l!==TM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:KA,resetWarningCache:GA};return n.PropTypes=n,n};WA.exports=SM();var AM=WA.exports;const j=Vl(AM);var HA={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function s(l,u,c,h,d){if(typeof c!="function")throw new TypeError("The listener must be a function");var f=new i(c,h||l,d),_=n?n+u:u;return l._events[_]?l._events[_].fn?l._events[_]=[l._events[_],f]:l._events[_].push(f):(l._events[_]=f,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,h;if(this._eventsCount===0)return u;for(h in c=this._events)e.call(c,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=n?n+u:u,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var d=0,f=h.length,_=new Array(f);d<f;d++)_[d]=h[d].fn;return _},a.prototype.listenerCount=function(u){var c=n?n+u:u,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,c,h,d,f,_){var v=n?n+u:u;if(!this._events[v])return!1;var w=this._events[v],g=arguments.length,m,p;if(w.fn){switch(w.once&&this.removeListener(u,w.fn,void 0,!0),g){case 1:return w.fn.call(w.context),!0;case 2:return w.fn.call(w.context,c),!0;case 3:return w.fn.call(w.context,c,h),!0;case 4:return w.fn.call(w.context,c,h,d),!0;case 5:return w.fn.call(w.context,c,h,d,f),!0;case 6:return w.fn.call(w.context,c,h,d,f,_),!0}for(p=1,m=new Array(g-1);p<g;p++)m[p-1]=arguments[p];w.fn.apply(w.context,m)}else{var S=w.length,A;for(p=0;p<S;p++)switch(w[p].once&&this.removeListener(u,w[p].fn,void 0,!0),g){case 1:w[p].fn.call(w[p].context);break;case 2:w[p].fn.call(w[p].context,c);break;case 3:w[p].fn.call(w[p].context,c,h);break;case 4:w[p].fn.call(w[p].context,c,h,d);break;default:if(!m)for(A=1,m=new Array(g-1);A<g;A++)m[A-1]=arguments[A];w[p].fn.apply(w[p].context,m)}}return!0},a.prototype.on=function(u,c,h){return s(this,u,c,h,!1)},a.prototype.once=function(u,c,h){return s(this,u,c,h,!0)},a.prototype.removeListener=function(u,c,h,d){var f=n?n+u:u;if(!this._events[f])return this;if(!c)return o(this,f),this;var _=this._events[f];if(_.fn)_.fn===c&&(!d||_.once)&&(!h||_.context===h)&&o(this,f);else{for(var v=0,w=[],g=_.length;v<g;v++)(_[v].fn!==c||d&&!_[v].once||h&&_[v].context!==h)&&w.push(_[v]);w.length?this._events[f]=w.length===1?w[0]:w:o(this,f)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=n?n+u:u,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(HA);var PM=HA.exports;const CM=Vl(PM);function RM(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function kM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xM=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!==0;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n},bM=kM(xM);const cI="__googleMapsScriptId";var Us;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(Us||(Us={}));class Ei{constructor({apiKey:e,authReferrerPolicy:n,channel:r,client:i,id:s=cI,language:o,libraries:a=[],mapIds:l,nonce:u,region:c,retries:h=3,url:d="https://maps.googleapis.com/maps/api/js",version:f}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=n,this.channel=r,this.client=i,this.id=s||cI,this.language=o,this.libraries=a,this.mapIds=l,this.nonce=u,this.region=c,this.retries=h,this.url=d,this.version=f,Ei.instance){if(!bM(this.options,Ei.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Ei.instance.options)}`);return Ei.instance}Ei.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?Us.FAILURE:this.done?Us.SUCCESS:this.loading?Us.LOADING:Us.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,n)=>{this.loadCallback(r=>{r?n(r.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,n;if(document.getElementById(this.id)){this.callback();return}const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(s=>!r[s]&&delete r[s]),!((n=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||n===void 0)&&n.importLibrary||(s=>{let o,a,l,u="The Google Maps JavaScript API",c="google",h="importLibrary",d="__ib__",f=document,_=window;_=_[c]||(_[c]={});const v=_.maps||(_.maps={}),w=new Set,g=new URLSearchParams,m=()=>o||(o=new Promise((p,S)=>RM(this,void 0,void 0,function*(){var A;yield a=f.createElement("script"),a.id=this.id,g.set("libraries",[...w]+"");for(l in s)g.set(l.replace(/[A-Z]/g,E=>"_"+E[0].toLowerCase()),s[l]);g.set("callback",c+".maps."+d),a.src=this.url+"?"+g,v[d]=p,a.onerror=()=>o=S(Error(u+" could not load.")),a.nonce=this.nonce||((A=f.querySelector("script[nonce]"))===null||A===void 0?void 0:A.nonce)||"",f.head.append(a)})));v[h]?console.warn(u+" only loads once. Ignoring:",s):v[h]=(p,...S)=>w.add(p)&&m().then(()=>v[h](p,...S))})(r);const i=this.libraries.map(s=>this.importLibrary(s));i.length||i.push(this.importLibrary("core")),Promise.all(i).then(()=>this.callback(),s=>{const o=new ErrorEvent("error",{error:s});this.loadErrorCallback(o)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const n=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${n} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}var NM=Ys;function Ys(t,e){this.x=t,this.y=e}Ys.prototype={clone:function(){return new Ys(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),n=Math.sin(t),r=e*this.x-n*this.y,i=n*this.x+e*this.y;return this.x=r,this.y=i,this},_rotateAround:function(t,e){var n=Math.cos(t),r=Math.sin(t),i=e.x+n*(this.x-e.x)-r*(this.y-e.y),s=e.y+r*(this.x-e.x)+n*(this.y-e.y);return this.x=i,this.y=s,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}};Ys.convert=function(t){return t instanceof Ys?t:Array.isArray(t)?new Ys(t[0],t[1]):t};const xi=Vl(NM);function We(){return(We=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function wd(t,e){var n,r;t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n=t,r=e,(Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i})(n,r)}function Sf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var DM={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},OM=function(t){function e(){return t.apply(this,arguments)||this}wd(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(){return!1},n.render=function(){return Ee.createElement("div",{ref:this.props.registerChild,style:DM})},e}(q.Component),hI=function(t){function e(r){var i;return(i=t.call(this)||this).gmapInstance=r,i}wd(e,t);var n=e.prototype;return n.getChildren=function(){return this.gmapInstance.props.children},n.getMousePosition=function(){return this.gmapInstance.mouse_},n.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},n.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},e}(CM),La=function(t,e){for(var n=We({},(function(s){if(s==null)throw new TypeError("Cannot destructure "+s)}(t),t)),r=0;r<e.length;r++){var i=e[r];i in n&&delete n[i]}return n},VM=Object.prototype.hasOwnProperty;function dI(t,e){return t===e?t!==0||e!==0||1/t==1/e:t!=t&&e!=e}function Yt(t,e){if(dI(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!VM.call(e,n[i])||!dI(t[n[i]],e[n[i]]))return!1;return!0}var MM={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},LM={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},fh=function(t){function e(r){var i;return(i=t.call(this,r)||this)._getState=function(){return{children:i.props.dispatcher.getChildren(),updateCounter:i.props.dispatcher.getUpdateCounter()}},i._onChangeHandler=function(){if(i.dimensionsCache_){var s=(i.state.children||[]).length,o=i._getState();i.setState(o,function(){return(o.children||[]).length!==s&&i._onMouseChangeHandler()})}},i._onChildClick=function(){i.props.onChildClick&&i.hoverChildProps_&&i.props.onChildClick(i.hoverKey_,i.hoverChildProps_)},i._onChildMouseDown=function(){i.props.onChildMouseDown&&i.hoverChildProps_&&i.props.onChildMouseDown(i.hoverKey_,i.hoverChildProps_)},i._onChildMouseEnter=function(s,o){i.dimensionsCache_&&(i.props.onChildMouseEnter&&i.props.onChildMouseEnter(s,o),i.hoverChildProps_=o,i.hoverKey_=s,i.setState({hoverKey:s}))},i._onChildMouseLeave=function(){if(i.dimensionsCache_){var s=i.hoverKey_;s!=null&&(i.props.onChildMouseLeave&&i.props.onChildMouseLeave(s,i.hoverChildProps_),i.hoverKey_=null,i.hoverChildProps_=null,i.setState({hoverKey:null}))}},i._onMouseAllow=function(s){s||i._onChildMouseLeave(),i.allowMouse_=s},i._onMouseChangeHandler=function(){i.allowMouse_&&i._onMouseChangeHandlerRaf()},i._onMouseChangeHandlerRaf=function(){if(i.dimensionsCache_){var s=i.props.dispatcher.getMousePosition();if(s){var o=[],a=i.props.getHoverDistance();if(Ee.Children.forEach(i.state.children,function(c,h){if(c&&(c.props.latLng!==void 0||c.props.lat!==void 0||c.props.lng!==void 0)){var d=c.key!=null?c.key:h,f=i.props.distanceToMouse(i.dimensionsCache_[d],s,c.props);f<a&&o.push({key:d,dist:f,props:c.props})}}),o.length){o.sort(function(c,h){return c.dist-h.dist});var l=o[0].key,u=o[0].props;i.hoverKey_!==l&&(i._onChildMouseLeave(),i._onChildMouseEnter(l,u))}else i._onChildMouseLeave()}else i._onChildMouseLeave()}},i._getDimensions=function(s){return i.dimensionsCache_[s]},i.dimensionsCache_={},i.hoverKey_=null,i.hoverChildProps_=null,i.allowMouse_=!0,i.state=We({},i._getState(),{hoverKey:null}),i}wd(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(r,i){return this.props.experimental===!0?!Yt(this.props,r)||!Yt(La(this.state,["hoverKey"]),La(i,["hoverKey"])):!Yt(this.props,r)||!Yt(this.state,i)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var r=this,i=this.props.style||MM;this.dimensionsCache_={};var s=Ee.Children.map(this.state.children,function(o,a){if(o){if(o.props.latLng===void 0&&o.props.lat===void 0&&o.props.lng===void 0)return Ee.cloneElement(o,{$geoService:r.props.geoService,$onMouseAllow:r._onMouseAllow,$prerender:r.props.prerender});var l=o.props.latLng!==void 0?o.props.latLng:{lat:o.props.lat,lng:o.props.lng},u=r.props.insideMapPanes?r.props.geoService.fromLatLngToDivPixel(l):r.props.geoService.fromLatLngToCenterPixel(l),c={left:u.x,top:u.y};if(o.props.seLatLng!==void 0||o.props.seLat!==void 0&&o.props.seLng!==void 0){var h=o.props.seLatLng!==void 0?o.props.seLatLng:{lat:o.props.seLat,lng:o.props.seLng},d=r.props.insideMapPanes?r.props.geoService.fromLatLngToDivPixel(h):r.props.geoService.fromLatLngToCenterPixel(h);c.width=d.x-u.x,c.height=d.y-u.y}var f=r.props.geoService.fromLatLngToContainerPixel(l),_=o.key!=null?o.key:a;return r.dimensionsCache_[_]=We({x:f.x,y:f.y},l),Ee.createElement("div",{key:_,style:We({},LM,c),className:o.props.$markerHolderClassName},Ee.cloneElement(o,{$hover:_===r.state.hoverKey,$getDimensions:r._getDimensions,$dimensionKey:_,$geoService:r.props.geoService,$onMouseAllow:r._onMouseAllow,$prerender:r.props.prerender}))}});return Ee.createElement("div",{style:i},s)},e}(q.Component);fh.propTypes={geoService:j.any,style:j.any,distanceToMouse:j.func,dispatcher:j.any,onChildClick:j.func,onChildMouseDown:j.func,onChildMouseLeave:j.func,onChildMouseEnter:j.func,getHoverDistance:j.func,insideMapPanes:j.bool,prerender:j.bool},fh.defaultProps={insideMapPanes:!1,prerender:!1};var FM={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function UM(t){return Ee.createElement("div",{style:FM},Ee.createElement(fh,We({},t,{prerender:!0})))}var Af,ra,hm,$M=["key"],jM=new Promise(function(t){hm=t}),fI=function(t,e){if(!t)return jM;if(ra)return ra;t.libraries||(t.libraries=[]);var n=[].concat(t.libraries);if(e&&(n.length!==0&&n.includes("visualization")||n.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")),typeof window>"u")throw new Error("google map cannot be loaded outside browser env");var r=t.key,i=function(s,o){if(s==null)return{};var a,l,u={},c=Object.keys(s);for(l=0;l<c.length;l++)o.indexOf(a=c[l])>=0||(u[a]=s[a]);return u}(t,$M);return Af||(Af=new Ei(We({apiKey:r||""},i,{libraries:n}))),ra=Af.load().then(function(){return hm(window.google.maps),window.google.maps}),hm(ra),ra};function QA(t,e,n){var r=n-e;return t===n?t:((t-e)%r+r)%r+e}var Pr=function(){function t(e,n){if(isNaN(e)||isNaN(n))throw new Error("Invalid LatLng object: ("+e+", "+n+")");this.lat=+e,this.lng=+n}return t.prototype.wrap=function(){return new t(this.lat,QA(this.lng,-180,180))},t}();Pr.convert=function(t){return t instanceof Pr?t:Array.isArray(t)?new Pr(t[0],t[1]):"lng"in t&&"lat"in t?new Pr(t.lat,t.lng):t};var zM=function(){function t(i,s,o){this.tileSize=i||512,this._minZoom=s||0,this._maxZoom=o||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new Pr(0,0),this.angle=0}var e,n,r=t.prototype;return r.zoomScale=function(i){return Math.pow(2,i)},r.scaleZoom=function(i){return Math.log(i)/Math.LN2},r.project=function(i,s){return new xi(this.lngX(i.lng,s),this.latY(i.lat,s))},r.unproject=function(i,s){return new Pr(this.yLat(i.y,s),this.xLng(i.x,s))},r.lngX=function(i,s){return(180+i)*(s||this.worldSize)/360},r.latY=function(i,s){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+i*Math.PI/360)))*(s||this.worldSize)/360},r.xLng=function(i,s){return 360*i/(s||this.worldSize)-180},r.yLat=function(i,s){return 360/Math.PI*Math.atan(Math.exp((180-360*i/(s||this.worldSize))*Math.PI/180))-90},r.locationPoint=function(i){var s=this.project(i);return this.centerPoint._sub(this.point._sub(s)._rotate(this.angle))},r.pointLocation=function(i){var s=this.centerPoint._sub(i)._rotate(-this.angle);return this.unproject(this.point.sub(s))},e=t,(n=[{key:"minZoom",get:function(){return this._minZoom},set:function(i){this._minZoom=i,this.zoom=Math.max(this.zoom,i)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(i){this._maxZoom=i,this.zoom=Math.min(this.zoom,i)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new xi(0,0)}},{key:"size",get:function(){return new xi(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(i){this.angle=-QA(i,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(i){var s=Math.min(Math.max(i,this.minZoom),this.maxZoom);this._zoom=s,this.scale=this.zoomScale(s),this.tileZoom=Math.floor(s),this.zoomFraction=s-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new xi(this.x,this.y)}}])&&function(i,s){for(var o=0;o<s.length;o++){var a=s[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,typeof(l=function(u,c){if(typeof u!="object"||u===null)return u;var h=u[Symbol.toPrimitive];if(h!==void 0){var d=h.call(u,"string");if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(u)}(a.key))=="symbol"?l:String(l),a)}var l}(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),BM=function(){function t(n){this.hasSize_=!1,this.hasView_=!1,this.transform_=new zM(n||512)}var e=t.prototype;return e.setView=function(n,r,i){this.transform_.center=Pr.convert(n),this.transform_.zoom=+r,this.transform_.bearing=+i,this.hasView_=!0},e.setViewSize=function(n,r){this.transform_.width=n,this.transform_.height=r,this.hasSize_=!0},e.setMapCanvasProjection=function(n,r){this.maps_=n,this.mapCanvasProjection_=r},e.canProject=function(){return this.hasSize_&&this.hasView_},e.hasSize=function(){return this.hasSize_},e.fromLatLngToCenterPixel=function(n){return this.transform_.locationPoint(Pr.convert(n))},e.fromLatLngToDivPixel=function(n){if(this.mapCanvasProjection_){var r=new this.maps_.LatLng(n.lat,n.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(r)}return this.fromLatLngToCenterPixel(n)},e.fromLatLngToContainerPixel=function(n){if(this.mapCanvasProjection_){var r=new this.maps_.LatLng(n.lat,n.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(r)}var i=this.fromLatLngToCenterPixel(n);return i.x-=this.transform_.worldSize*Math.round(i.x/this.transform_.worldSize),i.x+=this.transform_.width/2,i.y+=this.transform_.height/2,i},e.fromContainerPixelToLatLng=function(n){if(this.mapCanvasProjection_){var r=this.mapCanvasProjection_.fromContainerPixelToLatLng(n);return{lat:r.lat(),lng:r.lng()}}var i=We({},n);i.x-=this.transform_.width/2,i.y-=this.transform_.height/2;var s=this.transform_.pointLocation(xi.convert(i));return s.lng-=360*Math.round(s.lng/360),s},e.getWidth=function(){return this.transform_.width},e.getHeight=function(){return this.transform_.height},e.getZoom=function(){return this.transform_.zoom},e.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},e.getBounds=function(n,r){var i=n&&n[0]||0,s=n&&n[1]||0,o=n&&n[2]||0,a=n&&n[3]||0;if(this.getWidth()-s-a>0&&this.getHeight()-i-o>0){var l=this.transform_.pointLocation(xi.convert({x:a-this.getWidth()/2,y:i-this.getHeight()/2})),u=this.transform_.pointLocation(xi.convert({x:this.getWidth()/2-s,y:this.getHeight()/2-o})),c=[l.lat,l.lng,u.lat,u.lng,u.lat,l.lng,l.lat,u.lng];return r&&(c=c.map(function(h){return Math.round(h*r)/r})),c}return[0,0,0,0]},t}();function pI(t){if(window.requestAnimationFrame)return window.requestAnimationFrame(t);var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?e(t):window.setTimeout(t,1e3/60)}var qM=Math.log2?Math.log2:function(t){return Math.log(t)/Math.LN2};function mI(t,e){return Object.keys(t).reduce(function(n,r){return e(t[r])&&(n[r]=t[r]),n},{})}var fi=function(t){if(t!==null&&typeof t=="object"){if(Object.keys(t).length===0)return!0}else if(t==null||t==="")return!0;return!1},WM=Object.prototype.toString;function Bu(t){return typeof t=="number"||function(e){return!!e&&typeof e=="object"}(t)&&WM.call(t)==="[object Number]"}var qu=null;function gI(){if(qu)return qu;if(typeof navigator<"u"){var t=navigator.userAgent.indexOf("MSIE")>-1,e=navigator.userAgent.indexOf("Firefox")>-1,n=navigator.userAgent.toLowerCase().indexOf("op")>-1,r=navigator.userAgent.indexOf("Chrome")>-1,i=navigator.userAgent.indexOf("Safari")>-1;return r&&i&&(i=!1),r&&n&&(r=!1),qu={isExplorer:t,isFirefox:e,isOpera:n,isChrome:r,isSafari:i}}return qu={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var _I=function(t){return Function.prototype.toString.call(t)};function va(t){if(!t||typeof t!="object")return!1;var e=typeof t.constructor=="function"?Object.getPrototypeOf(t):Object.prototype;if(e===null)return!0;var n=e.constructor;return typeof n=="function"&&n instanceof n&&_I(n)===_I(Object)}function ia(t,e,n,r){t.addEventListener(e,n,function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{i=!1}return i}()?{capture:r,passive:!0}:r)}var $n,dm=!(typeof window>"u"||!window.document||!window.document.createElement);$n=dm?window:typeof self<"u"?self:void 0;var yI,fm=typeof document<"u"&&document.attachEvent,vI=!1;if(dm&&!fm){var GM=function(){var t=$n.requestAnimationFrame||$n.mozRequestAnimationFrame||$n.webkitRequestAnimationFrame||function(e){return $n.setTimeout(e,20)};return function(e){return t(e)}}(),KM=(yI=$n.cancelAnimationFrame||$n.mozCancelAnimationFrame||$n.webkitCancelAnimationFrame||$n.clearTimeout,function(t){return yI(t)}),pm=function(t){var e=t.__resizeTriggers__,n=e.firstElementChild,r=e.lastElementChild,i=n.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,i.style.width=n.offsetWidth+1+"px",i.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},wI=function(t){var e=this;pm(this),this.__resizeRAF__&&KM(this.__resizeRAF__),this.__resizeRAF__=GM(function(){(function(n){return n.offsetWidth!=n.__resizeLast__.width||n.offsetHeight!=n.__resizeLast__.height})(e)&&(e.__resizeLast__.width=e.offsetWidth,e.__resizeLast__.height=e.offsetHeight,e.__resizeListeners__.forEach(function(n){n.call(e,t)}))})},Pf=!1,Cf="",mm="animationstart",Rf="Webkit Moz O ms".split(" "),HM="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(dm){var II=document.createElement("fakeelement");if(II.style.animationName!==void 0&&(Pf=!0),Pf===!1){for(var sa=0;sa<Rf.length;sa++)if(II.style[Rf[sa]+"AnimationName"]!==void 0){Cf="-"+Rf[sa].toLowerCase()+"-",mm=HM[sa],Pf=!0;break}}}var gm="resizeanim",QM="@"+Cf+"keyframes "+gm+" { from { opacity: 0; } to { opacity: 0; } } ",YM=Cf+"animation: 1ms "+gm+"; "}var fc=wr.createPortal!==void 0,EI=fc?wr.createPortal:wr.unstable_renderSubtreeIntoContainer,Wu=function(t){return va(t)?t:{lat:t[0],lng:t[1]}},TI=function(t,e){return e<t?t:e},pc=function(t){function e(r){var i;if((i=t.call(this,r)||this)._getMinZoom=function(){if(i.geoService_.getWidth()>0||i.geoService_.getHeight()>0){var o=Math.ceil(i.geoService_.getWidth()/256)+2,a=Math.ceil(i.geoService_.getHeight()/256)+2,l=Math.max(o,a);return Math.ceil(qM(l))}return 3},i._computeMinZoom=function(o){return fi(o)?i._getMinZoom():o},i._mapDomResizeCallback=function(){if(i.resetSizeOnIdle_=!0,i.maps_){var o=i.props.center||i.props.defaultCenter,a=i.map_.getCenter();i.maps_.event.trigger(i.map_,"resize"),i.map_.setCenter(i.props.resetBoundsOnResize?o:a)}},i._setLayers=function(o){o.forEach(function(a){i.layers_[a]=new i.maps_[a],i.layers_[a].setMap(i.map_)})},i._renderPortal=function(){return Ee.createElement(fh,{experimental:i.props.experimental,onChildClick:i._onChildClick,onChildMouseDown:i._onChildMouseDown,onChildMouseEnter:i._onChildMouseEnter,onChildMouseLeave:i._onChildMouseLeave,geoService:i.geoService_,insideMapPanes:!0,distanceToMouse:i.props.distanceToMouse,getHoverDistance:i._getHoverDistance,dispatcher:i.markersDispatcher_})},i._initMap=function(){if(!i.initialized_){i.initialized_=!0;var o=Wu(i.props.center||i.props.defaultCenter);i.geoService_.setView(o,i.props.zoom||i.props.defaultZoom,0),i._onBoundsChanged();var a=We({},i.props.apiKey&&{key:i.props.apiKey},i.props.bootstrapURLKeys);i.props.googleMapLoader(a,i.props.heatmapLibrary).then(function(l){if(i.mounted_){var u,c,h=i.geoService_.getCenter(),d={zoom:i.props.zoom||i.props.defaultZoom,center:new l.LatLng(h.lat,h.lng)};i.props.heatmap.positions&&(Object.assign(Sf(i),{heatmap:(u=l,c=i.props.heatmap,new u.visualization.HeatmapLayer({data:c.positions.reduce(function(b,Q){var F=Q.weight,Pe=F===void 0?1:F;return b.push({location:new u.LatLng(Q.lat,Q.lng),weight:Pe}),b},[])}))}),function(b,Q){var F=Q.options,Pe=F===void 0?{}:F;Object.keys(Pe).map(function(J){return b.set(J,Pe[J])})}(i.heatmap,i.props.heatmap));var f=mI(l,va),_=typeof i.props.options=="function"?i.props.options(f):i.props.options,v=!fi(i.props.draggable)&&{draggable:i.props.draggable},w=i._computeMinZoom(_.minZoom);i.minZoom_=w;var g=We({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:w},_,d);i.defaultDraggableOption_=fi(g.draggable)?i.defaultDraggableOption_:g.draggable;var m=We({},g,v);m.minZoom=TI(m.minZoom,w);var p=new l.Map(wr.findDOMNode(i.googleMapDom_),m);i.map_=p,i.maps_=l,i._setLayers(i.props.layerTypes);var S=l.version.match(/^3\.(\d+)\./),A=S&&Number(S[1]),E=Sf(i),x=Object.assign(new l.OverlayView,{onAdd:function(){var b=typeof screen<"u"?screen.width+"px":"2000px",Q=typeof screen<"u"?screen.height+"px":"2000px",F=document.createElement("div");if(F.style.backgroundColor="transparent",F.style.position="absolute",F.style.left="0px",F.style.top="0px",F.style.width=b,F.style.height=Q,E.props.overlayViewDivStyle){var Pe=E.props.overlayViewDivStyle;typeof Pe=="object"&&Object.keys(Pe).forEach(function(J){F.style[J]=Pe[J]})}this.getPanes().overlayMouseTarget.appendChild(F),E.geoService_.setMapCanvasProjection(l,x.getProjection()),fc?E.setState({overlay:F}):EI(E,E._renderPortal(),F,function(){return E.setState({overlay:F})})},onRemove:function(){var b=E.state.overlay;b&&!fc&&wr.unmountComponentAtNode(b),E.setState({overlay:null})},draw:function(){if(E.updateCounter_++,E._onBoundsChanged(p,l,!E.props.debounced),E.googleApiLoadedCalled_||(E._onGoogleApiLoaded({map:p,maps:l,ref:E.googleMapDom_}),E.googleApiLoadedCalled_=!0),E.mouse_){var b=E.geoService_.fromContainerPixelToLatLng(E.mouse_);E.mouse_.lat=b.lat,E.mouse_.lng=b.lng}E._onChildMouseMove(),E.markersDispatcher_&&(E.markersDispatcher_.emit("kON_CHANGE"),E.fireMouseEventOnIdle_&&E.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"))}});i.overlay_=x,x.setMap(p),i.props.heatmap.positions&&i.heatmap.setMap(p),i.props.onTilesLoaded&&l.event.addListener(p,"tilesloaded",function(){E._onTilesLoaded()}),l.event.addListener(p,"zoom_changed",function(){E.geoService_.getZoom()!==p.getZoom()&&(E.zoomAnimationInProgress_||(E.zoomAnimationInProgress_=!0,E._onZoomAnimationStart(p.zoom)),A<32)&&(new Date().getTime()-i.zoomControlClickTime_<300?pI(function(){return pI(function(){E.updateCounter_++,E._onBoundsChanged(p,l)})}):(E.updateCounter_++,E._onBoundsChanged(p,l)))}),l.event.addListener(p,"idle",function(){if(i.resetSizeOnIdle_){i._setViewSize();var b=i._computeMinZoom(_.minZoom);b!==i.minZoom_&&(i.minZoom_=b,p.setOptions({minZoom:b})),i.resetSizeOnIdle_=!1}E.zoomAnimationInProgress_&&(E.zoomAnimationInProgress_=!1,E._onZoomAnimationEnd(p.zoom)),E.updateCounter_++,E._onBoundsChanged(p,l),E.dragTime_=0,E.markersDispatcher_&&E.markersDispatcher_.emit("kON_CHANGE")}),l.event.addListener(p,"mouseover",function(){E.mouseInMap_=!0}),l.event.addListener(p,"click",function(){E.mouseInMap_=!0}),l.event.addListener(p,"mouseout",function(){E.mouseInMap_=!1,E.mouse_=null,E.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")}),l.event.addListener(p,"drag",function(){E.dragTime_=new Date().getTime(),E._onDrag(p)}),l.event.addListener(p,"dragend",function(){var b=l.event.addListener(p,"idle",function(){l.event.removeListener(b),E._onDragEnd(p)})}),l.event.addListener(p,"maptypeid_changed",function(){E._onMapTypeIdChange(p.getMapTypeId())})}}).catch(function(l){throw i._onGoogleApiLoaded({map:null,maps:null,ref:i.googleMapDom_}),console.error(l),l})}},i._onGoogleApiLoaded=function(){var o;i.props.onGoogleApiLoaded&&(o=i.props).onGoogleApiLoaded.apply(o,arguments)},i._getHoverDistance=function(){return i.props.hoverDistance},i._onDrag=function(){var o;return i.props.onDrag&&(o=i.props).onDrag.apply(o,arguments)},i._onDragEnd=function(){var o;return i.props.onDragEnd&&(o=i.props).onDragEnd.apply(o,arguments)},i._onMapTypeIdChange=function(){var o;return i.props.onMapTypeIdChange&&(o=i.props).onMapTypeIdChange.apply(o,arguments)},i._onZoomAnimationStart=function(){var o;return i.props.onZoomAnimationStart&&(o=i.props).onZoomAnimationStart.apply(o,arguments)},i._onZoomAnimationEnd=function(){var o;return i.props.onZoomAnimationEnd&&(o=i.props).onZoomAnimationEnd.apply(o,arguments)},i._onTilesLoaded=function(){return i.props.onTilesLoaded&&i.props.onTilesLoaded()},i._onChildClick=function(){var o;if(i.props.onChildClick)return(o=i.props).onChildClick.apply(o,arguments)},i._onChildMouseDown=function(o,a){i.childMouseDownArgs_=[o,a],i.props.onChildMouseDown&&i.props.onChildMouseDown(o,a,We({},i.mouse_))},i._onChildMouseUp=function(){var o;i.childMouseDownArgs_&&(i.props.onChildMouseUp&&(o=i.props).onChildMouseUp.apply(o,i.childMouseDownArgs_.concat([We({},i.mouse_)])),i.childMouseDownArgs_=null,i.childMouseUpTime_=new Date().getTime())},i._onChildMouseMove=function(){var o;i.childMouseDownArgs_&&i.props.onChildMouseMove&&(o=i.props).onChildMouseMove.apply(o,i.childMouseDownArgs_.concat([We({},i.mouse_)]))},i._onChildMouseEnter=function(){var o;if(i.props.onChildMouseEnter)return(o=i.props).onChildMouseEnter.apply(o,arguments)},i._onChildMouseLeave=function(){var o;if(i.props.onChildMouseLeave)return(o=i.props).onChildMouseLeave.apply(o,arguments)},i._setViewSize=function(){if(i.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)i.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var o=wr.findDOMNode(i.googleMapDom_);i.geoService_.setViewSize(o.clientWidth,o.clientHeight)}i._onBoundsChanged()}},i._onWindowResize=function(){i.resetSizeOnIdle_=!0},i._onMapMouseMove=function(o){if(i.mouseInMap_){var a=new Date().getTime();a-i.mouseMoveTime_>50&&(i.boundingRect_=o.currentTarget.getBoundingClientRect()),i.mouseMoveTime_=a;var l=o.clientX-i.boundingRect_.left,u=o.clientY-i.boundingRect_.top;i.mouse_||(i.mouse_={x:0,y:0,lat:0,lng:0}),i.mouse_.x=l,i.mouse_.y=u;var c=i.geoService_.fromContainerPixelToLatLng(i.mouse_);i.mouse_.lat=c.lat,i.mouse_.lng=c.lng,i._onChildMouseMove(),a-i.dragTime_<100?i.fireMouseEventOnIdle_=!0:(i.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),i.fireMouseEventOnIdle_=!1)}},i._onClick=function(){var o;return i.props.onClick&&!i.childMouseDownArgs_&&new Date().getTime()-i.childMouseUpTime_>300&&i.dragTime_===0&&(o=i.props).onClick.apply(o,arguments)},i._onMapClick=function(o){i.markersDispatcher_&&(i._onMapMouseMove(o),new Date().getTime()-i.dragTime_>100&&(i.mouse_&&i._onClick(We({},i.mouse_,{event:o})),i.markersDispatcher_.emit("kON_CLICK",o)))},i._onMapMouseDownNative=function(o){i.mouseInMap_&&i._onMapMouseDown(o)},i._onMapMouseDown=function(o){i.markersDispatcher_&&new Date().getTime()-i.dragTime_>100&&(i._onMapMouseMove(o),i.markersDispatcher_.emit("kON_MDOWN",o))},i._onMapMouseDownCapture=function(){gI().isChrome&&(i.zoomControlClickTime_=new Date().getTime())},i._onKeyDownCapture=function(){gI().isChrome&&(i.zoomControlClickTime_=new Date().getTime())},i._isCenterDefined=function(o){return o&&(va(o)&&Bu(o.lat)&&Bu(o.lng)||o.length===2&&Bu(o[0])&&Bu(o[1]))},i._onBoundsChanged=function(o,a,l){if(o){var u=o.getCenter();i.geoService_.setView([u.lat(),u.lng()],o.getZoom(),0)}if((i.props.onChange||i.props.onBoundsChange)&&i.geoService_.canProject()){var c=i.geoService_.getZoom(),h=i.geoService_.getBounds(),d=i.geoService_.getCenter();if(!function(_,v,w){if(_&&v){for(var g=0;g!==_.length;++g)if(Math.abs(_[g]-v[g])>1e-5)return!1;return!0}return!1}(h,i.prevBounds_)&&l!==!1){var f=i.geoService_.getBounds(i.props.margin);i.props.onBoundsChange&&i.props.onBoundsChange(i.centerIsObject_?We({},d):[d.lat,d.lng],c,h,f),i.props.onChange&&i.props.onChange({center:We({},d),zoom:c,bounds:{nw:{lat:h[0],lng:h[1]},se:{lat:h[2],lng:h[3]},sw:{lat:h[4],lng:h[5]},ne:{lat:h[6],lng:h[7]}},marginBounds:{nw:{lat:f[0],lng:f[1]},se:{lat:f[2],lng:f[3]},sw:{lat:f[4],lng:f[5]},ne:{lat:f[6],lng:f[7]}},size:i.geoService_.hasSize()?{width:i.geoService_.getWidth(),height:i.geoService_.getHeight()}:{width:0,height:0}}),i.prevBounds_=h}}},i._registerChild=function(o){i.googleMapDom_=o},i.mounted_=!1,i.initialized_=!1,i.googleApiLoadedCalled_=!1,i.map_=null,i.maps_=null,i.prevBounds_=null,i.heatmap=null,i.layers_={},i.mouse_=null,i.mouseMoveTime_=0,i.boundingRect_=null,i.mouseInMap_=!0,i.dragTime_=0,i.fireMouseEventOnIdle_=!1,i.updateCounter_=0,i.markersDispatcher_=new hI(Sf(i)),i.geoService_=new BM(256),i.centerIsObject_=va(i.props.center),i.minZoom_=3,i.defaultDraggableOption_=!0,i.zoomControlClickTime_=0,i.childMouseDownArgs_=null,i.childMouseUpTime_=0,i.googleMapDom_=null,i._isCenterDefined(i.props.center||i.props.defaultCenter)){var s=Wu(i.props.center||i.props.defaultCenter);i.geoService_.setView(s,i.props.zoom||i.props.defaultZoom,0)}return i.zoomAnimationInProgress_=!1,i.state={overlay:null},i}wd(e,t);var n=e.prototype;return n.componentDidMount=function(){var r=this;this.mounted_=!0,this.markersDispatcher_=new hI(this),ia(window,"resize",this._onWindowResize,!1),ia(window,"keydown",this._onKeyDownCapture,!0);var i=wr.findDOMNode(this.googleMapDom_);i&&ia(i,"mousedown",this._onMapMouseDownNative,!0),ia(window,"mouseup",this._onChildMouseUp,!1);var s=We({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(s,this.props.heatmapLibrary),setTimeout(function(){r._setViewSize(),r._isCenterDefined(r.props.center||r.props.defaultCenter)&&r._initMap()},0,this),this.props.resetBoundsOnResize&&function(o,a){if(o.parentNode===void 0){var l=document.createElement("div");o.parentNode=l}o=o.parentNode,fm?o.attachEvent("onresize",a):(o.__resizeTriggers__||(getComputedStyle(o).position=="static"&&(o.style.position="relative"),function(){if(!vI){var u=(QM||"")+".resize-triggers { "+(YM||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',c=document.head||document.getElementsByTagName("head")[0],h=document.createElement("style");h.type="text/css",h.styleSheet?h.styleSheet.cssText=u:h.appendChild(document.createTextNode(u)),c.appendChild(h),vI=!0}}(),o.__resizeLast__={},o.__resizeListeners__=[],(o.__resizeTriggers__=document.createElement("div")).className="resize-triggers",o.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',o.appendChild(o.__resizeTriggers__),pm(o),ia(o,"scroll",wI,!0),mm&&o.__resizeTriggers__.addEventListener(mm,function(u){u.animationName==gm&&pm(o)})),o.__resizeListeners__.push(a))}(i,this._mapDomResizeCallback)},n.shouldComponentUpdate=function(r,i){return!Yt(La(this.props,["draggable"]),La(r,["draggable"]))||!Yt(this.state,i)},n.componentDidUpdate=function(r){var i=this;if(!this._isCenterDefined(r.center)&&this._isCenterDefined(this.props.center)&&setTimeout(function(){return i._initMap()},0),this.map_){var s=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var o=Wu(this.props.center),a=this._isCenterDefined(r.center)?Wu(r.center):null;(!a||Math.abs(o.lat-a.lat)+Math.abs(o.lng-a.lng)>1e-5)&&Math.abs(o.lat-s.lat)+Math.abs(o.lng-s.lng)>1e-5&&this.map_.panTo({lat:o.lat,lng:o.lng})}if(fi(this.props.zoom)||Math.abs(this.props.zoom-r.zoom)>0&&this.map_.setZoom(this.props.zoom),!fi(r.draggable)&&fi(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):Yt(r.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!fi(this.props.options)&&!Yt(r.options,this.props.options)){var l=mI(this.maps_,va),u=typeof this.props.options=="function"?this.props.options(l):this.props.options;if("minZoom"in(u=La(u,["zoom","center","draggable"]))){var c=this._computeMinZoom(u.minZoom);u.minZoom=TI(u.minZoom,c)}this.map_.setOptions(u)}Yt(this.props.layerTypes,r.layerTypes)||(Object.keys(this.layers_).forEach(function(h){i.layers_[h].setMap(null),delete i.layers_[h]}),this._setLayers(this.props.layerTypes)),this.heatmap&&!Yt(this.props.heatmap.positions,r.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map(function(h){return{location:new i.maps_.LatLng(h.lat,h.lng),weight:h.weight}})),this.heatmap&&!Yt(this.props.heatmap.options,r.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach(function(h){i.heatmap.set(h,i.props.heatmap.options[h])})}this.markersDispatcher_.emit("kON_CHANGE"),Yt(this.props.hoverDistance,r.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},n.componentWillUnmount=function(){this.mounted_=!1;var r,i,s=wr.findDOMNode(this.googleMapDom_);s&&s.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(i=this._mapDomResizeCallback,r=(r=s).parentNode,fm?r.detachEvent("onresize",i):(r.__resizeListeners__.splice(r.__resizeListeners__.indexOf(i),1),r.__resizeListeners__.length||(r.removeEventListener("scroll",wI),r.__resizeTriggers__=!r.removeChild(r.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},n.render=function(){var r=this.state.overlay,i=r?null:Ee.createElement(UM,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return Ee.createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},Ee.createElement(OM,{registerChild:this._registerChild}),fc&&r&&EI(this._renderPortal(),r),i)},e}(q.Component);pc.propTypes={apiKey:j.string,bootstrapURLKeys:j.any,defaultCenter:j.oneOfType([j.array,j.shape({lat:j.number,lng:j.number})]),center:j.oneOfType([j.array,j.shape({lat:j.number,lng:j.number})]),defaultZoom:j.number,zoom:j.number,onBoundsChange:j.func,onChange:j.func,onClick:j.func,onChildClick:j.func,onChildMouseDown:j.func,onChildMouseUp:j.func,onChildMouseMove:j.func,onChildMouseEnter:j.func,onChildMouseLeave:j.func,onZoomAnimationStart:j.func,onZoomAnimationEnd:j.func,onDrag:j.func,onDragEnd:j.func,onMapTypeIdChange:j.func,onTilesLoaded:j.func,options:j.any,distanceToMouse:j.func,hoverDistance:j.number,debounced:j.bool,margin:j.array,googleMapLoader:j.any,onGoogleApiLoaded:j.func,yesIWantToUseGoogleMapApiInternals:j.bool,draggable:j.bool,style:j.any,resetBoundsOnResize:j.bool,layerTypes:j.arrayOf(j.string),shouldUnregisterMapOnUnmount:j.bool},pc.defaultProps={distanceToMouse:function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:fI,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},pc.googleMapLoader=fI;const JM=({location:t,className:e})=>y.jsx("div",{className:`rounded-xl ${e}`,style:{height:"400px",width:"100%"},children:y.jsx(pc,{bootstrapURLKeys:{key:"AIzaSyBYZsqlV_22CHOZpljGTKa6UZUxnsPo3j0"},defaultCenter:t,defaultZoom:15,draggable:!1,zoomControl:!1,scrollwheel:!1,children:y.jsx(XM,{lat:t.lat,lng:t.lng,text:"Flavor Voyage"})})}),XM=({text:t})=>y.jsx("div",{className:"marker",children:t}),ZM=({theme:t})=>{const e={lat:48.8566,lng:2.3522};return y.jsx("section",{className:`${t==="light"?"light-location":"dark-location"}  py-24 px-4 flex flex-col items-center justify-center`,children:y.jsxs("div",{className:"container mx-auto text-center flex flex-col items-center",children:[y.jsx("h2",{className:"text-5xl font-bold  mb-4",children:"Location"}),y.jsx("div",{className:"mb-12 flex justify-center",style:{height:"400px",width:"50%"},children:y.jsx(JM,{className:"rounded-xl ",location:e})}),y.jsxs("div",{className:"mb-12",children:[y.jsx("h3",{className:"text-5xl font-bold  mb-4",children:"Operating Hours"}),y.jsx("p",{className:"text-lg",children:"Monday - Friday: 9:00 AM - 10:00 PM"}),y.jsx("p",{className:"text-lg",children:"Saturday - Sunday: 10:00 AM - 11:00 PM"})]}),y.jsxs("div",{className:"mb-12",children:[y.jsx("h3",{className:"text-5xl font-bold text-[#eba000] mb-4",children:"Parking Information"}),y.jsx("p",{className:"text-lg",children:"Free parking available in the rear"})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-5xl font-bold text-[#eba000] mb-4",children:"Address"}),y.jsx("p",{className:"text-lg",children:"Centre Commercial Créteil Soleil Avenue de la France libre, 94112 CRETEIL, France"})]})]})})},eL="@firebase/firestore-compat",tL="0.3.27";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new P("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){if(typeof Uint8Array>"u")throw new P("unimplemented","Uint8Arrays are not available in this environment.")}function AI(){if(!KN())throw new P("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Pl{constructor(e){this._delegate=e}static fromBase64String(e){return AI(),new Pl(Ln.fromBase64String(e))}static fromUint8Array(e){return SI(),new Pl(Ln.fromUint8Array(e))}toBase64(){return AI(),this._delegate.toBase64()}toUint8Array(){return SI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t){return nL(t,["next","error","complete"])}function nL(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{enableIndexedDbPersistence(e,n){return SV(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return AV(e._delegate)}clearIndexedDbPersistence(e){return PV(e._delegate)}}class YA{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Gr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&gn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){IA(this._delegate,e,n,r)}enableNetwork(){return RV(this._delegate)}disableNetwork(){return kV(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,vA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return CV(this._delegate)}onSnapshotsInSync(e){return eM(this._delegate,e)}get app(){if(!this._appCompat)throw new P("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Io(this,O_(this._delegate,e))}catch(n){throw vt(n,"collection()","Firestore.collection()")}}doc(e){try{return new nn(this,hh(this._delegate,e))}catch(n){throw vt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new yt(this,vV(this._delegate,e))}catch(n){throw vt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return iM(this._delegate,n=>e(new JA(this,n)))}batch(){return et(this._delegate),new XA(new nM(this._delegate,e=>au(this._delegate,e)))}loadBundle(e){return xV(this._delegate,e)}namedQuery(e){return bV(this._delegate,e).then(n=>n?new yt(this,n):null)}}class Id extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pl(new Ln(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return nn.forKey(n,this.firestore,null)}}function iL(t){pN(t)}class JA{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Id(e)}get(e){const n=bi(e);return this._delegate.get(n).then(r=>new Cl(this._firestore,new rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=bi(e);return r?(H_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=bi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=bi(e);return this._delegate.delete(n),this}}class XA{constructor(e){this._delegate=e}set(e,n,r){const i=bi(e);return r?(H_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=bi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=bi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Zi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ma(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Rl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Zi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Zi(e,new Id(e),n),i.set(n,s)),s}}Zi.INSTANCES=new WeakMap;class nn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Id(e)}static forPath(e,n,r){if(e.length%2!==0)throw new P("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nn(n,new Se(n._delegate,r,new N(e)))}static forKey(e,n,r){return new nn(n,new Se(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Io(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Io(this.firestore,O_(this._delegate,e))}catch(n){throw vt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=z(e),e instanceof Se?AA(this._delegate,e):!1}set(e,n){n=H_("DocumentReference.set",n);try{return n?sI(this._delegate,e,n):sI(this._delegate,e)}catch(r){throw vt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?oI(this._delegate,e):oI(this._delegate,e,n,...r)}catch(i){throw vt(i,"updateDoc()","DocumentReference.update()")}}delete(){return XV(this._delegate)}onSnapshot(...e){const n=ZA(e),r=eP(e,i=>new Cl(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return zA(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=HV(this._delegate):(e==null?void 0:e.source)==="server"?n=QV(this._delegate):n=KV(this._delegate),n.then(r=>new Cl(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new nn(this.firestore,e?this._delegate.withConverter(Zi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vt(t,e,n){return t.message=t.message.replace(e,n),t}function ZA(t){for(const e of t)if(typeof e=="object"&&!_m(e))return e;return{}}function eP(t,e){var n,r;let i;return _m(t[0])?i=t[0]:_m(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Cl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new nn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return $A(this._delegate,e._delegate)}}class Rl extends Cl{data(e){const n=this._delegate.data(e);return this._delegate._converter||mN(n!==void 0),n}}class yt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Id(e)}where(e,n,r){try{return new yt(this.firestore,pr(this._delegate,LV(e,n,r)))}catch(i){throw vt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new yt(this.firestore,pr(this._delegate,FV(e,n)))}catch(r){throw vt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new yt(this.firestore,pr(this._delegate,UV(e)))}catch(n){throw vt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new yt(this.firestore,pr(this._delegate,$V(e)))}catch(n){throw vt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new yt(this.firestore,pr(this._delegate,jV(...e)))}catch(n){throw vt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new yt(this.firestore,pr(this._delegate,zV(...e)))}catch(n){throw vt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new yt(this.firestore,pr(this._delegate,BV(...e)))}catch(n){throw vt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new yt(this.firestore,pr(this._delegate,qV(...e)))}catch(n){throw vt(n,"endAt()","Query.endAt()")}}isEqual(e){return PA(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=YV(this._delegate):(e==null?void 0:e.source)==="server"?n=JV(this._delegate):n=jA(this._delegate),n.then(r=>new ym(this.firestore,new Jr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=ZA(e),r=eP(e,i=>new ym(this.firestore,new Jr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return zA(this._delegate,n,r)}withConverter(e){return new yt(this.firestore,e?this._delegate.withConverter(Zi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class sL{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Rl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ym{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new yt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Rl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new sL(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Rl(this._firestore,r))})}isEqual(e){return $A(this._delegate,e._delegate)}}class Io extends yt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nn(this.firestore,e):null}doc(e){try{return e===void 0?new nn(this.firestore,hh(this._delegate)):new nn(this.firestore,hh(this._delegate,e))}catch(n){throw vt(n,"doc()","CollectionReference.doc()")}}add(e){return ZV(this._delegate,e).then(n=>new nn(this.firestore,n))}isEqual(e){return AA(this._delegate,e._delegate)}withConverter(e){return new Io(this.firestore,e?this._delegate.withConverter(Zi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bi(t){return re(t,Se)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(...e){this._delegate=new Yr(...e)}static documentId(){return new Q_(ge.keyField().canonicalString())}isEqual(e){return e=z(e),e instanceof Yr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this._delegate=e}static serverTimestamp(){const e=oM();return e._methodName="FieldValue.serverTimestamp",new Ti(e)}static delete(){const e=sM();return e._methodName="FieldValue.delete",new Ti(e)}static arrayUnion(...e){const n=aM(...e);return n._methodName="FieldValue.arrayUnion",new Ti(n)}static arrayRemove(...e){const n=lM(...e);return n._methodName="FieldValue.arrayRemove",new Ti(n)}static increment(e){const n=uM(e);return n._methodName="FieldValue.increment",new Ti(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL={Firestore:YA,GeoPoint:hd,Timestamp:ye,Blob:Pl,Transaction:JA,WriteBatch:XA,DocumentReference:nn,DocumentSnapshot:Cl,Query:yt,QueryDocumentSnapshot:Rl,QuerySnapshot:ym,CollectionReference:Io,FieldPath:Q_,FieldValue:Ti,setLogLevel:iL,CACHE_SIZE_UNLIMITED:EV};function aL(t,e){t.INTERNAL.registerComponent(new Vn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},oL)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){aL(t,(e,n)=>new YA(e,n,new rL)),t.registerVersion(eL,tL)}lL(ve);const tP=({formData:t,handleInputChange:e,theme:n})=>y.jsxs("div",{className:`${n==="light"?"light-fields":"dark-fields"}`,children:[y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"name",className:" text-sm font-semibold ",children:"Name:"}),y.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:e,className:"px-3 py-2 border rounded-md focus:outline-none ",required:!0})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"email",className:"text-sm font-semibold ",children:"Email:"}),y.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:e,className:"px-3 py-2 border rounded-md focus:outline-none ",required:!0})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"phoneNumber",className:"text-sm font-semibold ",children:"Phone Number:"}),y.jsx("input",{type:"tel",id:"phoneNumber",name:"phoneNumber",value:t.phoneNumber,onChange:e,className:"px-3 py-2 border rounded-md focus:outline-none ",required:!0})]})]}),Y_=({message:t,onClose:e,theme:n})=>y.jsx("div",{className:`${n==="light"?"light-alert":"dark-alert"} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75`,children:y.jsxs("div",{className:" p-8 rounded-lg",children:[y.jsx("p",{className:"text-lg ",children:t}),y.jsx("button",{onClick:e,className:"px-4 py-2  mt-4 rounded-md focus:outline-none",children:"OK"})]})}),uL=({theme:t})=>{const[e,n]=q.useState({name:"",email:"",phoneNumber:"",numberOfPeople:""}),[r,i]=q.useState(!1),[s,o]=q.useState(""),a=c=>{n({...e,[c.target.name]:c.target.value})},l=async c=>{c.preventDefault();try{const h={apiKey:"AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",authDomain:"resturant-94f15.firebaseapp.com",projectId:"resturant-94f15",storageBucket:"resturant-94f15.appspot.com",messagingSenderId:"59447957183",appId:"1:59447957183:web:a14ae5107e9ec34479980a",measurementId:"G-KC29EGQM0Q"};ve.initializeApp(h);const f=ve.firestore().collection("reservations"),_=new Date,v=new Date(_.getTime()-2*60*60*1e3),w=await f.where("timestamp",">=",v).get();let g=0;if(w.forEach(m=>{g+=parseInt(m.data().numberOfPeople)}),g+e.numberOfPeople>300){o("Sorry! The restaurant capacity is full for the next 2 hours. Please choose a different time."),i(!0),n({name:"",email:"",phoneNumber:"",numberOfPeople:""});return}await f.add({...e,timestamp:ve.firestore.FieldValue.serverTimestamp()}),o("Your reservation has been confirmed!"),i(!0),n({name:"",email:"",phoneNumber:"",numberOfPeople:""})}catch(h){console.error("Error handling Firestore:",h),o("An error occurred while processing your reservation. Please try again later."),i(!0)}},u=()=>{i(!1)};return y.jsxs("div",{className:`${t==="light"?"light-reservations":"dark-reservations"}  container min-w-full  h-screen  flex flex-col justify-center items-center`,children:[y.jsx("h2",{className:"mb-4 text-2xl font-bold ",children:"Reservations"}),y.jsxs("form",{onSubmit:l,className:"flex flex-col gap-4",children:[y.jsx(tP,{formData:e,handleInputChange:a}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"numberOfPeople",className:"text-sm font-semibold ",children:"Number of People:"}),y.jsx("input",{type:"number",min:"0",id:"numberOfPeople",name:"numberOfPeople",value:e.numberOfPeople,onChange:a,className:"px-3 py-2 border rounded-md focus:outline-none ",required:!0})]}),y.jsx("button",{type:"submit",className:"px-4 py-2  rounded-md  focus:outline-none ",children:"Submit"})]}),r&&y.jsx(Y_,{message:s,onClose:u,theme:t})]})},cL=({theme:t})=>{const[e,n]=q.useState({name:"",email:"",phoneNumber:"",eventType:"",numberOfPeople:""}),[r,i]=q.useState(!1),[s,o]=q.useState(""),a=c=>{n({...e,[c.target.name]:c.target.value})},l=async c=>{c.preventDefault();try{const h={apiKey:"AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",authDomain:"resturant-94f15.firebaseapp.com",projectId:"resturant-94f15",storageBucket:"resturant-94f15.appspot.com",messagingSenderId:"59447957183",appId:"1:59447957183:web:a14ae5107e9ec34479980a",measurementId:"G-KC29EGQM0Q"};ve.initializeApp(h);const f=ve.firestore().collection("privateEventsReservations"),_=new Date,v=new Date(_.getTime()-2*60*60*1e3),w=await f.where("timestamp",">=",v).get();let g=0;if(w.forEach(m=>{g+=parseInt(m.data().numberOfPeople)}),g+e.numberOfPeople>300){o("Sorry! The restaurant capacity is full for the next 2 hours. Please choose a different time."),i(!0),n({name:"",email:"",phoneNumber:"",eventType:"",numberOfPeople:""});return}await f.add({...e,timestamp:ve.firestore.FieldValue.serverTimestamp()}),o("Your reservation for the private event has been confirmed!"),i(!0),n({name:"",email:"",phoneNumber:"",eventType:"",numberOfPeople:""})}catch(h){console.error("Error handling Firestore:",h),o("An error occurred while processing your reservation. Please try again later."),i(!0)}},u=()=>{i(!1)};return y.jsxs("div",{className:`${t==="light"?"light-pEvents":"dark-pEvents"}  container min-w-full  h-screen  flex flex-col justify-center items-center`,children:[y.jsx("h2",{className:"mb-4 text-2xl font-bold ",children:"Private Events Reservations"}),y.jsxs("form",{onSubmit:l,className:"flex flex-col gap-4",children:[y.jsx(tP,{formData:e,handleInputChange:a,theme:t}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"eventType",className:"text-sm font-semibold text-[#d7ae55]",children:"Event Type:"}),y.jsx("input",{type:"text",id:"eventType",name:"eventType",value:e.eventType,onChange:a,className:"px-3 py-2 border rounded-md focus:outline-none text-black",required:!0})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"numberOfPeople",className:"text-sm font-semibold text-[#eba000]",children:"Number of People:"}),y.jsx("input",{type:"number",min:"0",id:"numberOfPeople",name:"numberOfPeople",value:e.numberOfPeople,onChange:a,className:"px-3 py-2 border rounded-md focus:outline-none text-black",required:!0})]}),y.jsx("button",{type:"submit",className:"px-4 py-2  rounded-md  focus:outline-none ",children:"Submit"})]}),r&&y.jsx(Y_,{message:s,onClose:u,theme:t})]})},hL=({theme:t})=>{const[e,n]=q.useState([]);return q.useEffect(()=>{(async()=>{try{const i={apiKey:"AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",authDomain:"resturant-94f15.firebaseapp.com",projectId:"resturant-94f15",storageBucket:"resturant-94f15.appspot.com",messagingSenderId:"59447957183",appId:"1:59447957183:web:a14ae5107e9ec34479980a",measurementId:"G-KC29EGQM0Q"};ve.initializeApp(i);const l=(await ve.firestore().collection("menu_dishes").get()).docs.map(u=>({id:u.id,...u.data()}));n(l)}catch(i){console.error("Error fetching dishes:",i)}})()},[]),y.jsxs("div",{className:` ${t==="light"?"light-card":"dark-card"}  min-h-screen flex flex-col justify-center items-center py-32 px-4 md:py-16 md:px-8 sm:py-40`,children:[y.jsx("h2",{className:"text-2xl font-semibold mb-4 ",children:"Dishes"}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(r=>y.jsxs("div",{className:" rounded-md shadow-md p-4  transition duration-300 ease-in-out transform hover:scale-105 ",children:[y.jsx("img",{src:r.imgSrc,alt:r.title,className:"w-full h-96 object-cover rounded-md mb-4"}),y.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:r.title}),y.jsx("p",{className:" mb-2",children:r.description}),y.jsxs("p",{className:" font-bold text-center",children:["$",r.price]})]},r.id))})]})},dL=({theme:t})=>{const[e,n]=q.useState([]);return q.useEffect(()=>{(async()=>{try{const i={apiKey:"AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",authDomain:"resturant-94f15.firebaseapp.com",projectId:"resturant-94f15",storageBucket:"resturant-94f15.appspot.com",messagingSenderId:"59447957183",appId:"1:59447957183:web:a14ae5107e9ec34479980a",measurementId:"G-KC29EGQM0Q"};ve.initializeApp(i);const l=(await ve.firestore().collection("menu_drinks").get()).docs.map(u=>({id:u.id,...u.data()}));n(l)}catch(i){console.error("Error fetching drinks:",i)}})()},[]),y.jsxs("div",{className:` ${t==="light"?"light-card":"dark-card"}  min-h-screen flex flex-col justify-center items-center py-32 px-4 md:py-16 md:px-8 sm:py-40`,children:[y.jsx("h2",{className:"text-2xl font-semibold mb-4 ",children:"Drinks"}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(r=>y.jsxs("div",{className:" rounded-md shadow-md p-4  transition duration-300 ease-in-out transform hover:scale-105 ",children:[y.jsx("img",{src:r.imgSrc,alt:r.title,className:"w-full h-96 object-cover rounded-md mb-4"}),y.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:r.title}),y.jsx("p",{className:" mb-2",children:r.description}),y.jsxs("p",{className:" font-bold text-center",children:["$",r.price]})]},r.id))})]})},fL=({theme:t})=>{const[e,n]=q.useState([]);return q.useState({title:"",description:"",price:"",imgSrc:""}),q.useEffect(()=>{(async()=>{try{const i={apiKey:"AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",authDomain:"resturant-94f15.firebaseapp.com",projectId:"resturant-94f15",storageBucket:"resturant-94f15.appspot.com",messagingSenderId:"59447957183",appId:"1:59447957183:web:a14ae5107e9ec34479980a",measurementId:"G-KC29EGQM0Q"};ve.initializeApp(i);const l=(await ve.firestore().collection("menu_alcohol").get()).docs.map(u=>({id:u.id,...u.data()}));n(l)}catch(i){console.error("Error fetching alcohol:",i)}})()},[]),y.jsxs("div",{className:` ${t==="light"?"light-card":"dark-card"}  min-h-screen flex flex-col justify-center items-center py-32 px-4 md:py-16 md:px-8 sm:py-40`,children:[y.jsx("h2",{className:"text-center text-2xl font-semibold mb-4 ",children:"Alcohol"}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(r=>y.jsxs("div",{className:"  rounded-md shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 ",children:[y.jsx("img",{src:r.imgSrc,alt:r.title,className:"w-full h-96 object-cover rounded-md mb-4"}),y.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:r.title}),y.jsx("p",{className:"-300 mb-2",children:r.description}),y.jsxs("p",{className:" font-bold text-center",children:["$",r.price]})]},r.id))})]})};function J_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const oa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},vs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function nP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mL=pL,gL=nP,rP=new ss("auth","Firebase",nP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Mh("@firebase/auth");function _L(t,...e){ph.logLevel<=Y.WARN&&ph.warn(`Auth (${ti}): ${t}`,...e)}function mc(t,...e){ph.logLevel<=Y.ERROR&&ph.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,...e){throw X_(t,...e)}function at(t,...e){return X_(t,...e)}function iP(t,e,n){const r=Object.assign(Object.assign({},gL()),{[e]:n});return new ss("auth","Firebase",r).create(e,{appName:t.name})}function Fo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(t,"argument-error"),iP(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function X_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rP.create(t,...e)}function k(t,e,...n){if(!t)throw X_(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mc(e),new Error(e)}function _n(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Z_(){return PI()==="http:"||PI()==="https:"}function PI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z_()||dT()||"connection"in navigator)?navigator.onLine:!0}function vL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=qk()||Ig()}get(){return yL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=new lu(3e4,6e4);function Ne(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function De(t,e,n,r,i={}){return oP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Co(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sP.fetch()(aP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function oP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wL),e);try{const i=new TL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iP(t,c,u);ut(t,c)}}catch(i){if(i instanceof Et)throw i;ut(t,"network-request-failed",{message:String(i)})}}async function ur(t,e,n,r,i={}){const s=await De(t,e,n,r,i);return"mfaPendingCredential"in s&&ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ey(t.config,i):`${t.config.apiScheme}://${i}`}function EL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),IL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=at(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){return t!==void 0&&t.getResponse!==void 0}function RI(t){return t!==void 0&&t.enterprise!==void 0}class SL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(t){return(await De(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function PL(t,e){return De(t,"GET","/v2/recaptchaConfig",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(t,e){return De(t,"POST","/v1/accounts:delete",e)}async function RL(t,e){return De(t,"POST","/v1/accounts:update",e)}async function kL(t,e){return De(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xL(t,e=!1){const n=z(t),r=await n.getIdToken(e),i=Ed(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fa(kf(i.auth_time)),issuedAtTime:Fa(kf(i.iat)),expirationTime:Fa(kf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kf(t){return Number(t)*1e3}function Ed(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const i=cT(n);return i?JSON.parse(i):(mc("Failed to decode base64 JWT payload"),null)}catch(i){return mc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bL(t){const e=Ed(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Et&&NL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ir(t,kL(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ML(s.providerUserInfo):[],a=VL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lP(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function OL(t){const e=z(t);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ML(t){return t.map(e=>{var{providerId:n}=e,r=J_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LL(t,e){const n=await oP(t,{},async()=>{const r=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FL(t,e){return De(t,"POST","/v2/accounts:revokeToken",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bl;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bl,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=J_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lP(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ir(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xL(this,e)}reload(){return OL(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ir(this,CL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:S,isAnonymous:A,providerData:E,stsTokenManager:x}=n;k(p&&x,e,"internal-error");const b=bl.fromJSON(this.name,x);k(typeof p=="string",e,"internal-error"),mr(h,e.name),mr(d,e.name),k(typeof S=="boolean",e,"internal-error"),k(typeof A=="boolean",e,"internal-error"),mr(f,e.name),mr(_,e.name),mr(v,e.name),mr(w,e.name),mr(g,e.name),mr(m,e.name);const Q=new Mi({uid:p,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:f,tenantId:v,stsTokenManager:b,createdAt:g,lastLoginAt:m});return E&&Array.isArray(E)&&(Q.providerData=E.map(F=>Object.assign({},F))),w&&(Q._redirectEventId=w),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new bl;i.updateFromServerResponse(n);const s=new Mi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new Map;function zt(t){_n(t instanceof Function,"Expected a class definition");let e=kI.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kI.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uP.type="NONE";const Eo=uP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,s),this.fullPersistenceKey=Li("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(zt(Eo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zt(Eo);const o=Li(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Mi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Js(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Js(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fP(e))return"Blackberry";if(pP(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||hP(e))&&!e.includes("edge/"))return"Chrome";if(uu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cP(t=we()){return/firefox\//i.test(t)}function ty(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hP(t=we()){return/crios\//i.test(t)}function dP(t=we()){return/iemobile/i.test(t)}function uu(t=we()){return/android/i.test(t)}function fP(t=we()){return/blackberry/i.test(t)}function pP(t=we()){return/webos/i.test(t)}function Uo(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UL(t=we()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function $L(t=we()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jL(){return fT()&&document.documentMode===10}function mP(t=we()){return Uo(t)||uu(t)||pP(t)||fP(t)||/windows phone/i.test(t)||dP(t)}function zL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t,e=[]){let n;switch(t){case"Browser":n=xI(we());break;case"Worker":n=`${xI(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qL(t,e={}){return De(t,"GET","/v2/passwordPolicy",Ne(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=6;class GL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bI(this),this.idTokenSubscription=new bI(this),this.beforeStateQueue=new BL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?z(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qL(this),n=new GL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_L(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function be(t){return z(t)}class bI{constructor(e){this.auth=e,this.observer=null,this.addObserver=mT(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HL(t){cu=t}function ny(t){return cu.loadJS(t)}function QL(){return cu.recaptchaV2Script}function YL(){return cu.recaptchaEnterpriseScript}function JL(){return cu.gapiScript}function _P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XL="recaptcha-enterprise",ZL="NO_RECAPTCHA";class eF{constructor(e){this.type=XL,this.auth=be(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{PL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new SL(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;RI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ZL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&RI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=YL();l.length!==0&&(l+=a),ny(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function NI(t,e,n,r=!1){const i=new eF(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await NI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await NI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function tF(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nF(t,e,n){const r=be(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=yP(e),{host:o,port:a}=rF(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||iF()}function yP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rF(t){const e=yP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:DI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:DI(o)}}}function DI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iF(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e){return De(t,"POST","/v1/accounts:resetPassword",Ne(t,e))}async function sF(t,e){return De(t,"POST","/v1/accounts:update",e)}async function oF(t,e){return De(t,"POST","/v1/accounts:signUp",e)}async function aF(t,e){return De(t,"POST","/v1/accounts:update",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lF(t,e){return ur(t,"POST","/v1/accounts:signInWithPassword",Ne(t,e))}async function Td(t,e){return De(t,"POST","/v1/accounts:sendOobCode",Ne(t,e))}async function uF(t,e){return Td(t,e)}async function cF(t,e){return Td(t,e)}async function hF(t,e){return Td(t,e)}async function dF(t,e){return Td(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fF(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}async function pF(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends $o{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Dl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nl(e,n,"signInWithPassword",lF);case"emailLink":return fF(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nl(e,r,"signUpPassword",oF);case"emailLink":return pF(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e){return ur(t,"POST","/v1/accounts:signInWithIdp",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mF="http://localhost";class Fn extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=J_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:mF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gF(t,e){return De(t,"POST","/v1/accounts:sendVerificationCode",Ne(t,e))}async function _F(t,e){return ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e))}async function yF(t,e){const n=await ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e));if(n.temporaryProof)throw wa(t,"account-exists-with-different-credential",n);return n}const vF={USER_NOT_FOUND:"user-not-found"};async function wF(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,n),vF)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends $o{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Fi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Fi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return _F(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return yF(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return wF(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Fi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IF(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EF(t){const e=Ls(fa(t)).link,n=e?Ls(fa(e)).deep_link_id:null,r=Ls(fa(t)).deep_link_id;return(r?Ls(fa(r)).link:null)||r||n||e||t}class Sd{constructor(e){var n,r,i,s,o,a;const l=Ls(fa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=IF((i=l.mode)!==null&&i!==void 0?i:null);k(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=EF(e);try{return new Sd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.providerId=li.PROVIDER_ID}static credential(e,n){return Dl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sd.parseLink(n);return k(r,"argument-error"),Dl._fromEmailAndCode(e,r.code,r.tenantId)}}li.PROVIDER_ID="password";li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends cr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xs extends jo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),Fn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Fn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Xs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends jo{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends jo{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TF="http://localhost";class To extends $o{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new To(r,s)}static _create(e,n){return new To(e,n)}buildRequest(){return{requestUri:TF,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF="saml.";class mh extends cr{constructor(e){k(e.startsWith(SF),"argument-error"),super(e)}static credentialFromResult(e){return mh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return mh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=To.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return To._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends jo{constructor(){super("twitter.com")}static credential(e,n){return Fn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return An.credential(n,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return ur(t,"POST","/v1/accounts:signUp",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mi._fromIdTokenResponse(e,r,i),o=OI(r);return new an({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=OI(r);return new an({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function OI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AF(t){var e;const n=be(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new an({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await wP(n,{returnSecureToken:!0}),i=await an._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends Et{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gh(e,n,r,i)}}function IP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PF(t,e){const n=z(t);await Ad(!0,n,e);const{providerUserInfo:r}=await RL(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=EP(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ry(t,e,n=!1){const r=await ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return an._forOperation(t,"link",r)}async function Ad(t,e,n){await xl(e);const r=EP(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ir(t,IP(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=Ed(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),an._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e,n=!1){const r="signIn",i=await IP(t,r,e),s=await an._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Pd(t,e){return SP(be(t),e)}async function AP(t,e){const n=z(t);return await Ad(!1,n,e.providerId),ry(n,e)}async function PP(t,e){return TP(z(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CF(t,e){return ur(t,"POST","/v1/accounts:signInWithCustomToken",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RF(t,e){const n=be(t),r=await CF(n,{token:e,returnSecureToken:!0}),i=await an._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?iy._fromServerResponse(e,n):"totpInfo"in n?sy._fromServerResponse(e,n):ut(e,"internal-error")}}class iy extends hu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new iy(n)}}class sy extends hu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new sy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(t){const e=be(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kF(t,e,n){const r=be(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Cd(r,i,n),await Nl(r,i,"getOobCode",cF)}async function xF(t,e,n){await vP(z(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oy(t),r})}async function bF(t,e){await aF(z(t),{oobCode:e})}async function CP(t,e){const n=z(t),r=await vP(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=hu._fromServerResponse(be(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function NF(t,e){const{data:n}=await CP(z(t),e);return n.email}async function DF(t,e,n){const r=be(t),o=await Nl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oy(t),l}),a=await an._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function OF(t,e,n){return Pd(z(t),li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VF(t,e,n){const r=be(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){k(a.handleCodeInApp,r,"argument-error"),a&&Cd(r,o,a)}s(i,n),await Nl(r,i,"getOobCode",hF)}function MF(t,e){const n=Sd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function LF(t,e,n){const r=z(t),i=li.credentialWithLink(e,n||kl());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Pd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FF(t,e){return De(t,"POST","/v1/accounts:createAuthUri",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UF(t,e){const n=Z_()?kl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await FF(z(t),r);return i||[]}async function $F(t,e){const n=z(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Cd(n.auth,i,e);const{email:s}=await uF(n.auth,i);s!==t.email&&await t.reload()}async function jF(t,e,n){const r=z(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Cd(r.auth,s,n);const{email:o}=await dF(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zF(t,e){return De(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BF(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=z(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ir(r,zF(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qF(t,e){return RP(z(t),e,null)}function WF(t,e){return RP(z(t),null,e)}async function RP(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ir(t,sF(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Ed(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Zs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new KF(s,i);case"github.com":return new HF(s,i);case"google.com":return new QF(s,i);case"twitter.com":return new YF(s,i,t.screenName||null);case"custom":case"anonymous":return new Zs(s,null);default:return new Zs(s,r,i)}}class Zs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class kP extends Zs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class KF extends Zs{constructor(e,n){super(e,"facebook.com",n)}}class HF extends kP{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class QF extends Zs{constructor(e,n){super(e,"google.com",n)}}class YF extends kP{constructor(e,n,r){super(e,"twitter.com",n,r)}}function JF(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:GF(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Ni("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ni("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ni._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ni._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=be(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>hu._fromServerResponse(r,a));k(i.mfaPendingCredential,r,"internal-error");const o=Ni._fromMfaPendingCredential(i.mfaPendingCredential);return new ay(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await an._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return k(n.user,r,"internal-error"),an._forOperation(n.user,n.operationType,u);default:ut(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function XF(t,e){var n;const r=z(t),i=e;return k(e.customData.operationType,r,"argument-error"),k((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),ay._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZF(t,e){return De(t,"POST","/v2/accounts/mfaEnrollment:start",Ne(t,e))}function e2(t,e){return De(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(t,e))}function t2(t,e){return De(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(t,e))}class ly{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>hu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ly(e)}async getSession(){return Ni._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ir(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ir(this.user,t2(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const xf=new WeakMap;function n2(t){const e=z(t);return xf.has(e)||xf.set(e,ly._fromUser(e)),xf.get(e)}const _h="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_h,"1"),this.storage.removeItem(_h),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(){const t=we();return ty(t)||Uo(t)}const i2=1e3,s2=10;class bP extends xP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=r2()&&zL(),this.fallbackToPolling=mP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,s2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bP.type="LOCAL";const uy=bP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP extends xP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NP.type="SESSION";const es=NP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await o2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=du("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function l2(t){Ue().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function u2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function h2(){return cy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP="firebaseLocalStorageDb",d2=1,yh="firebaseLocalStorage",OP="fbase_key";class fu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kd(t,e){return t.transaction([yh],e?"readwrite":"readonly").objectStore(yh)}function f2(){const t=indexedDB.deleteDatabase(DP);return new fu(t).toPromise()}function vm(){const t=indexedDB.open(DP,d2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yh,{keyPath:OP})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yh)?e(r):(r.close(),await f2(),e(await vm()))})})}async function VI(t,e,n){const r=kd(t,!0).put({[OP]:e,value:n});return new fu(r).toPromise()}async function p2(t,e){const n=kd(t,!1).get(e),r=await new fu(n).toPromise();return r===void 0?null:r.value}function MI(t,e){const n=kd(t,!0).delete(e);return new fu(n).toPromise()}const m2=800,g2=3;class VP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>g2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rd._getInstance(h2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await u2(),!this.activeServiceWorker)return;this.sender=new a2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vm();return await VI(e,_h,"1"),await MI(e,_h),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>VI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>p2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>MI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kd(i,!1).getAll();return new fu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VP.type="LOCAL";const Ol=VP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t,e){return De(t,"POST","/v2/accounts/mfaSignIn:start",Ne(t,e))}function y2(t,e){return De(t,"POST","/v2/accounts/mfaSignIn:finalize",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=500,w2=6e4,Gu=1e12;class I2{constructor(e){this.auth=e,this.counter=Gu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new E2(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Gu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Gu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Gu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class E2{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=T2(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},w2)},v2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function T2(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=_P("rcb"),S2=new lu(3e4,6e4);class A2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ue().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return k(P2(n),e,"argument-error"),this.shouldResolveImmediately(n)&&CI(Ue().grecaptcha)?Promise.resolve(Ue().grecaptcha):new Promise((r,i)=>{const s=Ue().setTimeout(()=>{i(at(e,"network-request-failed"))},S2.get());Ue()[bf]=()=>{Ue().clearTimeout(s),delete Ue()[bf];const a=Ue().grecaptcha;if(!a||!CI(a)){i(at(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${QL()}?${Co({onload:bf,render:"explicit",hl:n})}`;ny(o).catch(()=>{clearTimeout(s),i(at(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ue().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function P2(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class C2{async load(e){return new I2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="recaptcha",R2={theme:"light",type:"image"};let k2=class{constructor(e,n,r=Object.assign({},R2)){this.parameters=r,this.type=MP,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=be(e),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new C2:new A2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ue()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(Z_()&&!cy(),this.auth,"internal-error"),await x2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await AL(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function x2(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Fi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function b2(t,e,n){const r=be(t),i=await xd(r,e,z(n));return new hy(i,s=>Pd(r,s))}async function N2(t,e,n){const r=z(t);await Ad(!1,r,"phone");const i=await xd(r.auth,e,z(n));return new hy(i,s=>AP(r,s))}async function D2(t,e,n){const r=z(t),i=await xd(r.auth,e,z(n));return new hy(i,s=>PP(r,s))}async function xd(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===MP,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await ZF(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await _2(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await gF(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function O2(t,e){await ry(z(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts=class gc{constructor(e){this.providerId=gc.PROVIDER_ID,this.auth=be(e)}verifyPhoneNumber(e,n){return xd(this.auth,e,z(n))}static credential(e,n){return Fi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return gc.credentialFromTaggedObject(n)}static credentialFromError(e){return gc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Fi._fromTokenResponse(n,r):null}};ts.PROVIDER_ID="phone";ts.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t,e){return e?zt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V2(t){return SP(t.auth,new dy(t),t.bypassAuthState)}function M2(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),TP(n,new dy(t),t.bypassAuthState)}async function L2(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),ry(n,new dy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V2;case"linkViaPopup":case"linkViaRedirect":return L2;case"reauthViaPopup":case"reauthViaRedirect":return M2;default:ut(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new lu(2e3,1e4);async function U2(t,e,n){const r=be(t);Fo(t,e,cr);const i=ds(r,n);return new Kn(r,"signInViaPopup",e,i).executeNotNull()}async function $2(t,e,n){const r=z(t);Fo(r.auth,e,cr);const i=ds(r.auth,n);return new Kn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function j2(t,e,n){const r=z(t);Fo(r.auth,e,cr);const i=ds(r.auth,n);return new Kn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Kn extends LP{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F2.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="pendingRedirect",Ua=new Map;class B2 extends LP{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await q2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q2(t,e){const n=UP(e),r=FP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function fy(t,e){return FP(t)._set(UP(e),"true")}function W2(){Ua.clear()}function py(t,e){Ua.set(t._key(),e)}function FP(t){return zt(t._redirectPersistence)}function UP(t){return Li(z2,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t,e,n){return K2(t,e,n)}async function K2(t,e,n){const r=be(t);Fo(t,e,cr),await r._initializationPromise;const i=ds(r,n);return await fy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function H2(t,e,n){return Q2(t,e,n)}async function Q2(t,e,n){const r=z(t);Fo(r.auth,e,cr),await r.auth._initializationPromise;const i=ds(r.auth,n);await fy(i,r.auth);const s=await $P(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Y2(t,e,n){return J2(t,e,n)}async function J2(t,e,n){const r=z(t);Fo(r.auth,e,cr),await r.auth._initializationPromise;const i=ds(r.auth,n);await Ad(!1,r,e.providerId),await fy(i,r.auth);const s=await $P(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function X2(t,e){return await be(t)._initializationPromise,bd(t,e,!1)}async function bd(t,e,n=!1){const r=be(t),i=ds(r,e),o=await new B2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function $P(t){const e=du(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=10*60*1e3;class jP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zP(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z2&&this.cachedEventUids.clear(),this.cachedEventUids.has(LI(e))}saveEventToCache(e){this.cachedEventUids.add(LI(e)),this.lastProcessedEventTime=Date.now()}}function LI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zP({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zP(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,e={}){return De(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n4=/^https?/;async function r4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BP(t);for(const n of e)try{if(i4(n))return}catch{}ut(t,"unauthorized-domain")}function i4(t){const e=kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!n4.test(n))return!1;if(t4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=new lu(3e4,6e4);function FI(){const t=Ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function o4(t){return new Promise((e,n)=>{var r,i,s;function o(){FI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{FI(),n(at(t,"network-request-failed"))},timeout:s4.get()})}if(!((i=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ue().gapi)===null||s===void 0)&&s.load)o();else{const a=_P("iframefcb");return Ue()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},ny(`${JL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _c=null,e})}let _c=null;function a4(t){return _c=_c||o4(t),_c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=new lu(5e3,15e3),u4="__/auth/iframe",c4="emulator/auth/iframe",h4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f4(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ey(e,c4):`https://${t.config.authDomain}/${u4}`,r={apiKey:e.apiKey,appName:t.name,v:ti},i=d4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Co(r).slice(1)}`}async function p4(t){const e=await a4(t),n=Ue().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:f4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=Ue().setTimeout(()=>{s(o)},l4.get());function l(){Ue().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g4=500,_4=600,y4="_blank",v4="http://localhost";class UI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w4(t,e,n,r=g4,i=_4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},m4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=we().toLowerCase();n&&(a=hP(u)?y4:n),cP(u)&&(e=e||v4,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if($L(u)&&a!=="_self")return I4(e||"",a),new UI(null);const h=window.open(e||"",a,c);k(h,t,"popup-blocked");try{h.focus()}catch{}return new UI(h)}function I4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4="__/auth/handler",T4="emulator/auth/handler",S4=encodeURIComponent("fac");async function wm(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:i};if(e instanceof cr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof jo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${S4}=${encodeURIComponent(l)}`:"";return`${A4(t)}?${Co(a).slice(1)}${u}`}function A4({config:t}){return t.emulator?ey(t,T4):`https://${t.authDomain}/${E4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="webStorageSupport";class P4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=es,this._completeRedirectFn=bd,this._overrideRedirectResult=py}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wm(e,n,r,kl(),i);return w4(e,o,du())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wm(e,n,r,kl(),i);return l2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await p4(e),r=new jP(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nf,{type:Nf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nf];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mP()||ty()||Uo()}}const C4=P4;class R4{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return xn("unexpected MultiFactorSessionType")}}}class my extends R4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new my(e)}_finalizeEnroll(e,n,r){return e2(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return y2(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qP{constructor(){}static assertion(e){return my._fromCredential(e)}}qP.FACTOR_ID="phone";var $I="@firebase/auth",jI="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function b4(t){zr(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gP(t)},u=new KL(r,i,s,l);return tF(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new Vn("auth-internal",e=>{const n=be(e.getProvider("auth").getImmediate());return(r=>new k4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn($I,jI,x4(t)),Dn($I,jI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=5*60;jk("authIdTokenMaxAge");function D4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}HL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=at("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",D4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});b4("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=2e3;async function V4(t,e,n){var r;const{BuildInfo:i}=ns();_n(e.sessionId,"AuthEvent did not contain a session ID");const s=await $4(e.sessionId),o={};return Uo()?o.ibi=i.packageName:uu()?o.apn=i.packageName:ut(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,wm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function M4(t){const{BuildInfo:e}=ns(),n={};Uo()?n.iosBundleId=e.packageName:uu()?n.androidPackageName=e.packageName:ut(t,"operation-not-supported-in-this-environment"),await BP(t,n)}function L4(t){const{cordova:e}=ns();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,UL()?"_blank":"_system","location=yes"),n(i)})})}async function F4(t,e,n){const{cordova:r}=ns();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(at(t,"redirect-cancelled-by-user"))},O4))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),uu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function U4(t){var e,n,r,i,s,o,a,l,u,c;const h=ns();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function $4(t){const e=j4(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function j4(t){if(_n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4=20;class B4 extends jP{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function q4(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:K4(),postBody:null,tenantId:t.tenantId,error:at(t,"no-auth-event")}}function W4(t,e){return Im()._set(Em(t),e)}async function zI(t){const e=await Im()._get(Em(t));return e&&await Im()._remove(Em(t)),e}function G4(t,e){var n,r;const i=Q4(e);if(i.includes("/__/auth/callback")){const s=yc(i),o=s.firebaseError?H4(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?at(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function K4(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<z4;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Im(){return zt(uy)}function Em(t){return Li("authEvent",t.config.apiKey,t.name)}function H4(t){try{return JSON.parse(t)}catch{return null}}function Q4(t){const e=yc(t),n=e.link?decodeURIComponent(e.link):void 0,r=yc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return yc(i).link||i||r||n||t}function yc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ls(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=500;class J4{constructor(){this._redirectPersistence=es,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=bd,this._overrideRedirectResult=py}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new B4(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ut(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){U4(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),W2(),await this._originValidation(e);const o=q4(e,r,i);await W4(e,o);const a=await V4(e,o,n),l=await L4(a);return F4(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=M4(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ns(),o=setTimeout(async()=>{await zI(e),n.onEvent(BI())},Y4),a=async c=>{clearTimeout(o);const h=await zI(e);let d=null;h&&(c!=null&&c.url)&&(d=G4(h,c.url)),n.onEvent(d||BI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;ns().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const X4=J4;function BI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:at("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(t,e){be(t)._logFramework(e)}var eU="@firebase/auth-compat",tU="0.5.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU=1e3;function $a(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function rU(){return $a()==="http:"||$a()==="https:"}function WP(t=we()){return!!(($a()==="file:"||$a()==="ionic:"||$a()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function iU(){return Ig()||wg()}function sU(){return fT()&&(document==null?void 0:document.documentMode)===11}function oU(t=we()){return/Edge\/\d+/.test(t)}function aU(t=we()){return sU()||oU(t)}function GP(){try{const t=self.localStorage,e=du();if(t)return t.setItem(e,"1"),t.removeItem(e),aU()?il():!0}catch{return gy()&&il()}return!1}function gy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Df(){return(rU()||dT()||WP())&&!iU()&&GP()&&!gy()}function KP(){return WP()&&typeof document<"u"}async function lU(){return KP()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},nU);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function uU(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={LOCAL:"local",NONE:"none",SESSION:"session"},aa=k,HP="persistence";function cU(t,e){if(aa(Object.values($t).includes(e),t,"invalid-persistence-type"),Ig()){aa(e!==$t.SESSION,t,"unsupported-persistence-type");return}if(wg()){aa(e===$t.NONE,t,"unsupported-persistence-type");return}if(gy()){aa(e===$t.NONE||e===$t.LOCAL&&il(),t,"unsupported-persistence-type");return}aa(e===$t.NONE||GP(),t,"unsupported-persistence-type")}async function Tm(t){await t._initializationPromise;const e=QP(),n=Li(HP,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function hU(t,e){const n=QP();if(!n)return[];const r=Li(HP,t,e);switch(n.getItem(r)){case $t.NONE:return[Eo];case $t.LOCAL:return[Ol,es];case $t.SESSION:return[es];default:return[]}}function QP(){var t;try{return((t=uU())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dU=k;class Cr{constructor(){this.browserResolver=zt(C4),this.cordovaResolver=zt(X4),this.underlyingResolver=null,this._redirectPersistence=es,this._completeRedirectFn=bd,this._overrideRedirectResult=py}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return KP()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return dU(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await lU();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){return t.unwrap()}function fU(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t){return JP(t)}function mU(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new gU(t,XF(t,e))}else if(r){const i=JP(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function JP(t){const{_tokenResponse:e}=t instanceof Et?t.customData:t;if(!e)return null;if(!(t instanceof Et)&&"temporaryProof"in e&&"phoneNumber"in e)return ts.credentialFromResult(t);const n=e.providerId;if(!n||n===oa.PASSWORD)return null;let r;switch(n){case oa.GOOGLE:r=Tn;break;case oa.FACEBOOK:r=En;break;case oa.GITHUB:r=Sn;break;case oa.TWITTER:r=An;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?To._create(n,a):Fn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Xs(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Et?r.credentialFromError(t):r.credentialFromResult(t)}function xt(t,e){return e.catch(n=>{throw n instanceof Et&&mU(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:pU(n),additionalUserInfo:JF(n),user:Hn.getOrCreate(i)}})}async function Sm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>xt(t,n.confirm(r))}}class gU{constructor(e,n){this.resolver=n,this.auth=fU(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xt(YP(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._delegate=e,this.multiFactor=n2(e)}static getOrCreate(e){return Hn.USER_MAP.has(e)||Hn.USER_MAP.set(e,new Hn(e)),Hn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xt(this.auth,AP(this._delegate,e))}async linkWithPhoneNumber(e,n){return Sm(this.auth,N2(this._delegate,e,n))}async linkWithPopup(e){return xt(this.auth,j2(this._delegate,e,Cr))}async linkWithRedirect(e){return await Tm(be(this.auth)),Y2(this._delegate,e,Cr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xt(this.auth,PP(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Sm(this.auth,D2(this._delegate,e,n))}reauthenticateWithPopup(e){return xt(this.auth,$2(this._delegate,e,Cr))}async reauthenticateWithRedirect(e){return await Tm(be(this.auth)),H2(this._delegate,e,Cr)}sendEmailVerification(e){return $F(this._delegate,e)}async unlink(e){return await PF(this._delegate,e),this}updateEmail(e){return qF(this._delegate,e)}updatePassword(e){return WF(this._delegate,e)}updatePhoneNumber(e){return O2(this._delegate,e)}updateProfile(e){return BF(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return jF(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Hn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=k;class Am{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;la(r,"invalid-api-key",{appName:e.name}),la(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Cr:void 0;this._delegate=n.initialize({options:{persistence:_U(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(mL),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Hn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){nF(this._delegate,e,n)}applyActionCode(e){return bF(this._delegate,e)}checkActionCode(e){return CP(this._delegate,e)}confirmPasswordReset(e,n){return xF(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return xt(this._delegate,DF(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return UF(this._delegate,e)}isSignInWithEmailLink(e){return MF(this._delegate,e)}async getRedirectResult(){la(Df(),this._delegate,"operation-not-supported-in-this-environment");const e=await X2(this._delegate,Cr);return e?xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Z4(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=qI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=qI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return VF(this._delegate,e,n)}sendPasswordResetEmail(e,n){return kF(this._delegate,e,n||void 0)}async setPersistence(e){cU(this._delegate,e);let n;switch(e){case $t.SESSION:n=es;break;case $t.LOCAL:n=await zt(Ol)._isAvailable()?Ol:uy;break;case $t.NONE:n=Eo;break;default:return ut("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xt(this._delegate,AF(this._delegate))}signInWithCredential(e){return xt(this._delegate,Pd(this._delegate,e))}signInWithCustomToken(e){return xt(this._delegate,RF(this._delegate,e))}signInWithEmailAndPassword(e,n){return xt(this._delegate,OF(this._delegate,e,n))}signInWithEmailLink(e,n){return xt(this._delegate,LF(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Sm(this._delegate,b2(this._delegate,e,n))}async signInWithPopup(e){return la(Df(),this._delegate,"operation-not-supported-in-this-environment"),xt(this._delegate,U2(this._delegate,e,Cr))}async signInWithRedirect(e){return la(Df(),this._delegate,"operation-not-supported-in-this-environment"),await Tm(this._delegate),G2(this._delegate,e,Cr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return NF(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Am.Persistence=$t;function qI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Hn.getOrCreate(o)),error:e,complete:n}}function _U(t,e){const n=hU(t,e);if(typeof self<"u"&&!n.includes(Ol)&&n.push(Ol),typeof window<"u")for(const r of[uy,es])n.includes(r)||n.push(r);return n.includes(Eo)||n.push(Eo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.providerId="phone",this._delegate=new ts(YP(ve.auth()))}static credential(e,n){return ts.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}_y.PHONE_SIGN_IN_METHOD=ts.PHONE_SIGN_IN_METHOD;_y.PROVIDER_ID=ts.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU=k;class vU{constructor(e,n,r=ve.app()){var i;yU((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new k2(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU="auth-compat";function IU(t){t.INTERNAL.registerComponent(new Vn(wU,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Am(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:vs.EMAIL_SIGNIN,PASSWORD_RESET:vs.PASSWORD_RESET,RECOVER_EMAIL:vs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:vs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:vs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:vs.VERIFY_EMAIL}},EmailAuthProvider:li,FacebookAuthProvider:En,GithubAuthProvider:Sn,GoogleAuthProvider:Tn,OAuthProvider:Xs,SAMLAuthProvider:mh,PhoneAuthProvider:_y,PhoneMultiFactorGenerator:qP,RecaptchaVerifier:vU,TwitterAuthProvider:An,Auth:Am,AuthCredential:$o,Error:Et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(eU,tU)}IU(ve);const EU=({username:t,theme:e})=>{const[n,r]=q.useState(""),[i,s]=q.useState(""),[o,a]=q.useState(""),[l,u]=q.useState("dishes"),[c,h]=q.useState(""),[d,f]=q.useState([]),[_,v]=q.useState([]),[w,g]=q.useState(""),[m,p]=q.useState(!1),[S,A]=q.useState(!1),[E,x]=q.useState(!1);q.useEffect(()=>{const J=async()=>{try{const Qt=(await ve.firestore().collection("reservations").get()).docs.map(V=>({id:V.id,...V.data()}));f(Qt)}catch(Le){console.error("Error fetching reservations:",Le)}},Rt=async()=>{try{const Qt=(await ve.firestore().collection("privateEventsReservations").get()).docs.map(V=>({id:V.id,...V.data()}));v(Qt),console.log(Qt)}catch(Le){console.error("Error fetching private event reservations:",Le)}};J(),Rt()},[]);const b=async J=>{J.preventDefault();try{await ve.firestore().collection(`menu_${l}`).add({title:n,description:i,imgSrc:c,price:o}),r(""),s(""),a(""),h(""),g("Menu item added successfully!")}catch(Rt){console.error("Error adding menu item:",Rt)}},Q=()=>{p(!0),A(!1),x(!1)},F=async()=>{p(!1),A(!0),x(!1)},Pe=async()=>{p(!1),A(!1),x(!0)};return y.jsxs("div",{className:` w-full h-screen  flex flex-col justify-center items-center ${e==="light"?"light-admin-dash":"dark-admin-dash"}`,children:[y.jsxs("p",{className:"text-xl font-bold mb-4",children:["Hello, ",t]}),y.jsxs("div",{className:"flex gap-4 mb-4",children:[y.jsx("button",{onClick:Q,className:"px-4 py-2 rounded-md",children:"Add Menu Item"}),y.jsx("button",{onClick:F,className:"px-4 py-2  rounded-md",children:"Show Reservations"}),y.jsx("button",{onClick:Pe,className:"px-4 py-2  rounded-md",children:"Show Private Event Reservations"})]}),m&&y.jsxs(y.Fragment,{children:[y.jsx("p",{className:"text-lg mb-4",children:"For adding a new menu item, please fill the following fields:"}),y.jsxs("form",{onSubmit:b,className:"flex flex-col gap-4",children:[y.jsxs("select",{value:l,onChange:J=>u(J.target.value),className:"px-3 py-2 border rounded-md focus:outline-none text-black",children:[y.jsx("option",{value:"dishes",children:"Dishes"}),y.jsx("option",{value:"drinks",children:"Drinks"}),y.jsx("option",{value:"alcohol",children:"Alcohol"})]}),y.jsx("input",{type:"text",placeholder:"Title",value:n,onChange:J=>r(J.target.value),className:"px-3 py-2 border rounded-md focus:outline-none text-black",required:!0}),y.jsx("input",{type:"text",placeholder:"Description",value:i,onChange:J=>s(J.target.value),className:"px-3 py-2 border rounded-md focus:outline-none text-black",required:!0}),y.jsx("input",{type:"text",placeholder:"Price",value:o,onChange:J=>a(J.target.value),className:"px-3 py-2 border rounded-md focus:outline-none text-black",required:!0}),y.jsx("input",{type:"text",placeholder:"Image Source",value:c,onChange:J=>h(J.target.value),className:"px-3 py-2 border rounded-md focus:outline-none text-black",required:!0}),y.jsx("button",{type:"submit",className:` text-white px-2 py-4 rounded-md hover:opacity-70 focus:opacity-70 ${e==="light"?"bg-[#333]":"bg-[#eba000]"}`,children:"Add Item"})]})]}),S&&y.jsxs("div",{className:"mt-8 px-4 ",children:[" ",y.jsx("h2",{className:"text-xl font-bold mb-4 text-center ",children:"Reservations"}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:d.map((J,Rt)=>{const Le=new Date(J.timestamp.toDate()),ui=Le.getFullYear(),Un=Le.getMonth()+1,Qt=Le.getDate(),V=Le.getHours(),B=Le.getMinutes(),K=`${ui}-${Un.toString().padStart(2,"0")}-${Qt.toString().padStart(2,"0")}`,ce=`${V.toString().padStart(2,"0")}:${B.toString().padStart(2,"0")}`;return y.jsx("div",{className:"border-4 p-4 rounded-md hover:opacity-90 hover:scale-110 duration-300",children:y.jsxs("div",{className:"max-w-md mx-auto",children:[" ",y.jsxs("p",{children:[y.jsx("strong",{children:"Name:"})," ",J.name]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Email:"})," ",J.email]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Phone Number:"})," ",J.phoneNumber]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Number of guests:"})," ",J.numberOfPeople]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Date:"})," ",K]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Time:"})," ",ce]})]})},Rt)})})]}),E&&y.jsxs("div",{className:"mt-8 px-4",children:[" ",y.jsx("h2",{className:"text-xl font-bold mb-4 text-center",children:"Private Event Reservations"}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:_.map((J,Rt)=>{const Le=new Date(J.timestamp.toDate()),ui=Le.getFullYear(),Un=Le.getMonth()+1,Qt=Le.getDate(),V=Le.getHours(),B=Le.getMinutes(),K=`${ui}-${Un.toString().padStart(2,"0")}-${Qt.toString().padStart(2,"0")}`,ce=`${V.toString().padStart(2,"0")}:${B.toString().padStart(2,"0")}`;return y.jsx("div",{className:"border-4 p-4 rounded-md hover:opacity-90 hover:scale-110 duration-300",children:y.jsxs("div",{className:"max-w-md mx-auto",children:[" ",y.jsxs("p",{children:[y.jsx("strong",{children:"Name:"})," ",J.name]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Email:"})," ",J.email]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Phone Number:"})," ",J.phoneNumber]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Date:"})," ",K]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Time:"})," ",ce]})]})},Rt)})})]}),w&&y.jsx(Y_,{message:w,onClose:()=>g(""),theme:e})]})},TU=({theme:t})=>{const[e,n]=q.useState(""),[r,i]=q.useState(""),[s,o]=q.useState(""),[a,l]=q.useState(!1),u=async h=>{h.preventDefault();try{const d={apiKey:"AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",authDomain:"resturant-94f15.firebaseapp.com",projectId:"resturant-94f15",storageBucket:"resturant-94f15.appspot.com",messagingSenderId:"59447957183",appId:"1:59447957183:web:a14ae5107e9ec34479980a",measurementId:"G-KC29EGQM0Q"};ve.initializeApp(d);const v=await ve.firestore().collection("users").where("username","==",e).get();v.empty?o("User not found"):v.docs[0].data().password===r?l(!0):o("Incorrect password")}catch(d){o(d.message)}};if(a)return y.jsx(EU,{username:e,theme:t});const c=[{title:"Admin Login Page",description:"For editing the menu and display the current reservations, please enter you username and password."}];return y.jsxs("div",{className:`flex flex-col justify-center items-center h-screen ${t==="light"?"light-admin-login":"dark-admin-login"}`,children:[y.jsx("div",{className:"text-center  md:w-1/2 p-8",children:c.map((h,d)=>y.jsxs("div",{className:"mb-12",children:[y.jsx("h2",{className:"text-4xl font-bold mb-4 overflow-hidden ",children:h.title.split("").map((f,_)=>y.jsx("span",{className:"animate-text-reveal inline-block",style:{animationDelay:`${.01*_}s`},children:f===" "?" ":f},`${f}-${_}`))}),y.jsx("p",{className:"text-xl leading-relaxed ",children:h.description})]},d))}),y.jsxs("form",{onSubmit:u,className:"flex flex-col gap-4",children:[y.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:h=>n(h.target.value),className:"px-3 py-2 border rounded-md focus:outline-none",required:!0}),y.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:h=>i(h.target.value),className:"px-3 py-2 border rounded-md focus:outline-none",required:!0}),y.jsx("button",{type:"submit",className:"px-4 py-2  rounded-md  focus:outline-none ",children:"Login"}),s&&y.jsx("p",{className:"text-red-500",children:s})]})]})},SU=({onNavItemClick:t,theme:e})=>{const[n,r]=q.useState(!1),[i,s]=q.useState(null),[o,a]=q.useState(null),l=()=>{r(!n)},u=_=>{_.dropdownItems?s(i===_.id?null:_.id):(r(!1),s(null),t(_.section))},c=_=>{switch(r(!1),s(null),_){case"Dishes":t(y.jsx(hL,{theme:e}));break;case"Drinks":t(y.jsx(dL,{theme:e}));break;case"Alcohol":t(y.jsx(fL,{theme:e}));break}},h=_=>{a(_)},d=()=>{a(null)},f=[{id:1,text:"Home",section:y.jsx(qA,{theme:e})},{id:2,text:"Menu",dropdownItems:["Dishes","Drinks","Alcohol"]},{id:3,text:"About Us",section:y.jsx(wM,{theme:e})},{id:4,text:"Location & Hours",section:y.jsx(ZM,{theme:e})},{id:5,text:"Reservations",section:y.jsx(uL,{theme:e})},{id:6,text:"Private Events",section:y.jsx(cL,{theme:e})},{id:7,text:"Admin Login",section:y.jsx(TU,{theme:e})}];return y.jsxs("div",{className:`  flex justify-between items-center h-24 mx-auto px-4  relative ${e==="light"?"light-navbar":"dark-navbar"}`,children:[y.jsx("h1",{className:"w-full text-3xl font-bold ",children:"Flavor Voyage."}),y.jsx("ul",{className:"hidden md:flex w-auto",children:f.map(_=>y.jsxs("li",{className:"p-2   rounded-xl m-2 cursor-pointer duration-300  relative",onClick:()=>u(_),onMouseEnter:()=>h(_.id),onMouseLeave:d,children:[_.text,_.dropdownItems&&o===_.id&&y.jsx("ul",{className:"absolute -left-2 mt-5  p-2 rounded-md",children:_.dropdownItems.map((v,w)=>y.jsx("li",{className:"cursor-pointer  py-2  rounded-xl",onClick:()=>c(v),children:v},w))})]},_.id))}),y.jsx("div",{onClick:l,className:"block md:hidden z-50",children:n?y.jsx(kk,{size:40,className:"z-11"}):y.jsx(xk,{size:40,className:"z-11"})}),y.jsxs("ul",{className:`${e==="light"?"light-menu-icon":"dark-menu-icon"} ${n?"fixed md:hidden text-center left-0 top-0 w-full h-full  ease-in-out duration-500 z-10":"ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"}`,children:[y.jsx("h1",{className:"w-full text-3xl font-bold  m-4",children:"Flavor Voyage."}),f.map(_=>y.jsxs("li",{className:"p-4 border-b rounded-xl  duration-300  cursor-pointer  relative 	",onClick:()=>u(_),children:[_.text,_.dropdownItems&&i===_.id&&y.jsx("div",{className:` rounded-xl ${e==="light"?"light-menu-dropdown":"dark-menu-dropdown"}`,children:_.dropdownItems.map((v,w)=>y.jsx("div",{className:"cursor-pointer  py-1 px-2 rounded-xl",onClick:()=>c(v),children:v},w))})]},_.id))]})]})};function AU(){const[t,e]=q.useState(y.jsx(qA,{})),[n,r]=q.useState(i());function i(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}q.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)"),l=()=>{r(a.matches?"dark":"light")};return a.addEventListener("change",l),()=>{a.removeEventListener("change",l)}},[]);const s=a=>{e(a)},o=()=>{r(n==="light"?"dark":"light")};return y.jsxs("div",{children:[y.jsx(SU,{onNavItemClick:s,toggleTheme:o,theme:n}),Ee.cloneElement(t,{theme:n})]})}Of.createRoot(document.getElementById("root")).render(y.jsx(Ee.StrictMode,{children:y.jsx(AU,{})}));
