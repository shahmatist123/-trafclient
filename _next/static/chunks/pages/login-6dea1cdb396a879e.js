(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(4984)}])},4236:function(e,t){"use strict";t.Z={src:"/_next/static/media/Logo.6323d72c.svg",height:32,width:162}},7494:function(e,t,n){"use strict";var a=n(5893);n(7294);t.Z=function(e){var t={borderColor:e.res.status>=250?"#FF004F":"#2AC276"};return(0,a.jsx)("span",{className:"auth-res-info",style:t,children:e.res.text})}},4984:function(e,t,n){"use strict";n.r(t);var a=n(4051),s=n.n(a),r=n(5893),u=n(7294),i=n(1664),c=n(4236),o=n(9669),l=n.n(o),h=n(7494),f=n(5038),d=n(1163);function p(e,t,n,a,s,r,u){try{var i=e[r](u),c=i.value}catch(o){return void n(o)}i.done?t(c):Promise.resolve(c).then(a,s)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){m(e,t,n[t])}))}return e}var x={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};t.default=function(){var e=(0,u.useState)({email:"",password:""}),t=e[0],n=e[1],a=function(e){n(v({},t,m({},e.target.name,e.target.value)))},o=(0,u.useState)({text:"",status:200}),g=o[0],j=o[1],w=function(){var e,n=(e=s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l().post(f.J+"users/auth/signin",JSON.stringify(t),{headers:x}).then((function(e){var t={text:e.data.values.message,status:e.data.status};j((function(e){return v({},e,t)})),document.cookie="accessToken=".concat(e.data.values.AccessToken),document.cookie="refreshToken=".concat(e.data.values.RefreshToken),200===e.data.status&&setTimeout((function(){d.default.push("/auto-tasks")}),3e3),200!==e.data.status&&setTimeout((function(){j((function(e){return v({},e,{text:"",status:200})}))}),1e4)})).then((function(e){setTimeout((function(){j((function(e){return v({},e,{text:"",status:200})}))}),1e4)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,s){var r=e.apply(t,n);function u(e){p(r,a,s,u,i,"next",e)}function i(e){p(r,a,s,u,i,"throw",e)}u(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"auth-wrapper",children:[0!==g.text.length&&(0,r.jsx)(h.Z,{res:g}),(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("img",{className:"auth-logo",src:c.Z.src,alt:""})}),(0,r.jsxs)("div",{className:"auth",children:[(0,r.jsxs)("div",{className:"auth-header login",children:[(0,r.jsx)("div",{className:"auth-header-link active",children:(0,r.jsx)(i.default,{href:"/login",children:"\u0412\u0445\u043e\u0434"})}),(0,r.jsx)("div",{className:"auth-header-link",children:(0,r.jsx)(i.default,{href:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),(0,r.jsx)("input",{className:"auth-text",onChange:a,value:t.email,name:"email",type:"text",placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),(0,r.jsx)("input",{className:"auth-text",onChange:a,value:t.password,name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,r.jsx)("div",{className:"auth-forget",children:(0,r.jsx)(i.default,{href:"/forget",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})}),(0,r.jsx)("div",{className:"auth-submit-wrapper link-purple",children:(0,r.jsx)("div",{onClick:w,className:"auth-submit",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})}},1163:function(e,t,n){e.exports=n(387)},5038:function(e){"use strict";e.exports=JSON.parse('{"J":"http://trafmix.herokuapp.com/"}')}},function(e){e.O(0,[774,173,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);