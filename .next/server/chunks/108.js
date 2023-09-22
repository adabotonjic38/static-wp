exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 7570:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionTitle": "SectionTitle_sectionTitle__cMUQy"
};


/***/ }),

/***/ 5352:
/***/ ((module) => {

// Exports
module.exports = {
	"archiveDescription": "Archive_archiveDescription__SQ5vU",
	"posts": "Archive_posts__xVaxD"
};


/***/ }),

/***/ 9045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ SectionTitle_SectionTitle)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: ./src/components/SectionTitle/SectionTitle.module.scss
var SectionTitle_module = __webpack_require__(7570);
var SectionTitle_module_default = /*#__PURE__*/__webpack_require__.n(SectionTitle_module);
;// CONCATENATED MODULE: ./src/components/SectionTitle/SectionTitle.js


const SectionTitle = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("h2", {
        className: (SectionTitle_module_default()).sectionTitle,
        children: children
    });
};
/* harmony default export */ const SectionTitle_SectionTitle = (SectionTitle);

;// CONCATENATED MODULE: ./src/components/SectionTitle/index.js



/***/ }),

/***/ 3913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePageMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6202);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2771);




function usePageMetadata({ metadata: pageMetadata  }) {
    const { homepage , metadata: defaultMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(hooks_use_site__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .DN);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const metadata = (0,lib_site__WEBPACK_IMPORTED_MODULE_3__/* .constructPageMetadata */ .z0)(defaultMetadata, pageMetadata, {
        homepage,
        router
    });
    return {
        metadata
    };
}


/***/ }),

/***/ 5572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TemplateArchive)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1293);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2771);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6202);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7992);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3636);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7986);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9810);
/* harmony import */ var components_SectionTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9045);
/* harmony import */ var components_PostCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9926);
/* harmony import */ var components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8098);
/* harmony import */ var styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5352);
/* harmony import */ var styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_12__);













const DEFAULT_POST_OPTIONS = {};
function TemplateArchive({ title ="Archive" , Title , posts , postOptions =DEFAULT_POST_OPTIONS , slug , metadata , pagination  }) {
    const { metadata: siteMetadata = {}  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();
    if (true) {
        metadata.title = `${title} - ${siteMetadata.title}`;
        metadata.og.title = metadata.title;
        metadata.twitter.title = metadata.title;
    }
    const helmetSettings = (0,lib_site__WEBPACK_IMPORTED_MODULE_3__/* .helmetSettingsFromMetadata */ .iB)(metadata);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
                ...helmetSettings
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_2__/* .WebpageJsonLd */ .PA, {
                title: title,
                description: metadata.description,
                siteTitle: siteMetadata.title,
                slug: slug
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: Title || title
                        }),
                        metadata.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_12___default().archiveDescription),
                            dangerouslySetInnerHTML: {
                                __html: metadata.description
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SectionTitle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            children: "Posts"
                        }),
                        Array.isArray(posts) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: (styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_12___default().posts),
                                    children: posts.map((post)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_PostCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                post: post,
                                                options: postOptions
                                            })
                                        }, post.slug);
                                    })
                                }),
                                pagination && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    currentPage: pagination?.currentPage,
                                    pagesCount: pagination?.pagesCount,
                                    basePath: pagination?.basePath
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;