(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function jI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bv={exports:{}},cn={},Dv={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),BI=Symbol.for("react.portal"),$I=Symbol.for("react.fragment"),qI=Symbol.for("react.strict_mode"),HI=Symbol.for("react.profiler"),WI=Symbol.for("react.provider"),GI=Symbol.for("react.context"),KI=Symbol.for("react.forward_ref"),QI=Symbol.for("react.suspense"),YI=Symbol.for("react.memo"),XI=Symbol.for("react.lazy"),Fp=Symbol.iterator;function JI(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var Vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Lv={};function ma(t,e,n){this.props=t,this.context=e,this.refs=Lv,this.updater=n||Vv}ma.prototype.isReactComponent={};ma.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ma.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xv(){}xv.prototype=ma.prototype;function vf(t,e,n){this.props=t,this.context=e,this.refs=Lv,this.updater=n||Vv}var Ef=vf.prototype=new xv;Ef.constructor=vf;Ov(Ef,ma.prototype);Ef.isPureReactComponent=!0;var Up=Array.isArray,Mv=Object.prototype.hasOwnProperty,_f={current:null},Fv={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,s={},i=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)Mv.call(e,r)&&!Fv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Qo,type:t,key:i,ref:a,props:s,_owner:_f.current}}function ZI(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function e0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zp=/\/+/g;function ud(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e0(""+t.key):e.toString(36)}function Gl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Qo:case BI:a=!0}}if(a)return a=t,s=s(a),t=r===""?"."+ud(a,0):r,Up(s)?(n="",t!=null&&(n=t.replace(zp,"$&/")+"/"),Gl(s,e,n,"",function(d){return d})):s!=null&&(wf(s)&&(s=ZI(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(zp,"$&/")+"/")+t)),e.push(s)),1;if(a=0,r=r===""?".":r+":",Up(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+ud(i,l);a+=Gl(i,e,n,u,s)}else if(u=JI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+ud(i,l++),a+=Gl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Tl(t,e,n){if(t==null)return t;var r=[],s=0;return Gl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function t0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Kl={transition:null},n0={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:_f};function zv(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Tl,forEach:function(t,e,n){Tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tl(t,function(){e++}),e},toArray:function(t){return Tl(t,function(e){return e})||[]},only:function(t){if(!wf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=ma;le.Fragment=$I;le.Profiler=HI;le.PureComponent=vf;le.StrictMode=qI;le.Suspense=QI;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;le.act=zv;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ov({},t.props),s=t.key,i=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=_f.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Mv.call(e,u)&&!Fv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Qo,type:t.type,key:s,ref:i,props:r,_owner:a}};le.createContext=function(t){return t={$$typeof:GI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WI,_context:t},t.Consumer=t};le.createElement=Uv;le.createFactory=function(t){var e=Uv.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:KI,render:t}};le.isValidElement=wf;le.lazy=function(t){return{$$typeof:XI,_payload:{_status:-1,_result:t},_init:t0}};le.memo=function(t,e){return{$$typeof:YI,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};le.unstable_act=zv;le.useCallback=function(t,e){return Mt.current.useCallback(t,e)};le.useContext=function(t){return Mt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Mt.current.useEffect(t,e)};le.useId=function(){return Mt.current.useId()};le.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Mt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};le.useRef=function(t){return Mt.current.useRef(t)};le.useState=function(t){return Mt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Mt.current.useTransition()};le.version="18.3.1";Dv.exports=le;var x=Dv.exports;const c=jI(x);var jv={exports:{}},Bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,X){var ee=H.length;H.push(X);e:for(;0<ee;){var pe=ee-1>>>1,ye=H[pe];if(0<s(ye,X))H[pe]=X,H[ee]=ye,ee=pe;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var X=H[0],ee=H.pop();if(ee!==X){H[0]=ee;e:for(var pe=0,ye=H.length,ft=ye>>>1;pe<ft;){var Ce=2*(pe+1)-1,Ut=H[Ce],Je=Ce+1,Dt=H[Je];if(0>s(Ut,ee))Je<ye&&0>s(Dt,Ut)?(H[pe]=Dt,H[Je]=ee,pe=Je):(H[pe]=Ut,H[Ce]=ee,pe=Ce);else if(Je<ye&&0>s(Dt,ee))H[pe]=Dt,H[Je]=ee,pe=Je;else break e}}return X}function s(H,X){var ee=H.sortIndex-X.sortIndex;return ee!==0?ee:H.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],d=[],m=1,p=null,g=3,T=!1,P=!1,V=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(H){for(var X=n(d);X!==null;){if(X.callback===null)r(d);else if(X.startTime<=H)r(d),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(d)}}function O(H){if(V=!1,A(H),!P)if(n(u)!==null)P=!0,Ne(B);else{var X=n(d);X!==null&&bt(O,X.startTime-H)}}function B(H,X){P=!1,V&&(V=!1,I(y),y=-1),T=!0;var ee=g;try{for(A(X),p=n(u);p!==null&&(!(p.expirationTime>X)||H&&!k());){var pe=p.callback;if(typeof pe=="function"){p.callback=null,g=p.priorityLevel;var ye=pe(p.expirationTime<=X);X=t.unstable_now(),typeof ye=="function"?p.callback=ye:p===n(u)&&r(u),A(X)}else r(u);p=n(u)}if(p!==null)var ft=!0;else{var Ce=n(d);Ce!==null&&bt(O,Ce.startTime-X),ft=!1}return ft}finally{p=null,g=ee,T=!1}}var $=!1,_=null,y=-1,S=5,C=-1;function k(){return!(t.unstable_now()-C<S)}function R(){if(_!==null){var H=t.unstable_now();C=H;var X=!0;try{X=_(!0,H)}finally{X?w():($=!1,_=null)}}else $=!1}var w;if(typeof E=="function")w=function(){E(R)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,at=ie.port2;ie.port1.onmessage=R,w=function(){at.postMessage(null)}}else w=function(){D(R,0)};function Ne(H){_=H,$||($=!0,w())}function bt(H,X){y=D(function(){H(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){P||T||(P=!0,Ne(B))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ee=g;g=X;try{return H()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ee=g;g=H;try{return X()}finally{g=ee}},t.unstable_scheduleCallback=function(H,X,ee){var pe=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,H){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ee+ye,H={id:m++,callback:X,priorityLevel:H,startTime:ee,expirationTime:ye,sortIndex:-1},ee>pe?(H.sortIndex=ee,e(d,H),n(u)===null&&H===n(d)&&(V?(I(y),y=-1):V=!0,bt(O,ee-pe))):(H.sortIndex=ye,e(u,H),P||T||(P=!0,Ne(B))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var X=g;return function(){var ee=g;g=X;try{return H.apply(this,arguments)}finally{g=ee}}}})(Bv);jv.exports=Bv;var r0=jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=x,un=r0;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $v=new Set,wo={};function ui(t,e){Qi(t,e),Qi(t+"Capture",e)}function Qi(t,e){for(wo[t]=e,t=0;t<e.length;t++)$v.add(e[t])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,i0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Bp={};function a0(t){return Yd.call(Bp,t)?!0:Yd.call(jp,t)?!1:i0.test(t)?Bp[t]=!0:(jp[t]=!0,!1)}function o0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l0(t,e,n,r){if(e===null||typeof e>"u"||o0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,s,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function If(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,If);Et[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,If);Et[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,If);Et[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,r){var s=Et.hasOwnProperty(e)?Et[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l0(e,n,s,r)&&(n=null),r||s===null?a0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ar=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),Xd=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),kf=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),Wv=Symbol.for("react.offscreen"),$p=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,cd;function Wa(t){if(cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||""}return`
`+cd+t}var dd=!1;function hd(t,e){if(!t||dd)return"";dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var u=`
`+s[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{dd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wa(t):""}function u0(t){switch(t.tag){case 5:return Wa(t.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case wi:return"Portal";case Xd:return"Profiler";case Cf:return"StrictMode";case Jd:return"Suspense";case Zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hv:return(t.displayName||"Context")+".Consumer";case qv:return(t._context.displayName||"Context")+".Provider";case Af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kf:return e=t.displayName||null,e!==null?e:eh(t.type)||"Memo";case $r:e=t._payload,t=t._init;try{return eh(t(e))}catch{}}return null}function c0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(e);case 8:return e===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ys(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d0(t){var e=Gv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=d0(t))}function Kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function th(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ys(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qv(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function nh(t,e){Qv(t,e);var n=ys(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&rh(t,e.type,ys(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rh(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ga=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ys(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ga(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ys(n)}}function Yv(t,e){var n=ys(e.value),r=ys(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cl,Jv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h0=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){h0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function Zv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function eE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Zv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var f0=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ah(t,e){if(e){if(f0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uh=null,Mi=null,Fi=null;function Kp(t){if(t=Jo(t)){if(typeof uh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=mc(e),uh(t.stateNode,t.type,e))}}function tE(t){Mi?Fi?Fi.push(t):Fi=[t]:Mi=t}function nE(){if(Mi){var t=Mi,e=Fi;if(Fi=Mi=null,Kp(t),e)for(t=0;t<e.length;t++)Kp(e[t])}}function rE(t,e){return t(e)}function sE(){}var fd=!1;function iE(t,e,n){if(fd)return t(e,n);fd=!0;try{return rE(t,e,n)}finally{fd=!1,(Mi!==null||Fi!==null)&&(sE(),nE())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=mc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ch=!1;if(yr)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{ch=!1}function m0(t,e,n,r,s,i,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var io=!1,vu=null,Eu=!1,dh=null,p0={onError:function(t){io=!0,vu=t}};function g0(t,e,n,r,s,i,a,l,u){io=!1,vu=null,m0.apply(p0,arguments)}function y0(t,e,n,r,s,i,a,l,u){if(g0.apply(this,arguments),io){if(io){var d=vu;io=!1,vu=null}else throw Error(j(198));Eu||(Eu=!0,dh=d)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qp(t){if(ci(t)!==t)throw Error(j(188))}function v0(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Qp(s),t;if(i===r)return Qp(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function oE(t){return t=v0(t),t!==null?lE(t):null}function lE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lE(t);if(e!==null)return e;t=t.sibling}return null}var uE=un.unstable_scheduleCallback,Yp=un.unstable_cancelCallback,E0=un.unstable_shouldYield,_0=un.unstable_requestPaint,Ge=un.unstable_now,w0=un.unstable_getCurrentPriorityLevel,Pf=un.unstable_ImmediatePriority,cE=un.unstable_UserBlockingPriority,_u=un.unstable_NormalPriority,T0=un.unstable_LowPriority,dE=un.unstable_IdlePriority,cc=null,Hn=null;function I0(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:A0,S0=Math.log,C0=Math.LN2;function A0(t){return t>>>=0,t===0?32:31-(S0(t)/C0|0)|0}var Al=64,kl=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Ka(l):(i&=a,i!==0&&(r=Ka(i)))}else a=n&~s,a!==0?r=Ka(a):i!==0&&(r=Ka(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),s=1<<n,r|=t[n],e&=~s;return r}function k0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var a=31-Pn(i),l=1<<a,u=s[a];u===-1?(!(l&n)||l&r)&&(s[a]=k0(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hE(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function P0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Pn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ge=0;function fE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mE,bf,pE,gE,yE,fh=!1,Rl=[],es=null,ts=null,ns=null,So=new Map,Co=new Map,Hr=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function Fa(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Jo(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function b0(t,e,n,r,s){switch(e){case"focusin":return es=Fa(es,t,e,n,r,s),!0;case"dragenter":return ts=Fa(ts,t,e,n,r,s),!0;case"mouseover":return ns=Fa(ns,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return So.set(i,Fa(So.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Co.set(i,Fa(Co.get(i)||null,t,e,n,r,s)),!0}return!1}function vE(t){var e=js(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=aE(n),e!==null){t.blockedOn=e,yE(t.priority,function(){pE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lh=r,n.target.dispatchEvent(r),lh=null}else return e=Jo(n),e!==null&&bf(e),t.blockedOn=n,!1;e.shift()}return!0}function Jp(t,e,n){Ql(t)&&n.delete(e)}function D0(){fh=!1,es!==null&&Ql(es)&&(es=null),ts!==null&&Ql(ts)&&(ts=null),ns!==null&&Ql(ns)&&(ns=null),So.forEach(Jp),Co.forEach(Jp)}function Ua(t,e){t.blockedOn===e&&(t.blockedOn=null,fh||(fh=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,D0)))}function Ao(t){function e(s){return Ua(s,t)}if(0<Rl.length){Ua(Rl[0],t);for(var n=1;n<Rl.length;n++){var r=Rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(es!==null&&Ua(es,t),ts!==null&&Ua(ts,t),ns!==null&&Ua(ns,t),So.forEach(e),Co.forEach(e),n=0;n<Hr.length;n++)r=Hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)vE(n),n.blockedOn===null&&Hr.shift()}var Ui=Ar.ReactCurrentBatchConfig,Tu=!0;function V0(t,e,n,r){var s=ge,i=Ui.transition;Ui.transition=null;try{ge=1,Df(t,e,n,r)}finally{ge=s,Ui.transition=i}}function O0(t,e,n,r){var s=ge,i=Ui.transition;Ui.transition=null;try{ge=4,Df(t,e,n,r)}finally{ge=s,Ui.transition=i}}function Df(t,e,n,r){if(Tu){var s=mh(t,e,n,r);if(s===null)Sd(t,e,r,Iu,n),Xp(t,r);else if(b0(s,t,e,n,r))r.stopPropagation();else if(Xp(t,r),e&4&&-1<N0.indexOf(t)){for(;s!==null;){var i=Jo(s);if(i!==null&&mE(i),i=mh(t,e,n,r),i===null&&Sd(t,e,r,Iu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var Iu=null;function mh(t,e,n,r){if(Iu=null,t=Rf(r),t=js(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Iu=t,null}function EE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w0()){case Pf:return 1;case cE:return 4;case _u:case T0:return 16;case dE:return 536870912;default:return 16}default:return 16}}var Xr=null,Vf=null,Yl=null;function _E(){if(Yl)return Yl;var t,e=Vf,n=e.length,r,s="value"in Xr?Xr.value:Xr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===s[i-r];r++);return Yl=s.slice(t,1<r?1-r:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function Zp(){return!1}function dn(t){function e(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pl:Zp,this.isPropagationStopped=Zp,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=dn(pa),Xo=Ue({},pa,{view:0,detail:0}),L0=dn(Xo),pd,gd,za,dc=Ue({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==za&&(za&&t.type==="mousemove"?(pd=t.screenX-za.screenX,gd=t.screenY-za.screenY):gd=pd=0,za=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:gd}}),eg=dn(dc),x0=Ue({},dc,{dataTransfer:0}),M0=dn(x0),F0=Ue({},Xo,{relatedTarget:0}),yd=dn(F0),U0=Ue({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=dn(U0),j0=Ue({},pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B0=dn(j0),$0=Ue({},pa,{data:0}),tg=dn($0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W0[t])?!!e[t]:!1}function Lf(){return G0}var K0=Ue({},Xo,{key:function(t){if(t.key){var e=q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q0=dn(K0),Y0=Ue({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=dn(Y0),X0=Ue({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),J0=dn(X0),Z0=Ue({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=dn(Z0),tS=Ue({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=dn(tS),rS=[9,13,27,32],xf=yr&&"CompositionEvent"in window,ao=null;yr&&"documentMode"in document&&(ao=document.documentMode);var sS=yr&&"TextEvent"in window&&!ao,wE=yr&&(!xf||ao&&8<ao&&11>=ao),rg=" ",sg=!1;function TE(t,e){switch(t){case"keyup":return rS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function IE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function iS(t,e){switch(t){case"compositionend":return IE(e);case"keypress":return e.which!==32?null:(sg=!0,rg);case"textInput":return t=e.data,t===rg&&sg?null:t;default:return null}}function aS(t,e){if(Ii)return t==="compositionend"||!xf&&TE(t,e)?(t=_E(),Yl=Vf=Xr=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wE&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function SE(t,e,n,r){tE(r),e=Su(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oo=null,ko=null;function lS(t){LE(t,0)}function hc(t){var e=Ai(t);if(Kv(e))return t}function uS(t,e){if(t==="change")return e}var CE=!1;if(yr){var vd;if(yr){var Ed="oninput"in document;if(!Ed){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Ed=typeof ag.oninput=="function"}vd=Ed}else vd=!1;CE=vd&&(!document.documentMode||9<document.documentMode)}function og(){oo&&(oo.detachEvent("onpropertychange",AE),ko=oo=null)}function AE(t){if(t.propertyName==="value"&&hc(ko)){var e=[];SE(e,ko,t,Rf(t)),iE(lS,e)}}function cS(t,e,n){t==="focusin"?(og(),oo=e,ko=n,oo.attachEvent("onpropertychange",AE)):t==="focusout"&&og()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(ko)}function hS(t,e){if(t==="click")return hc(e)}function fS(t,e){if(t==="input"||t==="change")return hc(e)}function mS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:mS;function Ro(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Yd.call(e,s)||!bn(t[s],e[s]))return!1}return!0}function lg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,e){var n=lg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lg(n)}}function kE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function RE(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pS(t){var e=RE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kE(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=ug(n,i);var a=ug(n,r);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gS=yr&&"documentMode"in document&&11>=document.documentMode,Si=null,ph=null,lo=null,gh=!1;function cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||Si==null||Si!==yu(r)||(r=Si,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Ro(lo,r)||(lo=r,r=Su(ph,"onSelect"),0<r.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},_d={},PE={};yr&&(PE=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function fc(t){if(_d[t])return _d[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in PE)return _d[t]=e[n];return t}var NE=fc("animationend"),bE=fc("animationiteration"),DE=fc("animationstart"),VE=fc("transitionend"),OE=new Map,dg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function As(t,e){OE.set(t,e),ui(e,[t])}for(var wd=0;wd<dg.length;wd++){var Td=dg[wd],yS=Td.toLowerCase(),vS=Td[0].toUpperCase()+Td.slice(1);As(yS,"on"+vS)}As(NE,"onAnimationEnd");As(bE,"onAnimationIteration");As(DE,"onAnimationStart");As("dblclick","onDoubleClick");As("focusin","onFocus");As("focusout","onBlur");As(VE,"onTransitionEnd");Qi("onMouseEnter",["mouseout","mouseover"]);Qi("onMouseLeave",["mouseout","mouseover"]);Qi("onPointerEnter",["pointerout","pointerover"]);Qi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function hg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y0(r,e,void 0,t),t.currentTarget=null}function LE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;hg(s,l,d),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;hg(s,l,d),i=u}}}if(Eu)throw t=dh,Eu=!1,dh=null,t}function ke(t,e){var n=e[wh];n===void 0&&(n=e[wh]=new Set);var r=t+"__bubble";n.has(r)||(xE(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),xE(n,t,r,e)}var bl="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[bl]){t[bl]=!0,$v.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bl]||(e[bl]=!0,Id("selectionchange",!1,e))}}function xE(t,e,n,r){switch(EE(e)){case 1:var s=V0;break;case 4:s=O0;break;default:s=Df}n=s.bind(null,e,n,t),s=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;l!==null;){if(a=js(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}iE(function(){var d=i,m=Rf(n),p=[];e:{var g=OE.get(t);if(g!==void 0){var T=Of,P=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":T=Q0;break;case"focusin":P="focus",T=yd;break;case"focusout":P="blur",T=yd;break;case"beforeblur":case"afterblur":T=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=J0;break;case NE:case bE:case DE:T=z0;break;case VE:T=eS;break;case"scroll":T=L0;break;case"wheel":T=nS;break;case"copy":case"cut":case"paste":T=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ng}var V=(e&4)!==0,D=!V&&t==="scroll",I=V?g!==null?g+"Capture":null:g;V=[];for(var E=d,A;E!==null;){A=E;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,I!==null&&(O=Io(E,I),O!=null&&V.push(No(E,O,A)))),D)break;E=E.return}0<V.length&&(g=new T(g,P,null,n,m),p.push({event:g,listeners:V}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==lh&&(P=n.relatedTarget||n.fromElement)&&(js(P)||P[vr]))break e;if((T||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,T?(P=n.relatedTarget||n.toElement,T=d,P=P?js(P):null,P!==null&&(D=ci(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(T=null,P=d),T!==P)){if(V=eg,O="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=ng,O="onPointerLeave",I="onPointerEnter",E="pointer"),D=T==null?g:Ai(T),A=P==null?g:Ai(P),g=new V(O,E+"leave",T,n,m),g.target=D,g.relatedTarget=A,O=null,js(m)===d&&(V=new V(I,E+"enter",P,n,m),V.target=A,V.relatedTarget=D,O=V),D=O,T&&P)t:{for(V=T,I=P,E=0,A=V;A;A=pi(A))E++;for(A=0,O=I;O;O=pi(O))A++;for(;0<E-A;)V=pi(V),E--;for(;0<A-E;)I=pi(I),A--;for(;E--;){if(V===I||I!==null&&V===I.alternate)break t;V=pi(V),I=pi(I)}V=null}else V=null;T!==null&&fg(p,g,T,V,!1),P!==null&&D!==null&&fg(p,D,P,V,!0)}}e:{if(g=d?Ai(d):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var B=uS;else if(ig(g))if(CE)B=fS;else{B=dS;var $=cS}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(B=hS);if(B&&(B=B(t,d))){SE(p,B,n,m);break e}$&&$(t,g,d),t==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&rh(g,"number",g.value)}switch($=d?Ai(d):window,t){case"focusin":(ig($)||$.contentEditable==="true")&&(Si=$,ph=d,lo=null);break;case"focusout":lo=ph=Si=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,cg(p,n,m);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":cg(p,n,m)}var _;if(xf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ii?TE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(wE&&n.locale!=="ko"&&(Ii||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ii&&(_=_E()):(Xr=m,Vf="value"in Xr?Xr.value:Xr.textContent,Ii=!0)),$=Su(d,y),0<$.length&&(y=new tg(y,t,null,n,m),p.push({event:y,listeners:$}),_?y.data=_:(_=IE(n),_!==null&&(y.data=_)))),(_=sS?iS(t,n):aS(t,n))&&(d=Su(d,"onBeforeInput"),0<d.length&&(m=new tg("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=_))}LE(p,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Io(t,n),i!=null&&r.unshift(No(t,i,s)),i=Io(t,e),i!=null&&r.push(No(t,i,s))),t=t.return}return r}function pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fg(t,e,n,r,s){for(var i=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=Io(n,i),u!=null&&a.unshift(No(n,u,l))):s||(u=Io(n,i),u!=null&&a.push(No(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var _S=/\r\n?/g,wS=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(wS,"")}function Dl(t,e,n){if(e=mg(e),mg(t)!==e&&n)throw Error(j(425))}function Cu(){}var yh=null,vh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(SS)}:_h;function SS(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ao(e)}function rs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),$n="__reactFiber$"+ga,bo="__reactProps$"+ga,vr="__reactContainer$"+ga,wh="__reactEvents$"+ga,CS="__reactListeners$"+ga,AS="__reactHandles$"+ga;function js(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gg(t);t!==null;){if(n=t[$n])return n;t=gg(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[$n]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function mc(t){return t[bo]||null}var Th=[],ki=-1;function ks(t){return{current:t}}function Pe(t){0>ki||(t.current=Th[ki],Th[ki]=null,ki--)}function Se(t,e){ki++,Th[ki]=t.current,t.current=e}var vs={},Pt=ks(vs),Kt=ks(!1),Xs=vs;function Yi(t,e){var n=t.type.contextTypes;if(!n)return vs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qt(t){return t=t.childContextTypes,t!=null}function Au(){Pe(Kt),Pe(Pt)}function yg(t,e,n){if(Pt.current!==vs)throw Error(j(168));Se(Pt,e),Se(Kt,n)}function ME(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,c0(t)||"Unknown",s));return Ue({},n,r)}function ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vs,Xs=Pt.current,Se(Pt,t),Se(Kt,Kt.current),!0}function vg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=ME(t,e,Xs),r.__reactInternalMemoizedMergedChildContext=t,Pe(Kt),Pe(Pt),Se(Pt,t)):Pe(Kt),Se(Kt,n)}var lr=null,pc=!1,Ad=!1;function FE(t){lr===null?lr=[t]:lr.push(t)}function kS(t){pc=!0,FE(t)}function Rs(){if(!Ad&&lr!==null){Ad=!0;var t=0,e=ge;try{var n=lr;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,pc=!1}catch(s){throw lr!==null&&(lr=lr.slice(t+1)),uE(Pf,Rs),s}finally{ge=e,Ad=!1}}return null}var Ri=[],Pi=0,Ru=null,Pu=0,fn=[],mn=0,Js=null,ur=1,cr="";function Fs(t,e){Ri[Pi++]=Pu,Ri[Pi++]=Ru,Ru=t,Pu=e}function UE(t,e,n){fn[mn++]=ur,fn[mn++]=cr,fn[mn++]=Js,Js=t;var r=ur;t=cr;var s=32-Pn(r)-1;r&=~(1<<s),n+=1;var i=32-Pn(e)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,ur=1<<32-Pn(e)+s|n<<s|r,cr=i+t}else ur=1<<i|n<<s|r,cr=t}function Ff(t){t.return!==null&&(Fs(t,1),UE(t,1,0))}function Uf(t){for(;t===Ru;)Ru=Ri[--Pi],Ri[Pi]=null,Pu=Ri[--Pi],Ri[Pi]=null;for(;t===Js;)Js=fn[--mn],fn[mn]=null,cr=fn[--mn],fn[mn]=null,ur=fn[--mn],fn[mn]=null}var on=null,sn=null,Le=!1,kn=null;function zE(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,sn=rs(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Js!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,sn=null,!0):!1;default:return!1}}function Ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sh(t){if(Le){var e=sn;if(e){var n=e;if(!Eg(t,e)){if(Ih(t))throw Error(j(418));e=rs(n.nextSibling);var r=on;e&&Eg(t,e)?zE(r,n):(t.flags=t.flags&-4097|2,Le=!1,on=t)}}else{if(Ih(t))throw Error(j(418));t.flags=t.flags&-4097|2,Le=!1,on=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Vl(t){if(t!==on)return!1;if(!Le)return _g(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=sn)){if(Ih(t))throw jE(),Error(j(418));for(;e;)zE(t,e),e=rs(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=rs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=on?rs(t.stateNode.nextSibling):null;return!0}function jE(){for(var t=sn;t;)t=rs(t.nextSibling)}function Xi(){sn=on=null,Le=!1}function zf(t){kn===null?kn=[t]:kn.push(t)}var RS=Ar.ReactCurrentBatchConfig;function ja(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ol(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wg(t){var e=t._init;return e(t._payload)}function BE(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=os(I,E),I.index=0,I.sibling=null,I}function i(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=2,E):A):(I.flags|=2,E)):(I.flags|=1048576,E)}function a(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,A,O){return E===null||E.tag!==6?(E=Vd(A,I.mode,O),E.return=I,E):(E=s(E,A),E.return=I,E)}function u(I,E,A,O){var B=A.type;return B===Ti?m(I,E,A.props.children,O,A.key):E!==null&&(E.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$r&&wg(B)===E.type)?(O=s(E,A.props),O.ref=ja(I,E,A),O.return=I,O):(O=su(A.type,A.key,A.props,null,I.mode,O),O.ref=ja(I,E,A),O.return=I,O)}function d(I,E,A,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=Od(A,I.mode,O),E.return=I,E):(E=s(E,A.children||[]),E.return=I,E)}function m(I,E,A,O,B){return E===null||E.tag!==7?(E=Ws(A,I.mode,O,B),E.return=I,E):(E=s(E,A),E.return=I,E)}function p(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Vd(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Il:return A=su(E.type,E.key,E.props,null,I.mode,A),A.ref=ja(I,null,E),A.return=I,A;case wi:return E=Od(E,I.mode,A),E.return=I,E;case $r:var O=E._init;return p(I,O(E._payload),A)}if(Ga(E)||xa(E))return E=Ws(E,I.mode,A,null),E.return=I,E;Ol(I,E)}return null}function g(I,E,A,O){var B=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return B!==null?null:l(I,E,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Il:return A.key===B?u(I,E,A,O):null;case wi:return A.key===B?d(I,E,A,O):null;case $r:return B=A._init,g(I,E,B(A._payload),O)}if(Ga(A)||xa(A))return B!==null?null:m(I,E,A,O,null);Ol(I,A)}return null}function T(I,E,A,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(A)||null,l(E,I,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Il:return I=I.get(O.key===null?A:O.key)||null,u(E,I,O,B);case wi:return I=I.get(O.key===null?A:O.key)||null,d(E,I,O,B);case $r:var $=O._init;return T(I,E,A,$(O._payload),B)}if(Ga(O)||xa(O))return I=I.get(A)||null,m(E,I,O,B,null);Ol(E,O)}return null}function P(I,E,A,O){for(var B=null,$=null,_=E,y=E=0,S=null;_!==null&&y<A.length;y++){_.index>y?(S=_,_=null):S=_.sibling;var C=g(I,_,A[y],O);if(C===null){_===null&&(_=S);break}t&&_&&C.alternate===null&&e(I,_),E=i(C,E,y),$===null?B=C:$.sibling=C,$=C,_=S}if(y===A.length)return n(I,_),Le&&Fs(I,y),B;if(_===null){for(;y<A.length;y++)_=p(I,A[y],O),_!==null&&(E=i(_,E,y),$===null?B=_:$.sibling=_,$=_);return Le&&Fs(I,y),B}for(_=r(I,_);y<A.length;y++)S=T(_,I,y,A[y],O),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?y:S.key),E=i(S,E,y),$===null?B=S:$.sibling=S,$=S);return t&&_.forEach(function(k){return e(I,k)}),Le&&Fs(I,y),B}function V(I,E,A,O){var B=xa(A);if(typeof B!="function")throw Error(j(150));if(A=B.call(A),A==null)throw Error(j(151));for(var $=B=null,_=E,y=E=0,S=null,C=A.next();_!==null&&!C.done;y++,C=A.next()){_.index>y?(S=_,_=null):S=_.sibling;var k=g(I,_,C.value,O);if(k===null){_===null&&(_=S);break}t&&_&&k.alternate===null&&e(I,_),E=i(k,E,y),$===null?B=k:$.sibling=k,$=k,_=S}if(C.done)return n(I,_),Le&&Fs(I,y),B;if(_===null){for(;!C.done;y++,C=A.next())C=p(I,C.value,O),C!==null&&(E=i(C,E,y),$===null?B=C:$.sibling=C,$=C);return Le&&Fs(I,y),B}for(_=r(I,_);!C.done;y++,C=A.next())C=T(_,I,y,C.value,O),C!==null&&(t&&C.alternate!==null&&_.delete(C.key===null?y:C.key),E=i(C,E,y),$===null?B=C:$.sibling=C,$=C);return t&&_.forEach(function(R){return e(I,R)}),Le&&Fs(I,y),B}function D(I,E,A,O){if(typeof A=="object"&&A!==null&&A.type===Ti&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Il:e:{for(var B=A.key,$=E;$!==null;){if($.key===B){if(B=A.type,B===Ti){if($.tag===7){n(I,$.sibling),E=s($,A.props.children),E.return=I,I=E;break e}}else if($.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$r&&wg(B)===$.type){n(I,$.sibling),E=s($,A.props),E.ref=ja(I,$,A),E.return=I,I=E;break e}n(I,$);break}else e(I,$);$=$.sibling}A.type===Ti?(E=Ws(A.props.children,I.mode,O,A.key),E.return=I,I=E):(O=su(A.type,A.key,A.props,null,I.mode,O),O.ref=ja(I,E,A),O.return=I,I=O)}return a(I);case wi:e:{for($=A.key;E!==null;){if(E.key===$)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),E=s(E,A.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=Od(A,I.mode,O),E.return=I,I=E}return a(I);case $r:return $=A._init,D(I,E,$(A._payload),O)}if(Ga(A))return P(I,E,A,O);if(xa(A))return V(I,E,A,O);Ol(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,A),E.return=I,I=E):(n(I,E),E=Vd(A,I.mode,O),E.return=I,I=E),a(I)):n(I,E)}return D}var Ji=BE(!0),$E=BE(!1),Nu=ks(null),bu=null,Ni=null,jf=null;function Bf(){jf=Ni=bu=null}function $f(t){var e=Nu.current;Pe(Nu),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){bu=t,jf=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(jf!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if(bu===null)throw Error(j(308));Ni=t,bu.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var Bs=null;function qf(t){Bs===null?Bs=[t]:Bs.push(t)}function qE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,qf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function HE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ss(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Er(t,n)}return s=r.interleaved,s===null?(e.next=e,qf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Er(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nf(t,n)}}function Tg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Du(t,e,n,r){var s=t.updateQueue;qr=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;a=0,m=d=u=null,l=i;do{var g=l.lane,T=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,V=l;switch(g=e,T=n,V.tag){case 1:if(P=V.payload,typeof P=="function"){p=P.call(T,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=V.payload,g=typeof P=="function"?P.call(T,p,g):P,g==null)break e;p=Ue({},p,g);break e;case 2:qr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=T,u=p):m=m.next=T,a|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(m===null&&(u=p),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ei|=a,t.lanes=a,t.memoizedState=p}}function Ig(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Zo={},Wn=ks(Zo),Do=ks(Zo),Vo=ks(Zo);function $s(t){if(t===Zo)throw Error(j(174));return t}function Wf(t,e){switch(Se(Vo,e),Se(Do,t),Se(Wn,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ih(e,t)}Pe(Wn),Se(Wn,e)}function Zi(){Pe(Wn),Pe(Do),Pe(Vo)}function WE(t){$s(Vo.current);var e=$s(Wn.current),n=ih(e,t.type);e!==n&&(Se(Do,t),Se(Wn,n))}function Gf(t){Do.current===t&&(Pe(Wn),Pe(Do))}var Me=ks(0);function Vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Kf(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var Zl=Ar.ReactCurrentDispatcher,Rd=Ar.ReactCurrentBatchConfig,Zs=0,Fe=null,et=null,ct=null,Ou=!1,uo=!1,Oo=0,PS=0;function It(){throw Error(j(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function Yf(t,e,n,r,s,i){if(Zs=i,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?VS:OS,t=n(r,s),uo){i=0;do{if(uo=!1,Oo=0,25<=i)throw Error(j(301));i+=1,ct=et=null,e.updateQueue=null,Zl.current=LS,t=n(r,s)}while(uo)}if(Zl.current=Lu,e=et!==null&&et.next!==null,Zs=0,ct=et=Fe=null,Ou=!1,e)throw Error(j(300));return t}function Xf(){var t=Oo!==0;return Oo=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Fe.memoizedState=ct=t:ct=ct.next=t,ct}function vn(){if(et===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=ct===null?Fe.memoizedState:ct.next;if(e!==null)ct=e,et=t;else{if(t===null)throw Error(j(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},ct===null?Fe.memoizedState=ct=t:ct=ct.next=t}return ct}function Lo(t,e){return typeof e=="function"?e(t):e}function Pd(t){var e=vn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=et,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,u=null,d=i;do{var m=d.lane;if((Zs&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,a=r):u=u.next=p,Fe.lanes|=m,ei|=m}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=l,bn(r,e.memoizedState)||(Wt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Fe.lanes|=i,ei|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nd(t){var e=vn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=t(i,a.action),a=a.next;while(a!==s);bn(i,e.memoizedState)||(Wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function GE(){}function KE(t,e){var n=Fe,r=vn(),s=e(),i=!bn(r.memoizedState,s);if(i&&(r.memoizedState=s,Wt=!0),r=r.queue,Jf(XE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,xo(9,YE.bind(null,n,r,s,e),void 0,null),ht===null)throw Error(j(349));Zs&30||QE(n,e,s)}return s}function QE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function YE(t,e,n,r){e.value=n,e.getSnapshot=r,JE(e)&&ZE(t)}function XE(t,e,n){return n(function(){JE(e)&&ZE(t)})}function JE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function ZE(t){var e=Er(t,1);e!==null&&Nn(e,t,1,-1)}function Sg(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=DS.bind(null,Fe,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function e_(){return vn().memoizedState}function eu(t,e,n,r){var s=zn();Fe.flags|=t,s.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function gc(t,e,n,r){var s=vn();r=r===void 0?null:r;var i=void 0;if(et!==null){var a=et.memoizedState;if(i=a.destroy,r!==null&&Qf(r,a.deps)){s.memoizedState=xo(e,n,i,r);return}}Fe.flags|=t,s.memoizedState=xo(1|e,n,i,r)}function Cg(t,e){return eu(8390656,8,t,e)}function Jf(t,e){return gc(2048,8,t,e)}function t_(t,e){return gc(4,2,t,e)}function n_(t,e){return gc(4,4,t,e)}function r_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s_(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,r_.bind(null,e,t),n)}function Zf(){}function i_(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function a_(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o_(t,e,n){return Zs&21?(bn(n,e)||(n=hE(),Fe.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function NS(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{ge=n,Rd.transition=r}}function l_(){return vn().memoizedState}function bS(t,e,n){var r=as(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},u_(t))c_(e,n);else if(n=qE(t,e,n,r),n!==null){var s=xt();Nn(n,t,r,s),d_(n,e,r)}}function DS(t,e,n){var r=as(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(u_(t))c_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,bn(l,a)){var u=e.interleaved;u===null?(s.next=s,qf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=qE(t,e,s,r),n!==null&&(s=xt(),Nn(n,t,r,s),d_(n,e,r))}}function u_(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function c_(t,e){uo=Ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nf(t,n)}}var Lu={readContext:yn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},VS={readContext:yn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,eu(4194308,4,r_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return eu(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bS.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:Zf,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=NS.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,s=zn();if(Le){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),ht===null)throw Error(j(349));Zs&30||QE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Cg(XE.bind(null,r,i,t),[t]),r.flags|=2048,xo(9,YE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=zn(),e=ht.identifierPrefix;if(Le){var n=cr,r=ur;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OS={readContext:yn,useCallback:i_,useContext:yn,useEffect:Jf,useImperativeHandle:s_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:a_,useReducer:Pd,useRef:e_,useState:function(){return Pd(Lo)},useDebugValue:Zf,useDeferredValue:function(t){var e=vn();return o_(e,et.memoizedState,t)},useTransition:function(){var t=Pd(Lo)[0],e=vn().memoizedState;return[t,e]},useMutableSource:GE,useSyncExternalStore:KE,useId:l_,unstable_isNewReconciler:!1},LS={readContext:yn,useCallback:i_,useContext:yn,useEffect:Jf,useImperativeHandle:s_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:a_,useReducer:Nd,useRef:e_,useState:function(){return Nd(Lo)},useDebugValue:Zf,useDeferredValue:function(t){var e=vn();return et===null?e.memoizedState=t:o_(e,et.memoizedState,t)},useTransition:function(){var t=Nd(Lo)[0],e=vn().memoizedState;return[t,e]},useMutableSource:GE,useSyncExternalStore:KE,useId:l_,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yc={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),s=as(t),i=mr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ss(t,i,s),e!==null&&(Nn(e,t,s,r),Jl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),s=as(t),i=mr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ss(t,i,s),e!==null&&(Nn(e,t,s,r),Jl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=as(t),s=mr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ss(t,s,r),e!==null&&(Nn(e,t,r,n),Jl(e,t,r))}};function Ag(t,e,n,r,s,i,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,a):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,r)||!Ro(s,i):!0}function h_(t,e,n){var r=!1,s=vs,i=e.contextType;return typeof i=="object"&&i!==null?i=yn(i):(s=Qt(e)?Xs:Pt.current,r=e.contextTypes,i=(r=r!=null)?Yi(t,s):vs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function kg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function kh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Hf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=yn(i):(i=Qt(e)?Xs:Pt.current,s.context=Yi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ah(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&yc.enqueueReplaceState(s,s.state,null),Du(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ea(t,e){try{var n="",r=e;do n+=u0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function f_(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,Fh=r),Rh(t,e)},n}function m_(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Rh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Rh(t,e),typeof r!="function"&&(is===null?is=new Set([this]):is.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=YS.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ng(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,ss(n,e,1))),n.lanes|=1),t)}var MS=Ar.ReactCurrentOwner,Wt=!1;function Ot(t,e,n,r){e.child=t===null?$E(e,null,n,r):Ji(e,t.child,n,r)}function bg(t,e,n,r,s){n=n.render;var i=e.ref;return zi(e,s),r=Yf(t,e,n,r,i,s),n=Xf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_r(t,e,s)):(Le&&n&&Ff(e),e.flags|=1,Ot(t,e,r,s),e.child)}function Dg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!om(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,p_(t,e,i,r,s)):(t=su(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(a,r)&&t.ref===e.ref)return _r(t,e,s)}return e.flags|=1,t=os(i,r),t.ref=e.ref,t.return=e,e.child=t}function p_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ro(i,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,_r(t,e,s)}return Ph(t,e,n,r,s)}function g_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Di,tn),tn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Di,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(Di,tn),tn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Se(Di,tn),tn|=r;return Ot(t,e,s,n),e.child}function y_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ph(t,e,n,r,s){var i=Qt(n)?Xs:Pt.current;return i=Yi(e,i),zi(e,s),n=Yf(t,e,n,r,i,s),r=Xf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_r(t,e,s)):(Le&&r&&Ff(e),e.flags|=1,Ot(t,e,n,s),e.child)}function Vg(t,e,n,r,s){if(Qt(n)){var i=!0;ku(e)}else i=!1;if(zi(e,s),e.stateNode===null)tu(t,e),h_(e,n,r),kh(e,n,r,s),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=yn(d):(d=Qt(n)?Xs:Pt.current,d=Yi(e,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&kg(e,a,r,d),qr=!1;var g=e.memoizedState;a.state=g,Du(e,r,a,s),u=e.memoizedState,l!==r||g!==u||Kt.current||qr?(typeof m=="function"&&(Ah(e,n,m,r),u=e.memoizedState),(l=qr||Ag(e,n,l,r,g,u,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,HE(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Cn(e.type,l),a.props=d,p=e.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=yn(u):(u=Qt(n)?Xs:Pt.current,u=Yi(e,u));var T=n.getDerivedStateFromProps;(m=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||g!==u)&&kg(e,a,r,u),qr=!1,g=e.memoizedState,a.state=g,Du(e,r,a,s);var P=e.memoizedState;l!==p||g!==P||Kt.current||qr?(typeof T=="function"&&(Ah(e,n,T,r),P=e.memoizedState),(d=qr||Ag(e,n,d,r,g,P,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),a.props=r,a.state=P,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Nh(t,e,n,r,i,s)}function Nh(t,e,n,r,s,i){y_(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return s&&vg(e,n,!1),_r(t,e,i);r=e.stateNode,MS.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Ji(e,t.child,null,i),e.child=Ji(e,null,l,i)):Ot(t,e,l,i),e.memoizedState=r.state,s&&vg(e,n,!0),e.child}function v_(t){var e=t.stateNode;e.pendingContext?yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yg(t,e.context,!1),Wf(t,e.containerInfo)}function Og(t,e,n,r,s){return Xi(),zf(s),e.flags|=256,Ot(t,e,n,r),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function E_(t,e,n){var r=e.pendingProps,s=Me.current,i=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Se(Me,s&1),t===null)return Sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,i?(r=e.mode,i=e.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=_c(a,r,0,null),t=Ws(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Dh(n),e.memoizedState=bh,t):em(e,a));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return FS(t,e,a,r,l,s,n);if(i){i=r.fallback,a=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=os(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=os(l,i):(i=Ws(i,a,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,a=t.child.memoizedState,a=a===null?Dh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=t.childLanes&~n,e.memoizedState=bh,r}return i=t.child,t=i.sibling,r=os(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function em(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ll(t,e,n,r){return r!==null&&zf(r),Ji(e,t.child,null,n),t=em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FS(t,e,n,r,s,i,a){if(n)return e.flags&256?(e.flags&=-257,r=bd(Error(j(422))),Ll(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=_c({mode:"visible",children:r.children},s,0,null),i=Ws(i,s,a,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ji(e,t.child,null,a),e.child.memoizedState=Dh(a),e.memoizedState=bh,i);if(!(e.mode&1))return Ll(t,e,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=bd(i,r,void 0),Ll(t,e,a,r)}if(l=(a&t.childLanes)!==0,Wt||l){if(r=ht,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Er(t,s),Nn(r,t,s,-1))}return am(),r=bd(Error(j(421))),Ll(t,e,a,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=XS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,sn=rs(s.nextSibling),on=e,Le=!0,kn=null,t!==null&&(fn[mn++]=ur,fn[mn++]=cr,fn[mn++]=Js,ur=t.id,cr=t.overflow,Js=e),e=em(e,r.children),e.flags|=4096,e)}function Lg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ch(t.return,e,n)}function Dd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function __(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ot(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,n,e);else if(t.tag===19)Lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Me,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Vu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Vu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dd(e,!0,n,null,i);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=os(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=os(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function US(t,e,n){switch(e.tag){case 3:v_(e),Xi();break;case 5:WE(e);break;case 1:Qt(e.type)&&ku(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Se(Nu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?E_(t,e,n):(Se(Me,Me.current&1),t=_r(t,e,n),t!==null?t.sibling:null);Se(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return __(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,g_(t,e,n)}return _r(t,e,n)}var w_,Vh,T_,I_;w_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vh=function(){};T_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,$s(Wn.current);var i=null;switch(n){case"input":s=th(t,s),r=th(t,r),i=[];break;case"select":s=Ue({},s,{value:void 0}),r=Ue({},r,{value:void 0}),i=[];break;case"textarea":s=sh(t,s),r=sh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cu)}ah(n,r);var a;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(wo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(wo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ke("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};I_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ba(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zS(t,e,n){var r=e.pendingProps;switch(Uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Qt(e.type)&&Au(),St(e),null;case 3:return r=e.stateNode,Zi(),Pe(Kt),Pe(Pt),Kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(jh(kn),kn=null))),Vh(t,e),St(e),null;case 5:Gf(e);var s=$s(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)T_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return St(e),null}if(t=$s(Wn.current),Vl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[$n]=e,r[bo]=i,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<Qa.length;s++)ke(Qa[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":qp(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":Wp(r,i),ke("invalid",r)}ah(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Dl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Dl(r.textContent,l,t),s=["children",""+l]):wo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ke("scroll",r)}switch(n){case"input":Sl(r),Hp(r,i,!0);break;case"textarea":Sl(r),Gp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Cu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[$n]=e,t[bo]=r,w_(t,e,!1,!1),e.stateNode=t;e:{switch(a=oh(n,r),n){case"dialog":ke("cancel",t),ke("close",t),s=r;break;case"iframe":case"object":case"embed":ke("load",t),s=r;break;case"video":case"audio":for(s=0;s<Qa.length;s++)ke(Qa[s],t);s=r;break;case"source":ke("error",t),s=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),s=r;break;case"details":ke("toggle",t),s=r;break;case"input":qp(t,r),s=th(t,r),ke("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ue({},r,{value:void 0}),ke("invalid",t);break;case"textarea":Wp(t,r),s=sh(t,r),ke("invalid",t);break;default:s=r}ah(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?eE(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Jv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&To(t,u):typeof u=="number"&&To(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(wo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ke("scroll",t):u!=null&&Sf(t,i,u,a))}switch(n){case"input":Sl(t),Hp(t,r,!1);break;case"textarea":Sl(t),Gp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ys(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?xi(t,!!r.multiple,i,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Cu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=$s(Vo.current),$s(Wn.current),Vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(i=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:Dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return St(e),null;case 13:if(Pe(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&sn!==null&&e.mode&1&&!(e.flags&128))jE(),Xi(),e.flags|=98560,i=!1;else if(i=Vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[$n]=e}else Xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),i=!1}else kn!==null&&(jh(kn),kn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?rt===0&&(rt=3):am())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return Zi(),Vh(t,e),t===null&&Po(e.stateNode.containerInfo),St(e),null;case 10:return $f(e.type._context),St(e),null;case 17:return Qt(e.type)&&Au(),St(e),null;case 19:if(Pe(Me),i=e.memoizedState,i===null)return St(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)Ba(i,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Vu(t),a!==null){for(e.flags|=128,Ba(i,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,t=a.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Me,Me.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ge()>ta&&(e.flags|=128,r=!0,Ba(i,!1),e.lanes=4194304)}else{if(!r)if(t=Vu(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ba(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Le)return St(e),null}else 2*Ge()-i.renderingStartTime>ta&&n!==1073741824&&(e.flags|=128,r=!0,Ba(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(n=i.last,n!==null?n.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ge(),e.sibling=null,n=Me.current,Se(Me,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tn&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function jS(t,e){switch(Uf(e),e.tag){case 1:return Qt(e.type)&&Au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(),Pe(Kt),Pe(Pt),Kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(Pe(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Me),null;case 4:return Zi(),null;case 10:return $f(e.type._context),null;case 22:case 23:return im(),null;case 24:return null;default:return null}}var xl=!1,kt=!1,BS=typeof WeakSet=="function"?WeakSet:Set,G=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function Oh(t,e,n){try{n()}catch(r){Be(t,e,r)}}var xg=!1;function $S(t,e){if(yh=Tu,t=RE(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,m=0,p=t,g=null;t:for(;;){for(var T;p!==n||s!==0&&p.nodeType!==3||(l=a+s),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(T=p.firstChild)!==null;)g=p,p=T;for(;;){if(p===t)break t;if(g===n&&++d===s&&(l=a),g===i&&++m===r&&(u=a),(T=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vh={focusedElem:t,selectionRange:n},Tu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var V=P.memoizedProps,D=P.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?V:Cn(e.type,V),D);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(O){Be(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return P=xg,xg=!1,P}function co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Oh(e,n,i)}s=s.next}while(s!==r)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S_(t){var e=t.alternate;e!==null&&(t.alternate=null,S_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[bo],delete e[wh],delete e[CS],delete e[AS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C_(t){return t.tag===5||t.tag===3||t.tag===4}function Mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cu));else if(r!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}var mt=null,An=!1;function jr(t,e,n){for(n=n.child;n!==null;)A_(t,e,n),n=n.sibling}function A_(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:kt||bi(n,e);case 6:var r=mt,s=An;mt=null,jr(t,e,n),mt=r,An=s,mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),Ao(t)):Cd(mt,n.stateNode));break;case 4:r=mt,s=An,mt=n.stateNode.containerInfo,An=!0,jr(t,e,n),mt=r,An=s;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Oh(n,e,a),s=s.next}while(s!==r)}jr(t,e,n);break;case 1:if(!kt&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,e,l)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,jr(t,e,n),kt=r):jr(t,e,n);break;default:jr(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BS),e.forEach(function(r){var s=JS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:mt=l.stateNode,An=!1;break e;case 3:mt=l.stateNode.containerInfo,An=!0;break e;case 4:mt=l.stateNode.containerInfo,An=!0;break e}l=l.return}if(mt===null)throw Error(j(160));A_(i,a,s),mt=null,An=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Be(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k_(e,t),e=e.sibling}function k_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Un(t),r&4){try{co(3,t,t.return),vc(3,t)}catch(V){Be(t,t.return,V)}try{co(5,t,t.return)}catch(V){Be(t,t.return,V)}}break;case 1:Sn(e,t),Un(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(Sn(e,t),Un(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var s=t.stateNode;try{To(s,"")}catch(V){Be(t,t.return,V)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,a=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Qv(s,i),oh(l,a);var d=oh(l,i);for(a=0;a<u.length;a+=2){var m=u[a],p=u[a+1];m==="style"?eE(s,p):m==="dangerouslySetInnerHTML"?Jv(s,p):m==="children"?To(s,p):Sf(s,m,p,d)}switch(l){case"input":nh(s,i);break;case"textarea":Yv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?xi(s,!!i.multiple,T,!1):g!==!!i.multiple&&(i.defaultValue!=null?xi(s,!!i.multiple,i.defaultValue,!0):xi(s,!!i.multiple,i.multiple?[]:"",!1))}s[bo]=i}catch(V){Be(t,t.return,V)}}break;case 6:if(Sn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(V){Be(t,t.return,V)}}break;case 3:if(Sn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(V){Be(t,t.return,V)}break;case 4:Sn(e,t),Un(t);break;case 13:Sn(e,t),Un(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(rm=Ge())),r&4&&Fg(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(d=kt)||m,Sn(e,t),kt=d):Sn(e,t),Un(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(G=t,m=t.child;m!==null;){for(p=G=m;G!==null;){switch(g=G,T=g.child,g.tag){case 0:case 11:case 14:case 15:co(4,g,g.return);break;case 1:bi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(V){Be(r,n,V)}}break;case 5:bi(g,g.return);break;case 22:if(g.memoizedState!==null){zg(p);continue}}T!==null?(T.return=g,G=T):zg(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Zv("display",a))}catch(V){Be(t,t.return,V)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(V){Be(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Sn(e,t),Un(t),r&4&&Fg(t);break;case 21:break;default:Sn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(To(s,""),r.flags&=-33);var i=Mg(t);Mh(t,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Mg(t);xh(t,l,a);break;default:throw Error(j(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){G=t,R_(t)}function R_(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||xl;if(!a){var l=s.alternate,u=l!==null&&l.memoizedState!==null||kt;l=xl;var d=kt;if(xl=a,(kt=u)&&!d)for(G=s;G!==null;)a=G,u=a.child,a.tag===22&&a.memoizedState!==null?jg(s):u!==null?(u.return=a,G=u):jg(s);for(;i!==null;)G=i,R_(i),i=i.sibling;G=s,xl=l,kt=d}Ug(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):Ug(t)}}function Ug(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||vc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ig(e,i,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ig(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}kt||e.flags&512&&Lh(e)}catch(g){Be(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function zg(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function jg(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Be(e,s,u)}}var i=e.return;try{Lh(e)}catch(u){Be(e,i,u)}break;case 5:var a=e.return;try{Lh(e)}catch(u){Be(e,a,u)}}}catch(u){Be(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var HS=Math.ceil,xu=Ar.ReactCurrentDispatcher,tm=Ar.ReactCurrentOwner,gn=Ar.ReactCurrentBatchConfig,me=0,ht=null,Ye=null,vt=0,tn=0,Di=ks(0),rt=0,Mo=null,ei=0,Ec=0,nm=0,ho=null,qt=null,rm=0,ta=1/0,or=null,Mu=!1,Fh=null,is=null,Ml=!1,Jr=null,Fu=0,fo=0,Uh=null,nu=-1,ru=0;function xt(){return me&6?Ge():nu!==-1?nu:nu=Ge()}function as(t){return t.mode&1?me&2&&vt!==0?vt&-vt:RS.transition!==null?(ru===0&&(ru=hE()),ru):(t=ge,t!==0||(t=window.event,t=t===void 0?16:EE(t.type)),t):1}function Nn(t,e,n,r){if(50<fo)throw fo=0,Uh=null,Error(j(185));Yo(t,n,r),(!(me&2)||t!==ht)&&(t===ht&&(!(me&2)&&(Ec|=n),rt===4&&Wr(t,vt)),Yt(t,r),n===1&&me===0&&!(e.mode&1)&&(ta=Ge()+500,pc&&Rs()))}function Yt(t,e){var n=t.callbackNode;R0(t,e);var r=wu(t,t===ht?vt:0);if(r===0)n!==null&&Yp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yp(n),e===1)t.tag===0?kS(Bg.bind(null,t)):FE(Bg.bind(null,t)),IS(function(){!(me&6)&&Rs()}),n=null;else{switch(fE(r)){case 1:n=Pf;break;case 4:n=cE;break;case 16:n=_u;break;case 536870912:n=dE;break;default:n=_u}n=x_(n,P_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function P_(t,e){if(nu=-1,ru=0,me&6)throw Error(j(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=wu(t,t===ht?vt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Uu(t,r);else{e=r;var s=me;me|=2;var i=b_();(ht!==t||vt!==e)&&(or=null,ta=Ge()+500,Hs(t,e));do try{KS();break}catch(l){N_(t,l)}while(!0);Bf(),xu.current=i,me=s,Ye!==null?e=0:(ht=null,vt=0,e=rt)}if(e!==0){if(e===2&&(s=hh(t),s!==0&&(r=s,e=zh(t,s))),e===1)throw n=Mo,Hs(t,0),Wr(t,r),Yt(t,Ge()),n;if(e===6)Wr(t,r);else{if(s=t.current.alternate,!(r&30)&&!WS(s)&&(e=Uu(t,r),e===2&&(i=hh(t),i!==0&&(r=i,e=zh(t,i))),e===1))throw n=Mo,Hs(t,0),Wr(t,r),Yt(t,Ge()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Us(t,qt,or);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=rm+500-Ge(),10<e)){if(wu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=_h(Us.bind(null,t,qt,or),e);break}Us(t,qt,or);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var a=31-Pn(r);i=1<<a,a=e[a],a>s&&(s=a),r&=~i}if(r=s,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HS(r/1960))-r,10<r){t.timeoutHandle=_h(Us.bind(null,t,qt,or),r);break}Us(t,qt,or);break;case 5:Us(t,qt,or);break;default:throw Error(j(329))}}}return Yt(t,Ge()),t.callbackNode===n?P_.bind(null,t):null}function zh(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(Hs(t,e).flags|=256),t=Uu(t,e),t!==2&&(e=qt,qt=n,e!==null&&jh(e)),t}function jh(t){qt===null?qt=t:qt.push.apply(qt,t)}function WS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!bn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~nm,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function Bg(t){if(me&6)throw Error(j(327));ji();var e=wu(t,0);if(!(e&1))return Yt(t,Ge()),null;var n=Uu(t,e);if(t.tag!==0&&n===2){var r=hh(t);r!==0&&(e=r,n=zh(t,r))}if(n===1)throw n=Mo,Hs(t,0),Wr(t,e),Yt(t,Ge()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Us(t,qt,or),Yt(t,Ge()),null}function sm(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(ta=Ge()+500,pc&&Rs())}}function ti(t){Jr!==null&&Jr.tag===0&&!(me&6)&&ji();var e=me;me|=1;var n=gn.transition,r=ge;try{if(gn.transition=null,ge=1,t)return t()}finally{ge=r,gn.transition=n,me=e,!(me&6)&&Rs()}}function im(){tn=Di.current,Pe(Di)}function Hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TS(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Au();break;case 3:Zi(),Pe(Kt),Pe(Pt),Kf();break;case 5:Gf(r);break;case 4:Zi();break;case 13:Pe(Me);break;case 19:Pe(Me);break;case 10:$f(r.type._context);break;case 22:case 23:im()}n=n.return}if(ht=t,Ye=t=os(t.current,null),vt=tn=e,rt=0,Mo=null,nm=Ec=ei=0,qt=ho=null,Bs!==null){for(e=0;e<Bs.length;e++)if(n=Bs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}Bs=null}return t}function N_(t,e){do{var n=Ye;try{if(Bf(),Zl.current=Lu,Ou){for(var r=Fe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ou=!1}if(Zs=0,ct=et=Fe=null,uo=!1,Oo=0,tm.current=null,n===null||n.return===null){rt=1,Mo=e,Ye=null;break}e:{var i=t,a=n.return,l=n,u=e;if(e=vt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var T=Pg(a);if(T!==null){T.flags&=-257,Ng(T,a,l,i,e),T.mode&1&&Rg(i,d,e),e=T,u=d;var P=e.updateQueue;if(P===null){var V=new Set;V.add(u),e.updateQueue=V}else P.add(u);break e}else{if(!(e&1)){Rg(i,d,e),am();break e}u=Error(j(426))}}else if(Le&&l.mode&1){var D=Pg(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ng(D,a,l,i,e),zf(ea(u,l));break e}}i=u=ea(u,l),rt!==4&&(rt=2),ho===null?ho=[i]:ho.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=f_(i,u,e);Tg(i,I);break e;case 1:l=u;var E=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(is===null||!is.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=m_(i,l,e);Tg(i,O);break e}}i=i.return}while(i!==null)}V_(n)}catch(B){e=B,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function b_(){var t=xu.current;return xu.current=Lu,t===null?Lu:t}function am(){(rt===0||rt===3||rt===2)&&(rt=4),ht===null||!(ei&268435455)&&!(Ec&268435455)||Wr(ht,vt)}function Uu(t,e){var n=me;me|=2;var r=b_();(ht!==t||vt!==e)&&(or=null,Hs(t,e));do try{GS();break}catch(s){N_(t,s)}while(!0);if(Bf(),me=n,xu.current=r,Ye!==null)throw Error(j(261));return ht=null,vt=0,rt}function GS(){for(;Ye!==null;)D_(Ye)}function KS(){for(;Ye!==null&&!E0();)D_(Ye)}function D_(t){var e=L_(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?V_(t):Ye=e,tm.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jS(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Ye=null;return}}else if(n=zS(n,e,tn),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);rt===0&&(rt=5)}function Us(t,e,n){var r=ge,s=gn.transition;try{gn.transition=null,ge=1,QS(t,e,n,r)}finally{gn.transition=s,ge=r}return null}function QS(t,e,n,r){do ji();while(Jr!==null);if(me&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(P0(t,i),t===ht&&(Ye=ht=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ml||(Ml=!0,x_(_u,function(){return ji(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=gn.transition,gn.transition=null;var a=ge;ge=1;var l=me;me|=4,tm.current=null,$S(t,n),k_(n,t),pS(vh),Tu=!!yh,vh=yh=null,t.current=n,qS(n),_0(),me=l,ge=a,gn.transition=i}else t.current=n;if(Ml&&(Ml=!1,Jr=t,Fu=s),i=t.pendingLanes,i===0&&(is=null),I0(n.stateNode),Yt(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Mu)throw Mu=!1,t=Fh,Fh=null,t;return Fu&1&&t.tag!==0&&ji(),i=t.pendingLanes,i&1?t===Uh?fo++:(fo=0,Uh=t):fo=0,Rs(),null}function ji(){if(Jr!==null){var t=fE(Fu),e=gn.transition,n=ge;try{if(gn.transition=null,ge=16>t?16:t,Jr===null)var r=!1;else{if(t=Jr,Jr=null,Fu=0,me&6)throw Error(j(331));var s=me;for(me|=4,G=t.current;G!==null;){var i=G,a=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(G=d;G!==null;){var m=G;switch(m.tag){case 0:case 11:case 15:co(8,m,i)}var p=m.child;if(p!==null)p.return=m,G=p;else for(;G!==null;){m=G;var g=m.sibling,T=m.return;if(S_(m),m===d){G=null;break}if(g!==null){g.return=T,G=g;break}G=T}}}var P=i.alternate;if(P!==null){var V=P.child;if(V!==null){P.child=null;do{var D=V.sibling;V.sibling=null,V=D}while(V!==null)}}G=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,G=a;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:co(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,G=I;break e}G=i.return}}var E=t.current;for(G=E;G!==null;){a=G;var A=a.child;if(a.subtreeFlags&2064&&A!==null)A.return=a,G=A;else e:for(a=E;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vc(9,l)}}catch(B){Be(l,l.return,B)}if(l===a){G=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,G=O;break e}G=l.return}}if(me=s,Rs(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(cc,t)}catch{}r=!0}return r}finally{ge=n,gn.transition=e}}return!1}function $g(t,e,n){e=ea(n,e),e=f_(t,e,1),t=ss(t,e,1),e=xt(),t!==null&&(Yo(t,1,e),Yt(t,e))}function Be(t,e,n){if(t.tag===3)$g(t,t,n);else for(;e!==null;){if(e.tag===3){$g(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(is===null||!is.has(r))){t=ea(n,t),t=m_(e,t,1),e=ss(e,t,1),t=xt(),e!==null&&(Yo(e,1,t),Yt(e,t));break}}e=e.return}}function YS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(vt&n)===n&&(rt===4||rt===3&&(vt&130023424)===vt&&500>Ge()-rm?Hs(t,0):nm|=n),Yt(t,e)}function O_(t,e){e===0&&(t.mode&1?(e=kl,kl<<=1,!(kl&130023424)&&(kl=4194304)):e=1);var n=xt();t=Er(t,e),t!==null&&(Yo(t,e,n),Yt(t,n))}function XS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O_(t,n)}function JS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),O_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,US(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Le&&e.flags&1048576&&UE(e,Pu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tu(t,e),t=e.pendingProps;var s=Yi(e,Pt.current);zi(e,n),s=Yf(null,e,r,t,s,n);var i=Xf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(i=!0,ku(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Hf(e),s.updater=yc,e.stateNode=s,s._reactInternals=e,kh(e,r,t,n),e=Nh(null,e,r,!0,i,n)):(e.tag=0,Le&&i&&Ff(e),Ot(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=e1(r),t=Cn(r,t),s){case 0:e=Ph(null,e,r,t,n);break e;case 1:e=Vg(null,e,r,t,n);break e;case 11:e=bg(null,e,r,t,n);break e;case 14:e=Dg(null,e,r,Cn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),Ph(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),Vg(t,e,r,s,n);case 3:e:{if(v_(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,HE(t,e),Du(e,r,null,n);var a=e.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ea(Error(j(423)),e),e=Og(t,e,r,n,s);break e}else if(r!==s){s=ea(Error(j(424)),e),e=Og(t,e,r,n,s);break e}else for(sn=rs(e.stateNode.containerInfo.firstChild),on=e,Le=!0,kn=null,n=$E(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===s){e=_r(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return WE(e),t===null&&Sh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,a=s.children,Eh(r,s)?a=null:i!==null&&Eh(r,i)&&(e.flags|=32),y_(t,e),Ot(t,e,a,n),e.child;case 6:return t===null&&Sh(e),null;case 13:return E_(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),bg(t,e,r,s,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,a=s.value,Se(Nu,r._currentValue),r._currentValue=a,i!==null)if(bn(i.value,a)){if(i.children===s.children&&!Kt.current){e=_r(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=mr(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ch(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ch(a,n,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ot(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,zi(e,n),s=yn(s),r=r(s),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,s=Cn(r,e.pendingProps),s=Cn(r.type,s),Dg(t,e,r,s,n);case 15:return p_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Cn(r,s),tu(t,e),e.tag=1,Qt(r)?(t=!0,ku(e)):t=!1,zi(e,n),h_(e,r,s),kh(e,r,s,n),Nh(null,e,r,!0,t,n);case 19:return __(t,e,n);case 22:return g_(t,e,n)}throw Error(j(156,e.tag))};function x_(t,e){return uE(t,e)}function ZS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,r){return new ZS(t,e,n,r)}function om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e1(t){if(typeof t=="function")return om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Af)return 11;if(t===kf)return 14}return 2}function os(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function su(t,e,n,r,s,i){var a=2;if(r=t,typeof t=="function")om(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ti:return Ws(n.children,s,i,e);case Cf:a=8,s|=8;break;case Xd:return t=pn(12,n,e,s|2),t.elementType=Xd,t.lanes=i,t;case Jd:return t=pn(13,n,e,s),t.elementType=Jd,t.lanes=i,t;case Zd:return t=pn(19,n,e,s),t.elementType=Zd,t.lanes=i,t;case Wv:return _c(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qv:a=10;break e;case Hv:a=9;break e;case Af:a=11;break e;case kf:a=14;break e;case $r:a=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=pn(a,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ws(t,e,n,r){return t=pn(7,t,r,e),t.lanes=n,t}function _c(t,e,n,r){return t=pn(22,t,r,e),t.elementType=Wv,t.lanes=n,t.stateNode={isHidden:!1},t}function Vd(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function t1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=md(0),this.expirationTimes=md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=md(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function lm(t,e,n,r,s,i,a,l,u){return t=new t1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=pn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(i),t}function n1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function M_(t){if(!t)return vs;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Qt(n))return ME(t,n,e)}return e}function F_(t,e,n,r,s,i,a,l,u){return t=lm(n,r,!0,t,s,i,a,l,u),t.context=M_(null),n=t.current,r=xt(),s=as(n),i=mr(r,s),i.callback=e??null,ss(n,i,s),t.current.lanes=s,Yo(t,s,r),Yt(t,r),t}function wc(t,e,n,r){var s=e.current,i=xt(),a=as(s);return n=M_(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(i,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ss(s,e,a),t!==null&&(Nn(t,s,a,i),Jl(t,s,a)),a}function zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){qg(t,e),(t=t.alternate)&&qg(t,e)}function r1(){return null}var U_=typeof reportError=="function"?reportError:function(t){console.error(t)};function cm(t){this._internalRoot=t}Tc.prototype.render=cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));wc(t,e,null,null)};Tc.prototype.unmount=cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){wc(null,t,null,null)}),e[vr]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=gE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hr.length&&e!==0&&e<Hr[n].priority;n++);Hr.splice(n,0,t),n===0&&vE(t)}};function dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function s1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=zu(a);i.call(d)}}var a=F_(e,r,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=a,t[vr]=a.current,Po(t.nodeType===8?t.parentNode:t),ti(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=zu(u);l.call(d)}}var u=lm(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=u,t[vr]=u.current,Po(t.nodeType===8?t.parentNode:t),ti(function(){wc(e,u,n,r)}),u}function Sc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var u=zu(a);l.call(u)}}wc(e,a,t,s)}else a=s1(n,e,t,s,r);return zu(a)}mE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(Nf(e,n|1),Yt(e,Ge()),!(me&6)&&(ta=Ge()+500,Rs()))}break;case 13:ti(function(){var r=Er(t,1);if(r!==null){var s=xt();Nn(r,t,1,s)}}),um(t,1)}};bf=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=xt();Nn(e,t,134217728,n)}um(t,134217728)}};pE=function(t){if(t.tag===13){var e=as(t),n=Er(t,e);if(n!==null){var r=xt();Nn(n,t,e,r)}um(t,e)}};gE=function(){return ge};yE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};uh=function(t,e,n){switch(e){case"input":if(nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=mc(r);if(!s)throw Error(j(90));Kv(r),nh(r,s)}}}break;case"textarea":Yv(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};rE=sm;sE=ti;var i1={usingClientEntryPoint:!1,Events:[Jo,Ai,mc,tE,nE,sm]},$a={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a1={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oE(t),t===null?null:t.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{cc=Fl.inject(a1),Hn=Fl}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dm(e))throw Error(j(200));return n1(t,e,null,n)};cn.createRoot=function(t,e){if(!dm(t))throw Error(j(299));var n=!1,r="",s=U_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=lm(t,1,!1,null,null,n,!1,r,s),t[vr]=e.current,Po(t.nodeType===8?t.parentNode:t),new cm(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=oE(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return ti(t)};cn.hydrate=function(t,e,n){if(!Ic(e))throw Error(j(200));return Sc(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!dm(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=U_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=F_(e,null,t,1,n??null,s,!1,i,a),t[vr]=e.current,Po(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Tc(e)};cn.render=function(t,e,n){if(!Ic(e))throw Error(j(200));return Sc(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!Ic(t))throw Error(j(40));return t._reactRootContainer?(ti(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};cn.unstable_batchedUpdates=sm;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ic(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Sc(t,e,n,!1,r)};cn.version="18.3.1-next-f1338f8080-20240426";function z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z_)}catch(t){console.error(t)}}z_(),bv.exports=cn;var hm=bv.exports;var j_,Kg=hm;j_=Kg.createRoot,Kg.hydrateRoot;const d1=()=>{};var Qg={};/**
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
 */const B_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},h1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},$_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,T=d&63;u||(T=64,a||(g=64)),r.push(n[m],n[p],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):h1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new f1;const g=i<<2|l>>4;if(r.push(g),d!==64){const T=l<<4&240|d>>2;if(r.push(T),p!==64){const P=d<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class f1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m1=function(t){const e=B_(t);return $_.encodeByteArray(e,!0)},ju=function(t){return m1(t).replace(/\./g,"")},q_=function(t){try{return $_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function p1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const g1=()=>p1().__FIREBASE_DEFAULTS__,y1=()=>{if(typeof process>"u"||typeof Qg>"u")return;const t=Qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&q_(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return d1()||g1()||y1()||v1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H_=t=>{var e,n;return(n=(e=Cc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},E1=t=>{const e=H_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},W_=()=>{var t;return(t=Cc())==null?void 0:t.config},G_=t=>{var e;return(e=Cc())==null?void 0:e[`_${t}`]};/**
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
 */class _1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function K_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function w1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ju(JSON.stringify(n)),ju(JSON.stringify(a)),""].join(".")}const mo={};function T1(){const t={prod:[],emulator:[]};for(const e of Object.keys(mo))mo[e]?t.emulator.push(e):t.prod.push(e);return t}function I1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Yg=!1;function Q_(t,e){if(typeof window>"u"||typeof document>"u"||!ya(window.location.host)||mo[t]===e||mo[t]||Yg)return;mo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=T1().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Yg=!0,a()},g}function m(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=I1(r),T=n("text"),P=document.getElementById(T)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),I=n("preprendIcon"),E=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),m(D,V);const O=d();u(E,I),A.append(E,P,D,O),document.body.appendChild(A)}i?(P.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V16.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V16.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function C1(){var e;const t=(e=Cc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function A1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function R1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P1(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N1(){return!C1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b1(){try{return typeof indexedDB=="object"}catch{return!1}}function D1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const V1="FirebaseError";class kr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=V1,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?O1(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new kr(s,l,r)}}function O1(t,e){return t.replace(L1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const L1=/\{\$([^}]+)}/g;function x1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Xg(i)&&Xg(a)){if(!ni(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xg(t){return t!==null&&typeof t=="object"}/**
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
 */function tl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ya(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function M1(t,e){const n=new F1(t,e);return n.subscribe.bind(n)}class F1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");U1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ld),s.error===void 0&&(s.error=Ld),s.complete===void 0&&(s.complete=Ld);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ld(){}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class ri{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zs="[DEFAULT]";/**
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
 */class z1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B1(e))try{this.getOrInitializeService({instanceIdentifier:zs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zs){return this.instances.has(e)}getOptions(e=zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zs){return this.component?this.component.multipleInstances?e:zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j1(t){return t===zs?void 0:t}function B1(t){return t.instantiationMode==="EAGER"}/**
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
 */class $1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new z1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const q1={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},H1=ue.INFO,W1={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},G1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=W1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fm{constructor(e){this.name=e,this._logLevel=H1,this._logHandler=G1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const K1=(t,e)=>e.some(n=>t instanceof n);let Jg,Zg;function Q1(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y1(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y_=new WeakMap,Bh=new WeakMap,X_=new WeakMap,xd=new WeakMap,mm=new WeakMap;function X1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(ls(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Y_.set(n,t)}).catch(()=>{}),mm.set(e,t),e}function J1(t){if(Bh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Bh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ls(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Z1(t){$h=t($h)}function eC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Md(this),e,...n);return X_.set(r,e.sort?e.sort():[e]),ls(r)}:Y1().includes(t)?function(...e){return t.apply(Md(this),e),ls(Y_.get(this))}:function(...e){return ls(t.apply(Md(this),e))}}function tC(t){return typeof t=="function"?eC(t):(t instanceof IDBTransaction&&J1(t),K1(t,Q1())?new Proxy(t,$h):t)}function ls(t){if(t instanceof IDBRequest)return X1(t);if(xd.has(t))return xd.get(t);const e=tC(t);return e!==t&&(xd.set(t,e),mm.set(e,t)),e}const Md=t=>mm.get(t);function nC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=ls(a);return r&&a.addEventListener("upgradeneeded",u=>{r(ls(a.result),u.oldVersion,u.newVersion,ls(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const rC=["get","getKey","getAll","getAllKeys","count"],sC=["put","add","delete","clear"],Fd=new Map;function ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rC.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return Fd.set(e,i),i}Z1(t=>({...t,get:(e,n,r)=>ey(e,n)||t.get(e,n,r),has:(e,n)=>!!ey(e,n)||t.has(e,n)}));/**
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
 */class iC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qh="@firebase/app",ty="0.14.5";/**
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
 */const wr=new fm("@firebase/app"),oC="@firebase/app-compat",lC="@firebase/analytics-compat",uC="@firebase/analytics",cC="@firebase/app-check-compat",dC="@firebase/app-check",hC="@firebase/auth",fC="@firebase/auth-compat",mC="@firebase/database",pC="@firebase/data-connect",gC="@firebase/database-compat",yC="@firebase/functions",vC="@firebase/functions-compat",EC="@firebase/installations",_C="@firebase/installations-compat",wC="@firebase/messaging",TC="@firebase/messaging-compat",IC="@firebase/performance",SC="@firebase/performance-compat",CC="@firebase/remote-config",AC="@firebase/remote-config-compat",kC="@firebase/storage",RC="@firebase/storage-compat",PC="@firebase/firestore",NC="@firebase/ai",bC="@firebase/firestore-compat",DC="firebase",VC="12.5.0";/**
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
 */const Hh="[DEFAULT]",OC={[qh]:"fire-core",[oC]:"fire-core-compat",[uC]:"fire-analytics",[lC]:"fire-analytics-compat",[dC]:"fire-app-check",[cC]:"fire-app-check-compat",[hC]:"fire-auth",[fC]:"fire-auth-compat",[mC]:"fire-rtdb",[pC]:"fire-data-connect",[gC]:"fire-rtdb-compat",[yC]:"fire-fn",[vC]:"fire-fn-compat",[EC]:"fire-iid",[_C]:"fire-iid-compat",[wC]:"fire-fcm",[TC]:"fire-fcm-compat",[IC]:"fire-perf",[SC]:"fire-perf-compat",[CC]:"fire-rc",[AC]:"fire-rc-compat",[kC]:"fire-gcs",[RC]:"fire-gcs-compat",[PC]:"fire-fst",[bC]:"fire-fst-compat",[NC]:"fire-vertex","fire-js":"fire-js",[DC]:"fire-js-all"};/**
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
 */const Bu=new Map,LC=new Map,Wh=new Map;function ny(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function na(t){const e=t.name;if(Wh.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Wh.set(e,t);for(const n of Bu.values())ny(n,t);for(const n of LC.values())ny(n,t);return!0}function pm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const xC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},us=new el("app","Firebase",xC);/**
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
 */class MC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
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
 */const va=VC;function J_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Hh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw us.create("bad-app-name",{appName:String(s)});if(n||(n=W_()),!n)throw us.create("no-options");const i=Bu.get(s);if(i){if(ni(n,i.options)&&ni(r,i.config))return i;throw us.create("duplicate-app",{appName:s})}const a=new $1(s);for(const u of Wh.values())a.addComponent(u);const l=new MC(n,r,a);return Bu.set(s,l),l}function Z_(t=Hh){const e=Bu.get(t);if(!e&&t===Hh&&W_())return J_();if(!e)throw us.create("no-app",{appName:t});return e}function cs(t,e,n){let r=OC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}na(new ri(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const FC="firebase-heartbeat-database",UC=1,Fo="firebase-heartbeat-store";let Ud=null;function ew(){return Ud||(Ud=nC(FC,UC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw us.create("idb-open",{originalErrorMessage:t.message})})),Ud}async function zC(t){try{const n=(await ew()).transaction(Fo),r=await n.objectStore(Fo).get(tw(t));return await n.done,r}catch(e){if(e instanceof kr)wr.warn(e.message);else{const n=us.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function ry(t,e){try{const r=(await ew()).transaction(Fo,"readwrite");await r.objectStore(Fo).put(e,tw(t)),await r.done}catch(n){if(n instanceof kr)wr.warn(n.message);else{const r=us.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function tw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jC=1024,BC=30;class $C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>BC){const a=WC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sy(),{heartbeatsToSend:r,unsentEntries:s}=qC(this._heartbeatsCache.heartbeats),i=ju(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wr.warn(n),""}}}function sy(){return new Date().toISOString().substring(0,10)}function qC(t,e=jC){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),iy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b1()?D1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function iy(t){return ju(JSON.stringify({version:2,heartbeats:t})).length}function WC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function GC(t){na(new ri("platform-logger",e=>new iC(e),"PRIVATE")),na(new ri("heartbeat",e=>new $C(e),"PRIVATE")),cs(qh,ty,t),cs(qh,ty,"esm2020"),cs("fire-js","")}GC("");var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,nw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function S(){}S.prototype=y.prototype,_.F=y.prototype,_.prototype=new S,_.prototype.constructor=_,_.D=function(C,k,R){for(var w=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)w[ie-2]=arguments[ie];return y.prototype[k].apply(C,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,S){S||(S=0);const C=Array(16);if(typeof y=="string")for(var k=0;k<16;++k)C[k]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(k=0;k<16;++k)C[k]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=_.g[0],S=_.g[1],k=_.g[2];let R=_.g[3],w;w=y+(R^S&(k^R))+C[0]+3614090360&4294967295,y=S+(w<<7&4294967295|w>>>25),w=R+(k^y&(S^k))+C[1]+3905402710&4294967295,R=y+(w<<12&4294967295|w>>>20),w=k+(S^R&(y^S))+C[2]+606105819&4294967295,k=R+(w<<17&4294967295|w>>>15),w=S+(y^k&(R^y))+C[3]+3250441966&4294967295,S=k+(w<<22&4294967295|w>>>10),w=y+(R^S&(k^R))+C[4]+4118548399&4294967295,y=S+(w<<7&4294967295|w>>>25),w=R+(k^y&(S^k))+C[5]+1200080426&4294967295,R=y+(w<<12&4294967295|w>>>20),w=k+(S^R&(y^S))+C[6]+2821735955&4294967295,k=R+(w<<17&4294967295|w>>>15),w=S+(y^k&(R^y))+C[7]+4249261313&4294967295,S=k+(w<<22&4294967295|w>>>10),w=y+(R^S&(k^R))+C[8]+1770035416&4294967295,y=S+(w<<7&4294967295|w>>>25),w=R+(k^y&(S^k))+C[9]+2336552879&4294967295,R=y+(w<<12&4294967295|w>>>20),w=k+(S^R&(y^S))+C[10]+4294925233&4294967295,k=R+(w<<17&4294967295|w>>>15),w=S+(y^k&(R^y))+C[11]+2304563134&4294967295,S=k+(w<<22&4294967295|w>>>10),w=y+(R^S&(k^R))+C[12]+1804603682&4294967295,y=S+(w<<7&4294967295|w>>>25),w=R+(k^y&(S^k))+C[13]+4254626195&4294967295,R=y+(w<<12&4294967295|w>>>20),w=k+(S^R&(y^S))+C[14]+2792965006&4294967295,k=R+(w<<17&4294967295|w>>>15),w=S+(y^k&(R^y))+C[15]+1236535329&4294967295,S=k+(w<<22&4294967295|w>>>10),w=y+(k^R&(S^k))+C[1]+4129170786&4294967295,y=S+(w<<5&4294967295|w>>>27),w=R+(S^k&(y^S))+C[6]+3225465664&4294967295,R=y+(w<<9&4294967295|w>>>23),w=k+(y^S&(R^y))+C[11]+643717713&4294967295,k=R+(w<<14&4294967295|w>>>18),w=S+(R^y&(k^R))+C[0]+3921069994&4294967295,S=k+(w<<20&4294967295|w>>>12),w=y+(k^R&(S^k))+C[5]+3593408605&4294967295,y=S+(w<<5&4294967295|w>>>27),w=R+(S^k&(y^S))+C[10]+38016083&4294967295,R=y+(w<<9&4294967295|w>>>23),w=k+(y^S&(R^y))+C[15]+3634488961&4294967295,k=R+(w<<14&4294967295|w>>>18),w=S+(R^y&(k^R))+C[4]+3889429448&4294967295,S=k+(w<<20&4294967295|w>>>12),w=y+(k^R&(S^k))+C[9]+568446438&4294967295,y=S+(w<<5&4294967295|w>>>27),w=R+(S^k&(y^S))+C[14]+3275163606&4294967295,R=y+(w<<9&4294967295|w>>>23),w=k+(y^S&(R^y))+C[3]+4107603335&4294967295,k=R+(w<<14&4294967295|w>>>18),w=S+(R^y&(k^R))+C[8]+1163531501&4294967295,S=k+(w<<20&4294967295|w>>>12),w=y+(k^R&(S^k))+C[13]+2850285829&4294967295,y=S+(w<<5&4294967295|w>>>27),w=R+(S^k&(y^S))+C[2]+4243563512&4294967295,R=y+(w<<9&4294967295|w>>>23),w=k+(y^S&(R^y))+C[7]+1735328473&4294967295,k=R+(w<<14&4294967295|w>>>18),w=S+(R^y&(k^R))+C[12]+2368359562&4294967295,S=k+(w<<20&4294967295|w>>>12),w=y+(S^k^R)+C[5]+4294588738&4294967295,y=S+(w<<4&4294967295|w>>>28),w=R+(y^S^k)+C[8]+2272392833&4294967295,R=y+(w<<11&4294967295|w>>>21),w=k+(R^y^S)+C[11]+1839030562&4294967295,k=R+(w<<16&4294967295|w>>>16),w=S+(k^R^y)+C[14]+4259657740&4294967295,S=k+(w<<23&4294967295|w>>>9),w=y+(S^k^R)+C[1]+2763975236&4294967295,y=S+(w<<4&4294967295|w>>>28),w=R+(y^S^k)+C[4]+1272893353&4294967295,R=y+(w<<11&4294967295|w>>>21),w=k+(R^y^S)+C[7]+4139469664&4294967295,k=R+(w<<16&4294967295|w>>>16),w=S+(k^R^y)+C[10]+3200236656&4294967295,S=k+(w<<23&4294967295|w>>>9),w=y+(S^k^R)+C[13]+681279174&4294967295,y=S+(w<<4&4294967295|w>>>28),w=R+(y^S^k)+C[0]+3936430074&4294967295,R=y+(w<<11&4294967295|w>>>21),w=k+(R^y^S)+C[3]+3572445317&4294967295,k=R+(w<<16&4294967295|w>>>16),w=S+(k^R^y)+C[6]+76029189&4294967295,S=k+(w<<23&4294967295|w>>>9),w=y+(S^k^R)+C[9]+3654602809&4294967295,y=S+(w<<4&4294967295|w>>>28),w=R+(y^S^k)+C[12]+3873151461&4294967295,R=y+(w<<11&4294967295|w>>>21),w=k+(R^y^S)+C[15]+530742520&4294967295,k=R+(w<<16&4294967295|w>>>16),w=S+(k^R^y)+C[2]+3299628645&4294967295,S=k+(w<<23&4294967295|w>>>9),w=y+(k^(S|~R))+C[0]+4096336452&4294967295,y=S+(w<<6&4294967295|w>>>26),w=R+(S^(y|~k))+C[7]+1126891415&4294967295,R=y+(w<<10&4294967295|w>>>22),w=k+(y^(R|~S))+C[14]+2878612391&4294967295,k=R+(w<<15&4294967295|w>>>17),w=S+(R^(k|~y))+C[5]+4237533241&4294967295,S=k+(w<<21&4294967295|w>>>11),w=y+(k^(S|~R))+C[12]+1700485571&4294967295,y=S+(w<<6&4294967295|w>>>26),w=R+(S^(y|~k))+C[3]+2399980690&4294967295,R=y+(w<<10&4294967295|w>>>22),w=k+(y^(R|~S))+C[10]+4293915773&4294967295,k=R+(w<<15&4294967295|w>>>17),w=S+(R^(k|~y))+C[1]+2240044497&4294967295,S=k+(w<<21&4294967295|w>>>11),w=y+(k^(S|~R))+C[8]+1873313359&4294967295,y=S+(w<<6&4294967295|w>>>26),w=R+(S^(y|~k))+C[15]+4264355552&4294967295,R=y+(w<<10&4294967295|w>>>22),w=k+(y^(R|~S))+C[6]+2734768916&4294967295,k=R+(w<<15&4294967295|w>>>17),w=S+(R^(k|~y))+C[13]+1309151649&4294967295,S=k+(w<<21&4294967295|w>>>11),w=y+(k^(S|~R))+C[4]+4149444226&4294967295,y=S+(w<<6&4294967295|w>>>26),w=R+(S^(y|~k))+C[11]+3174756917&4294967295,R=y+(w<<10&4294967295|w>>>22),w=k+(y^(R|~S))+C[2]+718787259&4294967295,k=R+(w<<15&4294967295|w>>>17),w=S+(R^(k|~y))+C[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(k+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+R&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const S=y-this.blockSize,C=this.C;let k=this.h,R=0;for(;R<y;){if(k==0)for(;R<=S;)s(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<y;)if(C[k++]=_.charCodeAt(R++),k==this.blockSize){s(this,C),k=0;break}}else for(;R<y;)if(C[k++]=_[R++],k==this.blockSize){s(this,C),k=0;break}}this.h=k,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var S=_.length-8;S<_.length;++S)_[S]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,S=0;S<4;++S)for(let C=0;C<32;C+=8)_[y++]=this.g[S]>>>C&255;return _};function i(_,y){var S=l;return Object.prototype.hasOwnProperty.call(S,_)?S[_]:S[_]=y(_)}function a(_,y){this.h=y;const S=[];let C=!0;for(let k=_.length-1;k>=0;k--){const R=_[k]|0;C&&R==y||(S[k]=R,C=!1)}this.g=S}var l={};function u(_){return-128<=_&&_<128?i(_,function(y){return new a([y|0],y<0?-1:0)}):new a([_|0],_<0?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return D(d(-_));const y=[];let S=1;for(let C=0;_>=S;C++)y[C]=_/S|0,S*=4294967296;return new a(y,0)}function m(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return D(m(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=d(Math.pow(y,8));let C=p;for(let R=0;R<_.length;R+=8){var k=Math.min(8,_.length-R);const w=parseInt(_.substring(R,R+k),y);k<8?(k=d(Math.pow(y,k)),C=C.j(k).add(d(w))):(C=C.j(S),C=C.add(d(w)))}return C}var p=u(0),g=u(1),T=u(16777216);t=a.prototype,t.m=function(){if(V(this))return-D(this).m();let _=0,y=1;for(let S=0;S<this.g.length;S++){const C=this.i(S);_+=(C>=0?C:4294967296+C)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(V(this))return"-"+D(this).toString(_);const y=d(Math.pow(_,6));var S=this;let C="";for(;;){const k=O(S,y).g;S=I(S,k.j(y));let R=((S.g.length>0?S.g[0]:S.h)>>>0).toString(_);if(S=k,P(S))return R+C;for(;R.length<6;)R="0"+R;C=R+C}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function V(_){return _.h==-1}t.l=function(_){return _=I(this,_),V(_)?-1:P(_)?0:1};function D(_){const y=_.g.length,S=[];for(let C=0;C<y;C++)S[C]=~_.g[C];return new a(S,~_.h).add(g)}t.abs=function(){return V(this)?D(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),S=[];let C=0;for(let k=0;k<=y;k++){let R=C+(this.i(k)&65535)+(_.i(k)&65535),w=(R>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);C=w>>>16,R&=65535,w&=65535,S[k]=w<<16|R}return new a(S,S[S.length-1]&-2147483648?-1:0)};function I(_,y){return _.add(D(y))}t.j=function(_){if(P(this)||P(_))return p;if(V(this))return V(_)?D(this).j(D(_)):D(D(this).j(_));if(V(_))return D(this.j(D(_)));if(this.l(T)<0&&_.l(T)<0)return d(this.m()*_.m());const y=this.g.length+_.g.length,S=[];for(var C=0;C<2*y;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(let k=0;k<_.g.length;k++){const R=this.i(C)>>>16,w=this.i(C)&65535,ie=_.i(k)>>>16,at=_.i(k)&65535;S[2*C+2*k]+=w*at,E(S,2*C+2*k),S[2*C+2*k+1]+=R*at,E(S,2*C+2*k+1),S[2*C+2*k+1]+=w*ie,E(S,2*C+2*k+1),S[2*C+2*k+2]+=R*ie,E(S,2*C+2*k+2)}for(_=0;_<y;_++)S[_]=S[2*_+1]<<16|S[2*_];for(_=y;_<2*y;_++)S[_]=0;return new a(S,0)};function E(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function A(_,y){this.g=_,this.h=y}function O(_,y){if(P(y))throw Error("division by zero");if(P(_))return new A(p,p);if(V(_))return y=O(D(_),y),new A(D(y.g),D(y.h));if(V(y))return y=O(_,D(y)),new A(D(y.g),y.h);if(_.g.length>30){if(V(_)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var S=g,C=y;C.l(_)<=0;)S=B(S),C=B(C);var k=$(S,1),R=$(C,1);for(C=$(C,2),S=$(S,2);!P(C);){var w=R.add(C);w.l(_)<=0&&(k=k.add(S),R=w),C=$(C,1),S=$(S,1)}return y=I(_,k.j(y)),new A(k,y)}for(k=p;_.l(y)>=0;){for(S=Math.max(1,Math.floor(_.m()/y.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),R=d(S),w=R.j(y);V(w)||w.l(_)>0;)S-=C,R=d(S),w=R.j(y);P(R)&&(R=g),k=k.add(R),_=I(_,w)}return new A(k,_)}t.B=function(_){return O(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),S=[];for(let C=0;C<y;C++)S[C]=this.i(C)&_.i(C);return new a(S,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),S=[];for(let C=0;C<y;C++)S[C]=this.i(C)|_.i(C);return new a(S,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),S=[];for(let C=0;C<y;C++)S[C]=this.i(C)^_.i(C);return new a(S,this.h^_.h)};function B(_){const y=_.g.length+1,S=[];for(let C=0;C<y;C++)S[C]=_.i(C)<<1|_.i(C-1)>>>31;return new a(S,_.h)}function $(_,y){const S=y>>5;y%=32;const C=_.g.length-S,k=[];for(let R=0;R<C;R++)k[R]=y>0?_.i(R+S)>>>y|_.i(R+S+1)<<32-y:_.i(R+S);return new a(k,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,nw=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ds=a}).apply(typeof ay<"u"?ay:typeof self<"u"?self:typeof window<"u"?window:{});var Ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rw,Ja,sw,iu,Gh,iw,aw,ow;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ul=="object"&&Ul];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var v=0;v<o.length-1;v++){var b=o[v];if(!(b in f))break e;f=f[b]}o=o[o.length-1],v=f[o],h=h(v),h!=v&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(h){var f=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&f.push([v,h[v]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function u(o,h,f){return o.call.apply(o.bind,arguments)}function d(o,h,f){return d=u,d.apply(null,arguments)}function m(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),o.apply(this,v)}}function p(o,h){function f(){}f.prototype=h.prototype,o.Z=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(v,b,L){for(var q=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)q[ae-2]=arguments[ae];return h.prototype[b].apply(v,q)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const h=o.length;if(h>0){const f=Array(h);for(let v=0;v<h;v++)f[v]=o[v];return f}return[]}function P(o,h){for(let v=1;v<arguments.length;v++){const b=arguments[v];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=o.length||0;const L=b.length||0;o.length=f+L;for(let q=0;q<L;q++)o[f+q]=b[q]}else o.push(b)}}class V{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(o){a.setTimeout(()=>{throw o},0)}function I(){var o=_;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class E{constructor(){this.h=this.g=null}add(h,f){const v=A.get();v.set(h,f),this.h?this.h.next=v:this.g=v,this.h=v}}var A=new V(()=>new O,o=>o.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let B,$=!1,_=new E,y=()=>{const o=Promise.resolve(void 0);B=()=>{o.then(S)}};function S(){for(var o;o=I();){try{o.h.call(o.g)}catch(f){D(f)}var h=A;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}$=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return o}();function w(o){return/^[\s\xa0]*$/.test(o)}function ie(o,h){k.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}p(ie,k),ie.prototype.init=function(o,h){const f=this.type=o.type,v=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ie.Z.h.call(this)},ie.prototype.h=function(){ie.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var at="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function bt(o,h,f,v,b){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!v,this.ha=b,this.key=++Ne,this.da=this.fa=!1}function H(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function X(o,h,f){for(const v in o)h.call(f,o[v],v,o)}function ee(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function pe(o){const h={};for(const f in o)h[f]=o[f];return h}const ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ft(o,h){let f,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(f in v)o[f]=v[f];for(let L=0;L<ye.length;L++)f=ye[L],Object.prototype.hasOwnProperty.call(v,f)&&(o[f]=v[f])}}function Ce(o){this.src=o,this.g={},this.h=0}Ce.prototype.add=function(o,h,f,v,b){const L=o.toString();o=this.g[L],o||(o=this.g[L]=[],this.h++);const q=Je(o,h,v,b);return q>-1?(h=o[q],f||(h.fa=!1)):(h=new bt(h,this.src,L,!!v,b),h.fa=f,o.push(h)),h};function Ut(o,h){const f=h.type;if(f in o.g){var v=o.g[f],b=Array.prototype.indexOf.call(v,h,void 0),L;(L=b>=0)&&Array.prototype.splice.call(v,b,1),L&&(H(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Je(o,h,f,v){for(let b=0;b<o.length;++b){const L=o[b];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==v)return b}return-1}var Dt="closure_lm_"+(Math.random()*1e6|0),zt={};function nr(o,h,f,v,b){if(Array.isArray(h)){for(let L=0;L<h.length;L++)nr(o,h[L],f,v,b);return null}return f=Dr(f),o&&o[at]?o.J(h,f,l(v)?!!v.capture:!1,b):bs(o,h,f,!1,v,b)}function bs(o,h,f,v,b,L){if(!h)throw Error("Invalid event type");const q=l(b)?!!b.capture:!!b;let ae=On(o);if(ae||(o[Dt]=ae=new Ce(o)),f=ae.add(h,f,v,q,L),f.proxy)return f;if(v=En(),f.proxy=v,v.src=o,v.listener=f,o.addEventListener)R||(b=q),b===void 0&&(b=!1),o.addEventListener(h.toString(),v,b);else if(o.attachEvent)o.attachEvent(Vn(h.toString()),v);else if(o.addListener&&o.removeListener)o.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function En(){function o(f){return h.call(o.src,o.listener,f)}const h=br;return o}function wt(o,h,f,v,b){if(Array.isArray(h))for(var L=0;L<h.length;L++)wt(o,h[L],f,v,b);else v=l(v)?!!v.capture:!!v,f=Dr(f),o&&o[at]?(o=o.i,L=String(h).toString(),L in o.g&&(h=o.g[L],f=Je(h,f,v,b),f>-1&&(H(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete o.g[L],o.h--)))):o&&(o=On(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Je(h,f,v,b)),(f=o>-1?h[o]:null)&&Tt(f))}function Tt(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[at])Ut(h.i,o);else{var f=o.type,v=o.proxy;h.removeEventListener?h.removeEventListener(f,v,o.capture):h.detachEvent?h.detachEvent(Vn(f),v):h.addListener&&h.removeListener&&h.removeListener(v),(f=On(h))?(Ut(f,o),f.h==0&&(f.src=null,h[Dt]=null)):H(o)}}}function Vn(o){return o in zt?zt[o]:zt[o]="on"+o}function br(o,h){if(o.da)o=!0;else{h=new ie(h,this);const f=o.listener,v=o.ha||o.src;o.fa&&Tt(o),o=f.call(v,h)}return o}function On(o){return o=o[Dt],o instanceof Ce?o:null}var rr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Dr(o){return typeof o=="function"?o:(o[rr]||(o[rr]=function(h){return o.handleEvent(h)}),o[rr])}function be(){C.call(this),this.i=new Ce(this),this.M=this,this.G=null}p(be,C),be.prototype[at]=!0,be.prototype.removeEventListener=function(o,h,f,v){wt(this,o,h,f,v)};function ve(o,h){var f,v=o.G;if(v)for(f=[];v;v=v.G)f.push(v);if(o=o.M,v=h.type||h,typeof h=="string")h=new k(h,o);else if(h instanceof k)h.target=h.target||o;else{var b=h;h=new k(v,o),ft(h,b)}b=!0;let L,q;if(f)for(q=f.length-1;q>=0;q--)L=h.g=f[q],b=Ln(L,v,!0,h)&&b;if(L=h.g=o,b=Ln(L,v,!0,h)&&b,b=Ln(L,v,!1,h)&&b,f)for(q=0;q<f.length;q++)L=h.g=f[q],b=Ln(L,v,!1,h)&&b}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const f=o.g[h];for(let v=0;v<f.length;v++)H(f[v]);delete o.g[h],o.h--}}this.G=null},be.prototype.J=function(o,h,f,v){return this.i.add(String(o),h,!1,f,v)},be.prototype.K=function(o,h,f,v){return this.i.add(String(o),h,!0,f,v)};function Ln(o,h,f,v){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let L=0;L<h.length;++L){const q=h[L];if(q&&!q.da&&q.capture==f){const ae=q.listener,Ze=q.ha||q.src;q.fa&&Ut(o.i,q),b=ae.call(Ze,v)!==!1&&b}}return b&&!v.defaultPrevented}function Ca(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function sr(o){o.g=Ca(()=>{o.g=null,o.i&&(o.i=!1,sr(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class Vr extends C{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:sr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(o){C.call(this),this.h=o,this.g={}}p(Xt,C);var _n=[];function wn(o){X(o.g,function(h,f){this.g.hasOwnProperty(f)&&Tt(h)},o),o.g={}}Xt.prototype.N=function(){Xt.Z.N.call(this),wn(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xe=a.JSON.stringify,Or=a.JSON.parse,jt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ir(){}function Jt(){}var N={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function z(){k.call(this,"d")}p(z,k);function Y(){k.call(this,"c")}p(Y,k);var se={},De=null;function qe(){return De=De||new be}se.Ia="serverreachability";function Ve(o){k.call(this,se.Ia,o)}p(Ve,k);function Te(o){const h=qe();ve(h,new Ve(h))}se.STAT_EVENT="statevent";function ar(o,h){k.call(this,se.STAT_EVENT,o),this.stat=h}p(ar,k);function Ie(o){const h=qe();ve(h,new ar(h,o))}se.Ja="timingevent";function Bt(o,h){k.call(this,se.Ja,o),this.size=h}p(Bt,k);function Tn(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function In(){this.g=!0}In.prototype.ua=function(){this.g=!1};function Lr(o,h,f,v,b,L){o.info(function(){if(o.g)if(L){var q="",ae=L.split("&");for(let _e=0;_e<ae.length;_e++){var Ze=ae[_e].split("=");if(Ze.length>1){const ot=Ze[0];Ze=Ze[1];const Fn=ot.split("_");q=Fn.length>=2&&Fn[1]=="type"?q+(ot+"="+Ze+"&"):q+(ot+"=redacted&")}}}else q=null;else q=L;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+h+`
`+f+`
`+q})}function Kc(o,h,f,v,b,L,q){o.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+h+`
`+f+`
`+L+" "+q})}function Zt(o,h,f,v){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+hl(o,f)+(v?" "+v:"")})}function Qc(o,h){o.info(function(){return"TIMEOUT: "+h})}In.prototype.info=function(){};function hl(o,h){if(!o.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(o=0;o<L.length;o++)if(Array.isArray(L[o])){var f=L[o];if(!(f.length<2)){var v=f[1];if(Array.isArray(v)&&!(v.length<1)){var b=v[0];if(b!="noop"&&b!="stop"&&b!="close")for(let q=1;q<v.length;q++)v[q]=""}}}}return xe(L)}catch{return h}}var Ds={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},M={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Q;function oe(){}p(oe,ir),oe.prototype.g=function(){return new XMLHttpRequest},Q=new oe;function Vt(o){return encodeURIComponent(String(o))}function Ee(o){var h=1;o=o.split(":");const f=[];for(;h>0&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function He(o,h,f,v){this.j=o,this.i=h,this.l=f,this.S=v||1,this.V=new Xt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}var xn={},Yc={};function Xc(o,h,f){o.M=1,o.A=ml(Mn(h)),o.u=f,o.R=!0,rp(o,null)}function rp(o,h){o.F=Date.now(),fl(o),o.B=Mn(o.A);var f=o.B,v=o.S;Array.isArray(v)||(v=[String(v)]),gp(f.i,"t",v),o.C=0,f=o.j.L,o.h=new Vs,o.g=Op(o.j,f?h:null,!o.u),o.P>0&&(o.O=new Vr(d(o.Y,o,o.g),o.P)),h=o.V,f=o.g,v=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(_n[0]=b.toString()),b=_n);for(let L=0;L<b.length;L++){const q=nr(f,b[L],v||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=o.J?pe(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),Te(),Lr(o.i,o.v,o.B,o.l,o.S,o.u)}He.prototype.ba=function(o){o=o.target;const h=this.O;h&&Fr(o)==3?h.j():this.Y(o)},He.prototype.Y=function(o){try{if(o==this.g)e:{const ae=Fr(this.g),Ze=this.g.ya(),_e=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Ip(this.g)))){this.K||ae!=4||Ze==7||(Ze==8||_e<=0?Te(3):Te(2)),Jc(this);var h=this.g.ca();this.X=h;var f=SI(this);if(this.o=h==200,Kc(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,b=this.g;if((v=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(v)){var L=v;break t}}L=null}if(o=L)Zt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zc(this,o);else{this.o=!1,this.m=3,Ie(12),Os(this),Aa(this);break e}}if(this.R){o=!0;let ot;for(;!this.K&&this.C<f.length;)if(ot=CI(this,f),ot==Yc){ae==4&&(this.m=4,Ie(14),o=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==xn){this.m=4,Ie(15),Zt(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Zt(this.i,this.l,ot,null),Zc(this,ot);if(sp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,Ie(16),o=!1),this.o=this.o&&o,!o)Zt(this.i,this.l,f,"[Invalid Chunked Response]"),Os(this),Aa(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),od(q),q.P=!0,Ie(11))}}else Zt(this.i,this.l,f,null),Zc(this,f);ae==4&&Os(this),this.o&&!this.K&&(ae==4?Np(this.j,this):(this.o=!1,fl(this)))}else UI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),Os(this),Aa(this)}}}catch{}finally{}};function SI(o){if(!sp(o))return o.g.la();const h=Ip(o.g);if(h==="")return"";let f="";const v=h.length,b=Fr(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Os(o),Aa(o),"";o.h.i=new a.TextDecoder}for(let L=0;L<v;L++)o.h.h=!0,f+=o.h.i.decode(h[L],{stream:!(b&&L==v-1)});return h.length=0,o.h.g+=f,o.C=0,o.h.g}function sp(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function CI(o,h){var f=o.C,v=h.indexOf(`
`,f);return v==-1?Yc:(f=Number(h.substring(f,v)),isNaN(f)?xn:(v+=1,v+f>h.length?Yc:(h=h.slice(v,v+f),o.C=v+f,h)))}He.prototype.cancel=function(){this.K=!0,Os(this)};function fl(o){o.T=Date.now()+o.H,ip(o,o.H)}function ip(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Tn(d(o.aa,o),h)}function Jc(o){o.D&&(a.clearTimeout(o.D),o.D=null)}He.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qc(this.i,this.B),this.M!=2&&(Te(),Ie(17)),Os(this),this.m=2,Aa(this)):ip(this,this.T-o)};function Aa(o){o.j.I==0||o.K||Np(o.j,o)}function Os(o){Jc(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,wn(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function Zc(o,h){try{var f=o.j;if(f.I!=0&&(f.g==o||ed(f.h,o))){if(!o.L&&ed(f.h,o)&&f.I==3){try{var v=f.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)El(f),yl(f);else break e;ad(f),Ie(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Tn(d(f.Va,f),6e3));lp(f.h)<=1&&f.ta&&(f.ta=void 0)}else xs(f,11)}else if((o.L||f.g==o)&&El(f),!w(h))for(b=f.Ba.g.parse(h),h=0;h<b.length;h++){let _e=b[h];const ot=_e[0];if(!(ot<=f.K))if(f.K=ot,_e=_e[1],f.I==2)if(_e[0]=="c"){f.M=_e[1],f.ba=_e[2];const Fn=_e[3];Fn!=null&&(f.ka=Fn,f.j.info("VER="+f.ka));const Ms=_e[4];Ms!=null&&(f.za=Ms,f.j.info("SVER="+f.za));const Ur=_e[5];Ur!=null&&typeof Ur=="number"&&Ur>0&&(v=1.5*Ur,f.O=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const zr=o.g;if(zr){const wl=zr.g?zr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wl){var L=v.h;L.g||wl.indexOf("spdy")==-1&&wl.indexOf("quic")==-1&&wl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(td(L,L.h),L.h=null))}if(v.G){const ld=zr.g?zr.g.getResponseHeader("X-HTTP-Session-Id"):null;ld&&(v.wa=ld,Ae(v.J,v.G,ld))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),v=f;var q=o;if(v.na=Vp(v,v.L?v.ba:null,v.W),q.L){up(v.h,q);var ae=q,Ze=v.O;Ze&&(ae.H=Ze),ae.D&&(Jc(ae),fl(ae)),v.g=q}else Rp(v);f.i.length>0&&vl(f)}else _e[0]!="stop"&&_e[0]!="close"||xs(f,7);else f.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?xs(f,7):id(f):_e[0]!="noop"&&f.l&&f.l.qa(_e),f.A=0)}}Te(4)}catch{}}var AI=class{constructor(o,h){this.g=o,this.map=h}};function ap(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function op(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lp(o){return o.h?1:o.g?o.g.size:0}function ed(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function td(o,h){o.g?o.g.add(h):o.h=h}function up(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}ap.prototype.cancel=function(){if(this.i=cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function cp(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.G);return h}return T(o.i)}var dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kI(o,h){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const v=o[f].indexOf("=");let b,L=null;v>=0?(b=o[f].substring(0,v),L=o[f].substring(v+1)):b=o[f],h(b,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function xr(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof xr?(this.l=o.l,ka(this,o.j),this.o=o.o,this.g=o.g,Ra(this,o.u),this.h=o.h,nd(this,yp(o.i)),this.m=o.m):o&&(h=String(o).match(dp))?(this.l=!1,ka(this,h[1]||"",!0),this.o=Pa(h[2]||""),this.g=Pa(h[3]||"",!0),Ra(this,h[4]),this.h=Pa(h[5]||"",!0),nd(this,h[6]||"",!0),this.m=Pa(h[7]||"")):(this.l=!1,this.i=new ba(null,this.l))}xr.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(Na(h,hp,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Na(h,hp,!0),"@"),o.push(Vt(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Na(f,f.charAt(0)=="/"?NI:PI,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Na(f,DI)),o.join("")},xr.prototype.resolve=function(o){const h=Mn(this);let f=!!o.j;f?ka(h,o.j):f=!!o.o,f?h.o=o.o:f=!!o.g,f?h.g=o.g:f=o.u!=null;var v=o.h;if(f)Ra(h,o.u);else if(f=!!o.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var b=h.h.lastIndexOf("/");b!=-1&&(v=h.h.slice(0,b+1)+v)}if(b=v,b==".."||b==".")v="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){v=b.lastIndexOf("/",0)==0,b=b.split("/");const L=[];for(let q=0;q<b.length;){const ae=b[q++];ae=="."?v&&q==b.length&&L.push(""):ae==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&q==b.length&&L.push("")):(L.push(ae),v=!0)}v=L.join("/")}else v=b}return f?h.h=v:f=o.i.toString()!=="",f?nd(h,yp(o.i)):f=!!o.m,f&&(h.m=o.m),h};function Mn(o){return new xr(o)}function ka(o,h,f){o.j=f?Pa(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Ra(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function nd(o,h,f){h instanceof ba?(o.i=h,VI(o.i,o.l)):(f||(h=Na(h,bI)),o.i=new ba(h,o.l))}function Ae(o,h,f){o.i.set(h,f)}function ml(o){return Ae(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Pa(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Na(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,RI),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function RI(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var hp=/[#\/\?@]/g,PI=/[#\?:]/g,NI=/[#\?]/g,bI=/[#\?@]/g,DI=/#/g;function ba(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Ls(o){o.g||(o.g=new Map,o.h=0,o.i&&kI(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ba.prototype,t.add=function(o,h){Ls(this),this.i=null,o=fi(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function fp(o,h){Ls(o),h=fi(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function mp(o,h){return Ls(o),h=fi(o,h),o.g.has(h)}t.forEach=function(o,h){Ls(this),this.g.forEach(function(f,v){f.forEach(function(b){o.call(h,b,v,this)},this)},this)};function pp(o,h){Ls(o);let f=[];if(typeof h=="string")mp(o,h)&&(f=f.concat(o.g.get(fi(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)f=f.concat(o[h]);return f}t.set=function(o,h){return Ls(this),this.i=null,o=fi(this,o),mp(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=pp(this,o),o.length>0?String(o[0]):h):h};function gp(o,h,f){fp(o,h),f.length>0&&(o.i=null,o.g.set(fi(o,h),T(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var f=h[v];const b=Vt(f);f=pp(this,f);for(let L=0;L<f.length;L++){let q=b;f[L]!==""&&(q+="="+Vt(f[L])),o.push(q)}}return this.i=o.join("&")};function yp(o){const h=new ba;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function fi(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function VI(o,h){h&&!o.j&&(Ls(o),o.i=null,o.g.forEach(function(f,v){const b=v.toLowerCase();v!=b&&(fp(this,v),gp(this,b,f))},o)),o.j=h}function OI(o,h){const f=new In;if(a.Image){const v=new Image;v.onload=m(Mr,f,"TestLoadImage: loaded",!0,h,v),v.onerror=m(Mr,f,"TestLoadImage: error",!1,h,v),v.onabort=m(Mr,f,"TestLoadImage: abort",!1,h,v),v.ontimeout=m(Mr,f,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=o}else h(!1)}function LI(o,h){const f=new In,v=new AbortController,b=setTimeout(()=>{v.abort(),Mr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:v.signal}).then(L=>{clearTimeout(b),L.ok?Mr(f,"TestPingServer: ok",!0,h):Mr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Mr(f,"TestPingServer: error",!1,h)})}function Mr(o,h,f,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(f)}catch{}}function xI(){this.g=new jt}function rd(o){this.i=o.Sb||null,this.h=o.ab||!1}p(rd,ir),rd.prototype.g=function(){return new pl(this.i,this.h)};function pl(o,h){be.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(pl,be),t=pl.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,Va(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vp(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function vp(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Da(this):Va(this),this.readyState==3&&vp(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,Da(this))},t.Na=function(o){this.g&&(this.response=o,Da(this))},t.ga=function(){this.g&&Da(this)};function Da(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Va(o)}t.setRequestHeader=function(o,h){this.A.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function Va(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ep(o){let h="";return X(o,function(f,v){h+=v,h+=":",h+=f,h+=`\r
`}),h}function sd(o,h,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Ep(f),typeof o=="string"?f!=null&&Vt(f):Ae(o,h,f))}function je(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(je,be);var MI=/^https?$/i,FI=["POST","PUT"];t=je.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,h,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Q.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(L){_p(this,L);return}if(o=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)f.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(FI,h,void 0)>=0)||v||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,q]of f)this.g.setRequestHeader(L,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(L){_p(this,L)}};function _p(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,wp(o),gl(o)}function wp(o){o.A||(o.A=!0,ve(o,"complete"),ve(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ve(this,"complete"),ve(this,"abort"),gl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gl(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Tp(this):this.Xa())},t.Xa=function(){Tp(this)};function Tp(o){if(o.h&&typeof i<"u"){if(o.v&&Fr(o)==4)setTimeout(o.Ca.bind(o),0);else if(ve(o,"readystatechange"),Fr(o)==4){o.h=!1;try{const L=o.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var v;if(v=L===0){let q=String(o.D).match(dp)[1]||null;!q&&a.self&&a.self.location&&(q=a.self.location.protocol.slice(0,-1)),v=!MI.test(q?q.toLowerCase():"")}f=v}if(f)ve(o,"complete"),ve(o,"success");else{o.o=6;try{var b=Fr(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",wp(o)}}finally{gl(o)}}}}function gl(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,h||ve(o,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Fr(o){return o.g?o.g.readyState:0}t.ca=function(){try{return Fr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Or(h)}};function Ip(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function UI(o){const h={};o=(o.g&&Fr(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<o.length;v++){if(w(o[v]))continue;var f=Ee(o[v]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[b]||[];h[b]=L,L.push(f)}ee(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oa(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function Sp(o){this.za=0,this.i=[],this.j=new In,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oa("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oa("baseRetryDelayMs",5e3,o),this.Za=Oa("retryDelaySeedMs",1e4,o),this.Ta=Oa("forwardChannelMaxRetries",2,o),this.va=Oa("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ap(o&&o.concurrentRequestLimit),this.Ba=new xI,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Sp.prototype,t.ka=8,t.I=1,t.connect=function(o,h,f,v){Ie(0),this.W=o,this.H=h||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.J=Vp(this,null,this.W),vl(this)};function id(o){if(Cp(o),o.I==3){var h=o.V++,f=Mn(o.J);if(Ae(f,"SID",o.M),Ae(f,"RID",h),Ae(f,"TYPE","terminate"),La(o,f),h=new He(o,o.j,h),h.M=2,h.A=ml(Mn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.A,f=!0),f||(h.g=Op(h.j,null),h.g.ea(h.A)),h.F=Date.now(),fl(h)}Dp(o)}function yl(o){o.g&&(od(o),o.g.cancel(),o.g=null)}function Cp(o){yl(o),o.v&&(a.clearTimeout(o.v),o.v=null),El(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function vl(o){if(!op(o.h)&&!o.m){o.m=!0;var h=o.Ea;B||y(),$||(B(),$=!0),_.add(h,o),o.D=0}}function zI(o,h){return lp(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Tn(d(o.Ea,o,h),bp(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new He(this,this.j,o);let L=this.o;if(this.U&&(L?(L=pe(L),ft(L,this.U)):L=this.U),this.u!==null||this.R||(b.J=L,L=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=kp(this,b,h),f=Mn(this.J),Ae(f,"RID",o),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),La(this,f),L&&(this.R?h="headers="+Vt(Ep(L))+"&"+h:this.u&&sd(f,this.u,L)),td(this.h,b),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",h),Ae(f,"SID","null"),b.U=!0,Xc(b,f,null)):Xc(b,f,h),this.I=2}}else this.I==3&&(o?Ap(this,o):this.i.length==0||op(this.h)||Ap(this))};function Ap(o,h){var f;h?f=h.l:f=o.V++;const v=Mn(o.J);Ae(v,"SID",o.M),Ae(v,"RID",f),Ae(v,"AID",o.K),La(o,v),o.u&&o.o&&sd(v,o.u,o.o),f=new He(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),h&&(o.i=h.G.concat(o.i)),h=kp(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),td(o.h,f),Xc(f,v,h)}function La(o,h){o.H&&X(o.H,function(f,v){Ae(h,v,f)}),o.l&&X({},function(f,v){Ae(h,v,f)})}function kp(o,h,f){f=Math.min(o.i.length,f);const v=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let ae=-1;for(;;){const Ze=["count="+f];ae==-1?f>0?(ae=b[0].g,Ze.push("ofs="+ae)):ae=0:Ze.push("ofs="+ae);let _e=!0;for(let ot=0;ot<f;ot++){var L=b[ot].g;const Fn=b[ot].map;if(L-=ae,L<0)ae=Math.max(0,b[ot].g-100),_e=!1;else try{L="req"+L+"_"||"";try{var q=Fn instanceof Map?Fn:Object.entries(Fn);for(const[Ms,Ur]of q){let zr=Ur;l(Ur)&&(zr=xe(Ur)),Ze.push(L+Ms+"="+encodeURIComponent(zr))}}catch(Ms){throw Ze.push(L+"type="+encodeURIComponent("_badmap")),Ms}}catch{v&&v(Fn)}}if(_e){q=Ze.join("&");break e}}q=void 0}return o=o.i.splice(0,f),h.G=o,q}function Rp(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;B||y(),$||(B(),$=!0),_.add(h,o),o.A=0}}function ad(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Tn(d(o.Da,o),bp(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,Pp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Tn(d(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),yl(this),Pp(this))};function od(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Pp(o){o.g=new He(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=Mn(o.na);Ae(h,"RID","rpc"),Ae(h,"SID",o.M),Ae(h,"AID",o.K),Ae(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ae(h,"TO",o.ia),Ae(h,"TYPE","xmlhttp"),La(o,h),o.u&&o.o&&sd(h,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=ml(Mn(h)),f.u=null,f.R=!0,rp(f,o)}t.Va=function(){this.C!=null&&(this.C=null,yl(this),ad(this),Ie(19))};function El(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Np(o,h){var f=null;if(o.g==h){El(o),od(o),o.g=null;var v=2}else if(ed(o.h,h))f=h.G,up(o.h,h),v=1;else return;if(o.I!=0){if(h.o)if(v==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var b=o.D;v=qe(),ve(v,new Bt(v,f)),vl(o)}else Rp(o);else if(b=h.m,b==3||b==0&&h.X>0||!(v==1&&zI(o,h)||v==2&&ad(o)))switch(f&&f.length>0&&(h=o.h,h.i=h.i.concat(f)),b){case 1:xs(o,5);break;case 4:xs(o,10);break;case 3:xs(o,6);break;default:xs(o,2)}}}function bp(o,h){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*h}function xs(o,h){if(o.j.info("Error code "+h),h==2){var f=d(o.bb,o),v=o.Ua;const b=!v;v=new xr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ka(v,"https"),ml(v),b?OI(v.toString(),f):LI(v.toString(),f)}else Ie(2);o.I=0,o.l&&o.l.pa(h),Dp(o),Cp(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function Dp(o){if(o.I=0,o.ja=[],o.l){const h=cp(o.h);(h.length!=0||o.i.length!=0)&&(P(o.ja,h),P(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function Vp(o,h,f){var v=f instanceof xr?Mn(f):new xr(f);if(v.g!="")h&&(v.g=h+"."+v.g),Ra(v,v.u);else{var b=a.location;v=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const L=new xr(null);v&&ka(L,v),h&&(L.g=h),b&&Ra(L,b),f&&(L.h=f),v=L}return f=o.G,h=o.wa,f&&h&&Ae(v,f,h),Ae(v,"VER",o.ka),La(o,v),v}function Op(o,h,f){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new je(new rd({ab:f})):new je(o.ma),h.Fa(o.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lp(){}t=Lp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function _l(){}_l.prototype.g=function(o,h){return new en(o,h)};function en(o,h){be.call(this),this.g=new Sp(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!w(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new mi(this)}p(en,be),en.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){id(this.g)},en.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=xe(o),o=f);h.i.push(new AI(h.Ya++,o)),h.I==3&&vl(h)},en.prototype.N=function(){this.g.l=null,delete this.j,id(this.g),delete this.g,en.Z.N.call(this)};function xp(o){z.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}p(xp,z);function Mp(){Y.call(this),this.status=1}p(Mp,Y);function mi(o){this.g=o}p(mi,Lp),mi.prototype.ra=function(){ve(this.g,"a")},mi.prototype.qa=function(o){ve(this.g,new xp(o))},mi.prototype.pa=function(o){ve(this.g,new Mp)},mi.prototype.oa=function(){ve(this.g,"b")},_l.prototype.createWebChannel=_l.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,ow=function(){return new _l},aw=function(){return qe()},iw=se,Gh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,iu=Ds,M.COMPLETE="complete",sw=M,Jt.EventType=N,N.OPEN="a",N.CLOSE="b",N.ERROR="c",N.MESSAGE="d",be.prototype.listen=be.prototype.J,Ja=Jt,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,rw=je}).apply(typeof Ul<"u"?Ul:typeof self<"u"?self:typeof window<"u"?window:{});const oy="@firebase/firestore",ly="4.9.2";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let Ea="12.3.0";/**
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
 */const si=new fm("@firebase/firestore");function yi(){return si.logLevel}function W(t,...e){if(si.logLevel<=ue.DEBUG){const n=e.map(gm);si.debug(`Firestore (${Ea}): ${t}`,...n)}}function Tr(t,...e){if(si.logLevel<=ue.ERROR){const n=e.map(gm);si.error(`Firestore (${Ea}): ${t}`,...n)}}function ra(t,...e){if(si.logLevel<=ue.WARN){const n=e.map(gm);si.warn(`Firestore (${Ea}): ${t}`,...n)}}function gm(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lw(t,r,n)}function lw(t,e,n){let r=`FIRESTORE (${Ea}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Tr(r),new Error(r)}function fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||lw(e,s,r)}function re(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends kr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class uw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class QC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YC{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new uw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new At(e)}}class XC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class JC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new XC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new uy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new uy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ym{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=eA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Kh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return zd(s)===zd(i)?ce(s,i):zd(s)?1:-1}return ce(t.length,e.length)}const tA=55296,nA=57343;function zd(t){const e=t.charCodeAt(0);return e>=tA&&e<=nA}function sa(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const cy="__name__";class jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=jn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ce(e.length,n.length)}static compareSegments(e,n){const r=jn.isNumericId(e),s=jn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?jn.extractNumericId(e).compare(jn.extractNumericId(n)):Kh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ds.fromString(e.substring(4,e.length-2))}}class we extends jn{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const rA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends jn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return rA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cy}static keyField(){return new gt([cy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(we.fromString(e))}static fromName(e){return new J(we.fromString(e).popFirst(5))}static empty(){return new J(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new we(e.slice()))}}/**
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
 */function cw(t,e,n){if(!n)throw new K(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sA(t,e,n,r){if(e===!0&&r===!0)throw new K(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dy(t){if(!J.isDocumentKey(t))throw new K(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hy(t){if(J.isDocumentKey(t))throw new K(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function gr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vm(t);throw new K(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function nl(t,e){if(!dw(t))throw new K(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const fy=-62135596800,my=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*my);return new Re(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fy)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/my}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nl(e,Re._jsonSchema))return new Re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:Xe("string",Re._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Re(0,0))}static max(){return new te(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function iA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Es(s,J.empty(),e)}function aA(t){return new Es(t.readTime,t.key,Uo)}class Es{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Es(te.min(),J.empty(),Uo)}static max(){return new Es(te.max(),J.empty(),Uo)}}function oA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const lA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _a(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==lA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(m=>{a[d]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function cA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ac.ce=-1;/**
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
 */const Em=-1;function rl(t){return t==null}function $u(t){return t===0&&1/t==-1/0}function dA(t){return typeof t=="number"&&Number.isInteger(t)&&!$u(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const hw="";function hA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=py(e)),e=fA(t.get(n),e);return py(e)}function fA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case hw:n+="";break;default:n+=i}}return n}function py(t){return t+hw+""}/**
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
 */function gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zl(this.root,e,this.comparator,!0)}}class zl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class an{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new an([])}unionWith(e){let n=new st(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return sa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mw("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const mA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=mA.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */const pw="server_timestamp",gw="__type__",yw="__previous_value__",vw="__local_write_time__";function _m(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gw])==null?void 0:r.stringValue)===pw}function kc(t){const e=t.mapValue.fields[yw];return _m(e)?kc(e):e}function zo(t){const e=_s(t.mapValue.fields[vw].timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class pA{constructor(e,n,r,s,i,a,l,u,d,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const qu="(default)";class jo{constructor(e,n){this.projectId=e,this.database=n||qu}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database===qu}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ew="__type__",gA="__max__",jl={mapValue:{}},_w="__vector__",Hu="value";function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_m(t)?4:vA(t)?9007199254740991:yA(t)?10:11:Z(28295,{value:t})}function er(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=_s(s.timestampValue),l=_s(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ws(s.bytesValue).isEqual(ws(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=We(s.doubleValue),l=We(i.doubleValue);return a===l?$u(a)===$u(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return sa(t.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(gy(a)!==gy(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!er(a[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Bo(t,e){return(t.values||[]).find(n=>er(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=We(i.integerValue||i.doubleValue),u=We(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vy(t.timestampValue,e.timestampValue);case 4:return vy(zo(t),zo(e));case 5:return Kh(t.stringValue,e.stringValue);case 6:return function(i,a){const l=ws(i),u=ws(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=ce(l[d],u[d]);if(m!==0)return m}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ce(We(i.latitude),We(a.latitude));return l!==0?l:ce(We(i.longitude),We(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ey(t.arrayValue,e.arrayValue);case 10:return function(i,a){var g,T,P,V;const l=i.fields||{},u=a.fields||{},d=(g=l[Hu])==null?void 0:g.arrayValue,m=(T=u[Hu])==null?void 0:T.arrayValue,p=ce(((P=d==null?void 0:d.values)==null?void 0:P.length)||0,((V=m==null?void 0:m.values)==null?void 0:V.length)||0);return p!==0?p:Ey(d,m)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===jl.mapValue&&a===jl.mapValue)return 0;if(i===jl.mapValue)return 1;if(a===jl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let p=0;p<u.length&&p<m.length;++p){const g=Kh(u[p],m[p]);if(g!==0)return g;const T=ia(l[u[p]],d[m[p]]);if(T!==0)return T}return ce(u.length,m.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=_s(t),r=_s(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Ey(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ia(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function aa(t){return Qh(t)}function Qh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_s(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Qh(n.fields[a])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function au(t){switch(Ts(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kc(t);return e?16+au(e):16;case 5:return 2*t.stringValue.length;case 6:return ws(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+au(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ps(r.fields,(i,a)=>{s+=i.length+au(a)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function Yh(t){return!!t&&"integerValue"in t}function wm(t){return!!t&&"arrayValue"in t}function _y(t){return!!t&&"nullValue"in t}function wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ou(t){return!!t&&"mapValue"in t}function yA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Ew])==null?void 0:r.stringValue)===_w}function po(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=po(t.arrayValue.values[n]);return e}return{...t}}function vA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gA}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ou(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=po(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ou(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ou(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(po(this.value))}}function ww(t){const e=[];return Ps(t.fields,(n,r)=>{const s=new gt([n]);if(ou(r)){const i=ww(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new an(e)}/**
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
 */class dt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,te.min(),te.min(),te.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,te.min(),te.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,te.min(),te.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wu{constructor(e,n){this.position=e,this.inclusive=n}}function Ty(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),n.key):r=ia(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!er(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gu{constructor(e,n="asc"){this.field=e,this.dir=n}}function EA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Tw{}class nt extends Tw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wA(e,n,r):n==="array-contains"?new SA(e,r):n==="in"?new CA(e,r):n==="not-in"?new AA(e,r):n==="array-contains-any"?new kA(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TA(e,r):new IA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ia(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends Tw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new tr(e,n)}matches(e){return Iw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Iw(t){return t.op==="and"}function Sw(t){return _A(t)&&Iw(t)}function _A(t){for(const e of t.filters)if(e instanceof tr)return!1;return!0}function Xh(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+aa(t.value);if(Sw(t))return t.filters.map(e=>Xh(e)).join(",");{const e=t.filters.map(n=>Xh(n)).join(",");return`${t.op}(${e})`}}function Cw(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&er(r.value,s.value)}(t,e):t instanceof tr?function(r,s){return s instanceof tr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Cw(a,s.filters[l]),!0):!1}(t,e):void Z(19439)}function Aw(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${aa(n.value)}`}(t):t instanceof tr?function(n){return n.op.toString()+" {"+n.getFilters().map(Aw).join(" ,")+"}"}(t):"Filter"}class wA extends nt{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class TA extends nt{constructor(e,n){super(e,"in",n),this.keys=kw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IA extends nt{constructor(e,n){super(e,"not-in",n),this.keys=kw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class SA extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wm(n)&&Bo(n.arrayValue,this.value)}}class CA extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class AA extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bo(this.value.arrayValue,n)}}class kA extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
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
 */class RA{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Sy(t,e=null,n=[],r=[],s=null,i=null,a=null){return new RA(t,e,n,r,s,i,a)}function Tm(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),rl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>aa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>aa(r)).join(",")),e.Te=n}return e.Te}function Im(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Iy(t.startAt,e.startAt)&&Iy(t.endAt,e.endAt)}function Jh(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Rc{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PA(t,e,n,r,s,i,a,l){return new Rc(t,e,n,r,s,i,a,l)}function Pc(t){return new Rc(t)}function Cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NA(t){return t.collectionGroup!==null}function go(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new st(gt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Gu(i,r))}),n.has(gt.keyField().canonicalString())||e.Ie.push(new Gu(gt.keyField(),r))}return e.Ie}function Gn(t){const e=re(t);return e.Ee||(e.Ee=bA(e,go(t))),e.Ee}function bA(t,e){if(t.limitType==="F")return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gu(s.field,i)});const n=t.endAt?new Wu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wu(t.startAt.position,t.startAt.inclusive):null;return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zh(t,e,n){return new Rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nc(t,e){return Im(Gn(t),Gn(e))&&t.limitType===e.limitType}function Rw(t){return`${Tm(Gn(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Aw(s)).join(", ")}]`),rl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>aa(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>aa(s)).join(",")),`Target(${r})`}(Gn(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Ty(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,go(r),s)||r.endAt&&!function(a,l,u){const d=Ty(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,go(r),s))}(t,e)}function DA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pw(t){return(e,n)=>{let r=!1;for(const s of go(t)){const i=VA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VA(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?ia(u,d):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
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
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
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
 */const OA=new ze(J.comparator);function Ir(){return OA}const Nw=new ze(J.comparator);function Za(...t){let e=Nw;for(const n of t)e=e.insert(n.key,n);return e}function bw(t){let e=Nw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qs(){return yo()}function Dw(){return yo()}function yo(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const LA=new ze(J.comparator),xA=new st(J.comparator);function de(...t){let e=xA;for(const n of t)e=e.add(n);return e}const MA=new st(ce);function FA(){return MA}/**
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
 */function Sm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$u(e)?"-0":e}}function Vw(t){return{integerValue:""+t}}function UA(t,e){return dA(e)?Vw(e):Sm(t,e)}/**
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
 */class Dc{constructor(){this._=void 0}}function zA(t,e,n){return t instanceof $o?function(s,i){const a={fields:{[gw]:{stringValue:pw},[vw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_m(i)&&(i=kc(i)),i&&(a.fields[yw]=i),{mapValue:a}}(n,e):t instanceof qo?Lw(t,e):t instanceof Ho?xw(t,e):function(s,i){const a=Ow(s,i),l=Ay(a)+Ay(s.Ae);return Yh(a)&&Yh(s.Ae)?Vw(l):Sm(s.serializer,l)}(t,e)}function jA(t,e,n){return t instanceof qo?Lw(t,e):t instanceof Ho?xw(t,e):n}function Ow(t,e){return t instanceof Ku?function(r){return Yh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $o extends Dc{}class qo extends Dc{constructor(e){super(),this.elements=e}}function Lw(t,e){const n=Mw(e);for(const r of t.elements)n.some(s=>er(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ho extends Dc{constructor(e){super(),this.elements=e}}function xw(t,e){let n=Mw(e);for(const r of t.elements)n=n.filter(s=>!er(s,r));return{arrayValue:{values:n}}}class Ku extends Dc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ay(t){return We(t.integerValue||t.doubleValue)}function Mw(t){return wm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class BA{constructor(e,n){this.field=e,this.transform=n}}function $A(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof qo&&s instanceof qo||r instanceof Ho&&s instanceof Ho?sa(r.elements,s.elements,er):r instanceof Ku&&s instanceof Ku?er(r.Ae,s.Ae):r instanceof $o&&s instanceof $o}(t.transform,e.transform)}class qA{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vc{}function Fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cm(t.key,Ht.none()):new sl(t.key,t.data,Ht.none());{const n=t.data,r=Lt.empty();let s=new st(gt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ns(t.key,r,new an(s.toArray()),Ht.none())}}function HA(t,e,n){t instanceof sl?function(s,i,a){const l=s.value.clone(),u=Ry(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ns?function(s,i,a){if(!lu(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ry(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Uw(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof sl?function(i,a,l,u){if(!lu(i.precondition,a))return l;const d=i.value.clone(),m=Py(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ns?function(i,a,l,u){if(!lu(i.precondition,a))return l;const d=Py(i.fieldTransforms,u,a),m=a.data;return m.setAll(Uw(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return lu(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function WA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ow(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sa(r,s,(i,a)=>$A(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sl extends Vc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ns extends Vc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ry(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,jA(a,l,n[s]))}return r}function Py(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,zA(i,a,e))}return r}class Cm extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zw extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Dw();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=Fw(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&sa(this.mutations,e.mutations,(n,r)=>ky(n,r))&&sa(this.baseMutations,e.baseMutations,(n,r)=>ky(n,r))}}class Am{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return LA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Am(e,n,r,s)}}/**
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
 */class KA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,he;function jw(t){switch(t){case U.OK:return Z(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function Bw(t){if(t===void 0)return Tr("GRPC error has no .code"),U.UNKNOWN;switch(t){case Qe.OK:return U.OK;case Qe.CANCELLED:return U.CANCELLED;case Qe.UNKNOWN:return U.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return U.INTERNAL;case Qe.UNAVAILABLE:return U.UNAVAILABLE;case Qe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Qe.NOT_FOUND:return U.NOT_FOUND;case Qe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Qe.ABORTED:return U.ABORTED;case Qe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Qe.DATA_LOSS:return U.DATA_LOSS;default:return Z(39323,{code:t})}}(he=Qe||(Qe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YA(){return new TextEncoder}/**
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
 */const XA=new ds([4294967295,4294967295],0);function Ny(t){const e=YA().encode(t),n=new nw;return n.update(e),new Uint8Array(n.digest())}function by(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ds([n,r],0),new ds([s,i],0)]}class km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ds.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ds.fromNumber(r)));return s.compare(XA)===1&&(s=new ds([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ny(e),[r,s]=by(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new km(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const n=Ny(e),[r,s]=by(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oc(te.min(),s,new ze(ce),Ir(),de())}}class il{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new il(r,n,de(),de(),de())}}/**
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
 */class uu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class $w{constructor(e,n){this.targetId=e,this.Ce=n}}class qw{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Dy{constructor(){this.ve=0,this.Fe=Vy(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new il(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Vy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class JA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ir(),this.Je=Bl(),this.He=Bl(),this.Ye=new ze(ce)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Jh(i))if(r===0){const a=new J(i.path);this.et(n,a,dt.newNoDocument(a,te.min()))}else fe(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=ws(r).toUint8Array()}catch(u){if(u instanceof mw)return ra("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new km(a,s,i)}catch(u){return ra(u instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Jh(l.target)){const u=new J(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,dt.newNoDocument(u,e))}i.Be&&(n.set(a,i.ke()),i.qe())}});let r=de();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Oc(e,n,this.Ye,this.je,r);return this.je=Ir(),this.Je=Bl(),this.He=Bl(),this.Ye=new ze(ce),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Dy,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new st(ce),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new st(ce),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Bl(){return new ze(J.comparator)}function Vy(){return new ze(J.comparator)}const ZA={asc:"ASCENDING",desc:"DESCENDING"},ek={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tk={and:"AND",or:"OR"};class nk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ef(t,e){return t.useProto3Json||rl(e)?e:{value:e}}function Qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rk(t,e){return Qu(t,e.toTimestamp())}function ln(t){return fe(!!t,49232),te.fromTimestamp(function(n){const r=_s(n);return new Re(r.seconds,r.nanos)}(t))}function Rm(t,e){return tf(t,e).canonicalString()}function tf(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ww(t){const e=we.fromString(t);return fe(Jw(e),10190,{key:e.toString()}),e}function Yu(t,e){return Rm(t.databaseId,e.path)}function Eo(t,e){const n=Ww(e);if(n.get(1)!==t.databaseId.projectId)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Kw(n))}function Gw(t,e){return Rm(t.databaseId,e)}function sk(t){const e=Ww(t);return e.length===4?we.emptyPath():Kw(e)}function nf(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kw(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Oy(t,e,n){return{name:Yu(t,e),fields:n.value.mapValue.fields}}function ik(t,e){return"found"in e?function(r,s){fe(!!s.found,43571),s.found.name,s.found.updateTime;const i=Eo(r,s.found.name),a=ln(s.found.updateTime),l=s.found.createTime?ln(s.found.createTime):te.min(),u=new Lt({mapValue:{fields:s.found.fields}});return dt.newFoundDocument(i,a,l,u)}(t,e):"missing"in e?function(r,s){fe(!!s.missing,3894),fe(!!s.readTime,22933);const i=Eo(r,s.missing),a=ln(s.readTime);return dt.newNoDocument(i,a)}(t,e):Z(7234,{result:e})}function ak(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Z(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(fe(m===void 0||typeof m=="string",58123),_t.fromBase64String(m||"")):(fe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),_t.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?U.UNKNOWN:Bw(d.code);return new K(m,d.message||"")}(a);n=new qw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Eo(t,r.document.name),i=ln(r.document.updateTime),a=r.document.createTime?ln(r.document.createTime):te.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(s,i,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];n=new uu(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Eo(t,r.document),i=r.readTime?ln(r.readTime):te.min(),a=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new uu([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Eo(t,r.document),i=r.removedTargetIds||[];n=new uu([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new QA(s,i),l=r.targetId;n=new $w(l,a)}}return n}function Qw(t,e){let n;if(e instanceof sl)n={update:Oy(t,e.key,e.value)};else if(e instanceof Cm)n={delete:Yu(t,e.key)};else if(e instanceof Ns)n={update:Oy(t,e.key,e.data),updateMask:pk(e.fieldMask)};else{if(!(e instanceof zw))return Z(16599,{Vt:e.type});n={verify:Yu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof $o)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ho)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ku)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function ok(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?ln(s.updateTime):ln(i);return a.isEqual(te.min())&&(a=ln(i)),new qA(a,s.transformResults||[])}(n,e))):[]}function lk(t,e){return{documents:[Gw(t,e.path)]}}function uk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gw(t,s);const i=function(d){if(d.length!==0)return Xw(tr.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(g){return{field:Ei(g.field),direction:hk(g.dir)}}(m))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=ef(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function ck(t){let e=sk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1,65062);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(p){const g=Yw(p);return g instanceof tr&&Sw(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(P){return new Gu(_i(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,rl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,T=p.values||[];return new Wu(T,g)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const g=!p.before,T=p.values||[];return new Wu(T,g)}(n.endAt)),PA(e,s,a,i,l,"F",u,d)}function dk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_i(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_i(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_i(n.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return nt.create(_i(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tr.create(n.compositeFilter.filters.map(r=>Yw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function hk(t){return ZA[t]}function fk(t){return ek[t]}function mk(t){return tk[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function _i(t){return gt.fromServerFormat(t.fieldPath)}function Xw(t){return t instanceof nt?function(n){if(n.op==="=="){if(wy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NAN"}};if(_y(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NAN"}};if(_y(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(n.field),op:fk(n.op),value:n.value}}}(t):t instanceof tr?function(n){const r=n.getFilters().map(s=>Xw(s));return r.length===1?r[0]:{compositeFilter:{op:mk(n.op),filters:r}}}(t):Z(54877,{filter:t})}function pk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,r,s,i=te.min(),a=te.min(),l=_t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gk{constructor(e){this.yt=e}}function yk(t){const e=ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zh(e,e.limit,"L"):e}/**
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
 */class vk{constructor(){this.Cn=new Ek}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Es.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Es.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Ek{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(we.comparator)).toArray()}}/**
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
 */const Ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zw=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(Zw,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class oa{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new oa(0)}static cr(){return new oa(-1)}}/**
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
 */const xy="LruGarbageCollector",_k=1048576;function My([t,e],[n,r]){const s=ce(t,n);return s===0?ce(e,r):s}class wk{constructor(e){this.Ir=e,this.buffer=new st(My),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();My(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Tk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(xy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wa(n)?W(xy,"Ignoring IndexedDB error during garbage collection: ",n):await _a(n)}await this.Vr(3e5)})}}class Ik{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Ac.ce);const r=new wk(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ly):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),yi()<=ue.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Sk(t,e){return new Ik(t,e)}/**
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
 */class Ck{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ak{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vo(r.mutation,s,an.empty(),Re.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Za();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=qs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Ir();const a=yo(),l=function(){return yo()}();return n.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ns)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),vo(m.mutation,d,m.mutation.getFieldMask(),Re.now())):a.set(d.key,an.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),n.forEach((d,m)=>l.set(d,new Ak(m,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new ze((a,l)=>a-l),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let m=r.get(u)||an.empty();m=l.applyToLocalView(d,m),r.set(u,m);const p=(s.get(l.batchId)||de()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,p=Dw();m.forEach(g=>{if(!i.has(g)){const T=Fw(n.get(g),r.get(g));T!==null&&p.set(g,T),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(qs());let l=Uo,u=i;return a.next(d=>F.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?F.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{u=u.insert(m,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,de())).next(m=>({batchId:l,changes:bw(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=Za();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Za();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const d=function(p,g){return new Rc(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,dt.newInvalidDocument(m)))});let l=Za();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&vo(m.mutation,d,an.empty(),Re.now()),bc(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Rk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:yk(s.bundledQuery),readTime:ln(s.readTime)}}(n)),F.resolve()}}/**
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
 */class Pk{constructor(){this.overlays=new ze(J.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=qs(),i=n.length+1,a=new J(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=qs(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=qs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new KA(n,r));let i=this.qr.get(n);i===void 0&&(i=de(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Pm{constructor(){this.Qr=new st(ut.$r),this.Ur=new st(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ut(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new J(new we([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new J(new we([])),r=new ut(n,e),s=new ut(n,e+1);let i=de();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new ut(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return J.comparator(e.key,n.key)||ce(e.Yr,n.Yr)}static Kr(e,n){return ce(e.Yr,n.Yr)||J.comparator(e.key,n.key)}}/**
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
 */class bk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new st(ut.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new GA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Em:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(ce);return n.forEach(s=>{const i=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new ut(new J(i),0);let l=new st(ce);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)},a),F.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ut(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Dk{constructor(e){this.ri=e,this.docs=function(){return new ze(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Ir();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ir();const a=n.path,l=new J(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||oA(aA(m),r)<=0||(s.has(m.key)||bc(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Vk(this)}getSize(e){return F.resolve(this.size)}}class Vk extends Ck{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class Ok{constructor(e){this.persistence=e,this.si=new di(n=>Tm(n),Im),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new Pm,this.targetCount=0,this.ai=oa.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new oa(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
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
 */class eT{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ac(0),this.li=!1,this.li=!0,this.hi=new Nk,this.referenceDelegate=e(this),this.Pi=new Ok(this),this.indexManager=new vk,this.remoteDocumentCache=function(s){return new Dk(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new gk(n),this.Ii=new Rk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Pk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new bk(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new Lk(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Lk extends uA{constructor(e){super(),this.currentSequenceNumber=e}}class Nm{constructor(e){this.persistence=e,this.Ri=new Pm,this.Vi=null}static mi(e){return new Nm(e)}get fi(){if(this.Vi)return this.Vi;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const s=J.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Xu{constructor(e,n){this.persistence=e,this.pi=new di(r=>hA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Sk(this,n)}static mi(e,n){return new Xu(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,n).next(l=>{l||(r++,i.removeEntry(a,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=au(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class bm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bm(e,n.fromCache,r,s)}}/**
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
 */class xk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Mk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return N1()?8:cA(Nt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new xk;return this.Ss(e,n,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,a,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(yi()<=ue.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(yi()<=ue.DEBUG&&W("QueryEngine","Query:",vi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(yi()<=ue.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):F.resolve())}ys(e,n){if(Cy(n))return F.resolve(null);let r=Gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zh(n,null,"F"),r=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=de(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(n,l);return this.Cs(n,d,a,u.readTime)?this.ys(e,Zh(n,null,"F")):this.vs(e,d,n,u)}))})))}ws(e,n,r,s){return Cy(n)||s.isEqual(te.min())?F.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?F.resolve(null):(yi()<=ue.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vi(n)),this.vs(e,a,n,iA(s,Uo)).next(l=>l))})}Ds(e,n){let r=new st(Pw(e));return n.forEach((s,i)=>{bc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return yi()<=ue.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",vi(n)),this.ps.getDocumentsMatchingQuery(e,n,Es.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Dm="LocalStore",Fk=3e8;class Uk{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new ze(ce),this.xs=new di(i=>Tm(i),Im),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kk(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function zk(t,e,n,r){return new Uk(t,e,n,r)}async function tT(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=de();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function jk(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const p=d.batch,g=p.keys();let T=F.resolve();return g.forEach(P=>{T=T.next(()=>m.getEntry(u,P)).next(V=>{const D=d.docVersions.get(P);fe(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=de();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nT(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function Bk(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((m,p)=>{const g=s.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,m.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,m.addedDocuments,p)));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(_t.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,r)),s=s.insert(p,T),function(V,D,I){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Fk?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,T,m)&&l.push(n.Pi.updateTargetData(i,T))});let u=Ir(),d=de();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push($k(i,a,e.documentUpdates).next(m=>{u=m.ks,d=m.qs})),!r.isEqual(te.min())){const m=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return F.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.Ms=s,i))}function $k(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Ir();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):W(Dm,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:s}})}function qk(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Em),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Hk(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next(a=>(s=new Zr(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function rf(t,e,n){const r=re(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!wa(a))throw a;W(Dm,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Fy(t,e,n){const r=re(t);let s=te.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const p=re(u),g=p.xs.get(m);return g!==void 0?F.resolve(p.Ms.get(g)):p.Pi.getTargetData(d,m)}(r,a,Gn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:te.min(),n?i:de())).next(l=>(Wk(r,DA(e),l),{documents:l,Qs:i})))}function Wk(t,e,n){let r=t.Os.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Uy{constructor(){this.activeTargetIds=FA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gk{constructor(){this.Mo=new Uy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kk{Oo(e){}shutdown(){}}/**
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
 */const zy="ConnectivityMonitor";class jy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(zy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(zy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $l=null;function sf(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
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
 */const jd="RestConnection",Qk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===qu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=sf(),l=this.zo(e,n.toUriEncodedString());W(jd,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),m=ya(d);return this.Jo(e,l,u,r,m).then(p=>(W(jd,`Received RPC '${e}' ${a}: `,p),p),p=>{throw ra(jd,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ea}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Qk[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Xk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ct="WebChannelConnection";class Jk extends Yk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=sf();return new Promise((l,u)=>{const d=new rw;d.setWithCredentials(!0),d.listenOnce(sw.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case iu.NO_ERROR:const p=d.getResponseJson();W(Ct,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case iu.TIMEOUT:W(Ct,`RPC '${e}' ${a} timed out`),u(new K(U.DEADLINE_EXCEEDED,"Request time out"));break;case iu.HTTP_ERROR:const g=d.getStatus();if(W(Ct,`RPC '${e}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T==null?void 0:T.error;if(P&&P.status&&P.message){const V=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(E)>=0?E:U.UNKNOWN}(P.status);u(new K(V,P.message))}else u(new K(U.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new K(U.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{W(Ct,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);W(Ct,`RPC '${e}' ${a} sending request:`,s),d.send(n,"POST",m,r,15)})}T_(e,n,r){const s=sf(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ow(),l=aw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");W(Ct,`Creating RPC '${e}' stream ${s}: ${m}`,u);const p=a.createWebChannel(m,u);this.I_(p);let g=!1,T=!1;const P=new Xk({Yo:D=>{T?W(Ct,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(W(Ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),W(Ct,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),V=(D,I,E)=>{D.listen(I,A=>{try{E(A)}catch(O){setTimeout(()=>{throw O},0)}})};return V(p,Ja.EventType.OPEN,()=>{T||(W(Ct,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),V(p,Ja.EventType.CLOSE,()=>{T||(T=!0,W(Ct,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))}),V(p,Ja.EventType.ERROR,D=>{T||(T=!0,ra(Ct,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.a_(new K(U.UNAVAILABLE,"The operation could not be completed")))}),V(p,Ja.EventType.MESSAGE,D=>{var I;if(!T){const E=D.data[0];fe(!!E,16349);const A=E,O=(A==null?void 0:A.error)||((I=A[0])==null?void 0:I.error);if(O){W(Ct,`RPC '${e}' stream ${s} received error:`,O);const B=O.status;let $=function(S){const C=Qe[S];if(C!==void 0)return Bw(C)}(B),_=O.message;$===void 0&&($=U.INTERNAL,_="Unknown error status: "+B+" with message "+O.message),T=!0,P.a_(new K($,_)),p.close()}else W(Ct,`RPC '${e}' stream ${s} received:`,E),P.u_(E)}}),V(l,iw.STAT_EVENT,D=>{D.stat===Gh.PROXY?W(Ct,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Gh.NOPROXY&&W(Ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Bd(){return typeof document<"u"?document:null}/**
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
 */function Lc(t){return new nk(t,!0)}/**
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
 */class Vm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const By="PersistentStream";class rT{constructor(e,n,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vm(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(By,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(By,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zk extends rT{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ak(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?te.min():a.readTime?ln(a.readTime):te.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=nf(this.serializer),n.addTarget=function(i,a){let l;const u=a.target;if(l=Jh(u)?{documents:lk(i,u)}:{query:uk(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Hw(i,a.resumeToken);const d=ef(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(te.min())>0){l.readTime=Qu(i,a.snapshotVersion.toTimestamp());const d=ef(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=dk(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=nf(this.serializer),n.removeTarget=e,this.q_(n)}}class eR extends rT{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ok(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=nf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Qw(this.serializer,r))};this.q_(n)}}/**
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
 */class tR{}class nR extends tR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,tf(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,tf(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(U.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class rR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tr(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ii="RemoteStore";class sR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{hi(this)&&(W(ii,"Restarting streams for network reachability change."),await async function(u){const d=re(u);d.Ea.add(4),await al(d),d.Ra.set("Unknown"),d.Ea.delete(4),await xc(d)}(this))})}),this.Ra=new rR(r,s)}}async function xc(t){if(hi(t))for(const e of t.da)await e(!0)}async function al(t){for(const e of t.da)await e(!1)}function sT(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Mm(n)?xm(n):Ta(n).O_()&&Lm(n,e))}function Om(t,e){const n=re(t),r=Ta(n);n.Ia.delete(e),r.O_()&&iT(n,e),n.Ia.size===0&&(r.O_()?r.L_():hi(n)&&n.Ra.set("Unknown"))}function Lm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ta(t).Y_(e)}function iT(t,e){t.Va.Ue(e),Ta(t).Z_(e)}function xm(t){t.Va=new JA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ta(t).start(),t.Ra.ua()}function Mm(t){return hi(t)&&!Ta(t).x_()&&t.Ia.size>0}function hi(t){return re(t).Ea.size===0}function aT(t){t.Va=void 0}async function iR(t){t.Ra.set("Online")}async function aR(t){t.Ia.forEach((e,n)=>{Lm(t,e)})}async function oR(t,e){aT(t),Mm(t)?(t.Ra.ha(e),xm(t)):t.Ra.set("Unknown")}async function lR(t,e,n){if(t.Ra.set("Online"),e instanceof qw&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){W(ii,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ju(t,r)}else if(e instanceof uu?t.Va.Ze(e):e instanceof $w?t.Va.st(e):t.Va.tt(e),!n.isEqual(te.min()))try{const r=await nT(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(_t.EMPTY_BYTE_STRING,m.snapshotVersion)),iT(i,u);const p=new Zr(m.target,u,d,m.sequenceNumber);Lm(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(ii,"Failed to raise snapshot:",r),await Ju(t,r)}}async function Ju(t,e,n){if(!wa(e))throw e;t.Ea.add(1),await al(t),t.Ra.set("Offline"),n||(n=()=>nT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(ii,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await xc(t)})}function oT(t,e){return e().catch(n=>Ju(t,n,e))}async function Mc(t){const e=re(t),n=Is(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Em;for(;uR(e);)try{const s=await qk(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,cR(e,s)}catch(s){await Ju(e,s)}lT(e)&&uT(e)}function uR(t){return hi(t)&&t.Ta.length<10}function cR(t,e){t.Ta.push(e);const n=Is(t);n.O_()&&n.X_&&n.ea(e.mutations)}function lT(t){return hi(t)&&!Is(t).x_()&&t.Ta.length>0}function uT(t){Is(t).start()}async function dR(t){Is(t).ra()}async function hR(t){const e=Is(t);for(const n of t.Ta)e.ea(n.mutations)}async function fR(t,e,n){const r=t.Ta.shift(),s=Am.from(r,e,n);await oT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Mc(t)}async function mR(t,e){e&&Is(t).X_&&await async function(r,s){if(function(a){return jw(a)&&a!==U.ABORTED}(s.code)){const i=r.Ta.shift();Is(r).B_(),await oT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mc(r)}}(t,e),lT(t)&&uT(t)}async function $y(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),W(ii,"RemoteStore received new credentials");const r=hi(n);n.Ea.add(3),await al(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await xc(n)}async function pR(t,e){const n=re(t);e?(n.Ea.delete(2),await xc(n)):e||(n.Ea.add(2),await al(n),n.Ra.set("Unknown"))}function Ta(t){return t.ma||(t.ma=function(n,r,s){const i=re(n);return i.sa(),new Zk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:iR.bind(null,t),t_:aR.bind(null,t),r_:oR.bind(null,t),H_:lR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Mm(t)?xm(t):t.Ra.set("Unknown")):(await t.ma.stop(),aT(t))})),t.ma}function Is(t){return t.fa||(t.fa=function(n,r,s){const i=re(n);return i.sa(),new eR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:dR.bind(null,t),r_:mR.bind(null,t),ta:hR.bind(null,t),na:fR.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Mc(t)):(await t.fa.stop(),t.Ta.length>0&&(W(ii,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Fm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Fm(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),wa(t))return new K(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bi{static emptySet(e){return new Bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Za(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qy{constructor(){this.ga=new ze(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class la{constructor(e,n,r,s,i,a,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new la(e,n,Bi.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class gR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class yR{constructor(){this.queries=Hy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=Hy(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(U.ABORTED,"Firestore shutting down"))}}function Hy(){return new di(t=>Rw(t),Nc)}async function cT(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new gR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Um(a,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&zm(n)}async function dT(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vR(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&zm(n)}function ER(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function zm(t){t.Ca.forEach(e=>{e.next()})}var af,Wy;(Wy=af||(af={})).Ma="default",Wy.Cache="cache";class hT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new la(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=la.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==af.Cache}}/**
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
 */class fT{constructor(e){this.key=e}}class mT{constructor(e){this.key=e}}class _R{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=Pw(e),this.tu=new Bi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new qy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const g=s.get(m),T=bc(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),V=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let D=!1;g&&T?g.data.isEqual(T.data)?P!==V&&(r.track({type:3,doc:T}),D=!0):this.su(g,T)||(r.track({type:2,doc:T}),D=!0,(u&&this.eu(T,u)>0||d&&this.eu(T,d)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),D=!0):g&&!T&&(r.track({type:1,doc:g}),D=!0,(u||d)&&(l=!0)),D&&(T?(a=a.add(T),i=V?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,p)=>function(T,P){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Rt:D})}};return V(T)-V(P)}(m.type,p.type)||this.eu(m.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new la(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new mT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new fT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return la.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const jm="SyncEngine";class wR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TR{constructor(e){this.key=e,this.hu=!1}}class IR{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new di(l=>Rw(l),Nc),this.Iu=new Map,this.Eu=new Set,this.du=new ze(J.comparator),this.Au=new Map,this.Ru=new Pm,this.Vu={},this.mu=new Map,this.fu=oa.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function SR(t,e,n=!0){const r=_T(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await pT(r,e,n,!0),s}async function CR(t,e){const n=_T(t);await pT(n,e,!0,!1)}async function pT(t,e,n,r){const s=await Hk(t.localStore,Gn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await AR(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&sT(t.remoteStore,s),l}async function AR(t,e,n,r,s){t.pu=(p,g,T)=>async function(V,D,I,E){let A=D.view.ru(I);A.Cs&&(A=await Fy(V.localStore,D.query,!1).then(({documents:_})=>D.view.ru(_,A)));const O=E&&E.targetChanges.get(D.targetId),B=E&&E.targetMismatches.get(D.targetId)!=null,$=D.view.applyChanges(A,V.isPrimaryClient,O,B);return Ky(V,D.targetId,$.au),$.snapshot}(t,p,g,T);const i=await Fy(t.localStore,e,!0),a=new _R(e,i.Qs),l=a.ru(i.documents),u=il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=a.applyChanges(l,t.isPrimaryClient,u);Ky(t,n,d.au);const m=new wR(e,n,a);return t.Tu.set(e,m),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function kR(t,e,n){const r=re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Nc(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Om(r.remoteStore,s.targetId),of(r,s.targetId)}).catch(_a)):(of(r,s.targetId),await rf(r.localStore,s.targetId,!0))}async function RR(t,e){const n=re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Om(n.remoteStore,r.targetId))}async function PR(t,e,n){const r=xR(t);try{const s=await function(a,l){const u=re(a),d=Re.now(),m=l.reduce((T,P)=>T.add(P.key),de());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let P=Ir(),V=de();return u.Ns.getEntries(T,m).next(D=>{P=D,P.forEach((I,E)=>{E.isValidDocument()||(V=V.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,P)).next(D=>{p=D;const I=[];for(const E of l){const A=WA(E,p.get(E.key).overlayedDocument);A!=null&&I.push(new Ns(E.key,A,ww(A.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,I,l)}).next(D=>{g=D;const I=D.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(T,D.batchId,I)})}).then(()=>({batchId:g.batchId,changes:bw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new ze(ce)),d=d.insert(l,u),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,n),await ol(r,s.changes),await Mc(r.remoteStore)}catch(s){const i=Um(s,"Failed to persist write");n.reject(i)}}async function gT(t,e){const n=re(t);try{const r=await Bk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Au.get(i);a&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?fe(a.hu,14607):s.removedDocuments.size>0&&(fe(a.hu,42227),a.hu=!1))}),await ol(n,r,e)}catch(r){await _a(r)}}function Gy(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=re(a);u.onlineState=l;let d=!1;u.queries.forEach((m,p)=>{for(const g of p.Sa)g.va(l)&&(d=!0)}),d&&zm(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NR(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ze(J.comparator);a=a.insert(i,dt.newNoDocument(i,te.min()));const l=de().add(i),u=new Oc(te.min(),new Map,new ze(ce),a,l);await gT(r,u),r.du=r.du.remove(i),r.Au.delete(e),Bm(r)}else await rf(r.localStore,e,!1).then(()=>of(r,e,n)).catch(_a)}async function bR(t,e){const n=re(t),r=e.batch.batchId;try{const s=await jk(n.localStore,e);vT(n,r,null),yT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ol(n,s)}catch(s){await _a(s)}}async function DR(t,e,n){const r=re(t);try{const s=await function(a,l){const u=re(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(fe(p!==null,37113),m=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);vT(r,e,n),yT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ol(r,s)}catch(s){await _a(s)}}function yT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function vT(t,e,n){const r=re(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||ET(t,r)})}function ET(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Om(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Bm(t))}function Ky(t,e,n){for(const r of n)r instanceof fT?(t.Ru.addReference(r.key,e),VR(t,r)):r instanceof mT?(W(jm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||ET(t,r.key)):Z(19791,{wu:r})}function VR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(jm,"New document in limbo: "+n),t.Eu.add(r),Bm(t))}function Bm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(we.fromString(e)),r=t.fu.next();t.Au.set(r,new TR(n)),t.du=t.du.insert(n,r),sT(t.remoteStore,new Zr(Gn(Pc(n.path)),r,"TargetPurposeLimboResolution",Ac.ce))}}async function ol(t,e,n){const r=re(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,n).then(d=>{var m;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){s.push(d);const p=bm.As(u.targetId,d);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,d){const m=re(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(d,g=>F.forEach(g.Es,T=>m.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>F.forEach(g.ds,T=>m.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!wa(p))throw p;W(Dm,"Failed to update sequence numbers: "+p)}for(const p of d){const g=p.targetId;if(!p.fromCache){const T=m.Ms.get(g),P=T.snapshotVersion,V=T.withLastLimboFreeSnapshotVersion(P);m.Ms=m.Ms.insert(g,V)}}}(r.localStore,i))}async function OR(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){W(jm,"User change. New user:",e.toKey());const r=await tT(n.localStore,e);n.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(U.CANCELLED,a))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ol(n,r.Ls)}}function LR(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function _T(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NR.bind(null,e),e.Pu.H_=vR.bind(null,e.eventManager),e.Pu.yu=ER.bind(null,e.eventManager),e}function xR(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DR.bind(null,e),e}class Zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return zk(this.persistence,new Mk,e.initialUser,this.serializer)}Cu(e){return new eT(Nm.mi,this.serializer)}Du(e){return new Gk}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zu.provider={build:()=>new Zu};class MR extends Zu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){fe(this.persistence.referenceDelegate instanceof Xu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Tk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new eT(r=>Xu.mi(r,n),this.serializer)}}class lf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OR.bind(null,this.syncEngine),await pR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yR}()}createDatastore(e){const n=Lc(e.databaseInfo.databaseId),r=function(i){return new Jk(i)}(e.databaseInfo);return function(i,a,l,u){return new nR(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new sR(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Gy(this.syncEngine,n,0),function(){return jy.v()?new jy:new Kk}())}createSyncEngine(e,n){return function(s,i,a,l,u,d,m){const p=new IR(s,i,a,l,u,d);return m&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);W(ii,"RemoteStore shutting down."),i.Ea.add(5),await al(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}lf.provider={build:()=>new lf};/**
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
 */class wT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class FR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(U.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const a=re(s),l={documents:i.map(p=>Yu(a.serializer,p))},u=await a.Ho("BatchGetDocuments",a.serializer.databaseId,we.emptyPath(),l,i.length),d=new Map;u.forEach(p=>{const g=ik(a.serializer,p);d.set(g.key.toString(),g)});const m=[];return i.forEach(p=>{const g=d.get(p.toString());fe(!!g,55234,{key:p}),m.push(g)}),m}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Cm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=J.fromPath(r);this.mutations.push(new zw(s,this.precondition(s)))}),await async function(r,s){const i=re(r),a={writes:s.map(l=>Qw(i.serializer,l))};await i.Go("Commit",i.serializer.databaseId,we.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Z(50498,{Gu:e.constructor.name});n=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new K(U.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(te.min())?Ht.exists(!1):Ht.updateTime(n):Ht.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(te.min()))throw new K(U.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ht.updateTime(n)}return Ht.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class UR{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new Vm(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new FR(this.datastore),n=this.Hu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Yu(s)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const n=this.updateFunction(e);return!rl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!jw(n)}return!1}}/**
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
 */const Ss="FirestoreClient";class zR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=ym.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W(Ss,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(Ss,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $d(t,e){t.asyncQueue.verifyOperationInProgress(),W(Ss,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jR(t);W(Ss,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$y(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>$y(e.remoteStore,s)),t._onlineComponents=e}async function jR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Ss,"Using user provided OfflineComponentProvider");try{await $d(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ra("Error using user provided cache. Falling back to memory cache: "+n),await $d(t,new Zu)}}else W(Ss,"Using default OfflineComponentProvider"),await $d(t,new MR(void 0));return t._offlineComponents}async function $m(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Ss,"Using user provided OnlineComponentProvider"),await Qy(t,t._uninitializedComponentsProvider._online)):(W(Ss,"Using default OnlineComponentProvider"),await Qy(t,new lf))),t._onlineComponents}function BR(t){return $m(t).then(e=>e.syncEngine)}function $R(t){return $m(t).then(e=>e.datastore)}async function uf(t){const e=await $m(t),n=e.eventManager;return n.onListen=SR.bind(null,e.syncEngine),n.onUnlisten=kR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RR.bind(null,e.syncEngine),n}function qR(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const m=new wT({next:g=>{m.Nu(),a.enqueueAndForget(()=>dT(i,p));const T=g.docs.has(l);!T&&g.fromCache?d.reject(new K(U.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&u&&u.source==="server"?d.reject(new K(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),p=new hT(Pc(l.path),m,{includeMetadataChanges:!0,qa:!0});return cT(i,p)}(await uf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function TT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Yy=new Map;/**
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
 */const IT="firestore.googleapis.com",Xy=!0;class Jy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=IT,this.ssl=Xy}else this.host=e.host,this.ssl=e.ssl??Xy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_k)throw new K(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KC;switch(r.type){case"firstParty":return new JC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yy.get(n);r&&(W("ComponentProvider","Removing Datastore"),Yy.delete(n),r.terminate())}(this),Promise.resolve()}}function HR(t,e,n,r={}){var d;t=gr(t,Fc);const s=ya(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(K_(`https://${l}`),Q_("Firestore",!0)),i.host!==IT&&i.host!==l&&ra("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ni(u,a)&&(t._setSettings(u),r.mockUserToken)){let m,p;if(typeof r.mockUserToken=="string")m=r.mockUserToken,p=At.MOCK_USER;else{m=w1(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new At(g)}t._authCredentials=new QC(new uw(m,p))}}/**
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
 */class Uc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Uc(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(nl(n,Ke._jsonSchema))return new Ke(e,r||null,new J(we.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:Xe("string",Ke._jsonSchemaVersion),referencePath:Xe("string")};class hs extends Uc{constructor(e,n,r){super(e,n,Pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new J(e))}withConverter(e){return new hs(this.firestore,e,this._path)}}function $i(t,e,...n){if(t=it(t),cw("collection","path",e),t instanceof Fc){const r=we.fromString(e,...n);return hy(r),new hs(t,null,r)}{if(!(t instanceof Ke||t instanceof hs))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return hy(r),new hs(t.firestore,null,r)}}function Rt(t,e,...n){if(t=it(t),arguments.length===1&&(e=ym.newId()),cw("doc","path",e),t instanceof Fc){const r=we.fromString(e,...n);return dy(r),new Ke(t,null,new J(r))}{if(!(t instanceof Ke||t instanceof hs))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return dy(r),new Ke(t.firestore,t instanceof hs?t.converter:null,new J(r))}}/**
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
 */const Zy="AsyncQueue";class ev{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vm(this,"async_queue_retry"),this._c=()=>{const r=Bd();r&&W(Zy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Bd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Bd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new pr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wa(e))throw e;W(Zy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Tr("INTERNAL UNHANDLED ERROR: ",tv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Fm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:tv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function tv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function nv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ua extends Fc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ev,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ev(e),this._firestoreClient=void 0,await e}}}function WR(t,e){const n=typeof t=="object"?t:Z_(),r=typeof t=="string"?t:qu,s=pm(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=E1("firestore");i&&HR(s,...i)}return s}function zc(t){if(t._terminated)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||GR(t),t._firestoreClient}function GR(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,d,m){return new pA(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,TT(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new zR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(_t.fromBase64String(e))}catch(n){throw new K(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nl(e,rn._jsonSchema))return rn.fromBase64String(e.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:Xe("string",rn._jsonSchemaVersion),bytes:Xe("string")};/**
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
 */class jc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bc{constructor(e){this._methodName=e}}/**
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
 */class Kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kn._jsonSchemaVersion}}static fromJSON(e){if(nl(e,Kn._jsonSchema))return new Kn(e.latitude,e.longitude)}}Kn._jsonSchemaVersion="firestore/geoPoint/1.0",Kn._jsonSchema={type:Xe("string",Kn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Qn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nl(e,Qn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Qn(e.vectorValues);throw new K(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qn._jsonSchemaVersion="firestore/vectorValue/1.0",Qn._jsonSchema={type:Xe("string",Qn._jsonSchemaVersion),vectorValues:Xe("object")};/**
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
 */const KR=/^__.*__$/;class QR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new sl(e,this.data,n,this.fieldTransforms)}}class ST{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ns(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ac:t})}}class qm{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ec(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(CT(this.Ac)&&KR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class YR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lc(e)}Cc(e,n,r,s=!1){return new qm({Ac:e,methodName:n,Dc:r,path:gt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AT(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new YR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kT(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Wm("Data must be an object, but it was:",a,r);const l=RT(r,a);let u,d;if(i.merge)u=new an(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const g=cf(e,p,n);if(!a.contains(g))throw new K(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);NT(m,g)||m.push(g)}u=new an(m),d=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=a.fieldTransforms;return new QR(new Lt(l),u,d)}class $c extends Bc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}class Hm extends Bc{_toFieldTransform(e){return new BA(e.path,new $o)}isEqual(e){return e instanceof Hm}}function XR(t,e,n,r){const s=t.Cc(1,e,n);Wm("Data must be an object, but it was:",s,r);const i=[],a=Lt.empty();Ps(r,(u,d)=>{const m=Gm(e,u,n);d=it(d);const p=s.yc(m);if(d instanceof $c)i.push(m);else{const g=qc(d,p);g!=null&&(i.push(m),a.set(m,g))}});const l=new an(i);return new ST(a,l,s.fieldTransforms)}function JR(t,e,n,r,s,i){const a=t.Cc(1,e,n),l=[cf(e,r,n)],u=[s];if(i.length%2!=0)throw new K(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(cf(e,i[g])),u.push(i[g+1]);const d=[],m=Lt.empty();for(let g=l.length-1;g>=0;--g)if(!NT(d,l[g])){const T=l[g];let P=u[g];P=it(P);const V=a.yc(T);if(P instanceof $c)d.push(T);else{const D=qc(P,V);D!=null&&(d.push(T),m.set(T,D))}}const p=new an(d);return new ST(m,p,a.fieldTransforms)}function qc(t,e){if(PT(t=it(t)))return Wm("Unsupported field value:",e,t),RT(t,e);if(t instanceof Bc)return function(r,s){if(!CT(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=qc(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Re.fromDate(r);return{timestampValue:Qu(s.serializer,i)}}if(r instanceof Re){const i=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qu(s.serializer,i)}}if(r instanceof Kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Hw(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qn)return function(a,l){return{mapValue:{fields:{[Ew]:{stringValue:_w},[Hu]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Sm(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${vm(r)}`)}(t,e)}function RT(t,e){const n={};return fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(t,(r,s)=>{const i=qc(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function PT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Kn||t instanceof rn||t instanceof Ke||t instanceof Bc||t instanceof Qn)}function Wm(t,e,n){if(!PT(n)||!dw(n)){const r=vm(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function cf(t,e,n){if((e=it(e))instanceof jc)return e._internalPath;if(typeof e=="string")return Gm(t,e);throw ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZR=new RegExp("[~\\*/\\[\\]]");function Gm(t,e,n){if(e.search(ZR)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jc(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ec(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new K(U.INVALID_ARGUMENT,l+t+u)}function NT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tc{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eP extends tc{data(){return super.data()}}function bT(t,e){return typeof e=="string"?Gm(t,e):e instanceof jc?e._internalPath:e._delegate._internalPath}/**
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
 */function tP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DT{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Hu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>We(a.doubleValue));return new Qn(n)}convertGeoPoint(e){return new Kn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=_s(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);fe(Jw(r),9688,{name:e});const s=new jo(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||Tr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function VT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class nP extends DT{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fs extends tc{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=fs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}fs._jsonSchemaVersion="firestore/documentSnapshot/1.0",fs._jsonSchema={type:Xe("string",fs._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class cu extends fs{data(e={}){return super.data(e)}}class qi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cu(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new cu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new cu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:rP(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ym.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
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
 */function rv(t){t=gr(t,Ke);const e=gr(t.firestore,ua);return qR(zc(e),t._key).then(n=>OT(e,t,n))}qi._jsonSchemaVersion="firestore/querySnapshot/1.0",qi._jsonSchema={type:Xe("string",qi._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Km extends DT{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function Gs(t,e,n){t=gr(t,Ke);const r=gr(t.firestore,ua),s=VT(t.converter,e,n);return sP(r,[kT(AT(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function Bn(t,...e){var u,d,m;t=it(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||nv(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(nv(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(d=p.error)==null?void 0:d.bind(p),e[r+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,a,l;if(t instanceof Ke)a=gr(t.firestore,ua),l=Pc(t._key.path),i={next:p=>{e[r]&&e[r](OT(a,t,p))},error:e[r+1],complete:e[r+2]};else{const p=gr(t,Uc);a=gr(p.firestore,ua),l=p._query;const g=new Km(a);i={next:T=>{e[r]&&e[r](new qi(a,g,p,T))},error:e[r+1],complete:e[r+2]},tP(t._query)}return function(g,T,P,V){const D=new wT(V),I=new hT(T,D,P);return g.asyncQueue.enqueueAndForget(async()=>cT(await uf(g),I)),()=>{D.Nu(),g.asyncQueue.enqueueAndForget(async()=>dT(await uf(g),I))}}(zc(a),l,s,i)}function sP(t,e){return function(r,s){const i=new pr;return r.asyncQueue.enqueueAndForget(async()=>PR(await BR(r),s,i)),i.promise}(zc(t),e)}function OT(t,e,n){const r=n.docs.get(e._key),s=new Km(t);return new fs(t,s,e._key,r,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const iP={maxAttempts:5};function to(t,e){if((t=it(t)).firestore!==e)throw new K(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class aP{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=AT(e)}get(e){const n=to(e,this._firestore),r=new nP(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return Z(24041);const i=s[0];if(i.isFoundDocument())return new tc(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new tc(this._firestore,r,n._key,null,n.converter);throw Z(18433,{doc:i})})}set(e,n,r){const s=to(e,this._firestore),i=VT(s.converter,n,r),a=kT(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(e,n,r,...s){const i=to(e,this._firestore);let a;return a=typeof(n=it(n))=="string"||n instanceof jc?JR(this._dataReader,"Transaction.update",i._key,n,r,s):XR(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,a),this}delete(e){const n=to(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class oP extends aP{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=to(e,this._firestore),r=new Km(this._firestore);return super.get(e).then(s=>new fs(this._firestore,r,n._key,s._document,new Oi(!1,!1),n.converter))}}function Ia(t,e,n){t=gr(t,ua);const r={...iP,...n};return function(i){if(i.maxAttempts<1)throw new K(U.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,a,l){const u=new pr;return i.asyncQueue.enqueueAndForget(async()=>{const d=await $R(i);new UR(i.asyncQueue,d,l,a,u).ju()}),u.promise}(zc(t),s=>e(new oP(t,s)),r)}function Cs(){return new Hm("serverTimestamp")}(function(e,n=!0){(function(s){Ea=s})(va),na(new ri("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ua(new YC(r.getProvider("auth-internal")),new ZC(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(d.options.projectId,m)}(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),cs(oy,ly,e),cs(oy,ly,"esm2020")})();async function lP(t,e,n){await Ia(t,async r=>{const s=Rt(t,"rooms",e),i=Rt(t,"rooms",e,"players",n),a=Rt(t,"rooms",e,"claims",n),l=await r.get(s),u=await r.get(i),d=await r.get(a);if(!u.exists())return;const m=u.data().card===null?null:Rt(t,"rooms",e,"seats",String(u.data().card)),p=m?await r.get(m):null;p!=null&&p.exists()&&p.data().uid===n&&r.delete(m),d.exists()&&r.delete(a),l.data().activeClaim===n&&r.update(s,{activeClaim:null}),r.delete(i)})}var uP="firebase",cP="12.5.0";/**
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
 */cs(uP,cP,"app");function LT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dP=LT,xT=new el("auth","Firebase",LT());/**
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
 */const nc=new fm("@firebase/auth");function hP(t,...e){nc.logLevel<=ue.WARN&&nc.warn(`Auth (${va}): ${t}`,...e)}function du(t,...e){nc.logLevel<=ue.ERROR&&nc.error(`Auth (${va}): ${t}`,...e)}/**
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
 */function Dn(t,...e){throw Qm(t,...e)}function Yn(t,...e){return Qm(t,...e)}function MT(t,e,n){const r={...dP(),[e]:n};return new el("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return MT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xT.create(t,...e)}function ne(t,e,...n){if(!t)throw Qm(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw du(e),new Error(e)}function Sr(t,e){t||dr(e)}/**
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
 */function df(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function fP(){return sv()==="http:"||sv()==="https:"}function sv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function mP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fP()||k1()||"connection"in navigator)?navigator.onLine:!0}function pP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=S1()||R1()}get(){return mP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ym(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class FT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vP=new ll(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Pr(t,e,n,r,s={}){return UT(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=tl({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return A1()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&ya(t.emulatorConfig.host)&&(d.credentials="include"),FT.fetch()(await zT(t,t.config.apiHost,n,l),d)})}async function UT(t,e,n){t._canInitEmulator=!1;const r={...gP,...e};try{const s=new _P(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ql(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ql(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ql(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw ql(t,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw MT(t,m,d);Dn(t,m)}}catch(s){if(s instanceof kr)throw s;Dn(t,"network-request-failed",{message:String(s)})}}async function ul(t,e,n,r,s={}){const i=await Pr(t,e,n,r,s);return"mfaPendingCredential"in i&&Dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function zT(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Ym(t.config,s):`${t.config.apiScheme}://${s}`;return yP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function EP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _P{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),vP.get())})}}function ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yn(t,e,r);return s.customData._tokenResponse=n,s}function iv(t){return t!==void 0&&t.enterprise!==void 0}class wP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function TP(t,e){return Pr(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
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
 */async function IP(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function rc(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SP(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Xm(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_o(qd(s.auth_time)),issuedAtTime:_o(qd(s.iat)),expirationTime:_o(qd(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qd(t){return Number(t)*1e3}function Xm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const s=q_(n);return s?JSON.parse(s):(du("Failed to decode base64 JWT payload"),null)}catch(s){return du("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function av(t){const e=Xm(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kr&&CP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class AP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Wo(t,rc(e,{idToken:n}));ne(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?jT(s.providerUserInfo):[],a=RP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function kP(t){const e=it(t);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function PP(t,e){const n=await UT(t,{},async()=>{const r=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await zT(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ya(t.emulatorConfig.host)&&(u.credentials="include"),FT.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NP(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
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
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):av(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=av(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Hi;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
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
 */function Br(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new AP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SP(this,e)}reload(){return kP(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Wo(this,IP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:T,providerData:P,stsTokenManager:V}=n;ne(p&&V,e,"internal-error");const D=Hi.fromJSON(this.name,V);ne(typeof p=="string",e,"internal-error"),Br(r,e.name),Br(s,e.name),ne(typeof g=="boolean",e,"internal-error"),ne(typeof T=="boolean",e,"internal-error"),Br(i,e.name),Br(a,e.name),Br(l,e.name),Br(u,e.name),Br(d,e.name),Br(m,e.name);const I=new Rn({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:T,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:d,lastLoginAt:m});return P&&Array.isArray(P)&&(I.providerData=P.map(E=>({...E}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hi;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jT(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Hi;l.updateFromIdToken(r);const u=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const ov=new Map;function hr(t){Sr(t instanceof Function,"Expected a class definition");let e=ov.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ov.set(t,e),e)}/**
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
 */class BT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BT.type="NONE";const lv=BT;/**
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
 */function hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hu(this.userKey,s.apiKey,i),this.fullPersistenceKey=hu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rc(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wi(hr(lv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||hr(lv);const a=hu(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(a);if(m){let p;if(typeof m=="string"){const g=await rc(e,{idToken:m}).catch(()=>{});if(!g)break;p=await Rn._fromGetAccountInfoResponse(e,g,m)}else p=Rn._fromJSON(e,m);d!==i&&(l=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Wi(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Wi(i,e,r))}}/**
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
 */function uv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($T(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KT(e))return"Blackberry";if(QT(e))return"Webos";if(qT(e))return"Safari";if((e.includes("chrome/")||HT(e))&&!e.includes("edge/"))return"Chrome";if(GT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $T(t=Nt()){return/firefox\//i.test(t)}function qT(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HT(t=Nt()){return/crios\//i.test(t)}function WT(t=Nt()){return/iemobile/i.test(t)}function GT(t=Nt()){return/android/i.test(t)}function KT(t=Nt()){return/blackberry/i.test(t)}function QT(t=Nt()){return/webos/i.test(t)}function Jm(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bP(t=Nt()){var e;return Jm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function DP(){return P1()&&document.documentMode===10}function YT(t=Nt()){return Jm(t)||GT(t)||QT(t)||KT(t)||/windows phone/i.test(t)||WT(t)}/**
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
 */function XT(t,e=[]){let n;switch(t){case"Browser":n=uv(Nt());break;case"Worker":n=`${uv(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${va}/${r}`}/**
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
 */class VP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function OP(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
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
 */const LP=6;class xP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??LP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class MP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cv(this),this.idTokenSubscription=new cv(this),this.beforeStateQueue=new VP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rc(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(nn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Xn(this));const n=e?it(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OP(this),n=new xP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&hP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nr(t){return it(t)}class cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=M1(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FP(t){Hc=t}function JT(t){return Hc.loadJS(t)}function UP(){return Hc.recaptchaEnterpriseScript}function zP(){return Hc.gapiScript}function jP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class BP{constructor(){this.enterprise=new $P}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $P{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qP="recaptcha-enterprise",ZT="NO_RECAPTCHA";class HP{constructor(e){this.type=qP,this.auth=Nr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{TP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new wP(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;iv(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(ZT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new BP().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&iv(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UP();u.length!==0&&(u+=l),JT(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function dv(t,e,n,r=!1,s=!1){const i=new HP(t);let a;if(s)a=ZT;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ic(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await dv(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await dv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
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
 */function WP(t,e){const n=pm(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ni(i,e??{}))return s;Dn(s,"already-initialized")}return n.initialize({options:e})}function GP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KP(t,e,n){const r=Nr(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=eI(e),{host:a,port:l}=QP(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(ni(d,r.config.emulator)&&ni(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,ya(a)?(K_(`${i}//${a}${u}`),Q_("Auth",!0)):YP()}function eI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QP(t){const e=eI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hv(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:hv(a)}}}function hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}async function XP(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JP(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}async function ZP(t,e){return Pr(t,"POST","/v1/accounts:sendOobCode",Rr(t,e))}async function eN(t,e){return ZP(t,e)}/**
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
 */async function tN(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function nN(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
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
 */class Go extends Zm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ic(e,n,"signInWithPassword",JP);case"emailLink":return tN(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ic(e,r,"signUpPassword",XP);case"emailLink":return nN(e,{idToken:n,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gi(t,e){return ul(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
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
 */const rN="http://localhost";class ai extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new ai(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:rN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tl(n)}return e}}/**
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
 */function sN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iN(t){const e=Ya(Xa(t)).link,n=e?Ya(Xa(e)).deep_link_id:null,r=Ya(Xa(t)).deep_link_id;return(r?Ya(Xa(r)).link:null)||r||n||e||t}class ep{constructor(e){const n=Ya(Xa(e)),r=n.apiKey??null,s=n.oobCode??null,i=sN(n.mode??null);ne(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=iN(e);try{return new ep(n)}catch{return null}}}/**
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
 */class Sa{constructor(){this.providerId=Sa.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ep.parseLink(n);return ne(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}Sa.PROVIDER_ID="password";Sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cl extends tI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends cl{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Qr extends cl{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends cl{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function nI(t,e){return ul(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),a=fv(r);return new Cr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fv(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function aN(t){var s;if(nn(t.app))return Promise.reject(Xn(t));const e=Nr(t);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new Cr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await nI(e,{returnSecureToken:!0}),r=await Cr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class ac extends kr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ac(e,n,r,s)}}function rI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,i,e,r):i})}async function oN(t,e,n=!1){const r=await Wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function lN(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Xn(r));const s="reauthenticate";try{const i=await Wo(t,rI(r,s,e,t),n);ne(i.idToken,r,"internal-error");const a=Xm(i.idToken);ne(a,r,"internal-error");const{sub:l}=a;return ne(t.uid===l,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),i}}/**
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
 */async function sI(t,e,n=!1){if(nn(t.app))return Promise.reject(Xn(t));const r="signIn",s=await rI(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function uN(t,e){return sI(Nr(t),e)}/**
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
 */async function iI(t){const e=Nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cN(t,e,n){const r=Nr(t);await ic(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",eN)}async function dN(t,e,n){if(nn(t.app))return Promise.reject(Xn(t));const r=Nr(t),a=await ic(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nI).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iI(t),u}),l=await Cr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function hN(t,e,n){return nn(t.app)?Promise.reject(Xn(t)):uN(it(t),Sa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iI(t),r})}function fN(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function mN(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function pN(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function gN(t){return it(t).signOut()}const oc="__sak";/**
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
 */class aI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oc,"1"),this.storage.removeItem(oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yN=1e3,vN=10;class oI extends aI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=YT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);DP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oI.type="LOCAL";const EN=oI;/**
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
 */class lI extends aI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lI.type="SESSION";const uI=lI;/**
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
 */function _N(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(n.origin,i)),u=await _N(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
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
 */function tp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=tp("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Jn(){return window}function TN(t){Jn().location.href=t}/**
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
 */function cI(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function IN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function CN(){return cI()?self:null}/**
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
 */const dI="firebaseLocalStorageDb",AN=1,lc="firebaseLocalStorage",hI="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gc(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function kN(){const t=indexedDB.deleteDatabase(dI);return new dl(t).toPromise()}function ff(){const t=indexedDB.open(dI,AN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lc,{keyPath:hI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lc)?e(r):(r.close(),await kN(),e(await ff()))})})}async function mv(t,e,n){const r=Gc(t,!0).put({[hI]:e,value:n});return new dl(r).toPromise()}async function RN(t,e){const n=Gc(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function pv(t,e){const n=Gc(t,!0).delete(e);return new dl(n).toPromise()}const PN=800,NN=3;class fI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ff(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(CN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await IN(),!this.activeServiceWorker)return;this.sender=new wN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ff();return await mv(e,oc,"1"),await pv(e,oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gc(s,!1).getAll();return new dl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fI.type="LOCAL";const bN=fI;new ll(3e4,6e4);/**
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
 */function DN(t,e){return e?hr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class np extends Zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VN(t){return sI(t.auth,new np(t),t.bypassAuthState)}function ON(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),lN(n,new np(t),t.bypassAuthState)}async function LN(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),oN(n,new np(t),t.bypassAuthState)}/**
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
 */class mI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VN;case"linkViaPopup":case"linkViaRedirect":return LN;case"reauthViaPopup":case"reauthViaRedirect":return ON;default:Dn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xN=new ll(2e3,1e4);class Li extends mI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xN.get())};e()}}Li.currentPopupAction=null;/**
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
 */const MN="pendingRedirect",fu=new Map;class FN extends mI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const r=await UN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UN(t,e){const n=BN(e),r=jN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zN(t,e){fu.set(t._key(),e)}function jN(t){return hr(t._redirectPersistence)}function BN(t){return hu(MN,t.config.apiKey,t.name)}async function $N(t,e,n=!1){if(nn(t.app))return Promise.reject(Xn(t));const r=Nr(t),s=DN(r,e),a=await new FN(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const qN=10*60*1e3;class HN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pI(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qN&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pI(t);default:return!1}}/**
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
 */async function GN(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
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
 */const KN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QN=/^https?/;async function YN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GN(t);for(const n of e)try{if(XN(n))return}catch{}Dn(t,"unauthorized-domain")}function XN(t){const e=df(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!QN.test(n))return!1;if(KN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const JN=new ll(3e4,6e4);function yv(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZN(t){return new Promise((e,n)=>{var s,i,a;function r(){yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yv(),n(Yn(t,"network-request-failed"))},timeout:JN.get()})}if((i=(s=Jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Jn().gapi)!=null&&a.load)r();else{const l=jP("iframefcb");return Jn()[l]=()=>{gapi.load?r():n(Yn(t,"network-request-failed"))},JT(`${zP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw mu=null,e})}let mu=null;function eb(t){return mu=mu||ZN(t),mu}/**
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
 */const tb=new ll(5e3,15e3),nb="__/auth/iframe",rb="emulator/auth/iframe",sb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ib=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ab(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ym(e,rb):`https://${t.config.authDomain}/${nb}`,r={apiKey:e.apiKey,appName:t.name,v:va},s=ib.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tl(r).slice(1)}`}async function ob(t){const e=await eb(t),n=Jn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:ab(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Yn(t,"network-request-failed"),l=Jn().setTimeout(()=>{i(a)},tb.get());function u(){Jn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ub=500,cb=600,db="_blank",hb="http://localhost";class vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fb(t,e,n,r=ub,s=cb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...lb,width:r.toString(),height:s.toString(),top:i,left:a},d=Nt().toLowerCase();n&&(l=HT(d)?db:n),$T(d)&&(e=e||hb,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[T,P])=>`${g}${T}=${P},`,"");if(bP(d)&&l!=="_self")return mb(e||"",l),new vv(null);const p=window.open(e||"",l,m);ne(p,t,"popup-blocked");try{p.focus()}catch{}return new vv(p)}function mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pb="__/auth/handler",gb="emulator/auth/handler",yb=encodeURIComponent("fac");async function Ev(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:va,eventId:s};if(e instanceof tI){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",x1(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof cl){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),d=u?`#${yb}=${encodeURIComponent(u)}`:"";return`${vb(t)}?${tl(l).slice(1)}${d}`}function vb({config:t}){return t.emulator?Ym(t,gb):`https://${t.authDomain}/${pb}`}/**
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
 */const Hd="webStorageSupport";class Eb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uI,this._completeRedirectFn=$N,this._overrideRedirectResult=zN}async _openPopup(e,n,r,s){var a;Sr((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ev(e,n,r,df(),s);return fb(e,i,tp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ev(e,n,r,df(),s);return TN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ob(e),r=new HN(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hd,{type:Hd},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Hd];i!==void 0&&n(!!i),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return YT()||qT()||Jm()}}const _b=Eb;var _v="@firebase/auth",wv="1.11.1";/**
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
 */class wb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ib(t){na(new ri("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XT(t)},d=new MP(r,s,i,u);return GP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),na(new ri("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new wb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cs(_v,wv,Tb(t)),cs(_v,wv,"esm2020")}/**
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
 */const Sb=5*60,Cb=G_("authIdTokenMaxAge")||Sb;let Tv=null;const Ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cb)return;const s=n==null?void 0:n.token;Tv!==s&&(Tv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kb(t=Z_()){const e=pm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:_b,persistence:[bN,EN,uI]}),r=G_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Ab(i.toString());mN(n,a,()=>a(n.currentUser)),fN(n,l=>a(l))}}const s=H_("auth");return s&&KP(n,`http://${s}`),n}function Rb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}FP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Rb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ib("Browser");
function Lb(t){const e=String(t).match(/[^,;:.!?\n]+[,;:.!?\n]*|[,;:.!?\n]+/gu)||[],n=[];for(const r of e){let s="";for(const i of r.match(/\S+\s*|\s+/gu)||[])s.length+i.length>140&&s&&(n.push(s),s=""),s+=i;s&&n.push(s)}return n}function xb(t){return/[.!?\n]\s*$/u.test(t)?280:/[,;:]\s*$/u.test(t)?120:30}
const Ys=Array.from({length:90},(t,e)=>e+1);function jb(t){return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pv(t,e=Math.random){t=[...t];for(let n=t.length-1;n>0;n--){let r=Math.floor(e()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}function Bb(){const t=jb(1225),e=[],n=Array(91).fill(0);for(let r=0;r<37;r++){let s;do s=Array.from({length:3},()=>{const a=Pv([0,1,2,3,4,5,6,7,8],t).slice(0,5);return Array.from({length:9},(l,u)=>a.includes(u))});while(Array.from({length:9},(a,l)=>s.every(u=>!u[l])).some(Boolean));const i=Array.from({length:3},()=>Array(9).fill(null));for(let a=0;a<9;a++){const l=[0,1,2].filter(m=>s[m][a]),d=Pv(Ys.filter(m=>Math.min(8,Math.floor(m/10))===a),t).sort((m,p)=>n[m]-n[p]).slice(0,l.length).sort((m,p)=>m-p);l.forEach((m,p)=>{i[m][a]=d[p],n[d[p]]++})}e.push(i)}return e}const fa=Bb(),gu=()=>({version:1,drawn:[],pending:null,selected:null,cardLocked:!1,marks:{},colors:{},chipColors:{},phrases:{},sound:!0,music:!0,voice:!0});function $b(t,e=Math.random){if(t.pending!==null)return t;const n=Ys.filter(r=>!t.drawn.includes(r));return n.length?{...t,cardLocked:t.cardLocked||t.selected!==null,pending:n[Math.floor(e()*n.length)]}:t}function qb(t){return t.pending===null?t:{...t,drawn:[...t.drawn,t.pending],pending:null}}function Hb(t){return{...t,drawn:[],pending:null,marks:{},cardLocked:!1}}function Wb(t){try{const e=JSON.parse(t);return e.version!==1||!Array.isArray(e.drawn)||new Set(e.drawn).size!==e.drawn.length||e.drawn.some(n=>!Ys.includes(n))||!(e.pending===null||Ys.includes(e.pending)&&!e.drawn.includes(e.pending))?gu():{...gu(),...e,cardLocked:!!(e.cardLocked||e.selected!==null&&e.selected!==void 0&&(e.drawn.length>0||e.pending!==null||Object.values(e.marks||{}).some(n=>Array.isArray(n)&&n.length>0))),phrases:Object.fromEntries(Object.entries(e.phrases||{}).filter(([n,r])=>Ys.includes(Number(n))&&typeof r=="string").map(([n,r])=>[n,r])),selected:Number.isInteger(e.selected)&&e.selected>=0&&e.selected<fa.length?e.selected:null,marks:e.marks&&typeof e.marks=="object"?e.marks:{},colors:e.colors&&typeof e.colors=="object"?e.colors:{}}}catch{return gu()}}function Gb(t,e){return t.cardLocked&&t.selected!==e?t:{...t,selected:e,cardLocked:t.cardLocked||t.drawn.length>0||t.pending!==null}}
window.__bingoLanguage=(()=>{try{const v=localStorage.getItem('bingo-language');return ['es','ca','en'].includes(v)?v:'es'}catch{return 'es'}})();
const Jb=["El primero en llegar a la fiesta.","Dos son compañía.","Tres deseos para esta Navidad.","Cuatro duendes preparando regalos.","Cinco campanas y un brinco.","Seis abrazos, ¿los queréis?","Siete estrellas para tener suerte.","Un bizcocho y otro bizcocho.","Nueve copos, que nieve, que nieve.","Un diez para quien reparte el turrón.","Dos palitos muy juntitos.","Doce uvas para empezar con suerte.","Hoy la suerte está de tu parte.","Catorce regalos y ninguno es un calcetín.","La niña bonita.","Dieciséis, otro polvorón, ¿queréis?","Diecisiete, que nadie se inquiete.","Dieciocho, guardadme un trozo de bizcocho.","Diecinueve, por la ventana ya nieva.","Veinte sonrisas entre toda la gente.","Veintiuno, turrón para cada uno.","Los patitos.","Veintitrés, los regalos a tus pies.","Nochebuena, qué noche tan buena.","Navidad, felicidad de verdad.","Veintiséis, ¿otro villancico queréis?","Veintisiete, un regalo en el paquete.","Veintiocho, no te comas todo el bizcocho.","Veintinueve, el duende ya se mueve.","Treinta copos hacen una fiesta.","Treinta y uno, brindamos todos juntos.","Treinta y dos, un abrazo para vos.","Treinta y tres, baila otra vez.","Treinta y cuatro, un reno en el teatro.","Treinta y cinco, de alegría doy un brinco.","Treinta y seis, la suerte ya la veis.","Treinta y siete, el gorro se me mete.","Treinta y ocho, chocolate y bizcocho.","Treinta y nueve, la nieve se mueve.","Cuarenta, que la alegría se sienta.","Cuarenta y uno, no se queda sin regalo ninguno.","Cuarenta y dos, cantamos a una voz.","Cuarenta y tres, un duende del revés.","Cuarenta y cuatro, los regalos en el saco.","Cuarenta y cinco, el reno pega un brinco.","Cuarenta y seis, ¿ya lo tenéis?","Cuarenta y siete, sonríe y promete.","Cuarenta y ocho, el último polvorón me lo como.","Cuarenta y nueve, otra bola se mueve.","Cincuenta, media fiesta y la suerte aumenta.","Cincuenta y uno, no falta ninguno.","Cincuenta y dos, un brindis por los dos.","Cincuenta y tres, cascabeles en los pies.","Cincuenta y cuatro, el duende se esconde un rato.","Cincuenta y cinco, doble salto y doble brinco.","Cincuenta y seis, las luces ya las veis.","Cincuenta y siete, un lazo al paquete.","Cincuenta y ocho, la abuela trae bizcocho.","Cincuenta y nueve, Papá Noel se mueve.","Sesenta, la alegría se presenta.","Sesenta y uno, otro regalo oportuno.","Sesenta y dos, el trineo viene veloz.","Sesenta y tres, a marcar otra vez.","Sesenta y cuatro, el gato se sube al árbol.","Sesenta y cinco, de la silla doy un brinco.","Sesenta y seis, dos duendes, ¿los veis?","Sesenta y siete, que nadie se quede sin paquete.","Sesenta y ocho, me han escondido el bizcocho.","Sesenta y nueve, el muñeco de nieve no se mueve.","Setenta, la suerte se calienta.","Setenta y uno, un villancico y desayuno.","Setenta y dos, las campanitas suenan por vos.","Setenta y tres, menudo baile de pies.","Setenta y cuatro, los renos descansan un rato.","Setenta y cinco, queda poco, pega un brinco.","Setenta y seis, ¿cuántas fichas tenéis?","Setenta y siete, dos bastones en el paquete.","Setenta y ocho, guardamos algo de bizcocho.","Setenta y nueve, el árbol casi se mueve.","Ochenta, que la fiesta no se detenga.","Ochenta y uno, un abrazo a cada uno.","Ochenta y dos, un turrón para los dos.","Ochenta y tres, otra estrella del revés.","Ochenta y cuatro, el duende cuenta hasta cuatro.","Ochenta y cinco, la suerte llega de un brinco.","Ochenta y seis, ya casi lo tenéis.","Ochenta y siete, el último lazo al paquete.","Ochenta y ocho, dos muñecos de nieve, uno junto al otro.","Ochenta y nueve, un último copo de nieve.","El abuelo, y un abrazo hasta el cielo."],ro=Object.fromEntries(Jb.map((t,e)=>[e+1,t])),Kd=(t,e={})=>window.__bingoLanguage==='ca'?`Número ${t}.${e[t]?` ${e[t]}`:''}`:window.__bingoLanguage==='en'?`Number ${t}.${e[t]?` ${e[t]}`:''}`:`El número ${t}. ${e[t]??ro[t]??""}`.trim();

(() => {
  const React = x;
  const LANG_STORAGE_KEY='bingo-language';
  let appLanguage=window.__bingoLanguage||'es';
  document.documentElement.lang=appLanguage;
  document.title=appLanguage==='ca'?'Bingo de Nadal · Elisabeth':appLanguage==='en'?'Christmas Bingo · Elisabeth':'Bingo de Navidad · Elisabeth';
  const description=document.querySelector('meta[name="description"]');
  if(description)description.content=appLanguage==='ca'?'Bingo de Nadal de l’Elisabeth: 90 boles, 37 cartons i una mica de màgia.':appLanguage==='en'?'Elisabeth’s Christmas bingo: 90 balls, 37 cards and a little magic.':'Bingo navideño de Elisabeth: 90 bolas, 37 cartones y un poquito de magia.';
  const I18N={
   ca:{
    '🔑 Ya tengo cuenta · Entrar':'🔑 Ja tinc un compte · Entrar','✨ Crear nuevo Administrador':'✨ Crear un administrador nou','✉️ Correo electrónico':'✉️ Correu electrònic','🔒 Contraseña (mín. 6 caracteres)':'🔒 Contrasenya (mín. 6 caràcters)','🔑 Entrar al panel de Administrador':'🔑 Entrar al tauler d’administració','He olvidado mi contraseña':'He oblidat la contrasenya','Modo de acceso de administrador':'Mode d’accés d’administrador','Entra con tu cuenta o crea un nuevo Administrador al instante.':'Entra amb el teu compte o crea un administrador nou de seguida.','Bola de nieve: 1 toque luz, 2 toques mucha luz, 3 toques cobra vida y sale el gnomo de la puerta; desliza para nevar':'Bola de neu: 1 toc encén el llum, 2 tocs augmenten la llum, 3 tocs la fan cobrar vida i surt el follet; llisca per fer nevar','✦ 1 toque: luz · 2: mucha luz · 3: cobra vida ✦':'✦ 1 toc: llum · 2: més llum · 3: cobra vida ✦','ACCESO Y CREACIÓN DE ADMINISTRADORES':'ACCÉS I CREACIÓ D’ADMINISTRADORS','Idioma / Language / Llengua':'Idioma / Language / Llengua',
    'Pruna bailando':'La Pruna balla','⏸ Parar Pruna':'⏸ Aturar la Pruna','Toca el vídeo para ampliarlo':'Toca el vídeo per ampliar-lo','Toca a Pruna para reproducir o parar · Desliza para descubrir más':'Toca la Pruna per reproduir-la o aturar-la · Llisca per descobrir-ne més','Páginas de bienvenida':'Pàgines de benvinguda','Ver Pruna':'Veure la Pruna','Ver Bola de nieve':'Veure la bola de neu','Ver Duende':'Veure el follet','🎟 Ir a cartón':'🎟 Anar al cartró','🎟 Elegir mi cartón y jugar':'🎟 Triar el meu cartró i jugar','🔊 Números':'🔊 Números','🔇 Números':'🔇 Números','Cerrar sesión':'Tancar la sessió','Volver al bombo':'Tornar al bombo','← Volver a la portada':'← Tornar a la portada','Volver a la portada de bienvenida':'Tornar a la portada','Escribe el código de cualquier sala activa para abrir el bombo o tu cartón.':'Escriu el codi d’una sala activa per obrir el bombo o el teu cartró.','No existe una partida con ese código.':'No hi ha cap partida amb aquest codi.','Toca a Pruna para reproducir o parar':'Toca la Pruna per reproduir-la o aturar-la','Toca a Pruna para volver a verla':'Toca la Pruna per tornar-la a veure','🎉 ¡Sale confeti y el duende baila en todos los móviles!':'🎉 Hi haurà confeti i el follet ballarà a tots els mòbils!','🏆 ¡BINGO! Se para la partida y sale confeti para todos':'🏆 BINGO! La partida s’atura i tothom veu confeti','🎺 ¡Ohhh! Música de decepción cuando es falsa alarma':'🎺 Ohhh! Música de decepció quan és una falsa alarma','Manual 1 · Cómo Jugar':'Manual 1 · Com s’hi juga','👆 1 toque: Baila con música':'👆 1 toc: Balla amb música','👆 1 toque: Luz cálida':'👆 1 toc: Llum càlida','👆👆👆 3 toques: ¡Sale el gnomo!':'👆👆👆 3 tocs: Apareix el follet!','👆 Tócala para agrandar':'👆 Toca-la per ampliar-la','Creado por ':'Creat per ','Creado por Elisabeth · V16':'Creat per l’Elisabeth · V16','Árbol de Navidad artesanal con adornos rojos y luces doradas':'Arbre de Nadal artesanal amb ornaments vermells i llums daurats','Toca a Pruna para reproducir o parar · Desliza para descubrir más':'Toca la Pruna per reproduir-la o aturar-la · Llisca per descobrir-ne més','Idioma / Language / Llengua':'Idioma / Language / Llengua',
    'EL BINGO DE ELISABETH':'EL BINGO DE L’ELISABETH','Un poquito de magia…':'Una mica de màgia…','Seguir ':'Continuar ','🎟 Manual 1':'🎟 Manual 1','Manual 1':'Manual 1',
    'La Navidad':'El Nadal','se juega ':'es juga ','juntos.':'plegats.','UNA TRADICIÓN · UN POQUITO DE MAGIA':'UNA TRADICIÓ · UNA MICA DE MÀGIA','Entrar a jugar':'Entrar a jugar','Administrador':'Administració','JUGAR CON MI CARTÓN':'JUGAR AMB EL MEU CARTRÓ','Tu nombre':'El teu nom','Código de la partida':'Codi de la partida','Elegir mi cartón y jugar':'Triar el meu cartró i jugar','Volver a la portada':'Tornar a la portada','Volver a entrar':'Tornar a entrar','Olvidar sala':'Oblidar la sala','Última sesión guardada:':'Darrera sessió desada:','Elige jugar con 1, 2 o 3 cartones.':'Tria jugar amb 1, 2 o 3 cartons.','¿Con cuántos cartones quieres jugar?':'Amb quants cartons vols jugar?','Seleccionados':'Seleccionats','Aceptar y jugar':'Acceptar i jugar','Elegir ':'Triar ','al azar y jugar':'a l’atzar i jugar','Ver los ':'Veure els ','cartones':'cartons','Cartón':'Cartró','cartón':'cartró','cartones':'cartons','marcados':'marcats','Control de jugadores en la sala':'Control de jugadors a la sala','Control de jugadores':'Control de jugadors','Jugadores de la partida':'Jugadors de la partida','Ver ':'Veure ','Sacar / Borrar':'Fora de la sala / Esborrar','Borrar':'Esborrar','Sin jugadores todavía.':'Encara no hi ha jugadors.','Ahora mismo no hay ningún jugador dentro de la sala.':'Ara mateix no hi ha cap jugador a la sala.','Cerrar ×':'Tancar ×','Sorteo en pausa':'Sorteig en pausa','Comprobar cartón':'Comprovar el cartró','¡Felicidades, ':'Enhorabona, ','¡LÍNEA!':'LÍNIA!','¡BINGO!':'BINGO!','¡PREMIO CONFIRMADO!':'PREMI CONFIRMAT!','¡Seguir jugando!':'Continuar jugant!','¡Seguir jugando!':'Continuar jugant!','Configuración':'Configuració','Sonido de la app':'So de l’aplicació','Música navideña':'Música de Nadal','Cantar los números':'Cantar els números','Frases de los números':'Frases dels números','Color y fichas':'Color i fitxes','Pantalla completa':'Pantalla completa','Reducir':'Reduir','Volver al bombo':'Tornar al bombo','Escuchar música':'Escoltar música','Parar música':'Aturar la música','Créditos musicales':'Crèdits musicals','Creado por Elisabeth':'Creat per l’Elisabeth','Comparte la alegría de la Navidad':'Comparteix l’alegria del Nadal','Jugar con mi cartón':'Jugar amb el meu cartró','Números':'Números','SÍ':'SÍ','No, seguir jugando':'No, continuar jugant','Sí, reiniciar partida':'Sí, reiniciar la partida','Empezar una partida nueva':'Començar una partida nova','¿Empezamos de nuevo?':'Tornem a començar?','Cómo usar el bombo':'Com fer servir el bombo','¡Vamos a jugar!':'Som-hi!','Toca el bol para ver la bola en grande y escuchar su frase.':'Toca el bol per veure la bola en gran i sentir-ne la frase.','Crea una sala nueva y abre el bombo al instante.':'Crea una sala nova i obre el bombo de seguida.','Nueva partida':'Partida nova','Partida empezada':'Partida començada','Partidas Creadas':'Partides creades','Entrar al bombo':'Entrar al bombo','Entrar con cartón':'Entrar amb cartró','Correo electrónico':'Correu electrònic','Contraseña':'Contrasenya','Ya tengo cuenta · Entrar':'Ja tinc un compte · Entrar','Crear nuevo Administrador':'Crear un administrador nou','Entra con tu cuenta o crea un nuevo Administrador al instante.':'Entra amb el teu compte o crea un administrador nou de seguida.','He olvidado mi contraseña':'He oblidat la contrasenya','Nombre':'Nom','Apellidos':'Cognoms','Crear cuenta':'Crear un compte','Recuperar contraseña':'Recuperar la contrasenya','Entrar al panel de Administrador':'Entrar al panell d’administració','El correo o la contraseña no son correctos.':'El correu o la contrasenya no són correctes.','Firebase ha denegado el acceso a esta partida. Comprueba el código y pide a la administradora que publique las reglas definitivas de Firestore y tenga activado el acceso anónimo para jugadores. Los administradores entran con su correo y contraseña.':'Firebase ha denegat l’accés a aquesta partida. Comprova el codi i demana a l’administradora que publiqui les regles definitives de Firestore i mantingui activat l’accés anònim per als jugadors. Els administradors entren amb el seu correu i contrasenya.','Toca para parar':'Toca per aturar','Reproducir Pruna':'Reproduir la Pruna','Parar Pruna':'Aturar la Pruna','Administración general':'Administració general','Entrar igualmente a ':'Entrar igualment a ','Volver a la portada de bienvenida':'Tornar a la portada','Tu momento de suerte':'El teu moment de sort','Dos toques para marcar · Un toque para retirar':'Dos tocs per marcar · Un toc per treure','Personaliza tus cartones':'Personalitza els teus cartons','Aceptar y volver':'Acceptar i tornar','Color del cartón':'Color del cartró','Color de las fichas':'Color de les fitxes','A juego con el cartón':'Del mateix color que el cartró','Transparente':'Transparent','Personalizado':'Personalitzat','Ver jugadores':'Veure els jugadors','Participantes':'Participants','Sacar una bola':'Treure una bola','Descubre el número.':'Descobreix el número.','Colócala en el tablero.':'Col·loca-la al tauler.','No hay conexión con Firebase. Inténtalo de nuevo cuando vuelva Internet.':'No hi ha connexió amb Firebase. Torna-ho a provar quan torni Internet.','No existe una partida con ese código.':'No hi ha cap partida amb aquest codi.','Escribe el código de la partida.':'Escriu el codi de la partida.','Activa la voz y comprueba que haya una voz española en este dispositivo.':'Activa la veu i comprova que hi hagi una veu catalana al dispositiu.','Escuchar música':'Escoltar música','Manual de los jugadores':'Manual dels jugadors','Jugar con 1 cartón':'Jugar amb 1 cartró','Jugar con 2 cartones':'Jugar amb 2 cartons','Jugar con 3 cartones':'Jugar amb 3 cartons','Elegir al azar':'Triar a l’atzar','Volver a entrar en ':'Tornar a entrar a ','Olvidar sala':'Oblidar la sala'
   },
   en:{
    '🔑 Ya tengo cuenta · Entrar':'🔑 I already have an account · Sign in','✨ Crear nuevo Administrador':'✨ Create a new administrator','✉️ Correo electrónico':'✉️ Email address','🔒 Contraseña (mín. 6 caracteres)':'🔒 Password (at least 6 characters)','🔑 Entrar al panel de Administrador':'🔑 Open administrator panel','He olvidado mi contraseña':'I forgot my password','Modo de acceso de administrador':'Administrator sign-in','Entra con tu cuenta o crea un nuevo Administrador al instante.':'Sign in or create a new administrator account.','Bola de nieve: 1 toque luz, 2 toques mucha luz, 3 toques cobra vida y sale el gnomo de la puerta; desliza para nevar':'Snow globe: 1 tap lights it, 2 taps brighten it, 3 taps bring it to life and the elf comes out; swipe to make it snow','✦ 1 toque: luz · 2: mucha luz · 3: cobra vida ✦':'✦ 1 tap: light · 2: brighter · 3: comes alive ✦','ACCESO Y CREACIÓN DE ADMINISTRADORES':'ADMINISTRATOR SIGN IN AND REGISTRATION','Idioma / Language / Llengua':'Language / Idioma / Llengua',
    'Pruna bailando':'Pruna dancing','⏸ Parar Pruna':'⏸ Stop Pruna','Toca el vídeo para ampliarlo':'Tap the video to enlarge it','Toca a Pruna para reproducir o parar · Desliza para descubrir más':'Tap Pruna to play or pause · Swipe to discover more','Páginas de bienvenida':'Welcome slides','Ver Pruna':'View Pruna','Ver Bola de nieve':'View Snow Globe','Ver Duende':'View Elf','🎟 Ir a cartón':'🎟 Go to card','🎟 Elegir mi cartón y jugar':'🎟 Choose my card and play','🔊 Números':'🔊 Numbers','🔇 Números':'🔇 Numbers','Cerrar sesión':'Sign out','Volver al bombo':'Back to the drum','← Volver a la portada':'← Back to home','Volver a la portada de bienvenida':'Back to the welcome screen','Toca a Pruna para reproducir o parar':'Tap Pruna to play or pause','Toca a Pruna para volver a verla':'Tap Pruna to watch again','🎉 ¡Sale confeti y el duende baila en todos los móviles!':'🎉 Confetti and the dancing elf appear on everyone’s phone!','🏆 ¡BINGO! Se para la partida y sale confeti para todos':'🏆 BINGO! The game pauses and everyone sees confetti','🎺 ¡Ohhh! Música de decepción cuando es falsa alarma':'🎺 Ohhh! Play the false-alarm music','Manual 1 · Cómo Jugar':'Manual 1 · How to Play','👆 1 toque: Baila con música':'👆 1 tap: Dance with music','👆 1 toque: Luz cálida':'👆 1 tap: Warm light','👆👆👆 3 toques: ¡Sale el gnomo!':'👆👆👆 3 taps: The gnome appears!','👆 Tócala para agrandar':'👆 Tap to enlarge','Creado por ':'Created by ','Creado por Elisabeth · V16':'Created by Elisabeth · V16','Árbol de Navidad artesanal con adornos rojos y luces doradas':'Handmade Christmas tree with red ornaments and golden lights','Idioma / Language / Llengua':'Language / Idioma / Llengua',
    'EL BINGO DE ELISABETH':'ELISABETH’S BINGO','Un poquito de magia…':'A little bit of magic…','Seguir ':'Continue ','La Navidad':'Christmas','se juega ':'is best played ','juntos.':'together.','UNA TRADICIÓN · UN POQUITO DE MAGIA':'A TRADITION · A LITTLE BIT OF MAGIC','Entrar a jugar':'Join the game','Administrador':'Administrator','JUGAR CON MI CARTÓN':'PLAY WITH MY CARD','Tu nombre':'Your name','Código de la partida':'Game code','Elegir mi cartón y jugar':'Choose my card and play','Volver a la portada':'Back to home','Volver a entrar':'Rejoin','Olvidar sala':'Forget room','Última sesión guardada:':'Last saved session:','Elige jugar con 1, 2 o 3 cartones.':'Choose to play with 1, 2 or 3 cards.','¿Con cuántos cartones quieres jugar?':'How many cards would you like to play with?','Seleccionados':'Selected','Aceptar y jugar':'Confirm and play','Elegir ':'Choose ','al azar y jugar':'randomly and play','Ver los ':'View the ','cartones':'cards','Cartón':'Card','cartón':'card','cartones':'cards','marcados':'marked','Control de jugadores en la sala':'Room player control','Control de jugadores':'Player control','Jugadores de la partida':'Game players','Ver ':'View ','Sacar / Borrar':'Remove / Delete','Borrar':'Delete','Sin jugadores todavía.':'No players yet.','Ahora mismo no hay ningún jugador dentro de la sala.':'There are no players in the room right now.','Cerrar ×':'Close ×','Sorteo en pausa':'Draw paused','Comprobar cartón':'Check card','¡Felicidades, ':'Congratulations, ','¡LÍNEA!':'LINE!','¡BINGO!':'BINGO!','¡PREMIO CONFIRMADO!':'PRIZE CONFIRMED!','¡Seguir jugando!':'Keep playing!','Configuración':'Settings','Sonido de la app':'App sound','Música navideña':'Christmas music','Cantar los números':'Call the numbers','Frases de los números':'Number phrases','Color y fichas':'Colour and counters','Pantalla completa':'Full screen','Reducir':'Exit full screen','Volver al bombo':'Back to the drum','Escuchar música':'Play music','Parar música':'Stop music','Créditos musicales':'Music credits','Creado por Elisabeth':'Created by Elisabeth','Comparte la alegría de la Navidad':'Share the joy of Christmas','Jugar con mi cartón':'Play with my card','Números':'Numbers','No, seguir jugando':'No, keep playing','Sí, reiniciar partida':'Yes, restart game','Empezar una partida nueva':'Start a new game','¿Empezamos de nuevo?':'Start over?','Cómo usar el bombo':'How to use the drum','¡Vamos a jugar!':'Let’s play!','Toca el bol para ver la bola en grande y escuchar su frase.':'Tap the bowl to see the ball enlarged and hear its phrase.','Crea una sala nueva y abre el bombo al instante.':'Create a new room and open the drum right away.','Nueva partida':'New game','Partida empezada':'Game in progress','Partidas Creadas':'Created games','Entrar al bombo':'Open the drum','Entrar con cartón':'Join with a card','Correo electrónico':'Email','Contraseña':'Password','Ya tengo cuenta · Entrar':'I already have an account · Sign in','Crear nuevo Administrador':'Create a new administrator','Entra con tu cuenta o crea un nuevo Administrador al instante.':'Sign in or create a new administrator account.','He olvidado mi contraseña':'I forgot my password','Nombre':'First name','Apellidos':'Last name','Crear cuenta':'Create account','Recuperar contraseña':'Reset password','Entrar al panel de Administrador':'Open administrator panel','El correo o la contraseña no son correctos.':'The email or password is incorrect.','Firebase ha denegado el acceso a esta partida. Comprueba el código y pide a la administradora que publique las reglas definitivas de Firestore y tenga activado el acceso anónimo para jugadores. Los administradores entran con su correo y contraseña.':'Firebase denied access to this game. Check the code and ask the administrator to publish the final Firestore rules and keep anonymous sign-in enabled for players. Administrators sign in with email and password.','Toca para parar':'Tap to stop','Reproducir Pruna':'Play Pruna','Parar Pruna':'Stop Pruna','Administración general':'Global administration','Entrar igualmente a ':'Join anyway: ','Tu momento de suerte':'Your lucky moment','Dos toques para marcar · Un toque para retirar':'Double-tap to mark · Single-tap to unmark','Personaliza tus cartones':'Customize your cards','Aceptar y volver':'Save and return','Color del cartón':'Card colour','Color de las fichas':'Counter colour','A juego con el cartón':'Match the card','Transparente':'Transparent','Personalizado':'Custom','Ver jugadores':'View players','Participantes':'Players','Sacar una bola':'Draw a ball','Descubre el número.':'Reveal the number.','Colócala en el tablero.':'Place it on the board.','No hay conexión con Firebase. Inténtalo de nuevo cuando vuelva Internet.':'No connection to Firebase. Try again when the connection returns.','No existe una partida con ese código.':'No game exists with that code.','Escribe el código de la partida.':'Enter the game code.','Activa la voz y comprueba que haya una voz española en este dispositivo.':'Enable speech and check that an English voice is available on this device.','Manual de los jugadores':'Player guide','Jugar con 1 cartón':'Play with 1 card','Jugar con 2 cartones':'Play with 2 cards','Jugar con 3 cartones':'Play with 3 cards','Elegir al azar':'Choose randomly','Volver a entrar en ':'Rejoin '
   }
  };
  const EXTRA_I18N={
   ca:{
    'Preparando el bingo…':'Preparant el bingo…','Cuenta de administrador pausada':'Compte d’administrador pausat','La administración ha retirado tu inscripción y ha liberado tu cartón.':'L’administració ha retirat la teva inscripció i ha alliberat el teu cartró.','Tu participación ha terminado':'La teva participació s’ha acabat','Partida retirada':'Partida retirada','Esta partida ya no está activa.':'Aquesta partida ja no està activa.','Escribe el código de cualquier sala activa para abrir el bombo o tu cartón.':'Escriu el codi de qualsevol sala activa per obrir el bombo o el teu cartró.','👤 Tu nombre':'👤 El teu nom','🔑 Código de la partida':'🔑 Codi de la partida','Entrando…':'Entrant…','Creando…':'Creant…','Crear partida nueva':'Crear una partida nova','Partida empezada':'Partida començada','Conectando…':'Connectant…','Sin conexión':'Sense connexió','Conectando con la partida…':'Connectant amb la partida…','¡Invitación copiada!':'Invitació copiada!','Como administrador puedes ver quién está dentro y cerrar la sesión de cualquier participante si hace falta.':'Com a administrador pots veure qui hi ha dins i tancar la sessió de qualsevol participant si cal.','Se cerrará su sesión en esta sala y se liberará su cartón y sus fichas.':'Es tancarà la seva sessió en aquesta sala i s’alliberaran el cartró i les fitxes.','ℹ️ Ahora mismo no hay ningún jugador dentro de la sala.':'ℹ️ Ara mateix no hi ha cap jugador a la sala.','Conectando con la partida…':'Connectant amb la partida…','¿Con cuántos cartones quieres jugar?':'Amb quants cartons vols jugar?','Cada jugador y el administrador podéis escoger jugar con ':'Cada jugador i l’administrador podeu triar jugar amb ','1, 2 o 3 cartones':'1, 2 o 3 cartons','Cantidad de cartones':'Quantitat de cartons','Seleccionados (':'Seleccionats (','Elige abajo o pulsa el botón verde':'Tria a sota o prem el botó verd','🎲 Elegir ':'🎲 Triar ',' al azar y jugar':' a l’atzar i jugar','🎟 Cambiar cantidad o elegir cartones (1, 2 o 3)':'🎟 Canviar la quantitat o triar cartons (1, 2 o 3)','Comprobar premio':'Comprovar el premi','Jugando con ':'Jugant amb ','✨ ¡Todos los números marcados en este cartón han salido del bombo!':'✨ Tots els números marcats en aquest cartró han sortit del bombo!','Este cartón todavía no completa una línea cantada':'Aquest cartró encara no completa cap línia cantada','⚠️ Este cartón todavía no completa una línea cantada':'⚠️ Aquest cartró encara no completa cap línia cantada','✅ ¡ESTE CARTÓN TIENE BINGO VÁLIDO!':'✅ AQUEST CARTRÓ TÉ UN BINGO VÀLID!','⚠️ Este cartón todavía no completa los 15 números cantados':'⚠️ Aquest cartró encara no completa els 15 números cantats','Verde abeto':'Verd avet','Azul océano':'Blau oceà','Oro cálido':'Or càlid','Turquesa':'Turquesa','Rosa peonía':'Rosa peònia','Azul cielo':'Blau cel','Amarillo sol':'Groc sol','Naranja mandarina':'Taronja mandarina','Marrón canela':'Marró canyella','Blanco puro':'Blanc pur','Créditos musicales':'Crèdits musicals','Jingle Bells · Kevin MacLeod (incompetech.com). ':'Jingle Bells · Kevin MacLeod (incompetech.com). ',' . Grabación sin modificar, reproducida en bucle.':'. Enregistrament sense modificar, reproduït en bucle.','Gira el móvil en horizontal para ver solo el cartón en grande.':'Gira el mòbil en horitzontal per veure només el cartró en gran.','No hay una voz española disponible en este dispositivo. Puedes leer el número en la bola.':'No hi ha cap veu catalana disponible en aquest dispositiu. Pots llegir el número a la bola.','No hay una voz española disponible en este dispositivo. Puedes leer el número en la bola.':'No hi ha cap veu catalana disponible en aquest dispositiu. Pots llegir el número a la bola.','Tu cartón está fijado hasta la próxima partida.':'El teu cartró queda fixat fins a la partida següent.','Otra persona acaba de elegir este cartón. Escoge otro.':'Una altra persona acaba de triar aquest cartró. Tria’n un altre.','Hay un aviso pendiente. Compruébalo antes de continuar.':'Hi ha un avís pendent. Comprova’l abans de continuar.','Ya hay una comprobación en curso. Espera un momento.':'Ja hi ha una comprovació en curs. Espera un moment.','Elige primero un cartón.':'Tria primer un cartró.','No existe una partida activa con ese código.':'No hi ha cap partida activa amb aquest codi.','✨ Partida nueva creada. Comparte el código para que entren los jugadores.':'✨ S’ha creat una partida nova. Comparteix-ne el codi perquè hi entrin els jugadors.','✦ Cartón fijado para esta partida':'✦ Cartró fixat per a aquesta partida','↶ Cambiar cartón':'↶ Canviar de cartró','Gira el móvil para ver solo tu cartón en grande.':'Gira el mòbil per veure només el teu cartró en gran.','Dos toques para marcar · Un toque para quitar · Jugando con ':'Dos tocs per marcar · Un toc per treure · Jugant amb ','Mi cartón':'El meu cartró','Personaliza tus cartones':'Personalitza els teus cartons','Color a medida ':'Color personalitzat ','Color de las fichas':'Color de les fitxes','Transparentes':'Transparents','Otro color de ficha ':'Un altre color de fitxa ','Cantidad de cartones (1, 2 o 3)':'Quantitat de cartons (1, 2 o 3)','Actualmente juegas con ':'Ara jugues amb ','¡No pasa nada, sigue girando el bombo y continúa la partida!':'No passa res! Continua fent girar el bombo i segueix la partida!','🎺 Oír Falsa Alarma':'🎺 Escoltar Falsa Alarma','Cómo jugar':'Com s’hi juga','Número':'Número','Tu frase':'La teva frase','Escribe lo que dirá esta bola':'Escriu què dirà aquesta bola','La voz de tu bingo':'La veu del teu bingo','Una frase para cada bola. Cámbiala por un dicho, una broma o una dedicatoria.':'Una frase per a cada bola. Canvia-la per una dita, una broma o una dedicatòria.','Se guarda en este dispositivo. Si dejas la frase vacía, solo se dirá el número.':'Es desa en aquest dispositiu. Si deixes la frase en blanc, només es dirà el número.','Volver a configuración':'Tornar a la configuració','El correo ya tiene una cuenta. Pulsa Ya tengo cuenta para entrar o recuperar tu contraseña.':'Aquest correu ja té un compte. Prem Ja tinc un compte per entrar o recuperar la contrasenya.','Escoge una contraseña de al menos seis caracteres.':'Tria una contrasenya d’almenys sis caràcters.','Revisa el correo electrónico.':'Revisa el correu electrònic.','¡Feliz Navidad!':'Bon Nadal!','¡Ho, ho, ho!… ¡Feliz Navidad!':'Ho, ho, ho!… Bon Nadal!','Anónimo':'Anònim','Invitación':'Invitació','Cerrar sesión':'Tancar la sessió','Cerrar número repetido':'Tancar el número repetit','Toca la bola para volver':'Toca la bola per tornar','Toca la bola para colocarla en el tablero':'Toca la bola per col·locar-la al tauler','90 números, un montón de recuerdos.':'90 números i un munt de records.','Toca para devolver las bolas al bombo':'Toca per tornar les boles al bombo','y empezar otra partida':'i començar una altra partida','Se borrarán los números cantados y las fichas de los cartones.':'S’esborraran els números cantats i les fitxes dels cartons.','No, seguir jugando':'No, continuar jugant','Sí, empezar de nuevo':'Sí, tornar a començar','Conservar mi partida':'Conservar la meva partida','Gira la manivela o el bombo.':'Gira la maneta o el bombo.','Descubre el número.':'Descobreix el número.','Colócala en el tablero.':'Col·loca-la al tauler.','Toca la manivela dorada (o el bombo) y verás girar la manivela y las bolas y caer una bola al bol.':'Toca la maneta daurada (o el bombo) i veuràs girar la maneta i les boles, fins que una caigui al bol.','Toca la bola grande y viajará a su casilla.':'Toca la bola gran i anirà a la seva casella.','Tu momento de suerte':'El teu moment de sort','⭐ Volver al bombo':'⭐ Tornar al bombo','Cerrando sesión…':'Tancant la sessió…','Sal de la partida':'Surt de la partida','Sí, sacar de la sala':'Sí, treure de la sala','Eligiendo cartón':'Triant cartró','Acceso y creación de administradores':'Accés i creació d’administradors','ACCESO Y CREACIÓN DE ADMINISTRADORES':'ACCÉS I CREACIÓ D’ADMINISTRADORS','Modo de acceso de administrador':'Mode d’accés d’administrador','Correo electrónico':'Correu electrònic','Contraseña (mín. 6 caracteres)':'Contrasenya (mín. 6 caràcters)','✨ Crear Administrador y entrar':'✨ Crear un administrador i entrar','🔑 Entrar al panel de Administrador':'🔑 Entrar al tauler d’administració','Si el correo corresponde a una cuenta, recibirás las instrucciones para recuperar la contraseña.':'Si el correu correspon a un compte, rebràs les instruccions per recuperar la contrasenya.','Sorteo en pausa':'Sorteig en pausa','Partida retirada':'Partida retirada','Preparando el bingo…':'Preparant el bingo…','Abrir configuración':'Obrir la configuració','Repetir número':'Repetir el número','Toca para reproducir o parar':'Toca per reproduir o aturar'},
   en:{
    'Preparando el bingo…':'Preparing bingo…','Cuenta de administrador pausada':'Administrator account paused','La administración ha retirado tu inscripción y ha liberado tu cartón.':'The administrator removed your registration and released your card.','Tu participación ha terminado':'Your participation has ended','Partida retirada':'Game removed','Esta partida ya no está activa.':'This game is no longer active.','Escribe el código de cualquier sala activa para abrir el bombo o tu cartón.':'Enter the code of any active room to open the drum or your card.','👤 Tu nombre':'👤 Your name','🔑 Código de la partida':'🔑 Game code','Entrando…':'Joining…','Creando…':'Creating…','Crear partida nueva':'Create a new game','Partida empezada':'Game in progress','Conectando…':'Connecting…','Sin conexión':'Offline','Conectando con la partida…':'Connecting to the game…','¡Invitación copiada!':'Invitation copied!','Como administrador puedes ver quién está dentro y cerrar la sesión de cualquier participante si hace falta.':'As the administrator, you can see who has joined and end any participant’s session if needed.','Se cerrará su sesión en esta sala y se liberará su cartón y sus fichas.':'Their session in this room will end and their card and counters will be released.','ℹ️ Ahora mismo no hay ningún jugador dentro de la sala.':'ℹ️ There are no players in the room right now.','Cada jugador y el administrador podéis escoger jugar con ':'Each player and the administrator can choose to play with ','1, 2 o 3 cartones':'1, 2 or 3 cards','Cantidad de cartones':'Number of cards','Seleccionados (':'Selected (','Elige abajo o pulsa el botón verde':'Choose below or tap the green button','🎲 Elegir ':'🎲 Choose ',' al azar y jugar':' randomly and play','🎟 Cambiar cantidad o elegir cartones (1, 2 o 3)':'🎟 Change the number or choose cards (1, 2 or 3)','Comprobar premio':'Check prize','Jugando con ':'Playing with ','✨ ¡Todos los números marcados en este cartón han salido del bombo!':'✨ All the numbers marked on this card have been drawn!','Este cartón todavía no completa una línea cantada':'This card does not yet complete a called line','⚠️ Este cartón todavía no completa una línea cantada':'⚠️ This card does not yet complete a called line','✅ ¡ESTE CARTÓN TIENE BINGO VÁLIDO!':'✅ THIS CARD HAS A VALID BINGO!','⚠️ Este cartón todavía no completa los 15 números cantados':'⚠️ This card does not yet contain all 15 called numbers','Verde abeto':'Fir green','Azul océano':'Ocean blue','Oro cálido':'Warm gold','Turquesa':'Turquoise','Rosa peonía':'Peony pink','Azul cielo':'Sky blue','Amarillo sol':'Sunshine yellow','Naranja mandarina':'Tangerine orange','Marrón canela':'Cinnamon brown','Blanco puro':'Pure white','Créditos musicales':'Music credits','Jingle Bells · Kevin MacLeod (incompetech.com). ': 'Jingle Bells · Kevin MacLeod (incompetech.com). ',' . Grabación sin modificar, reproducida en bucle.':'. Unmodified recording, played on a loop.','Gira el móvil en horizontal para ver solo el cartón en grande.':'Turn your phone sideways to see only your card enlarged.','No hay una voz española disponible en este dispositivo. Puedes leer el número en la bola.':'No English voice is available on this device. You can read the number on the ball.','Tu cartón está fijado hasta la próxima partida.':'Your card is locked until the next game.','Otra persona acaba de elegir este cartón. Escoge otro.':'Someone else just chose this card. Choose another.','Hay un aviso pendiente. Compruébalo antes de continuar.':'There is a pending claim. Check it before continuing.','Ya hay una comprobación en curso. Espera un momento.':'A check is already in progress. Please wait.','Elige primero un cartón.':'Choose a card first.','No existe una partida activa con ese código.':'There is no active game with that code.','✨ Partida nueva creada. Comparte el código para que entren los jugadores.':'✨ New game created. Share the code so players can join.','✦ Cartón fijado para esta partida':'✦ Card locked for this game','↶ Cambiar cartón':'↶ Change card','Gira el móvil para ver solo tu cartón en grande.':'Turn your phone sideways to see only your card enlarged.','Dos toques para marcar · Un toque para quitar · Jugando con ':'Double-tap to mark · Single-tap to remove · Playing with ','Mi cartón':'My card','Personaliza tus cartones':'Customize your cards','Color a medida ':'Custom colour ','Color de las fichas':'Counter colour','A juego con el cartón':'Match the card','Transparentes':'Transparent','Otro color de ficha ':'Another counter colour ','Cantidad de cartones (1, 2 o 3)':'Number of cards (1, 2 or 3)','Actualmente juegas con ':'You are currently playing with ','¡No pasa nada, sigue girando el bombo y continúa la partida!':'That’s all right. Keep spinning the drum and continue the game!','🎺 Oír Falsa Alarma':'🎺 Play False Alarm','Cómo jugar':'How to play','Número':'Number','Tu frase':'Your phrase','Escribe lo que dirá esta bola':'Write what this ball will say','La voz de tu bingo':'Your bingo voice','Una frase para cada bola. Cámbiala por un dicho, una broma o una dedicatoria.':'A phrase for every ball. Replace it with a saying, a joke or a dedication.','Se guarda en este dispositivo. Si dejas la frase vacía, solo se dirá el número.':'Saved on this device. Leave the phrase blank to say only the number.','Volver a configuración':'Back to settings','El correo ya tiene una cuenta. Pulsa Ya tengo cuenta para entrar o recuperar tu contraseña.':'This email already has an account. Choose I already have an account to sign in or reset your password.','Escoge una contraseña de al menos seis caracteres.':'Choose a password of at least six characters.','Revisa el correo electrónico.':'Check your email.','¡Feliz Navidad!':'Merry Christmas!','¡Ho, ho, ho!… ¡Feliz Navidad!':'Ho, ho, ho!… Merry Christmas!','Anónimo':'Anonymous','Invitación':'Invitation','Cerrar sesión':'Sign out','Cerrar número repetido':'Close repeated number','Toca la bola para volver':'Tap the ball to return','Toca la bola para colocarla en el tablero':'Tap the ball to place it on the board','90 números, un montón de recuerdos.':'90 numbers, a lifetime of memories.','Toca para devolver las bolas al bombo':'Tap to return the balls to the drum','y empezar otra partida':'and start another game','Se borrarán los números cantados y las fichas de los cartones.':'Called numbers and card counters will be cleared.','No, seguir jugando':'No, keep playing','Sí, empezar de nuevo':'Yes, start over','Conservar mi partida':'Keep my game','Gira la manivela o el bombo.':'Turn the handle or the drum.','Descubre el número.':'Reveal the number.','Colócala en el tablero.':'Place it on the board.','Toca la manivela dorada (o el bombo) y verás girar la manivela y las bolas y caer una bola al bol.':'Tap the golden handle (or the drum) to spin the handle and balls until one falls into the bowl.','Toca la bola grande y viajará a su casilla.':'Tap the large ball and it will move to its square.','Tu momento de suerte':'Your lucky moment','Cerrando sesión…':'Signing out…','Sal de la partida':'Leave the game','Sí, sacar de la sala':'Yes, remove from room','Eligiendo cartón':'Choosing a card','ACCESO Y CREACIÓN DE ADMINISTRADORES':'ADMINISTRATOR SIGN IN AND REGISTRATION','Modo de acceso de administrador':'Administrator sign-in','Correo electrónico':'Email address','Contraseña (mín. 6 caracteres)':'Password (at least 6 characters)','✨ Crear Administrador y entrar':'✨ Create administrator account and sign in','🔑 Entrar al panel de Administrador':'🔑 Open administrator panel','Si el correo corresponde a una cuenta, recibirás las instrucciones para recuperar la contraseña.':'If an account exists for this email, you will receive password reset instructions.','Abrir configuración':'Open settings','Repetir número':'Repeat number','Toca para reproducir o parar':'Tap to play or pause'}
  };
  const CONTENT_I18N={
   ca:{
    'Todo visual: mira las fotos y toca para probar.':'Tot és visual: mira les fotos i toca per provar-ho.','1. Portada mágica':'1. Portada màgica','1. Qué esconde la portada':'1. Què amaga la portada','Desliza a izquierda o derecha para ver al Duende, la Bola y a Pruna.':'Llisca cap a l’esquerra o la dreta per veure el follet, la bola i la Pruna.','Pulsa el botón rojo «Entrar a jugar» para ir directo a tu cartón.':'Prem el botó vermell «Entrar a jugar» per anar directament al teu cartró.','2. Entrar a jugar':'2. Entrar a jugar','2. Entrar a una partida en 3 pasos':'2. Entrar en una partida en 3 passos','Pulsa el botón rojo':'Prem el botó vermell','Pon tu nombre y el código':'Escriu el teu nom i el codi','Juega con 1, 2 o 3 cartones a la vez':'Juga amb 1, 2 o 3 cartons alhora','Puedes elegir jugar con 1 cartón, con 2 cartones o con 3 cartones a la vez (o elegirlos al azar).':'Pots triar jugar amb 1, 2 o 3 cartons alhora (o seleccionar-los a l’atzar).','Si entras desde un enlace de WhatsApp, el código ya sale puesto solo; o escribe el código de cualquier partida empezada.':'Si entres des d’un enllaç de WhatsApp, el codi ja apareix escrit; també pots escriure el codi de qualsevol partida començada.','3. Tu cartón y móvil':'3. El teu cartró i el mòbil','3. Marcar números y girar el móvil':'3. Marcar números i girar el mòbil','👆👆 Dos toques en un número = Poner ficha.':'👆👆 Dos tocs en un número = posar-hi una fitxa.','👆 Un toque en un número marcado = Quitar ficha.':'👆 Un toc en un número marcat = treure’n la fitxa.','📲 Gira el móvil en horizontal (apaisado) = Se ocultan las barras y ves SOLO tu cartón gigante.':'📲 Gira el mòbil en horitzontal = s’amaguen les barres i veus només el teu cartró en gran.','4. ¡Línea!, ¡Bingo! y Salir':'4. Línia, bingo i sortir','4. Cantar premio y salir de la partida':'4. Reclamar un premi i sortir de la partida','¡LÍNEA! y ¡BINGO! siempre activos':'LÍNIA i BINGO sempre disponibles','Púlsalos cuando creas que tienes premio: ':'Prem-los quan creguis que tens premi: ','se para la partida, sale confeti y baila el duende en TODOS los móviles':'la partida s’atura, hi ha confeti i el follet balla a TOTS els mòbils',' (incluido el administrador).':' (també al dispositiu de l’administrador).','Comprobación en directo':'Comprovació en directe','Si es válido: ':'Si és vàlid: ','¡Fiesta y premio!':'Festa i premi!','Si te faltaba algún número: suena la ':'Si et faltava algun número, sona la ','música de decepción (🎺 wah-wah)':'música de decepció (🎺 wah-wah)',' y sigue el juego.':' i la partida continua.','🚪 Volver al inicio':'🚪 Tornar a l’inici','Cuando quieras salir, pulsa ':'Quan vulguis sortir, prem ','«🚪 Salir de la partida»':'«🚪 Sortir de la partida»',' arriba o abajo de tu cartón para volver a la portada.':' a sobre o a sota del cartró per tornar a la portada.','Guía visual para crear partidas, girar el bombo y comprobar cartones.':'Guia visual per crear partides, fer girar el bombo i comprovar cartons.','Crea un código nuevo automáticamente y abre el bombo al instante.':'Crea un codi nou automàticament i obre el bombo de seguida.','Entra en cualquier partida ya creada escribiendo el código o con 1 toque desde tu lista.':'Entra en qualsevol partida creada escrivint-ne el codi o amb un toc des de la llista.','Todo está en la pantalla de Administrador, limpio y directo.':'Tot és a la pantalla d’administració, clara i directa.','3. Barra superior: Invitar y jugar con tu cartón':'3. Barra superior: convidar i jugar amb el teu cartró','Copia el enlace para WhatsApp':'Copia l’enllaç per enviar-lo per WhatsApp','Mira quién está dentro y su cartón':'Mira qui hi ha a la sala i el seu cartró','Juega con tu propio cartón sin salir':'Juga amb el teu cartró sense sortir','Vuelve al inicio cuando acabes':'Torna a l’inici quan acabis','4. Comprobar ¡Línea! y ¡Bingo!':'4. Comprovar línia i bingo','1. Cuando alguien pulsa ¡LÍNEA! o ¡BINGO!:':'1. Quan algú prem LÍNIA o BINGO:','Se para el sorteo y en ':'El sorteig s’atura i a ','todos los aparatos (incluido el tuyo)':'tots els dispositius (també el teu)',' sale confeti y el duende bailando con el botón ':' apareixen confeti i el follet ballant, amb el botó ','«🔍 Comprobar cartón»':'«🔍 Comprovar cartró»','2. En la ventana de comprobación ves al instante:':'2. A la finestra de comprovació veus de seguida:','✓ Marcados que SÍ han salido':'✓ Números marcats que SÍ han sortit','✗ Marcados que AÚN NO han salido':'✗ Números marcats que ENCARA NO han sortit','✅ Dar por bueno (Probar fanfarria)':'✅ Donar per bo (provar la fanfàrria)','❌ Dar por malo y continuar (🎺 Oír decepción)':'❌ Donar per dolent i continuar (🎺 escoltar la decepció)','Manual 2 · Administrador':'Manual 2 · Administrador','Control total de todas las partidas, gestión de Administradores y secretos del bingo.':'Control total de les partides, gestió d’administradors i secrets del bingo.','1. Entrar a Partidas':'1. Entrar a les partides','1. Tus Partidas Creadas: Entrar con 1 toque':'1. Les teves partides: entrar-hi amb un toc','2. Administradora Master vs Administradores':'2. Administradora Master i administradors','Tú (Elisabeth) tienes el rango ':'Tu (Elisabeth) tens el rang ','controlas todas las salas, todos los jugadores, todos los administradores y este Manual 3.':'i controles totes les sales, els jugadors, els administradors i aquest Manual 3.','Tantos Administradores como quieras':'Tants administradors com vulguis','Cualquier persona puede crear su cuenta en «✨ Crear nuevo Administrador» y dirigir partidas al instante. Desde tu panel Master puedes ':'Qualsevol persona pot crear un compte a «✨ Crear un administrador nou» i dirigir partides. Des del teu tauler Master pots ','Pausar':'Pausar','Reactivar':'Reactivar','Dar de baja':'Donar de baixa','Este Manual 3 y el botón «👑 Admin Master» solo te aparecen a ti (Elisabeth).':'Aquest Manual 3 i el botó «👑 Admin Master» només et surten a tu (Elisabeth).','3. Las 90 Frases':'3. Les 90 frases','3. Personalizar las frases de las 90 bolas':'3. Personalitzar les frases de les 90 boles','Rueda de arriba':'Menú de dalt','Abre Configuración en el bombo':'Obre la configuració del bombo','Elige del 1 al 90':'Tria un número de l’1 al 90','Escuchar y Guardar':'Escoltar i desar','Dedicatorias a medida':'Dedicatoris personalitzats','Puedes poner bromas o dedicatorias familiares en cualquier número y recuperar la frase original cuando quieras.':'Pots afegir bromes o dedicatòries familiars a qualsevol número i recuperar la frase original quan vulguis.','↑ Índice':'↑ Índex','↑ Volver al índice':'↑ Tornar a l’índex','Creado con cariño por Elisabeth · V16':'Creat amb afecte per l’Elisabeth · V16','✏ Modificar mi nombre y apellidos':'✏ Modificar el meu nom i cognoms','✏ Modificar nombre y apellidos':'✏ Modificar el nom i els cognoms','✓ Datos guardados correctamente.':'✓ Dades desades correctament.','Ej: Elisabeth':'Ex.: Elisabeth','Ej: Altarriba':'Ex.: Altarriba','Guardando…':'Desant…','Guardar mis datos':'Desar les meves dades','Preparada':'A punt','En juego':'En joc','Retirada':'Retirada','Creada por: ':'Creada per: ',' jugadores':' jugadors',' bolas':' boles','🎱 Entrar al bombo':'🎱 Entrar al bombo','🎟 Entrar con cartón':'🎟 Entrar amb cartró','👥 Ver jugadores (':'👥 Veure jugadors (','No hay partidas activas en este momento.':'Ara mateix no hi ha partides actives.','Ver partidas retiradas (':'Veure partides retirades (','Restaurar partida':'Restaurar la partida','🗑 Borrar partida':'🗑 Esborrar la partida','👑 Panel de Administradora Master (Elisabeth) y Manual 3':'👑 Tauler de l’Administradora Master (Elisabeth) i Manual 3','👑 ADMINISTRADORA MASTER · CONTROL TOTAL':'👑 ADMINISTRADORA MASTER · CONTROL TOTAL','✦ Diferencia Master: Puedes controlar todas las partidas, gestionar a todos los administradores y ver el Manual 3.':'✦ Com a Master pots controlar totes les partides, gestionar els administradors i veure el Manual 3.','Administradores activos':'Administradors actius','Otros administradores':'Altres administradors','Partidas activas':'Partides actives','Todavía no hay otros administradores registrados. Pueden crear su cuenta pulsando «✨ Crear cuenta de Administrador nueva» al entrar en Administrador.':'Encara no hi ha altres administradors registrats. Poden crear un compte prement «✨ Crear un compte d’administrador nou» a l’entrada d’administració.','Cuenta de administrador pausada':'Compte d’administrador pausat','La Administradora Master (Elisabeth) ha pausado o dado de baja temporalmente este acceso de administrador.':'L’Administradora Master (Elisabeth) ha pausat o donat de baixa temporalment aquest accés d’administrador.','Creado por Elisabeth':'Creat per l’Elisabeth','Toca a Pruna para reproducir o parar':'Toca la Pruna per reproduir-la o aturar-la','Canta los números':'Canta els números','Versión 15':'Versió 15'
   },
   en:{
    'Todo visual: mira las fotos y toca para probar.':'Everything is visual: look at the pictures and tap to try it.','1. Portada mágica':'1. The magical home screen','1. Qué esconde la portada':'1. What the home screen holds','Desliza a izquierda o derecha para ver al Duende, la Bola y a Pruna.':'Swipe left or right to see the Elf, the Snow Globe and Pruna.','Pulsa el botón rojo «Entrar a jugar» para ir directo a tu cartón.':'Tap the red “Join the game” button to go straight to your card.','2. Entrar a jugar':'2. Join the game','2. Entrar a una partida en 3 pasos':'2. Join a game in 3 steps','Pulsa el botón rojo':'Tap the red button','Pon tu nombre y el código':'Enter your name and the code','Juega con 1, 2 o 3 cartones a la vez':'Play with 1, 2 or 3 cards at once','Puedes elegir jugar con 1 cartón, con 2 cartones o con 3 cartones a la vez (o elegirlos al azar).':'Choose to play with 1, 2 or 3 cards at once, or select cards at random.','Si entras desde un enlace de WhatsApp, el código ya sale puesto solo; o escribe el código de cualquier partida empezada.':'If you open a WhatsApp invitation, the code is filled in for you. You can also enter the code of any game in progress.','3. Tu cartón y móvil':'3. Your card and phone','3. Marcar números y girar el móvil':'3. Mark numbers and rotate your phone','👆👆 Dos toques en un número = Poner ficha.':'👆👆 Double-tap a number to mark it.','👆 Un toque en un número marcado = Quitar ficha.':'👆 Tap a marked number to unmark it.','📲 Gira el móvil en horizontal (apaisado) = Se ocultan las barras y ves SOLO tu cartón gigante.':'📲 Turn your phone sideways to hide the bars and see your card full-screen.','4. ¡Línea!, ¡Bingo! y Salir':'4. Line, bingo and leaving','4. Cantar premio y salir de la partida':'4. Claim a prize and leave the game','¡LÍNEA! y ¡BINGO! siempre activos':'LINE and BINGO are always available','Púlsalos cuando creas que tienes premio: ':'Tap one when you think you have won: ','se para la partida, sale confeti y baila el duende en TODOS los móviles':'the game pauses, confetti appears and the elf dances on EVERY phone',' (incluido el administrador).':' (including the administrator’s device).','Comprobación en directo':'Live check','Si es válido: ':'If it is valid: ','¡Fiesta y premio!':'Celebrate your prize!','Si te faltaba algún número: suena la ':'If you were missing a number, you will hear the ','música de decepción (🎺 wah-wah)':'sad trombone music (🎺 wah-wah)',' y sigue el juego.':' and the game continues.','🚪 Volver al inicio':'🚪 Back to the start','Cuando quieras salir, pulsa ':'When you want to leave, tap ','«🚪 Salir de la partida»':'“🚪 Leave the game”',' arriba o abajo de tu cartón para volver a la portada.':' above or below your card to return home.','Guía visual para crear partidas, girar el bombo y comprobar cartones.':'A visual guide to creating games, spinning the drum and checking cards.','Crea un código nuevo automáticamente y abre el bombo al instante.':'Create a new code automatically and open the drum straight away.','Entra en cualquier partida ya creada escribiendo el código o con 1 toque desde tu lista.':'Join any existing game by entering its code or tapping it in your list.','Todo está en la pantalla de Administrador, limpio y directo.':'Everything is on the clear, simple administrator screen.','3. Barra superior: Invitar y jugar con tu cartón':'3. Top bar: invite players and play with your card','Copia el enlace para WhatsApp':'Copy the link to share on WhatsApp','Mira quién está dentro y su cartón':'See who has joined and view their card','Juega con tu propio cartón sin salir':'Play with your own card without leaving','Vuelve al inicio cuando acabes':'Return home when you finish','4. Comprobar ¡Línea! y ¡Bingo!':'4. Check line and bingo claims','1. Cuando alguien pulsa ¡LÍNEA! o ¡BINGO!:':'1. When someone claims LINE or BINGO:','Se para el sorteo y en ':'The draw pauses and ','todos los aparatos (incluido el tuyo)':'every device (including yours)',' sale confeti y el duende bailando con el botón ':'shows confetti and the dancing elf alongside the ','«🔍 Comprobar cartón»':'“🔍 Check card” button','2. En la ventana de comprobación ves al instante:':'2. The check window immediately shows:','✓ Marcados que SÍ han salido':'✓ Marked numbers that HAVE been called','✗ Marcados que AÚN NO han salido':'✗ Marked numbers that have NOT been called','✅ Dar por bueno (Probar fanfarria)':'✅ Approve (try the fanfare)','❌ Dar por malo y continuar (🎺 Oír decepción)':'❌ Reject and continue (🎺 play the trombone)','Manual 2 · Administrador':'Manual 2 · Administrator','Control total de todas las partidas, gestión de Administradores y secretos del bingo.':'Full control of every game, administrator management and bingo secrets.','1. Entrar a Partidas':'1. Join a game','1. Tus Partidas Creadas: Entrar con 1 toque':'1. Your games: join with one tap','2. Administradora Master vs Administradores':'2. Master administrator and administrators','Tú (Elisabeth) tienes el rango ':'You (Elisabeth) have Master administrator status: ','controlas todas las salas, todos los jugadores, todos los administradores y este Manual 3.':'you control all rooms, players, administrators and this Manual 3.','Tantos Administradores como quieras':'As many administrators as you need','Cualquier persona puede crear su cuenta en «✨ Crear nuevo Administrador» y dirigir partidas al instante. Desde tu panel Master puedes ':'Anyone can create an account using “✨ Create a new administrator” and run games. From your Master panel you can ','Pausar':'Pause','Reactivar':'Reactivate','Dar de baja':'Remove access','Este Manual 3 y el botón «👑 Admin Master» solo te aparecen a ti (Elisabeth).':'Only you (Elisabeth) can see this Manual 3 and the “👑 Master admin” button.','3. Las 90 Frases':'3. The 90 phrases','3. Personalizar las frases de las 90 bolas':'3. Customize the 90 ball phrases','Rueda de arriba':'Top menu','Abre Configuración en el bombo':'Open Settings from the drum','Elige del 1 al 90':'Choose a number from 1 to 90','Escuchar y Guardar':'Listen and save','Dedicatorias a medida':'Custom dedications','Puedes poner bromas o dedicatorias familiares en cualquier número y recuperar la frase original cuando quieras.':'Add jokes or family dedications to any number and restore its original phrase whenever you like.','↑ Índice':'↑ Contents','↑ Volver al índice':'↑ Back to contents','Creado con cariño por Elisabeth · V16':'Made with love by Elisabeth · V16','✏ Modificar mi nombre y apellidos':'✏ Edit my first and last name','✏ Modificar nombre y apellidos':'✏ Edit first and last name','✓ Datos guardados correctamente.':'✓ Details saved.','Ej: Elisabeth':'e.g. Elisabeth','Ej: Altarriba':'e.g. Smith','Guardando…':'Saving…','Guardar mis datos':'Save my details','Preparada':'Ready','En juego':'In progress','Retirada':'Archived','Creada por: ':'Created by: ',' jugadores':' players',' bolas':' balls','🎱 Entrar al bombo':'🎱 Open the drum','🎟 Entrar con cartón':'🎟 Join with a card','👥 Ver jugadores (':'👥 View players (','No hay partidas activas en este momento.':'There are no active games right now.','Ver partidas retiradas (':'View archived games (','Restaurar partida':'Restore game','🗑 Borrar partida':'🗑 Delete game','👑 Panel de Administradora Master (Elisabeth) y Manual 3':'👑 Master administrator panel (Elisabeth) and Manual 3','👑 ADMINISTRADORA MASTER · CONTROL TOTAL':'👑 MASTER ADMINISTRATOR · FULL CONTROL','✦ Diferencia Master: Puedes controlar todas las partidas, gestionar a todos los administradores y ver el Manual 3.':'✦ As Master, you can control every game, manage administrators and view Manual 3.','Administradores activos':'Active administrators','Otros administradores':'Other administrators','Partidas activas':'Active games','Todavía no hay otros administradores registrados. Pueden crear su cuenta pulsando «✨ Crear cuenta de Administrador nueva» al entrar en Administrador.':'There are no other registered administrators yet. They can create an account by choosing “✨ Create new administrator account” on the administrator sign-in screen.','Cuenta de administrador pausada':'Administrator account paused','La Administradora Master (Elisabeth) ha pausado o dado de baja temporalmente este acceso de administrador.':'The Master administrator (Elisabeth) has paused or temporarily removed this administrator’s access.','Creado por Elisabeth':'Created by Elisabeth','Versión 15':'Version 15'
   }
  };
  const MANUAL_I18N={
   ca:{'MANUAL 1 · JUGADORES':'MANUAL 1 · JUGADORS','MANUAL 2 · ADMINISTRADOR':'MANUAL 2 · ADMINISTRADOR','MANUAL 3 · ADMINISTRADORA MASTER (ELISABETH)':'MANUAL 3 · ADMINISTRADORA MASTER (ELISABETH)','EL BINGO DE ELISABETH · GUÍA VISUAL INTERACTIVA':'EL BINGO DE L’ELISABETH · GUIA VISUAL INTERACTIVA','Índice visual del manual':'Índex visual del manual','1. Crear o Entrar':'1. Crear o entrar','1. Panel de Administrador: Crear o Entrar':'1. Tauler d’administració: crear o entrar','2. Cómo funciona el Bombo y la Manivela':'2. Com funcionen el bombo i la maneta','Bombo del bingo':'Bombo del bingo','Subir al índice':'Pujar a l’índex','2. Bombo y Manivela':'2. Bombo i maneta','3. Invitar y Jugar':'3. Convidar i jugar','4. Comprobar Avisos':'4. Comprovar avisos','✨ Nueva Partida':'✨ Partida nova','🎱 Partida Empezada':'🎱 Partida començada','Crear partida nueva':'Crear una partida nova','🎱 Código: ':'🎱 Codi: ','🔑 Código: ':'🔑 Codi: ','🎱 Ir al bombo':'🎱 Anar al bombo','🎟 Ir a cartón':'🎟 Anar al cartró','Toca la Manivela (o el bombo)':'Toca la maneta (o el bombo)','La manivela gira de verdad, las bolas dan vueltas en 3D y cae 1 bola al bol.':'La maneta gira de debò, les boles fan voltes en 3D i una cau al bol.','Toca el Bol de Cristal':'Toca el bol de vidre','La bola sale en grande y la voz canta el número y su refrán.':'La bola es veu en gran i la veu canta el número i la dita.','Toca la Bola Grande':'Toca la bola gran','Viaja volando hasta su casilla en el tablero de 90 números.':'Vola fins a la seva casella al tauler de 90 números.','Duende y Bola de Nieve grandes':'Follet i bola de neu grans','A ambos lados del bombo para animar la partida cuando quieras.':'A cada costat del bombo, per animar la partida quan vulguis.','Si había una bola en el bol y tocas la manivela otra vez, la bola anterior se coloca sola en el tablero y sale la siguiente.':'Si hi havia una bola al bol i tornes a tocar la maneta, la bola anterior es col·loca al tauler i en surt una altra.','🔗 Invitación':'🔗 Invitació','👥 Jugadores':'👥 Jugadors','🎟 Mi cartón ⇄ 🎱 Bombo':'🎟 El meu cartró ⇄ 🎱 Bombo','🚪 Salir de la partida':'🚪 Sortir de la partida','PARTIDA':'PARTIDA','En juego':'En joc','Entrar con cartón':'Entrar amb cartró','Ver jugadores · 🗑 Borrar o ↺ Restaurar partida':'Veure jugadors · 🗑 Esborrar o ↺ Restaurar la partida','1. Entrar a Partidas':'1. Entrar a les partides','1. Tus Partidas Creadas: Entrar con 1 toque':'1. Les teves partides: entra-hi amb un toc','2. Administradora Master':'2. Administradora Master','👑 Administradora Master':'👑 Administradora Master','3. Las 90 Frases':'3. Les 90 frases','3. Personalizar las frases de las 90 bolas':'3. Personalitzar les frases de les 90 boles','Frases de los números':'Frases dels números','↑ Índice':'↑ Índex','↑ Volver al índice':'↑ Tornar a l’índex'},
   en:{'MANUAL 1 · JUGADORES':'MANUAL 1 · PLAYERS','MANUAL 2 · ADMINISTRADOR':'MANUAL 2 · ADMINISTRATOR','MANUAL 3 · ADMINISTRADORA MASTER (ELISABETH)':'MANUAL 3 · MASTER ADMINISTRATOR (ELISABETH)','EL BINGO DE ELISABETH · GUÍA VISUAL INTERACTIVA':'ELISABETH’S BINGO · INTERACTIVE VISUAL GUIDE','Índice visual del manual':'Guide contents','1. Crear o Entrar':'1. Create or join','1. Panel de Administrador: Crear o Entrar':'1. Administrator panel: create or join','2. Cómo funciona el Bombo y la Manivela':'2. How the drum and handle work','Bombo del bingo':'Bingo drum','Subir al índice':'Back to contents','2. Bombo y Manivela':'2. Drum and handle','3. Invitar y Jugar':'3. Invite and play','4. Comprobar Avisos':'4. Check claims','✨ Nueva Partida':'✨ New game','🎱 Partida Empezada':'🎱 Game in progress','Crear partida nueva':'Create a new game','🎱 Código: ':'🎱 Code: ','🔑 Código: ':'🔑 Code: ','🎱 Ir al bombo':'🎱 Open the drum','🎟 Ir a cartón':'🎟 Go to card','Toca la Manivela (o el bombo)':'Tap the handle (or the drum)','La manivela gira de verdad, las bolas dan vueltas en 3D y cae 1 bola al bol.':'The handle really turns, the balls spin in 3D and one ball drops into the bowl.','Toca el Bol de Cristal':'Tap the glass bowl','La bola sale en grande y la voz canta el número y su refrán.':'The ball appears enlarged and the voice calls its number and saying.','Toca la Bola Grande':'Tap the large ball','Viaja volando hasta su casilla en el tablero de 90 números.':'It flies to its square on the 90-number board.','Duende y Bola de Nieve grandes':'Large Elf and Snow Globe','A ambos lados del bombo para animar la partida cuando quieras.':'On either side of the drum to liven up the game whenever you like.','Si había una bola en el bol y tocas la manivela otra vez, la bola anterior se coloca sola en el tablero y sale la siguiente.':'If a ball is in the bowl and you turn the handle again, the previous ball moves to the board and the next one comes out.','🔗 Invitación':'🔗 Invitation','👥 Jugadores':'👥 Players','🎟 Mi cartón ⇄ 🎱 Bombo':'🎟 My card ⇄ 🎱 Drum','🚪 Salir de la partida':'🚪 Leave the game','PARTIDA':'GAME','En juego':'In progress','Entrar con cartón':'Join with a card','Ver jugadores · 🗑 Borrar o ↺ Restaurar partida':'View players · 🗑 Delete or ↺ Restore game','1. Entrar a Partidas':'1. Join a game','1. Tus Partidas Creadas: Entrar con 1 toque':'1. Your games: join with one tap','2. Administradora Master':'2. Master administrator','👑 Administradora Master':'👑 Master administrator','3. Las 90 Frases':'3. The 90 phrases','3. Personalizar las frases de las 90 bolas':'3. Customize the 90 ball phrases','Frases de los números':'Number phrases','↑ Índice':'↑ Contents','↑ Volver al índice':'↑ Back to contents'}
  };
  const FEATURE_I18N={
   ca:{'¿Borrar esta partida para siempre?':'Vols esborrar aquesta partida per sempre?','Borrar partida para siempre':'Esborrar la partida per sempre','¿Retirar este administrador para siempre?':'Vols retirar aquest administrador per sempre?','Se ocultará ':'S’amagarà ',' del panel y su acceso quedará bloqueado. No podrás reactivarlo desde la app. Su usuario de inicio de sesión sigue en Firebase Authentication.':' del tauler i el seu accés quedarà bloquejat. No el podràs reactivar des de l’aplicació. El seu compte d’inici de sessió continuarà a Firebase Authentication.','¿Confirmas este cambio?':'Vols confirmar aquest canvi?','Confirmar':'Confirmar','Se eliminará la partida ':'S’eliminarà la partida ',' y todos sus datos. No se puede deshacer.':' i totes les seves dades. No es pot desfer.','Borrar para siempre':'Esborrar per sempre','Ver como administrador':'Veure com a administrador','Verificación':'Verificació','No se pudo verificar.':'No s’ha pogut verificar.','Contraseña':'Contrasenya','Continuar':'Continuar','Cancelar':'Cancel·lar','Borrar partida':'Esborrar la partida','Un saludo de Elisabeth':'Una salutació de l’Elisabeth','Gracias por compartir la alegría de la Navidad.':'Gràcies per compartir l’alegria del Nadal.','Con cariño, Elisabeth':'Una abraçada, Elisabeth','Cerrar':'Tancar','Contacto':'Contacte','Administradores activos':'Administradors actius','Otros administradores':'Altres administradors','Partidas activas':'Partides actives','Incluye tu cuenta Master y las cuentas que pueden acceder al panel.':'Inclou el teu compte Master i els comptes que poden accedir al tauler.','Cuentas registradas, incluidas las suspendidas o retiradas.':'Comptes registrats, inclosos els suspesos o retirats.','Salas que no están retiradas. Las preparadas también cuentan.':'Sales que no s’han retirat. També s’hi compten les preparades.','No hay otros administradores.':'No hi ha altres administradors.','No hay partidas activas.':'No hi ha partides actives.','Master':'Master','Activo':'Actiu','Suspendido':'Suspès','Retirado':'Retirat','En juego':'En joc','Preparada':'Preparada'},
   en:{'¿Borrar esta partida para siempre?':'Delete this game permanently?','Borrar partida para siempre':'Permanently delete game','¿Retirar este administrador para siempre?':'Permanently remove this administrator?','Se ocultará ':'This will hide ',' del panel y su acceso quedará bloqueado. No podrás reactivarlo desde la app. Su usuario de inicio de sesión sigue en Firebase Authentication.':' from the panel and block their app access. You cannot reactivate them in the app. Their Firebase Authentication login will remain.','¿Confirmas este cambio?':'Confirm this change?','Confirmar':'Confirm','Se eliminará la partida ':'The game ',' y todos sus datos. No se puede deshacer.':' and all its data will be permanently deleted. This cannot be undone.','Borrar para siempre':'Delete permanently','Ver como administrador':'View as administrator','Verificación':'Verification','No se pudo verificar.':'Could not verify.','Contraseña':'Password','Continuar':'Continue','Cancelar':'Cancel','Borrar partida':'Delete game','Un saludo de Elisabeth':'A note from Elisabeth','Gracias por compartir la alegría de la Navidad.':'Thank you for sharing the joy of Christmas.','Con cariño, Elisabeth':'With love, Elisabeth','Cerrar':'Close','Contacto':'Contact','Administradores activos':'Active administrators','Otros administradores':'Other administrators','Partidas activas':'Active games','Incluye tu cuenta Master y las cuentas que pueden acceder al panel.':'Includes your Master account and the accounts allowed to access the panel.','Cuentas registradas, incluidas las suspendidas o retiradas.':'Registered accounts, including suspended or removed accounts.','Salas que no están retiradas. Las preparadas también cuentan.':'Games that have not been archived. Prepared games are included.','No hay otros administradores.':'There are no other administrators.','No hay partidas activas.':'There are no active games.','Master':'Master','Activo':'Active','Suspendido':'Suspended','Retirado':'Removed','En juego':'In progress','Preparada':'Ready'}
  };
  const originalCreateElement=React.createElement;
  function translateChild(value){if(typeof value==='string'){const dictionaries=[FEATURE_I18N[appLanguage],MANUAL_I18N[appLanguage],CONTENT_I18N[appLanguage],EXTRA_I18N[appLanguage],I18N[appLanguage]];for(const dict of dictionaries)if(dict?.[value]!==undefined)return dict[value];const plain=value.replace(/^[^\p{L}\p{N}¿¡]+/u,'');if(plain!==value){for(const dict of dictionaries)if(dict?.[plain]!==undefined)return value.slice(0,value.indexOf(plain))+dict[plain]}return value}if(Array.isArray(value))return value.map(translateChild);return value;}
  function translateTree(value){if(typeof value==='string'||Array.isArray(value))return translateChild(value);if(!value||typeof value!=='object'||!React.isValidElement(value))return value;const props={...value.props};for(const key of ['aria-label','title','placeholder','alt'])if(typeof props[key]==='string')props[key]=translateChild(props[key]);props.children=translateTree(value.props.children);return React.cloneElement(value,props);}
  React.createElement=function(type,props,...children){
   let nextProps=props;
   if(props&&typeof props==='object'&&!Array.isArray(props)){
    nextProps={...props};
    for(const key of ['aria-label','title','placeholder','alt'])if(typeof nextProps[key]==='string')nextProps[key]=translateChild(nextProps[key]);
   }
   return originalCreateElement(type,nextProps,...children.map(translateChild));
  };
  const c = x;
  const { useState, useEffect, useRef } = x;
  const createPortal = hm.createPortal;
  const createRoot = j_;

  // Speech helpers
  const speechParts = Lb;
  const speechPause = xb;

  // Game & Sayings helpers
  const NUMBERS = Ys;
  const CARDS = fa;
  const fresh = gu;
  const draw = $b;
  const place = qb;
  const reset = Hb;
  const restore = Wb;
  const chooseCard = Gb;
  const SAYINGS = ro;
  const announcement = Kd;

  // Firebase helpers
  const removePlayerRecord = lP;
  const initializeApp = J_;
  const getAuth = kb;
  const getFirestore = WR;
  const doc = Rt;
  const collection = $i;
  const getDoc = rv;
  const setDoc = Gs;
  const onSnapshot = Bn;
  const runTransaction = Ia;
  const serverTimestamp = Cs;
  const signInAnonymously = aN;
  const signInWithEmailAndPassword = hN;
  const signOut = gN;
  const onAuthStateChanged = pN;
  const createUserWithEmailAndPassword = dN;
  const sendPasswordResetEmail = cN;

  // --- audio.mjs ---
  const audio = (() => {
    
let ctx,bus,musicBus,timer,index=0,settings={sound:true,music:false,voice:true},duck=false,bellTimers=[],bellRun=false,danceTracks=new Set(),recording=null,voiceMedia=new Set(),rolling=false,rollTimer=null,rollPulse=null,speechToken=0,currentUtterance=null;

try{
 const saved=JSON.parse(localStorage.getItem('bingo-elisabeth-v1')||'{}');
 if(typeof saved.sound==='boolean')settings.sound=saved.sound;
 if(typeof saved.voice==='boolean')settings.voice=saved.voice;
 const pref=localStorage.getItem('bingo-music');
 settings.music = pref === 'true';
}catch{}

function syncRecording(){
 if(!recording)return;
 recording.volume=duck?.12:.45;
 if(settings.music&&settings.sound&&!danceTracks.size&&!voiceMedia.size&&!rolling){
  recording.play().catch(()=>{});
 }else{
  recording.pause();
 }
}

function notifyAudio(){
 syncRecording();
 window.dispatchEvent(new CustomEvent('bingo-audio-state',{detail:{music:settings.music,sound:settings.sound}}));
}
function musicEnabled(){
 return settings.music&&settings.sound;
}
function setMusic(enabled){
 const next=Boolean(enabled);
 settings={...settings,music:next,...(next?{sound:true}:{})};
 try{
  localStorage.setItem('bingo-music',String(next));
  const saved=JSON.parse(localStorage.getItem('bingo-elisabeth-v1')||'{}');
  localStorage.setItem('bingo-elisabeth-v1',JSON.stringify({...saved,music:next}));
 }catch{}
 if(!next&&recording){
  try{recording.pause();}catch{}
 }
 if(musicBus)musicBus.gain.value=next?1:0;
 if(bus)bus.gain.value=settings.sound?(duck?.2:1):0;
 window.dispatchEvent(new CustomEvent('bingo-music-change',{detail:{music:next,sound:settings.sound}}));
 notifyAudio();
 if(next)unlock();
}

// Jingle Bells, original bell synthesis; no third-party recording.
const melody=[[64,1],[64,1],[64,2],[64,1],[64,1],[64,2],[64,1],[67,1],[60,1.5],[62,.5],[64,4],[65,1],[65,1],[65,1.5],[65,.5],[65,1],[64,1],[64,1],[64,.5],[64,.5],[64,1],[62,1],[62,1],[64,1],[62,2],[67,2],[64,1],[64,1],[64,2],[64,1],[64,1],[64,2],[64,1],[67,1],[60,1.5],[62,.5],[64,4],[65,1],[65,1],[65,1.5],[65,.5],[65,1],[64,1],[64,1],[64,.5],[64,.5],[67,1],[67,1],[65,1],[62,1],[60,4],[0,2]];
function tone(freq,duration,vol=.18,isMusic=false){if(!ctx||!settings.sound)return;if(isMusic&&!settings.music)return;const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(vol,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);o.connect(g);g.connect(isMusic?musicBus:bus);o.start();o.stop(ctx.currentTime+duration)}
function step(){const [n,d]=melody[index++%melody.length];if(settings.music&&settings.sound&&!rolling&&!bellRun&&!danceTracks.size&&!recording&&n){tone(440*2**((n-69)/12),d*.38,.13,true);tone(440*2**((n+12-69)/12),d*.22,.035,true)}timer=setTimeout(step,d*330)}
function unlock(){
 if(!recording){
  recording=new Audio('./navidad.mp3');
  recording.loop=true;
  recording.preload='auto';
 }
 syncRecording();
 try{
  if(!ctx){
   ctx=new(window.AudioContext||window.webkitAudioContext)();
   bus=ctx.createGain();
   bus.connect(ctx.destination);
   musicBus=ctx.createGain();
   musicBus.gain.value=settings.music?1:0;
   musicBus.connect(bus);
   bus.gain.value=settings.sound?1:0;
   step();
  }
  ctx.resume().catch(()=>{});
 }catch{}
}
function configure(s){
 const pref=localStorage.getItem('bingo-music');
 const musicPref=pref!==null?pref==='true':settings.music;
 settings={
  ...settings,
  ...(typeof s?.sound==='boolean'?{sound:s.sound}:{}),
  ...(typeof s?.voice==='boolean'?{voice:s.voice}:{}),
  music:musicPref
 };
 if(musicBus)musicBus.gain.value=settings.music?1:0;
 notifyAudio();
 if(bus)bus.gain.value=settings.sound?(duck?.2:1):0;
 if(!settings.sound||!settings.voice){window.speechSynthesis?.cancel();duck=false}
}
function thud(){unlock();tone(100,.23,.65);tone(55,.3,.45)}
function chime(){unlock();tone(880,.5,.18);setTimeout(()=>tone(1320,.6,.1),90)}
function speak(text,onUnavailable=()=>{}){
 if(!settings.sound||!settings.voice)return;const synth=window.speechSynthesis;if(!synth){onUnavailable();return}
 stopSpeech();const token=speechToken;const voice=synth.getVoices().find(v=>v.lang.toLowerCase().startsWith(appLanguage));
 const chunks=speechParts(text);
 duck=true;syncRecording();let i=0;
 function next(){if(token!==speechToken)return;if(i===chunks.length){currentUtterance=null;duck=false;syncRecording();return}const u=new SpeechSynthesisUtterance(chunks[i++]);currentUtterance=u;u.lang=appLanguage==='ca'?'ca-ES':appLanguage==='en'?'en-US':'es-ES';if(voice)u.voice=voice;u.rate=.9;u.onend=()=>{if(token===speechToken)setTimeout(next,speechPause(u.text))};u.onerror=e=>{if(token!==speechToken)return;currentUtterance=null;duck=false;syncRecording();if(e.error!=='canceled'&&e.error!=='interrupted')onUnavailable()};synth.speak(u)}
 next();
}
function stopSpeech(){speechToken++;currentUtterance=null;window.speechSynthesis?.cancel();duck=false;syncRecording()}
function roll(duration=900){
 unlock();clearTimeout(rollTimer);if(!rolling){rolling=true;stopSpeech();bellTimers.forEach(clearTimeout);bellTimers=[];bellRun=false;for(const m of danceTracks)m.muted=true;syncRecording();rollPulse=setInterval(()=>{if(!settings.sound||!ctx)return;const length=.06,buffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*length),ctx.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.exp(-i/(data.length*.18));const node=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();node.buffer=buffer;filter.type='bandpass';filter.frequency.value=400+Math.random()*1000;gain.gain.value=.24;node.connect(filter);filter.connect(gain);gain.connect(bus);node.start();tone(180+Math.random()*170,.045,.07)},65)}rollTimer=setTimeout(stopRoll,duration)
}
function stopRoll(){clearTimeout(rollTimer);clearInterval(rollPulse);rolling=false;for(const m of danceTracks)m.muted=!settings.sound;syncRecording()}
function bells(){unlock();bellTimers.forEach(clearTimeout);bellTimers=[];bellRun=false;if(!settings.sound)return;bellRun=true;let at=0;for(const [n,d] of melody.slice(0,25)){const delay=at;if(n)bellTimers.push(setTimeout(()=>{const f=440*2**((n+12-69)/12);tone(f,2.4,.12);tone(f*2,1.4,.028);tone(f*3,.7,.012)},delay));at+=d*290}bellTimers.push(setTimeout(()=>{bellRun=false;bellTimers=[]},at+2400))}
function greet(onEnd){if(!settings.sound||!window.speechSynthesis)return false;const synth=window.speechSynthesis,voice=synth.getVoices().find(v=>v.lang.toLowerCase().startsWith(appLanguage));if(!voice)return false;synth.cancel();const u=new SpeechSynthesisUtterance(appLanguage==='ca'?'Ho, ho, ho!… Bon Nadal!':appLanguage==='en'?'Ho, ho, ho!… Merry Christmas!':'¡Ho, ho, ho!… ¡Feliz Navidad!');u.lang=appLanguage==='ca'?'ca-ES':appLanguage==='en'?'en-US':'es-ES';u.voice=voice;u.rate=.92;u.pitch=.9;duck=true;if(bus)bus.gain.value=.2;const done=()=>{duck=false;configure(settings);onEnd()};u.onend=done;u.onerror=done;synth.speak(u);return true}
function danceMusic(media,active){
 if(active)danceTracks.add(media);
 else{danceTracks.delete(media);media.pause();}
 media.muted=!settings.sound||rolling;
 syncRecording();
}
function prunaVoice(media,active){
 if(active){voiceMedia.add(media);media.muted=!settings.sound;media.volume=1;}
 else{voiceMedia.delete(media);media.pause();}
 syncRecording();
}
function disappointment(){
 unlock();
 if(!ctx||!settings.sound)return;
 const notes=[
  {f:392.0,start:0,dur:0.36},
  {f:369.99,start:0.40,dur:0.36},
  {f:349.23,start:0.80,dur:0.36},
  {f:329.63,endF:261.63,start:1.20,dur:1.25}
 ];
 notes.forEach(n=>{
  const t0=ctx.currentTime+n.start;
  ['sawtooth','triangle'].forEach((type,idx)=>{
   const o=ctx.createOscillator(),g=ctx.createGain(),flt=ctx.createBiquadFilter();
   o.type=type;
   o.frequency.setValueAtTime(n.f,t0);
   if(n.endF){
    o.frequency.linearRampToValueAtTime(n.endF,t0+n.dur*0.85);
   }
   flt.type='lowpass';
   flt.frequency.setValueAtTime(980,t0);
   const vol=idx===0?0.18:0.24;
   g.gain.setValueAtTime(0.001,t0);
   g.gain.linearRampToValueAtTime(vol,t0+0.04);
   g.gain.exponentialRampToValueAtTime(0.001,t0+n.dur);
   o.connect(flt);flt.connect(g);g.connect(bus);
   o.start(t0);o.stop(t0+n.dur+0.02);
  });
 });
}
function fanfare(){
 unlock();
 if(!ctx||!settings.sound)return;
 const seq=[
  {f:523.25,t:0,d:0.16},
  {f:659.25,t:0.15,d:0.16},
  {f:783.99,t:0.30,d:0.18},
  {f:1046.50,t:0.48,d:0.65}
 ];
 seq.forEach(s=>{
  setTimeout(()=>{tone(s.f,s.d,0.22);tone(s.f*1.5,s.d*0.8,0.09)},s.t*1000);
 });
}

    return {
      musicEnabled, setMusic, unlock, configure, thud, chime, speak, stopSpeech,
      roll, stopRoll, bells, greet, danceMusic, prunaVoice, disappointment, fanfare
    };
  })();

  // --- shared.mjs ---
  const net = (() => {
    const ADMIN_UID='YRpJxetC1sVRqrd1W6S2IsM9yms2';
const MASTER_EMAILS=['elialtarriba@gmail.com'];
function isMasterAdmin(u){
 if(!u||u.isAnonymous)return false;
 const em=(u.email||'').trim().toLowerCase();
 return u.uid===ADMIN_UID||MASTER_EMAILS.includes(em);
}
const app=initializeApp({apiKey:'AIzaSyAXgDrohvF8HVccS2A985CGUknj_YSf1zQ',authDomain:'bingo-de-eli.firebaseapp.com',projectId:false?'demo-bingo-eli':'bingo-de-eli',storageBucket:'bingo-de-eli.firebasestorage.app',messagingSenderId:'804536116694',appId:'1:804536116694:web:7dd4d1edeb80f169e43077'});
const auth=getAuth(app),db=getFirestore(app);
if(false){connectAuthEmulator(auth,'http://127.0.0.1:9199',{disableWarnings:true});connectFirestoreEmulator(db,'127.0.0.1',8185);}
function getDocs(colRef){return new Promise((resolve,reject)=>{let off=()=>{};off=onSnapshot(colRef,snap=>{try{off()}catch{}resolve(snap)},err=>{try{off()}catch{}reject(err)})});}
const roomRef=id=>doc(db,'rooms',id);
const playerRef=(id,uid)=>doc(db,'rooms',id,'players',uid);
function friendlyError(e){if(e.code==='auth/email-already-in-use')return 'Este correo ya tiene una cuenta. Pulsa Ya tengo cuenta para entrar o recuperar tu contraseña.';if(e.code==='auth/weak-password')return 'Escoge una contraseña de al menos seis caracteres.';if(e.code==='auth/invalid-email')return 'Revisa el correo electrónico.';if(e.code==='auth/admin-restricted-operation')return 'Para entrar como jugador invitado, debes activar "Anónimo" en Firebase Console (Authentication > Sign-in method > Anónimo). Si eres administradora, ¡puedes entrar y jugar directamente con tu cuenta!';if(e.code==='permission-denied')return 'Firebase ha denegado el acceso a esta partida. Comprueba el código y pide a la administradora que publique las reglas definitivas de Firestore y tenga activado el acceso anónimo para jugadores. Los administradores entran con su correo y contraseña.';if(e.code==='auth/invalid-credential')return 'El correo o la contraseña no son correctos.';if(e.code==='auth/network-request-failed'||e.code==='unavailable')return 'No hay conexión con Firebase. Inténtalo de nuevo cuando vuelva Internet.';return e.message||'No se ha podido completar la acción.'}
async function registerHost(email,password,firstName,lastName){
 const result=await createUserWithEmailAndPassword(auth,email,password);
 const cleanFirst=(firstName||'').trim()||'Administrador';
 const cleanLast=(lastName||'').trim();
 const isMaster=isMasterAdmin(result.user);
 try{
  await setDoc(doc(db,'administrators',result.user.uid),{email:result.user.email,firstName:cleanFirst,lastName:cleanLast,status:isMaster?'approved':'pending',createdAt:serverTimestamp()});
 }catch{
  try{
   await setDoc(doc(db,'administrators',result.user.uid),{email:result.user.email,firstName:cleanFirst,lastName:cleanLast,status:'approved',createdAt:serverTimestamp()});
  }catch{}
 }
 return result;
}
async function createRoom(){const id=Array.from(crypto.getRandomValues(new Uint8Array(8)),n=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[n%31]).join('');await setDoc(roomRef(id),{ownerId:auth.currentUser.uid,ownerEmail:auth.currentUser.email,drawn:[],pending:null,started:true,round:1,event:null,activeClaim:null,createdAt:serverTimestamp()});return id;}
async function joinRoom(id,name){if(!auth.currentUser){try{await signInAnonymously(auth)}catch(err){if(err.code==='auth/admin-restricted-operation')throw Error('Para entrar como jugador invitado, activa "Anónimo" en Firebase Console (Authentication > Sign-in method > Anónimo).');throw err}}const uid=auth.currentUser.uid;await runTransaction(db,async t=>{const r=await t.get(roomRef(id));if(!r.exists())throw Error('No existe una partida con ese código.');const p=await t.get(playerRef(id,uid));if(!p.exists())t.set(playerRef(id,uid),{name:name.trim().slice(0,30),card:null,marks:[],locked:false,round:r.data().round,color:'#8d1b2b',chip:'auto',updatedAt:serverTimestamp()});});}
async function pickCard(id,uid,card){await runTransaction(db,async t=>{const rr=await t.get(roomRef(id)),pr=await t.get(playerRef(id,uid));const r=rr.data(),p=pr.data();if((p.round===r.round&&p.locked)&&p.card!==null)throw Error('Tu cartón está fijado hasta la próxima partida.');const seat=doc(db,'rooms',id,'seats',String(card)),taken=await t.get(seat);if(taken.exists()&&taken.data().uid!==uid)throw Error('Otra persona acaba de elegir este cartón. Escoge otro.');if(p.card!==null&&p.card!==card)t.delete(doc(db,'rooms',id,'seats',String(p.card)));t.set(seat,{uid});t.update(playerRef(id,uid),{card,marks:[],locked:false,round:r.round,updatedAt:serverTimestamp()});});}
async function saveGame(id,before,next,forceReset=false,sourceUid=''){await runTransaction(db,async t=>{const ref=roomRef(id),snap=await t.get(ref),r=snap.data();if(r.round!==before.round)throw Error('La ronda ha cambiado en otra ventana. Vuelve a abrir el bombo.');if(r.activeClaim)throw Error('Hay un aviso pendiente. Compruébalo antes de continuar.');if(JSON.stringify(r.drawn)!==JSON.stringify(before.drawn)||r.pending!==before.pending)throw Error('La partida ha cambiado en otra ventana. Vuelve a abrir el bombo para continuar.');const resetting=forceReset||next.drawn.length===0&&next.pending===null&&(before.drawn.length>0||before.pending!==null);const called=before.pending===null&&next.pending!==null?next.pending:(before.pending===null&&next.drawn.length>before.drawn.length?next.drawn.at(-1):null);t.update(ref,{drawn:next.drawn,pending:next.pending,started:true,...(called!==null&&!resetting?{event:{id:crypto.randomUUID(),type:'number',number:called,sourceUid}}:{}),...(resetting?{round:r.round+1,event:null,activeClaim:null}:{})});});}
async function requestPrize(id,uid,kind,customRequestId){await runTransaction(db,async t=>{const ref=roomRef(id),r=(await t.get(ref)).data(),p=(await t.get(playerRef(id,uid))).data();if(r.activeClaim)throw Error('Ya hay una comprobación en curso. Espera un momento.');if(p.card===null)throw Error('Elige primero un cartón.');const requestId=(typeof customRequestId==='string'&&customRequestId.length>0&&customRequestId.length<=50)?customRequestId:crypto.randomUUID();t.set(doc(db,'rooms',id,'claims',uid),{name:p.name,card:p.card,kind,status:'pending',round:r.round,requestId,createdAt:serverTimestamp()});t.update(ref,{activeClaim:uid});});}
const removePlayer=(id,uid)=>removePlayerRecord(db,id,uid);
async function permanentlyDeleteRoom(id){
 if(!isMasterAdmin(auth.currentUser))throw Error('No tienes permiso para borrar esta partida.');
 const room=await getDoc(roomRef(id));
 if(!room.exists()||!room.data()?.archived)throw Error('Solo se pueden borrar definitivamente partidas retiradas.');
 const snapshots=await Promise.all(['players','seats','claims'].map(name=>getDocs(collection(db,'rooms',id,name))));
 const refs=snapshots.flatMap(s=>s.docs.map(d=>d.ref));
 if(refs.length+1>500)throw Error('Esta partida contiene demasiados datos para borrarla de una sola vez.');
 await runTransaction(db,async tx=>{
  const current=await tx.get(roomRef(id));
  if(!current.exists()||!current.data()?.archived)throw Error('La partida ya no está retirada.');
  refs.forEach(ref=>tx.delete(ref));
  tx.delete(roomRef(id));
 });
}

    return {
      ADMIN_UID, MASTER_EMAILS, isMasterAdmin, auth, db, signInAnonymously, signInWithEmailAndPassword, signOut,
      onAuthStateChanged, createUserWithEmailAndPassword, sendPasswordResetEmail,
      doc, collection, getDoc, getDocs, setDoc, onSnapshot, runTransaction, serverTimestamp,
      roomRef, playerRef, friendlyError, registerHost, createRoom, joinRoom,
      pickCard, saveGame, requestPrize, removePlayerRecord, removePlayer, permanentlyDeleteRoom
    };
  })();

  // --- TransparentDance.jsx ---
  const TransparentDance = (() => {
    
// Remove only the pale backdrop connected to frame edges. Interior whites
// (beard, wool and hat embroidery) remain opaque instead of using multiply.
function TransparentDance({video,active}){
 const canvas=useRef();
 useEffect(()=>{
  if(!active)return;const v=video.current,c=canvas.current;if(!v||!c)return;
  const ctx=c.getContext('2d',{willReadFrequently:true});let frame,cancelled=false,last=-1,queue,seen;
  function render(){
   if(cancelled)return;
  if(v.readyState>=2&&v.currentTime!==last&&v.currentTime-last>=1/24){
    last=v.currentTime;
    const w=256,h=Math.round(w*v.videoHeight/v.videoWidth);
    if(c.width!==w||c.height!==h){c.width=w;c.height=h;queue=new Int32Array(w*h);seen=new Uint8Array(w*h)}
    ctx.drawImage(v,0,0,w,h);const pixels=ctx.getImageData(0,0,w,h),d=pixels.data;seen.fill(0);let head=0,tail=0;
    function visit(n){if(seen[n])return;seen[n]=1;const k=n*4,min=Math.min(d[k],d[k+1],d[k+2]),max=Math.max(d[k],d[k+1],d[k+2]);if(min>232&&max-min<22){queue[tail++]=n;d[k+3]=0}}
    for(let x=0;x<w;x++){visit(x);visit((h-1)*w+x)}for(let y=1;y<h-1;y++){visit(y*w);visit(y*w+w-1)}
    while(head<tail){const n=queue[head++],x=n%w;if(x)visit(n-1);if(x<w-1)visit(n+1);if(n>=w)visit(n-w);if(n<w*(h-1))visit(n+w)}
    ctx.putImageData(pixels,0,0);
   }
   frame=requestAnimationFrame(render);
  }
  frame=requestAnimationFrame(render);return()=>{cancelled=true;cancelAnimationFrame(frame)};
 },[active,video]);
 return React.createElement("canvas",{ref:canvas,className:"gnome-cutout","aria-hidden":"true"});
}
    return TransparentDance;
  })();

  // --- ChristmasFriends.jsx ---
  const { SnowGlobe, Gnome, Greeting } = (() => {
    



const A='./';

const TREE_LIGHTS=[[66,26.4],[70.3,29.8],[67.7,32],[62.7,34],[70.7,37],[64.5,38.5],[62.4,40.7],[66.9,43.5],[72.1,43.2],[59,44.5],[68.8,35],[65.1,29.2]];
function SnowGlobe({className='',staticPreview=false}){
 if(staticPreview){
  return (
   React.createElement("span",{className:'snowglobe friend '+className,"aria-hidden":"true"},React.createElement("img",{src:A+'globo.png',alt:"",loading:"lazy"}))
  );
 }
 const [snowing,setSnowing]=useState(false),[step,setStep]=useState(0),[run,setRun]=useState(0),timer=useRef(),lightTimer=useRef(),drag=useRef(null),moved=useRef(false),vidRef=useRef(null);
 useEffect(()=>()=>{clearTimeout(timer.current);clearTimeout(lightTimer.current)},[]);

 const lit = step===1 ? 'normal' : step>=2 ? 'bright' : false;
 const alive = step===3;

 useEffect(()=>{
  const v=vidRef.current;
  if(!v)return;
  if(alive){
   try{v.currentTime=2.1;}catch{}
   v.play().catch(()=>{});
  }else{
   v.pause();
  }
 },[alive]);

 function blizzard(){
  setRun(r=>r+1);
  setSnowing(true);
  clearTimeout(timer.current);
  timer.current=setTimeout(()=>setSnowing(false),30000);
 }

 function handleTap(){
  if(moved.current){moved.current=false;return;}
  audio.unlock();
  setStep(prev=>{
   const next=(prev+1)%4;
   clearTimeout(lightTimer.current);
   if(next===1){
    audio.chime();
    lightTimer.current=setTimeout(()=>setStep(0),45000);
   }else if(next===2){
    audio.chime();
    lightTimer.current=setTimeout(()=>setStep(0),45000);
   }else if(next===3){
    
    audio.bells();
    blizzard();
    lightTimer.current=setTimeout(()=>setStep(0),60000);
   }
   return next;
  });
 }

 return (
  React.createElement("button",{type:"button",className:'snowglobe friend '+className+(snowing?' snowing':'')+(lit?' lit':'')+(lit==='bright'?' extra-bright':'')+(alive?' is-alive':''),onClick:handleTap,onPointerDown:e=>{drag.current={x:e.clientX,y:e.clientY};moved.current=false;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}},onPointerMove:e=>{if(drag.current&&Math.hypot(e.clientX-drag.current.x,e.clientY-drag.current.y)>16){if(!moved.current)blizzard();moved.current=true}},onPointerUp:()=>{drag.current=null},onPointerCancel:()=>{drag.current=null},"aria-label":"Bola de nieve: 1 toque luz, 2 toques mucha luz, 3 toques cobra vida y sale el gnomo de la puerta; desliza para nevar"},React.createElement("img",{src:A+'globo.png',alt:""}),React.createElement("span",{className:'globe-dome-clip '+(alive?'active':''),"aria-hidden":"true"},React.createElement("video",{ref:vidRef,className:"globe-live-video",src:A+'bola-nieve.MP4',muted:true,playsInline:true,preload:"metadata",onLoadedMetadata:e=>{if(e.currentTarget.currentTime<2)e.currentTarget.currentTime=2.1;},onTimeUpdate:e=>{if(e.currentTarget.currentTime>13.7){e.currentTarget.currentTime=2.1;e.currentTarget.play().catch(()=>{});}},onEnded:e=>{e.currentTarget.currentTime=2.1;e.currentTarget.play().catch(()=>{});},onError:()=>setStep(2)}),React.createElement("span",{className:"globe-dome-shine"})),lit&&(
    React.createElement("span",{className:"globe-lights","aria-hidden":"true"},!alive&&(
      React.createElement(React.Fragment,null,React.createElement("i",{className:"house-glow main-window"}),React.createElement("i",{className:"house-glow left-window"}),React.createElement("i",{className:"house-glow roof-window"}),React.createElement("i",{className:"house-glow left-lamp"}),React.createElement("i",{className:"house-glow right-lamp"}))
     ),React.createElement("i",{className:"tree-star"}),(step>=2)&&TREE_LIGHTS.map(([x,y],i)=>(
      React.createElement("i",{className:"tree-light",key:i,style:{
        left:(alive?x+4:x)+'%',
        top:(alive?y-2:y)+'%',
        '--light':['#ffd05e','#fc537b','#65d9ff','#9bff91'][i%4],
        animationDelay:-(i%4)*.35+'s'
       }})
     )))
   ),React.createElement("span",{className:"globe-snow","aria-hidden":"true",key:run},(snowing||alive)&&Array.from({length:alive?65:100},(_,i)=>(
     React.createElement("i",{key:i,style:{
       left:`${4+i*31%93}%`,
       '--delay':`${-(i%9)*.28}s`,
       '--duration':`${1.7+i%5*.35}s`,
       '--drift':`${i%2?15:-15}px`,
       width:2+i%3,
       height:2+i%3
      }})
    ))))
 );
}
function Gnome({className='',autoGreet=false,onReady,onTap,staticPreview=false}){
 if(staticPreview){
  return (
   React.createElement("span",{className:'gnome friend idle '+className,"aria-hidden":"true"},React.createElement("span",{className:"gnome-sprite","aria-hidden":"true"}))
  );
 }
 const [playing,setPlaying]=useState(autoGreet),[failed,setFailed]=useState(false),video=useRef(),track=useRef();

 function ensureTrack(){
  if(!track.current){
   const music=new Audio(A+'duende-musica.wav');
   music.preload='auto';
   music.loop=false;
   track.current=music;
  }
  return track.current;
 }

 useEffect(()=>{
  const update=e=>{if(track.current&&e?.detail&&typeof e.detail.sound==='boolean')track.current.muted=!e.detail.sound;};
  window.addEventListener('bingo-audio-state',update);
  return()=>{
   if(track.current){
    audio.danceMusic(track.current,false);
    track.current.pause();
    track.current=null;
   }
   window.removeEventListener('bingo-audio-state',update);
  };
 },[]);

 useEffect(()=>{
  if(autoGreet){
   startDance();
  }
 },[autoGreet]);

 function sync(force=false){
  const v=video.current,m=track.current;
  if(!v||!m||v.paused)return;
  audio.danceMusic(m,true);
  const drift=Math.abs(m.currentTime-v.currentTime);
  if(force||drift>0.42){
   try{m.currentTime=v.currentTime;}catch{}
  }
  if(m.paused&&!m.ended)m.play().catch(()=>{});
 }

 function stop(){
  const v=video.current,m=track.current;
  if(v){v.pause();try{v.currentTime=0;}catch{}}
  if(m){audio.danceMusic(m,false);m.pause();try{m.currentTime=0;}catch{}}
  setPlaying(false);
 }

 function startDance(){
  audio.unlock();
  const v=video.current,m=ensureTrack();
  setFailed(false);
  if(m){
   audio.danceMusic(m,true);
   try{m.currentTime=0;}catch{}
  }
  setPlaying(true);
  if(v){
   try{v.currentTime=0;}catch{}
   v.play().then(()=>{
    if(m){
     try{m.currentTime=v.currentTime;}catch{}
     m.play().catch(()=>{});
    }
   }).catch(()=>{});
  }
 }

 function dance(){
  if(onTap){onTap();return;}
  if(playing){
   stop();
   return;
  }
  startDance();
 }

 return (
  React.createElement("button",{type:"button",className:'gnome friend '+className+(playing?' dancing':' idle'),onClick:dance,"aria-label":playing?"Duende bailando: toca para parar":"Duende: toca para verlo bailar al son de la música"},React.createElement("span",{className:"gnome-sprite","aria-hidden":"true"}),React.createElement("video",{ref:video,className:"gnome-dance-video",src:A+'duende-baile.MP4',muted:true,playsInline:true,preload:"auto",onPlaying:()=>{sync(true);onReady?.();},onSeeked:()=>sync(true),onTimeUpdate:()=>sync(false),onEnded:stop,onPause:()=>{if(track.current&&!playing)audio.danceMusic(track.current,false)},onError:()=>{if(playing){setFailed(true);stop();}},"aria-label":"Duende bailando"}),playing&&!failed&&React.createElement(TransparentDance,{video:video,active:playing&&!failed}),failed&&React.createElement("span",{className:"greeting",role:"status"},"¡Feliz Navidad!"))
 );
}
function Greeting({onClose}){
 const [ready,setReady]=useState(false),taps=useRef({at:0,n:0});
 return createPortal(
  React.createElement("div",{className:"greeting-fullscreen",role:"dialog","aria-modal":"true","aria-label":"Baile del duende"},React.createElement("div",{className:"greeting-full-stage",onClick:()=>{
     if(!ready)return;
     const now=Date.now();
     taps.current={at:now,n:now-taps.current.at<500?taps.current.n+1:1};
     if(taps.current.n>=2)onClose();
    }},React.createElement(Gnome,{className:"fullscreen-gnome",autoGreet:true,onReady:()=>setReady(true)})),ready&&React.createElement("p",{className:"greeting-close-hint"},"Toca × o dos veces al duende para cerrar"),React.createElement("button",{className:"greeting-close-button",onClick:onClose,"aria-label":"Cerrar baile"},"×")),
  document.body
 );
}

    return { SnowGlobe, Gnome, Greeting };
  })();

  // --- Manual.jsx ---
  const ManualButton = (() => {
    


const A='./';

function InteractiveCardDemo(){
 const [marks,setMarks]=useState([7,22,45,68,90]);
 const [color,setColor]=useState('#8d1b2b');
 const [toast,setToast]=useState('');
 const sample=[[7,null,22,34,null,51,68,null,83],[null,14,null,39,45,null,72,88,null],[3,null,29,null,56,61,null,null,90]];
 const toggle=n=>{audio.thud();setMarks(m=>m.includes(n)?m.filter(x=>x!==n):[...m,n]);};
 return (
  React.createElement("div",{className:"m-visual-widget"},React.createElement("div",{className:"m-widget-head"},React.createElement("span",null,"🎨 Elige color:"),['#8d1b2b','#194e3c','#245882','#6a387a','#987125'].map(c=>(
     React.createElement("button",{key:c,type:"button",className:'m-color-dot '+(color===c?'active':''),style:{background:c},onClick:()=>setColor(c),"aria-label":"Cambiar color"})
    ))),React.createElement("div",{className:"manual-card-preview",style:{borderColor:'#d4b568',background:color}},React.createElement("div",{className:"manual-card-head",style:{background:color}},React.createElement("span",null,"❄"),React.createElement("b",null,"CARTÓN N.º 01 (¡Toca un número!)"),React.createElement("span",null,"🧝")),React.createElement("div",{className:"manual-card-grid"},sample.flat().map((n,i)=>n?(
      React.createElement("button",{key:i,type:"button",onClick:()=>toggle(n),className:'manual-demo-num '+(marks.includes(n)?'is-marked':'')},React.createElement("span",null,n))
     ):(
      React.createElement("div",{key:i,className:"manual-demo-blank"},"❄")
     )))),React.createElement("div",{className:"m-demo-buttons-row"},React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>{audio.fanfare();setToast('🎉 ¡Sale confeti y el duende baila en todos los móviles!')}},"📣 Probar ¡LÍNEA!"),React.createElement("button",{type:"button",className:"gold-button green compact",onClick:()=>{audio.fanfare();audio.bells();setToast('🏆 ¡BINGO! Se para la partida y sale confeti para todos')}},"🏆 Probar ¡BINGO!"),React.createElement("button",{type:"button",className:"gold-button compact",style:{background:'#5c3a21'},onClick:()=>{audio.disappointment();setToast('🎺 ¡Ohhh! Música de decepción cuando es falsa alarma')}},"🎺 Oír Falsa Alarma")),toast&&React.createElement("div",{className:"m-demo-toast"},toast))
 );
}

const MANUALS = {
 player: {
  num: 'MANUAL 1',
  buttonLabel: '📖 Manual 1',
  badge: 'MANUAL 1 · JUGADORES',
  title: 'Manual 1 · Cómo Jugar',
  subtitle: 'Todo visual: mira las fotos y toca para probar.',
  heroImg: A+'duende-animado.png',
  cards: [
   {
    id: 'm1-portada',
    icon: '✨',
    shortTitle: '1. Portada mágica',
    title: '1. Qué esconde la portada',
    visual: (
     React.createElement("div",{className:"m-photo-trio"},React.createElement("div",{className:"m-photo-card"},React.createElement("div",{className:"m-gnome-thumb",style:{backgroundImage:`url(${A}duende-animado.png)`}}),React.createElement("strong",null,"🧝 Duende"),React.createElement("span",{className:"m-step-pill"},"👆 1 toque: Baila con música"),React.createElement("span",{className:"m-step-pill"},"👆 Otro toque: Se para")),React.createElement("div",{className:"m-photo-card"},React.createElement("img",{src:A+'globo.png',alt:"Bola de nieve"}),React.createElement("strong",null,"🔮 Bola de nieve"),React.createElement("span",{className:"m-step-pill"},"👆 1 toque: Luz cálida"),React.createElement("span",{className:"m-step-pill"},"👆👆 2 toques: Mucha luz"),React.createElement("span",{className:"m-step-pill highlight"},"👆👆👆 3 toques: ¡Sale el gnomo!"),React.createElement("span",{className:"m-step-pill"},"👋 Desliza: Nieve")),React.createElement("div",{className:"m-photo-card"},React.createElement("video",{src:A+'pruna.mp4',muted:true,loop:true,autoPlay:true,playsInline:true,className:"m-mini-video"}),React.createElement("strong",null,"🐶 Pruna"),React.createElement("span",{className:"m-step-pill"},"👆 Tócala para agrandar"),React.createElement("span",{className:"m-step-pill"},"🔊 Canta con sonido")))
    ),
    bullets: [
     'Desliza a izquierda o derecha para ver al Duende, la Bola y a Pruna.',
     'Pulsa el botón rojo «Entrar a jugar» para ir directo a tu cartón.'
    ]
   },
   {
    id: 'm1-entrar',
    icon: '🎟',
    shortTitle: '2. Entrar a jugar',
    title: '2. Entrar a una partida en 3 pasos',
    visual: (
     React.createElement("div",{className:"m-flow-diagram"},React.createElement("div",{className:"m-flow-step"},React.createElement("span",{className:"m-flow-num"},"1"),React.createElement("div",{className:"m-mock-btn red"},"Entrar a jugar"),React.createElement("small",null,"Pulsa el botón rojo")),React.createElement("div",{className:"m-flow-arrow"},"➔"),React.createElement("div",{className:"m-flow-step"},React.createElement("span",{className:"m-flow-num"},"2"),React.createElement("div",{className:"m-mock-inputs"},React.createElement("div",null,"👤 Nombre: ",React.createElement("b",null,"María")),React.createElement("div",null,"🔑 Código: ",React.createElement("b",null,"AB12CD34"))),React.createElement("small",null,"Pon tu nombre y el código")),React.createElement("div",{className:"m-flow-arrow"},"➔"),React.createElement("div",{className:"m-flow-step"},React.createElement("span",{className:"m-flow-num"},"3"),React.createElement("div",{className:"m-mock-btn gold"},"🎟 1, 2 o 3 Cartones"),React.createElement("small",null,"Juega con 1, 2 o 3 cartones a la vez")))
    ),
    bullets: [
     'Puedes elegir jugar con 1 cartón, con 2 cartones o con 3 cartones a la vez (o elegirlos al azar).',
     'Si entras desde un enlace de WhatsApp, el código ya sale puesto solo; o escribe el código de cualquier partida empezada.'
    ]
   },
   {
    id: 'm1-carton',
    icon: '🎯',
    shortTitle: '3. Tu cartón y móvil',
    title: '3. Marcar números y girar el móvil',
    visual: React.createElement(InteractiveCardDemo,null),
    bullets: [
     '👆👆 Dos toques en un número = Poner ficha.',
     '👆 Un toque en un número marcado = Quitar ficha.',
     '📲 Gira el móvil en horizontal (apaisado) = Se ocultan las barras y ves SOLO tu cartón gigante.'
    ]
   },
   {
    id: 'm1-premios',
    icon: '🏆',
    shortTitle: '4. ¡Línea!, ¡Bingo! y Salir',
    title: '4. Cantar premio y salir de la partida',
    visual: (
     React.createElement("div",{className:"m-visual-grid-2"},React.createElement("div",{className:"m-info-tile gold-tile"},React.createElement("div",{className:"m-tile-icons"},"📣 🏆 🎊"),React.createElement("h4",null,"¡LÍNEA! y ¡BINGO! siempre activos"),React.createElement("p",null,"Púlsalos cuando creas que tienes premio: ",React.createElement("b",null,"se para la partida, sale confeti y baila el duende en TODOS los móviles")," (incluido el administrador).")),React.createElement("div",{className:"m-info-tile green-tile"},React.createElement("div",{className:"m-tile-icons"},"✅ ❌ 🎺"),React.createElement("h4",null,"Comprobación en directo"),React.createElement("p",null,"Si es válido: ",React.createElement("b",null,"¡Fiesta y premio!"),React.createElement("br",null),"Si te faltaba algún número: suena la ",React.createElement("b",null,"música de decepción (🎺 wah-wah)")," y sigue el juego.")),React.createElement("div",{className:"m-info-tile exit-tile",style:{gridColumn:'1 / -1'}},React.createElement("div",{className:"m-tile-icons"},"🚪 Volver al inicio"),React.createElement("p",null,"Cuando quieras salir, pulsa ",React.createElement("b",null,"«🚪 Salir de la partida»")," arriba o abajo de tu cartón para volver a la portada.")))
    ),
    bullets: []
   }
  ]
 },
 host: {
  num: 'MANUAL 2',
  buttonLabel: '📖 Manual 2',
  badge: 'MANUAL 2 · ADMINISTRADOR',
  title: 'Manual 2 · Administrador',
  subtitle: 'Guía visual para crear partidas, girar el bombo y comprobar cartones.',
  heroImg: A+'bombo.png',
  cards: [
   {
    id: 'm2-acceso',
    icon: '🟢',
    shortTitle: '1. Crear o Entrar',
    title: '1. Panel de Administrador: Crear o Entrar',
    visual: (
     React.createElement("div",{className:"m-visual-grid-2"},React.createElement("div",{className:"m-info-tile gold-tile"},React.createElement("div",{className:"m-tile-icons"},"✨ Nueva Partida"),React.createElement("div",{className:"m-mock-btn red",style:{margin:'8px auto'}},"Crear partida nueva"),React.createElement("p",null,"Crea un código nuevo automáticamente y abre el bombo al instante.")),React.createElement("div",{className:"m-info-tile green-tile"},React.createElement("div",{className:"m-tile-icons"},"🎱 Partida Empezada"),React.createElement("div",{className:"m-mock-inputs",style:{margin:'6px auto'}},React.createElement("div",null,"🔑 Código: ",React.createElement("b",null,"AB12CD34"))),React.createElement("div",{style:{display:'flex',gap:'6px',justifyContent:'center'}},React.createElement("span",{className:"m-step-pill highlight"},"🎱 Ir al bombo"),React.createElement("span",{className:"m-step-pill"},"🎟 Ir a cartón")),React.createElement("p",null,"Entra en cualquier partida ya creada escribiendo el código o con 1 toque desde tu lista.")))
    ),
    bullets: [
     'Todo está en la pantalla de Administrador, limpio y directo.'
    ]
   },
   {
    id: 'm2-bombo',
    icon: '🎰',
    shortTitle: '2. Bombo y Manivela',
    title: '2. Cómo funciona el Bombo y la Manivela',
    visual: (
     React.createElement("div",{className:"m-bombo-diagram"},React.createElement("img",{src:A+'bombo.png',alt:"Bombo del bingo",className:"m-bombo-img"}),React.createElement("div",{className:"m-bombo-callouts"},React.createElement("div",{className:"m-callout"},React.createElement("span",{className:"m-callout-num"},"①"),React.createElement("div",null,React.createElement("b",null,"Toca la Manivela (o el bombo)"),React.createElement("br",null),React.createElement("small",null,"La manivela gira de verdad, las bolas dan vueltas en 3D y cae 1 bola al bol."))),React.createElement("div",{className:"m-callout"},React.createElement("span",{className:"m-callout-num"},"②"),React.createElement("div",null,React.createElement("b",null,"Toca el Bol de Cristal"),React.createElement("br",null),React.createElement("small",null,"La bola sale en grande y la voz canta el número y su refrán."))),React.createElement("div",{className:"m-callout"},React.createElement("span",{className:"m-callout-num"},"③"),React.createElement("div",null,React.createElement("b",null,"Toca la Bola Grande"),React.createElement("br",null),React.createElement("small",null,"Viaja volando hasta su casilla en el tablero de 90 números."))),React.createElement("div",{className:"m-callout"},React.createElement("span",{className:"m-callout-num"},"④"),React.createElement("div",null,React.createElement("b",null,"Duende y Bola de Nieve grandes"),React.createElement("br",null),React.createElement("small",null,"A ambos lados del bombo para animar la partida cuando quieras.")))))
    ),
    bullets: [
     'Si había una bola en el bol y tocas la manivela otra vez, la bola anterior se coloca sola en el tablero y sale la siguiente.'
    ]
   },
   {
    id: 'm2-barra',
    icon: '🔗',
    shortTitle: '3. Invitar y Jugar',
    title: '3. Barra superior: Invitar y jugar con tu cartón',
    visual: (
     React.createElement("div",{className:"m-toolbar-showcase"},React.createElement("div",{className:"m-pill-demo"},React.createElement("span",null,"🔗 Invitación"),React.createElement("small",null,"Copia el enlace para WhatsApp")),React.createElement("div",{className:"m-pill-demo"},React.createElement("span",null,"👥 Jugadores"),React.createElement("small",null,"Mira quién está dentro y su cartón")),React.createElement("div",{className:"m-pill-demo highlight"},React.createElement("span",null,"🎟 Mi cartón ⇄ 🎱 Bombo"),React.createElement("small",null,"Juega con tu propio cartón sin salir")),React.createElement("div",{className:"m-pill-demo"},React.createElement("span",null,"🚪 Salir de la partida"),React.createElement("small",null,"Vuelve al inicio cuando acabes")))
    ),
    bullets: []
   },
   {
    id: 'm2-comprobar',
    icon: '🔍',
    shortTitle: '4. Comprobar Avisos',
    title: '4. Comprobar ¡Línea! y ¡Bingo!',
    visual: (
     React.createElement("div",{className:"m-review-showcase"},React.createElement("div",{className:"m-review-step"},React.createElement("b",null,"1. Cuando alguien pulsa ¡LÍNEA! o ¡BINGO!:"),React.createElement("p",null,"Se para el sorteo y en ",React.createElement("b",null,"todos los aparatos (incluido el tuyo)")," sale confeti y el duende bailando con el botón ",React.createElement("b",null,"«🔍 Comprobar cartón»"),".")),React.createElement("div",{className:"m-review-step"},React.createElement("b",null,"2. En la ventana de comprobación ves al instante:"),React.createElement("div",{style:{display:'flex',gap:'8px',flexWrap:'wrap',margin:'8px 0'}},React.createElement("span",{className:"m-step-pill",style:{background:'#e8f5e9',color:'#1b5e20'}},"✓ Marcados que SÍ han salido"),React.createElement("span",{className:"m-step-pill",style:{background:'#ffebee',color:'#b71c1c'}},"✗ Marcados que AÚN NO han salido"))),React.createElement("div",{className:"m-review-actions-demo"},React.createElement("button",{type:"button",className:"gold-button green compact",onClick:()=>{audio.fanfare();audio.bells();}},"✅ Dar por bueno (Probar fanfarria)"),React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>audio.disappointment()},"❌ Dar por malo y continuar (🎺 Oír decepción)")))
    ),
    bullets: []
   }
  ]
 },
 owner: {
  num: 'MANUAL 3',
  buttonLabel: '📖 Manual 3',
  badge: 'MANUAL 3 · ADMINISTRADORA MASTER (ELISABETH)',
  title: 'Manual 3 · Administradora Master (Elisabeth)',
  subtitle: 'Control total de todas las partidas, gestión de Administradores y secretos del bingo.',
  heroImg: A+'globo.png',
  cards: [
   {
    id: 'm3-partidas',
    icon: '🎱',
    shortTitle: '1. Entrar a Partidas',
    title: '1. Tus Partidas Creadas: Entrar con 1 toque',
    visual: (
     React.createElement("div",{className:"m-owner-room-demo"},React.createElement("div",{className:"m-mock-room-card"},React.createElement("div",{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},React.createElement("div",null,React.createElement("small",{style:{color:'#8d1b2b',fontWeight:700}},"PARTIDA"),React.createElement("div",{style:{font:'700 20px monospace'}},"AB12CD34")),React.createElement("span",{className:"m-step-pill",style:{background:'#e8f5e9',color:'#1b5e20'}},"En juego")),React.createElement("div",{style:{display:'flex',gap:'8px',margin:'10px 0'}},React.createElement("div",{className:"m-mock-btn green",style:{flex:1,fontSize:'13px'}},"🎱 Entrar al bombo"),React.createElement("div",{className:"m-mock-btn red",style:{flex:1,fontSize:'13px'}},"🎟 Entrar con cartón")),React.createElement("small",{style:{color:'#666'}},"👥 Ver jugadores · 🗑 Borrar o ↺ Restaurar partida")))
    ),
    bullets: [
     'En tu panel de Administradora Master ves todas las «Partidas Creadas» de cualquier administrador.',
     'Cada partida tiene dos botones directos: «🎱 Entrar al bombo» y «🎟 Entrar con cartón» para entrar al instante.'
    ]
   },
   {
    id: 'm3-admins',
    icon: '👑',
    shortTitle: '2. Administradora Master',
    title: '2. Administradora Master vs Administradores',
    visual: (
     React.createElement("div",{className:"m-visual-grid-2"},React.createElement("div",{className:"m-info-tile gold-tile"},React.createElement("div",{className:"m-tile-icons"},"👑 Administradora Master"),React.createElement("p",null,"Tú (Elisabeth) tienes el rango ",React.createElement("b",null,"Administradora Master"),": controlas todas las salas, todos los jugadores, todos los administradores y este Manual 3.")),React.createElement("div",{className:"m-info-tile green-tile"},React.createElement("div",{className:"m-tile-icons"},"✨ Tantos Administradores como quieras"),React.createElement("p",null,"Cualquier persona puede crear su cuenta en «✨ Crear nuevo Administrador» y dirigir partidas al instante. Desde tu panel Master puedes ",React.createElement("b",null,"Pausar"),", ",React.createElement("b",null,"Reactivar")," o ",React.createElement("b",null,"Dar de baja")," a cualquiera.")))
    ),
    bullets: [
     'Este Manual 3 y el botón «👑 Admin Master» solo te aparecen a ti (Elisabeth).'
    ]
   },
   {
    id: 'm3-frases',
    icon: '🗣',
    shortTitle: '3. Las 90 Frases',
    title: '3. Personalizar las frases de las 90 bolas',
    visual: (
     React.createElement("div",{className:"m-flow-diagram"},React.createElement("div",{className:"m-flow-step"},React.createElement("span",{className:"m-flow-num"},"⚙"),React.createElement("b",null,"Rueda de arriba"),React.createElement("small",null,"Abre Configuración en el bombo")),React.createElement("div",{className:"m-flow-arrow"},"➔"),React.createElement("div",{className:"m-flow-step"},React.createElement("span",{className:"m-flow-num"},"🗣"),React.createElement("b",null,"Frases de los números"),React.createElement("small",null,"Elige del 1 al 90")),React.createElement("div",{className:"m-flow-arrow"},"➔"),React.createElement("div",{className:"m-flow-step"},React.createElement("span",{className:"m-flow-num"},"♫"),React.createElement("b",null,"Escuchar y Guardar"),React.createElement("small",null,"Dedicatorias a medida")))
    ),
    bullets: [
     'Puedes poner bromas o dedicatorias familiares en cualquier número y recuperar la frase original cuando quieras.'
    ]
   }
  ]
 }
};

function ManualButton({role='player',compact=false}){
 const [open,setOpen]=useState(false);
 const [activeRole,setActiveRole]=useState(role);
 const bookRef=useRef(null);
 const topRef=useRef(null);

 const current = MANUALS[activeRole] || MANUALS.player;
 const btnInfo = MANUALS[role] || MANUALS.player;

 function openManual(){
  setActiveRole(role);
  setOpen(true);
 }

 function scrollToTop(){
  if(topRef.current){
   topRef.current.scrollIntoView({behavior:'smooth',block:'start'});
  }else if(bookRef.current){
   bookRef.current.scrollTo({top:0,behavior:'smooth'});
  }
 }

 function scrollToSection(id){
  const el=bookRef.current?.querySelector('#'+id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
 }

 return (
  React.createElement(React.Fragment,null,React.createElement("button",{type:"button",className:'gold-button green manual-open '+(compact?'compact':''),onClick:openManual},translateChild(btnInfo.buttonLabel)),open&&createPortal(
    React.createElement("div",{className:"manual-overlay",role:"dialog","aria-modal":"true","aria-label":current.title,onClick:()=>setOpen(false)},React.createElement("article",{className:"manual-book",ref:bookRef,onClick:e=>e.stopPropagation()},React.createElement("header",{className:"manual-topbar"},React.createElement("div",{className:"manual-topbar-left"},React.createElement("span",{className:"manual-version-tag"},"✦ ",translateChild(current.badge)," · V16"),React.createElement("button",{type:"button",className:"manual-quick-index-btn",onClick:scrollToTop},"↑ Índice"),role==='owner'&&(
         React.createElement("div",{className:"manual-switcher-pills"},[['player','Manual 1'],['host','Manual 2'],['owner','Manual 3']].map(([r,label])=>(
           React.createElement("button",{key:r,type:"button",className:'manual-switch-pill '+(activeRole===r?'active':''),onClick:()=>{setActiveRole(r);scrollToTop();}},label)
          )))
        )),React.createElement("button",{type:"button",className:"manual-close-x",onClick:()=>setOpen(false)},"Cerrar ×")),React.createElement("div",{className:"manual-cover",ref:topRef,id:"manual-top-index"},React.createElement("img",{src:current.heroImg,alt:""}),React.createElement("p",{className:"cover-eyebrow"},"EL BINGO DE ELISABETH · GUÍA VISUAL INTERACTIVA"),React.createElement("h1",null,translateChild(current.title)),React.createElement("p",{className:"cover-sub"},translateChild(current.subtitle))),React.createElement("nav",{className:"manual-index","aria-label":"Índice visual del manual"},current.cards.map(c=>(
        React.createElement("button",{key:c.id,type:"button",className:"manual-index-card-btn",onClick:()=>scrollToSection(c.id)},React.createElement("span",{className:"index-num"},c.icon),React.createElement("span",{className:"index-title"},translateChild(c.shortTitle)),React.createElement("span",{className:"index-arrow"},"↓"))
       ))),React.createElement("div",{className:"manual-chapters-wrap"},current.cards.map(c=>(
        React.createElement("section",{className:"manual-chapter visual-poster-chapter",id:c.id,key:c.id},React.createElement("div",{className:"poster-header"},React.createElement("span",{className:"poster-icon"},c.icon),React.createElement("h2",null,translateChild(c.title))),React.createElement("div",{className:"poster-visual-stage"},translateTree(c.visual)),c.bullets.length>0&&(
          React.createElement("ul",{className:"poster-bullets"},c.bullets.map((b,idx)=>React.createElement("li",{key:idx},translateChild(b))))
         ),React.createElement("div",{className:"chapter-footer-nav"},React.createElement("button",{type:"button",className:"manual-back-to-index-btn",onClick:scrollToTop},"↑ Volver al índice")))
       ))),React.createElement("button",{type:"button",className:"manual-floating-index-btn",onClick:scrollToTop,title:"Subir al índice"},"↑ Índice"),React.createElement("footer",{className:"manual-footer-note"},"Creado con cariño por Elisabeth · V16"))),
    document.body
   ))
 );
}

    return ManualButton;
  })();

  // --- AdminProfile.jsx ---
  const AdminProfile = (() => {
    

function AdminProfile({uid=net.auth.currentUser?.uid,email=net.auth.currentUser?.email,isOwner=false}){
 const [first,setFirst]=useState(''),[last,setLast]=useState(''),[exists,setExists]=useState(false),[ready,setReady]=useState(true),[busy,setBusy]=useState(false),[message,setMessage]=useState('');
 useEffect(()=>{
  if(!uid)return;
  return net.onSnapshot(net.doc(net.db,'administrators',uid),s=>{setExists(s.exists());setFirst(s.data()?.firstName||'');setLast(s.data()?.lastName||'');setReady(true)},()=>setReady(true));
 },[uid]);

 return (
  React.createElement("details",{className:"admin-profile "+(isOwner?'is-owner-profile':'')},React.createElement("summary",null,isOwner ? '✏ Modificar mi nombre y apellidos' : '✏ Modificar nombre y apellidos'),React.createElement("form",{className:"admin-profile-form",onSubmit:async e=>{
    e.preventDefault();
    setBusy(true);
    try{
     await net.setDoc(net.doc(net.db,'administrators',uid),{firstName:first.trim(),lastName:last.trim(),...(!exists?{email,status:net.isMasterAdmin(net.auth.currentUser)||uid===net.ADMIN_UID?'approved':'pending',createdAt:net.serverTimestamp()}:{})},{merge:true});
     setMessage('✓ Datos guardados correctamente.');
    }catch(err){
     setMessage(net.friendlyError(err));
    }finally{
     setBusy(false);
    }
   }},React.createElement("div",{className:"profile-input-row"},React.createElement("label",null,React.createElement("span",null,"Nombre"),React.createElement("input",{required:true,maxLength:60,value:first,onChange:e=>setFirst(e.target.value),placeholder:"Ej: Elisabeth"})),React.createElement("label",null,React.createElement("span",null,"Apellidos"),React.createElement("input",{required:true,maxLength:100,value:last,onChange:e=>setLast(e.target.value),placeholder:"Ej: Altarriba"}))),React.createElement("div",{className:"profile-form-footer"},React.createElement("button",{className:"gold-button compact",disabled:!ready||busy||!first.trim()||!last.trim()},busy?'Guardando…':'Guardar mis datos'),message&&React.createElement("p",{role:"status",className:"profile-message"},message))))
 );
}

    return AdminProfile;
  })();

  // --- AdminAccounts.jsx ---
  const AdminAccounts = (() => {
    



function RoomInfo({room,request,onEnterRoom}){
 const [players,setPlayers]=useState([]);
 const isMaster=net.isMasterAdmin(net.auth.currentUser);
 useEffect(()=>net.onSnapshot(net.collection(net.db,'rooms',room.id,'players'),s=>setPlayers(s.docs.map(d=>({uid:d.id,...d.data()}))),()=>{}),[room.id]);
 const inProgress = (room.drawn?.length||0)>0 || room.pending!==null;
 return (
  React.createElement("article",{className:"room-card "+(room.archived?'is-archived':'')},React.createElement("div",{className:"room-card-header"},React.createElement("div",null,React.createElement("span",{className:"room-badge"},"Partida"),React.createElement("h4",{className:"room-code"},room.id)),React.createElement("span",{className:"room-status-pill "+(room.archived?'status-archived':inProgress?'status-active':'status-ready')},room.archived?'Retirada':inProgress?'En juego':'Preparada')),React.createElement("p",{className:"room-owner"},"Creada por: ",React.createElement("b",null,room.ownerEmail||(room.ownerId===net.ADMIN_UID||!room.ownerId?'Elisabeth':room.ownerId))),React.createElement("div",{className:"room-meta-chips"},React.createElement("span",null,"👥 ",players.length," jugadores"),React.createElement("span",null,"🎱 ",room.drawn?.length||0,"/90 bolas")),!room.archived&&onEnterRoom&&(
    React.createElement("div",{className:"room-enter-actions"},React.createElement("button",{type:"button",className:"gold-button compact green",onClick:()=>onEnterRoom(room.id,'bombo')},"🎱 Entrar al bombo"),React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>onEnterRoom(room.id,'card')},"🎟 Entrar con cartón"))
   ),React.createElement("details",{className:"room-participants-dropdown"},React.createElement("summary",null,"👥 Ver jugadores (",players.length,")"),React.createElement("div",{className:"participants-list"},players.length===0?React.createElement("p",{className:"empty-hint"},"Sin jugadores todavía."):players.map((p,i)=>(
      React.createElement("div",{key:i,className:"participant-row"},React.createElement("span",{className:"participant-name"},React.createElement("b",null,p.name)," ",p.card===null?'(Sin cartón)':'· Cartón '+(p.card+1)),React.createElement("button",{type:"button",className:"text-button remove-btn",onClick:()=>request({kind:'player',id:room.id,uid:p.uid,label:p.name})},"Borrar"))
     )))),React.createElement("div",{className:"room-actions"},React.createElement("button",{type:"button",className:"text-button remove-btn",onClick:()=>request({kind:'room',id:room.id,value:!room.archived,label:'la partida '+room.id})},room.archived?'↺ Restaurar partida':'🗑 Borrar partida'),room.archived&&isMaster&&React.createElement("button",{type:"button",className:"text-button permanent-delete-btn",onClick:()=>request({kind:'room-delete',id:room.id,label:room.id})},"🗑 Borrar para siempre")))
 );
}

function AdminAccounts({onClose,onEnterRoom,onViewAsAdmin}){
 const [rows,setRows]=useState([]),[rooms,setRooms]=useState([]),[error,setError]=useState(''),[busy,setBusy]=useState(false),[confirm,setConfirm]=useState(null),[statModal,setStatModal]=useState(null);
 useEffect(()=>{
  const a=net.onSnapshot(net.collection(net.db,'administrators'),s=>{
   const list=s.docs.map(d=>({id:d.id,...d.data()}));
   setRows(list);
   // Si Elisabeth entra con su cuenta principal, aprueba automáticamente a los nuevos administradores pendientes
   if(net.auth.currentUser?.uid===net.ADMIN_UID){
    list.forEach(r=>{
     if(r.id!==net.ADMIN_UID&&r.status==='pending'){
      net.setDoc(net.doc(net.db,'administrators',r.id),{status:'approved'},{merge:true}).catch(()=>{});
     }
    });
   }
  },()=>{});
  const b=net.onSnapshot(net.collection(net.db,'rooms'),s=>setRooms(s.docs.map(d=>({id:d.id,...d.data()}))),()=>{});
  return()=>{a();b()};
 },[]);

 async function apply(c){
  setBusy(true);setError('');
  try{
   if(c.kind==='room-delete')await net.permanentlyDeleteRoom(c.id);
   else if(c.kind==='admin-permanent')await net.setDoc(net.doc(net.db,'administrators',c.id),{status:'removed',permanentlyRemoved:true},{merge:true});
   else if(c.kind==='player')await net.removePlayer(c.id,c.uid);
   else await net.setDoc(net.doc(net.db,c.kind==='room'?'rooms':'administrators',c.id),c.kind==='room'?{archived:c.value}:{status:c.value},{merge:true});
   setConfirm(null);
  }catch(e){setError(net.friendlyError(e));}
  finally{setBusy(false);}
 }

 const ownerRow = rows.find(r=>r.id===net.ADMIN_UID);
 const ownerName = [ownerRow?.firstName||'Elisabeth',ownerRow?.lastName].filter(Boolean).join(' ');
 const otherAdmins = rows.filter(r=>r.id!==net.ADMIN_UID&&!r.permanentlyRemoved);
 const activeRooms = rooms.filter(r=>!r.archived);
 const archivedRooms = rooms.filter(r=>r.archived);
 const activeAdmins=otherAdmins.filter(r=>r.status!=='removed'&&r.status!=='suspended');

 const handleEnter = (id, tab) => {
  if(onEnterRoom) onEnterRoom(id, tab);
  if(onClose) onClose();
 };

 const content = (
  React.createElement("section",{className:"admin-accounts-panel"},error&&React.createElement("div",{className:"shared-error",role:"alert"},error),React.createElement("div",{className:"admin-section-block"},React.createElement("h3",{className:"section-title"},"🎱 Partidas Creadas (",activeRooms.length,")"),React.createElement("div",{className:"rooms-grid"},activeRooms.length===0?React.createElement("p",{className:"empty-hint"},"No hay partidas activas en este momento."):activeRooms.map(r=>React.createElement(RoomInfo,{key:r.id,room:r,request:setConfirm,onEnterRoom:handleEnter}))),archivedRooms.length>0&&(
     React.createElement("details",{className:"archived-rooms-toggle"},React.createElement("summary",null,"Ver partidas retiradas (",archivedRooms.length,")"),React.createElement("div",{className:"rooms-grid",style:{marginTop:'12px'}},archivedRooms.map(r=>React.createElement(RoomInfo,{key:r.id,room:r,request:setConfirm,onEnterRoom:handleEnter}))))
    )),React.createElement("details",{className:"admin-config-collapsible",open:!!onClose},React.createElement("summary",{className:"admin-config-summary"},"👑 Panel de Administradora Master (Elisabeth) y Manual 3"),React.createElement("div",{className:"admin-config-inner"},React.createElement("div",{className:"owner-special-card"},React.createElement("div",{className:"owner-card-crown"},"👑"),React.createElement("div",{className:"owner-card-info"},React.createElement("span",{className:"owner-label"},"👑 ADMINISTRADORA MASTER · CONTROL TOTAL"),React.createElement("h3",{className:"owner-name"},ownerName),React.createElement("p",{className:"owner-email"},net.auth.currentUser?.email),React.createElement("p",{className:"owner-protected-badge"},"✦ Diferencia Master: Puedes controlar todas las partidas, gestionar a todos los administradores y ver el Manual 3.")),React.createElement("div",{className:"owner-profile-box"},React.createElement(AdminProfile,{uid:net.auth.currentUser?.uid||net.ADMIN_UID,email:net.auth.currentUser?.email,isOwner:true})),React.createElement("div",{className:"owner-manual-box"},React.createElement(ManualButton,{role:"owner"})),onViewAsAdmin&&React.createElement("button",{type:"button",className:"gold-button compact master-view-toggle",onClick:onViewAsAdmin},"👁 Ver como administrador")),React.createElement("div",{className:"admin-stats-grid"},React.createElement("button",{type:"button",className:"stat-pill stat-pill-button",onClick:()=>setStatModal('active-admins')},React.createElement("span",{className:"stat-num"},1+activeAdmins.length),React.createElement("span",{className:"stat-label"},"Administradores activos")),React.createElement("button",{type:"button",className:"stat-pill stat-pill-button",onClick:()=>setStatModal('other-admins')},React.createElement("span",{className:"stat-num"},otherAdmins.length),React.createElement("span",{className:"stat-label"},"Otros administradores")),React.createElement("button",{type:"button",className:"stat-pill stat-pill-button",onClick:()=>setStatModal('active-rooms')},React.createElement("span",{className:"stat-num"},activeRooms.length),React.createElement("span",{className:"stat-label"},"Partidas activas"))),statModal&&React.createElement("div",{className:"stat-toast-backdrop",onClick:()=>setStatModal(null)},React.createElement("section",{className:"stat-toast",role:"dialog","aria-modal":"true",onClick:e=>e.stopPropagation()},React.createElement("button",{type:"button",className:"close icon-button","aria-label":"Cerrar",onClick:()=>setStatModal(null)},"×"),React.createElement("h3",null,statModal==='active-admins'?'Administradores activos':statModal==='other-admins'?'Otros administradores':'Partidas activas'),React.createElement("p",null,statModal==='active-admins'?'Incluye tu cuenta Master y las cuentas que pueden acceder al panel.':statModal==='other-admins'?'Cuentas registradas, incluidas las suspendidas o retiradas.':'Salas que no están retiradas. Las preparadas también cuentan.'),statModal==='active-admins'?React.createElement("ul",null,React.createElement("li",null,ownerName+" · Master"),activeAdmins.map(r=>React.createElement("li",{key:r.id},[r.firstName,r.lastName].filter(Boolean).join(' ')||r.email))):statModal==='other-admins'?React.createElement("ul",null,otherAdmins.length?otherAdmins.map(r=>React.createElement("li",{key:r.id},([r.firstName,r.lastName].filter(Boolean).join(' ')||r.email)+" · "+(r.status==='removed'?'Retirado':r.status==='suspended'?'Suspendido':'Activo'))):React.createElement("li",null,"No hay otros administradores.")):React.createElement("ul",null,activeRooms.length?activeRooms.map(r=>React.createElement("li",{key:r.id},r.id+" · "+(((r.drawn?.length||0)>0||r.pending!==null)?'En juego':'Preparada'))):React.createElement("li",null,"No hay partidas activas.")))),React.createElement("details",{className:"admin-section-block admin-management-details"},React.createElement("summary",{className:"section-title"},"👥 Gestión de Administradores (",otherAdmins.length,")"),React.createElement("p",{className:"section-subtitle"},"Cualquier persona puede crear su cuenta de Administrador en la pantalla de acceso. Desde aquí tú (como Administradora Master) puedes verlos, activarlos, suspenderlos o borrarlos."),otherAdmins.length===0?React.createElement("p",{className:"empty-hint"},"Todavía no hay otros administradores registrados. Pueden crear su cuenta pulsando «✨ Crear cuenta de Administrador nueva» al entrar en Administrador."):(
       React.createElement("div",{className:"admin-delegates-list"},otherAdmins.map(r=>{
         const name=[r.firstName,r.lastName].filter(Boolean).join(' ')||r.email||'Administrador';
         const isSuspended = r.status==='suspended' || r.status==='removed';
         return (
          React.createElement("article",{key:r.id,className:"delegate-card status-"+(isSuspended?r.status:'approved')},React.createElement("div",{className:"delegate-header"},React.createElement("div",null,React.createElement("h4",{className:"delegate-name"},name),React.createElement("span",{className:"delegate-email"},r.email)),React.createElement("span",{className:"status-chip chip-"+(isSuspended?r.status:'approved')},r.status==='suspended'?'✕ Suspendido':r.status==='removed'?'🗑 Retirado':'✓ Administrador Activo')),React.createElement(AdminProfile,{uid:r.id,email:r.email,isOwner:false}),React.createElement("div",{className:"delegate-actions"},React.createElement("button",{className:"gold-button compact",disabled:busy||r.permanentlyRemoved,onClick:()=>setConfirm({kind:'admin',id:r.id,value:isSuspended?'approved':'suspended',label:r.email})},isSuspended?'✓ Activar administrador':'⏸ Suspender'),r.status==='removed'?React.createElement("button",{className:"text-button compact permanent-delete-btn",disabled:busy||r.permanentlyRemoved,onClick:()=>setConfirm({kind:'admin-permanent',id:r.id,label:r.email||name})},"🗑 Borrar para siempre"):React.createElement("button",{className:"text-button compact remove-btn",disabled:busy,onClick:()=>setConfirm({kind:'admin',id:r.id,value:'removed',label:r.email})},"Borrar")))
         );
        }))
      )))),confirm&&React.createElement("div",{className:"modal-backdrop"},React.createElement("section",{className:"modal",role:"dialog","aria-modal":"true","aria-label":confirm.kind==='room-delete'?'Borrar partida para siempre':confirm.kind==='admin-permanent'?'Retirar administrador para siempre':'Confirmar cambio'},React.createElement("span",{className:"modal-star"},"✦"),React.createElement("h2",null,confirm.kind==='room-delete'?'¿Borrar esta partida para siempre?':confirm.kind==='admin-permanent'?'¿Retirar este administrador para siempre?':'¿Confirmas este cambio?'),confirm.kind==='room-delete'?React.createElement("p",{className:"confirm-target"},"Se eliminará la partida ",React.createElement("b",null,confirm.label)," y todos sus datos. No se puede deshacer."):confirm.kind==='admin-permanent'?React.createElement("p",{className:"confirm-target"},"Se ocultará ",React.createElement("b",null,confirm.label)," del panel y su acceso quedará bloqueado. No podrás reactivarlo desde la app. Su usuario de inicio de sesión sigue en Firebase Authentication."):React.createElement("p",{className:"confirm-target"},React.createElement("b",null,confirm.label)),React.createElement("div",{className:"reset-actions"},React.createElement("button",{className:"gold-button green",disabled:busy,onClick:()=>setConfirm(null)},"Cancelar"),React.createElement("button",{className:"gold-button",disabled:busy,onClick:()=>apply(confirm)},confirm.kind==='room-delete'||confirm.kind==='admin-permanent'?'Borrar para siempre':'Confirmar')))))
 );

 return onClose ? (
  React.createElement("div",{className:"modal-backdrop"},React.createElement("section",{className:"modal shared-roster admin-modal-wrap",role:"dialog","aria-modal":"true","aria-label":"Administración general"},React.createElement("button",{className:"text-button close-modal-btn",onClick:onClose},"Cerrar ×"),content))
 ) : content;
}

    return AdminAccounts;
  })();

  // --- WelcomeCarousel.jsx ---
  const WelcomeCarousel = (() => {
    


function PrunaVideo(){
 const ref=useRef(),[playing,setPlaying]=useState(false);
 useEffect(()=>{
  const v=ref.current;
  if(!v)return;
  v.muted=false;
  v.volume=1;
  v.currentTime=0;
  v.play().then(()=>{
   setPlaying(true);
   audio.prunaVoice(v,true);
  }).catch(()=>{
   setPlaying(false);
  });
  return()=>audio.prunaVoice(v,false);
 },[]);

 function togglePruna(){
  audio.unlock();
  const v=ref.current;
  if(!v)return;
  if(!v.paused&&!v.ended){
   v.pause();
   setPlaying(false);
   audio.prunaVoice(v,false);
  }else{
   if(v.ended||v.currentTime>=v.duration-0.1)v.currentTime=0;
   v.muted=false;
   v.volume=1;
   v.play().then(()=>{
    setPlaying(true);
    audio.prunaVoice(v,true);
   }).catch(()=>{});
  }
 }

 return (
  React.createElement("div",{className:"pruna-feature"},React.createElement("div",{className:"pruna-player",onClick:e=>e.currentTarget.classList.toggle('is-zoomed'),role:"button",tabIndex:0,onKeyDown:e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.currentTarget.classList.toggle('is-zoomed');}},title:"Toca el vídeo para ampliarlo"},React.createElement("video",{ref:ref,className:"pruna-page",src:"./pruna.mp4",playsInline:true,preload:"auto","aria-label":"Pruna bailando",onPlay:()=>{setPlaying(true);audio.prunaVoice(ref.current,true);},onPause:()=>{setPlaying(false);audio.prunaVoice(ref.current,false);},onEnded:()=>{setPlaying(false);audio.prunaVoice(ref.current,false);}})),React.createElement("button",{type:"button",className:"gold-button compact pruna-play-control",onClick:e=>{e.stopPropagation();togglePruna();}},playing?'⏸ Parar Pruna':'▶ Reproducir Pruna'))
 );
}

function WelcomeCarousel({onEnter,onAdmin}){
 const [page,setPage]=useState(()=>{try{const n=Number(localStorage.getItem('bingo-welcome-character'));return Number.isInteger(n)&&n>=0&&n<=2?n:0}catch{return 0}});
 const start=useRef(null);
 useEffect(()=>{try{localStorage.setItem('bingo-welcome-character',String(page))}catch{}},[page]);

 function handlePointerDown(e){
  if(e.target.closest('.snowglobe') || e.target.closest('video') || (e.target.closest('button')&&!e.target.closest('.carousel-pages')) || e.target.closest('.pruna-player')) return;
  start.current={x:e.clientX, y:e.clientY};
 }

 function handlePointerUp(e){
  if(!start.current) return;
  const dx=e.clientX - start.current.x;
  const dy=e.clientY - start.current.y;
  start.current=null;
  if(Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)){
   setPage(p=>Math.max(0,Math.min(2, p + (dx < 0 ? 1 : -1))));
  }
 }

 return (
  React.createElement("main",{className:"welcome-carousel"},React.createElement("p",{className:"eyebrow"},"UNA TRADICIÓN · UN POQUITO DE MAGIA"),React.createElement("h1",{className:"intro-title"},"La Navidad",React.createElement("br",null),"se juega ",React.createElement("em",null,"juntos.")),React.createElement("div",{className:"carousel-stage",onPointerDown:handlePointerDown,onPointerUp:handlePointerUp,onPointerCancel:()=>start.current=null},page===0 ? React.createElement(PrunaVideo,null) : page===1 ? React.createElement(SnowGlobe,{className:"carousel-friend"}) : React.createElement(Gnome,{className:"carousel-friend"})),React.createElement("p",{className:"carousel-hint"},page===0
     ? 'Toca a Pruna para reproducir o parar · Desliza para descubrir más'
     : page===1
     ? '1 toque: luz · 2: más luz · 3: cobra vida. Desliza sobre la bola para que nieve.'
     : 'Toca al duende para verlo bailar (toca otra vez para parar)'),React.createElement("nav",{className:"carousel-pages","aria-label":"Páginas de bienvenida",onPointerDown:handlePointerDown,onPointerUp:handlePointerUp,onPointerCancel:()=>start.current=null},['Pruna','Bola de nieve','Duende'].map((name,i)=>(
     React.createElement("button",{key:name,type:"button",onClick:()=>setPage(i),"aria-label":'Ver '+name,"aria-current":page===i?'page':undefined},React.createElement("span",null),page===i && React.createElement("small",null,name))
    ))),React.createElement("div",{className:"welcome-access"},React.createElement("button",{type:"button",className:"gold-button",onClick:()=>{
      try{ audio.unlock(); }catch{}
      onEnter?.();
     }},"Entrar a jugar"),React.createElement("button",{type:"button",className:"gold-button green",onClick:()=>{
      try{ audio.unlock(); }catch{}
      (onAdmin || onEnter)?.();
     }},"Administrador")))
 );
}

    return WelcomeCarousel;
  })();

  // --- RollingCage.jsx ---
  const RollingCage = (() => {
    
function RollingCage({rotation, duration=2800}){
 const video=useRef(),previous=useRef(rotation),timer=useRef(),[active,setActive]=useState(false);
 useEffect(()=>{
  if(rotation===previous.current)return;
  previous.current=rotation;
  setActive(true);
  clearTimeout(timer.current);
  timer.current=setTimeout(()=>setActive(false),duration);
 },[rotation,duration]);
 useEffect(()=>{
  const v=video.current;
  if(!v)return;
  if(active){
   try{v.currentTime=0.05;v.playbackRate=1.3;}catch{}
   v.play().catch(()=>{});
  } else {
   v.pause();
  }
 },[active]);
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 return (
  React.createElement("video",{ref:video,className:'rolling-cage-video '+(active?'active':''),src:"./bombo-giro.mp4",muted:true,playsInline:true,preload:"auto",onTimeUpdate:e=>{
    if(e.currentTarget.currentTime>1.18){
     e.currentTarget.currentTime=0.05;
     e.currentTarget.play().catch(()=>{});
    }
   },"aria-hidden":"true"})
 );
}

    return RollingCage;
  })();

  // --- SharedBingo.jsx ---
  const { Confetti, SharedBingo } = (() => {
    








const COLORS=['#8d1b2b','#194e3c','#245882','#6a387a','#987125','#087f8c','#ed7864','#d75a91','#b6a0df','#8dcbe6','#9bd4b0','#f3ce63','#e99535','#90664c','#ffffff'];
const readStored=k=>{try{return localStorage.getItem(k)||''}catch{return ''}};

function encodeClaimRequestId(cards,marksByCard,claimedCard){
 const list=(cards&&cards.length?cards:[claimedCard]).slice(0,3);
 const entries=list.map(cid=>{
  const nums=(CARDS[cid]||[]).flat().filter(Boolean);
  const m=marksByCard?.[cid]||[];
  let mask=0;
  nums.forEach((n,idx)=>{if(m.includes(n))mask+=(2**idx);});
  return cid.toString(36)+'.'+mask.toString(36);
 });
 const nonce=Math.random().toString(36).slice(2,6);
 return 'm:'+(claimedCard??list[0]??0).toString(36)+':'+entries.join('-')+':'+nonce;
}

function decodeClaimRequestId(requestId,fallbackCard,fallbackMarks){
 if(typeof requestId==='string'&&requestId.startsWith('m:')){
  try{
   const [,claimedStr,entriesStr]=requestId.split(':');
   const claimedCard=parseInt(claimedStr,36);
   const cards=[];
   const marksByCard={};
   for(const part of (entriesStr||'').split('-')){
    const [cidStr,maskStr]=part.split('.');
    const cid=parseInt(cidStr,36);
    const mask=parseInt(maskStr||'0',36);
    if(CARDS[cid]){
     cards.push(cid);
     const nums=CARDS[cid].flat().filter(Boolean);
     marksByCard[cid]=nums.filter((_,idx)=>Math.floor(mask/(2**idx))%2===1);
    }
   }
   if(cards.length>0){
    const ordered=cards.includes(claimedCard)?[claimedCard,...cards.filter(c=>c!==claimedCard)]:cards;
    return {claimedCard:ordered[0],cards:ordered,marksByCard};
   }
  }catch{}
 }
 const fc=fallbackCard??0;
 return {claimedCard:fc,cards:[fc],marksByCard:{[fc]:fallbackMarks||[]}};
}

function analyzeCardMarks(cardId,marks,drawnSet){
 const grid=CARDS[cardId]||[];
 const validMarked=marks.filter(n=>drawnSet.has(n));
 const invalidMarked=marks.filter(n=>!drawnSet.has(n));
 const hasValidLine=grid.some(row=>{
  const rowNums=row.filter(Boolean);
  return rowNums.length===5&&rowNums.every(n=>marks.includes(n)&&drawnSet.has(n));
 });
 const allNums=grid.flat().filter(Boolean);
 const hasValidBingo=allNums.length===15&&allNums.every(n=>marks.includes(n)&&drawnSet.has(n));
 return {validMarked,invalidMarked,hasValidLine,hasValidBingo};
}

const CONFETTI_COLORS=['#ffd700','#ff3b5c','#2ecc71','#3498db','#ff9f1c','#e056fd','#ffffff','#f39c12'];
function Confetti(){
 return (
  React.createElement("div",{className:"confetti-rain","aria-hidden":"true"},Array.from({length:85},(_,i)=>(
    React.createElement("i",{key:i,style:{
      left:`${(i*17.3)%100}%`,
      '--c':CONFETTI_COLORS[i%CONFETTI_COLORS.length],
      '--d':`${2.2+(i%7)*0.45}s`,
      '--delay':`${-(i%11)*0.22}s`,
      '--drift':`${(i%2===0?1:-1)*(25+(i%5)*18)}px`,
      width:`${7+(i%4)*3}px`,
      height:`${10+(i%5)*4}px`
     }})
   )))
 );
}

function Card({id,marks=[],onMark,color='#8d1b2b',chip='auto',staticPreview=false,children}){
 return (
  React.createElement("div",{className:'bingo-card '+(color==='#ffffff'?'white-card ':'')+(chip==='transparent'?'clear-chips':''),style:{'--card-color':color,'--chip-color':chip==='auto'?color:chip}},React.createElement("div",{className:"card-heading"},React.createElement(SnowGlobe,{className:"card-globe",staticPreview:staticPreview}),React.createElement("div",{className:"card-heading-title"},React.createElement("h2",null,"CARTÓN N.º ",String(id+1).padStart(2,'0')),React.createElement("div",{className:"card-heading-controls"},children)),React.createElement(Gnome,{className:"card-gnome",staticPreview:staticPreview})),React.createElement("div",{className:"card-grid"},CARDS[id].flat().map((n,i)=>n?(
     React.createElement("button",{key:i,disabled:!onMark,onClick:e=>onMark?.(n,e),className:marks.includes(n)?'marked':'',"aria-label":`${n}${marks.includes(n)?', marcado':''}`,"aria-pressed":marks.includes(n)},React.createElement("span",null,n))
    ):(
     React.createElement("div",{key:i,className:"blank"},"❄")
    ))))
 );
}

function Celebration({event,isAdmin,onCheckClaim,onClose}){
 useEffect(()=>{
  if(event.type==='rejected'){
   audio.disappointment();
  }else if(event.type==='claim'||event.type==='approved'){
   audio.fanfare();
   if(event.type==='approved')audio.bells();
  }
  return()=>audio.stopSpeech();
 },[event?.id,event?.type]);

 if(event.type==='greeting')return React.createElement(Greeting,{onClose:onClose});

 if(event.type==='rejected'){
  return (
   React.createElement("div",{className:"greeting-overlay rejected-overlay",onClick:onClose},React.createElement("section",{className:"greeting-show rejected-show",role:"dialog","aria-modal":"true","aria-label":"Aviso rechazado",onClick:e=>e.stopPropagation()},React.createElement("div",{className:"rejected-icon"},"🎺😅"),React.createElement("h2",null,"¡Ohhh! ¡Falsa alarma de ",event.name,"!"),React.createElement("p",{className:"rejected-copy"},"Hemos comprobado el cartón y todavía no había ",React.createElement("b",null,event.kind==='line'?'Línea':'Bingo')," válido."),React.createElement("p",{className:"rejected-sub"},"¡No pasa nada, sigue girando el bombo y continúa la partida!"),React.createElement("div",{className:"celebration-actions"},React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>audio.disappointment()},"🎺 Volver a oír música"),React.createElement("button",{type:"button",className:"gold-button green compact",onClick:onClose},"¡Seguir jugando!"))))
  );
 }

 return (
  React.createElement("div",{className:"greeting-overlay"},React.createElement(Confetti,null),React.createElement("section",{className:"greeting-show",role:"dialog","aria-modal":"true","aria-label":"Aviso de la partida"},React.createElement("span",{className:"celebration-badge"},event.type==='approved'?'🏆 ¡PREMIO CONFIRMADO!':'⏸ PARTIDA EN PAUSA'),React.createElement("h2",null,event.type==='approved'
      ? `¡Felicidades, ${event.name}! ¡${event.kind==='line'?'LÍNEA':'BINGO'} VÁLIDO!`
      : `¡${event.name} ha cantado ${event.kind==='line'?'LÍNEA':'BINGO'}!`),React.createElement(Gnome,{className:"broadcast-gnome",autoGreet:true,onTap:onClose}),event.type==='claim'&&React.createElement("p",null,"¡El duende para la partida! Vamos a comprobar el cartón N.º ",(event.card??0)+1,"."),event.type==='approved'&&React.createElement("p",null,"¡",event.kind==='line'?'Línea confirmada':'Bingo confirmado'," por el administrador! ¡Qué alegría!"),React.createElement("div",{className:"celebration-actions"},isAdmin&&event.type==='claim'&&onCheckClaim&&(
      React.createElement("button",{type:"button",className:"gold-button green",onClick:()=>{onClose();onCheckClaim();}},"🔍 Comprobar cartón de ",event.name)
     ),React.createElement("button",{type:"button",className:"gold-button compact",onClick:onClose},isAdmin&&event.type==='claim'?'Cerrar baile':'Continuar'))))
 );
}

function LobbyPruna({page=0}){
 const [playing,setPlaying]=useState(false),[blocked,setBlocked]=useState(false),[zoomed,setZoomed]=useState(false),ref=useRef();
 useEffect(()=>{
  if(page!==0)return;
  const v=ref.current;if(!v)return;
  v.loop=false;
  v.muted=false;v.volume=1;
  v.play().then(()=>setPlaying(true)).catch(()=>{
   v.muted=true;
   v.play().then(()=>setPlaying(true)).catch(()=>{setBlocked(true);setPlaying(false);});
  });
  return()=>audio.prunaVoice(v,false);
 },[page]);
 function toggle(){
  audio.unlock();
  const v=ref.current;if(!v)return;
  v.loop=false;
  if(!v.paused&&!v.ended){v.pause();audio.prunaVoice(v,false);setPlaying(false);}
  else{
   if(v.ended||v.currentTime>=v.duration-0.05)v.currentTime=0;
   v.muted=false;v.volume=1;
   v.play().then(()=>{setPlaying(true);setBlocked(false);}).catch(()=>setBlocked(true));
  }
 }
 if(page===1)return React.createElement("div",{className:"lobby-snowglobe-wrap"},React.createElement(SnowGlobe,{className:"lobby-snowglobe"}));
 if(page===2)return React.createElement("div",{className:"lobby-friend-wrap"},React.createElement(Gnome,{className:"carousel-friend lobby-gnome"}));
 return React.createElement("div",{className:"lobby-pruna-wrap"},React.createElement("div",{className:'lobby-pruna-box '+(zoomed?'is-zoomed':''),onClick:()=>setZoomed(v=>!v),role:"button",tabIndex:0,onKeyDown:e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setZoomed(v=>!v);}},title:"Toca el vídeo para ampliarlo"},React.createElement("video",{ref:ref,className:"lobby-pruna-media",src:"./pruna.mp4",playsInline:true,"aria-label":"Pruna bailando",onPlay:()=>{setPlaying(true);if(ref.current&&!ref.current.muted)audio.prunaVoice(ref.current,true);setBlocked(false);},onPause:()=>{setPlaying(false);if(ref.current)audio.prunaVoice(ref.current,false);},onEnded:()=>{setPlaying(false);if(ref.current)audio.prunaVoice(ref.current,false);}})),React.createElement("div",{className:"pruna-control-row"},React.createElement("button",{type:"button",className:"gold-button compact",onClick:toggle},playing?'⏸ Parar Pruna':'▶ Reproducir Pruna'),blocked&&React.createElement("span",{className:"lobby-playback-note"},"El navegador necesita que pulses reproducir.")));
}

function MasterPasswordPrompt({onClose,onVerified}){
 const [value,setValue]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 return React.createElement("div",{className:"modal-backdrop master-gate-backdrop"},React.createElement("form",{className:"modal master-gate-modal",role:"dialog","aria-modal":"true","aria-label":"Verificación",onSubmit:async e=>{e.preventDefault();if(!value.trim()||busy)return;setBusy(true);setError('');try{const result=await net.signInWithEmailAndPassword(net.auth,net.MASTER_EMAILS[0],value);setValue('');onVerified(result.user)}catch{setError('No se pudo verificar.')}finally{setBusy(false)}}},React.createElement("span",{className:"modal-star"},"✦"),React.createElement("h2",null,"Verificación"),React.createElement("input",{className:"master-password-input",type:"password",autoComplete:"current-password",placeholder:"Contraseña",value,onChange:e=>setValue(e.target.value),autoFocus:true}),error&&React.createElement("p",{className:"master-gate-error",role:"alert"},error),React.createElement("div",{className:"reset-actions"},React.createElement("button",{type:"button",className:"gold-button green",disabled:busy,onClick:onClose},"Cancelar"),React.createElement("button",{type:"submit",className:"gold-button",disabled:busy||!value.trim()},busy?'…':'Continuar'))));
}

function ContactPopup({onClose}){
 return React.createElement("div",{className:"modal-backdrop contact-backdrop",onClick:onClose},React.createElement("section",{className:"modal contact-modal",role:"dialog","aria-modal":"true","aria-label":"Contacto",onClick:e=>e.stopPropagation()},React.createElement("button",{type:"button",className:"close icon-button","aria-label":"Cerrar",onClick:onClose},"×"),React.createElement("span",{className:"contact-sparkles"},"✦ ✧ ✦"),React.createElement("h2",null,"Un saludo de Elisabeth"),React.createElement("p",{className:"contact-note"},"Gracias por compartir la alegría de la Navidad."),React.createElement("a",{className:"contact-email-link",href:"mailto:elialtarriba@gmail.com"},"✉️ elialtarriba@gmail.com"),React.createElement("p",{className:"contact-signature"},"Con cariño, Elisabeth")));
}

class HostAppBoundary extends React.Component{
 constructor(props){super(props);this.state={failed:false};}
 static getDerivedStateFromError(){return {failed:true};}
 componentDidCatch(error){console.error('No se pudo montar la pantalla del bombo.',error);}
 render(){
  if(this.state.failed)return React.createElement("main",{className:"room-error-shell",role:"alert"},React.createElement("h1",null,"No se pudo abrir el bombo"),React.createElement("p",null,"La sala se ha creado y está guardada. Puedes volver al panel y abrirla de nuevo."),React.createElement("button",{type:"button",className:"gold-button",onClick:this.props.onBack},"Volver al panel de administrador"));
  return this.props.children;
 }
}

function SharedBingo({HostApp}){
 const [invitation,setInvitation]=useState(()=>new URLSearchParams(location.search).get('partida')?.trim().toUpperCase()||'');
 const [register,setRegister]=useState(false),[accounts,setAccounts]=useState(false),[intro,setIntro]=useState(()=>new URLSearchParams(location.search).get('partida')?.trim()?3:0);
 const [user,setUser]=useState(undefined),[roomId,setRoomId]=useState(''),[room,setRoom]=useState(null),[players,setPlayers]=useState([]),[player,setPlayer]=useState(null),[seats,setSeats]=useState([]),[claims,setClaims]=useState([]),[error,setError]=useState(''),[working,setWorking]=useState(false),[online,setOnline]=useState(navigator.onLine),[ready,setReady]=useState(false),[mode,setMode]=useState('guest'),[code,setCode]=useState(new URLSearchParams(location.search).get('partida')?.trim().toUpperCase()||''),[name,setName]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[settings,setSettings]=useState(false),[dismissed,setDismissed]=useState(''),[review,setReview]=useState(null),[hostKey,setHostKey]=useState(0),[showRoster,setShowRoster]=useState(false);
 const [masterViewAsAdmin,setMasterViewAsAdmin]=useState(false),[masterGateOpen,setMasterGateOpen]=useState(false),[contactOpen,setContactOpen]=useState(false);
 const [hasStartedRooms,setHasStartedRooms]=useState(null);
 const [approval,setApproval]=useState(null),[firstName,setFirstName]=useState(''),[lastName,setLastName]=useState(''),[remove,setRemove]=useState(null),[removed,setRemoved]=useState(false),[adminTab,setAdminTab]=useState('bombo'),[copiedURL,setCopiedURL]=useState('');
 const [desiredCount,setDesiredCount]=useState(1),[extraCards,setExtraCards]=useState([]),[marksByCard,setMarksByCard]=useState({}),[pickingCards,setPickingCards]=useState(false),[draftCards,setDraftCards]=useState([]),[activeCardIdx,setActiveCardIdx]=useState(0),[viewAllCards,setViewAllCards]=useState(true),[localPrimaryCard,setLocalPrimaryCard]=useState(null);
 const [lastRoom,setLastRoom]=useState(()=>readStored('bingo-last-room')||readStored('bingo-room')),[sessionNotice,setSessionNotice]=useState(''),[emptyRoomPrompt,setEmptyRoomPrompt]=useState(''),[hearNumbers,setHearNumbers]=useState(()=>readStored('bingo-hear-numbers')!=='false');
 const admin=!!user&&!user.isAnonymous,masterAdmin=net.isMasterAdmin(user),showMasterUI=masterAdmin&&!masterViewAsAdmin,taps=useRef({}),lastGame=useRef(null),syncing=useRef(false),lastSpokenNumber=useRef('');

 useEffect(()=>net.onAuthStateChanged(net.auth,setUser),[]);
 useEffect(()=>{
  if(!masterAdmin){setHasStartedRooms(true);return;}
  setHasStartedRooms(null);
  return net.onSnapshot(net.collection(net.db,'rooms'),snap=>setHasStartedRooms(snap.docs.some(d=>!d.data()?.archived&&d.data()?.started===true)),()=>setHasStartedRooms(false));
 },[masterAdmin]);
 useEffect(()=>{const ev=room?.event;if(!ev||ev.type!=='number'||!ev.id||ev.id===lastSpokenNumber.current)return;lastSpokenNumber.current=ev.id;if(ev.sourceUid!==user?.uid&&hearNumbers)audio.speak(announcement(ev.number),()=>{});},[room?.event?.id,user?.uid,hearNumbers]);
 useEffect(()=>{try{localStorage.setItem('bingo-hear-numbers',String(hearNumbers))}catch{}},[hearNumbers]);
 useEffect(()=>{
  if(!user||user.isAnonymous||net.isMasterAdmin(user)){setApproval('approved');return;}
  return net.onSnapshot(net.doc(net.db,'administrators',user.uid),s=>{
   if(!s.exists()){
    setApproval('approved');
    const fallbackFirst=(firstName||name||(user.email||'').split('@')[0]||'Administrador').trim().slice(0,60);
    net.setDoc(net.doc(net.db,'administrators',user.uid),{email:user.email,firstName:fallbackFirst,lastName:(lastName||'').trim().slice(0,100),status:'pending',createdAt:net.serverTimestamp()}).catch(()=>{});
   }else{
    const d=s.data();
    if(d?.firstName&&!firstName)setFirstName(d.firstName);
    if(d?.lastName&&!lastName)setLastName(d.lastName);
    setApproval(d?.status||'approved');
   }
  },()=>setApproval('approved'));
 },[user?.uid]);
 useEffect(()=>{
  const up=()=>setOnline(navigator.onLine);
  window.addEventListener('online',up);window.addEventListener('offline',up);
  return()=>{window.removeEventListener('online',up);window.removeEventListener('offline',up)};
 },[]);

 // Salvavidas para que ningún botón se quede bloqueado jamás
 useEffect(()=>{
  if(!working)return;
  const t=setTimeout(()=>setWorking(false),4500);
  return()=>clearTimeout(t);
 },[working]);

 const fail=e=>setError(net.friendlyError(e));
 async function action(fn){
  if(working)return;
  setError('');
  setWorking(true);
  try{
   await Promise.race([
    fn(),
    new Promise((_,rej)=>setTimeout(()=>rej(new Error('La operación está tardando demasiado. Comprueba tu conexión e inténtalo de nuevo.')),5500))
   ]);
  }catch(e){
   fail(e);
  }finally{
   setWorking(false);
  }
 }

 useEffect(()=>{
  if(!roomId||!user)return;
  setReady(true);
  const off=net.onSnapshot(net.roomRef(roomId),{includeMetadataChanges:true},snap=>{
   if(!snap.exists()){
    setRoomId('');
    setRoom(null);
    setSessionNotice(`ℹ️ La partida ${roomId} ya no existe o ha finalizado.`);
    return;
   }
   const data=snap.data();
   setRoom(data);
   setReady(true);
   if(!lastGame.current){lastGame.current={drawn:data.drawn,pending:data.pending,round:data.round};lastSpokenNumber.current=data.event?.id||'';}
   if(admin&&!data.started){
    net.setDoc(net.roomRef(roomId),{started:true},{merge:true}).catch(()=>{});
   }
  },fail);
  const offMe=net.onSnapshot(net.playerRef(roomId,user.uid),s=>{
   if(s.exists()){
    setPlayer({uid:user.uid,...s.data()});
   }else{
    setPlayer(null);
    if(!admin)setRemoved(true);
   }
  },()=>{});
  const offP=admin
   ? net.onSnapshot(net.collection(net.db,'rooms',roomId,'players'),s=>{
      const list=s.docs.map(d=>({uid:d.id,...d.data()}));
      setPlayers(list);
      const me=list.find(d=>d.uid===user.uid);
      if(me)setPlayer(me);
     },()=>{})
   : ()=>{};
  const offS=net.onSnapshot(net.collection(net.db,'rooms',roomId,'seats'),s=>setSeats(s.docs.map(d=>({id:Number(d.id),...d.data()}))),()=>{});
  const offC=net.onSnapshot(net.collection(net.db,'rooms',roomId,'claims'),s=>setClaims(s.docs.map(d=>({uid:d.id,...d.data()}))),()=>{});
  return()=>{off();offMe();offP();offS();offC()};
 },[roomId,user?.uid,admin]);

 function openRoom(id,targetTab='bombo',notice=''){
  const cleanId=id.trim().toUpperCase();
  setRemoved(false);
  setAdminTab(targetTab);
  lastGame.current=null;
  setRoom(null);
  setPlayer(null);
  setClaims([]);
  setPickingCards(false);
  setLocalPrimaryCard(null);
  setExtraCards([]);
  setDraftCards([]);
  setMarksByCard({});
  setActiveCardIdx(0);
  setCode(cleanId);
  setLastRoom(cleanId);
  setEmptyRoomPrompt('');
  if(notice)setSessionNotice(notice);
  setRoomId(cleanId);
  try{
   localStorage.setItem('bingo-room',cleanId);
   localStorage.setItem('bingo-last-room',cleanId);
   if(name)localStorage.setItem('bingo-name',name);
  }catch{}
 }

 function closeSession(){
  try{audio.thud();}catch{}
  const savedRoom=roomId||code||lastRoom;
  if(savedRoom){
   setLastRoom(savedRoom);
   setCode(savedRoom);
   try{localStorage.setItem('bingo-last-room',savedRoom);}catch{}
  }
  setRoomId('');
  setRoom(null);
  setPlayer(null);
  setClaims([]);
  setReview(null);
  setRemoved(false);
  setSettings(false);
  setPickingCards(false);
  setLocalPrimaryCard(null);
  setExtraCards([]);
  setDraftCards([]);
  setMarksByCard({});
  lastGame.current=null;
  try{
   localStorage.removeItem('bingo-room');
  }catch{}
  setSessionNotice(savedRoom?`🔒 Has cerrado la sesión. Tu última sala (${savedRoom}) está guardada por si quieres volver a entrar.`:'🔒 Has cerrado la sesión.');
  setIntro(3);
 }

 async function reconnectSession(targetId,targetTab='card',forceIfEmpty=false){
  const cleanId=(targetId||lastRoom||code||'').trim().toUpperCase();
  if(!cleanId)throw Error('Escribe el código de la partida.');
  if(!net.auth.currentUser)await net.signInAnonymously(net.auth);
  const rSnap=await net.getDoc(net.roomRef(cleanId));
  if(!rSnap.exists()||rSnap.data()?.archived){
   setEmptyRoomPrompt('');
   setSessionNotice(`⚠️ En la partida ${cleanId} ya no hay nadie (la sala ha terminado o no existe).`);
   return;
  }
  const rData=rSnap.data();
  const seatsSnap=await net.getDocs(net.collection(net.db,'rooms',cleanId,'seats'));
  let activeCount=seatsSnap.size;
  if(admin){
   try{
    const pSnap=await net.getDocs(net.collection(net.db,'rooms',cleanId,'players'));
    activeCount=Math.max(activeCount,pSnap.size);
   }catch{}
  }
  const hasPeopleOrGame = activeCount > 0 || (rData.drawn?.length || 0) > 0;
  if(!hasPeopleOrGame && !forceIfEmpty){
   setEmptyRoomPrompt(cleanId);
   setSessionNotice(`ℹ️ En la sala ${cleanId} ahora mismo no hay nadie dentro (0 participantes con cartón).`);
   return;
  }
  setEmptyRoomPrompt('');
  if(targetTab==='card'){
   const playerName=(name||(showMasterUI?'Elisabeth':(firstName||'Jugador'))).trim();
   await net.joinRoom(cleanId,playerName);
  }
  const msg = activeCount > 0
   ? `✅ Has entrado en la sala ${cleanId}. Hay ${activeCount} ${activeCount===1?'participante':'participantes'} dentro.`
   : `✅ Has entrado en la sala ${cleanId}. Ahora mismo no hay nadie más dentro.`;
  openRoom(cleanId,targetTab,msg);
 }

 function leaveGameCompletely(){
  const savedRoom=roomId||code||lastRoom;
  if(savedRoom){
   setLastRoom(savedRoom);
   try{localStorage.setItem('bingo-last-room',savedRoom);}catch{}
  }
  setRoomId('');
  setRoom(null);
  setPlayer(null);
  setClaims([]);
  setReview(null);
  setRemoved(false);
  setSettings(false);
  setPickingCards(false);
  setInvitation('');
  setCode(savedRoom||'');
  lastGame.current=null;
  try{
   localStorage.removeItem('bingo-room');
   if(location.search){
    history.replaceState(null,'',location.pathname+location.hash);
   }
  }catch{}
  setIntro(1);
 }

 const activeClaims=claims.filter(c=>c.round===room?.round&&c.status==='pending'&&c.uid===room?.activeClaim),paused=!!room?.activeClaim;
 const event=activeClaims.length?{...activeClaims[0],type:'claim',id:'claim-'+activeClaims[0].uid+'-'+activeClaims[0].requestId}:room?.event;
 const seenKey=event?`${roomId}:${event.id}`:'';
 const ownMarks=player&&room&&player.round===room.round?player.marks:[];
 const showPlayerCard=(!admin&&player)||(admin&&adminTab==='card'&&player);
 const effectivePrimaryCard = localPrimaryCard !== null ? localPrimaryCard : (player?.card ?? null);
 const myCards=effectivePrimaryCard!=null?[effectivePrimaryCard,...extraCards.filter(c=>c!==effectivePrimaryCard&&c>=0&&c<CARDS.length)].slice(0,desiredCount):[];

 // Cargar y sincronizar selección de 1, 2 o 3 cartones y sus fichas por sala/usuario
 useEffect(()=>{
  if(!roomId||!user?.uid)return;
  const key=`bingo-multi-${roomId}-${user.uid}`;
  try{
   const saved=JSON.parse(localStorage.getItem(key)||'null');
   if(saved){
    if([1,2,3].includes(saved.desiredCount))setDesiredCount(saved.desiredCount);
    if(Number.isInteger(saved.primaryCard)&&saved.primaryCard>=0&&saved.primaryCard<CARDS.length)setLocalPrimaryCard(saved.primaryCard);
    if(Array.isArray(saved.extraCards))setExtraCards(saved.extraCards.filter(c=>Number.isInteger(c)&&c>=0&&c<CARDS.length));
    if(saved.marksByCard&&typeof saved.marksByCard==='object'){
     setMarksByCard(saved.marksByCard);
    }
   }
  }catch{}
 },[roomId,user?.uid]);

 useEffect(()=>{
  if(!room?.round||!roomId||!user?.uid)return;
  const key=`bingo-multi-${roomId}-${user.uid}`;
  try{
   const saved=JSON.parse(localStorage.getItem(key)||'null');
   if(saved&&saved.round&&saved.round!==room.round){
    setMarksByCard({});
   }
  }catch{}
 },[room?.round,roomId,user?.uid]);

 useEffect(()=>{
  if(!roomId||!user?.uid||!room?.round||effectivePrimaryCard===null)return;
  const key=`bingo-multi-${roomId}-${user.uid}`;
  try{
   localStorage.setItem(key,JSON.stringify({round:room.round,primaryCard:effectivePrimaryCard,desiredCount,extraCards,marksByCard}));
  }catch{}
 },[roomId,user?.uid,room?.round,effectivePrimaryCard,desiredCount,extraCards,marksByCard]);

 useEffect(()=>{
  if(player?.card!=null&&ownMarks.length>0){
   setMarksByCard(prev=>{
    const cur=prev[player.card];
    if(!cur||cur.length===0)return {...prev,[player.card]:ownMarks};
    return prev;
   });
  }
 },[player?.card,room?.round]);

 useEffect(()=>{
  const isPlayingCard=Boolean(roomId&&room&&showPlayerCard&&effectivePrimaryCard!==null&&!pickingCards);
  document.body.classList.toggle('is-playing-shared-card',isPlayingCard);
  return()=>document.body.classList.remove('is-playing-shared-card');
 },[roomId,room,showPlayerCard,effectivePrimaryCard,pickingCards]);

 function getCardMarks(cid){
  if(marksByCard[cid])return marksByCard[cid];
  if(cid===player?.card)return ownMarks;
  return [];
 }

 function syncCardView(cards,marksMap=marksByCard){
  if(!roomId||!user?.uid||!player||!cards?.length)return;
  const data={cards:[...new Set(cards)].slice(0,3),marksByCard:{}};
  data.cards.forEach(id=>{data.marksByCard[id]=(marksMap[id]||[]).slice(0,15)});
  net.setDoc(net.playerRef(roomId,user.uid),{cardView:JSON.stringify(data),updatedAt:net.serverTimestamp()},{merge:true}).catch(()=>{});
 }

 function buildCardSelection(baseIds=[],count=desiredCount){
  const validBase=[...new Set((baseIds||[]).filter(c=>Number.isInteger(c)&&c>=0&&c<CARDS.length))].slice(0,count);
  if(validBase.length>=count)return validBase;
  const takenByOthers=new Set(seats.filter(s=>s.uid!==user?.uid).map(s=>s.id));
  const available=CARDS.map((_,id)=>id).filter(id=>!takenByOthers.has(id)&&!validBase.includes(id));
  const fallback=CARDS.map((_,id)=>id).filter(id=>!validBase.includes(id));
  const pool=available.length>=(count-validBase.length)?available:fallback;
  const result=[...validBase];
  while(result.length<count&&pool.length>0){
   result.push(pool.shift());
  }
  return result;
 }

 function confirmMultiCards(chosenIds,targetCount=desiredCount){
  try{audio.unlock();audio.chime();}catch{}
  const count=Math.max(1,Math.min(3,Number(targetCount)||desiredCount||1));
  const clean=buildCardSelection(chosenIds,count);
  let primary=clean[0]??0;
  let extras=clean.slice(1,count);
  if(player?.card!==null&&player?.card!==undefined&&!admin&&room?.started&&primary!==player.card){
   if(clean.includes(player.card)){
    primary=player.card;
    extras=clean.filter(c=>c!==player.card).slice(0,count-1);
   }else if(player.round===room.round&&player.locked){
    primary=player.card;
    extras=clean.filter(c=>c!==player.card).slice(0,Math.max(0,count-1));
   }
  }
  const finalCards=[primary,...extras];
  // Actualización instantánea (0ms) en pantalla para que ningún botón se atasque jamás
  setLocalPrimaryCard(primary);
  setPlayer(p=>p?{...p,card:primary}:p);
  setDesiredCount(count);
  setExtraCards(extras);
  setDraftCards(finalCards);
  setActiveCardIdx(0);
  setViewAllCards(true);
  setPickingCards(false);
  setError('');
  try{
   if(roomId&&user?.uid){
    const key=`bingo-multi-${roomId}-${user.uid}`;
    localStorage.setItem(key,JSON.stringify({round:room?.round||1,primaryCard:primary,desiredCount:count,extraCards:extras,marksByCard}));
   }
   syncCardView(finalCards,marksByCard);
   window.scrollTo(0,0);
  }catch{}

  // Sincronización en segundo plano con Firestore sin bloquear la interfaz
  if(roomId&&user?.uid&&(player?.card===null||player?.card===undefined||(player.card!==primary&&(admin||!room?.started||!(player.round===room.round&&player.locked))))){
   net.pickCard(roomId,user.uid,primary).catch(()=>{});
  }
 }

 function pickRandomCards(count=desiredCount){
  try{audio.unlock();audio.thud();}catch{}
  const takenByOthers=new Set(seats.filter(s=>s.uid!==user?.uid).map(s=>s.id));
  const available=CARDS.map((_,id)=>id).filter(id=>!takenByOthers.has(id));
  const pool=available.length>=count?[...available]:CARDS.map((_,id)=>id);
  const picked=[];
  while(picked.length<count&&pool.length>0){
   const idx=Math.floor(Math.random()*pool.length);
   picked.push(pool.splice(idx,1)[0]);
  }
  setDraftCards(picked);
  return picked;
 }

 async function syncGame(next,forceReset=false){
  if(!lastGame.current)return;
  const before=lastGame.current;
  if(!forceReset&&JSON.stringify({drawn:before.drawn,pending:before.pending})===JSON.stringify(next))return;
  if(syncing.current)return;
  syncing.current=true;setWorking(true);
  try{
   await net.saveGame(roomId,before,next,forceReset,user?.uid||'');
   lastGame.current={...next,round:forceReset?before.round+1:before.round};
  }catch(e){
   fail(e);
   const fresh=await net.getDoc(net.roomRef(roomId));
   if(fresh.exists()){
    lastGame.current={drawn:fresh.data().drawn,pending:fresh.data().pending,round:fresh.data().round};
    setRoom(fresh.data());
    setHostKey(x=>x+1);
   }
  }finally{syncing.current=false;setWorking(false);}
 }

 async function broadcast(){
  audio.unlock();
  const ev={id:crypto.randomUUID(),type:'greeting'};
  setRoom(r=>({...r,event:ev}));setDismissed('');
  await net.setDoc(net.roomRef(roomId),{event:ev},{merge:true});
 }

 async function patchPlayer(patch){
  if(!roomId||!user?.uid||!player||!room)return;
  await net.setDoc(net.playerRef(roomId,user.uid),{...(player.round!==room.round?{round:room.round,marks:[],locked:false}:{}),...patch,updatedAt:net.serverTimestamp()},{merge:true});
 }

 function markCard(cardId,n,e){
  if(!online)return;
  const curMarks=getCardMarks(cardId);
  const marked=curMarks.includes(n),now=Date.now(),tapKey=`${cardId}:${n}`;
  if(marked||e.detail===0||now-(taps.current[tapKey]||0)<350){
   taps.current[tapKey]=0;
   const nextMarks=marked?curMarks.filter(x=>x!==n):[...curMarks,n].slice(0,15);
   const nextMap={...marksByCard,[cardId]:nextMarks};
   setMarksByCard(nextMap);
   syncCardView(myCards,nextMap);
   audio.thud();
   if(room)patchPlayer({round:room.round,locked:true,marks:nextMarks}).catch(()=>{});
  }else taps.current[tapKey]=now;
 }

 async function claim(kind,preferredCardId){
  audio.unlock();
  const cardsList=myCards.length?myCards:[effectivePrimaryCard??0];
  let chosenCard=preferredCardId!=null&&cardsList.includes(preferredCardId)?preferredCardId:cardsList[0];
  if(preferredCardId==null&&cardsList.length>1){
   const dSet=new Set(room?.drawn||[]);
   for(const cid of cardsList){
    const info=analyzeCardMarks(cid,getCardMarks(cid),dSet);
    if((kind==='line'&&info.hasValidLine)||(kind==='bingo'&&info.hasValidBingo)){
     chosenCard=cid;
     break;
    }
   }
  }
  const allMarksMap={};
  for(const cid of cardsList)allMarksMap[cid]=getCardMarks(cid);
  const chosenMarks=(allMarksMap[chosenCard]||[]).slice(0,15);
  try{
   await patchPlayer({round:room.round,locked:true,marks:chosenMarks});
  }catch{}
  const reqId=encodeClaimRequestId(cardsList,allMarksMap,chosenCard);
  await net.requestPrize(roomId,user.uid,kind,reqId);
  setDismissed('');
 }

 async function resolveClaim(c,accepted){
  await net.runTransaction(net.db,async t=>{
   const ref=net.doc(net.db,'rooms',roomId,'claims',c.uid),snap=await t.get(ref),r=await t.get(net.roomRef(roomId));
   if(snap.data()?.requestId!==c.requestId||snap.data()?.status!=='pending'||r.data().round!==c.round)throw Error('Este aviso ya se ha resuelto o corresponde a otra ronda.');
   t.update(ref,{status:accepted?'accepted':'rejected'});
   t.update(net.roomRef(roomId),{
    activeClaim:null,
    event:{
     id:crypto.randomUUID(),
     type:accepted?'approved':'rejected',
     name:c.name,
     kind:c.kind
    }
   });
  });
  setDismissed('');
  setReview(null);
 }

 async function logout(){
  const savedRoom=roomId||code||lastRoom;
  if(savedRoom){
   setLastRoom(savedRoom);
   try{localStorage.setItem('bingo-last-room',savedRoom);}catch{}
  }
  setRoomId('');setRoom(null);lastGame.current=null;
  try{localStorage.removeItem('bingo-room');}catch{}
  if(admin)await net.signOut(net.auth);
  setSessionNotice('🔒 Has cerrado tu sesión de administrador.');
  setIntro(3);
 }

 async function fullscreen(){
  try{
   if(document.fullscreenElement)await document.exitFullscreen();
   else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();
   else setError('Gira el móvil en horizontal para ver solo el cartón en grande.');
  }catch{
   setError('Gira el móvil en horizontal para ver solo el cartón en grande.');
  }
 }

 useEffect(()=>{
  const update=()=>{if(!window.visualViewport||window.visualViewport.scale===1)document.documentElement.style.setProperty('--visible-height',(window.visualViewport?.height||innerHeight)+'px')};
  update();window.addEventListener('resize',update);window.visualViewport?.addEventListener('resize',update);
  return()=>{window.removeEventListener('resize',update);window.visualViewport?.removeEventListener('resize',update)};
 },[]);

 if(intro===0)return React.createElement("div",{className:"snow-entry"},React.createElement("div",{className:"snow","aria-hidden":"true"},Array.from({length:40},(_,i)=>React.createElement("i",{key:i,style:{left:(i*43%100)+'%',width:4+i%5,height:4+i%5,animationDuration:(6+i%7)+'s',animationDelay:-i+'s'}}))),React.createElement("p",{className:"eyebrow"},"EL BINGO DE ELISABETH"),React.createElement("img",{className:"entry-tree-art",src:"./arbol-navidad.png",alt:"Árbol de Navidad artesanal con adornos rojos y luces doradas"}),React.createElement("h1",null,"Un poquito de magia…"),React.createElement("label",{className:"language-picker"},React.createElement("span",null,"Idioma / Language / Llengua"),React.createElement("select",{value:appLanguage,"aria-label":"Idioma",onChange:e=>{try{localStorage.setItem(LANG_STORAGE_KEY,e.target.value)}catch{}location.reload()}},React.createElement("option",{value:"es"},"Español"),React.createElement("option",{value:"ca"},"Català"),React.createElement("option",{value:"en"},"English"))),React.createElement("button",{className:"gold-button",onClick:()=>{audio.unlock();setIntro(1)}},"Seguir ",React.createElement("span",{"aria-hidden":"true"},"✦")),React.createElement(ManualButton,{role:"player"}),React.createElement("small",null,"V16"));

 if(intro<3)return React.createElement("div",{className:"app welcome"},React.createElement("div",{className:"garland left"}),React.createElement("div",{className:"garland right"}),React.createElement("div",{className:"snow","aria-hidden":"true"},Array.from({length:24},(_,i)=>React.createElement("i",{key:i,style:{left:(i*43%100)+'%',width:3+i%4,height:3+i%4,animationDuration:(7+i%6)+'s',animationDelay:-i+'s'}}))),React.createElement(WelcomeCarousel,{onEnter:()=>{setMode('guest');setError('');setIntro(3)},onAdmin:()=>{setMode('admin');setError('');setIntro(3)}}),React.createElement("footer",null,React.createElement("button",{type:"button",className:"contact-footer-trigger",onClick:()=>setContactOpen(true)},"Creado por ",React.createElement("em",null,"Elisabeth"),React.createElement("small",null,"Comparte la alegría de la Navidad")),React.createElement("span",{className:"app-version"},"V16")),contactOpen&&React.createElement(ContactPopup,{onClose:()=>setContactOpen(false)}));

 if(user===undefined)return React.createElement("div",{className:"app shared-lobby"},React.createElement("p",null,"Preparando el bingo…"));

 // Solo se bloquea si la Administradora Master ha suspendido o dado de baja explícitamente la cuenta
 if(mode==='admin'&&admin&&!masterAdmin&&(approval==='suspended'||approval==='removed'))return React.createElement("main",{className:"app shared-lobby"},React.createElement("section",{className:"shared-panel"},React.createElement("div",{className:"lobby-nav-top"},React.createElement("button",{type:"button",className:"lobby-back-btn",onClick:()=>{setIntro(1);setError('')}},"← Volver a la portada")),React.createElement("h1",null,"Cuenta de administrador pausada"),React.createElement("p",null,user.email),React.createElement("p",null,"La Administradora Master (Elisabeth) ha pausado o dado de baja temporalmente este acceso de administrador."),error&&React.createElement("p",{role:"alert"},error),React.createElement("button",{className:"gold-button",onClick:()=>action(logout)},"🔒 Cerrar sesión")));

 if(removed&&!admin&&roomId)return React.createElement("main",{className:"app shared-lobby"},React.createElement("section",{className:"shared-panel"},React.createElement("h1",null,"Tu participación ha terminado"),React.createElement("p",null,"La administración ha retirado tu inscripción y ha liberado tu cartón."),React.createElement("button",{className:"gold-button",onClick:closeSession},"🔒 Cerrar sesión"),React.createElement("button",{className:"text-button",onClick:leaveGameCompletely},"← Volver a la portada")));

 if(room?.archived)return React.createElement("main",{className:"app shared-lobby"},React.createElement("section",{className:"shared-panel"},React.createElement("h1",null,"Partida retirada"),React.createElement("p",null,"Esta partida ya no está activa."),React.createElement("button",{className:"gold-button",onClick:closeSession},"🔒 Cerrar sesión"),React.createElement("button",{className:"text-button",onClick:leaveGameCompletely},"← Volver a la portada")));

 // PANTALLA DE ENTRADA (ESTRICTAMENTE SEPARADA: JUGADOR vs ADMINISTRADOR / ADMINISTRADORA MASTER)
 if(!roomId){
  const isGuestView = Boolean(invitation || mode === 'guest');
  return (
   React.createElement("div",{className:"app shared-lobby"},React.createElement("div",{className:'shared-panel '+(isGuestView?'player-entry-panel':'admin-entry-panel')},React.createElement("div",{className:"lobby-nav-top"},React.createElement("button",{type:"button",className:"lobby-back-btn",onClick:()=>{setIntro(1);setError('');setSessionNotice('');},title:"Volver a la portada de bienvenida"},"← Volver a la portada"),React.createElement(ManualButton,{role:isGuestView?'player':'host',compact:true})),error&&React.createElement("p",{role:"alert",className:"shared-error"},error),sessionNotice&&(
      React.createElement("div",{role:"status",className:"session-status-banner"},React.createElement("span",null,sessionNotice),emptyRoomPrompt&&(
        React.createElement("button",{type:"button",className:"gold-button compact",disabled:working,onClick:()=>action(()=>reconnectSession(emptyRoomPrompt,isGuestView?'card':'bombo',true))},"Entrar igualmente a ",emptyRoomPrompt)
       ),React.createElement("button",{type:"button",className:"text-button compact",onClick:()=>{setSessionNotice('');setEmptyRoomPrompt('');}},"×"))
     ),isGuestView ? (
      /* ================= PANTALLA EXCLUSIVA DE ENTRAR A JUGAR (JUGADORES) ================= */
      React.createElement("div",{className:"guest-entry-stage"},React.createElement("p",{className:"eyebrow"},"JUGAR CON MI CARTÓN"),React.createElement("h1",null,"Entrar a jugar"),React.createElement(LobbyPruna,{page:(()=>{try{return Number(localStorage.getItem('bingo-welcome-character'))||0}catch{return 0}})()}),lastRoom&&(
        React.createElement("div",{className:"session-reconnect-box"},React.createElement("div",{className:"session-reconnect-info"},React.createElement("span",null,"🔄 Última sesión guardada:"),React.createElement("b",null,"Sala ",lastRoom," ",name?`· ${name}`:'')),React.createElement("div",{className:"session-reconnect-actions"},React.createElement("button",{type:"button",className:"gold-button green compact",disabled:working,onClick:()=>{
            audio.unlock();
            action(()=>reconnectSession(lastRoom,'card',false));
           }},"🔄 Volver a entrar en ",lastRoom),React.createElement("button",{type:"button",className:"text-button compact",onClick:()=>{
            setLastRoom('');
            setCode('');
            try{localStorage.removeItem('bingo-last-room');localStorage.removeItem('bingo-room');}catch{}
            setSessionNotice('🗑️ Sesión anterior borrada. Puedes escribir otro código.');
           }},"Olvidar sala")))
       ),React.createElement("form",{className:"clean-entry-form",onSubmit:e=>{
        e.preventDefault();
        audio.unlock();
        action(async()=>{
         const id=(invitation||code).trim().toUpperCase();
         if(!id)throw Error('Escribe el código de la partida.');
         const rSnap=await net.getDoc(net.roomRef(id));
         if(!rSnap.exists()||rSnap.data()?.archived)throw Error('No existe una partida activa con ese código.');
         const seatsSnap=await net.getDocs(net.collection(net.db,'rooms',id,'seats'));
         const playerName=(name||(showMasterUI?'Elisabeth':'Jugador')).trim();
         await net.joinRoom(id,playerName);
         const count=seatsSnap.size;
         openRoom(
          id,
          'card',
          count>0
           ? `✅ Has entrado en la sala ${id}. Hay ${count} ${count===1?'cartón activo':'cartones activos'} dentro.`
           : `ℹ️ Has entrado en la sala ${id}. Ahora mismo no hay nadie más con cartón dentro.`
         );
        });
       }},React.createElement("label",null,React.createElement("span",null,"👤 Tu nombre"),React.createElement("input",{maxLength:30,required:true,placeholder:"Escribe tu nombre",value:name,onChange:e=>setName(e.target.value)})),React.createElement("label",null,React.createElement("span",null,"🔑 Código de la partida"),React.createElement("input",{required:true,placeholder:"Ej: AB12CD34",value:invitation||code,onChange:e=>{setInvitation('');setCode(e.target.value.toUpperCase())}})),React.createElement("button",{className:"gold-button",disabled:working||!(name.trim())||!((invitation||code).trim())},working?'Entrando…':'🎟 Elegir mi cartón y jugar')))
     ) : (
      /* ================= PANTALLA EXCLUSIVA DE ADMINISTRADOR / ADMINISTRADORA MASTER ================= */
      admin ? (
       React.createElement("div",{className:"admin-dashboard-stage"},React.createElement("p",{className:"eyebrow"},showMasterUI?'👑 ADMINISTRADORA MASTER · CONTROL TOTAL':'🎱 PANEL DE ADMINISTRADOR'),React.createElement("h1",null,showMasterUI?'👑 Administradora Master · Elisabeth':`Administrador · ${firstName||user.email?.split('@')[0]||'Anfitrión'}`),React.createElement("p",{className:"admin-role-sub"},showMasterUI
          ? 'Tienes el mando total como Administradora Master: puedes crear partidas, entrar en cualquier sala empezada, controlar a todos los administradores y abrir el Manual 3 exclusivo.'
          : `Sesión iniciada como Administrador (${user.email}). Puedes crear partidas nuevas, dirigir el bombo, controlar a los jugadores de tu sala y jugar también con 1, 2 o 3 cartones.`),lastRoom&&(
         React.createElement("div",{className:"session-reconnect-box"},React.createElement("div",{className:"session-reconnect-info"},React.createElement("span",null,"🔄 Última sesión guardada:"),React.createElement("b",null,"Sala ",lastRoom)),React.createElement("div",{className:"session-reconnect-actions"},React.createElement("button",{type:"button",className:"gold-button green compact",disabled:working,onClick:()=>action(()=>reconnectSession(lastRoom,'bombo',false))},"🎱 Volver al bombo (",lastRoom,")"),React.createElement("button",{type:"button",className:"gold-button compact",disabled:working,onClick:()=>action(()=>reconnectSession(lastRoom,'card',false))},"🎟 Volver a mi cartón (",lastRoom,")")))
        ),React.createElement("div",{className:"admin-quick-actions-grid"},React.createElement("div",{className:"admin-action-box create-box"},React.createElement("span",{className:"action-box-icon"},"✨"),React.createElement("h3",null,"Nueva partida"),React.createElement("p",null,"Crea una sala nueva y abre el bombo al instante."),React.createElement("button",{type:"button",className:"gold-button",disabled:working,onClick:()=>action(async()=>openRoom(await net.createRoom(),'bombo','✨ Partida nueva creada. Comparte el código para que entren los jugadores.'))},working?'Creando…':'Crear partida nueva')),(!showMasterUI||hasStartedRooms===true)&&React.createElement("div",{className:"admin-action-box join-box"},React.createElement("span",{className:"action-box-icon"},"🎱"),React.createElement("h3",null,"Partida empezada"),React.createElement("p",null,"Escribe el código de cualquier sala activa para abrir el bombo o tu cartón."),React.createElement("input",{className:"admin-code-input",placeholder:"Código (ej: AB12CD34)",value:code,onChange:e=>setCode(e.target.value.toUpperCase())}),React.createElement("div",{className:"admin-join-buttons"},React.createElement("button",{type:"button",className:"gold-button green compact",disabled:working||!code.trim(),onClick:()=>action(async()=>{
             const id=code.trim().toUpperCase();
             const r=await net.getDoc(net.roomRef(id));
             if(!r.exists())throw Error('No existe una partida con ese código.');
             let count=0;
             try{
              const sSnap=await net.getDocs(net.collection(net.db,'rooms',id,'seats'));
              count=sSnap.size;
             }catch{}
             openRoom(
              id,
              'bombo',
              count>0
               ? `✅ Has entrado en la sala ${id}. Hay ${count} ${count===1?'cartón activo':'cartones activos'} dentro.`
               : `ℹ️ Has entrado en la sala ${id}. Ahora mismo no hay nadie con cartón dentro.`
             );
            })},"🎱 Ir al bombo"),React.createElement("button",{type:"button",className:"gold-button compact",disabled:working||!code.trim(),onClick:()=>action(async()=>{
             const id=code.trim().toUpperCase();
         const playerName=(showMasterUI?'Elisabeth':(firstName||user.email?.split('@')[0]||'Admin')).trim();
             await net.joinRoom(id,playerName);
             openRoom(id,'card',`✅ Has entrado con tu cartón en la sala ${id}.`);
            })},"🎟 Ir a cartón")))),masterAdmin&&!masterViewAsAdmin ? (
         React.createElement(AdminAccounts,{onViewAsAdmin:()=>setMasterViewAsAdmin(true),onEnterRoom:(id,tab)=>{
          if(tab==='card'){
           action(async()=>{
            await net.joinRoom(id,'Elisabeth');
            openRoom(id,'card',`✅ Has entrado con tu cartón en la sala ${id}.`);
           });
          }else{
           openRoom(id,'bombo',`✅ Has abierto el bombo de la sala ${id}.`);
          }
         }})
        ) : (
         React.createElement("div",{className:"administrator-profile-view"},React.createElement("button",{type:"button",className:"master-password-star",title:"⭐","aria-label":"⭐",onClick:()=>setMasterGateOpen(true)},"⭐"),React.createElement(AdminProfile,{uid:user.uid,email:user.email,isOwner:false}))
        ),masterGateOpen&&admin&&React.createElement(MasterPasswordPrompt,{onClose:()=>setMasterGateOpen(false),onVerified:verifiedUser=>{setUser(verifiedUser);setMasterViewAsAdmin(false);setMasterGateOpen(false)}}),React.createElement("div",{className:"lobby-actions-footer"},React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>action(logout)},"🔒 Cerrar sesión de ",showMasterUI?'Administradora Master':'Administrador'," (",user.email,")")))
      ) : (
       React.createElement("div",{className:"admin-login-stage"},React.createElement("p",{className:"eyebrow"},"ACCESO Y CREACIÓN DE ADMINISTRADORES"),React.createElement("h1",null,"Administrador"),React.createElement("p",{className:"admin-role-sub"},"Entra con tu cuenta o crea un nuevo Administrador al instante."),React.createElement("div",{className:"lobby-snowglobe-wrap"},React.createElement(SnowGlobe,{className:"lobby-snowglobe"}),React.createElement("p",{className:"lobby-feature-hint"},"✦ 1 toque: luz · 2: mucha luz · 3: cobra vida ✦")),React.createElement("div",{className:"card-count-selector",role:"group","aria-label":"Modo de acceso de administrador",style:{marginBottom:'10px'}},React.createElement("button",{type:"button",className:'count-pill-btn '+(!register?'active':''),onClick:()=>{audio.thud();setRegister(false);setError('');}},React.createElement("b",null,"🔑 Ya tengo cuenta · Entrar")),React.createElement("button",{type:"button",className:'count-pill-btn '+(register?'active':''),onClick:()=>{audio.thud();setRegister(true);setError('');}},React.createElement("b",null,"✨ Crear nuevo Administrador"))),React.createElement("form",{className:"clean-entry-form",onSubmit:e=>{
         e.preventDefault();
         audio.unlock();
         action(async()=>{
          if(register){
           await net.registerHost(email.trim(),password,firstName,lastName);
           setSessionNotice('✨ ¡Cuenta de Administrador creada y activada! Ya puedes crear partidas o entrar en una empezada.');
          }else{
           await net.signInWithEmailAndPassword(net.auth,email.trim(),password);
          }
          setPassword('');
         });
        }},register&&(
          React.createElement(React.Fragment,null,React.createElement("label",null,React.createElement("span",null,"👤 Nombre"),React.createElement("input",{required:true,maxLength:60,placeholder:"Tu nombre",autoComplete:"given-name",value:firstName,onChange:e=>setFirstName(e.target.value)})),React.createElement("label",null,React.createElement("span",null,"👤 Apellidos"),React.createElement("input",{required:true,maxLength:100,placeholder:"Tus apellidos",autoComplete:"family-name",value:lastName,onChange:e=>setLastName(e.target.value)})))
         ),React.createElement("label",null,React.createElement("span",null,"✉️ Correo electrónico"),React.createElement("input",{type:"email",autoComplete:"username",required:true,placeholder:"correo@ejemplo.com",value:email,onChange:e=>setEmail(e.target.value)})),React.createElement("label",null,React.createElement("span",null,"🔒 Contraseña (mín. 6 caracteres)"),React.createElement("input",{type:"password",autoComplete:register?'new-password':'current-password',required:true,minLength:6,placeholder:"••••••••",value:password,onChange:e=>setPassword(e.target.value)})),React.createElement("button",{className:"gold-button",disabled:working},working?'Procesando…':register?'✨ Crear Administrador y entrar':'🔑 Entrar al panel de Administrador'),!register&&(
          React.createElement("button",{className:"text-button",type:"button",disabled:!email.trim()||working,onClick:()=>action(async()=>{await net.sendPasswordResetEmail(net.auth,email.trim());setError('Si el correo corresponde a una cuenta, recibirás las instrucciones para recuperar la contraseña.')})},"He olvidado mi contraseña")
         )))
      )
     ),React.createElement("small",{className:"panel-version-foot"},"Creado por Elisabeth · V16")))
  );
 }

 const shareURL=new URL(location.href);shareURL.search='';shareURL.searchParams.set('partida',roomId);

 const reviewFallbackMarks = review ? (players.find(p=>p.uid===review.uid)?.round===room?.round ? (players.find(p=>p.uid===review.uid)?.marks||[]) : []) : [];
 const drawnSet = new Set(room?.drawn||[]);
 const reviewDecoded = review ? decodeClaimRequestId(review.requestId, review.card, reviewFallbackMarks) : null;

 return (
  React.createElement(React.Fragment,null,React.createElement("div",{className:"shared-status-bar"},React.createElement("div",{className:"status-top-info"},React.createElement("div",{className:"status-room-pill"},React.createElement("span",{className:"room-sub"},"PARTIDA"),React.createElement("b",{className:"room-code-tag"},roomId)),React.createElement("div",{className:"status-conn-pill "+(online?(ready?'is-online':'is-connecting'):'is-offline')},React.createElement("span",{className:"conn-dot"},"●"),React.createElement("span",null,!online?'Sin conexión':ready?`Conectada · ${players.length||seats.length} dentro`:'Conectando…'))),React.createElement("div",{className:'status-actions-row '+(showPlayerCard?'is-card-view':'is-bombo-view')},React.createElement("button",{type:"button",className:"status-gold-btn number-voice-toggle","aria-pressed":hearNumbers,onClick:()=>setHearNumbers(v=>!v)},hearNumbers?'🔊 Números':'🔇 Números'),!showPlayerCard&&showMasterUI&&(
      React.createElement("button",{type:"button",className:"status-gold-btn",onClick:()=>setAccounts(!accounts)},React.createElement("span",null,"👑")," Admin Master")
     ),!showPlayerCard&&masterAdmin&&masterViewAsAdmin&&React.createElement("button",{type:"button",className:"status-gold-btn master-room-star",title:"⭐","aria-label":"⭐",onClick:()=>setMasterGateOpen(true)},"⭐"),!showPlayerCard&&admin&&(
      React.createElement(React.Fragment,null,React.createElement("button",{type:"button",className:"status-gold-btn",onClick:()=>setShowRoster(x=>!x)},React.createElement("span",null,"👥")," Jugadores (",players.length||seats.length,")"),React.createElement("button",{type:"button",className:"status-gold-btn "+(copiedURL?'active-copied':''),onClick:()=>action(async()=>{await navigator.clipboard.writeText(shareURL.href);setCopiedURL(shareURL.href);setTimeout(()=>setCopiedURL(''),10000);})},React.createElement("span",null,copiedURL?'✓':'🔗')," ",copiedURL?'¡Copiado!':'Invitación'))
     ),admin&&(
      player?(
       React.createElement("button",{type:"button",className:"status-gold-btn",onClick:()=>setAdminTab(t=>t==='bombo'?'card':'bombo')},React.createElement("span",null,adminTab==='bombo'?'🎟':'🎱')," ",adminTab==='bombo'?'Mi cartón':'Volver al bombo')
      ):(
       React.createElement("button",{type:"button",className:"status-gold-btn",onClick:()=>action(async()=>{const n=(showMasterUI?'Elisabeth':(firstName||user.email?.split('@')[0]||'Administrador')).trim();await net.joinRoom(roomId,n);setAdminTab('card');})},React.createElement("span",null,"🎟")," Mi cartón")
      )
     ),React.createElement("button",{type:"button",className:"status-gold-btn",onClick:closeSession,title:"Cerrar tu sesión actual (guarda la sala para volver a entrar)"},React.createElement("span",null,"🔒")," Cerrar sesión"),React.createElement("button",{type:"button",className:"status-gold-btn",onClick:leaveGameCompletely,title:"Salir a la portada de inicio"},React.createElement("span",null,"🚪")," Inicio"))),sessionNotice&&(
    React.createElement("div",{role:"status",className:"session-status-banner in-room-banner"},React.createElement("span",null,sessionNotice),React.createElement("button",{type:"button",className:"text-button compact",onClick:()=>setSessionNotice('')},"×"))
   ),copiedURL&&(
    React.createElement("div",{className:"copied-invite-card",role:"status"},React.createElement("div",{className:"copied-card-header"},React.createElement("span",{className:"copied-badge-check"},"✓"),React.createElement("strong",null,"¡Invitación copiada!"),React.createElement("button",{className:"text-button compact",onClick:()=>setCopiedURL('')},"Cerrar ×")),React.createElement("div",{className:"copied-url-display"},React.createElement("code",null,copiedURL)))
   ),accounts&&showMasterUI&&(
    React.createElement(AdminAccounts,{onClose:()=>setAccounts(false),onEnterRoom:(id,tab)=>{
      setAccounts(false);
      if(tab==='card'){
       action(async()=>{await net.joinRoom(id,'Elisabeth');openRoom(id,'card');});
      }else{
       openRoom(id,'bombo');
      }
     }})
   ),masterGateOpen&&admin&&React.createElement(MasterPasswordPrompt,{onClose:()=>setMasterGateOpen(false),onVerified:verifiedUser=>{setUser(verifiedUser);setMasterViewAsAdmin(false);setMasterGateOpen(false)}}),showRoster&&admin&&(
    React.createElement("div",{className:"modal-backdrop"},React.createElement("section",{className:"modal shared-roster",role:"dialog","aria-modal":"true","aria-label":"Participantes"},React.createElement("button",{className:"text-button",onClick:()=>setShowRoster(false)},"Cerrar ×"),React.createElement("h2",null,"👥 Control de jugadores en la sala (",players.length,")"),React.createElement("p",{className:"roster-sub"},"Como administrador puedes ver quién está dentro y cerrar la sesión de cualquier participante si hace falta."),remove&&(
       React.createElement("div",{className:"remove-confirm",role:"alert"},React.createElement("h3",null,"¿Sacar de la sesión a ",remove.name,"?"),React.createElement("p",null,"Se cerrará su sesión en esta sala y se liberará su cartón y sus fichas."),React.createElement("button",{className:"gold-button",disabled:working,onClick:()=>action(async()=>{await net.removePlayer(roomId,remove.uid);setRemove(null)})},"Sí, sacar de la sala"),React.createElement("button",{className:"text-button",disabled:working,onClick:()=>setRemove(null)},"Cancelar"))
      ),players.length===0?React.createElement("p",null,"ℹ️ Ahora mismo no hay ningún jugador dentro de la sala."):players.map(p=>{let view=null;try{view=JSON.parse(p.cardView||'null')}catch{}const ids=Array.isArray(view?.cards)&&view.cards.length?view.cards:[p.card].filter(id=>Number.isInteger(id));return React.createElement("div",{key:p.uid,className:"roster-player-row"},React.createElement("div",null,React.createElement("b",null,p.name)," · ",p.card===null?'Eligiendo cartón':`${ids.length} ${ids.length===1?'cartón':'cartones'}`,React.createElement("small",null,"Marcados: ",p.marks?.length||0,"/15"),ids.length>0&&React.createElement("details",{className:"roster-cards-preview"},React.createElement("summary",null,"🎟 Ver ",ids.length," ",ids.length===1?'cartón':'cartones'),ids.map(id=>React.createElement("div",{key:id,className:"roster-card-mini"},React.createElement(Card,{id,marks:view?.marksByCard?.[id]||(id===p.card?p.marks:[]),staticPreview:true}))))),React.createElement("button",{className:"gold-button compact",disabled:working,onClick:()=>setRemove(p)},"Sacar / Borrar"))})))
   ),error&&React.createElement("div",{role:"alert",className:"shared-error"},error,React.createElement("button",{onClick:()=>setError('')},"×")),!room&&React.createElement("main",{className:"room-loading-shell"},React.createElement("h1",null,"Abriendo la partida…"),React.createElement("p",null,error||"La sala se está sincronizando. Espera un momento."),error&&React.createElement("button",{type:"button",className:"gold-button",onClick:closeSession},"Volver al panel de administrador")),room&&admin&&adminTab==='bombo'&&(
    React.createElement(React.Fragment,null,React.createElement(HostAppBoundary,{key:'safe-'+roomId,onBack:closeSession},React.createElement(HostApp,{key:roomId+'-'+hostKey,initialGame:lastGame.current||room,sharedBlocked:working||paused||!online,onGameChange:syncGame,onReset:()=>syncGame({drawn:[],pending:null},true),skipIntro:true,onParticipants:()=>setShowRoster(true),onAdministration:showMasterUI?()=>setAccounts(true):undefined,onBroadcast:()=>action(broadcast),onLeaveGame:closeSession})),paused&&(
      React.createElement("aside",{className:"shared-paused"},React.createElement("span",null,"🔔 ¡Sorteo en pausa! ",React.createElement("b",null,activeClaims[0]?.name||'Un jugador')," ha cantado ",React.createElement("b",null,activeClaims[0]?.kind==='line'?'LÍNEA':'BINGO'),"."),React.createElement("button",{className:"gold-button green compact",onClick:()=>setReview(activeClaims[0]||null)},"🔍 Comprobar cartón"))
     ))
   ),room&&showPlayerCard&&(
    React.createElement("main",{className:'app playing-card shared-player '+(myCards.length>1&&viewAllCards?'multi-cards-active':'')},React.createElement("div",{className:"card-play"},React.createElement("div",{className:"card-toolbar"},React.createElement("b",null,"🎟 ",player?.name||(showMasterUI?'Elisabeth':'Jugador')," · Sala ",roomId," (",myCards.length||desiredCount," ",(myCards.length||desiredCount)===1?'cartón':'cartones',")"),React.createElement("div",{className:"card-toolbar-btns"},React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>{audio.thud();setDraftCards(buildCardSelection(myCards,desiredCount));setPickingCards(p=>!p);}},"🎟 ",pickingCards&&effectivePrimaryCard!==null?'Ver cartones':'1, 2 o 3 cartones'),React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>{audio.thud();setSettings(!settings);}},"🎨 Color y fichas"),React.createElement(ManualButton,{role:"player",compact:true}))),(effectivePrimaryCard===null || pickingCards) ? (
       React.createElement("section",{className:"shared-catalog"},React.createElement("div",{className:"catalog-multi-header"},React.createElement("h2",null,"¿Con cuántos cartones quieres jugar?"),React.createElement("p",{className:"catalog-multi-sub"},"Cada jugador y el administrador podéis escoger jugar con ",React.createElement("b",null,"1, 2 o 3 cartones"),"."),React.createElement("div",{className:"card-count-selector",role:"group","aria-label":"Cantidad de cartones"},[1,2,3].map(n=>(
           React.createElement("button",{key:n,type:"button",className:'count-pill-btn '+(desiredCount===n?'active':''),onClick:()=>{
             audio.thud();
             setDesiredCount(n);
             setDraftCards(prev=>buildCardSelection(prev.length?prev:myCards,n));
            }},React.createElement("span",{className:"count-icons"},'🎟'.repeat(n)),React.createElement("b",null,"Jugar con ",n," ",n===1?'cartón':'cartones'))
          ))),(()=>{
          const readyCards = draftCards.length === desiredCount
           ? draftCards
           : buildCardSelection(draftCards.length ? draftCards : myCards, desiredCount);
          return (
           React.createElement("div",{className:"catalog-selection-bar"},React.createElement("div",{className:"catalog-selection-status"},React.createElement("span",null,"Seleccionados (",readyCards.length,"/",desiredCount,"): "),React.createElement("b",null,readyCards.length?readyCards.map(id=>'N.º '+(id+1)).join(', '):'Elige abajo o pulsa el botón verde')),React.createElement("div",{className:"catalog-selection-actions"},React.createElement("button",{type:"button",className:"gold-button green compact",onClick:()=>confirmMultiCards(readyCards,desiredCount)},"✅ Aceptar y jugar con ",desiredCount===1?'este cartón':`estos ${desiredCount} cartones`," (",readyCards.map(id=>'#'+(id+1)).join(', '),")"),React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>{
               const randomIds=pickRandomCards(desiredCount);
               confirmMultiCards(randomIds,desiredCount);
              }},"🎲 Elegir ",desiredCount," al azar y jugar"),React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>{
               pickRandomCards(desiredCount);
              }},"🔀 Sortear otros ",desiredCount),pickingCards&&effectivePrimaryCard!==null&&(
              React.createElement("button",{type:"button",className:"text-button",onClick:()=>setPickingCards(false)},"← Volver a mis cartones")
             )))
          );
         })()),CARDS.map((c,id)=>{
         const takenByOther=seats.some(s=>s.id===id&&s.uid!==user.uid);
         const isSelected=draftCards.includes(id);
         const selIndex=draftCards.indexOf(id);
         return (
          React.createElement("article",{key:id,className:isSelected?'catalog-card-selected':''},React.createElement(Card,{id:id,color:player?.color||'#8d1b2b',chip:player?.chip||'star',staticPreview:true}),React.createElement("div",{className:"catalog-card-actions"},React.createElement("button",{type:"button",className:'gold-button '+(isSelected?'green':''),disabled:takenByOther,onClick:()=>{
              audio.thud();
              if(desiredCount===1&&!pickingCards){
               confirmMultiCards([id],1);
               return;
              }
              setDraftCards(prev=>{
               if(prev.includes(id))return prev.filter(x=>x!==id);
               if(prev.length>=desiredCount)return [...prev.slice(0,desiredCount-1),id];
               return [...prev,id];
              });
             }},takenByOther
              ? 'Ocupado'
              : isSelected
              ? `✓ Cartón N.º ${id+1} elegido (${selIndex+1} de ${desiredCount}) · Toca para quitar`
              : desiredCount===1&&!pickingCards
              ? `Elegir cartón N.º ${id+1} y jugar`
              : `Seleccionar cartón N.º ${id+1}`),isSelected&&(
             React.createElement("button",{type:"button",className:"gold-button",onClick:()=>{
               const cardsToPlay=buildCardSelection(draftCards,desiredCount);
               confirmMultiCards(cardsToPlay,desiredCount);
              }},"🚀 ¡Empezar a jugar con ",desiredCount===1?'mi cartón':`mis ${desiredCount} cartones`," (",buildCardSelection(draftCards,desiredCount).map(x=>'#'+(x+1)).join(', '),")!")
            )))
         );
        }))
      ) : (
       React.createElement(React.Fragment,null,myCards.length>1&&(
         React.createElement("div",{className:"multi-cards-bar"},React.createElement("div",{className:"multi-cards-tabs"},React.createElement("button",{type:"button",className:'multi-tab-btn '+(viewAllCards?'active':''),onClick:()=>{audio.thud();setViewAllCards(true);}},"👁 Ver los ",myCards.length),myCards.map((cid,idx)=>(
            React.createElement("button",{key:cid,type:"button",className:'multi-tab-btn '+(!viewAllCards&&activeCardIdx===idx?'active':''),onClick:()=>{audio.thud();setActiveCardIdx(idx);setViewAllCards(false);}},"🎟 N.º ",cid+1," ",React.createElement("small",null,"(",getCardMarks(cid).length,"/15)"))
           ))))
        ),React.createElement("div",{className:'cards-stage-grid '+(myCards.length>1&&viewAllCards?'show-all-'+myCards.length:'single-focus')},myCards.map((cid,idx)=>{
          const isFocused = idx === (activeCardIdx < myCards.length ? activeCardIdx : 0);
          if(!viewAllCards && myCards.length>1 && !isFocused) return null;
          const cMarks=getCardMarks(cid);
          return (
           React.createElement("div",{className:'card-unit '+(isFocused?'is-landscape-active':'is-landscape-hidden'),key:cid},React.createElement(Card,{id:cid,marks:cMarks,onMark:(n,e)=>markCard(cid,n,e),color:player?.color||'#8d1b2b',chip:player?.chip||'star'},myCards.length>1&&myCards.map((switchCid,sIdx)=>(
              React.createElement("button",{key:switchCid,type:"button",className:'landscape-mini-btn card-switch-mini '+(sIdx===idx?'active-card-pill':''),onClick:()=>{audio.thud();setActiveCardIdx(sIdx);},title:`Ver Cartón N.º ${switchCid+1}`},"🎟 #",switchCid+1," (",getCardMarks(switchCid).length,")")
             )),React.createElement("button",{type:"button",className:"landscape-mini-btn line-mini",disabled:working||!online,onClick:()=>action(()=>claim('line',cid))},"¡LÍNEA!"),React.createElement("button",{type:"button",className:"landscape-mini-btn bingo-mini",disabled:working||!online,onClick:()=>action(()=>claim('bingo',cid))},"¡BINGO!"),React.createElement("button",{type:"button",className:"landscape-mini-btn gear-mini",onClick:()=>{audio.thud();setSettings(!settings);},title:"Color y fichas"},"🎨"),React.createElement("button",{type:"button",className:"landscape-mini-btn exit-mini",onClick:closeSession,title:"Cerrar sesión"},"🔒")))
          );
         })),React.createElement("div",{className:"shared-claim-buttons"},React.createElement("button",{type:"button",className:"gold-button claim-line-btn",disabled:working||!online,onClick:()=>action(()=>claim('line',myCards[activeCardIdx]))},"📣 ¡LÍNEA!"),React.createElement("button",{type:"button",className:"gold-button green claim-bingo-btn",disabled:working||!online,onClick:()=>action(()=>claim('bingo',myCards[activeCardIdx]))},"🏆 ¡BINGO!")),React.createElement("div",{className:"player-bottom-bar"},React.createElement("p",{className:"shared-hint"},"Dos toques para marcar · Un toque para quitar · Jugando con ",React.createElement("b",null,myCards.length," ",myCards.length===1?'cartón':'cartones')," (",myCards.map(c=>`#${c+1}: ${getCardMarks(c).length}/15`).join(' · '),") · Gira el móvil en horizontal para ver el cartón en grande"),React.createElement("div",{className:"player-bottom-actions"},React.createElement("button",{type:"button",className:"text-button player-leave-link",onClick:closeSession},"🔒 Cerrar sesión (guardar sala ",roomId,")"),React.createElement("button",{type:"button",className:"text-button player-leave-link",onClick:leaveGameCompletely},"🚪 Volver a la portada"))))
      ),settings&&(
       React.createElement("div",{className:"modal-backdrop"},React.createElement("section",{className:"modal",role:"dialog","aria-modal":"true","aria-label":"Mi cartón"},React.createElement("button",{className:"text-button",onClick:()=>setSettings(false)},"Cerrar ×"),React.createElement("h2",null,"Personaliza tus cartones"),React.createElement("div",{className:"shared-colors"},COLORS.map(c=>React.createElement("button",{key:c,type:"button","aria-label":'Color '+c,"aria-pressed":player.color===c,style:{background:c},onClick:()=>{audio.thud();setPlayer(p=>p?{...p,color:c}:p);patchPlayer({color:c}).catch(()=>{});}}))),React.createElement("label",null,"Color a medida ",React.createElement("input",{type:"color",value:player.color||'#8d1b2b',onChange:e=>{const val=e.target.value;setPlayer(p=>p?{...p,color:val}:p);patchPlayer({color:val}).catch(()=>{});}})),React.createElement("h3",null,"Color de las fichas"),React.createElement("div",{className:"chip-options"},React.createElement("button",{type:"button",className:"text-button","aria-pressed":player.chip==='auto',onClick:()=>{audio.thud();setPlayer(p=>p?{...p,chip:'auto'}:p);patchPlayer({chip:'auto'}).catch(()=>{});}},"A juego con el cartón"),React.createElement("button",{type:"button",className:"text-button","aria-pressed":player.chip==='transparent',onClick:()=>{audio.thud();setPlayer(p=>p?{...p,chip:'transparent'}:p);patchPlayer({chip:'transparent'}).catch(()=>{});}},"Transparentes")),React.createElement("label",null,"Otro color de ficha ",React.createElement("input",{type:"color",value:player.chip?.startsWith('#')?player.chip:(player.color||'#8d1b2b'),onChange:e=>{const val=e.target.value;setPlayer(p=>p?{...p,chip:val}:p);patchPlayer({chip:val}).catch(()=>{});}})),React.createElement("h3",null,"Cantidad de cartones (1, 2 o 3)"),React.createElement("p",null,"Actualmente juegas con ",React.createElement("b",null,myCards.length," ",myCards.length===1?'cartón':'cartones')," (",myCards.map(id=>'N.º '+(id+1)).join(', '),")."),React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>{
           audio.thud();
           setSettings(false);
           setDraftCards(myCards);
           setPickingCards(true);
          }},"🎟 Cambiar cantidad o elegir cartones (1, 2 o 3)"),React.createElement("div",{className:"modal-accept-footer"},React.createElement("button",{type:"button",className:"gold-button green modal-accept-btn",onClick:()=>{
            audio.chime();
            setSettings(false);
           }},"✅ Aceptar y volver"))))
      )))
   ),event&&seenKey!==dismissed&&(
    React.createElement(Celebration,{key:seenKey,event:event,isAdmin:admin,onCheckClaim:activeClaims[0]?()=>setReview(activeClaims[0]):undefined,onClose:()=>setDismissed(seenKey)})
   ),review&&reviewDecoded&&(
    React.createElement("div",{className:"modal-backdrop"},React.createElement("section",{className:"modal shared-review",role:"dialog","aria-modal":"true","aria-label":"Comprobar premio"},React.createElement("button",{className:"text-button",onClick:()=>setReview(null)},"Cerrar ×"),React.createElement("span",{className:"modal-star"},"🔍"),React.createElement("h2",null,review.name," ha cantado ",review.kind==='line'?'¡LÍNEA!':'¡BINGO!'),React.createElement("p",{className:"review-cards-count"},"Jugando con ",React.createElement("b",null,reviewDecoded.cards.length," ",reviewDecoded.cards.length===1?'cartón':'cartones')," (",reviewDecoded.cards.map(c=>'N.º '+(c+1)).join(', '),")"),reviewDecoded.cards.map(cid=>{
       const cMarks=reviewDecoded.marksByCard[cid]||[];
       const info=analyzeCardMarks(cid,cMarks,drawnSet);
       return (
        React.createElement("div",{key:cid,className:"review-card-block"},React.createElement(Card,{id:cid,marks:cMarks}),React.createElement("div",{className:"review-verification-summary"},React.createElement("div",{className:'verify-row '+(review.kind==='line'?(info.hasValidLine?'ok':'bad'):(info.hasValidBingo?'ok':'bad'))},React.createElement("b",null,review.kind==='line'
             ? (info.hasValidLine?'✅ ¡ESTE CARTÓN TIENE LÍNEA VÁLIDA!':'⚠️ Este cartón todavía no completa una línea cantada')
             : (info.hasValidBingo?'✅ ¡ESTE CARTÓN TIENE BINGO VÁLIDO!':'⚠️ Este cartón todavía no completa los 15 números cantados'))),React.createElement("div",{className:"verify-row ok"},React.createElement("b",null,"✓ Marcados que SÍ han salido (",info.validMarked.length,"):"),' ',info.validMarked.length ? info.validMarked.join(' · ') : 'Ninguno'),info.invalidMarked.length>0 ? (
           React.createElement("div",{className:"verify-row bad"},React.createElement("b",null,"✗ Marcados que AÚN NO han salido (",info.invalidMarked.length,"):"),' ',info.invalidMarked.join(' · '))
          ) : (
           React.createElement("div",{className:"verify-row ok"},React.createElement("b",null,"✨ ¡Todos los números marcados en este cartón han salido del bombo!"))
          )))
       );
      }),React.createElement("div",{className:"verify-row all-drawn"},React.createElement("small",null,"Total bolas cantadas (",room.drawn.length,"/90): ",room.drawn.join(' · ')||'Ninguna')),React.createElement("div",{className:"reset-actions"},React.createElement("button",{className:"gold-button green",disabled:working,onClick:()=>action(()=>resolveClaim(review,true))},"✅ Dar por bueno (¡Premio válido!)"),React.createElement("button",{className:"gold-button",disabled:working,onClick:()=>action(()=>resolveClaim(review,false))},"❌ Dar por malo y continuar (🎺 Música de decepción)"))))
   ))
 );
}

    return { Confetti, SharedBingo };
  })();

  // --- main.jsx ---
  (() => {
    








const A='./';
const CARD_COLORS=[['Rojo Navidad','#8d1b2b'],['Verde abeto','#194e3c'],['Azul océano','#245882'],['Violeta','#6a387a'],['Oro cálido','#987125'],['Turquesa','#087f8c'],['Coral','#ed7864'],['Rosa peonía','#d75a91'],['Lavanda','#b6a0df'],['Azul cielo','#8dcbe6'],['Menta','#9bd4b0'],['Amarillo sol','#f3ce63'],['Naranja mandarina','#e99535'],['Marrón canela','#90664c'],['Blanco puro','#ffffff']];
function Icon({name}){return React.createElement("span",{"aria-hidden":"true"},{gear:'⚙',sound:'♫',back:'↶',palette:'◉',star:'✦',close:'×',card:'▦'}[name])}
function MusicButton(){const [enabled,setEnabled]=useState(audio.musicEnabled);useEffect(()=>{const update=()=>setEnabled(audio.musicEnabled());window.addEventListener('bingo-audio-state',update);return()=>window.removeEventListener('bingo-audio-state',update)},[]);return React.createElement("div",{className:"music-toolbar"},React.createElement("button",{type:"button",className:"music-toggle "+(enabled?'is-playing':''),"aria-label":enabled?'Parar música':'Escuchar música',"aria-pressed":enabled,onClick:()=>{audio.unlock();audio.setMusic(!enabled);}},React.createElement("span",{"aria-hidden":"true"},enabled?'♫':'♪')," ",enabled?'Parar música':'Escuchar música'),React.createElement("details",{className:"music-credit"},React.createElement("summary",null,"Créditos musicales"),"Jingle Bells · Kevin MacLeod (incompetech.com). ",React.createElement("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer"},"CC BY 3.0"),". Grabación sin modificar, reproducida en bucle."))}

function App({initialGame,onGameChange,onBroadcast,onReset,onParticipants,onAdministration,onLeaveGame,skipIntro=false,sharedBlocked=false}){
 const [s,setS]=useState(()=>{try{return {...restore(localStorage.getItem('bingo-elisabeth-v1')),...(initialGame?{drawn:initialGame.drawn,pending:initialGame.pending}: {})}}catch{return {...fresh(),...(initialGame?{drawn:initialGame.drawn,pending:initialGame.pending}:{})}}});
 const [greetingOpen,setGreetingOpen]=useState(false),[soloClaim,setSoloClaim]=useState(null);
 const [soloCount,setSoloCount]=useState(1),[soloCards,setSoloCards]=useState(()=>s.selected!=null?[s.selected]:[]),[soloActiveIdx,setSoloActiveIdx]=useState(0),[soloViewAll,setSoloViewAll]=useState(true);
 const [crankSpin,setCrankSpin]=useState(false);
 const crankTimer=useRef();
 useEffect(()=>{const update=e=>setS(x=>({...x,...e.detail}));window.addEventListener('bingo-music-change',update);return()=>window.removeEventListener('bingo-music-change',update)},[]);
 useEffect(()=>{onGameChange?.({drawn:s.drawn,pending:s.pending})},[s.drawn,s.pending]);
 const [returnBalls,setReturnBalls]=useState([]);
 const hatchRef=useRef();
 const [fullscreen,setFullscreen]=useState(false);
 const [phraseNumber,setPhraseNumber]=useState(22),[phraseDraft,setPhraseDraft]=useState(s.phrases[22]??SAYINGS[22]);
 const [intro,setIntro]=useState(skipIntro?3:0),[screen,setScreen]=useState('game'),[modal,setModal]=useState(null),[reveal,setReveal]=useState(null),[busy,setBusy]=useState(false),[rotation,setRotation]=useState(0),[notice,setNotice]=useState(''),[palette,setPalette]=useState(false),[flying,setFlying]=useState(null),[returning,setReturning]=useState(false),[dropping,setDropping]=useState(false);
 const handleTimer=useRef(),lastTap=useRef({}),lock=useRef(false),drag=useRef(null),ballRef=useRef(),boardRef=useRef(),modalRef=useRef(),noticeTimer=useRef(),timers=useRef([]);
 const later=(f,n)=>{let t=setTimeout(f,n);timers.current.push(t);return t};
 const tell=t=>{setNotice(t);clearTimeout(noticeTimer.current);noticeTimer.current=setTimeout(()=>setNotice(''),5000)};

 useEffect(()=>{
  document.body.classList.toggle('is-playing-solo-card',screen==='card');
  return()=>document.body.classList.remove('is-playing-solo-card');
 },[screen]);

 useEffect(()=>{try{localStorage.setItem('bingo-elisabeth-v1',JSON.stringify(s))}catch{tell('El navegador no puede guardar la partida en este dispositivo.')}audio.configure(s)},[s]);
 useEffect(()=>{window.speechSynthesis?.getVoices();return()=>{clearTimeout(handleTimer.current);clearTimeout(crankTimer.current);clearTimeout(noticeTimer.current);timers.current.forEach(clearTimeout);audio.stopRoll()}},[]);
 useEffect(()=>{if(s.drawn.length===90&&intro===3&&!busy&&!returning)setModal('end')},[s.drawn.length,intro,busy,returning]);
 useEffect(()=>{if(!modal&&!reveal)return;const previous=document.activeElement;const el=modalRef.current;el?.focus();function key(e){if(e.key==='Escape'){if(reveal)closeBall();else if(modal!=='end')setModal(null)}if(e.key==='Tab'&&el){const all=[...el.querySelectorAll('button,input,[tabindex="0"]')].filter(x=>!x.disabled);if(!all.length){e.preventDefault();return}if(e.shiftKey&&document.activeElement===all[0]){e.preventDefault();all.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===all.at(-1)){e.preventDefault();all[0].focus()}}}document.addEventListener('keydown',key);return()=>{document.removeEventListener('keydown',key);previous?.focus?.()}},[modal,reveal]);
 useEffect(()=>{const update=()=>{if(!window.visualViewport||window.visualViewport.scale===1)document.documentElement.style.setProperty('--visible-height',(window.visualViewport?.height||window.innerHeight)+'px')};const sync=()=>setFullscreen(!!(document.fullscreenElement||document.webkitFullscreenElement));update();window.addEventListener('resize',update);window.visualViewport?.addEventListener('resize',update);document.addEventListener('fullscreenchange',sync);document.addEventListener('webkitfullscreenchange',sync);return()=>{window.removeEventListener('resize',update);window.visualViewport?.removeEventListener('resize',update);document.removeEventListener('fullscreenchange',sync);document.removeEventListener('webkitfullscreenchange',sync)}},[]);
 useEffect(()=>{if(screen==='card')window.scrollTo(0,0)},[screen]);

 function pulseCrank(ms=2800){
  setCrankSpin(true);
  clearTimeout(crankTimer.current);
  crankTimer.current=setTimeout(()=>setCrankSpin(false),ms);
 }

 async function toggleFullscreen(){try{if(document.fullscreenElement||document.webkitFullscreenElement){await (document.exitFullscreen?.()??document.webkitExitFullscreen?.());return}const el=document.documentElement;if(el.requestFullscreen)await el.requestFullscreen();else if(el.webkitRequestFullscreen)await el.webkitRequestFullscreen();else tell('Gira el móvil en horizontal para ver solo el cartón en grande.')}catch{tell('Gira el móvil en horizontal para ver solo el cartón en grande.')}}
 function enter(){audio.unlock();setIntro(i=>Math.min(3,i+1));audio.chime()}

 function extract(){
  if(sharedBlocked)return;
  clearTimeout(handleTimer.current);
  if(lock.current||s.drawn.length===90||reveal)return;
  // Si había una bola en el bol sin colocar, la colocamos automáticamente en el tablero antes de girar
  if(s.pending!==null){
   setS(x=>place(x));
  }
  lock.current=true;
  setBusy(true);
  pulseCrank(2800);
  setRotation(r=>r+1440);
  audio.roll(2800);
  later(()=>setDropping(true),1900);
  later(()=>{
   setDropping(false);
   setS(x=>draw(x));
   audio.stopRoll();
   audio.chime();
   setBusy(false);
   lock.current=false;
  },2800);
 }

 function crank(){
  audio.unlock();
  extract();
 }

 function showBall(repeat=false){if(lock.current||sharedBlocked)return;const n=repeat?s.drawn.at(-1):s.pending;if(n==null)return;setReveal({n,repeat});audio.speak(announcement(n,s.phrases),()=>tell('No hay una voz española disponible en este dispositivo. Puedes leer el número en la bola.'))}
 function closeBall(){if(lock.current||!reveal)return;if(reveal.repeat){setReveal(null);return}const from=ballRef.current?.getBoundingClientRect();const target=boardRef.current?.querySelector(`[data-number="${reveal.n}"]`);target?.scrollIntoView({behavior:'instant',block:'nearest'});const to=target?.getBoundingClientRect();const n=reveal.n;setReveal(null);setBusy(true);lock.current=true;if(from&&to)setFlying({n,x:from.left,y:from.top,size:from.width,dx:to.left-from.left,dy:to.top-from.top,scale:to.width/from.width});later(()=>{setS(x=>place(x));setFlying(null);setBusy(false);lock.current=false;audio.thud()},650)}
 function startAgain(){if(lock.current||sharedBlocked)return;lock.current=true;setModal(null);setReveal(null);setPalette(false);setScreen('game');setBusy(true);audio.stopSpeech();audio.chime();later(()=>{window.scrollTo(0,0);const hatch=hatchRef.current?.getBoundingClientRect();const numbers=[...s.drawn,...(s.pending===null?[]:[s.pending])];const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const step=numbers.length?Math.min(100,1800/numbers.length):0;const duration=reduced?200:1250;const balls=hatch?numbers.map((n,i)=>{const el=boardRef.current?.querySelector(`[data-number="${n}"]`);const from=(n===s.pending?document.querySelector('.bowl-hotspot'):el)?.getBoundingClientRect();if(!from)return null;const size=32;return {n,x:from.left+from.width/2-size/2,y:from.top+from.height/2-size/2,dx:hatch.left+hatch.width/2-from.left-from.width/2,dy:hatch.top+hatch.height/2-from.top-from.height/2,delay:reduced?0:350+i*step,duration}}).filter(Boolean):[];setReturnBalls(balls);setReturning(true);later(()=>{if(onReset)onReset();setS(x=>reset(x));setReturnBalls([]);setReturning(false);setBusy(false);lock.current=false;audio.chime()},reduced?300:Math.max(1000,350+numbers.length*step+duration+200))},80)}
 function mark(n,e,cardId=s.selected){const id=cardId??s.selected,key=id+'-'+n,marks=s.marks[id]||[];if(marks.includes(n)){setS(x=>({...x,marks:{...x.marks,[id]:(x.marks[id]||[]).filter(v=>v!==n)}}));lastTap.current[key]=0;return}const now=Date.now();if(e.detail===0||now-(lastTap.current[key]||0)<350){setS(x=>({...x,cardLocked:true,marks:{...x.marks,[id]:[...new Set([...(x.marks[id]||[]),n])]}}));audio.thud();lastTap.current[key]=0}else lastTap.current[key]=now}
 function card(grid,id,mini=false,extraClass=''){const Cell=mini?'span':'button';return React.createElement("div",{className:'card-unit '+extraClass,key:id},React.createElement("div",{className:'bingo-card '+(mini?'mini ':'')+((s.colors[id]||'').toLowerCase()==='#ffffff'?'white-card':'')+((s.chipColors?.[id])==='transparent'?' clear-chips':''),style:{'--card-color':s.colors[id]||'#8d1b2b','--chip-color':s.chipColors?.[id]==='transparent'?'transparent':s.chipColors?.[id]||s.colors[id]||'#8d1b2b'}},React.createElement("div",{className:"card-heading"},React.createElement(SnowGlobe,{className:"card-globe",staticPreview:mini}),React.createElement("div",{className:"card-heading-title"},React.createElement("h2",null,"CARTÓN N.º ",String(id+1).padStart(2,'0')),!mini&&React.createElement("div",{className:"card-heading-controls"},soloCards.length>1&&soloCards.map((scid,sIdx)=>React.createElement("button",{key:scid,type:"button",className:'landscape-mini-btn card-switch-mini '+(scid===id?'active-card-pill':''),onClick:()=>setSoloActiveIdx(sIdx)},"🎟 #",scid+1," (",(s.marks[scid]||[]).length,")")),React.createElement("button",{type:"button",className:"landscape-mini-btn line-mini",onClick:()=>{audio.fanfare();setSoloClaim('line')}},"¡LÍNEA!"),React.createElement("button",{type:"button",className:"landscape-mini-btn bingo-mini",onClick:()=>{audio.fanfare();audio.bells();setSoloClaim('bingo')}},"¡BINGO!"),React.createElement("button",{className:"palette-button","aria-label":"Configuración del color del cartón","aria-expanded":palette,"aria-controls":"card-colors",title:"Configurar color",onClick:()=>setPalette(p=>!p)},React.createElement(Icon,{name:"gear"})),React.createElement("button",{type:"button",className:"landscape-mini-btn exit-mini",onClick:()=>{setScreen('game');setPalette(false)},title:"Salir"},"🚪"))),React.createElement(Gnome,{className:"card-gnome",staticPreview:mini})),React.createElement("div",{className:"card-grid"},grid.flat().map((n,i)=>n?React.createElement(Cell,{key:i,onClick:mini?undefined:e=>mark(n,e,id),"aria-label":`${n}${(s.marks[id]||[]).includes(n)?', marcado':', sin marcar'}`,"aria-pressed":(s.marks[id]||[]).includes(n),className:(s.marks[id]||[]).includes(n)?'marked':''},React.createElement("span",null,n)):React.createElement("div",{key:i,className:"blank","aria-hidden":"true"},"❄")))))}

 return React.createElement("div",{className:'app '+(intro<3?'welcome':screen==='card'?'playing-card':'')},React.createElement("div",{className:"snow","aria-hidden":"true"},Array.from({length:34},(_,i)=>React.createElement("i",{key:i,style:{left:`${(i*37)%100}%`,animationDelay:`-${i*.71}s`,animationDuration:`${8+i%8}s`,opacity:.25+i%5*.12,width:3+i%5,height:3+i%5}}))),React.createElement("div",{className:"garland left","aria-hidden":"true"}),React.createElement("div",{className:"garland right","aria-hidden":"true"}),React.createElement("button",{className:"settings icon-button","aria-label":"Configuración",onClick:()=>setModal('settings')},React.createElement(Icon,{name:"gear"})),intro<3?React.createElement("main",{className:"intro"},React.createElement("p",{className:"eyebrow"},"UNA TRADICIÓN · UN POQUITO DE MAGIA"),React.createElement("h1",{className:"intro-title"},"La Navidad",React.createElement("br",null),"se juega ",React.createElement("em",null,"juntos.")),React.createElement("div",{className:"intro-stage"},intro===0?React.createElement(React.Fragment,null,React.createElement(SnowGlobe,{className:"intro-globe"}),React.createElement(Gnome,{className:"intro-gnome"})):React.createElement("video",{src:A+'pruna.mp4',autoPlay:true,muted:true,loop:true,playsInline:true,onError:()=>tell('No se ha podido reproducir el vídeo de Pruna. Puedes continuar al bingo.'),"aria-label":"Pruna bailando"})),React.createElement("p",{className:"intro-copy"},intro===0?'Bienvenidos al bingo de Elisabeth':intro===1?'Pruna ya está lista para bailar. ¿Y tú?':'Que empiece la magia de la Navidad'),React.createElement("button",{className:"gold-button start",onClick:enter},intro===0?'Toca para empezar':intro===1?'Un poquito más de magia':'Entrar al bingo'," ",React.createElement("span",null,"✦")),React.createElement("div",{className:"steps","aria-label":`Paso ${intro+1} de 3`},[0,1,2].map(i=>React.createElement("i",{className:i<=intro?'active':'',key:i})))):React.createElement(React.Fragment,null,React.createElement("header",{className:"main-header"},React.createElement("p",{className:"eyebrow"},"EL BINGO DE ELISABETH"),React.createElement("h1",{className:"bingo-title","aria-label":"Bingo"},'BINGO'.split('').map((l,i)=>React.createElement("span",{key:i,style:{'--i':i}},l))),React.createElement("p",{className:"subhead"},screen==='game'?'Una bola, una sonrisa, un recuerdo.':screen==='catalog'?'37 cartones. Elige tu suerte.':'Tu cartón de la suerte')),screen==='game'?React.createElement("main",{className:"game-layout"},React.createElement("div",{className:"bombo-music-control"},React.createElement(ManualButton,{role:"host",compact:true})),React.createElement("section",{className:"machine-section","aria-label":"Bombo del bingo"},React.createElement("div",{className:'machine '+(busy?'mixing ':'')+(crankSpin?'crank-spin ':'')+(returning?'hatch-open':'')},React.createElement("div",{className:"return-hatch",ref:hatchRef,"aria-hidden":"true"},React.createElement("i",null)),React.createElement("img",{className:"machine-art",src:A+'bombo.png',alt:"Bombo dorado con manivela y bol de cristal",draggable:"false"}),React.createElement("div",{className:"machine-crank","aria-hidden":"true"},React.createElement("img",{src:A+'bombo.png',alt:"",draggable:"false"})),React.createElement("div",{className:"cage",style:{'--rotation':rotation+'deg'},onPointerDown:e=>{if(busy)return;e.currentTarget.setPointerCapture(e.pointerId);drag.current={x:e.clientX,y:e.clientY,moved:false}},onPointerMove:e=>{if(!drag.current)return;const dx=e.clientX-drag.current.x,dy=e.clientY-drag.current.y;if(Math.hypot(dx,dy)>8){drag.current.moved=true;pulseCrank(900);setRotation(r=>r+dy*2+dx*.25);audio.roll(900);drag.current={x:e.clientX,y:e.clientY,moved:true}}},onPointerUp:()=>{if(drag.current){const wasMoved=drag.current.moved;drag.current=null;if(wasMoved){pulseCrank(900);setRotation(r=>r+180);audio.roll(900)}}},onPointerCancel:()=>{drag.current=null;audio.stopRoll()},role:"button",tabIndex:0,"aria-label":"Girar bombo o sacar bola",onKeyDown:e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();extract()}},onClick:()=>{if(!busy&&!lock.current){extract()}}},React.createElement(RollingCage,{rotation:rotation,duration:2800})),dropping&&React.createElement("span",{className:"single-drop-ball","aria-hidden":"true"}),React.createElement("span",{className:"empty-bowl-cover","aria-hidden":"true"}),React.createElement("button",{className:"crank-hotspot",onClick:crank,disabled:busy||sharedBlocked,"aria-label":"Manivela: toca para girar y sacar bola",title:"Toca la manivela para girar y sacar bola"}),React.createElement("button",{className:'bowl-hotspot '+(s.pending!==null?'ready':''),disabled:s.pending===null||busy||sharedBlocked,onClick:()=>showBall(),"aria-label":s.pending!==null?'Mostrar la bola del bol':'Bol vacío'},s.pending!==null&&React.createElement("span",{className:"bowl-ball"},"✦"))),React.createElement(Gnome,{className:"side-gnome"}),React.createElement(SnowGlobe,{className:"side-globe"}),React.createElement("p",{className:"machine-status",role:"status"},busy?'Girando el bombo y sacando bola…':s.pending!==null?'¡Bola lista en el bol! Tócala para cantarla':'Toca la manivela o el bombo para sacar bola')),React.createElement("section",{className:"board-section"},React.createElement("div",{className:"board-caption"},React.createElement("span",null,"✦ NÚMEROS CANTADOS"),React.createElement("span",null,s.drawn.length," ",React.createElement("small",null,"/ 90"))),React.createElement("div",{className:'number-board '+(returning?'returning':''),ref:boardRef},NUMBERS.map(n=>React.createElement("div",{"data-number":n,key:n,className:'number-hole '+(s.drawn.includes(n)?'drawn ':'')+(s.drawn.at(-1)===n?'latest':''),"aria-label":`${n}${s.drawn.includes(n)?', cantado':''}`},React.createElement("span",null,n)))),React.createElement("div",{className:"game-actions"},React.createElement("button",{className:"gold-button",disabled:!s.drawn.length||busy||!!reveal,onClick:()=>showBall(true)},React.createElement(Icon,{name:"back"})," Repetir número"),React.createElement("button",{className:"gold-button bombo-help-button",onClick:()=>setModal('help')},"Cómo usar el bombo"),!onGameChange&&React.createElement("button",{className:"gold-button green",disabled:busy,onClick:()=>setScreen(s.selected===null?'catalog':'card')},React.createElement(Icon,{name:"card"})," Carta de bingo"),React.createElement("button",{className:"gold-button greeting-button",disabled:busy,onClick:()=>{if(onBroadcast){onBroadcast();return}audio.unlock();setGreetingOpen(true)}},React.createElement("span",{className:"greeting-button-portrait","aria-hidden":"true"})," Saludo del duende"),React.createElement("button",{className:"gold-button restart-button",disabled:busy||sharedBlocked,onClick:()=>setModal('reset')},"↻ Reiniciar partida")))):screen==='catalog'?React.createElement("main",{className:"catalog"},React.createElement("div",{className:"section-tools"},React.createElement("p",null,"Elige jugar con 1, 2 o 3 cartones."),React.createElement("button",{className:"gold-button compact",onClick:()=>setScreen('game')},"↶ Volver al bombo")),React.createElement("div",{className:"catalog-multi-header"},React.createElement("h2",null,"¿Con cuántos cartones quieres jugar?"),React.createElement("div",{className:"card-count-selector"},[1,2,3].map(n=>React.createElement("button",{key:n,type:"button",className:'count-pill-btn '+(soloCount===n?'active':''),onClick:()=>{audio.thud();setSoloCount(n);setSoloCards(prev=>{const next=[...prev.slice(0,n)];for(let cid=0;cid<CARDS.length&&next.length<n;cid++){if(!next.includes(cid))next.push(cid);}return next;})}},React.createElement("span",{className:"count-icons"},'🎟'.repeat(n)),React.createElement("b",null,"Jugar con ",n," ",n===1?'cartón':'cartones')))),React.createElement("div",{className:"catalog-selection-bar"},React.createElement("div",{className:"catalog-selection-status"},React.createElement("span",null,"Seleccionados (",soloCards.length,"/",soloCount,"): ",React.createElement("b",null,soloCards.length?soloCards.map(c=>'N.º '+(c+1)).join(', '):'Elige abajo o al azar'))),React.createElement("div",{className:"catalog-selection-actions"},React.createElement("button",{type:"button",className:"gold-button green compact",onClick:()=>{audio.chime();const picked=soloCards.length?soloCards.slice(0,soloCount):[0];setSoloCards(picked);setS(x=>chooseCard(x,picked[0]));setScreen('card');setPalette(false);window.scrollTo(0,0)}},"✅ Aceptar y jugar con ",soloCount===1?'este cartón':`estos ${soloCount} cartones`),React.createElement("button",{type:"button",className:"gold-button compact",onClick:()=>{audio.chime();const pool=CARDS.map((_,i)=>i);const picked=[];while(picked.length<soloCount&&pool.length){picked.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);}setSoloCards(picked);setS(x=>chooseCard(x,picked[0]));setScreen('card');setPalette(false);window.scrollTo(0,0);}},"🎲 Elegir ",soloCount," al azar y jugar")))),React.createElement("div",{className:"catalog-list"},CARDS.map((grid,id)=>{const isSel=soloCards.includes(id);return React.createElement("article",{className:'card-choice '+(isSel?'catalog-card-selected':''),key:id},card(grid,id,true),React.createElement("button",{className:"choose-label","aria-label":`Elegir cartón ${id+1}`,onClick:()=>{audio.thud();if(soloCount===1){setSoloCards([id]);setS(x=>chooseCard(x,id));setScreen('card');setPalette(false);window.scrollTo(0,0);return;}setSoloCards(prev=>{const next=prev.includes(id)?prev.filter(x=>x!==id):prev.length>=soloCount?[...prev.slice(0,soloCount-1),id]:[...prev,id];if(next.length)setS(x=>chooseCard(x,next[0]));return next;})}},isSel?`✓ Cartón N.º ${id+1} seleccionado`:soloCount===1?'Elegir este cartón →':`Seleccionar cartón N.º ${id+1}`))}))):React.createElement("main",{className:"card-play"},React.createElement("div",{className:"card-toolbar"},React.createElement("span",null,"✦ TU MOMENTO DE SUERTE (",Math.max(1,soloCards.length)," ",Math.max(1,soloCards.length)===1?'CARTÓN':'CARTONES',")"),React.createElement("div",{className:"card-toolbar-btns"},React.createElement("button",{className:"gold-button compact",onClick:()=>{setScreen('catalog');setPalette(false)}},"🎟 1, 2 o 3 cartones"),React.createElement("button",{className:"gold-button compact fullscreen-button",onClick:toggleFullscreen},fullscreen?'↙ Reducir':'⛶ Pantalla completa'),React.createElement("button",{className:"gold-button compact",onClick:()=>{setScreen('game');setPalette(false)}},"🚪 Volver al bombo"))),soloCards.length>1&&React.createElement("div",{className:"multi-cards-bar"},React.createElement("div",{className:"multi-cards-tabs"},React.createElement("button",{type:"button",className:'multi-tab-btn '+(soloViewAll?'active':''),onClick:()=>setSoloViewAll(true)},"👁 Ver los ",soloCards.length),soloCards.map((cid,idx)=>React.createElement("button",{key:cid,type:"button",className:'multi-tab-btn '+(!soloViewAll&&soloActiveIdx===idx?'active':''),onClick:()=>{setSoloActiveIdx(idx);setSoloViewAll(false)}},"🎟 N.º ",cid+1," (",(s.marks[cid]||[]).length,"/15)")))),React.createElement("div",{className:'cards-stage-grid '+(soloCards.length>1&&soloViewAll?'show-all-'+soloCards.length:'single-focus')},(soloCards.length?soloCards:[s.selected??0]).map((cid,idx)=>{const isFoc=idx===(soloActiveIdx<soloCards.length?soloActiveIdx:0);if(!soloViewAll&&soloCards.length>1&&!isFoc)return null;return card(CARDS[cid],cid,false,isFoc?'is-landscape-active':'is-landscape-hidden')})),React.createElement("div",{className:"shared-claim-buttons"},React.createElement("button",{type:"button",className:"gold-button claim-line-btn",onClick:()=>{audio.fanfare();setSoloClaim('line')}},"📣 ¡LÍNEA!"),React.createElement("button",{type:"button",className:"gold-button green claim-bingo-btn",onClick:()=>{audio.fanfare();audio.bells();setSoloClaim('bingo')}},"🏆 ¡BINGO!")),palette&&React.createElement("div",{id:"card-colors",className:"palette-panel","aria-label":"Colores del cartón"},React.createElement("div",{className:"palette-heading"},React.createElement("strong",null,"Personaliza tus cartones"),React.createElement("button",{className:"text-button",onClick:()=>setPalette(false)},"Cerrar ×")),CARD_COLORS.map(([name,c])=>React.createElement("button",{key:c,title:name,"aria-label":name,"aria-pressed":(s.colors[s.selected]||'#8d1b2b').toLowerCase()===c,style:{background:c},onClick:()=>{audio.thud();setS(x=>({...x,colors:{...x.colors,[x.selected]:c}}));}})),React.createElement("label",null,"Color del cartón ",React.createElement("input",{type:"color",value:s.colors[s.selected]||'#8d1b2b',onChange:e=>setS(x=>({...x,colors:{...x.colors,[x.selected]:e.target.value}}))})),React.createElement("div",{className:"chip-settings"},React.createElement("strong",null,"Color de las fichas"),React.createElement("p",null,"Combínalas con el cartón o elige otro color."),React.createElement("div",{className:"chip-options"},React.createElement("button",{className:"text-button","aria-pressed":!s.chipColors?.[s.selected],onClick:()=>{audio.thud();setS(x=>{const chipColors={...x.chipColors};delete chipColors[x.selected];return {...x,chipColors}});}},"A juego con el cartón"),React.createElement("button",{className:"text-button","aria-pressed":s.chipColors?.[s.selected]==='transparent',onClick:()=>{audio.thud();setS(x=>({...x,chipColors:{...x.chipColors,[x.selected]:'transparent'}}));}},"◯ Transparente"),React.createElement("label",null,"Personalizado ",React.createElement("input",{type:"color","aria-label":"Color personalizado de las fichas",value:/^#[0-9a-f]{6}$/i.test(s.chipColors?.[s.selected]||'')?s.chipColors[s.selected]:s.colors[s.selected]||'#8d1b2b',onChange:e=>setS(x=>({...x,chipColors:{...x.chipColors,[x.selected]:e.target.value}}))})))),React.createElement("div",{className:"modal-accept-footer"},React.createElement("button",{type:"button",className:"gold-button green modal-accept-btn",onClick:()=>{audio.chime();setPalette(false);}},"✅ Aceptar y volver"))),React.createElement("p",{className:"card-instruction"},"Dos toques para marcar · Un toque para retirar"),React.createElement("div",{className:"card-bottom"},React.createElement("div",null,s.cardLocked?React.createElement("p",{className:"locked-card",role:"status"},"✦ Cartón fijado para esta partida"):React.createElement("button",{className:"gold-button",onClick:()=>{setScreen('catalog');setPalette(false)}},"↶ Cambiar cartón"),React.createElement("p",{className:"rotate-note"},"Gira el móvil para ver solo tu cartón en grande."),React.createElement("p",{className:"marked-count"},(s.marks[s.selected]||[]).length," de 15 números marcados"))))),React.createElement("footer",null,React.createElement("button",{type:"button",className:"contact-footer-trigger",onClick:()=>setContactOpen(true)},React.createElement("span",null,"✧")," Creado por ",React.createElement("em",null,"Elisabeth")," ",React.createElement("span",null,"✧"),React.createElement("small",null,"Comparte la alegría de la Navidad")),intro<3&&React.createElement("span",{className:"app-version","aria-label":"Versión 15"},"V16")),contactOpen&&React.createElement(ContactPopup,{onClose:()=>setContactOpen(false)}),intro>=3&&screen==='game'&&React.createElement("div",{className:"host-version","aria-label":"Versión 15"},"V16"),notice&&React.createElement("div",{className:"toast",role:"status"},notice,React.createElement("button",{"aria-label":"Cerrar aviso",onClick:()=>setNotice('')},"×")),returning&&React.createElement("div",{className:"return-flight","aria-label":"Las bolas vuelven al bombo"},returnBalls.map(b=>React.createElement("span",{key:b.n,className:"returning-ball",style:{left:b.x,top:b.y,'--dx':b.dx+'px','--dy':b.dy+'px',animationDelay:b.delay+'ms',animationDuration:b.duration+'ms'}},b.n))),greetingOpen&&React.createElement(Greeting,{onClose:()=>{setGreetingOpen(false);audio.stopSpeech()}}),soloClaim&&React.createElement("div",{className:"greeting-overlay"},React.createElement(Confetti,null),React.createElement("section",{className:"greeting-show",role:"dialog","aria-modal":"true"},React.createElement("h2",null,"¡Has cantado ",soloClaim==='line'?'LÍNEA':'BINGO',"!"),React.createElement(Gnome,{className:"broadcast-gnome",autoGreet:true}),React.createElement("div",{className:"celebration-actions"},React.createElement("button",{className:"gold-button green compact",onClick:()=>setSoloClaim(null)},"¡Seguir jugando!")))),(modal||reveal)&&React.createElement("div",{className:"modal-backdrop"},React.createElement("section",{className:'modal '+(reveal?'reveal-modal':''),role:"dialog","aria-modal":"true","aria-label":reveal?'Número '+reveal.n:modal==='settings'?'Configuración':modal==='end'?'Fin del bingo':modal==='phrases'?'Frases de los números':modal==='reset'?'Confirmar reinicio':'Cómo jugar',tabIndex:-1,ref:modalRef},reveal?React.createElement(React.Fragment,null,React.createElement("p",{className:"eyebrow"},reveal.repeat?'VOLVEMOS A CANTAR…':'LA SUERTE DICE…'),React.createElement("button",{className:"big-ball",ref:ballRef,onClick:closeBall,"aria-label":reveal.repeat?'Cerrar número repetido':'Colocar '+reveal.n+' en el tablero'},reveal.n),React.createElement("p",null,reveal.repeat?'Toca la bola para volver':'Toca la bola para colocarla en el tablero')):modal==='end'?React.createElement("button",{className:"end-button",onClick:startAgain},React.createElement("span",{className:"modal-star"},"✦"),React.createElement("h2",null,"¡Se acabó el bingo!"),React.createElement("p",null,"90 números, un montón de recuerdos."),React.createElement("strong",null,"Toca para devolver las bolas al bombo",React.createElement("br",null),"y empezar otra partida")):React.createElement(React.Fragment,null,React.createElement("button",{className:"close icon-button","aria-label":"Cerrar ventana",onClick:()=>setModal(null)},"×"),React.createElement("span",{className:"modal-star"},"✦"),modal==='reset'?React.createElement(React.Fragment,null,React.createElement("h2",null,"¿Empezamos de nuevo?"),React.createElement("p",null,"Las bolas volverán volando al bombo y se borrarán las fichas de los cartones de la partida."),React.createElement("p",null,"Conservarás tus colores, frases y ajustes."),React.createElement("div",{className:"reset-actions"},React.createElement("button",{className:"gold-button green",onClick:()=>setModal(null)},"No, seguir jugando"),React.createElement("button",{className:"gold-button",onClick:startAgain},"Sí, reiniciar partida"))):modal==='help'?React.createElement(React.Fragment,null,React.createElement("h2",null,"Cómo usar el bombo"),React.createElement("ol",{className:"bombo-help-steps"},React.createElement("li",null,React.createElement("b",null,"Gira la manivela o el bombo.")," Toca la manivela dorada (o el bombo) y verás girar la manivela y las bolas y caer una bola al bol."),React.createElement("li",null,React.createElement("b",null,"Descubre el número.")," Toca el bol de cristal para ver la bola en grande y escuchar su frase."),React.createElement("li",null,React.createElement("b",null,"Colócala en el tablero.")," Toca la bola grande y viajará a su casilla.")),React.createElement("button",{className:"gold-button",onClick:()=>setModal(null)},"¡Vamos a jugar!")):modal==='phrases'?React.createElement(React.Fragment,null,React.createElement("h2",null,"La voz de tu bingo"),React.createElement("p",{className:"phrase-intro"},"Una frase para cada bola. Cámbiala por un dicho, una broma o una dedicatoria."),React.createElement("label",{className:"phrase-field"},"Número",React.createElement("select",{value:phraseNumber,onChange:e=>{const n=Number(e.target.value);setPhraseNumber(n);setPhraseDraft(s.phrases[n]??SAYINGS[n])}},NUMBERS.map(n=>React.createElement("option",{value:n,key:n},"Número ",n)))),React.createElement("label",{className:"phrase-field"},"Tu frase",React.createElement("textarea",{rows:3,value:phraseDraft,onChange:e=>setPhraseDraft(e.target.value),placeholder:"Escribe lo que dirá esta bola"})),React.createElement("p",{className:"phrase-preview"},"«",announcement(phraseNumber,{[phraseNumber]:phraseDraft}),"»"),React.createElement("div",{className:"phrase-actions"},React.createElement("button",{className:"gold-button green",onClick:()=>{audio.unlock();audio.speak(announcement(phraseNumber,{[phraseNumber]:phraseDraft}),()=>tell('Activa la voz y comprueba que haya una voz española en el dispositivo.'))}},"♫ Escuchar"),React.createElement("button",{className:"gold-button",onClick:()=>{setS(x=>({...x,phrases:{...x.phrases,[phraseNumber]:phraseDraft.trim()}}));tell('Frase del número '+phraseNumber+' guardada')}},"Guardar frase")),React.createElement("button",{className:"text-button",onClick:()=>{setPhraseDraft(SAYINGS[phraseNumber]);setS(x=>{const phrases={...x.phrases};delete phrases[phraseNumber];return {...x,phrases}});tell('Frase original recuperada')}},"Recuperar la frase original"),React.createElement("p",{className:"muted"},"Se guarda en este dispositivo. Si dejas la frase vacía, solo se dirá el número."),React.createElement("button",{className:"text-button",onClick:()=>setModal('settings')},"Volver a configuración")):React.createElement(React.Fragment,null,React.createElement("h2",null,"Configuración"),React.createElement("div",{className:"settings-buttons-stack"},React.createElement(ManualButton,{role:onAdministration?'owner':'host'}),onAdministration&&React.createElement("button",{className:"gold-button phrase-open",onClick:()=>{setModal(null);onAdministration()}},"👑 Panel y Manual 3 de Elisabeth"),onParticipants&&React.createElement("button",{className:"gold-button phrase-open",onClick:()=>{setModal(null);onParticipants()}},"👥 Jugadores de la partida"),React.createElement("button",{className:"gold-button phrase-open",onClick:()=>{setPhraseDraft(s.phrases[phraseNumber]??SAYINGS[phraseNumber]);setModal('phrases')}},"🗣 Frases de los números")),[['sound','Sonido de la app'],['voice','Cantar los números']].map(([k,label])=>React.createElement("label",{className:"setting-row",key:k},React.createElement("span",null,label),React.createElement("input",{type:"checkbox",checked:s[k],onChange:e=>{audio.unlock();setS(x=>({...x,[k]:e.target.checked}))}}))),React.createElement("div",{className:"credits"},React.createElement("h3",null,"Creado por Elisabeth"),React.createElement("p",null,"Disfruta de esta app y comparte la alegría.",React.createElement("br",null),"Si la utilizas, menciona a ",React.createElement("b",null,"Elisabeth"),".")),React.createElement("div",{className:"settings-buttons-stack"},onLeaveGame&&React.createElement("button",{className:"gold-button phrase-open",onClick:()=>{setModal(null);onLeaveGame()}},"🚪 Salir de la partida al inicio"),React.createElement("button",{className:"gold-button green phrase-open",onClick:()=>setModal('reset')},"↻ Empezar una partida nueva")),modal==='reset'&&React.createElement("div",{className:"reset-confirm"},React.createElement("p",null,"Se borrarán los números cantados y las fichas de los cartones."),React.createElement("button",{className:"gold-button",onClick:startAgain},"Sí, empezar de nuevo"),React.createElement("button",{className:"text-button",onClick:()=>setModal('settings')},"Conservar mi partida")))))),flying&&React.createElement("div",{className:"flying-ball",style:{left:flying.x,top:flying.y,width:flying.size,height:flying.size,'--dx':flying.dx+'px','--dy':flying.dy+'px','--scale':flying.scale}},flying.n))
}
if(true&&'serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
createRoot(document.getElementById('root')).render(React.createElement(React.Fragment,null,React.createElement(MusicButton,null),React.createElement(SharedBingo,{HostApp:App})));

  })();
})();
