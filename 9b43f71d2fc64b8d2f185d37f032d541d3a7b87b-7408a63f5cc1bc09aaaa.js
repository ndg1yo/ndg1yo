/*! For license information please see 9b43f71d2fc64b8d2f185d37f032d541d3a7b87b-7408a63f5cc1bc09aaaa.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_try_ghost=self.webpackChunkgatsby_starter_try_ghost||[]).push([[966],{1410:function(t,e,a){var r;t=a.nmd(t),function(n){e&&e.nodeType,t&&t.nodeType;var i="object"==typeof a.g&&a.g;i.global!==i&&i.window!==i&&i.self;var o,s=2147483647,l=36,c=/^xn--/,h=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,f=String.fromCharCode;function d(t){throw RangeError(m[t])}function g(t,e){for(var a=t.length,r=[];a--;)r[a]=e(t[a]);return r}function y(t,e){var a=t.split("@"),r="";return a.length>1&&(r=a[0]+"@",t=a[1]),r+g((t=t.replace(u,".")).split("."),e).join(".")}function v(t){for(var e,a,r=[],n=0,i=t.length;n<i;)(e=t.charCodeAt(n++))>=55296&&e<=56319&&n<i?56320==(64512&(a=t.charCodeAt(n++)))?r.push(((1023&e)<<10)+(1023&a)+65536):(r.push(e),n--):r.push(e);return r}function b(t){return g(t,(function(t){var e="";return t>65535&&(e+=f((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=f(t)})).join("")}function w(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function E(t,e,a){var r=0;for(t=a?p(t/700):t>>1,t+=p(t/e);t>455;r+=l)t=p(t/35);return p(r+36*t/(t+38))}function O(t){var e,a,r,n,i,o,c,h,u,m,f,g=[],y=t.length,v=0,w=128,O=72;for((a=t.lastIndexOf("-"))<0&&(a=0),r=0;r<a;++r)t.charCodeAt(r)>=128&&d("not-basic"),g.push(t.charCodeAt(r));for(n=a>0?a+1:0;n<y;){for(i=v,o=1,c=l;n>=y&&d("invalid-input"),((h=(f=t.charCodeAt(n++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:l)>=l||h>p((s-v)/o))&&d("overflow"),v+=h*o,!(h<(u=c<=O?1:c>=O+26?26:c-O));c+=l)o>p(s/(m=l-u))&&d("overflow"),o*=m;O=E(v-i,e=g.length+1,0==i),p(v/e)>s-w&&d("overflow"),w+=p(v/e),v%=e,g.splice(v++,0,w)}return b(g)}function j(t){var e,a,r,n,i,o,c,h,u,m,g,y,b,O,j,x=[];for(y=(t=v(t)).length,e=128,a=0,i=72,o=0;o<y;++o)(g=t[o])<128&&x.push(f(g));for(r=n=x.length,n&&x.push("-");r<y;){for(c=s,o=0;o<y;++o)(g=t[o])>=e&&g<c&&(c=g);for(c-e>p((s-a)/(b=r+1))&&d("overflow"),a+=(c-e)*b,e=c,o=0;o<y;++o)if((g=t[o])<e&&++a>s&&d("overflow"),g==e){for(h=a,u=l;!(h<(m=u<=i?1:u>=i+26?26:u-i));u+=l)j=h-m,O=l-m,x.push(f(w(m+j%O,0))),h=p(j/O);x.push(f(w(h,0))),i=E(a,b,r==n),a=0,++r}++a,++e}return x.join("")}o={version:"1.3.2",ucs2:{decode:v,encode:b},decode:O,encode:j,toASCII:function(t){return y(t,(function(t){return h.test(t)?"xn--"+j(t):t}))},toUnicode:function(t){return y(t,(function(t){return c.test(t)?O(t.slice(4).toLowerCase()):t}))}},void 0===(r=function(){return o}.call(e,a,e,t))||(t.exports=r)}()},2595:function(t){"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,a,r,n){a=a||"&",r=r||"=";var i={};if("string"!=typeof t||0===t.length)return i;var o=/\+/g;t=t.split(a);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var l=t.length;s>0&&l>s&&(l=s);for(var c=0;c<l;++c){var h,u,m,p,f=t[c].replace(o,"%20"),d=f.indexOf(r);d>=0?(h=f.substr(0,d),u=f.substr(d+1)):(h=f,u=""),m=decodeURIComponent(h),p=decodeURIComponent(u),e(i,m)?Array.isArray(i[m])?i[m].push(p):i[m]=[i[m],p]:i[m]=p}return i}},404:function(t){"use strict";var e=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,a,r,n){return a=a||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map((function(n){var i=encodeURIComponent(e(n))+r;return Array.isArray(t[n])?t[n].map((function(t){return i+encodeURIComponent(e(t))})).join(a):i+encodeURIComponent(e(t[n]))})).join(a):n?encodeURIComponent(e(n))+r+encodeURIComponent(e(t)):""}},6825:function(t,e,a){"use strict";e.decode=e.parse=a(2595),e.encode=e.stringify=a(404)},3629:function(t,e,a){"use strict";var r=a(1410),n=a(1894);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){n.isString(t)&&(t=b(t));return t instanceof i?t.format():i.prototype.format.call(t)},e.Url=i;var o=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),h=["'"].concat(c),u=["%","/","?",";","#"].concat(h),m=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=a(6825);function b(t,e,a){if(t&&n.isObject(t)&&t instanceof i)return t;var r=new i;return r.parse(t,e,a),r}i.prototype.parse=function(t,e,a){if(!n.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t.indexOf("?"),s=-1!==i&&i<t.indexOf("#")?"?":"#",c=t.split(s);c[0]=c[0].replace(/\\/g,"/");var b=t=c.join(s);if(b=b.trim(),!a&&1===t.split("#").length){var w=l.exec(b);if(w)return this.path=b,this.href=b,this.pathname=w[1],w[2]?(this.search=w[2],this.query=e?v.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var E=o.exec(b);if(E){var O=(E=E[0]).toLowerCase();this.protocol=O,b=b.substr(E.length)}if(a||E||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var j="//"===b.substr(0,2);!j||E&&g[E]||(b=b.substr(2),this.slashes=!0)}if(!g[E]&&(j||E&&!y[E])){for(var x,A,_=-1,I=0;I<m.length;I++){-1!==(U=b.indexOf(m[I]))&&(-1===_||U<_)&&(_=U)}-1!==(A=-1===_?b.lastIndexOf("@"):b.lastIndexOf("@",_))&&(x=b.slice(0,A),b=b.slice(A+1),this.auth=decodeURIComponent(x)),_=-1;for(I=0;I<u.length;I++){var U;-1!==(U=b.indexOf(u[I]))&&(-1===_||U<_)&&(_=U)}-1===_&&(_=b.length),this.host=b.slice(0,_),b=b.slice(_),this.parseHost(),this.hostname=this.hostname||"";var S="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!S)for(var q=this.hostname.split(/\./),k=(I=0,q.length);I<k;I++){var C=q[I];if(C&&!C.match(p)){for(var R="",M=0,P=C.length;M<P;M++)C.charCodeAt(M)>127?R+="x":R+=C[M];if(!R.match(p)){var L=q.slice(0,I),N=q.slice(I+1),F=C.match(f);F&&(L.push(F[1]),N.unshift(F[2])),N.length&&(b="/"+N.join(".")+b),this.hostname=L.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),S||(this.hostname=r.toASCII(this.hostname));var T=this.port?":"+this.port:"",W=this.hostname||"";this.host=W+T,this.href+=this.host,S&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!d[O])for(I=0,k=h.length;I<k;I++){var z=h[I];if(-1!==b.indexOf(z)){var D=encodeURIComponent(z);D===z&&(D=escape(z)),b=b.split(z).join(D)}}var G=b.indexOf("#");-1!==G&&(this.hash=b.substr(G),b=b.slice(0,G));var J=b.indexOf("?");if(-1!==J?(this.search=b.substr(J),this.query=b.substr(J+1),e&&(this.query=v.parse(this.query)),b=b.slice(0,J)):e&&(this.search="",this.query={}),b&&(this.pathname=b),y[O]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){T=this.pathname||"";var Q=this.search||"";this.path=T+Q}return this.href=this.format(),this},i.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",a=this.pathname||"",r=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&n.isObject(this.query)&&Object.keys(this.query).length&&(o=v.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||y[e])&&!1!==i?(i="//"+(i||""),a&&"/"!==a.charAt(0)&&(a="/"+a)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),e+i+(a=a.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(s=s.replace("#","%23"))+r},i.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},i.prototype.resolveObject=function(t){if(n.isString(t)){var e=new i;e.parse(t,!1,!0),t=e}for(var a=new i,r=Object.keys(this),o=0;o<r.length;o++){var s=r[o];a[s]=this[s]}if(a.hash=t.hash,""===t.href)return a.href=a.format(),a;if(t.slashes&&!t.protocol){for(var l=Object.keys(t),c=0;c<l.length;c++){var h=l[c];"protocol"!==h&&(a[h]=t[h])}return y[a.protocol]&&a.hostname&&!a.pathname&&(a.path=a.pathname="/"),a.href=a.format(),a}if(t.protocol&&t.protocol!==a.protocol){if(!y[t.protocol]){for(var u=Object.keys(t),m=0;m<u.length;m++){var p=u[m];a[p]=t[p]}return a.href=a.format(),a}if(a.protocol=t.protocol,t.host||g[t.protocol])a.pathname=t.pathname;else{for(var f=(t.pathname||"").split("/");f.length&&!(t.host=f.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),a.pathname=f.join("/")}if(a.search=t.search,a.query=t.query,a.host=t.host||"",a.auth=t.auth,a.hostname=t.hostname||t.host,a.port=t.port,a.pathname||a.search){var d=a.pathname||"",v=a.search||"";a.path=d+v}return a.slashes=a.slashes||t.slashes,a.href=a.format(),a}var b=a.pathname&&"/"===a.pathname.charAt(0),w=t.host||t.pathname&&"/"===t.pathname.charAt(0),E=w||b||a.host&&t.pathname,O=E,j=a.pathname&&a.pathname.split("/")||[],x=(f=t.pathname&&t.pathname.split("/")||[],a.protocol&&!y[a.protocol]);if(x&&(a.hostname="",a.port=null,a.host&&(""===j[0]?j[0]=a.host:j.unshift(a.host)),a.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===f[0]?f[0]=t.host:f.unshift(t.host)),t.host=null),E=E&&(""===f[0]||""===j[0])),w)a.host=t.host||""===t.host?t.host:a.host,a.hostname=t.hostname||""===t.hostname?t.hostname:a.hostname,a.search=t.search,a.query=t.query,j=f;else if(f.length)j||(j=[]),j.pop(),j=j.concat(f),a.search=t.search,a.query=t.query;else if(!n.isNullOrUndefined(t.search)){if(x)a.hostname=a.host=j.shift(),(S=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=S.shift(),a.host=a.hostname=S.shift());return a.search=t.search,a.query=t.query,n.isNull(a.pathname)&&n.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=a.format(),a}if(!j.length)return a.pathname=null,a.search?a.path="/"+a.search:a.path=null,a.href=a.format(),a;for(var A=j.slice(-1)[0],_=(a.host||t.host||j.length>1)&&("."===A||".."===A)||""===A,I=0,U=j.length;U>=0;U--)"."===(A=j[U])?j.splice(U,1):".."===A?(j.splice(U,1),I++):I&&(j.splice(U,1),I--);if(!E&&!O)for(;I--;I)j.unshift("..");!E||""===j[0]||j[0]&&"/"===j[0].charAt(0)||j.unshift(""),_&&"/"!==j.join("/").substr(-1)&&j.push("");var S,q=""===j[0]||j[0]&&"/"===j[0].charAt(0);x&&(a.hostname=a.host=q?"":j.length?j.shift():"",(S=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=S.shift(),a.host=a.hostname=S.shift()));return(E=E||a.host&&j.length)&&!q&&j.unshift(""),j.length?a.pathname=j.join("/"):(a.pathname=null,a.path=null),n.isNull(a.pathname)&&n.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.auth=t.auth||a.auth,a.slashes=a.slashes||t.slashes,a.href=a.format(),a},i.prototype.parseHost=function(){var t=this.host,e=s.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},1894:function(t){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},7208:function(t,e,a){"use strict";a.d(e,{U:function(){return U}});var r=a(5007),n=a(5444),i=a(3629),o=a(5161),s=a.n(o),l=a(5414),c=a(8611),h=a.n(c),u=a(9693),m=a.n(u),p=a(5697),f=a.n(p),d=function(t){var e=[];return e.push(t.website?t.website:null,t.twitter?"https://twitter.com/"+t.twitter.replace(/^@/,"")+"/":null,t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null),e=m()(e),{name:t.name||null,sameAsArray:e.length?'["'+h()(e,'", "')+'"]':null,image:t.profileImageSharp,facebookUrl:t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null}};d.defaultProps={fetchAuthorData:!1},d.PropTypes={primaryAuthor:f().shape({name:f().string.isRequired,profile_image:f().string,website:f().string,twitter:f().string,facebook:f().string,profileImageSharp:f().object}).isRequired};var g=d,y=function(t,e,a){var r=t.find((function(t){return t&&t.publicURL&&t.publicURL.length>0}));return void 0===r&&(r={publicURL:e,imageMeta:{width:1280,height:640}}),null===r.publicURL?{imageMeta:{}}:(r.url=i.resolve(a,r.publicURL),r)};y.PropTypes={sharpImages:f().arrayOf(f().object).isRequired,fallbackUrl:f().string,siteUrl:f().string.isRequired};var v=y,b=function(t){var e=t.image;return e&&e.url?r.default.createElement(l.q,null,r.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.default.createElement("meta",{name:"twitter:image",content:e.url}),r.default.createElement("meta",{property:"og:image",content:e.url}),r.default.createElement("meta",{property:"og:image:width",content:e.imageMeta.width}),r.default.createElement("meta",{property:"og:image:height",content:e.imageMeta.height})):null},w=a(2377),E=function(t){var e=t.data,a=t.settings,n=t.canonical,o=e,c=a.site.siteMetadata,h=(a=a.allGhostSettings.edges[0].node).logoSharp&&a.logoSharp.publicURL,u=g(o.primary_author),m=s()((0,w.pJ)(o,{visibility:"public",fn:function(t){return t}}),"name"),p=m[0]||"",f=[o.featureImageSharp,a.coverImageSharp],d=o.feature_image||a.cover_image,y=v(f,d,c.siteUrl),E=a.logo||c.siteIcon?i.resolve(c.siteUrl,a.logo||c.siteIcon):null,O=h||E,j={"@context":"https://schema.org/","@type":"Article",author:{"@type":"Person",name:u.name,image:u.image?u.image:void 0,sameAs:u.sameAsArray?u.sameAsArray:void 0},keywords:m.length?m.join(", "):void 0,headline:o.meta_title||o.title,url:n,datePublished:o.published_at,dateModified:o.updated_at,image:y?{"@type":"ImageObject",url:y.url,width:y.imageMeta.width,height:y.imageMeta.height}:void 0,publisher:{"@type":"Organization",name:a.title,logo:{"@type":"ImageObject",url:O,width:60,height:60}},description:o.meta_description||o.excerpt,mainEntityOfPage:{"@type":"WebPage","@id":c.siteUrl}};return r.default.createElement(r.default.Fragment,null,r.default.createElement(l.q,null,r.default.createElement("title",null,o.meta_title||o.title),r.default.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),r.default.createElement("link",{rel:"canonical",href:n}),r.default.createElement("meta",{property:"og:site_name",content:a.title}),r.default.createElement("meta",{property:"og:type",content:"article"}),r.default.createElement("meta",{property:"og:title",content:o.og_title||o.meta_title||o.title}),r.default.createElement("meta",{property:"og:description",content:o.og_description||o.excerpt||o.meta_description}),r.default.createElement("meta",{property:"og:url",content:n}),r.default.createElement("meta",{property:"article:published_time",content:o.published_at}),r.default.createElement("meta",{property:"article:modified_time",content:o.updated_at}),m.map((function(t,e){return r.default.createElement("meta",{property:"article:tag",content:t,key:e})})),u.facebookUrl&&r.default.createElement("meta",{property:"article:author",content:u.facebookUrl}),r.default.createElement("meta",{name:"twitter:title",content:o.twitter_title||o.meta_title||o.title}),r.default.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),r.default.createElement("meta",{name:"twitter:url",content:n}),r.default.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.default.createElement("meta",{name:"twitter:data1",content:u.name}),p&&r.default.createElement("meta",{name:"twitter:label2",content:"Filed under"}),p&&r.default.createElement("meta",{name:"twitter:data2",content:p}),a.twitter&&r.default.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&r.default.createElement("meta",{name:"twitter:creator",content:a.twitter}),r.default.createElement("script",{type:"application/ld+json"},JSON.stringify(j,void 0,4))),r.default.createElement(b,{image:y}))},O=function(t){return r.default.createElement(n.StaticQuery,{query:"1272700106",render:function(e){return r.default.createElement(E,Object.assign({settings:e},t))}})},j=function(t){var e=t.data,a=t.settings,n=t.canonical,o=t.title,s=t.description,c=t.image,h=t.type,u=a.site.siteMetadata,m=(a=a.allGhostSettings.edges[0].node).logoSharp&&a.logoSharp.publicURL,p=a.logo||u.siteIcon?i.resolve(u.siteUrl,a.logo||u.siteIcon):null,f=m||p,d=[c,e.featureImageSharp,a.coverImageSharp],g=e.feature_image||a.cover_image,y=v(d,g,u.siteUrl);s=s||e.meta_description||e.description||u.siteDescriptionMeta||a.description,o=(o||e.meta_title||e.name||e.title)+" - "+a.title;var w={"@context":"https://schema.org/","@type":h,url:n,image:y?{"@type":"ImageObject",url:y.url,width:y.imageMeta.width,height:y.imageMeta.height}:void 0,publisher:{"@type":"Organization",name:a.title,logo:{"@type":"ImageObject",url:f,width:60,height:60}},mainEntityOfPage:{"@type":"WebPage","@id":u.siteUrl},description:s};return r.default.createElement(r.default.Fragment,null,r.default.createElement(l.q,null,r.default.createElement("title",null,o),r.default.createElement("meta",{name:"description",content:s}),r.default.createElement("link",{rel:"canonical",href:n}),r.default.createElement("meta",{property:"og:site_name",content:a.title}),r.default.createElement("meta",{property:"og:type",content:"website"}),r.default.createElement("meta",{property:"og:title",content:o}),r.default.createElement("meta",{property:"og:description",content:s}),r.default.createElement("meta",{property:"og:url",content:n}),r.default.createElement("meta",{name:"twitter:title",content:o}),r.default.createElement("meta",{name:"twitter:description",content:s}),r.default.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&r.default.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&r.default.createElement("meta",{name:"twitter:creator",content:a.twitter}),r.default.createElement("script",{type:"application/ld+json"},JSON.stringify(w,void 0,4))),r.default.createElement(b,{image:y}))},x=function(t){return r.default.createElement(n.StaticQuery,{query:"3052966952",render:function(e){return r.default.createElement(j,Object.assign({settings:e},t))}})},A=function(t){var e=t.data,a=t.settings,n=t.canonical,i=a.site.siteMetadata;a=a.allGhostSettings.edges[0].node;var o=g(e),s=[o.image,e.coverImageSharp,a.coverImageSharp],c=v(s,a.cover_image,i.siteUrl),h=e.name+" - "+a.title,u=e.bio||i.siteDescriptionMeta||a.description,m={"@context":"https://schema.org/","@type":"Person",name:e.name,sameAs:o.sameAsArray?o.sameAsArray:void 0,url:n,image:c?{"@type":"ImageObject",url:c.url,width:c.imageMeta.width,height:c.imageMeta.height}:void 0,mainEntityOfPage:{"@type":"WebPage","@id":i.siteUrl},description:u};return r.default.createElement(r.default.Fragment,null,r.default.createElement(l.q,null,r.default.createElement("title",null,h),r.default.createElement("meta",{name:"description",content:u}),r.default.createElement("link",{rel:"canonical",href:n}),r.default.createElement("meta",{property:"og:site_name",content:a.title}),r.default.createElement("meta",{property:"og:type",content:"profile"}),r.default.createElement("meta",{property:"og:title",content:h}),r.default.createElement("meta",{property:"og:description",content:u}),r.default.createElement("meta",{property:"og:url",content:n}),r.default.createElement("meta",{name:"twitter:title",content:h}),r.default.createElement("meta",{name:"twitter:description",content:u}),r.default.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&r.default.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&r.default.createElement("meta",{name:"twitter:creator",content:a.twitter}),r.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m,void 0,4))),r.default.createElement(b,{image:c}))},_=function(t){return r.default.createElement(n.StaticQuery,{query:"1676991999",render:function(e){return r.default.createElement(A,Object.assign({settings:e},t))}})},I=function(t){var e=t.data,a=t.settings,n=t.title,o=t.description,s=t.image,l=t.location,c=a.site.siteMetadata,h=i.resolve(c.siteUrl,l.pathname),u=e.ghostPost,m=e.ghostTag,p=e.ghostAuthor,f=e.ghostPage;return a=a.allGhostSettings.edges[0].node,u?r.default.createElement(O,{data:u,canonical:h}):m?r.default.createElement(x,{data:m,canonical:h,type:"Series"}):p?r.default.createElement(_,{data:p,canonical:h}):f?r.default.createElement(x,{data:f,canonical:h,type:"WebSite"}):(n=n||c.siteTitleMeta||a.title,o=o||c.siteDescriptionMeta||a.description,r.default.createElement(x,{data:{},canonical:h,title:n,description:o,image:s,type:"WebSite"}))};I.defaultProps={data:{}};var U=function(t){return r.default.createElement(n.StaticQuery,{query:"4156497161",render:function(e){return r.default.createElement(I,Object.assign({settings:e},t))}})}},9199:function(t,e,a){var r=a(9881),n=a(8612);t.exports=function(t,e){var a=-1,i=n(t)?Array(t.length):[];return r(t,(function(t,r,n){i[++a]=e(t,r,n)})),i}},9693:function(t){t.exports=function(t){for(var e=-1,a=null==t?0:t.length,r=0,n=[];++e<a;){var i=t[e];i&&(n[r++]=i)}return n}},8611:function(t){var e=Array.prototype.join;t.exports=function(t,a){return null==t?"":e.call(t,a)}},5161:function(t,e,a){var r=a(9932),n=a(7206),i=a(9199),o=a(1469);t.exports=function(t,e){return(o(t)?r:i)(t,n(e,3))}}}]);
//# sourceMappingURL=9b43f71d2fc64b8d2f185d37f032d541d3a7b87b-7408a63f5cc1bc09aaaa.js.map