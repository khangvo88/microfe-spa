System.register(["single-spa"],(function(e,t){var r={};return{setters:[function(e){r.registerApplication=e.registerApplication,r.start=e.start}],execute:function(){e((()=>{var e={907:(e,t,r)=>{const n=r(541).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},541:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,i=n.length;o!==t&&i>=0;)"/"===n[--i]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var s=n.slice(0,i+1);return r.protocol+"//"+r.host+s};Number.isInteger},645:e=>{"use strict";e.exports=r}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.y=t,o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var i={};return(0,o(907).s)(1),(()=>{"use strict";o.r(i);var e=o(645);(0,e.registerApplication)({name:"@snap-mobile/mf-navbar",app:function(){return System.import("@snap-mobile/mf-navbar")},activeWhen:"/"}),(0,e.registerApplication)({name:"@snap-mobile/mf-clients",app:function(){return System.import("@snap-mobile/mf-clients")},activeWhen:"/clients"}),(0,e.registerApplication)({name:"@snap-mobile/mf-account-settings",app:function(){return"@snap-mobile/mf-account-settings",Promise.resolve().then((function(){var e=window.define;return delete window.define,System.import("@snap-mobile/mf-account-settings").then((function(t){return window.define=e,t}))}))},activeWhen:"/settings"}),(0,e.start)({urlRerouteOnly:!0})})(),i})())}}}));
//# sourceMappingURL=snap-mobile-root-config.js.map