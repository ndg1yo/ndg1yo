(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+QuD":function(e,t,a){"use strict";a.r(t);var l=a("FdF9"),n=a("Wbzz"),c=a("qhky"),r=a("reRv"),o=a("8FYl"),s=a("5mdY"),i=a("mU4C"),m=a("IJoS"),d=a("dI71"),u=a("KQm4");function f(e,t){var a,n=new Set(Object.keys(e).concat(Object.keys(t)));return 0!==(a=[]).concat.apply(a,Object(u.a)(n)).filter((function(a){if("object"==typeof e[a]){if(f(e[a],t[a]))return!0}else if(e[a]!==t[a]&&(n=e[a],!(l.default.isValidElement(n)||Array.isArray(n)&&n.some((function(e){return l.default.isValidElement(e)})))))return!0;var n})).length}var p=function(e){function t(t){var a;return(a=e.call(this,t)||this).embedUrl="//social9.com/comments/js/commento.js",a}Object(d.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadInstance()},a.shouldComponentUpdate=function(e){return this.props!==e&&f(this.props,e)},a.componentDidUpdate=function(){this.loadInstance()},a.componentWillUnmount=function(){this.cleanInstance()},a.loadInstance=function(){var e,t,a,l;"undefined"!=typeof window&&window.document&&(window.document.getElementById("social9Comments")?this.reloadInstance():(e=this.embedUrl,t="social9Comments",a=window.document.body,(l=window.document.createElement("script")).async=!0,l.src=e,l.id=t,a.appendChild(l)))},a.reloadInstance=function(){window&&window.S9COMMENTS&&window.S9COMMENTS.reset({reload:!0})},a.cleanInstance=function(){var e,t,a;e="social9Comments",t=window.document.body,(a=window.document.getElementById(e))&&t.removeChild(a);try{delete window.S9COMMENTS}catch(n){window.S9COMMENTS=void 0}var l=window.document.getElementById("s9comments");if(l)for(;l.hasChildNodes();)l.removeChild(l.firstChild)},a.render=function(){return l.default.createElement("div",{id:"s9comments"})},t}(l.default.Component),h=a("NeQF"),y=a("NHp1"),E=a("vtQi");t.default=function(e){var t=e.data,a=e.location,d=e.pageContext,u=Object(s.a)().basePath,f=Object(i.a)(Object(i.b)()),g=t.ghostPost,b=t.prev,w=t.next,v=t.allGhostPost.edges,N=Object(r.a)(g).replace("min read",f("MIN_READ")),I=g.featureImageSharp&&g.featureImageSharp.publicURL||g.feature_image,C=g.featureImageSharp&&g.featureImageSharp.childImageSharp&&g.featureImageSharp.childImageSharp.fluid,O=Object(E.b)({tags:g.tags,isFeatured:I,isImage:I&&!0}),S=d.primaryTagCount,j=g.childHtmlRehype&&g.childHtmlRehype.tableOfContents||[],P=g.childHtmlRehype&&g.childHtmlRehype.htmlAst,k=g.childHtmlRehype&&g.childHtmlRehype.html;return v.forEach((function(e){var t=e.node;return t.collectionPath=d.collectionPaths[t.id]})),b&&(b.collectionPath=d.collectionPaths[b.id]),w&&(w.collectionPath=d.collectionPaths[w.id]),l.default.createElement(l.default.Fragment,null,l.default.createElement(y.a,{data:t,location:a,type:"article"}),l.default.createElement(c.a,null,l.default.createElement("style",{type:"text/css"},""+g.codeinjection_styles)),l.default.createElement(h.d,{throttle:300,isPost:!0,activeClass:"nav-post-title-active",render:function(e){return l.default.createElement(h.c,{render:function(t){return l.default.createElement(m.m,{isPost:!0,sticky:e,overlay:t,header:l.default.createElement(m.i,{sticky:e,title:g.title,overlay:t}),previewPosts:l.default.createElement(m.s,{primaryTag:g.primary_tag,primaryTagCount:S,posts:v,prev:b,next:w})},l.default.createElement("div",{className:"inner"},l.default.createElement("article",{className:"post-full "+O},l.default.createElement("header",{className:"post-full-header"},g.primary_tag&&l.default.createElement("section",{className:"post-full-tags"},l.default.createElement(n.Link,{to:Object(o.resolveUrl)(u,"/",g.primary_tag.slug,g.primary_tag.url)},g.primary_tag.name)),l.default.createElement("h1",{ref:e&&e.anchorRef,className:"post-full-title"},g.title),g.custom_excerpt&&l.default.createElement("p",{className:"post-full-custom-excerpt"},g.custom_excerpt),l.default.createElement("div",{className:"post-full-byline"},l.default.createElement("section",{className:"post-full-byline-content"},l.default.createElement(m.a,{authors:g.authors,isPost:!0}),l.default.createElement("section",{className:"post-full-byline-meta"},l.default.createElement("h4",{className:"author-name"},g.authors.map((function(e,t){return l.default.createElement(l.default.Fragment,null,t>0?", ":"",l.default.createElement(n.Link,{key:t,to:Object(o.resolveUrl)(u,"/",e.slug,e.url)},e.name))}))),l.default.createElement("div",{className:"byline-meta-content"},l.default.createElement("time",{className:"byline-meta-date",dateTime:g.published_at},g.published_at_pretty," "),l.default.createElement("span",{className:"byline-reading-time"},l.default.createElement("span",{className:"bull"},"•")," ",N)))))),I&&l.default.createElement("figure",{className:"post-full-image"},l.default.createElement(m.k,{fluidClass:"kg-card kg-code-card",fluidImg:C,srcImg:I,title:g.title})),l.default.createElement("section",{className:"post-full-content"},l.default.createElement(m.z,{toc:j,url:Object(o.resolveUrl)(u,d.collectionPaths[g.id],g.slug,g.url)}),l.default.createElement(m.t,{htmlAst:P,html:k||g.html})),l.default.createElement(p,null))))}})}}))}}}]);
//# sourceMappingURL=component---plugins-gatsby-theme-try-ghost-src-templates-post-js-74eed7c006aafe0bbe51.js.map