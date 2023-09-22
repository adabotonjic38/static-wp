(() => {
var exports = {};
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 8329:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Title_title__RWKyi"
};


/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Title_Title)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(196);
// EXTERNAL MODULE: ./src/components/Title/Title.module.scss
var Title_module = __webpack_require__(8329);
var Title_module_default = /*#__PURE__*/__webpack_require__.n(Title_module);
;// CONCATENATED MODULE: ./src/components/Title/Title.js



const Title = ({ className , title , thumbnail  })=>{
    const titleClassName = new classname/* default */.Z((Title_module_default()).title);
    titleClassName.addIf(className, className);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: titleClassName.toString(),
        children: [
            thumbnail && /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: thumbnail.url,
                alt: "",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const Title_Title = (Title);

;// CONCATENATED MODULE: ./src/components/Title/index.js



/***/ }),

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var lib_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6158);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3913);
/* harmony import */ var templates_archive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5572);
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(302);






function Category({ category , posts  }) {
    const { name , description , slug  } = category;
    const { metadata  } = (0,hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        metadata: {
            ...category,
            description: description || category.og?.description || `Read ${posts.length} posts from ${name}`
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_archive__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: name,
        Title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            title: name
        }),
        posts: posts,
        slug: slug,
        metadata: metadata
    });
}
async function getStaticProps({ params ={}  } = {}) {
    const { category  } = await (0,lib_categories__WEBPACK_IMPORTED_MODULE_1__/* .getCategoryBySlug */ .fj)(params?.slug);
    if (!category) {
        return {
            props: {},
            notFound: true
        };
    }
    const { posts  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getPostsByCategoryId */ .qd)({
        categoryId: category.databaseId,
        queryIncludes: "archive"
    });
    return {
        props: {
            category,
            posts
        }
    };
}
async function getStaticPaths() {
    // By default, we don't render any Category pages as
    // we're considering them non-critical pages
    // To enable pre-rendering of Category pages:
    // 1. Add import to the top of the file
    //
    // import { getAllCategories, getCategoryBySlug } from 'lib/categories';
    // 2. Uncomment the below
    //
    // const { categories } = await getAllCategories();
    // const paths = categories.map((category) => {
    //   const { slug } = category;
    //   return {
    //     params: {
    //       slug,
    //     },
    //   };
    // });
    // 3. Update `paths` in the return statement below to reference the `paths` constant above
    return {
        paths: [],
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

/***/ }),

/***/ 8547:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,873,320,992,515,12,242,108], () => (__webpack_exec__(4436)));
module.exports = __webpack_exports__;

})();