exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 4910:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Content_content__HI96t"
};


/***/ }),

/***/ 5967:
/***/ ((module) => {

// Exports
module.exports = {
	"featuredImage": "FeaturedImage_featuredImage__bheWa"
};


/***/ }),

/***/ 9017:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "Image_image__1H4C3"
};


/***/ }),

/***/ 6676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Content_Content)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(5301);
// EXTERNAL MODULE: ./src/components/Content/Content.module.scss
var Content_module = __webpack_require__(4910);
var Content_module_default = /*#__PURE__*/__webpack_require__.n(Content_module);
;// CONCATENATED MODULE: ./src/components/Content/Content.js



const Content = ({ children , className  })=>{
    const contentClassName = new classname/* default */.Z((Content_module_default()).content);
    contentClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: contentClassName.toString(),
        children: children
    });
};
/* harmony default export */ const Content_Content = (Content);

;// CONCATENATED MODULE: ./src/components/Content/index.js



/***/ }),

/***/ 7906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ FeaturedImage_FeaturedImage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(5301);
// EXTERNAL MODULE: ./src/components/Image/Image.module.scss
var Image_module = __webpack_require__(9017);
var Image_module_default = /*#__PURE__*/__webpack_require__.n(Image_module);
;// CONCATENATED MODULE: ./src/components/Image/Image.js



const Image = ({ children , className , width ="100%" , height ="auto" , src , alt , srcSet , sizes , dangerouslySetInnerHTML  })=>{
    const imageClassName = new classname/* default */.Z((Image_module_default()).image);
    imageClassName.addIf(className, className);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("figure", {
        className: imageClassName.toString(),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (Image_module_default()).featuredImageImg,
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    width: width,
                    height: height,
                    src: src,
                    alt: alt || "",
                    srcSet: srcSet,
                    sizes: sizes
                })
            }),
            children && /*#__PURE__*/ jsx_runtime.jsx("figcaption", {
                children: children
            }),
            dangerouslySetInnerHTML && /*#__PURE__*/ jsx_runtime.jsx("figcaption", {
                dangerouslySetInnerHTML: {
                    __html: dangerouslySetInnerHTML
                }
            })
        ]
    });
};
/* harmony default export */ const Image_Image = (Image);

;// CONCATENATED MODULE: ./src/components/Image/index.js


// EXTERNAL MODULE: ./src/components/FeaturedImage/FeaturedImage.module.scss
var FeaturedImage_module = __webpack_require__(5967);
var FeaturedImage_module_default = /*#__PURE__*/__webpack_require__.n(FeaturedImage_module);
;// CONCATENATED MODULE: ./src/components/FeaturedImage/FeaturedImage.js




const FeaturedImage = ({ className , alt , ...rest })=>{
    const featuredImageClassName = new classname/* default */.Z((FeaturedImage_module_default()).featuredImage);
    featuredImageClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime.jsx(Image_Image, {
        className: featuredImageClassName,
        alt: alt,
        ...rest
    });
};
/* harmony default export */ const FeaturedImage_FeaturedImage = (FeaturedImage);

;// CONCATENATED MODULE: ./src/components/FeaturedImage/index.js



/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePageMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1127);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3625);




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


/***/ })

};
;