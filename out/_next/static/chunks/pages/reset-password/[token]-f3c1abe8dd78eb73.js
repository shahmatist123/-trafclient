(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{2308:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset-password/[token]",function(){return n(4631)}])},4236:function(e,t){"use strict";t.Z={src:"/_next/static/media/Logo.6323d72c.svg",height:32,width:162}},7494:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t={borderColor:e.res.status>=250?"#FF004F":"#2AC276"};return(0,r.jsx)("span",{className:"auth-res-info",style:t,children:e.res.text})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,s=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(c){s=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,u=(a=n(7294))&&a.__esModule?a:{default:a},s=n(6273),c=n(387),i=n(7190);var l={};function f(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=u.default.useMemo((function(){var t=o(s.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?s.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var b=(t=u.default.Children.only(h))&&"object"===typeof t&&t.ref,w=o(i.useIntersection({rootMargin:"200px"}),2),k=w[0],x=w[1],j=u.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);u.default.useEffect((function(){var e=x&&n&&s.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=l[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,x,g,n,r]);var O={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}))}(e,r,d,p,v,y,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:r&&r.locale,E=r&&r.isLocaleDomain&&s.getDomainLocale(p,C,r&&r.locales,r&&r.domainLocales);O.href=E||s.addBasePath(s.addLocale(p,C,r&&r.defaultLocale))}return u.default.cloneElement(t,O)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,s=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(c){s=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,r=a.useRef(),i=o(a.useState(!1),2),l=i[0],f=i[1],d=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||l||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return a.useEffect((function(){if(!s&&!l){var e=u.requestIdleCallback((function(){return f(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[l]),[d,l]};var a=n(7294),u=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map},4631:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),a=n(1664),u=n(4236),s=n(9669),c=n.n(s),i=n(5038),l=n(1163),f=n(7494);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}var h={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};t.default=function(){var e=(0,o.useState)({password:""}),t=e[0],n=e[1],s=(0,o.useState)({text:"",status:200}),v=s[0],y=s[1],m=(0,l.useRouter)().query.token;(0,o.useEffect)((function(){m&&c().post(i.J+"forgetCheck",JSON.stringify({token:m}),{headers:h}).then((function(e){var t={text:e.data.values.message,status:e.data.status};y((function(e){return p({},e,t)})),setTimeout((function(){y((function(e){return p({},e,{text:"",status:200})}))}),1e4),e.data.values.token||l.default.push("/login")})).catch((function(e){console.log(e)}))}),[m]);return(0,r.jsxs)("div",{className:"auth-wrapper",children:[0!==v.text.length&&(0,r.jsx)(f.Z,{res:v}),(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("img",{className:"auth-logo",src:u.Z.src,alt:""})}),(0,r.jsxs)("div",{className:"auth",children:[(0,r.jsx)("div",{className:"auth-header login",children:(0,r.jsx)("div",{className:"auth-header-link active",children:(0,r.jsx)("span",{children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"})})}),(0,r.jsx)("input",{onChange:function(e){n(p({},t,d({},e.target.name,e.target.value)))},className:"auth-text",name:"password",type:"text",placeholder:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,r.jsx)("div",{className:"auth-submit-wrapper link-purple",children:(0,r.jsx)("div",{onClick:function(){c().post(i.J+"users/auth/newPass",JSON.stringify({token:m,password:t.password}),{headers:h}).then((function(e){var t={text:e.data.values.message,status:e.data.status};y((function(e){return p({},e,t)})),200===e.data.status&&(setTimeout((function(){l.default.push("/auto-tasks")}),2e3),document.cookie="accessToken=".concat(e.data.values.AccessToken,";path=/"),document.cookie="refreshToken=".concat(e.data.values.RefreshToken,";path=/")),setTimeout((function(){y((function(e){return p({},e,{text:"",status:200})}))}),1e4),console.log(e.data.values.AccessToken)})).catch((function(e){console.log(e)}))},className:"auth-submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=2308,e(e.s=t);var t}));var t=e.O();_N_E=t}]);