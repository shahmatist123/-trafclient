(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5292:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forget",function(){return r(6860)}])},4236:function(e,t){"use strict";t.Z={src:"/_next/static/media/Logo.6323d72c.svg",height:32,width:162}},7494:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t={borderColor:e.res.status>=250?"#FF004F":"#2AC276"};return(0,n.jsx)("span",{className:"auth-res-info",style:t,children:e.res.text})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);u=!0);}catch(l){i=!0,a=l}finally{try{u||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,u=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),l=r(387),c=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),o=u.default.useMemo((function(){var t=a(i.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var g=(t=u.default.Children.only(h))&&"object"===typeof t&&t.ref,w=a(c.useIntersection({rootMargin:"200px"}),2),j=w[0],x=w[1],O=u.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);u.default.useEffect((function(){var e=x&&r&&i.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,a=s[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,x,b,r,n]);var C={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,u,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==u&&n.indexOf("#")>=0&&(u=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:u}))}(e,n,d,p,v,y,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:n&&n.locale,_=n&&n.isLocaleDomain&&i.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);C.href=_||i.addBasePath(i.addLocale(p,E,n&&n.defaultLocale))}return u.default.cloneElement(t,C)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);u=!0);}catch(l){i=!0,a=l}finally{try{u||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,n=o.useRef(),c=a(o.useState(!1),2),s=c[0],f=c[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,u=n.elements;return u.set(e,t),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return o.useEffect((function(){if(!i&&!s){var e=u.requestIdleCallback((function(){return f(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),u=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},6860:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(7294),o=r(1664),u=r(4236),i=r(9669),l=r.n(i),c=r(5038),s=(r(1163),r(7494));function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}var p={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};t.default=function(){var e=(0,a.useState)({email:""}),t=e[0],r=e[1],i=(0,a.useState)({text:"",status:200}),h=i[0],v=i[1];return(0,n.jsxs)("div",{className:"auth-wrapper",children:[0!==h.text.length&&(0,n.jsx)(s.Z,{res:h}),(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("img",{className:"auth-logo",src:u.Z.src,alt:""})}),(0,n.jsxs)("div",{className:"auth",children:[(0,n.jsx)("div",{className:"auth-header login",children:(0,n.jsxs)("div",{className:"auth-header-link active",children:[(0,n.jsx)("span",{children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),(0,n.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u044b\u043b\u0430 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u0430 \u043a \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u043e\u0447\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0430."})]})}),(0,n.jsx)("input",{onChange:function(e){r(d({},t,f({},e.target.name,e.target.value)))},className:"auth-text",name:"email",type:"password",placeholder:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430"}),(0,n.jsx)("div",{className:"auth-submit-wrapper link-purple",children:(0,n.jsx)("div",{onClick:function(){l().post(c.J+"users/auth/forget",JSON.stringify(t),{headers:p}).then((function(e){var t={text:e.data.values.message,status:e.data.status};v((function(e){return d({},e,t)})),setTimeout((function(){v((function(e){return d({},e,{text:"",status:200})}))}),1e4)})).catch((function(e){console.log(e)}))},className:"auth-submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})}},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return t=5292,e(e.s=t);var t}));var t=e.O();_N_E=t}]);