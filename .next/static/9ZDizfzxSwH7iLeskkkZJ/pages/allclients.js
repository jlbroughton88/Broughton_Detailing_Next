(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/1Cv":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/allclients",function(){return n("H8s4")}])},H8s4:function(t,e,n){"use strict";n.r(e);var a=n("ln6h"),c=n.n(a),r=n("q1tI"),s=n.n(r),o=n("lC6Y"),i=n("vcXL"),u=n.n(i),l=(n("QtOj"),n("JAUf"),s.a.createElement),d=function(t){Object(o.useAppContext)().statusUrl;var e=Object(r.useState)([]),n=e[0],a=e[1];return Object(r.useEffect)((function(){a(t)}),[]),l("div",{className:"allMother"},l("div",{className:"allMain"},l("section",{className:"leftSect"},l("div",{className:"headDiv"},l("h1",{className:"head"},"Sign Ups"))),l("section",{className:"rightSect"},l("div",{className:"rightSectChild"},0!==n.length?n.map((function(t){return l("div",{key:t.id,className:"clientItem"},l("h3",{className:"clientEmail"},t.email))})):l("div",null,l("h3",null,"No clients yet"))))))};d.getInitialProps=function(t){var e,n,a,r,s,o;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=t.req,t.query,n=e?"".concat(e.headers["x-forwarded-proto"],";"):location.protocol,a=e?e.headers["x-forwarded-host"]:location.host,r="".concat(n,"//").concat(a,"/api/clients"),i.next=6,c.a.awrap(u()(r));case 6:return s=i.sent,i.next=9,c.a.awrap(s.json());case 9:return o=i.sent,i.abrupt("return",o);case 11:case"end":return i.stop()}}))},e.default=d},lC6Y:function(t,e,n){"use strict";n.r(e),n.d(e,"AppContext",(function(){return r})),n.d(e,"useAppContext",(function(){return s}));var a=n("q1tI"),c=n.n(a).a.createElement,r=Object(a.createContext)(),s=function(){return Object(a.useContext)(r)};e.default=function(t){var e=Object(a.useState)(""),n=e[0],s=e[1];Object(a.useEffect)((function(){s("http://broughtondetailing.com")}),[n]);var o={statusUrl:n};return c(r.Provider,{value:o},t.children)}},vcXL:function(t,e,n){"use strict";var a=self.fetch.bind(self);t.exports=a,t.exports.default=t.exports}},[["/1Cv",0,1,19,20,21,5]]]);