"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 4016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Posts),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3913);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var templates_archive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5572);




function Posts({ posts , pagination  }) {
    const title = "All Posts";
    const slug = "posts";
    const { metadata  } = (0,hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        metadata: {
            title,
            description: false
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_archive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: title,
        posts: posts,
        slug: slug,
        pagination: pagination,
        metadata: metadata
    });
}
async function getStaticProps() {
    const { posts , pagination  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getPaginatedPosts */ .BP)({
        queryIncludes: "archive"
    });
    return {
        props: {
            posts,
            pagination: {
                ...pagination,
                basePath: "/posts"
            }
        }
    };
}


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2733:
/***/ ((module) => {

module.exports = require("fuse.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8541:
/***/ ((module) => {

module.exports = require("parameterize");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,873,320,992,515,12,242,108], () => (__webpack_exec__(4016)));
module.exports = __webpack_exports__;

})();