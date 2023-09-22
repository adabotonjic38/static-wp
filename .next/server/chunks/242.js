exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 1015:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Pagination_nav__6M51B",
	"active": "Pagination_active__zxT4y",
	"pages": "Pagination_pages__hZbzz",
	"prev": "Pagination_prev__En2ts",
	"dots": "Pagination_dots__B1lgQ"
};


/***/ }),

/***/ 1996:
/***/ ((module) => {

// Exports
module.exports = {
	"postCard": "PostCard_postCard__Jrp1b",
	"postCardSticky": "PostCard_postCardSticky__o_Xl8",
	"postCardTitle": "PostCard_postCardTitle__rhEZE",
	"postCardContent": "PostCard_postCardContent__3GwQH",
	"postCardMetadata": "PostCard_postCardMetadata__urTx_"
};


/***/ }),

/***/ 8098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8873);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4147);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1015);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6__);







const MAX_NUM_PAGES = 9;
const { homepage =""  } = _package_json__WEBPACK_IMPORTED_MODULE_2__;
const Pagination = ({ pagesCount , currentPage , basePath , addCanonical =true  })=>{
    const path = `${basePath}/page/`;
    const hasPreviousPage = pagesCount > 1 && currentPage > 1;
    const hasNextPage = pagesCount > 1 && currentPage < pagesCount;
    let hasPrevDots = false;
    let hasNextDots = false;
    function getPages() {
        let pages = pagesCount;
        let start = 0;
        // If the number of pages exceeds the max
        if (pagesCount > MAX_NUM_PAGES) {
            // Set number of pages to the max
            pages = MAX_NUM_PAGES;
            const half = Math.ceil(MAX_NUM_PAGES / 2);
            const isHead = currentPage <= half;
            const isTail = currentPage > pagesCount - half;
            hasNextDots = !isTail;
            // If the current page is at the head, the start variable remains 0
            if (!isHead) {
                hasPrevDots = true;
                // If the current page is at the tail, the start variable is set to
                // the last chunk. Otherwise the start variable will place the current
                // page at the middle
                start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
            }
        }
        return [
            ...new Array(pages)
        ].map((_, i)=>i + 1 + start);
    }
    const pages = getPages();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
                children: [
                    addCanonical && !hasPreviousPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: `${homepage}${basePath}`
                    }),
                    hasPreviousPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "prev",
                        href: `${homepage}${path}${currentPage - 1}`
                    }),
                    hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "next",
                        href: `${homepage}${path}${currentPage + 1}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nav),
                role: "navigation",
                "aria-label": "Pagination Navigation",
                children: [
                    hasPreviousPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default().prev),
                        href: `${path}${currentPage - 1}`,
                        "aria-label": "Goto Previous Page",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrPrevious, {}),
                            " Previous"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default().pages),
                        children: [
                            hasPrevDots && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dots),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineDotsHorizontal, {
                                    "aria-label": `Navigation to pages 1-${pages[0] - 1} hidden`
                                })
                            }),
                            pages.map((page)=>{
                                const active = page === currentPage;
                                return active ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active),
                                        "aria-label": `Current Page, Page ${page}`,
                                        "aria-current": "true",
                                        children: page
                                    })
                                }, page) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: `${path}${page}`,
                                        "aria-label": `Goto Page ${page}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: page
                                        })
                                    })
                                }, page);
                            }),
                            hasNextDots && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dots),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineDotsHorizontal, {
                                    "aria-label": `Navigation to pages ${pages[pages.length - 1] + 1}-${pagesCount} hidden`
                                })
                            })
                        ]
                    }),
                    hasNextPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_6___default().next),
                        href: `${path}${currentPage + 1}`,
                        "aria-label": "Goto Next Page",
                        children: [
                            "Next ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrNext, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 9926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PostCard_PostCard)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.0_react-dom@18.2.0_react@18.2.0_sass@1.62.1/node_modules/next/link.js
var next_link = __webpack_require__(8873);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var posts = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/Metadata/index.js + 1 modules
var Metadata = __webpack_require__(12);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/PostCard/PostCard.module.scss
var PostCard_module = __webpack_require__(1996);
var PostCard_module_default = /*#__PURE__*/__webpack_require__.n(PostCard_module);
;// CONCATENATED MODULE: ./src/components/PostCard/PostCard.js






const PostCard = ({ post , options ={}  })=>{
    const { title , excerpt , slug , date , author , categories , isSticky =false  } = post;
    const { excludeMetadata =[]  } = options;
    const metadata = {};
    if (!excludeMetadata.includes("author")) {
        metadata.author = author;
    }
    if (!excludeMetadata.includes("date")) {
        metadata.date = date;
    }
    if (!excludeMetadata.includes("categories")) {
        metadata.categories = categories;
    }
    let postCardStyle = (PostCard_module_default()).postCard;
    if (isSticky) {
        postCardStyle = `${postCardStyle} ${(PostCard_module_default()).postCardSticky}`;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: postCardStyle,
        children: [
            isSticky && /*#__PURE__*/ jsx_runtime.jsx(fa_.FaMapPin, {
                "aria-label": "Sticky Post"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: (0,posts/* postPathBySlug */.F3)(slug),
                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    className: (PostCard_module_default()).postCardTitle,
                    dangerouslySetInnerHTML: {
                        __html: title
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Metadata/* default */.Z, {
                className: (PostCard_module_default()).postCardMetadata,
                ...metadata
            }),
            excerpt && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (PostCard_module_default()).postCardContent,
                dangerouslySetInnerHTML: {
                    __html: (0,posts/* sanitizeExcerpt */.$4)(excerpt)
                }
            })
        ]
    });
};
/* harmony default export */ const PostCard_PostCard = (PostCard);

;// CONCATENATED MODULE: ./src/components/PostCard/index.js



/***/ })

};
;