exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 4624:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__jY5v0"
};


/***/ }),

/***/ 89:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Q5T55",
	"footerMenu": "Footer_footerMenu__mug26",
	"footerMenuColumns": "Footer_footerMenuColumns__Wp7yL",
	"footerMenuTitle": "Footer_footerMenuTitle__guO6Y",
	"footerMenuItems": "Footer_footerMenuItems__OAoli",
	"footerLegal": "Footer_footerLegal__pTIrU"
};


/***/ }),

/***/ 6198:
/***/ ((module) => {

// Exports
module.exports = {
	"layoutContainer": "Layout_layoutContainer__5pQvD"
};


/***/ }),

/***/ 46:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 8992:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Nav_nav__g0tUU",
	"navSection": "Nav_navSection___CwdX",
	"navName": "Nav_navName__qC0J3",
	"navSearch": "Nav_navSearch__qBaxZ",
	"navSearchResults": "Nav_navSearchResults__F7TWO",
	"navMenu": "Nav_navMenu__ehGpM",
	"navSubMenu": "Nav_navSubMenu__r8fDG"
};


/***/ }),

/***/ 9670:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Section_section___TusU"
};


/***/ }),

/***/ 6289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Container_Container)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(5301);
// EXTERNAL MODULE: ./src/components/Container/Container.module.scss
var Container_module = __webpack_require__(4624);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
;// CONCATENATED MODULE: ./src/components/Container/Container.js



const Container = ({ children , className  })=>{
    const containerClassName = new classname/* default */.Z((Container_module_default()).container);
    containerClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: containerClassName.toString(),
        children: children
    });
};
/* harmony default export */ const Container_Container = (Container);

;// CONCATENATED MODULE: ./src/components/Container/index.js



/***/ }),

/***/ 1938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Layout_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(2791);
// EXTERNAL MODULE: ./src/components/Layout/Layout.module.scss
var Layout_module = __webpack_require__(6198);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(1127);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(3625);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/hooks/use-search.js + 1 modules
var use_search = __webpack_require__(3078);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var posts = __webpack_require__(1972);
// EXTERNAL MODULE: ./src/lib/menus.js + 1 modules
var lib_menus = __webpack_require__(821);
// EXTERNAL MODULE: ./src/components/Section/index.js + 1 modules
var Section = __webpack_require__(7299);
// EXTERNAL MODULE: ./src/components/Nav/Nav.module.scss
var Nav_module = __webpack_require__(8992);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./src/components/NavListItem/NavListItem.js
// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';


const NavListItem = ({ className , item  })=>{
    const nestedItems = (item.children || []).map((item)=>{
        return /*#__PURE__*/ jsx_runtime.jsx(NavListItem, {
            item: item
        }, item.id);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        children: [
            item.path && !item.path.includes("http") && !item.target && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: item.path,
                title: item.title,
                children: item.label
            }),
            item.path && item.path.includes("http") && /*#__PURE__*/ jsx_runtime.jsx("a", {
                href: item.path,
                title: item.title,
                target: item.target,
                children: item.label
            }),
            nestedItems.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: className,
                children: nestedItems
            })
        ]
    }, item.id);
};
/* harmony default export */ const NavListItem_NavListItem = (NavListItem);

;// CONCATENATED MODULE: ./src/components/NavListItem/index.js


;// CONCATENATED MODULE: ./src/components/Nav/Nav.js











const SEARCH_VISIBLE = "visible";
const SEARCH_HIDDEN = "hidden";
const Nav = ()=>{
    const formRef = (0,external_react_.useRef)();
    const [searchVisibility, setSearchVisibility] = (0,external_react_.useState)(SEARCH_HIDDEN);
    const { metadata ={} , menus  } = (0,use_site/* default */.ZP)();
    const { title  } = metadata;
    const navigationLocation = "PRIMARY" || 0;
    const navigation = (0,lib_menus/* findMenuByLocation */.pU)(menus, navigationLocation);
    const { query , results , search , clearSearch , state  } = (0,use_search/* default */.ZP)({
        maxResults: 5
    });
    const searchIsLoaded = state === use_search/* SEARCH_STATE_LOADED */.LE;
    // When the search visibility changes, we want to add an event listener that allows us to
    // detect when someone clicks outside of the search box, allowing us to close the results
    // when focus is drawn away from search
    (0,external_react_.useEffect)(()=>{
        // If we don't have a query, don't need to bother adding an event listener
        // but run the cleanup in case the previous state instance exists
        if (searchVisibility === SEARCH_HIDDEN) {
            removeDocumentOnClick();
            return;
        }
        addDocumentOnClick();
        addResultsRoving();
        // When the search box opens up, additionall find the search input and focus
        // on the element so someone can start typing right away
        const searchInput = Array.from(formRef.current.elements).find((input)=>input.type === "search");
        searchInput.focus();
        return ()=>{
            removeResultsRoving();
            removeDocumentOnClick();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        searchVisibility
    ]);
    /**
   * addDocumentOnClick
   */ function addDocumentOnClick() {
        document.body.addEventListener("click", handleOnDocumentClick, true);
    }
    /**
   * removeDocumentOnClick
   */ function removeDocumentOnClick() {
        document.body.removeEventListener("click", handleOnDocumentClick, true);
    }
    /**
   * handleOnDocumentClick
   */ function handleOnDocumentClick(e) {
        if (!e.composedPath().includes(formRef.current)) {
            setSearchVisibility(SEARCH_HIDDEN);
            clearSearch();
        }
    }
    /**
   * handleOnSearch
   */ function handleOnSearch({ currentTarget  }) {
        search({
            query: currentTarget.value
        });
    }
    /**
   * handleOnToggleSearch
   */ function handleOnToggleSearch() {
        setSearchVisibility(SEARCH_VISIBLE);
    }
    /**
   * addResultsRoving
   */ function addResultsRoving() {
        document.body.addEventListener("keydown", handleResultsRoving);
    }
    /**
   * removeResultsRoving
   */ function removeResultsRoving() {
        document.body.removeEventListener("keydown", handleResultsRoving);
    }
    /**
   * handleResultsRoving
   */ function handleResultsRoving(e) {
        const focusElement = document.activeElement;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (focusElement.nodeName === "INPUT" && focusElement.nextSibling.children[0].nodeName !== "P") {
                focusElement.nextSibling.children[0].firstChild.firstChild.focus();
            } else if (focusElement.parentElement.nextSibling) {
                focusElement.parentElement.nextSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.firstChild.firstChild.focus();
            }
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (focusElement.nodeName === "A" && focusElement.parentElement.previousSibling) {
                focusElement.parentElement.previousSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.lastChild.firstChild.focus();
            }
        }
    }
    /**
   * escFunction
   */ // pressing esc while search is focused will close it
    const escFunction = (0,external_react_.useCallback)((event)=>{
        if (event.keyCode === 27) {
            clearSearch();
            setSearchVisibility(SEARCH_HIDDEN);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("keydown", escFunction, false);
        return ()=>{
            document.removeEventListener("keydown", escFunction, false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: (Nav_module_default()).nav,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
            className: (Nav_module_default()).navSection,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: (Nav_module_default()).navName,
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    className: (Nav_module_default()).navMenu,
                    children: navigation?.map((listItem)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(NavListItem_NavListItem, {
                            className: (Nav_module_default()).navSubMenu,
                            item: listItem
                        }, listItem.id);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Nav_module_default()).navSearch,
                    children: [
                        searchVisibility === SEARCH_HIDDEN && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            onClick: handleOnToggleSearch,
                            disabled: !searchIsLoaded,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "sr-only",
                                    children: "Toggle Search"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(fa_.FaSearch, {})
                            ]
                        }),
                        searchVisibility === SEARCH_VISIBLE && /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            ref: formRef,
                            action: "/search",
                            "data-search-is-active": !!query,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "search",
                                    name: "q",
                                    value: query || "",
                                    onChange: handleOnSearch,
                                    autoComplete: "off",
                                    placeholder: "Search...",
                                    required: true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (Nav_module_default()).navSearchResults,
                                    children: [
                                        results.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            children: results.map(({ slug , title  }, index)=>{
                                                return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        tabIndex: index,
                                                        href: (0,posts/* postPathBySlug */.F3)(slug),
                                                        children: title
                                                    })
                                                }, slug);
                                            })
                                        }),
                                        results.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            children: [
                                                "Sorry, not finding anything for ",
                                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                    children: query
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Nav_Nav = (Nav);

;// CONCATENATED MODULE: ./src/components/Nav/index.js


// EXTERNAL MODULE: ./src/components/Main/Main.module.scss
var Main_module = __webpack_require__(46);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
;// CONCATENATED MODULE: ./src/components/Main/Main.js


const Main = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        className: (Main_module_default()).main,
        children: children
    });
};
/* harmony default export */ const Main_Main = (Main);

;// CONCATENATED MODULE: ./src/components/Main/index.js


// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var lib_categories = __webpack_require__(9496);
// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(6289);
// EXTERNAL MODULE: ./src/components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(89);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js








const Footer = ()=>{
    const { metadata ={} , recentPosts =[] , categories =[]  } = (0,use_site/* default */.ZP)();
    const { title  } = metadata;
    const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
    const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
    const hasMenu = hasRecentPosts || hasRecentCategories;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            hasMenu && /*#__PURE__*/ jsx_runtime.jsx(Section/* default */.Z, {
                className: (Footer_module_default()).footerMenu,
                children: /*#__PURE__*/ jsx_runtime.jsx(Container/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: (Footer_module_default()).footerMenuColumns,
                        children: [
                            hasRecentPosts && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: (Footer_module_default()).footerMenuTitle,
                                        href: "/posts/",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                            children: "Recent Posts"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: (Footer_module_default()).footerMenuItems,
                                        children: recentPosts.map((post)=>{
                                            const { id , slug , title  } = post;
                                            return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: (0,posts/* postPathBySlug */.F3)(slug),
                                                    children: title
                                                })
                                            }, id);
                                        })
                                    })
                                ]
                            }),
                            hasRecentCategories && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/categories/",
                                        className: (Footer_module_default()).footerMenuTitle,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                            children: "Categories"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: (Footer_module_default()).footerMenuItems,
                                        children: categories.map((category)=>{
                                            const { id , slug , name  } = category;
                                            return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: (0,lib_categories/* categoryPathBySlug */.I5)(slug),
                                                    children: name
                                                })
                                            }, id);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: (Footer_module_default()).footerMenuTitle,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                            children: "More"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: (Footer_module_default()).footerMenuItems,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "/feed.xml",
                                                    children: "RSS"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "/sitemap.xml",
                                                    children: "Sitemap"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Section/* default */.Z, {
                className: (Footer_module_default()).footerLegal,
                children: /*#__PURE__*/ jsx_runtime.jsx(Container/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " ",
                            title
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Footer/index.js


;// CONCATENATED MODULE: ./src/components/Layout/Layout.js









const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { asPath  } = router;
    const { homepage , metadata ={}  } = (0,use_site/* default */.ZP)();
    if (!metadata.og) {
        metadata.og = {};
    }
    metadata.og.url = `${homepage}${asPath}`;
    const helmetSettings = {
        defaultTitle: metadata.title,
        titleTemplate:  false ? 0 : `%s - ${metadata.title}`,
        ...(0,site/* helmetSettingsFromMetadata */.iB)(metadata, {
            setTitle: false,
            link: [
                {
                    rel: "alternate",
                    type: "application/rss+xml",
                    href: "/feed.xml"
                },
                // Favicon sizes and manifest generated via https://favicon.io/
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png"
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png"
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png"
                },
                {
                    rel: "manifest",
                    href: "/site.webmanifest"
                }
            ]
        })
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Layout_module_default()).layoutContainer,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_helmet_.Helmet, {
                ...helmetSettings
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Nav_Nav, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Main_Main, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/Layout/index.js



/***/ }),

/***/ 7299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Section_Section)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(5301);
// EXTERNAL MODULE: ./src/components/Section/Section.module.scss
var Section_module = __webpack_require__(9670);
var Section_module_default = /*#__PURE__*/__webpack_require__.n(Section_module);
;// CONCATENATED MODULE: ./src/components/Section/Section.js



const Section = ({ children , className , ...rest })=>{
    const sectionClassName = new classname/* default */.Z((Section_module_default()).section);
    sectionClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: sectionClassName.toString(),
        ...rest,
        children: children
    });
};
/* harmony default export */ const Section_Section = (Section);

;// CONCATENATED MODULE: ./src/components/Section/index.js



/***/ }),

/***/ 5301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ClassName {
    constructor(className){
        this.base = className;
        if (!Array.isArray(className)) {
            this.base = [
                this.base
            ];
        }
    }
    add(className) {
        if (!Array.isArray(className)) {
            className = [
                className
            ];
        }
        this.base = [
            ...this.base,
            ...className
        ];
        return this;
    }
    addIf(className, condition) {
        if (condition) this.add(className);
        return this;
    }
    toString() {
        return this.base.join(" ");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassName);


/***/ })

};
;