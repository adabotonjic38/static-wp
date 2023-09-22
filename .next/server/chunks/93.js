exports.id = 93;
exports.ids = [93];
exports.modules = {

/***/ 8226:
/***/ ((module) => {

// Exports
module.exports = {
	"metadata": "Metadata_metadata__DBDXc",
	"metadataAuthor": "Metadata_metadataAuthor__ytsac",
	"metadataCategories": "Metadata_metadataCategories__yOeC4",
	"metadataSticky": "Metadata_metadataSticky__kmI14"
};


/***/ }),

/***/ 8093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Metadata_Metadata)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var lib_categories = __webpack_require__(9496);
// EXTERNAL MODULE: ./src/lib/users.js + 1 modules
var users = __webpack_require__(2797);
// EXTERNAL MODULE: ./src/lib/datetime.js
var datetime = __webpack_require__(4449);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(5301);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/Metadata/Metadata.module.scss
var Metadata_module = __webpack_require__(8226);
var Metadata_module_default = /*#__PURE__*/__webpack_require__.n(Metadata_module);
;// CONCATENATED MODULE: ./src/components/Metadata/Metadata.js








const DEFAULT_METADATA_OPTIONS = {
    compactCategories: true
};
const Metadata = ({ className , author , date , categories , options =DEFAULT_METADATA_OPTIONS , isSticky =false  })=>{
    const metadataClassName = new classname/* default */.Z((Metadata_module_default()).metadata);
    metadataClassName.addIf(className, className);
    const { compactCategories  } = options;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
        className: metadataClassName.toString(),
        children: [
            author && /*#__PURE__*/ jsx_runtime.jsx("li", {
                className: (Metadata_module_default()).metadataAuthor,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("address", {
                    children: [
                        author.avatar && /*#__PURE__*/ jsx_runtime.jsx("img", {
                            width: author.avatar.width,
                            height: author.avatar.height,
                            src: author.avatar.url,
                            alt: "Author Avatar"
                        }),
                        "By",
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: (0,users/* authorPathByName */.h$)(author.name),
                            rel: "author",
                            children: author.name
                        })
                    ]
                })
            }),
            date && /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx("time", {
                    pubdate: "pubdate",
                    dateTime: date,
                    children: (0,datetime/* formatDate */.p)(date)
                })
            }),
            Array.isArray(categories) && categories[0] && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                className: (Metadata_module_default()).metadataCategories,
                children: [
                    compactCategories && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        title: categories.map(({ name  })=>name).join(", "),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: (0,lib_categories/* categoryPathBySlug */.I5)(categories[0].slug),
                                children: categories[0].name
                            }),
                            categories.length > 1 && " and more"
                        ]
                    }),
                    !compactCategories && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        children: categories.map((category)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: (0,lib_categories/* categoryPathBySlug */.I5)(category.slug),
                                    children: category.name
                                })
                            }, category.slug);
                        })
                    })
                ]
            }),
            isSticky && /*#__PURE__*/ jsx_runtime.jsx("li", {
                className: (Metadata_module_default()).metadataSticky,
                children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaMapPin, {
                    "aria-label": "Sticky Post"
                })
            })
        ]
    });
};
/* harmony default export */ const Metadata_Metadata = (Metadata);

;// CONCATENATED MODULE: ./src/components/Metadata/index.js



/***/ })

};
;