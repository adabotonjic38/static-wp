(() => {
var exports = {};
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 7570:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionTitle": "SectionTitle_sectionTitle__cMUQy"
};


/***/ }),

/***/ 5684:
/***/ ((module) => {

// Exports
module.exports = {
	"categories": "Categories_categories__Roc6t"
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

/***/ 1378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Categories),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8873);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6202);
/* harmony import */ var lib_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6158);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1293);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7992);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3636);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7986);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9810);
/* harmony import */ var components_SectionTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9045);
/* harmony import */ var styles_pages_Categories_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5684);
/* harmony import */ var styles_pages_Categories_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styles_pages_Categories_module_scss__WEBPACK_IMPORTED_MODULE_11__);












function Categories({ categories  }) {
    const { metadata ={}  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const { title: siteTitle  } = metadata;
    const title = "Categories";
    const slug = "categories";
    let metaDescription = `Read ${categories.length} categories at ${siteTitle}.`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: metaDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: metaDescription
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_5__/* .WebpageJsonLd */ .PA, {
                title: title,
                description: metaDescription,
                siteTitle: siteTitle,
                slug: slug
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Categories"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SectionTitle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            children: "All Categories"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: (styles_pages_Categories_module_scss__WEBPACK_IMPORTED_MODULE_11___default().categories),
                            children: categories.map((category)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: (0,lib_categories__WEBPACK_IMPORTED_MODULE_4__/* .categoryPathBySlug */ .I5)(category.slug),
                                        children: category.name
                                    })
                                }, category.slug);
                            })
                        })
                    ]
                })
            })
        ]
    });
}
async function getStaticProps() {
    const { categories  } = await (0,lib_categories__WEBPACK_IMPORTED_MODULE_4__/* .getAllCategories */ .tG)();
    return {
        props: {
            categories
        }
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,873,320,992,515], () => (__webpack_exec__(1378)));
module.exports = __webpack_exports__;

})();