(this.webpackJsonptimed=this.webpackJsonptimed||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(19),s=n.n(a),r=n(18),i=(n(53),n(7)),o=n(6),l=n(3),j=(n(54),n(22)),u=n(41),b=(n(55),n(1));function d(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:"Nav",children:[Object(b.jsx)(i.b,{className:"nav-link",to:"/",children:"TIMED"}),Object(b.jsx)(u.a,{className:"nav-bars",onClick:function(){return s(!a)}}),Object(b.jsxs)("div",{className:"nav-menu",id:a?"hidden":"",children:[Object(b.jsx)(i.b,{className:"nav-link",to:"/countdown",children:"Countdown"}),Object(b.jsx)(i.b,{className:"nav-link",to:"/animedoro",children:"Animedoro"}),Object(b.jsx)(i.b,{className:"nav-link",to:"/stopwatch",children:"Stopwatch"}),Object(b.jsx)(i.b,{className:"nav-link",to:"/signup",children:"Sign Up"})]})]})})}n(61);var m=n(21),O=function(e){var t=e.handleClose,n=e.show,c=e.formData,a=n?"modal display-block":"modal display-none";return Object(b.jsx)("div",{className:a,children:Object(b.jsxs)("section",{className:"modal-main",children:[Object(b.jsx)(m.a,{className:"close-btn",onClick:t}),Object(b.jsxs)("form",{className:"form-conatianer",onSubmit:c,children:[Object(b.jsx)("p",{children:"Minutes"}),Object(b.jsx)("input",{className:"form-input",name:"minutes",type:"number",min:"1",max:"60",required:!0}),Object(b.jsx)("p",{className:"form-name",children:"Seconds"}),Object(b.jsx)("input",{className:"form-input",name:"seconds",type:"number",min:"0",max:"60",required:!0}),Object(b.jsx)("button",{className:"submit-btn",type:"submit",onClick:t,children:"Submit"})]})]})})};var h=function(){var e,t=Object(c.useState)(25),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(0),i=Object(l.a)(r,2),o=i[0],u=i[1],m=Object(c.useState)(!1),h=Object(l.a)(m,2),p=h[0],x=h[1],f=Object(c.useState)(!0),v=Object(l.a)(f,2),N=v[0],g=v[1],w=Object(c.useState)(25),S=Object(l.a)(w,2),k=S[0],y=S[1],C=Object(c.useState)(0),I=Object(l.a)(C,2),T=I[0],A=I[1],D=Object(c.useState)(!1),_=Object(l.a)(D,2),E=_[0],U=_[1];Object(c.useEffect)((function(){e=setInterval((function(){clearInterval(e),console.log("interval in ruseeffect: ".concat(e)),p&&!N&&(0===a&&0===o&&(x(!1),g(!0)),0!==o||N?u(o-1):0!==a?(u(59),s(a-1)):(u(T),s(k)))}),1e3)}),[p,N,o]);var L=a<10?"0".concat(a):a,P=o<10?"0".concat(o):o;return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsxs)("div",{className:"Countdown-container",children:[Object(b.jsx)(j.a,{onClick:function(){return U(!E)},className:"burger"}),Object(b.jsx)(O,{show:E,handleClose:function(){U(!1)},formData:function(e){e.preventDefault();var t=e.target.seconds.value,n=e.target.minutes.value;e.target.minutes.value="",e.target.seconds.value="",y(n),A(t),s(n),u(t)}}),Object(b.jsx)("h1",{className:"Countdown-title",children:"Countdown"}),Object(b.jsxs)("div",{className:"Countdown-main",children:[Object(b.jsxs)("h3",{children:[L,":",P]}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)("button",{className:"btn",onClick:function(){x(!0),g(!1)},children:"Start"}),Object(b.jsx)("button",{className:"btn",onClick:function(){g(!0)},children:"Pause"}),Object(b.jsx)("button",{className:"btn",onClick:function(){clearInterval(e),console.log("resseting interval in reset: ".concat(e)),x(!1),g(!0),u(T),s(k)},children:"Stop"})]})]})]})]})},p=(n(30),n(5)),x=n.n(p),f=n(8),v=n(23),N=n(14),g=n.n(N),w=null,S={getAll:function(){var e=Object(f.a)(x.a.mark((function e(){var t,n,c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(window.localStorage.getItem("loggedTaskAppUser")),n=t.id,c={user:n},e.next=5,g.a.post("/api/tasks/gettasks",c);case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(f.a)(x.a.mark((function e(t,n,c){var a,s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{authorization:w}},s={title:t,taskTime:n,userId:c},e.next=4,g.a.post("/api/tasks",s,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),setToken:function(e){w="bearer ".concat(e)}},k=function(e,t,n){return function(){var c=Object(f.a)(x.a.mark((function c(a){return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,S.createNew(e,t,n);case 2:c.sent,a({type:"NEW_TASK",data:{title:e,taskTime:t,id:n}});case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION:",t),t.type){case"NEW_TASK":return[].concat(Object(v.a)(e),[t.data]);case"INIT_TASKS":return t.data;default:return e}};var C=function(e){var t,n=e.logout,a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(25),d=Object(l.a)(u,2),O=d[0],h=d[1],p=Object(c.useState)(0),v=Object(l.a)(p,2),N=v[0],g=v[1],w=Object(c.useState)(1),y=Object(l.a)(w,2),C=y[0],I=y[1],T=Object(c.useState)(!1),A=Object(l.a)(T,2),D=A[0],_=A[1],E=Object(c.useState)(25),U=Object(l.a)(E,2),L=U[0],P=U[1],M=Object(c.useState)(0),J=Object(l.a)(M,2),q=J[0],W=J[1],F=Object(c.useState)("No title specified "),K=Object(l.a)(F,2),$=K[0],z=K[1],B=Object(c.useState)(!1),R=Object(l.a)(B,2),Z=R[0],G=R[1],H=Object(r.b)(),Q=Object(r.c)((function(e){return e})),V=JSON.parse(window.localStorage.getItem("loggedTaskAppUser")).id;Object(c.useEffect)((function(){H(function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getAll();case 2:n=e.sent,t({type:"INIT_TASKS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[H]),Object(c.useEffect)((function(){return t=setInterval((function(){if(clearInterval(t),i)if(0===N&&0===O&&o(!1),0===N)if(0!==O)g(59),h(O-1);else{var e=D?L:L/5;g(0),h(e),_(!D),D?I(0):ee()}else g(N-1),D||I(C+1)}),1e3),function(){return clearInterval(t)}}),[i,N,C,O,D]);var X=O<10?"0".concat(O):O,Y=N<10?"0".concat(N):N,ee=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H(k($,C,V)),z("title");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(e){e.preventDefault();var t=e.target.title.value,n=e.target.seconds.value,c=e.target.minutes.value;e.target.minutes.value="",e.target.seconds.value="",e.target.title.value="",z(t),P(c),W(n),h(c),g(n),ne()},ne=function(){G(!1)},ce=function(e){var t=Math.floor(e/3600),n=Math.floor((e-e/3600)/60),c=e-3600*t-60*n;return t<10&&(t="0"+t),n<10&&(n="0"+n),c<10&&(c="0"+c),t+":"+n+":"+c},ae=function(){var e=Z?"modal display-block":"modal display-none";return Object(b.jsx)("div",{className:e,children:Object(b.jsxs)("section",{className:"modal-main",children:[Object(b.jsx)(m.a,{className:"close-btn",onClick:ne}),Object(b.jsxs)("form",{onSubmit:te,children:[Object(b.jsx)("p",{className:"form-name",children:"Title of the task"}),Object(b.jsx)("input",{className:"form-input",name:"title"}),Object(b.jsx)("p",{className:"form-name",children:"Minutes"}),Object(b.jsx)("input",{className:"form-input",name:"minutes",type:"number",min:"0",max:"60",required:!0}),Object(b.jsx)("p",{className:"form-name",children:"Seconds"}),Object(b.jsx)("input",{className:"form-input",name:"seconds",type:"number",min:"0",max:"60",required:!0}),Object(b.jsx)("button",{className:"submit-btn",type:"submit",children:"Submit"})]})]})})};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"is",children:[Object(b.jsx)(ae,{}),Object(b.jsx)("div",{className:"Pomodoro",children:Object(b.jsxs)("div",{className:"Timer",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"a-btns",children:[Object(b.jsx)(j.a,{onClick:function(){return G(!Z)},className:"burger"}),Object(b.jsx)("button",{className:"logout-btn",onClick:n,children:"Log Out"})]}),Object(b.jsxs)("p",{children:["Current Task: ",$]}),Object(b.jsx)("p",{children:" The stop button will add a task and reset the timer."}),Object(b.jsx)("h1",{children:" Animedoro "}),Object(b.jsxs)("h1",{children:[X,":",Y]})]}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Start"}),Object(b.jsx)("button",{className:"btn",onClick:function(){o(!1)},children:"Pause"}),Object(b.jsx)("button",{className:"btn",onClick:function(){clearInterval(t),o(!1),ee(),D?(h(L),g(q),_(!D)):(o(!1),h(L),g(q)),console.log(D)},children:"Stop"})]})]})}),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:Q.map((function(e){return Object(b.jsxs)("li",{className:"task",children:[Object(b.jsx)("p",{children:e.title}),Object(b.jsx)("p",{children:ce(e.taskTime)})]},e.id)}))})})]})})},I=(n(39),{login:function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("http://localhost:8080/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),T=function(e){var t=e.loginUser,n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],d=j[1],m=Object(c.useState)(!1),O=Object(l.a)(m,2),h=O[0],p=O[1],v=function(){var e=Object(f.a)(x.a.mark((function e(n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,I.login({username:s,password:u});case 4:c=e.sent,window.localStorage.setItem("loggedTaskAppUser",JSON.stringify(c)),t(),r(""),d(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),p(!0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsx)("div",{className:"hidden-logo",children:"TIMED"}),Object(b.jsxs)("form",{onSubmit:v,children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsx)("div",{style:h?{color:"red"}:{display:"none"},children:"Username or Password is incorrect"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"form-name",children:"Username"}),Object(b.jsx)("input",{className:"form-input",name:"username",onChange:function(e){return r(e.target.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"form-name",children:"Password"}),Object(b.jsx)("input",{className:"form-input",type:"password",name:"password",onChange:function(e){return d(e.target.value)}})]}),Object(b.jsx)("button",{className:"submit-btn",type:"submit",children:"login"}),Object(b.jsxs)("p",{children:["Dont have a account?"," ",Object(b.jsx)(i.b,{to:"/signup",className:"form-link",children:Object(b.jsx)("span",{children:"Sign Up"})})]})]})]})};var A=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){var e=window.localStorage.getItem("loggedTaskAppUser");if(e){var t=JSON.parse(e);a(t),S.setToken(t.token)}}),[]);var s=function(e){a(e)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),null===n?Object(b.jsx)("div",{children:Object(b.jsx)(T,{loginUser:s})}):Object(b.jsx)(C,{logout:function(){S.setToken(null),window.localStorage.removeItem("loggedTaskAppUser"),a(null)}})]})};n(82);var D=function(){var e,t=Object(c.useState)(0),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(0),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(c.useState)(!1),m=Object(l.a)(u,2),O=m[0],h=m[1],p=Object(c.useState)(!0),x=Object(l.a)(p,2),f=x[0],N=x[1],g=Object(c.useState)(0),w=Object(l.a)(g,2),S=w[0],k=w[1],y=Object(c.useState)(1),C=Object(l.a)(y,2),I=C[0],T=C[1],A=Object(c.useState)([]),D=Object(l.a)(A,2),_=D[0],E=D[1];Object(c.useEffect)((function(){return e=setInterval((function(){clearInterval(e),console.log("interval in useeffect: ".concat(e)),O&&!f&&(59===o?(s(a+1),j(0)):(j(o+1),k(S+1)))}),1e3),function(){return clearInterval(e)}}),[O,f,o,S]);var U=a<10?"0".concat(a):a,L=o<10?"0".concat(o):o;return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsxs)("div",{className:"stopwatch-page-continaer",children:[Object(b.jsxs)("div",{className:"stopwatch-main",children:[Object(b.jsx)("h1",{children:"Stopwatch"}),Object(b.jsxs)("h3",{children:[U,":",L]}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)("button",{className:"btn",onClick:function(){h(!0),N(!1)},children:"Start"}),Object(b.jsx)("button",{className:"btn",onClick:function(){E((function(e){return[].concat(Object(v.a)(e),[{LapNum:I,LapTime:S}])})),T(I+1)},children:"Lap"}),Object(b.jsx)("button",{className:"btn",onClick:function(){N(!0)},children:"Pause"}),Object(b.jsx)("button",{className:"btn",onClick:function(){clearInterval(e),console.log("resseting interval in reset: ".concat(e)),h(!1),N(!0),j(0),s(0),k(0),E([])},children:"Reset"})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:_.map((function(e){return Object(b.jsxs)("li",{className:"stop-task",children:[Object(b.jsxs)("p",{children:["Lap ",e.LapNum]}),Object(b.jsx)("p",{children:e.LapTime})]},e.LapNum)}))})})]})]})},_={signup:function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("http://localhost:8080/api/signup",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),j=r[0],u=r[1],d=Object(c.useState)(""),m=Object(l.a)(d,2),O=m[0],h=m[1],p=Object(c.useState)(""),v=Object(l.a)(p,2),N=v[0],g=v[1],w=Object(c.useState)(!1),S=Object(l.a)(w,2),k=S[0],y=S[1],C=Object(c.useState)(""),I=Object(l.a)(C,2),T=I[0],A=I[1],D=Object(c.useState)(!1),E=Object(l.a)(D,2),U=E[0],L=E[1],P=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,M=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),O===N){e.next=5;break}return A("passwords do not match"),y(!0),e.abrupt("return");case 5:if(""!==j&&""!==n&&""!==O&&""!==N){e.next=9;break}return A("Missing Inputs"),y(!0),e.abrupt("return");case 9:if(P.test(O)){e.next=13;break}return A("Password should contain atleast 1 uppercase and 1 number"),y(!0),e.abrupt("return");case 13:return e.prev=13,e.next=16,_.signup({username:j,name:n,password:O});case 16:e.sent,L(!0),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(13),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[13,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{children:!1===U?Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsx)("div",{className:"hidden-logo",children:"TIMED"}),Object(b.jsxs)("form",{onSubmit:M,children:[Object(b.jsx)("h3",{className:"form-title",children:"SignUp"}),Object(b.jsx)("div",{style:k?{color:"red"}:{display:"none"},children:T}),Object(b.jsxs)("fieldset",{children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{className:"form-name",children:"Name"}),Object(b.jsx)("input",{name:"name",className:"form-input",onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{className:"form-name",children:"Username"}),Object(b.jsx)("input",{name:"username",className:"form-input",onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{className:"form-name",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-input",onChange:function(e){return h(e.target.value)}})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{className:"form-name",children:"Confrim Password"}),Object(b.jsx)("input",{type:"password",name:"password2",className:"form-input",onChange:function(e){return g(e.target.value)}})]})]}),Object(b.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"}),Object(b.jsxs)("p",{children:["Already have a account?"," ",Object(b.jsx)(i.b,{to:"/animedoro",className:"form-link",children:Object(b.jsx)("span",{children:"Sign in"})})]})]})]}):Object(b.jsx)(o.a,{to:"/"})})},U=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(E,{})]})},L=(n(83),n.p+"static/media/in_no_time.1f37f305.svg"),P=n.p+"static/media/time_management.42c13dde.svg",M=n.p+"static/media/undraw_Code_thinking_re_gka2.8c085959.svg",J=n.p+"static/media/undraw_Coding_re_iv62.60417445.svg";var q=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsxs)("div",{className:"hero",children:[Object(b.jsx)("img",{src:J,alt:"logo",className:"logo"}),Object(b.jsx)("h1",{className:"section-title",children:"TIMED"}),Object(b.jsx)("p",{className:"home-text",children:"Welcome to Timed!"})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"section",children:[Object(b.jsxs)("div",{className:"section-text",children:[Object(b.jsx)("h1",{className:"section-title",children:"Countdown"}),Object(b.jsx)("p",{className:"home-text",children:"Do you need a countdown timer, than this is the perfect page for you."}),Object(b.jsx)(i.b,{to:"/countdown",children:Object(b.jsx)("button",{className:"home-btn",children:"Countdown"})})]}),Object(b.jsx)("img",{src:L,alt:"countdown",className:"image"})]}),Object(b.jsxs)("div",{className:"section section-alt",children:[Object(b.jsxs)("div",{className:"section-text",children:[Object(b.jsx)("h1",{className:"section-title",children:"Animedoro"}),Object(b.jsx)("p",{className:"home-text",children:"What is animedoro you may ask? If you've heard of the pomodoro techinique than you may have a idea of what animedoro is. Essentially you you do work for about 40-60 minutes and then take a 20 minute break to watch a episode of a anime. If this is your first time here than you can head right over to sign up to get account to start using animedoro timer. If you already have a account than you can head right over and start using the timer."}),Object(b.jsx)(i.b,{to:"/animedoro",children:Object(b.jsx)("button",{className:"home-btn home-btn-alt",children:"Animedoro"})}),Object(b.jsx)(i.b,{to:"/signup",children:Object(b.jsx)("button",{className:"home-btn home-btn-alt",children:"Signup"})})]}),Object(b.jsx)("img",{src:M,alt:"animedoro",className:"image"})]}),Object(b.jsxs)("div",{className:"section",children:[Object(b.jsxs)("div",{className:"section-text",children:[Object(b.jsx)("h1",{className:"section-title",children:"Stopwatch"}),Object(b.jsx)("p",{className:"home-text",children:"Do you need a stopwatch, than this timer is perfect for you!"}),Object(b.jsx)(i.b,{to:"/stopwatch",children:Object(b.jsx)("button",{className:"home-btn",children:"Stopwatch"})})]}),Object(b.jsx)("img",{src:P,alt:"stopwatch",className:"image"})]})]})]})]})};var W=function(){return Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,component:q}),Object(b.jsx)(o.b,{path:"/countdown",component:h}),Object(b.jsx)(o.b,{path:"/animedoro",component:A}),Object(b.jsx)(o.b,{path:"/stopwatch",component:D}),Object(b.jsx)(o.b,{path:"/signup",component:U})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},K=n(24),$=n(42),z=n(43),B=Object(K.createStore)(y,Object(z.composeWithDevTools)(Object(K.applyMiddleware)($.a)));s.a.render(Object(b.jsx)(r.a,{store:B,children:Object(b.jsx)(W,{})}),document.getElementById("root")),F()}},[[84,1,2]]]);
//# sourceMappingURL=main.2e438931.chunk.js.map