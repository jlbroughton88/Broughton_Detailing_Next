(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5tmg":function(t,o,a){"use strict";a.r(o);var n=a("q1tI"),u=a.n(n),r=a("vDqi"),i=a.n(r),l=(a("4hkV"),u.a.createElement);o.default=function(){var t=Object(n.useState)(""),o=(t[0],t[1],Object(n.useState)("")),a=o[0],u=o[1],r=Object(n.useState)(""),c=r[0],s=r[1],p=Object(n.useState)(""),d=p[0],g=p[1],m=Object(n.useState)(""),h=m[0],b=m[1],f=Object(n.useState)(""),v=f[0],q=f[1],w=Object(n.useState)(""),y=w[0],j=w[1],O=Object(n.useState)(""),S=O[0],_=O[1];return l("div",{className:"quoteDiv"},l("h2",{className:"quoteHead"},"Get a quote!"),l("form",{onSubmit:function(){var t=document.getElementById("quoteMessage"),o=moment().format("L").replace(/\//g,"-");console.log(o),i.a.post("https://www.broughtondetailing.com/api/addquote",{first_name:d,email:a,phone_number:c,car_make:h,car_model:v,detail:S,condition:y,date:o}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),t.style.display="block",setTimeout((function(){t.style.display="none"}),5e3),e.preventDefault()}},l("input",{placeholder:"First Name",onChange:function(e){g(e.target.value)},type:"text"}),l("input",{placeholder:"Email",onChange:function(e){u(e.target.value)},required:!0,type:"email"}),l("input",{placeholder:"Phone Number",onChange:function(e){s(e.target.value)},required:!0,type:"tel"}),l("input",{placeholder:"Your Car's Make",onChange:function(e){b(e.target.value)},required:!0,type:"text"}),l("input",{placeholder:"Your Car's Model",onChange:function(e){q(e.target.value)},required:!0,type:"text"}),l("input",{placeholder:"Requested Detail (Full, Exterior, or Interior)",onChange:function(e){console.log(e.target.value),_(e.target.value)}}),l("textarea",{placeholder:"How would you describe the condition of your vehicle? (optional, but appreciated)",onChange:function(e){console.log(e.target.value),j(e.target.value)},type:""}),l("input",{className:"quoteSubmit",type:"submit"})),l("h4",{id:"quoteMessage",className:"quoteMessage"},"We'll get back to you as soon as possible!"))}},JT06:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comps/quote",function(){return o("5tmg")}])},Qetd:function(e,t,o){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports}},[["JT06",0,1,8,5]]]);