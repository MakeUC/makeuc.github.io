(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7qh2":function(t,e,o){"use strict";var r=o("q1tI"),l=o("Bi3C"),n=o.n(l),a=o("Wbzz"),c=o("qKvR"),s=function(){return Object(c.a)("svg",{id:"U",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 86.6 98.67"},Object(c.a)("defs",null,Object(c.a)("linearGradient",{id:"linear-gradient",x1:9.42,y1:84.28,x2:77.18,y2:16.52,gradientUnits:"userSpaceOnUse"},Object(c.a)("stop",{offset:0,stopColor:"#7371b5"}),Object(c.a)("stop",{offset:.26,stopColor:"#716fb2"}),Object(c.a)("stop",{offset:.45,stopColor:"#6b68a9"}),Object(c.a)("stop",{offset:.62,stopColor:"#605d99"}),Object(c.a)("stop",{offset:.77,stopColor:"#514d83"}),Object(c.a)("stop",{offset:.91,stopColor:"#3d3866"}),Object(c.a)("stop",{offset:1,stopColor:"#2f2951"})),Object(c.a)("style",null,".cls-1{fill:#494a77}.cls-2{fill:none}")),Object(c.a)("path",{d:"M2.23 23.71L43.3 0l10.39 6v11.75H74l10.33 6L43.3 47.42 33 41.46l25.69-14.85-21.75.81 1.4-12.56-25.72 14.85zm43.24 27.46v47.44L86.6 74.86V62.92L55.86 80.67v-23.5L86.6 39.42v-12zM0 74.86l41.14 23.75V51.17l-10.39-6v35.5L10.39 68.92v-35.5L0 27.42z",fill:"url(#linear-gradient)",id:"U"}))},i=o("5Wrh");e.a=function(t){var e=(void 0===t?{}:t).page,o=void 0===e?"index":e,l=Object(r.useState)("top"),f=l[0],u=l[1];return Object(r.useEffect)((function(){var t=document.addEventListener("scroll",(function(t){document.scrollingElement.scrollTop>=100?"scrolling"!==f&&u("scrolling"):"top"!==f&&u("top")}));return function(){return document.removeEventListener("scroll",t)}})),Object(c.a)("header",{className:"sticky top-0 shadow navbar "+f},Object(c.a)("div",{className:"container flex flex-col sm:flex-row justify-between items-center max-w-full px-8 py-2"},Object(c.a)(a.a,{to:"/"},Object(c.a)("div",{className:"flex items-center text-2xl"},Object(c.a)("div",{className:"w-12 mr-3"},Object(c.a)(s,null)))),"index"===o&&Object(c.a)("div",{className:"flex mt-4 sm:mt-0"},Object(c.a)(n.a,{className:"px-3 xs:px-8 nav-link",href:"#about"},"ABOUT"),Object(c.a)(n.a,{className:"px-3 xs:px-8 nav-link",href:"#tracks"},"TRACKS"),Object(c.a)(n.a,{className:"px-3 xs:px-8 nav-link",href:"#faq"},"FAQ"),Object(c.a)(n.a,{className:"px-3 xs:px-8 nav-link",href:"#sponsors"},"SPONSORS")),Object(c.a)("div",{className:"hidden md:block"},"index"===o?Object(c.a)(a.a,{to:"/register"},Object(c.a)(i.a,{className:"text-sm font-bold"},"REGISTER")):Object(c.a)(a.a,{to:"/"},Object(c.a)(i.a,{size:"default",className:"text-sm font-bold"},"HOME")))))}},Bi3C:function(t,e,o){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=o(1),n=(r=l)&&r.__esModule?r:{default:r};e.default=n.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),a=o(2),c=(r=a)&&r.__esModule?r:{default:r},s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var r=t.currentTarget.getAttribute("href").slice(1),l=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:l-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r]);return o}(t,["offset"]));return c.default.createElement("a",l({},e,{onClick:this.smoothScroll}))}}]),e}(a.Component);e.default=s},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,r=t.HTMLElement||t.Element,l={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?b.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):l.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?l.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):b.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var t=arguments[0].left,e=arguments[0].top;b.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=p(this),r=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==e.body?(b.call(this,o,o.scrollLeft+n.left-r.left,o.scrollTop+n.top-r.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function s(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function f(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function u(t){var e=i(t,"Y")&&f(t,"Y"),o=i(t,"X")&&f(t,"X");return e||o}function p(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===u(t));return o=null,t}function d(e){var o,r,l,a,c=(n()-e.startTime)/468;a=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*a)),r=e.startX+(e.x-e.startX)*o,l=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,l),r===e.x&&l===e.y||t.requestAnimationFrame(d.bind(t,e))}function b(o,r,a){var s,i,f,u,p=n();o===e.body?(s=t,i=t.scrollX||t.pageXOffset,f=t.scrollY||t.pageYOffset,u=l.scroll):(s=o,i=o.scrollLeft,f=o.scrollTop,u=c),d({scrollable:s,method:u,startTime:p,startX:i,startY:f,x:r,y:a})}}}}()}])},t.exports=r(o("q1tI"))},Lnxd:function(t,e,o){"use strict";o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return n}));var r=o("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(l),a=function(){return(a=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var l in e=arguments[o])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}).apply(this,arguments)},c=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(t);l<r.length;l++)e.indexOf(r[l])<0&&(o[r[l]]=t[r[l]])}return o};function s(t){return function(e){return r.createElement(i,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,o){return r.createElement(e.tag,a({key:o},e.attr),t(e.child))}))}(t.child))}}function i(t){var e=function(e){var o,l=t.size||e.size||"1em";e.className&&(o=e.className),t.className&&(o=(o?o+" ":"")+t.className);var n=t.attr,s=t.title,i=c(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,i,{className:o,style:a({color:t.color||e.color},e.style,t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),t.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(t){return e(t)})):e(l)}},QS3V:function(t,e,o){"use strict";o("q1tI");var r=o("qKvR");e.a=function(t){var e=t.className,o=t.children,l=t.style,n=void 0===l?{}:l;return Object(r.a)("div",{className:"p-12 rounded-lg border border-solid border-gray-200 "+e,style:Object.assign({boxShadow:"0 10px 28px rgba(0,0,0,.08)"},n)},o)}},exKd:function(t,e,o){"use strict";var r=o("q1tI"),l=o.n(r),n=o("Lnxd"),a=o("ma3e"),c=o("qKvR");e.a=function(){return Object(c.a)(l.a.Fragment,null,Object(c.a)("footer",{className:"container mx-auto py-8 px-3 mb-8 text-gray-800 flex"},Object(c.a)(n.b.Provider,{value:{size:"2em",className:"mx-auto"}},Object(c.a)("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:info@makeuc.io",className:"flex-1 social-icon"},Object(c.a)(a.a,null)),Object(c.a)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/makeuc",className:"flex-1 social-icon"},Object(c.a)(a.d,null)),Object(c.a)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/uc_ieee",className:"flex-1 social-icon"},Object(c.a)(a.c,null)),Object(c.a)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/uc_ieee",className:"flex-1 social-icon"},Object(c.a)(a.f,null)),Object(c.a)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/makeuc",className:"flex-1 social-icon"},Object(c.a)(a.b,null)))))}}}]);
//# sourceMappingURL=6046cf252c2ee2300cb3b3cc5968408d5728a000-c9ee8a8141e49723e78d.js.map