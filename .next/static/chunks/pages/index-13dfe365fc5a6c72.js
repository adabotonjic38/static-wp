(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7215)}])},4695:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(5893),r=a(6289),s=a(8437),i=a.n(s);let c=e=>{let{children:t}=e;return(0,n.jsx)("header",{className:i().header,children:(0,n.jsx)(r.Z,{children:t})})};var o=c},8093:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var n=a(5893),r=a(1664),s=a.n(r),i=a(9496),c=a(2797),o=a(8651),l=a(3918),d=a(9583),u=a(1563),h=a.n(u);let p={compactCategories:!0},_=e=>{let{className:t,author:a,date:r,categories:u,options:_=p,isSticky:x=!1}=e,g=new l.Z(h().metadata);g.addIf(t,t);let{compactCategories:m}=_;return(0,n.jsxs)("ul",{className:g.toString(),children:[a&&(0,n.jsx)("li",{className:h().metadataAuthor,children:(0,n.jsxs)("address",{children:[a.avatar&&(0,n.jsx)("img",{width:a.avatar.width,height:a.avatar.height,src:a.avatar.url,alt:"Author Avatar"}),"By"," ",(0,n.jsx)(s(),{href:(0,c.h$)(a.name),rel:"author",children:a.name})]})}),r&&(0,n.jsx)("li",{children:(0,n.jsx)("time",{pubdate:"pubdate",dateTime:r,children:(0,o.p)(r)})}),Array.isArray(u)&&u[0]&&(0,n.jsxs)("li",{className:h().metadataCategories,children:[m&&(0,n.jsxs)("p",{title:u.map(e=>{let{name:t}=e;return t}).join(", "),children:[(0,n.jsx)(s(),{href:(0,i.I5)(u[0].slug),children:u[0].name}),u.length>1&&" and more"]}),!m&&(0,n.jsx)("ul",{children:u.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:(0,i.I5)(e.slug),children:e.name})},e.slug))})]}),x&&(0,n.jsx)("li",{className:h().metadataSticky,children:(0,n.jsx)(d.ekl,{"aria-label":"Sticky Post"})})]})};var x=_},6301:function(e,t,a){"use strict";var n=a(5893),r=a(1664),s=a.n(r),i=a(4147),c=a(4593),o=a(5155),l=a(3854),d=a(3498),u=a.n(d);let{homepage:h=""}=i,p=e=>{let{pagesCount:t,currentPage:a,basePath:r,addCanonical:i=!0}=e,d="".concat(r,"/page/"),p=t>1&&a>1,_=t>1&&a<t,x=!1,g=!1,m=function(){let e=t,n=0;if(t>9){e=9;let r=Math.ceil(4.5),s=a>t-r;g=!s,a<=r||(x=!0,n=s?t-9:a-r)}return[...Array(e)].map((e,t)=>t+1+n)}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.q,{children:[i&&!p&&(0,n.jsx)("link",{rel:"canonical",href:"".concat(h).concat(r)}),p&&(0,n.jsx)("link",{rel:"prev",href:"".concat(h).concat(d).concat(a-1)}),_&&(0,n.jsx)("link",{rel:"next",href:"".concat(h).concat(d).concat(a+1)})]}),(0,n.jsxs)("nav",{className:u().nav,role:"navigation","aria-label":"Pagination Navigation",children:[p&&(0,n.jsxs)(s(),{className:u().prev,href:"".concat(d).concat(a-1),"aria-label":"Goto Previous Page",children:[(0,n.jsx)(o.Ugn,{})," Previous"]}),(0,n.jsxs)("ul",{className:u().pages,children:[x&&(0,n.jsx)("li",{className:u().dots,children:(0,n.jsx)(l.Ws$,{"aria-label":"Navigation to pages 1-".concat(m[0]-1," hidden")})}),m.map(e=>e===a?(0,n.jsx)("li",{children:(0,n.jsx)("span",{className:u().active,"aria-label":"Current Page, Page ".concat(e),"aria-current":"true",children:e})},e):(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"".concat(d).concat(e),"aria-label":"Goto Page ".concat(e),children:(0,n.jsx)("span",{children:e})})},e)),g&&(0,n.jsx)("li",{className:u().dots,children:(0,n.jsx)(l.Ws$,{"aria-label":"Navigation to pages ".concat(m[m.length-1]+1,"-").concat(t," hidden")})})]}),_&&(0,n.jsxs)(s(),{className:u().next,href:"".concat(d).concat(a+1),"aria-label":"Goto Next Page",children:["Next ",(0,n.jsx)(o.ULj,{})]})]})]})};t.Z=p},2994:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(5893),r=a(1664),s=a.n(r),i=a(1972),c=a(8093),o=a(9583),l=a(5196),d=a.n(l);let u=e=>{let{post:t,options:a={}}=e,{title:r,excerpt:l,slug:u,date:h,author:p,categories:_,isSticky:x=!1}=t,{excludeMetadata:g=[]}=a,m={};g.includes("author")||(m.author=p),g.includes("date")||(m.date=h),g.includes("categories")||(m.categories=_);let j=d().postCard;return x&&(j="".concat(j," ").concat(d().postCardSticky)),(0,n.jsxs)("div",{className:j,children:[x&&(0,n.jsx)(o.ekl,{"aria-label":"Sticky Post"}),(0,n.jsx)(s(),{href:(0,i.F3)(u),children:(0,n.jsx)("h3",{className:d().postCardTitle,dangerouslySetInnerHTML:{__html:r}})}),(0,n.jsx)(c.Z,{className:d().postCardMetadata,...m}),l&&(0,n.jsx)("div",{className:d().postCardContent,dangerouslySetInnerHTML:{__html:(0,i.$4)(l)}})]})};var h=u},8357:function(e,t,a){"use strict";a.d(t,{MV:function(){return d},PA:function(){return u},Yh:function(){return h},dX:function(){return l}});var n=a(5893),r=a(4593),s=a(2797),i=a(1972),c=a(7345),o=a(4147);function l(e){let{post:t={},siteTitle:a=""}=e,{homepage:s="",faviconPath:c="/favicon.ico"}=o,{title:l,slug:d,excerpt:u,date:h,author:p,categories:_,modified:x,featuredImage:g}=t,m=(0,i.F3)(d),j=!!h&&new Date(h),f=!!x&&new Date(x),y={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"".concat(s).concat(m)},headline:l,image:[null==g?void 0:g.sourceUrl],datePublished:j?j.toISOString():"",dateModified:f?f.toISOString():j.toISOString(),description:u,keywords:[_.map(e=>{let{name:t}=e;return"".concat(t)}).join(", ")],copyrightYear:j?j.getFullYear():"",author:{"@type":"Person",name:null==p?void 0:p.name},publisher:{"@type":"Organization",name:a,logo:{"@type":"ImageObject",url:"".concat(s).concat(c)}}};return(0,n.jsx)(r.q,{encodeSpecialCharacters:!1,children:(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify(y)})})}function d(e){let{siteTitle:t=""}=e,{homepage:a=""}=o,s={"@context":"https://schema.org","@type":"WebSite",name:t,url:a,copyrightYear:new Date().getFullYear(),potentialAction:{"@type":"SearchAction",target:"".concat(a,"/search/?q={search_term_string}"),"query-input":"required name=search_term_string"}};return(0,n.jsx)(r.q,{encodeSpecialCharacters:!1,children:(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify(s)})})}function u(e){let{title:t="",description:a="",siteTitle:s="",slug:i=""}=e,{homepage:l=""}=o,d=(0,c.yA)(i),u={"@context":"http://schema.org","@type":"WebPage",name:t,description:a,url:"".concat(l).concat(d),publisher:{"@type":"ProfilePage",name:s}};return(0,n.jsx)(r.q,{encodeSpecialCharacters:!1,children:(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify(u)})})}function h(e){let{author:t={}}=e,{homepage:a=""}=o,{name:i,avatar:c,description:l}=t,d=(0,s.h$)(i),u={"@context":"https://schema.org","@type":"Person",name:i,image:null==c?void 0:c.url,url:"".concat(a).concat(d),description:l};return(0,n.jsx)(r.q,{encodeSpecialCharacters:!1,children:(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify(u)})})}},7215:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return _},default:function(){return x}});var n=a(5893),r=a(1127),s=a(8357),i=a(1938),c=a(4695),o=a(7299),l=a(6289),d=a(2994),u=a(6301),h=a(5577),p=a.n(h),_=!0;function x(e){let{posts:t,pagination:a}=e,{metadata:h={}}=(0,r.ZP)(),{title:_,description:x}=h;return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.MV,{siteTitle:_}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("h1",{dangerouslySetInnerHTML:{__html:_}}),(0,n.jsx)("p",{className:p().description,dangerouslySetInnerHTML:{__html:x}})]}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h2",{className:"sr-only",children:"Posts"}),(0,n.jsx)("ul",{className:p().posts,children:t.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(d.Z,{post:e})},e.slug))}),a&&(0,n.jsx)(u.Z,{addCanonical:!1,currentPage:null==a?void 0:a.currentPage,pagesCount:null==a?void 0:a.pagesCount,basePath:null==a?void 0:a.basePath})]})})]})}},8437:function(e){e.exports={container:"Header_container__FGbDi",header:"Header_header__NLhag"}},1563:function(e){e.exports={metadata:"Metadata_metadata__DBDXc",metadataAuthor:"Metadata_metadataAuthor__ytsac",metadataCategories:"Metadata_metadataCategories__yOeC4",metadataSticky:"Metadata_metadataSticky__kmI14"}},3498:function(e){e.exports={nav:"Pagination_nav__6M51B",active:"Pagination_active__zxT4y",pages:"Pagination_pages__hZbzz",prev:"Pagination_prev__En2ts",dots:"Pagination_dots__B1lgQ"}},5196:function(e){e.exports={postCard:"PostCard_postCard__Jrp1b",postCardSticky:"PostCard_postCardSticky__o_Xl8",postCardTitle:"PostCard_postCardTitle__rhEZE",postCardContent:"PostCard_postCardContent__3GwQH",postCardMetadata:"PostCard_postCardMetadata__urTx_"}},5577:function(e){e.exports={description:"Home_description__pkdND",posts:"Home_posts__x_cMq"}}},function(e){e.O(0,[445,158,556,839,938,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);