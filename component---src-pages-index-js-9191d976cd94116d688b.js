(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),o=n(a("VbXa")),s=n(a("8OQS")),l=n(a("pVnL")),c=n(a("q1tI")),d=n(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return A(t||a).src},A=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),p=function(e){var t=u(e),a=f(t);return h[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,y=E&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function I(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+o+s+a+n+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(R,(0,l.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},R=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},f,{onLoad:o,onError:d,ref:t,loading:u,draggable:m,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&y&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||E&&(g||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,p=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,b=e.itemProp,w=e.loading,I=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:B?1:0,transition:j?"opacity "+E+"ms":"none"},s),z="boolean"==typeof g?"lightgray":g,P={transitionDelay:E+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&P,{},s,{},m),Q={title:t,alt:this.state.isVisible?"":a,style:x,className:f,itemProp:b};if(h){var C=h,V=A(h);return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),z&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&P)}),V.base64&&c.default.createElement(k,{src:V.base64,spreadProps:Q,imageVariants:C,generateSources:N}),V.tracedSVG&&c.default.createElement(k,{src:V.tracedSVG,spreadProps:Q,imageVariants:C,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(C),c.default.createElement(R,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:C}))}}))}if(p){var G=p,T=A(p),Y=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete Y.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},z&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},j&&P)}),T.base64&&c.default.createElement(k,{src:T.base64,spreadProps:Q,imageVariants:G,generateSources:N}),T.tracedSVG&&c.default.createElement(k,{src:T.tracedSVG,spreadProps:Q,imageVariants:G,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(G),c.default.createElement(R,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:G}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});j.propTypes={resolutions:O,sizes:z,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=j;t.default=P},INYr:function(e,t,a){"use strict";var n=a("XKFU"),r=a("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},JliM:function(e,t,a){e.exports=a.p+"static/breanne-5785c07acc52391eac01e8e7710cb27c.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("Bl7J"),s=(a("l4SK"),a("9eSz"),a("vrFN")),l=a("JliM"),c=a.n(l),d=(a("pxef"),function(e){var t=e.src;return r.a.createElement("figure",{className:"image"},r.a.createElement("img",{className:"is-rounded",src:t}))}),u=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title"},e.title),r.a.createElement("p",{className:"subtitle"},e.body)),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("p",{className:"card-footer-item"},r.a.createElement("span",null,r.a.createElement(i.Link,{to:"/learn/"},"Learn more")))))},m=function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"field has-addons"},r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",type:"text",placeholder:"Email"})),r.a.createElement("div",{class:"control"},r.a.createElement("a",{class:"button is-info"},"Submit"))))},f=[{title:"Individuality",body:r.a.createElement("div",null,r.a.createElement("p",null," Besides a few key components of nutrition, there simply is not enough understanding of the human body at first glance to make any assumptions about what is going to work best for your individual goals -- so we don’t try to."),r.a.createElement("p",null,"Every program is customized to fit where you want to go, your preferences today, your constitution, your lifestyle."),r.a.createElement("p",null,"There is no demonization of a particular diet, nor lifting up one above all others. This program is meant to get you on level footing so that you can make clear and conscious nutrition choices for yourself moving forward for years to come."))},{title:"Sustainability",body:r.a.createElement("div",null,r.a.createElement("p",null,"Once you are making choices for yourself, it’s time to consider the impact that you have on the world around you. Our food choices truly do only impact ourselves and our families, but are tied to a much larger picture. Food connects cultures alike and different so getting to connected to the story of our food and our impact is empowering."),r.a.createElement("p",null,"If we are going to look to long-term healthy habits, we have to consider are the choices scalable and accessible to all in years to come? I hope you feel a sense of proud responsibility coming out of this program and moving forward!"))},{title:"Movement",body:r.a.createElement("div",null,r.a.createElement("p",null,"For the heart, soul and physical form, our bodies must move. With extensive background in human movement, I believe some consistent form of movement that you love in the most important starting place. I will help you decipher what that might be, provide free resources and recommendations and build movement into your nutrition plan."),r.a.createElement("p",null,"If you are interested in diving into the practice of yoga, I’m also happy to take those teachings further. Group session classes or private lessons are available any time including the study beyond Asana (physical practices)"))},{title:"Spirituality",body:r.a.createElement("div",null,r.a.createElement("p",null,"In many ways synonymous with purpose, there is an element in all Four Corners programming regarding connecting to something greater than ourselves. In moments of fear, it is hope. In moments of uncertainty, it is faith. Whatever the body or tradition that you believe in, know that we are infinite beings with the capability to start moving our lives toward our dreams."),r.a.createElement("p",null,"This work is so much more than food choices, workouts or yoga poses. It is about becoming who you were meant to be in this lifetime and realizing full potential."))}],A=function(){return r.a.createElement("div",{className:"section contact-form"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"For more information and a free consultation, subscribe below!"),r.a.createElement(m,null)))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"section about-me"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(d,{src:c.a})),r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"title"},"Meet Bre"),r.a.createElement("p",null,"Bre(anne) Flynn is first and foremost a student of human wellness and through personal experience and formalized teaching, is here to help people achieve their highest potential. She believes that the world is a much better place when everyone is feeling healthy, safe and capable."),r.a.createElement("p",null,"Breanne is a 200-hour Registered Yoga Teacher, and Precision Nutrition Level 1 Coach and has a minor in Dance from Gonzaga University. Her degree in Political Science and work for many years has had an emphasis on food and nutrition policy and the connection of our individual choices to a healthy and happy planet. She has seen firsthand the connection of movement, food, spirituality and purpose to happiness and prosperity."),r.a.createElement(i.Link,{to:"/about/"},"Click for more ->"))))),r.a.createElement("div",{className:"section contact-form"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Pricing"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("b",null,"What you receive"),r.a.createElement("ul",null,r.a.createElement("li",null,"- 30 minute check in calls once a week moving forward"),r.a.createElement("li",null,"- Customized resources based on individual needs"),r.a.createElement("li",null,"- Access to Precision Nutrition materials"),r.a.createElement("li",null,"- Online quick responses and support"),r.a.createElement("li",null,"- New Four Corners content as it becomes available"))),r.a.createElement("div",{className:"column"},r.a.createElement("b",null,"Pricing structure:"),r.a.createElement("ul",null,r.a.createElement("li",null,"1 month - $75"),r.a.createElement("li",null,"2 month - $125"),r.a.createElement("li",null,"3 months - $150")))))),r.a.createElement(A,null),r.a.createElement("div",{className:"section four-corners"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"The Four Corners"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"column"},r.a.createElement(u,f[0])),r.a.createElement("div",{className:"column"},r.a.createElement(u,f[1]))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"column"},r.a.createElement(u,f[2])),r.a.createElement("div",{className:"column"},r.a.createElement(u,f[3])))))),r.a.createElement(A,null))}},l4SK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABcKqXPNIf/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEDExESFP/aAAgBAQABBQLom1lukVTMjGf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGI/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEQISIxQv/aAAgBAQAGPwLmjNos1P8A/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBYf/aAAgBAQABPyFNcI8OyiKBGzRc0cR/CDZ//9oADAMBAAIAAwAAABDM3//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QD//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxDVtb//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhUWGBkf/aAAgBAQABPxAoKZlrr4RPMigBQ+EeqHRgKnQ4mF0eQG1E/9k=","aspectRatio":1.5005861664712778,"src":"/static/d11b022256fe0ed3fb644729d04e1843/41a1b/breanne2.jpg","srcSet":"/static/d11b022256fe0ed3fb644729d04e1843/41a1b/breanne2.jpg 1280w","sizes":"(max-width: 1280px) 100vw, 1280px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-9191d976cd94116d688b.js.map