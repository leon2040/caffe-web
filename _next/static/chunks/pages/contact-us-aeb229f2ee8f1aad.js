(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{9718:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return n(8077)}])},4683:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),a=n(1664);function l(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:" flex flex-row p-4 justify-between",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"btn btn-link",children:"Caffe"})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{href:"/introduce",children:(0,r.jsx)("a",{className:"btn btn-link",children:"Introduce"})}),(0,r.jsx)(a.default,{href:"/order",children:(0,r.jsx)("a",{className:"btn btn-link",children:"Order"})}),(0,r.jsx)(a.default,{href:"/hiring",children:(0,r.jsx)("a",{className:"btn btn-link",children:"Hiring!"})}),(0,r.jsx)(a.default,{href:"/contact-us",children:(0,r.jsx)("a",{className:"btn btn-link",children:"Contact Us"})})]})]})})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(i){c=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var l,o=(l=n(7294))&&l.__esModule?l:{default:l},c=n(6273),i=n(387),u=n(7190);var s={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=i.useRouter(),l=o.default.useMemo((function(){var t=a(c.resolveHref(r,e.href,!0),2),n=t[0],l=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):l||n}}),[r,e.href,e.as]),d=l.href,h=l.as,m=e.children,p=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var x=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,j=a(u.useIntersection({rootMargin:"200px"}),2),g=j[0],N=j[1],w=o.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);o.default.useEffect((function(){var e=N&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,a=s[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(r,d,h,{locale:t})}),[h,d,N,y,n,r]);var C={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,l,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](n,r,{shallow:l,locale:i,scroll:o}))}(e,r,d,h,p,v,b,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof y?y:r&&r.locale,E=r&&r.isLocaleDomain&&c.getDomainLocale(h,I,r&&r.locales,r&&r.domainLocales);C.href=E||c.addBasePath(c.addLocale(h,I,r&&r.defaultLocale))}return o.default.cloneElement(t,C)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(i){c=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,r=l.useRef(),u=a(l.useState(!1),2),s=u[0],f=u[1],d=l.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||s||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,l=r.observer,o=r.elements;return o.set(e,t),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return l.useEffect((function(){if(!c&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var l=n(7294),o=n(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},8077:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),a=n(7294),l=n(4683),o=n(9008);function c(){var e=(0,a.useState)(""),t=e[0],n=e[1],c=(0,a.useState)(""),i=c[0],u=c[1],s=(0,a.useState)(""),f=s[0],d=s[1];return(0,r.jsxs)("div",{className:"container ",children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"\ubb38\uc758 - Caffe : \uc628\ub77c\uc778 \ucee4\ud53c \uc8fc\ubb38"})}),(0,r.jsx)("h1",{className:"font-bold",children:" \ubb38\uc758\ud558\uc138\uc694 "}),(0,r.jsx)("small",{children:"Contact Us"}),(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("input data",t,i,f)},children:[(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"\uc774\uba54\uc77c"}),(0,r.jsx)("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com",value:t,onChange:function(e){n(e.target.value),console.log(t)}})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"subjectInput",className:"form-label",children:"\uc81c\ubaa9"}),(0,r.jsx)("input",{type:"text",name:"subject",className:"form-control",id:"subjectInput",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",value:i,onChange:function(e){return u(e.target.value)}})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"\ub0b4\uc6a9"}),(0,r.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:f,onChange:function(e){return d(e.target.value)}})]}),(0,r.jsx)("button",{className:"btn btn-primary btn-lg",children:"\ubb38\uc758\ud558\uae30"})]})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=9718,e(e.s=t);var t}));var t=e.O();_N_E=t}]);