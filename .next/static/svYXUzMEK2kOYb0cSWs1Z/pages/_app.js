(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),o=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}var a=n("XVgq"),u=n.n(a),c=n("Z7t5"),f=n.n(c);function s(e){return(s="function"===typeof f.a&&"symbol"===typeof u.a?function(e){return typeof e}:function(e){return e&&"function"===typeof f.a&&e.constructor===f.a&&e!==f.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"===typeof f.a&&"symbol"===s(u.a)?function(e){return s(e)}:function(e){return e&&"function"===typeof f.a&&e.constructor===f.a&&e!==f.a.prototype?"symbol":s(e)})(e)}function T(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=n("Bhuq"),E=n.n(p),d=n("TRZx"),A=n.n(d);function h(e){return(h=A.a?E.a:function(e){return e.__proto__||E()(e)})(e)}var y=n("SqZg"),S=n.n(y);function _(e,t){return(_=A.a||function(e,t){return e.__proto__=t,e})(e,t)}var m=n("q1tI"),b=n.n(m),v=n("8Bbg"),P=n.n(v),R=n("lC6Y"),g=n("TJpk"),O=b.a.createElement,M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,h(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=S()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return O(R.default,null,O(t,n),O(g.Helmet,null,O("meta",{charSet:"utf-8"}),O("title",null,"Broughton Detailing | Mobile Auto Detailing Matthews, NC")," />",O("meta",{name:"description",content:"Mobile auto detailing in Matthews, NC. We'll come to you! Broughton Detailing delivers nothing short of a remarkable result."})))}}])&&i(n.prototype,r),o&&i(n,o),t}(P.a);t.default=M},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var f,s=[];function l(){f=e(s.map((function(e){return e.props}))),T.canUseDOM?t(f):n&&(f=n(f))}var T=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return f},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,s=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!a(e,this.props)},u.componentWillMount=function(){s.push(this),l()},u.componentDidUpdate=function(){l()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},u.render=function(){return i.createElement(r,this.props)},o}(o.Component);return u(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(T,"canUseDOM",c),T}}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("Qetd"),o=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),u=n("/+P4"),c=n("N9n2"),f=n("ln6h"),s=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=d,t.default=void 0;var l=s(n("q1tI")),T=n("g/15");function p(e){var t,n,r;return f.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,f.awrap((0,T.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}t.AppInitialProps=T.AppInitialProps;var E=function(e){function t(){return o(this,t),a(this,u(t).apply(this,arguments))}return c(t,e),i(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,o=e.pageProps,i=d(t);return l.default.createElement(n,r({},o,{url:i}))}}]),t}(l.default.Component);function d(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=E,E.origGetInitialProps=p,E.getInitialProps=p},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Gytx:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var f=i[c];if(!u(f))return!1;var s=e[f],l=t[f];if(!1===(o=n?n.call(r,s,l,f):void 0)||void 0===o&&s!==l)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n("q1tI")),a=l(n("17x9")),u=l(n("8+s/")),c=l(n("bmMU")),f=n("v1p5"),s=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var p=function(e){var t,n;return n=t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=T(o,["children"]),u=(0,f.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,o=T(t,["children"]),a=r({},o);return n&&(a=this.mapChildrenToProps(n,a)),i.default.createElement(e,a)},o(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(i.default.Component),t.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,f.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}((0,u.default)(f.reducePropsToState,f.handleClientStateChange,f.mapStateOnServer)((function(){return null})));p.renderStatic=p.rewind,t.Helmet=p,t.default=p},bmMU:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!==typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,f,s=r(t),l=r(n);if(s&&l){if((c=t.length)!=n.length)return!1;for(u=c;0!==u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=l)return!1;var T=t instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==n.getTime();var E=t instanceof RegExp,d=n instanceof RegExp;if(E!=d)return!1;if(E&&d)return t.toString()==n.toString();var A=o(t);if((c=A.length)!==o(n).length)return!1;for(u=c;0!==u--;)if(!i.call(n,A[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!==u--;)if(("_owner"!==(f=A[u])||!t.$$typeof)&&!e(t[f],n[f]))return!1;return!0}return t!==t&&n!==n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},lC6Y:function(e,t,n){"use strict";n.r(t),n.d(t,"AppContext",(function(){return i})),n.d(t,"useAppContext",(function(){return a}));var r=n("q1tI"),o=n.n(r).a.createElement,i=Object(r.createContext)(),a=function(){return Object(r.useContext)(i)};t.default=function(e){var t=Object(r.useState)(""),n=t[0],a=t[1];Object(r.useEffect)((function(){a("http://broughtondetailing.com")}),[n]);var u={statusUrl:n};return o(i.Provider,{value:u},e.children)}},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),a=c(n("Qetd")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=d(e,u.TAG_NAMES.TITLE),n=d(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},l=function(e){return d(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],f=c.toLowerCase();-1===t.indexOf(f)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||f===u.TAG_PROPERTIES.REL&&"stylesheet"===e[f].toLowerCase()||(n=f),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var f=i[c],s=(0,a.default)({},o[f],r[f]);o[f]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){A(t)}),0)}}(),h=function(e){return clearTimeout(e)},y="undefined"!==typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,S="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,_=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},m=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,f=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,T=e.title,p=e.titleAttributes;R(u.TAG_NAMES.BODY,r),R(u.TAG_NAMES.HTML,o),P(T,p);var E={baseTag:g(u.TAG_NAMES.BASE,n),linkTags:g(u.TAG_NAMES.LINK,i),metaTags:g(u.TAG_NAMES.META,a),noscriptTags:g(u.TAG_NAMES.NOSCRIPT,c),scriptTags:g(u.TAG_NAMES.SCRIPT,s),styleTags:g(u.TAG_NAMES.STYLE,l)},d={},A={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(A[e]=E[e].oldTags)})),t&&t(),f(e,d,A)},v=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=v(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var f=a[c],s=t[f]||"";n.getAttribute(f)!==s&&n.setAttribute(f,s),-1===o.indexOf(f)&&o.push(f);var l=i.indexOf(f);-1!==l&&i.splice(l,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},g=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[u.HELMET_ATTRIBUTE]=!0,r),a=M(n,o);return[i.default.createElement(u.TAG_NAMES.TITLE,a,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=O(n),i=v(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){m&&S(m),e.defer?m=y((function(){b(e,(function(){m=null}))})):(b(e),m=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,f=e.scriptTags,s=e.styleTags,l=e.title,T=void 0===l?"":l,p=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,r),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,r),link:C(u.TAG_NAMES.LINK,i,r),meta:C(u.TAG_NAMES.META,a,r),noscript:C(u.TAG_NAMES.NOSCRIPT,c,r),script:C(u.TAG_NAMES.SCRIPT,f,r),style:C(u.TAG_NAMES.STYLE,s,r),title:C(u.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:p([u.TAG_PROPERTIES.HREF],e),bodyAttributes:T(u.ATTRIBUTE_NAMES.BODY,e),defer:d(e,u.HELMET_PROPS.DEFER),encode:d(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:l(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:T(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=_}).call(this,n("3r9c"))}},[[0,0,1,24,25]]]);