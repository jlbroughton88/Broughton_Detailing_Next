(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"7Rup":function(t,a,o){"use strict";o.r(a);var n=o("vYYK"),i=o("q1tI"),u=o.n(i),l=o("JAUf"),r=(o("4hkV"),u.a.createElement);a.default=function(){var t=function(e){setEmail(e.target.value)};return r("div",{className:"quoteMother"},r(l.default,null),r("div",{className:"quoteMain"},r("section",{className:"leftSect"},r("div",{className:"headDiv"},r("h1",{className:"head"},"Get a Quote!"))),r("section",{className:"rightSect"},r("div",{className:"quoteDiv"},r("form",{onSubmit:function(){var t;axios.post("https://www.broughtondetailing.com/api/addquote",(t={email:email,first_name:name,car_make:make,car_model:model,condition:condition},Object(n.a)(t,"condition",detail),Object(n.a)(t,"date",formattedDate),t)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),quoteMsg.style.display="block",setTimeout((function(){quoteMsg.style.display="none"}),5e3),e.preventDefault()}},r("input",{placeholder:"First Name",onChange:function(e){setName(e.target.value)},type:"text"}),r("input",{placeholder:"Email",onChange:t,required:!0,type:"email"}),r("input",{placeholder:"Phone Number",onChange:t,required:!0,type:"email"}),r("input",{placeholder:"Your Car's Make",onChange:function(e){setMake(e.target.value)},required:!0,type:"text"}),r("input",{placeholder:"Your Car's Model",onChange:function(e){setModel(e.target.value)},required:!0,type:"text"}),r("input",{placeholder:"Requested Detail (Full, Exterior, or Interior)"}),r("textarea",{placeholder:"How would you describe the condition of your vehicle? (optional, but appreciated)",onChange:function(e){console.log(e.target.value),setCondition(e.target.value)},type:""}),r("input",{className:"quoteSubmit",type:"submit"})),r("h4",{id:"quoteMessage",className:"quoteMessage"},"We'll get back to you as soon as possible!")))))}},vYYK:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a("hfKm"),n=a.n(o);function i(e,t,a){return t in e?n()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},vw0U:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quote",function(){return a("7Rup")}])}},[["vw0U",0,1,24,25,26,5]]]);