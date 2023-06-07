/*! For license information please see snap-mobile-mf-navbar.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var n={},r={};return{setters:[function(e){n.default=e.default},function(e){r.default=e.default}],execute:function(){e((()=>{var e={463:(e,t,n)=>{"use strict";var r=n(570),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var s=Object.defineProperty,l=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var o=d(n);o&&o!==m&&e(t,o,r)}var i=l(n);p&&(i=i.concat(p(n)));for(var c=u(t),h=u(n),y=0;y<i.length;++y){var v=i[y];if(!(a[v]||r&&r[v]||h&&h[v]||c&&c[v])){var g=f(n,v);try{s(t,v,g)}catch(e){}}}}return t}},99:(e,t,n)=>{var r=n(243);e.exports=function e(t,n,o){return r(n)||(o=n||o,n=[]),o=o||{},t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(t,n):r(t)?function(t,n,r){for(var o=[],a=0;a<t.length;a++)o.push(e(t[a],n,r).source);return l(new RegExp("(?:"+o.join("|")+")",p(r)),n)}(t,n,o):function(e,t,n){return f(a(e,n),t,n)}(t,n,o)},e.exports.parse=a,e.exports.compile=function(e,t){return c(a(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var n,r=[],a=0,i=0,c="",l=t&&t.delimiter||"/";null!=(n=o.exec(e));){var p=n[0],f=n[1],d=n.index;if(c+=e.slice(i,d),i=d+p.length,f)c+=f[1];else{var m=e[i],h=n[2],y=n[3],v=n[4],g=n[5],b=n[6],A=n[7];c&&(r.push(c),c="");var E=null!=h&&null!=m&&m!==h,w="+"===b||"*"===b,C="?"===b||"*"===b,x=n[2]||l,O=v||g;r.push({name:y||a++,prefix:h||"",delimiter:x,optional:C,repeat:w,partial:E,asterisk:!!A,pattern:O?s(O):A?".*":"[^"+u(x)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",p(t)));return function(t,o){for(var a="",c=t||{},u=(o||{}).pretty?i:encodeURIComponent,s=0;s<e.length;s++){var l=e[s];if("string"!=typeof l){var p,f=c[l.name];if(null==f){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(p=u(f[d]),!n[s].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===d?l.prefix:l.delimiter)+p}}else{if(p=l.asterisk?encodeURI(f).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(f),!n[s].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+p+'"');a+=l.prefix+p}}else a+=l}return a}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e&&e.sensitive?"":"i"}function f(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=u(s);else{var f=u(s.prefix),d="(?:"+s.pattern+")";t.push(s),s.repeat&&(d+="(?:"+f+d+")*"),i+=d=s.optional?s.partial?f+"("+d+")?":"(?:"+f+"("+d+"))?":f+"("+d+")"}}var m=u(n.delimiter||"/"),h=i.slice(-m.length)===m;return o||(i=(h?i.slice(0,-m.length):i)+"(?:"+m+"(?=$))?"),i+=a?"$":o&&h?"":"(?="+m+"|$)",l(new RegExp("^"+i,p(n)),t)}},243:e=>{e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},262:(e,t,n)=>{"use strict";var r=n(586);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},980:(e,t,n)=>{e.exports=n(262)()},586:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},866:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,A=n?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case p:case a:case c:case i:case d:return e;default:switch(e=e&&e.$$typeof){case s:case f:case y:case h:case u:return e;default:return t}}case o:return t}}}function w(e){return E(e)===p}t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=s,t.ContextProvider=u,t.Element=r,t.ForwardRef=f,t.Fragment=a,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return w(e)||E(e)===l},t.isConcurrentMode=w,t.isContextConsumer=function(e){return E(e)===s},t.isContextProvider=function(e){return E(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return E(e)===f},t.isFragment=function(e){return E(e)===a},t.isLazy=function(e){return E(e)===y},t.isMemo=function(e){return E(e)===h},t.isPortal=function(e){return E(e)===o},t.isProfiler=function(e){return E(e)===c},t.isStrictMode=function(e){return E(e)===i},t.isSuspense=function(e){return E(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===c||e===i||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===u||e.$$typeof===s||e.$$typeof===f||e.$$typeof===g||e.$$typeof===b||e.$$typeof===A||e.$$typeof===v)},t.typeOf=E},570:(e,t,n)=>{"use strict";e.exports=n(866)},62:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var f=n(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},793:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},173:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},892:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},36:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},464:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},907:(e,t,n)=>{const r=n(541).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},541:(e,t,n)=>{t.R=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},558:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(237),o=n.n(r),a=n(499),i=n.n(a)()(o());i.push([e.id,".j53gu9fk02bM24bhVJWsNg\\=\\= {\n  height: var(--navbar-height);\n  width: 100vw;\n  background-color: #35495e;\n  position: fixed;\n  top: 0;\n  left: 0;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n}\n\n.j53gu9fk02bM24bhVJWsNg\\=\\= ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  height: 100%;\n}\n\n.j53gu9fk02bM24bhVJWsNg\\=\\= li {\n  list-style: none;\n  height: 100%;\n}\n\n._4VSOUysojgpIbtNdtIUBJg\\=\\=,\n._4VSOUysojgpIbtNdtIUBJg\\=\\=:focus,\n._4VSOUysojgpIbtNdtIUBJg\\=\\=:visited {\n  text-decoration: none;\n  color: white;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  max-height: var(--navbar-height);\n  padding: 0.8rem 1.6rem;\n}\n\n._4VSOUysojgpIbtNdtIUBJg\\=\\=:hover {\n  background-color: #243241;\n}\n\n.YJv-SD\\+N8SnAno6b5TO6Nw\\=\\= {\n  background-color: #202d3a;\n}\n","",{version:3,sources:["webpack://./src/primary-nav/primary-nav.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;;;EAGE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gCAAgC;EAChC,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:[".primaryNav {\n  height: var(--navbar-height);\n  width: 100vw;\n  background-color: #35495e;\n  position: fixed;\n  top: 0;\n  left: 0;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n}\n\n.primaryNav ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  height: 100%;\n}\n\n.primaryNav li {\n  list-style: none;\n  height: 100%;\n}\n\n.navLink,\n.navLink:focus,\n.navLink:visited {\n  text-decoration: none;\n  color: white;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  max-height: var(--navbar-height);\n  padding: 0.8rem 1.6rem;\n}\n\n.navLink:hover {\n  background-color: #243241;\n}\n\n.activeNavLink {\n  background-color: #202d3a;\n}\n"],sourceRoot:""}]),i.locals={primaryNav:"j53gu9fk02bM24bhVJWsNg==",navLink:"_4VSOUysojgpIbtNdtIUBJg==",activeNavLink:"YJv-SD+N8SnAno6b5TO6Nw=="};const c=i},499:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},237:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),s="/*# ".concat(u," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([s]).join("\n")}return[a].join("\n")}},954:e=>{"use strict";e.exports=n},493:e=>{"use strict";e.exports=r}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={id:t,exports:{}};return e[t](r,r.exports,a),r.exports}a.y=t,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="",a.nc=void 0;var i={};return(0,a(907).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>_e,mount:()=>Ue,unmount:()=>Le});var e=a(954),t=a(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(u(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(u(e)));return e}}var l=null;try{l=require("react").createContext()}catch(n){}var p={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function f(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function d(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=y(e,t,(function(){n(this)})),a=s(e,t)(),i=function(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](r);return a.render(n),a}return"hydrate"===o?t.ReactDOM.hydrate(n,r):t.ReactDOM.render(n,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function m(e,t){return new Promise((function(n){e.unmountFinished=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function h(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=y(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=s(e,t)();e.ReactDOM.render(r,a)}}))}function y(e,t,n){var o=e.React.createElement(e.rootComponent,t),a=l?e.React.createElement(l.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,r(r({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,v(e,t)}var b=a(980),A=a.n(b);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function w(e){return"/"===e.charAt(0)}function C(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}const x=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],a=e&&w(e),i=t&&w(t),c=a||i;if(e&&w(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var s=0,l=o.length;l>=0;l--){var p=o[l];"."===p?C(o,l):".."===p?(C(o,l),s++):s&&(C(o,l),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&w(o[0])||o.unshift("");var f=o.join("/");return n&&"/"!==f.substr(-1)&&(f+="/"),f};function O(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}const S=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every((function(t,r){return e(t,n[r])}));if("object"==typeof t||"object"==typeof n){var r=O(t),o=O(n);return r!==t||o!==n?e(r,o):Object.keys(Object.assign({},t,n)).every((function(r){return e(t[r],n[r])}))}return!1};var R=!0,j="Invariant failed";function k(e,t){if(!e){if(R)throw new Error(j);var n="function"==typeof t?t():t,r=n?"".concat(j,": ").concat(n):j;throw new Error(r)}}function T(e){return"/"===e.charAt(0)?e:"/"+e}function P(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function B(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function N(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function M(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e),o.state=t):(void 0===(o=E({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=x(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function _(){var e=null,t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var U=!("undefined"==typeof window||!window.document||!window.document.createElement);function L(e,t){t(window.confirm(e))}var $="popstate",I="hashchange";function D(){try{return window.history.state||{}}catch(e){return{}}}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}var J=a(99),W=a.n(J);function V(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}a(570),a(463);var Y=1073741823,q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==a.g?a.g:{},H=e.default.createContext||function(t,n){var r,o,a,i="__create-react-context-"+((q[a="__global_unique_id__"]=(q[a]||0)+1)+"__"),c=function(e){function t(){for(var t,n,r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).emitter=(n=t.props.value,r=[],{on:function(e){r.push(e)},off:function(e){r=r.filter((function(t){return t!==e}))},get:function(){return n},set:function(e,t){n=e,r.forEach((function(e){return e(n,t)}))}}),t}g(t,e);var r=t.prototype;return r.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var t,r=this.props.value,o=e.value;((a=r)===(i=o)?0!==a||1/a==1/i:a!=a&&i!=i)?t=0:(t="function"==typeof n?n(r,o):Y,0!=(t|=0)&&this.emitter.set(e.value,t))}var a,i},r.render=function(){return this.props.children},t}(e.default.Component);c.childContextTypes=((r={})[i]=A().object.isRequired,r);var u=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).observedBits=void 0,t.state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}g(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?Y:t},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?Y:e},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():t},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(e.default.Component);return u.contextTypes=((o={})[i]=A().object,o),{Provider:c,Consumer:u}},Z=function(e){var t=H();return t.displayName=e,t},G=Z("Router-History"),z=Z("Router"),K=function(t){function n(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(e){n._pendingLocation=e}))),n}g(n,t),n.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var r=n.prototype;return r.componentDidMount=function(){var e=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(t){e._isMounted&&e.setState({location:t})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},r.render=function(){return e.default.createElement(z.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},e.default.createElement(G.Provider,{children:this.props.children||null,value:this.props.history}))},n}(e.default.Component);e.default.Component;var Q=function(e){function t(){return e.apply(this,arguments)||this}g(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(e.default.Component),X={},ee=1e4,te=0;function ne(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function(e){if(X[e])return X[e];var t=W().compile(e);return te<ee&&(X[e]=t,te++),t}(e)(t,{pretty:!0})}function re(t){var n=t.computedMatch,r=t.to,o=t.push,a=void 0!==o&&o;return e.default.createElement(z.Consumer,null,(function(t){t||k(!1);var o=t.history,i=t.staticContext,c=a?o.push:o.replace,u=M(n?"string"==typeof r?ne(r,n.params):F({},r,{pathname:ne(r.pathname,n.params)}):r);return i?(c(u),null):e.default.createElement(Q,{onMount:function(){c(u)},onUpdate:function(e,t){var n=M(t.to);(function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&S(e.state,t.state)})(n,F({},u,{key:n.key}))||c(u)},to:r})}))}var oe={},ae=0;function ie(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=oe[n]||(oe[n]={});if(r[e])return r[e];var o=[],a={regexp:W()(e,o,t),keys:o};return ae<1e4&&(r[e]=a,ae++),a}(n,{end:a,strict:c,sensitive:s}),o=r.regexp,i=r.keys,u=o.exec(e);if(!u)return null;var l=u[0],p=u.slice(1),f=e===l;return a&&!f?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:f,params:i.reduce((function(e,t,n){return e[t.name]=p[n],e}),{})}}),null)}var ce=function(t){function n(){return t.apply(this,arguments)||this}return g(n,t),n.prototype.render=function(){var t=this;return e.default.createElement(z.Consumer,null,(function(n){n||k(!1);var r=t.props.location||n.location,o=F({},n,{location:r,match:t.props.computedMatch?t.props.computedMatch:t.props.path?ie(r.pathname,t.props):n.match}),a=t.props,i=a.children,c=a.component,u=a.render;return Array.isArray(i)&&function(t){return 0===e.default.Children.count(t)}(i)&&(i=null),e.default.createElement(z.Provider,{value:o},o.match?i?"function"==typeof i?i(o):i:c?e.default.createElement(c,o):u?u(o):null:"function"==typeof i?i(o):null)}))},n}(e.default.Component);e.default.Component,e.default.Component,e.default.useContext;var ue=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=function(e){void 0===e&&(e={}),U||k(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,i=a.forceRefresh,c=void 0!==i&&i,u=a.getUserConfirmation,s=void 0===u?L:u,l=a.keyLength,p=void 0===l?6:l,f=e.basename?B(T(e.basename)):"";function d(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return f&&(a=P(a,f)),M(a,r,n)}function m(){return Math.random().toString(36).substr(2,p)}var h=_();function y(e){E(F,e),F.length=n.length,h.notifyListeners(F.location,F.action)}function v(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||A(d(e.state))}function g(){A(d(D()))}var b=!1;function A(e){b?(b=!1,y()):h.confirmTransitionTo(e,"POP",s,(function(t){t?y({action:"POP",location:e}):function(e){var t=F.location,n=C.indexOf(t.key);-1===n&&(n=0);var r=C.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(b=!0,O(o))}(e)}))}var w=d(D()),C=[w.key];function x(e){return f+N(e)}function O(e){n.go(e)}var S=0;function R(e){1===(S+=e)&&1===e?(window.addEventListener($,v),o&&window.addEventListener(I,g)):0===S&&(window.removeEventListener($,v),o&&window.removeEventListener(I,g))}var j=!1,F={length:n.length,action:"POP",location:w,createHref:x,push:function(e,t){var o="PUSH",a=M(e,t,m(),F.location);h.confirmTransitionTo(a,o,s,(function(e){if(e){var t=x(a),i=a.key,u=a.state;if(r)if(n.pushState({key:i,state:u},null,t),c)window.location.href=t;else{var s=C.indexOf(F.location.key),l=C.slice(0,s+1);l.push(a.key),C=l,y({action:o,location:a})}else window.location.href=t}}))},replace:function(e,t){var o="REPLACE",a=M(e,t,m(),F.location);h.confirmTransitionTo(a,o,s,(function(e){if(e){var t=x(a),i=a.key,u=a.state;if(r)if(n.replaceState({key:i,state:u},null,t),c)window.location.replace(t);else{var s=C.indexOf(F.location.key);-1!==s&&(C[s]=a.key),y({action:o,location:a})}else window.location.replace(t)}}))},go:O,goBack:function(){O(-1)},goForward:function(){O(1)},block:function(e){void 0===e&&(e=!1);var t=h.setPrompt(e);return j||(R(1),j=!0),function(){return j&&(j=!1,R(-1)),t()}},listen:function(e){var t=h.appendListener(e);return R(1),function(){R(-1),t()}}};return F}(e.props),e}return g(n,t),n.prototype.render=function(){return e.default.createElement(K,{history:this.history,children:this.props.children})},n}(e.default.Component);e.default.Component;var se=function(e,t){return"function"==typeof e?e(t):e},le=function(e,t){return"string"==typeof e?M(e,null,null,t):e},pe=function(e){return e},fe=e.default.forwardRef;void 0===fe&&(fe=pe);var de=fe((function(t,n){var r=t.innerRef,o=t.navigate,a=t.onClick,i=V(t,["innerRef","navigate","onClick"]),c=i.target,u=F({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),o())}});return u.ref=pe!==fe&&n||r,e.default.createElement("a",u)})),me=fe((function(t,n){var r=t.component,o=void 0===r?de:r,a=t.replace,i=t.to,c=t.innerRef,u=V(t,["component","replace","to","innerRef"]);return e.default.createElement(z.Consumer,null,(function(t){t||k(!1);var r=t.history,s=le(se(i,t.location),t.location),l=s?r.createHref(s):"",p=F({},u,{href:l,navigate:function(){var e=se(i,t.location),n=N(t.location)===N(le(e));(a||n?r.replace:r.push)(e)}});return pe!==fe?p.ref=n||c:p.innerRef=c,e.default.createElement(o,p)}))})),he=function(e){return e},ye=e.default.forwardRef;void 0===ye&&(ye=he);var ve=ye((function(t,n){var r=t["aria-current"],o=void 0===r?"page":r,a=t.activeClassName,i=void 0===a?"active":a,c=t.activeStyle,u=t.className,s=t.exact,l=t.isActive,p=t.location,f=t.sensitive,d=t.strict,m=t.style,h=t.to,y=t.innerRef,v=V(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return e.default.createElement(z.Consumer,null,(function(t){t||k(!1);var r=p||t.location,a=le(se(h,r),r),g=a.pathname,b=g&&g.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=b?ie(r.pathname,{path:b,exact:s,sensitive:f,strict:d}):null,E=!!(l?l(A,r):A),w="function"==typeof u?u(E):u,C="function"==typeof m?m(E):m;E&&(w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(w,i),C=F({},C,c));var x=F({"aria-current":E&&o||null,className:w,style:C,to:a},v);return he!==ye?x.ref=n||y:x.innerRef=y,e.default.createElement(me,x)}))})),ge=a(62),be=a.n(ge),Ae=a(36),Ee=a.n(Ae),we=a(793),Ce=a.n(we),xe=a(892),Oe=a.n(xe),Se=a(173),Re=a.n(Se),je=a(464),ke=a.n(je),Te=a(558),Pe={};Pe.styleTagTransform=ke(),Pe.setAttributes=Oe(),Pe.insert=Ce().bind(null,"head"),Pe.domAPI=Ee(),Pe.insertStyleElement=Re(),be()(Te.Z,Pe);const Be=Te.Z&&Te.Z.locals?Te.Z.locals:void 0;function Ne(t){return e.default.createElement("nav",{className:Be.primaryNav},e.default.createElement("ul",null,e.default.createElement("li",null,e.default.createElement(ve,{to:"/clients",className:Be.navLink,activeClassName:Be.activeNavLink},"Client list")),e.default.createElement("li",null,e.default.createElement(ve,{to:"/settings",className:Be.navLink,activeClassName:Be.activeClassName},"Account settings"))),e.default.createElement("ul",null,e.default.createElement("li",null,e.default.createElement("a",{href:"https://github.com/polyglot-microfrontends",className:Be.navLink},"Code / Documentation"))))}var Me=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=r(r({},p),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&t.React.createContext&&(l=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var n={bootstrap:f.bind(null,t),mount:d.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(n.update=h.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(t){return e.default.createElement(ue,{basename:"/"},e.default.createElement(Ne,null),e.default.createElement(ce,{exact:!0,path:"/"},e.default.createElement(re,{to:"/clients"})))},errorBoundary:function(t,n,r){return e.default.createElement("div",null,"Navbar errored")}}),_e=Me.bootstrap,Ue=Me.mount,Le=Me.unmount})(),i})())}}}));
//# sourceMappingURL=snap-mobile-mf-navbar.js.map