(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5292:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forget",function(){return r(6860)}])},4236:function(e,t){"use strict";t.Z={src:"/_next/static/media/Logo.6323d72c.svg",height:32,width:162}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){u=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,l=(o=r(7294))&&o.__esModule?o:{default:o},u=r(6273),i=r(387),c=r(7190);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),o=l.default.useMemo((function(){var t=a(u.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var g=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,w=a(c.useIntersection({rootMargin:"200px"}),2),j=w[0],x=w[1],_=l.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);l.default.useEffect((function(){var e=x&&r&&u.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,a=s[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,x,b,r,n]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:l}))}(e,n,d,p,v,y,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof b?b:n&&n.locale,L=n&&n.isLocaleDomain&&u.getDomainLocale(p,N,n&&n.locales,n&&n.domainLocales);E.href=L||u.addBasePath(u.addLocale(p,N,n&&n.defaultLocale))}return l.default.cloneElement(t,E)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){u=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,n=o.useRef(),c=a(o.useState(!1),2),s=c[0],f=c[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,l=n.elements;return l.set(e,t),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return o.useEffect((function(){if(!u&&!s){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),l=r(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},6860:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=(r(7294),r(1664)),o=r(4236);t.default=function(){return(0,n.jsxs)("div",{className:"auth-wrapper",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("img",{className:"auth-logo",src:o.Z.src,alt:""})}),(0,n.jsxs)("div",{className:"auth",children:[(0,n.jsx)("div",{className:"auth-header login",children:(0,n.jsxs)("div",{className:"auth-header-link active",children:[(0,n.jsx)("span",{children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),(0,n.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u044b\u043b\u0430 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u0430 \u043a \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u043e\u0447\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0430."})]})}),(0,n.jsx)("input",{className:"auth-text",type:"text",placeholder:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430"}),(0,n.jsx)("div",{className:"auth-submit-wrapper link-purple",children:(0,n.jsx)("div",{className:"auth-submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5292,e(e.s=t);var t}));var t=e.O();_N_E=t}]);