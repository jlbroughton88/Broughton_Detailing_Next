(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/1Cv":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/allclients",function(){return n("H8s4")}])},H8s4:function(e,t,n){"use strict";n.r(t);var s=n("ln6h"),c=n.n(s),a=n("q1tI"),o=n.n(a),r=n("lC6Y"),l=n("vcXL"),i=n.n(l),u=(n("QtOj"),n("JAUf"),o.a.createElement),f=function(e){Object(r.useAppContext)().statusUrl;var t=Object(a.useState)([]),n=t[0],s=t[1];return Object(a.useEffect)((function(){console.log("CLIENTS ON CLIENT SIDE: "),console.log(e),s([e])}),[]),u("div",{className:"allMother"},u("div",{className:"allMain"},u("section",{className:"leftSect"},u("div",{className:"headDiv"},u("h1",{className:"head"},"Sign Ups"))),u("section",{className:"rightSect"},u("div",{className:"rightSectChild"},console.log(n),0!==n.length?n[0].json.map((function(e){return u("div",{key:e.id,className:"clientItem"},u("h3",{className:"clientEmail"},e.email))})):u("div",null,u("h3",null,"No clients yet"))))))};f.getInitialProps=function(e){var t,n;return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(i()("http://localhost:3000/api/clients"));case 2:return t=e.sent,console.log("getInitialProps res START"),console.log(t),console.log("getInitialProps res END"),e.next=8,c.a.awrap(t.json());case 8:return n=e.sent,e.abrupt("return",{json:n});case 10:case"end":return e.stop()}}))},t.default=f},lC6Y:function(e,t,n){"use strict";n.r(t),n.d(t,"AppContext",(function(){return a})),n.d(t,"useAppContext",(function(){return o}));var s=n("q1tI"),c=n.n(s).a.createElement,a=Object(s.createContext)(),o=function(){return Object(s.useContext)(a)};t.default=function(e){var t=Object(s.useState)(""),n=t[0],o=t[1];Object(s.useEffect)((function(){o("http://broughtondetailing.com")}),[n]);var r={statusUrl:n};return c(a.Provider,{value:r},e.children)}},vcXL:function(e,t,n){"use strict";var s=self.fetch.bind(self);e.exports=s,e.exports.default=e.exports}},[["/1Cv",0,1,2,3,4,5]]]);