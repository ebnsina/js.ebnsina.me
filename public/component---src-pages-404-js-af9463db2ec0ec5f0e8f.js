(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(159),i=a(157);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(158),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},157:function(e,t,a){"use strict";var n=a(161),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(160),u=a.n(s),m=function(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,s=n.data.site.siteMetadata,m=s.title,c=s.description,g=s.author,p=o||m,M=t||c;return l.a.createElement(u.a,{htmlAttributes:{lang:a},title:p,titleTemplate:o?o+" :: "+m:m,meta:[{name:"description",content:M},{property:"og:title",content:p},{property:"og:description",content:M},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:p},{name:"twitter:description",content:M},{name:"twitter:creator",content:g}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})};m.defaultProps={lang:"en",meta:[],keywords:["javascript","ebnsina","blog","theme","dark","light","personal site"]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=m},158:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},159:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(156),u=a(160),m=a(146),c=a.n(m),g=function(e){var t=e.d,a=e.size,n=void 0===a?"1em":a,r=e.label,i=e.style;return l.a.createElement("span",{className:c.a.root,style:i,role:"figure"},l.a.createElement("svg",{version:"1.1",width:n,height:n,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:t,className:c.a.icon})),r&&l.a.createElement("span",{className:c.a.label},r))};g.propTypes={d:o.a.string,size:o.a.number,label:o.a.string,style:o.a.object};var p=g,M=a(147),d=a.n(M),h=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.isMobileMenu,r=t.slice(0);return!n&&r.splice(a),r.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(s.a,{to:e.path},e.title))})},b=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.onToggleSubMenu,r=t.slice(0);r.splice(0,a);var i=r.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(s.a,{to:e.path},e.title))});return l.a.createElement(l.a.Fragment,null,i,l.a.createElement("div",{className:d.a.subMenuOverlay,role:"button",tabIndex:0,onClick:n}))},E=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.menuMoreText,r=e.isMobileMenuVisible,i=e.isSubMenuVisible,o=e.onToggleMobileMenu,s=e.onToggleSubMenu,u=e.onChangeTheme,m=!(a>=t.length)&&a>0;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:d.a.mobileMenuContainer},l.a.createElement(l.a.Fragment,null,r?l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:d.a.mobileMenu},l.a.createElement(h,{mainMenu:t,isMobileMenu:!0})),l.a.createElement("div",{onClick:o,className:d.a.mobileMenuOverlay})):null,l.a.createElement("button",{className:d.a.menuTrigger,style:{color:"inherit"},onClick:o,type:"button","aria-label":"Menu"},l.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z"})))),l.a.createElement("div",{className:d.a.desktopMenuContainer},l.a.createElement("ul",{className:d.a.menu},l.a.createElement(h,{mainMenu:t,mainMenuItems:a}),m?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:d.a.subMenuTrigger,onClick:s,type:"button","aria-label":"Menu"},n||"Menu"," ",l.a.createElement("span",{className:d.a.menuArrow},">")),i?l.a.createElement("ul",{className:d.a.subMenu},l.a.createElement(b,{mainMenu:t,mainMenuItems:a,onToggleSubMenu:s})):null):null)),l.a.createElement("button",{className:d.a.themeToggle,onClick:u,type:"button","aria-label":"Theme toggle"},l.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22\n3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7\n13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"})))};E.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string,isMobileMenuVisible:o.a.bool,isSubMenuVisible:o.a.bool,onToggleMobileMenu:o.a.func,onToggleSubMenu:o.a.func,onChangeTheme:o.a.func},b.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,onToggleSubMenu:o.a.func};var f=E,y=a(148),T=a.n(y),v=function(e){var t=e.siteLogo,a=e.logoText,n=e.mainMenu,i=e.mainMenuItems,o=e.menuMoreText,m=e.defaultTheme,c="undefined"!=typeof window&&window.localStorage.getItem("theme")||null,g=Object(r.useState)(c),p=g[0],M=g[1],d=Object(r.useState)(!1),h=d[0],b=d[1],E=Object(r.useState)(!1),y=E[0],v=E[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.Helmet,null,l.a.createElement("body",{className:"light"===(p||m)?"light-theme":"dark-theme"})),l.a.createElement("header",{className:T.a.header},l.a.createElement("div",{className:T.a.inner},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:T.a.logo},t.src?l.a.createElement("img",{src:t.src,alt:t.alt}):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:T.a.mark},">"),l.a.createElement("span",{className:T.a.text},a),l.a.createElement("span",{className:T.a.cursor})))),l.a.createElement("span",{className:T.a.right},l.a.createElement(f,{mainMenu:n,mainMenuItems:i,isMobileMenuVisible:h,isSubMenuVisible:y,menuMoreText:o,onToggleMobileMenu:function(){return b(!h)},onToggleSubMenu:function(){return v(!y)},onChangeTheme:function(){var e="light"===(p||m)?"dark":"light";M(e),"undefined"!=typeof window&&window.localStorage.setItem("theme",e)}})))))};v.propTypes={siteLogo:o.a.object,logoText:o.a.string,defaultTheme:o.a.string,mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string};var w=v,N=function(e){var t=e.copyrights;return l.a.createElement("footer",null,t?l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"footerCopyrights"},"© ইবনে সিনা - ২০১৯")))};N.propTypes={copyrights:o.a.string};var x=N,k=(a(145),function(e){var t=e.children,a=n.data.site.siteMetadata,r=a.title,i=a.logo,o=a.logoText,s=a.defaultTheme,u=a.mainMenu,m=a.showMenuItems,c=a.menuMoreText,g=a.copyrights;return l.a.createElement("div",{className:"container"},l.a.createElement(w,{siteTitle:r,siteLogo:i,logoText:o,defaultTheme:s,mainMenu:u,mainMenuItems:m,menuMoreText:c}),l.a.createElement("div",{className:"content"},t),l.a.createElement(x,{copyrights:g}))});k.propTypes={children:o.a.node.isRequired};t.a=k},161:function(e){e.exports={data:{site:{siteMetadata:{title:"ইবনে সিনা - জাভাস্ক্রিপ্ট ডেভেলপার এবং ইন্সট্রাক্টর",description:"জাভাস্ক্রিপ্ট ডেভেলপার এবং ইন্সট্রাক্টর",author:"ইবনে সিনা"}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"ইবনে সিনা - জাভাস্ক্রিপ্ট ডেভেলপার এবং ইন্সট্রাক্টর",logo:{src:"",alt:""},logoText:"ইবনে সিনা",defaultTheme:"dark",copyrights:"",mainMenu:[{title:"আমার সম্পর্কে",path:"/আমার-সম্পর্কে"},{title:"যোগাযোগ",path:"/যোগাযোগ"}],showMenuItems:2,menuMoreText:"বিস্তারিত"}}}}},163:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(59),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-pages-404-js-af9463db2ec0ec5f0e8f.js.map