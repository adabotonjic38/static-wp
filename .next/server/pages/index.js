(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 491:
/***/ ((module) => {

// Exports
module.exports = {
	"description": "Home_description__pkdND",
	"posts": "Home_posts__x_cMq"
};


/***/ }),

/***/ 9470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(6202);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var lib_posts = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/json-ld.js
var json_ld = __webpack_require__(1293);
// EXTERNAL MODULE: ./src/components/Layout/index.js + 9 modules
var Layout = __webpack_require__(7992);
// EXTERNAL MODULE: ./src/components/Header/index.js + 1 modules
var Header = __webpack_require__(3636);
// EXTERNAL MODULE: ./src/components/Section/index.js + 1 modules
var Section = __webpack_require__(7986);
// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(9810);
// EXTERNAL MODULE: ./src/components/PostCard/index.js + 1 modules
var PostCard = __webpack_require__(9926);
// EXTERNAL MODULE: ./src/components/Pagination/Pagination.js
var Pagination = __webpack_require__(8098);
;// CONCATENATED MODULE: ./src/components/Pagination/index.js


// EXTERNAL MODULE: ./src/styles/pages/Home.module.scss
var Home_module = __webpack_require__(491);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./src/pages/index.js











function Home({ posts , pagination  }) {
    const { metadata ={}  } = (0,use_site/* default */.ZP)();
    const { title , description  } = metadata;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(json_ld/* WebsiteJsonLd */.MV, {
                siteTitle: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Header/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        dangerouslySetInnerHTML: {
                            __html: title
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: (Home_module_default()).description,
                        dangerouslySetInnerHTML: {
                            __html: description
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Section/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "sr-only",
                            children: "Posts"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: (Home_module_default()).posts,
                            children: posts.map((post)=>{
                                return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(PostCard/* default */.Z, {
                                        post: post
                                    })
                                }, post.slug);
                            })
                        }),
                        pagination && /*#__PURE__*/ jsx_runtime.jsx(Pagination/* default */.Z, {
                            addCanonical: false,
                            currentPage: pagination?.currentPage,
                            pagesCount: pagination?.pagesCount,
                            basePath: pagination?.basePath
                        })
                    ]
                })
            })
        ]
    });
}
async function getStaticProps() {
    const { posts , pagination  } = await (0,lib_posts/* getPaginatedPosts */.BP)({
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,873,320,992,515,12,242], () => (__webpack_exec__(9470)));
module.exports = __webpack_exports__;

})();