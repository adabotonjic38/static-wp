(() => {
var exports = {};
exports.id = 651;
exports.ids = [651];
exports.modules = {

/***/ 8208:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbs": "Breadcrumbs_breadcrumbs__uFbGd"
};


/***/ }),

/***/ 2466:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionChildren": "Page_sectionChildren__kMFY0",
	"childrenHeader": "Page_childrenHeader__fMEOW"
};


/***/ }),

/***/ 7097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.0_react-dom@18.2.0_react@18.2.0_sass@1.62.1/node_modules/next/link.js
var next_link = __webpack_require__(8873);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(2791);
// EXTERNAL MODULE: ./src/lib/pages.js + 1 modules
var lib_pages = __webpack_require__(499);
// EXTERNAL MODULE: ./src/lib/json-ld.js
var json_ld = __webpack_require__(1293);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(2771);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(6202);
// EXTERNAL MODULE: ./src/hooks/use-page-metadata.js
var use_page_metadata = __webpack_require__(3913);
// EXTERNAL MODULE: ./src/components/Layout/index.js + 9 modules
var Layout = __webpack_require__(7992);
// EXTERNAL MODULE: ./src/components/Header/index.js + 1 modules
var Header = __webpack_require__(3636);
// EXTERNAL MODULE: ./src/components/Content/index.js + 1 modules
var Content = __webpack_require__(1020);
// EXTERNAL MODULE: ./src/components/Section/index.js + 1 modules
var Section = __webpack_require__(7986);
// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(9810);
// EXTERNAL MODULE: ./src/components/FeaturedImage/index.js + 3 modules
var FeaturedImage = __webpack_require__(5176);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(196);
// EXTERNAL MODULE: ./src/components/Breadcrumbs/Breadcrumbs.module.scss
var Breadcrumbs_module = __webpack_require__(8208);
var Breadcrumbs_module_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_module);
;// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.js




const Breadcrumbs = ({ className , breadcrumbs  })=>{
    const breadcrumbsClassName = new classname/* default */.Z((Breadcrumbs_module_default()).breadcrumbs);
    breadcrumbsClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: breadcrumbsClassName.toString(),
        children: breadcrumbs.map(({ id , title , uri  })=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    !uri && title,
                    uri && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: uri,
                        children: title
                    })
                ]
            }, id);
        })
    });
};
/* harmony default export */ const Breadcrumbs_Breadcrumbs = (Breadcrumbs);

;// CONCATENATED MODULE: ./src/components/Breadcrumbs/index.js


// EXTERNAL MODULE: ./src/styles/pages/Page.module.scss
var Page_module = __webpack_require__(2466);
var Page_module_default = /*#__PURE__*/__webpack_require__.n(Page_module);
;// CONCATENATED MODULE: ./src/pages/[slugParent]/[[...slugChild]].js
















function Page({ page , breadcrumbs  }) {
    const { title , metaTitle , description , slug , content , featuredImage , children  } = page;
    const { metadata: siteMetadata = {}  } = (0,use_site/* default */.ZP)();
    const { metadata  } = (0,use_page_metadata/* default */.Z)({
        metadata: {
            ...page,
            title: metaTitle,
            description: description || page.og?.description || `Read more about ${title}`
        }
    });
    if (true) {
        metadata.title = `${title} - ${siteMetadata.title}`;
        metadata.og.title = metadata.title;
        metadata.twitter.title = metadata.title;
    }
    const hasChildren = Array.isArray(children) && children.length > 0;
    const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;
    const helmetSettings = (0,site/* helmetSettingsFromMetadata */.iB)(metadata);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_helmet_.Helmet, {
                ...helmetSettings
            }),
            /*#__PURE__*/ jsx_runtime.jsx(json_ld/* WebpageJsonLd */.PA, {
                title: metadata.title,
                description: metadata.description,
                siteTitle: siteMetadata.title,
                slug: slug
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Header/* default */.Z, {
                children: [
                    hasBreadcrumbs && /*#__PURE__*/ jsx_runtime.jsx(Breadcrumbs_Breadcrumbs, {
                        breadcrumbs: breadcrumbs
                    }),
                    featuredImage && /*#__PURE__*/ jsx_runtime.jsx(FeaturedImage/* default */.Z, {
                        ...featuredImage,
                        src: featuredImage.sourceUrl,
                        dangerouslySetInnerHTML: featuredImage.caption
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: (Page_module_default()).title,
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Content/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Section/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(Container/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (Page_module_default()).content,
                                dangerouslySetInnerHTML: {
                                    __html: content
                                }
                            })
                        })
                    }),
                    hasChildren && /*#__PURE__*/ jsx_runtime.jsx(Section/* default */.Z, {
                        className: (Page_module_default()).sectionChildren,
                        children: /*#__PURE__*/ jsx_runtime.jsx(Container/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("aside", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: (Page_module_default()).childrenHeader,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                            children: title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        children: children.map((child)=>{
                                            return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: child.uri,
                                                    children: child.title
                                                })
                                            }, child.id);
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
async function getStaticProps({ params ={}  } = {}) {
    const { slugParent , slugChild  } = params;
    // We can use the URI to look up our page and subsequently its ID, so
    // we can first contruct our URI from the page params
    let pageUri = `/${slugParent}/`;
    // We only want to apply deeper paths to the URI if we actually have
    // existing children
    if (Array.isArray(slugChild) && slugChild.length > 0) {
        pageUri = `${pageUri}${slugChild.join("/")}/`;
    }
    const { page  } = await (0,lib_pages/* getPageByUri */.Cg)(pageUri);
    if (!page) {
        return {
            props: {},
            notFound: true
        };
    }
    // In order to show the proper breadcrumbs, we need to find the entire
    // tree of pages. Rather than querying every segment, the query should
    // be cached for all pages, so we can grab that and use it to create
    // our trail
    const { pages  } = await (0,lib_pages/* getAllPages */.K0)({
        queryIncludes: "index"
    });
    const breadcrumbs = (0,lib_pages/* getBreadcrumbsByUri */.pJ)(pageUri, pages);
    return {
        props: {
            page,
            breadcrumbs
        }
    };
}
async function getStaticPaths() {
    const { pages  } = await (0,lib_pages/* getAllPages */.K0)({
        queryIncludes: "index"
    });
    // Take all the pages and create path params. The slugParent will always be
    // the top level parent page, where the slugChild will be an array of the
    // remaining segments to make up the path or URI
    // We also filter out the `/` homepage as it will conflict with index.js if
    // as they have the same path, which will fail the build
    const paths = pages.filter(({ uri  })=>typeof uri === "string" && uri !== "/").map(({ uri  })=>{
        const segments = uri.split("/").filter((seg)=>seg !== "");
        return {
            params: {
                slugParent: segments.shift(),
                slugChild: segments
            }
        };
    });
    return {
        paths,
        fallback: "blocking"
    };
}


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 2733:
/***/ ((module) => {

"use strict";
module.exports = require("fuse.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8541:
/***/ ((module) => {

"use strict";
module.exports = require("parameterize");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,873,320,992,515,969], () => (__webpack_exec__(7097)));
module.exports = __webpack_exports__;

})();