(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7068:
/***/ ((module) => {

// Exports
module.exports = {
	"progressbarColor": "#0070f3"
};


/***/ }),

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.0_react-dom@18.2.0_react@18.2.0_sass@1.62.1/node_modules/next/app.js
var app = __webpack_require__(5049);
var app_default = /*#__PURE__*/__webpack_require__.n(app);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(6202);
// EXTERNAL MODULE: ./src/hooks/use-search.js + 1 modules
var use_search = __webpack_require__(2748);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(2771);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var posts = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var lib_categories = __webpack_require__(6158);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: ./src/lib/menus.js + 1 modules
var lib_menus = __webpack_require__(2102);
// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(5447);
// EXTERNAL MODULE: ./src/styles/wordpress.scss
var wordpress = __webpack_require__(4333);
// EXTERNAL MODULE: ./src/styles/_variables.module.scss
var _variables_module = __webpack_require__(7068);
var _variables_module_default = /*#__PURE__*/__webpack_require__.n(_variables_module);
;// CONCATENATED MODULE: ./src/pages/_app.js












function App({ Component , pageProps ={} , metadata , recentPosts , categories , menus  }) {
    const site = (0,use_site/* useSiteContext */.AA)({
        metadata,
        recentPosts,
        categories,
        menus
    });
    return /*#__PURE__*/ jsx_runtime.jsx(use_site/* SiteContext.Provider */.DN.Provider, {
        value: site,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(use_search/* SearchProvider */.X$, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((external_nextjs_progressbar_default()), {
                    height: 4,
                    color: (_variables_module_default()).progressbarColor
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
App.getInitialProps = async function(appContext) {
    const appProps = await app_default().getInitialProps(appContext);
    const { posts: recentPosts  } = await (0,posts/* getRecentPosts */.no)({
        count: 5,
        queryIncludes: "index"
    });
    const { categories  } = await (0,lib_categories/* getCategories */.CP)({
        count: 5
    });
    const { menus =[]  } = await (0,lib_menus/* getAllMenus */.xz)();
    return {
        ...appProps,
        metadata: await (0,site/* getSiteMetadata */.Oq)(),
        recentPosts,
        categories,
        menus
    };
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 5447:
/***/ (() => {



/***/ }),

/***/ 4333:
/***/ (() => {



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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,49,320], () => (__webpack_exec__(2606)));
module.exports = __webpack_exports__;

})();