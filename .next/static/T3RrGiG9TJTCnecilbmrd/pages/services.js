(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"5tmg":function(t,a,i){"use strict";i.r(a);var s=i("q1tI"),o=i.n(s),r=(i("4hkV"),o.a.createElement);a.default=function(){var t=Object(s.useState)(""),a=(t[0],t[1],Object(s.useState)("")),i=a[0],o=a[1],n=Object(s.useState)(""),l=n[0],c=n[1],u=Object(s.useState)(""),m=u[0],d=u[1],h=Object(s.useState)(""),p=h[0],g=h[1],v=Object(s.useState)(""),f=v[0],N=v[1],k=Object(s.useState)(""),y=k[0],b=k[1],q=Object(s.useState)(""),S=q[0],w=q[1];return r("div",{className:"quoteDiv"},r("h2",{className:"quoteHead"},"Get a quote!"),r("form",{onSubmit:function(){axios.post("https://www.broughtondetailing.com/api/addquote",{first_name:m,email:i,phone_number:l,car_make:p,car_model:f,detail:S,condition:y,date:formattedDate}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),quoteMsg.style.display="block",setTimeout((function(){quoteMsg.style.display="none"}),5e3),e.preventDefault()}},r("input",{placeholder:"First Name",onChange:function(e){d(e.target.value)},type:"text"}),r("input",{placeholder:"Email",onChange:function(e){o(e.target.value)},required:!0,type:"email"}),r("input",{placeholder:"Phone Number",onChange:function(e){c(e.target.value)},required:!0,type:"tel"}),r("input",{placeholder:"Your Car's Make",onChange:function(e){g(e.target.value)},required:!0,type:"text"}),r("input",{placeholder:"Your Car's Model",onChange:function(e){N(e.target.value)},required:!0,type:"text"}),r("input",{placeholder:"Requested Detail (Full, Exterior, or Interior)",onChange:function(e){console.log(e.target.value),w(e.target.value)}}),r("textarea",{placeholder:"How would you describe the condition of your vehicle? (optional, but appreciated)",onChange:function(e){console.log(e.target.value),b(e.target.value)},type:""}),r("input",{className:"quoteSubmit",type:"submit"})),r("h4",{id:"quoteMessage",className:"quoteMessage"},"We'll get back to you as soon as possible!"))}},Am4Y:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return a("eefG")}])},eefG:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),s=a.n(i),o=(a("fqiE"),a("JAUf")),r=a("YFqc"),n=a.n(r),l=(a("5tmg"),s.a.createElement);t.default=function(){var e=Object(i.useState)(),t=(e[0],e[1],function(e){for(var t=document.getElementsByClassName("serviceList"),a=document.getElementsByClassName("slide"),i=e.target,s=[].slice.call(a),o=[].slice.call(t),r=e.target.id+"List",n=0;n<s.length;n++)s[n].classList.add("active"),s[n].id===i.id?s[n].classList.add("active"):s[n].classList.remove("active");for(var l=0;l<o.length;l++)o[l].id===r?o[l].classList.add("active"):o[l].classList.remove("active")});return l("div",{className:"servicesMother"},l(o.default,null),l("div",{className:"servicesMain"},l("section",{className:"leftSect"},l("div",{className:"headDiv"},l("h1",{className:"head"},"Services"))),l("section",{className:"rightSect"},l("div",{className:"rightSectChild"},l("div",{className:"servicesGrid"},l("div",{className:"serviceTypeRow"},l("button",{value:"Interior",onClick:t,id:"interior",className:"interiorSlide slide active"},"Interior"),l("button",{value:"Exterior",onClick:t,id:"exterior",className:"exteriorSlide slide"},"Exterior"),l("button",{value:"Full",onClick:t,id:"full",className:"fullSlide slide"},"Full")),l("div",{itemScope:!0,itemType:"http://schema.org/ItemList",className:"serviceDiv"},l("ul",{itemScope:!0,itemType:"http://schema.org/ItemList",className:"serviceList active",id:"interiorList"},["Thorough vacuum (Including trunk)","Windows inside & out","Door, hood, & trunk jams","Remove door panel scuffs / Skid marks","Cleanse dashboard & console","Dust & clean air vents","Deep clean leather","Condition & protect interior","Shampoo floor mats"].map((function(e){return l("li",{key:e,itemProp:"itemListElement",className:"serviceListItem"},e)})),l("p",{className:"quotePara"},l("strong",null,"Looking for a quote? ")," Click"," ",l(n.a,{href:"/quote"},"here!")),l("p",{className:"questionPara"},l("strong",{className:"italic"},"Any questions?")," Click"," ",l("a",{href:"mailto:broughtondetailing@gmail.com?subject=Services Inquiry"},l("strong",{className:"link"},"here"))," ","and ask away!"))),l("div",{itemScope:!0,itemType:"http://schema.org/ItemList",className:"serviceDiv"},l("ul",{itemScope:!0,itemType:"http://schema.org/ItemList",className:"serviceList",id:"exteriorList"},["Microfiber wash & dry","Machine wax","Protect / finish black trim","Door, hood, & trunk jams","Wash tires","Degrease tires","Clean wheels","Wheel wells\x10","Satin black tire 'gloss'","Decontaminate / Clay paint (If necessary))","Bug removal (Within limits)"].map((function(e){return l("li",{key:e,itemProp:"itemListElement",className:"serviceListItem"},e)})),l("p",{className:"quotePara"},l("strong",null,"Looking for a quote? ")," Click"," ",l(n.a,{href:"/quote"},"here!")),l("p",{className:"questionPara"},l("strong",{className:"italic"},"Any questions?")," Click"," ",l("a",{href:"mailto:broughtondetailing@gmail.com?subject=Services Inquiry"},l("strong",{className:"link"},"here"))," ","and ask away!"))),l("div",{itemScope:!0,itemType:"http://schema.org/ItemList",className:"serviceDiv"},l("ul",{itemScope:!0,itemType:"http://schema.org/ItemList",className:"serviceList",id:"fullList"},["Thorough vacuum (Including trunk)","Windows inside & out","Door, hood, & trunk jams","Remove door panel scuffs / Skid marks","Cleanse dashboard & console","Dust & clean air vents","Deep clean leather","Condition & protect interior","Shampoo floor mats","Microfiber wash & dry","Machine wax","Protect / finish black trim","Wash tires","Degrease tires","Clean wheels","Wheel wells\x10","Satin black tire 'gloss'","Decontaminate / Clay paint (If necessary))","Bug removal (Within limits)"].map((function(e){return l("li",{key:e,itemProp:"itemListElement",className:"serviceListItem"},e)})),l("p",{className:"quotePara"},l("strong",null,"Looking for a quote? ")," Click"," ",l(n.a,{href:"/quote"},"here!")),l("p",{className:"questionPara"},l("strong",{className:"italic"},"Any questions?")," Click"," ",l("a",{href:"mailto:broughtondetailing@gmail.com?subject=Services Inquiry"},l("strong",{className:"link"},"here"))," ","and ask away!"))))))))}}},[["Am4Y",0,1,24,25,26,5]]]);