(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(158),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},157:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(160),c=a.n(l),u=function(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=n.data.site.siteMetadata,u=l.title,d=l.description,m=l.author,f=o||u,p=t||d;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:f,titleTemplate:o?o+" :: "+u:u,meta:[{name:"description",content:p},{property:"og:title",content:f},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:f},{name:"twitter:description",content:p},{name:"twitter:creator",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})};u.defaultProps={lang:"en",meta:[],keywords:["javascript","ebnsina","blog","theme","dark","light","personal site"]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=u},158:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},159:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(156),c=a(160),u=a(146),d=a.n(u),m=function(e){var t=e.d,a=e.size,n=void 0===a?"1em":a,r=e.label,s=e.style;return i.a.createElement("span",{className:d.a.root,style:s,role:"figure"},i.a.createElement("svg",{version:"1.1",width:n,height:n,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:t,className:d.a.icon})),r&&i.a.createElement("span",{className:d.a.label},r))};m.propTypes={d:o.a.string,size:o.a.number,label:o.a.string,style:o.a.object};var f=m,p=a(147),g=a.n(p),h=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.isMobileMenu,r=t.slice(0);return!n&&r.splice(a),r.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(l.a,{to:e.path},e.title))})},b=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.onToggleSubMenu,r=t.slice(0);r.splice(0,a);var s=r.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(l.a,{to:e.path},e.title))});return i.a.createElement(i.a.Fragment,null,s,i.a.createElement("div",{className:g.a.subMenuOverlay,role:"button",tabIndex:0,onClick:n}))},y=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.menuMoreText,r=e.isMobileMenuVisible,s=e.isSubMenuVisible,o=e.onToggleMobileMenu,l=e.onToggleSubMenu,c=e.onChangeTheme,u=!(a>=t.length)&&a>0;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:g.a.mobileMenuContainer},i.a.createElement(i.a.Fragment,null,r?i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:g.a.mobileMenu},i.a.createElement(h,{mainMenu:t,isMobileMenu:!0})),i.a.createElement("div",{onClick:o,className:g.a.mobileMenuOverlay})):null,i.a.createElement("button",{className:g.a.menuTrigger,style:{color:"inherit"},onClick:o,type:"button","aria-label":"Menu"},i.a.createElement(f,{style:{cursor:"pointer"},size:24,d:"M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z"})))),i.a.createElement("div",{className:g.a.desktopMenuContainer},i.a.createElement("ul",{className:g.a.menu},i.a.createElement(h,{mainMenu:t,mainMenuItems:a}),u?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:g.a.subMenuTrigger,onClick:l,type:"button","aria-label":"Menu"},n||"Menu"," ",i.a.createElement("span",{className:g.a.menuArrow},">")),s?i.a.createElement("ul",{className:g.a.subMenu},i.a.createElement(b,{mainMenu:t,mainMenuItems:a,onToggleSubMenu:l})):null):null)),i.a.createElement("button",{className:g.a.themeToggle,onClick:c,type:"button","aria-label":"Theme toggle"},i.a.createElement(f,{style:{cursor:"pointer"},size:24,d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22\n3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7\n13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"})))};y.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string,isMobileMenuVisible:o.a.bool,isSubMenuVisible:o.a.bool,onToggleMobileMenu:o.a.func,onToggleSubMenu:o.a.func,onChangeTheme:o.a.func},b.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,onToggleSubMenu:o.a.func};var v=y,E=a(148),M=a.n(E),w=function(e){var t=e.siteLogo,a=e.logoText,n=e.mainMenu,s=e.mainMenuItems,o=e.menuMoreText,u=e.defaultTheme,d="undefined"!=typeof window&&window.localStorage.getItem("theme")||null,m=Object(r.useState)(d),f=m[0],p=m[1],g=Object(r.useState)(!1),h=g[0],b=g[1],y=Object(r.useState)(!1),E=y[0],w=y[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.Helmet,null,i.a.createElement("body",{className:"light"===(f||u)?"light-theme":"dark-theme"})),i.a.createElement("header",{className:M.a.header},i.a.createElement("div",{className:M.a.inner},i.a.createElement(l.a,{to:"/"},i.a.createElement("div",{className:M.a.logo},t.src?i.a.createElement("img",{src:t.src,alt:t.alt}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:M.a.mark},">"),i.a.createElement("span",{className:M.a.text},a),i.a.createElement("span",{className:M.a.cursor})))),i.a.createElement("span",{className:M.a.right},i.a.createElement(v,{mainMenu:n,mainMenuItems:s,isMobileMenuVisible:h,isSubMenuVisible:E,menuMoreText:o,onToggleMobileMenu:function(){return b(!h)},onToggleSubMenu:function(){return w(!E)},onChangeTheme:function(){var e="light"===(f||u)?"dark":"light";p(e),"undefined"!=typeof window&&window.localStorage.setItem("theme",e)}})))))};w.propTypes={siteLogo:o.a.object,logoText:o.a.string,defaultTheme:o.a.string,mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string};var S=w,T=function(e){var t=e.copyrights;return i.a.createElement("footer",null,t?i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"footerCopyrights"},"© ইবনে সিনা - ২০১৯")))};T.propTypes={copyrights:o.a.string};var N=T,x=(a(145),function(e){var t=e.children,a=n.data.site.siteMetadata,r=a.title,s=a.logo,o=a.logoText,l=a.defaultTheme,c=a.mainMenu,u=a.showMenuItems,d=a.menuMoreText,m=a.copyrights;return i.a.createElement("div",{className:"container"},i.a.createElement(S,{siteTitle:r,siteLogo:s,logoText:o,defaultTheme:l,mainMenu:c,mainMenuItems:u,menuMoreText:d}),i.a.createElement("div",{className:"content"},t),i.a.createElement(N,{copyrights:m}))});x.propTypes={children:o.a.node.isRequired};t.a=x},161:function(e){e.exports={data:{site:{siteMetadata:{title:"ইবনে সিনা - জাভাস্ক্রিপ্ট ডেভেলপার এবং ইন্সট্রাক্টর",description:"জাভাস্ক্রিপ্ট ডেভেলপার এবং ইন্সট্রাক্টর",author:"ইবনে সিনা"}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"ইবনে সিনা - জাভাস্ক্রিপ্ট ডেভেলপার এবং ইন্সট্রাক্টর",logo:{src:"",alt:""},logoText:"ইবনে সিনা",defaultTheme:"dark",copyrights:"",mainMenu:[{title:"আমার সম্পর্কে",path:"/আমার-সম্পর্কে"},{title:"যোগাযোগ",path:"/যোগাযোগ"}],showMenuItems:2,menuMoreText:"বিস্তারিত"}}}}},163:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(59),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(156),l=a(174),c=a.n(l),u=a(165),d=a(175),m=a(151),f=a.n(m),p=function(e){var t=e.title,a=e.date,n=e.path,i=e.coverImage,s=e.author,l=e.excerpt,m=e.tags,p=e.html,g=e.previousPost,h=e.nextPost,b=g&&g.frontmatter.path,y=g&&g.frontmatter.title,v=h&&h.frontmatter.path,E=h&&h.frontmatter.title;return r.a.createElement("div",{className:f.a.post},r.a.createElement("div",{className:f.a.postContent},r.a.createElement("h1",{className:f.a.title},l?r.a.createElement(o.a,{to:n},t):t),r.a.createElement("div",{className:f.a.meta},a," ",s&&r.a.createElement(r.a.Fragment,null,"— Written by ",s),m?r.a.createElement("div",{className:f.a.tags},m.map(function(e){return r.a.createElement(o.a,{to:"/tag/"+Object(d.toKebabCase)(e)+"/",key:Object(d.toKebabCase)(e)},r.a.createElement("span",{className:f.a.tag},"#",e))})):null),i&&r.a.createElement(c.a,{fluid:i.childImageSharp.fluid,className:f.a.coverImage}),l?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,l),r.a.createElement(o.a,{to:n,className:f.a.readMore},"Read more →")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}),r.a.createElement(u.a,{previousPath:b,previousLabel:y,nextPath:v,nextLabel:E}))))};p.propTypes={title:s.a.string,date:s.a.string,path:s.a.string,coverImage:s.a.object,author:s.a.string,excerpt:s.a.string,html:s.a.string,tags:s.a.arrayOf(s.a.string),previousPost:s.a.object,nextPost:s.a.object},t.a=p},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(156),l=a(150),c=a.n(l),u=function(e){var t=e.nextPath,a=e.previousPath,n=e.nextLabel,i=e.previousLabel;return a||t?r.a.createElement("div",{className:c.a.navigation},a&&r.a.createElement("span",{className:c.a.button},r.a.createElement(o.a,{to:a},r.a.createElement("span",{className:c.a.iconPrev},"←"),r.a.createElement("span",{className:c.a.buttonText},i))),t&&r.a.createElement("span",{className:c.a.button},r.a.createElement(o.a,{to:t},r.a.createElement("span",{className:c.a.buttonText},n),r.a.createElement("span",{className:c.a.iconNext},"→")))):null};u.propTypes={nextPath:s.a.string,previousPath:s.a.string,nextLabel:s.a.string,previousLabel:s.a.string},t.a=u},174:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(37)),o=n(a(81)),l=n(a(82)),c=n(a(0)),u=n(a(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,u=e.onError,d=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},d,{onLoad:s,onError:u,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,p=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,E=e.itemProp,M=this.state.imgLoaded||!1===this.state.fadeIn,w=!0===this.state.fadeIn&&!this.state.imgCached,S=(0,l.default)({opacity:M?1:0,transition:w?"opacity 0.5s":"none"},o),T="boolean"==typeof y?"lightgray":y,N={transitionDelay:"0.5s"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},w&&N,o,m),I={title:t,alt:this.state.isVisible?"":a,style:x,className:f};if(p){var L=p;return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),T&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&N)}),L.base64&&c.default.createElement(b,(0,l.default)({src:L.base64},I)),L.tracedSVG&&c.default.createElement(b,(0,l.default)({src:L.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},L))}}))}if(g){var O=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},T&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:T,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},w&&N)}),O.base64&&c.default.createElement(b,(0,l.default)({src:O.base64},I)),O.tracedSVG&&c.default.createElement(b,(0,l.default)({src:O.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(b,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},O))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),E=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var M=y;t.default=M},175:function(e,t,a){a(176),a(36),e.exports.toKebabCase=function(e){return e.replace(new RegExp("(\\s|_|-)+","gmi"),"-")}},176:function(e,t,a){var n=a(6),r=a(177),i=a(25).f,s=a(180).f,o=a(57),l=a(74),c=n.RegExp,u=c,d=c.prototype,m=/a/g,f=/a/g,p=new c(m)!==m;if(a(18)&&(!p||a(19)(function(){return f[a(3)("match")]=!1,c(m)!=m||c(f)==f||"/a/i"!=c(m,"i")}))){c=function(e,t){var a=this instanceof c,n=o(e),i=void 0===t;return!a&&n&&e.constructor===c&&i?e:r(p?new u(n&&!i?e.source:e,t):u((n=e instanceof c)?e.source:e,n&&i?l.call(e):t),a?this:d,c)};for(var g=function(e){e in c||i(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},h=s(u),b=0;h.length>b;)g(h[b++]);d.constructor=c,c.prototype=d,a(14)(n,"RegExp",c)}a(79)("RegExp")},177:function(e,t,a){var n=a(11),r=a(178).set;e.exports=function(e,t,a){var i,s=t.constructor;return s!==a&&"function"==typeof s&&(i=s.prototype)!==a.prototype&&n(i)&&r&&r(e,i),e}},178:function(e,t,a){var n=a(11),r=a(5),i=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(20)(Function.call,a(179).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return i(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:i}},179:function(e,t,a){var n=a(78),r=a(55),i=a(35),s=a(76),o=a(26),l=a(75),c=Object.getOwnPropertyDescriptor;t.f=a(18)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(a){}if(o(e,t))return r(!n.f.call(e,t),e[t])}},180:function(e,t,a){var n=a(77),r=a(56).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}}}]);
//# sourceMappingURL=2-91d08d47266a79c5f634.js.map