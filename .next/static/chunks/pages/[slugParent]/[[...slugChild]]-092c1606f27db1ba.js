(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{5221:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slugParent]/[[...slugChild]]",function(){return n(7097)}])},1020:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1527),i=n(196),c=n(4194),a=n.n(c);let s=e=>{let{children:t,className:n}=e,c=new i.Z(a().content);return c.addIf(n,n),(0,r.jsx)("div",{className:c.toString(),children:t})};var l=s},5176:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(1527),i=n(196),c=n(2825),a=n.n(c);let s=e=>{let{children:t,className:n,width:c="100%",height:s="auto",src:l,alt:o,srcSet:d,sizes:u,dangerouslySetInnerHTML:h}=e,p=new i.Z(a().image);return p.addIf(n,n),(0,r.jsxs)("figure",{className:p.toString(),children:[(0,r.jsx)("div",{className:a().featuredImageImg,children:(0,r.jsx)("img",{width:c,height:s,src:l,alt:o||"",srcSet:d,sizes:u})}),t&&(0,r.jsx)("figcaption",{children:t}),h&&(0,r.jsx)("figcaption",{dangerouslySetInnerHTML:{__html:h}})]})};var l=n(7043),o=n.n(l);let d=e=>{let{className:t,alt:n,...c}=e,a=new i.Z(o().featuredImage);return a.addIf(t,t),(0,r.jsx)(s,{className:a,alt:n,...c})};var u=d},3636:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1527),i=n(9810),c=n(6560),a=n.n(c);let s=e=>{let{children:t}=e;return(0,r.jsx)("header",{className:a().header,children:(0,r.jsx)(i.Z,{children:t})})};var l=s},3913:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(959),i=n(2264),c=n(6202),a=n(2771);function s(e){let{metadata:t}=e,{homepage:n,metadata:s}=(0,r.useContext)(c.DN),l=(0,i.useRouter)(),o=(0,a.z0)(s,t,{homepage:n,router:l});return{metadata:o}}},1293:function(e,t,n){"use strict";n.d(t,{MV:function(){return d},PA:function(){return u},Yh:function(){return h},dX:function(){return o}});var r=n(1527),i=n(4450),c=n(8181),a=n(8475),s=n(499),l=n(4147);function o(e){let{post:t={},siteTitle:n=""}=e,{homepage:c="",faviconPath:s="/favicon.ico"}=l,{title:o,slug:d,excerpt:u,date:h,author:p,categories:g,modified:f,featuredImage:m}=t,x=(0,a.F3)(d),_=!!h&&new Date(h),j=!!f&&new Date(f),y={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"".concat(c).concat(x)},headline:o,image:[null==m?void 0:m.sourceUrl],datePublished:_?_.toISOString():"",dateModified:j?j.toISOString():_.toISOString(),description:u,keywords:[g.map(e=>{let{name:t}=e;return"".concat(t)}).join(", ")],copyrightYear:_?_.getFullYear():"",author:{"@type":"Person",name:null==p?void 0:p.name},publisher:{"@type":"Organization",name:n,logo:{"@type":"ImageObject",url:"".concat(c).concat(s)}}};return(0,r.jsx)(i.q,{encodeSpecialCharacters:!1,children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(y)})})}function d(e){let{siteTitle:t=""}=e,{homepage:n=""}=l,c={"@context":"https://schema.org","@type":"WebSite",name:t,url:n,copyrightYear:new Date().getFullYear(),potentialAction:{"@type":"SearchAction",target:"".concat(n,"/search/?q={search_term_string}"),"query-input":"required name=search_term_string"}};return(0,r.jsx)(i.q,{encodeSpecialCharacters:!1,children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(c)})})}function u(e){let{title:t="",description:n="",siteTitle:c="",slug:a=""}=e,{homepage:o=""}=l,d=(0,s.yA)(a),u={"@context":"http://schema.org","@type":"WebPage",name:t,description:n,url:"".concat(o).concat(d),publisher:{"@type":"ProfilePage",name:c}};return(0,r.jsx)(i.q,{encodeSpecialCharacters:!1,children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(u)})})}function h(e){let{author:t={}}=e,{homepage:n=""}=l,{name:a,avatar:s,description:o}=t,d=(0,c.h$)(a),u={"@context":"https://schema.org","@type":"Person",name:a,image:null==s?void 0:s.url,url:"".concat(n).concat(d),description:o};return(0,r.jsx)(i.q,{encodeSpecialCharacters:!1,children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(u)})})}},7097:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return v}});var r=n(1527),i=n(8873),c=n.n(i),a=n(4450),s=n(1293),l=n(2771),o=n(6202),d=n(3913),u=n(7992),h=n(3636),p=n(1020),g=n(7986),f=n(9810),m=n(5176),x=n(196),_=n(5884),j=n.n(_);let y=e=>{let{className:t,breadcrumbs:n}=e,i=new x.Z(j().breadcrumbs);return i.addIf(t,t),(0,r.jsx)("ul",{className:i.toString(),children:n.map(e=>{let{id:t,title:n,uri:i}=e;return(0,r.jsxs)("li",{children:[!i&&n,i&&(0,r.jsx)(c(),{href:i,children:n})]},t)})})};var S=n(7867),b=n.n(S),N=!0;function v(e){var t;let{page:n,breadcrumbs:i}=e,{title:x,metaTitle:_,description:j,slug:S,content:N,featuredImage:v,children:I}=n,{metadata:Z={}}=(0,o.ZP)(),{metadata:w}=(0,d.Z)({metadata:{...n,title:_,description:j||(null===(t=n.og)||void 0===t?void 0:t.description)||"Read more about ".concat(x)}});w.title="".concat(x," - ").concat(Z.title),w.og.title=w.title,w.twitter.title=w.title;let P=Array.isArray(I)&&I.length>0,C=Array.isArray(i)&&i.length>0,O=(0,l.iB)(w);return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(a.q,{...O}),(0,r.jsx)(s.PA,{title:w.title,description:w.description,siteTitle:Z.title,slug:S}),(0,r.jsxs)(h.Z,{children:[C&&(0,r.jsx)(y,{breadcrumbs:i}),v&&(0,r.jsx)(m.Z,{...v,src:v.sourceUrl,dangerouslySetInnerHTML:v.caption}),(0,r.jsx)("h1",{className:b().title,children:x})]}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(g.Z,{children:(0,r.jsx)(f.Z,{children:(0,r.jsx)("div",{className:b().content,dangerouslySetInnerHTML:{__html:N}})})}),P&&(0,r.jsx)(g.Z,{className:b().sectionChildren,children:(0,r.jsx)(f.Z,{children:(0,r.jsxs)("aside",{children:[(0,r.jsx)("p",{className:b().childrenHeader,children:(0,r.jsx)("strong",{children:x})}),(0,r.jsx)("ul",{children:I.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:e.uri,children:e.title})},e.id))})]})})})]})]})}},5884:function(e){e.exports={breadcrumbs:"Breadcrumbs_breadcrumbs__uFbGd"}},4194:function(e){e.exports={content:"Content_content__HI96t"}},7043:function(e){e.exports={featuredImage:"FeaturedImage_featuredImage__bheWa"}},6560:function(e){e.exports={container:"Header_container__FGbDi",header:"Header_header__NLhag"}},2825:function(e){e.exports={image:"Image_image__1H4C3"}},7867:function(e){e.exports={sectionChildren:"Page_sectionChildren__kMFY0",childrenHeader:"Page_childrenHeader__fMEOW"}}},function(e){e.O(0,[219,64,992,774,888,179],function(){return e(e.s=5221)}),_N_E=e.O()}]);