"use strict";
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 2748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LE": () => (/* binding */ SEARCH_STATE_LOADED),
  "X$": () => (/* binding */ SearchProvider),
  "ZP": () => (/* binding */ useSearch)
});

// UNUSED EXPORTS: SEARCH_STATE_ERROR, SEARCH_STATE_LOADING, SEARCH_STATE_READY, SearchContext, useSearchState

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__(2733);
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);
;// CONCATENATED MODULE: ./src/lib/search.js
/**
 * getSearchData
 */ async function getSearchData() {
    const response = await fetch("/wp-search.json");
    const json = await response.json();
    return json;
}

;// CONCATENATED MODULE: ./src/hooks/use-search.js




const SEARCH_KEYS = [
    "slug",
    "title"
];
const SEARCH_STATE_LOADING = "LOADING";
const SEARCH_STATE_READY = "READY";
const SEARCH_STATE_ERROR = "ERROR";
const SEARCH_STATE_LOADED = "LOADED";
const SearchContext = /*#__PURE__*/ (0,external_react_.createContext)();
const SearchProvider = (props)=>{
    const search = useSearchState();
    return /*#__PURE__*/ jsx_runtime.jsx(SearchContext.Provider, {
        value: search,
        ...props
    });
};
function useSearchState() {
    const [state, setState] = (0,external_react_.useState)(SEARCH_STATE_READY);
    const [data, setData] = (0,external_react_.useState)(null);
    let client;
    if (data) {
        client = new (external_fuse_js_default())(data.posts, {
            keys: SEARCH_KEYS,
            isCaseSensitive: false
        });
    }
    // On load, we want to immediately pull in the search index, which we're
    // storing clientside and gets built at compile time
    (0,external_react_.useEffect)(()=>{
        (async function getData() {
            setState(SEARCH_STATE_LOADING);
            let searchData;
            try {
                searchData = await getSearchData();
            } catch (e) {
                setState(SEARCH_STATE_ERROR);
                return;
            }
            setData(searchData);
            setState(SEARCH_STATE_LOADED);
        })();
    }, []);
    return {
        state,
        data,
        client
    };
}
function useSearch({ defaultQuery =null , maxResults  } = {}) {
    const search = (0,external_react_.useContext)(SearchContext);
    const { client  } = search;
    const [query, setQuery] = (0,external_react_.useState)(defaultQuery);
    let results = [];
    // If we have a query, make a search. Otherwise, don't modify the
    // results to avoid passing back empty results
    if (client && query) {
        results = client.search(query).map(({ item  })=>item);
    }
    if (maxResults && results.length > maxResults) {
        results = results.slice(0, maxResults);
    }
    // If the defaultQuery argument changes, the hook should reflect
    // that update and set that as the new state
    (0,external_react_.useEffect)(()=>setQuery(defaultQuery), [
        defaultQuery
    ]);
    /**
   * handleSearch
   */ function handleSearch({ query  }) {
        setQuery(query);
    }
    /**
   * handleClearSearch
   */ function handleClearSearch() {
        setQuery(null);
    }
    return {
        ...search,
        query,
        results,
        search: handleSearch,
        clearSearch: handleClearSearch
    };
}


/***/ }),

/***/ 6202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AA": () => (/* binding */ useSiteContext),
/* harmony export */   "DN": () => (/* binding */ SiteContext),
/* harmony export */   "ZP": () => (/* binding */ useSite)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4147);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2491);



const SiteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/**
 * useSiteContext
 */ function useSiteContext(data) {
    let { homepage =""  } = _package_json__WEBPACK_IMPORTED_MODULE_1__;
    // Trim the trailing slash from the end of homepage to avoid
    // double // issues throughout the metadata
    homepage = (0,lib_util__WEBPACK_IMPORTED_MODULE_2__/* .removeLastTrailingSlash */ .bq)(homepage);
    return {
        ...data,
        homepage
    };
}
/**
 * useSite
 */ function useSite() {
    const site = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SiteContext);
    return site;
}


/***/ }),

/***/ 4393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getApolloClient)
/* harmony export */ });
/* unused harmony export _createApolloClient */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2491);


let client;
/**
 * getApolloClient
 */ function getApolloClient() {
    if (!client) {
        client = _createApolloClient();
    }
    return client;
}
/**
 * createApolloClient
 */ function _createApolloClient() {
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
            uri: (0,lib_util__WEBPACK_IMPORTED_MODULE_1__/* .removeLastTrailingSlash */ .bq)("http://headlesswp.local/graphql")
        }),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
            typePolicies: {
                RootQuery: {
                    queryType: true
                },
                RootMutation: {
                    mutationType: true
                }
            }
        })
    });
}


/***/ }),

/***/ 6158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I5": () => (/* binding */ categoryPathBySlug),
  "tG": () => (/* binding */ getAllCategories),
  "CP": () => (/* binding */ getCategories),
  "fj": () => (/* binding */ getCategoryBySlug)
});

// UNUSED EXPORTS: mapCategoryData

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(4393);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/categories.js

const QUERY_ALL_CATEGORIES = client_.gql`
  query AllCategories {
    categories(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
`;
const QUERY_CATEGORY_BY_SLUG = client_.gql`
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      databaseId
      description
      id
      name
      slug
    }
  }
`;
const QUERY_CATEGORY_SEO_BY_SLUG = client_.gql`
  query CategorySEOBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/categories.js


/**
 * categoryPathBySlug
 */ function categoryPathBySlug(slug) {
    return `/categories/${slug}`;
}
/**
 * getAllCategories
 */ async function getAllCategories() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: QUERY_ALL_CATEGORIES
    });
    const categories = data?.data.categories.edges.map(({ node ={}  })=>node);
    return {
        categories
    };
}
/**
 * getCategoryBySlug
 */ async function getCategoryBySlug(slug) {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const apiHost = new URL("http://headlesswp.local/graphql").host;
    let categoryData;
    let seoData;
    try {
        categoryData = await apolloClient.query({
            query: QUERY_CATEGORY_BY_SLUG,
            variables: {
                slug
            }
        });
    } catch (e) {
        console.log(`[categories][getCategoryBySlug] Failed to query category data: ${e.message}`);
        throw e;
    }
    if (!categoryData?.data.category) return {
        category: undefined
    };
    const category = mapCategoryData(categoryData?.data.category);
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        category
    };
}
/**
 * getCategories
 */ async function getCategories({ count  } = {}) {
    const { categories  } = await getAllCategories();
    return {
        categories: categories.slice(0, count)
    };
}
/**
 * mapCategoryData
 */ function mapCategoryData(category = {}) {
    const data = {
        ...category
    };
    return data;
}


/***/ }),

/***/ 4553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate),
/* harmony export */   "v": () => (/* binding */ sortObjectsByDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

/**
 * formatDate
 */ function formatDate(date, pattern = "PPP") {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(date), pattern);
}
/**
 * sortObjectsByDate
 */ function sortObjectsByDate(array, { key ="date"  } = {}) {
    return array.sort((a, b)=>new Date(b[key]) - new Date(a[key]));
}


/***/ }),

/***/ 2102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pU": () => (/* binding */ findMenuByLocation),
  "xz": () => (/* binding */ getAllMenus)
});

// UNUSED EXPORTS: MENU_LOCATION_NAVIGATION_DEFAULT, createMenuFromPages, mapMenuData, mapPagesToMenuItems, parseHierarchicalMenu

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(4393);
// EXTERNAL MODULE: ./src/lib/pages.js + 1 modules
var pages = __webpack_require__(499);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/menus.js

const QUERY_ALL_MENUS = client_.gql`
  query AllMenus {
    menus {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/menus.js



const MENU_LOCATION_NAVIGATION_DEFAULT = "DEFAULT_NAVIGATION";
/**
 * getAllMenus
 */ async function getAllMenus() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: QUERY_ALL_MENUS
    });
    const menus = data?.data.menus.edges.map(mapMenuData);
    const defaultNavigation = createMenuFromPages({
        locations: [
            MENU_LOCATION_NAVIGATION_DEFAULT
        ],
        pages: await (0,pages/* getTopLevelPages */.Gy)({
            queryIncludes: "index"
        })
    });
    menus.push(defaultNavigation);
    return {
        menus
    };
}
/**
 * mapMenuData
 */ function mapMenuData(menu = {}) {
    const { node  } = menu;
    const data = {
        ...node
    };
    data.menuItems = data.menuItems.edges.map(({ node  })=>{
        return {
            ...node
        };
    });
    return data;
}
/**
 * mapPagesToMenuItems
 */ function mapPagesToMenuItems(pages) {
    return pages.map(({ id , uri , title  })=>{
        return {
            label: title,
            path: uri,
            id
        };
    });
}
/**
 * createMenuFromPages
 */ function createMenuFromPages({ locations , pages  }) {
    return {
        menuItems: mapPagesToMenuItems(pages),
        locations
    };
}
/**
 * parseHierarchicalMenu
 */ const parseHierarchicalMenu = (data = [], { idKey ="id" , parentKey ="parentId" , childrenKey ="children"  } = {})=>{
    const tree = [];
    const childrenOf = {};
    data.forEach((item)=>{
        const newItem = {
            ...item
        };
        const { [idKey]: id , [parentKey]: parentId = 0  } = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem);
    });
    return tree;
};
/**
 * findMenuByLocation
 */ function findMenuByLocation(menus, location) {
    if (typeof location !== "string") {
        throw new Error("Failed to find menu by location - location is not a string.");
    }
    const menu = menus.find(({ locations  })=>{
        return locations.map((loc)=>loc.toUpperCase()).includes(location.toUpperCase());
    });
    return menu && parseHierarchicalMenu(menu.menuItems);
}


/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K0": () => (/* binding */ getAllPages),
  "pJ": () => (/* binding */ getBreadcrumbsByUri),
  "Cg": () => (/* binding */ getPageByUri),
  "Gy": () => (/* binding */ getTopLevelPages),
  "yA": () => (/* binding */ pagePathBySlug)
});

// UNUSED EXPORTS: mapPageData

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(4393);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/pages.js

const PAGE_FIELDS = client_.gql`
  fragment PageFields on Page {
    children {
      edges {
        node {
          id
          slug
          uri
          ... on Page {
            id
            title
          }
        }
      }
    }
    id
    menuOrder
    parent {
      node {
        id
        slug
        uri
        ... on Page {
          title
        }
      }
    }
    slug
    title
    uri
  }
`;
const QUERY_ALL_PAGES_INDEX = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;
const QUERY_ALL_PAGES_ARCHIVE = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;
const QUERY_ALL_PAGES = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
          content
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
`;
const QUERY_PAGE_BY_URI = client_.gql`
  query PageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      children {
        edges {
          node {
            id
            slug
            uri
            ... on Page {
              id
              title
            }
          }
        }
      }
      content
      featuredImage {
        node {
          altText
          caption
          id
          sizes
          sourceUrl
          srcSet
        }
      }
      id
      menuOrder
      parent {
        node {
          id
          slug
          uri
          ... on Page {
            title
          }
        }
      }
      slug
      title
      uri
    }
  }
`;
const QUERY_PAGE_SEO_BY_URI = client_.gql`
  query PageSEOByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/pages.js


/**
 * pagePathBySlug
 */ function pagePathBySlug(slug) {
    return `/${slug}`;
}
/**
 * getPageByUri
 */ async function getPageByUri(uri) {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const apiHost = new URL("http://headlesswp.local/graphql").host;
    let pageData;
    let seoData;
    try {
        pageData = await apolloClient.query({
            query: QUERY_PAGE_BY_URI,
            variables: {
                uri
            }
        });
    } catch (e) {
        console.log(`[pages][getPageByUri] Failed to query page data: ${e.message}`);
        throw e;
    }
    if (!pageData?.data.page) return {
        page: undefined
    };
    const page = [
        pageData?.data.page
    ].map(mapPageData)[0];
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        page
    };
}
/**
 * getAllPages
 */ const allPagesIncludesTypes = {
    all: QUERY_ALL_PAGES,
    archive: QUERY_ALL_PAGES_ARCHIVE,
    index: QUERY_ALL_PAGES_INDEX
};
async function getAllPages(options = {}) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: allPagesIncludesTypes[queryIncludes]
    });
    const pages = data?.data.pages.edges.map(({ node ={}  })=>node).map(mapPageData);
    return {
        pages
    };
}
/**
 * getTopLevelPages
 */ async function getTopLevelPages(options) {
    const { pages  } = await getAllPages(options);
    const navPages = pages.filter(({ parent  })=>parent === null);
    // Order pages by menuOrder
    navPages.sort((a, b)=>parseFloat(a.menuOrder) - parseFloat(b.menuOrder));
    return navPages;
}
/**
 * mapPageData
 */ function mapPageData(page = {}) {
    const data = {
        ...page
    };
    if (data.featuredImage) {
        data.featuredImage = data.featuredImage.node;
    }
    if (data.parent) {
        data.parent = data.parent.node;
    }
    if (data.children) {
        data.children = data.children.edges.map(({ node  })=>node);
    }
    return data;
}
/**
 * getBreadcrumbsByUri
 */ function getBreadcrumbsByUri(uri, pages) {
    const breadcrumbs = [];
    const uriSegments = uri.split("/").filter((segment)=>segment !== "");
    // We don't want to show the current page in the breadcrumbs, so pop off
    // the last chunk before we start
    uriSegments.pop();
    // Work through each of the segments, popping off the last chunk and finding the related
    // page to gather the metadata for the breadcrumbs
    do {
        const breadcrumb = pages.find((page)=>page.uri === `/${uriSegments.join("/")}/`);
        // If the breadcrumb is the active page, we want to pass udefined for the uri to
        // avoid the breadcrumbs being rendered as a link, given it's the current page
        if (breadcrumb) {
            breadcrumbs.push({
                id: breadcrumb.id,
                title: breadcrumb.title,
                uri: breadcrumb.uri
            });
        }
        uriSegments.pop();
    }while (uriSegments.length > 0);
    // When working through the segments, we're doing so from the lowest child to the parent
    // which means the parent will be at the end of the array. We need to reverse to show
    // the correct order for breadcrumbs
    breadcrumbs.reverse();
    return breadcrumbs;
}


/***/ }),

/***/ 8475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BP": () => (/* binding */ getPaginatedPosts),
  "zQ": () => (/* binding */ getPostBySlug),
  "DI": () => (/* binding */ getPostsByAuthorSlug),
  "qd": () => (/* binding */ getPostsByCategoryId),
  "no": () => (/* binding */ getRecentPosts),
  "EE": () => (/* binding */ getRelatedPosts),
  "F3": () => (/* binding */ postPathBySlug),
  "$4": () => (/* binding */ sanitizeExcerpt)
});

// UNUSED EXPORTS: getAllPosts, getPagesCount, getPostsPerPage, mapPostData, sortStickyPosts

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(4393);
// EXTERNAL MODULE: ./src/lib/users.js + 1 modules
var users = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/lib/datetime.js
var datetime = __webpack_require__(4553);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/posts.js

const POST_FIELDS = client_.gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;
const QUERY_ALL_POSTS_INDEX = client_.gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_ALL_POSTS_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;
const QUERY_ALL_POSTS = client_.gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;
const QUERY_POST_BY_SLUG = client_.gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
        }
      }
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          srcSet
          sizes
          id
        }
      }
      modified
      databaseId
      title
      slug
      isSticky
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID_INDEX = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;
const QUERY_POST_SEO_BY_SLUG = client_.gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
const QUERY_POST_PER_PAGE = client_.gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/posts.js




/**
 * postPathBySlug
 */ function postPathBySlug(slug) {
    return `/posts/${slug}`;
}
/**
 * getPostBySlug
 */ async function getPostBySlug(slug) {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const apiHost = new URL("http://headlesswp.local/graphql").host;
    let postData;
    let seoData;
    try {
        postData = await apolloClient.query({
            query: QUERY_POST_BY_SLUG,
            variables: {
                slug
            }
        });
    } catch (e) {
        console.log(`[posts][getPostBySlug] Failed to query post data: ${e.message}`);
        throw e;
    }
    if (!postData?.data.post) return {
        post: undefined
    };
    const post = [
        postData?.data.post
    ].map(mapPostData)[0];
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        post
    };
}
/**
 * getAllPosts
 */ const allPostsIncludesTypes = {
    all: QUERY_ALL_POSTS,
    archive: QUERY_ALL_POSTS_ARCHIVE,
    index: QUERY_ALL_POSTS_INDEX
};
async function getAllPosts(options = {}) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: allPostsIncludesTypes[queryIncludes]
    });
    const posts = data?.data.posts.edges.map(({ node ={}  })=>node);
    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    };
}
/**
 * getPostsByAuthorSlug
 */ const postsByAuthorSlugIncludesTypes = {
    all: QUERY_POSTS_BY_AUTHOR_SLUG,
    archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
    index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX
};
async function getPostsByAuthorSlug({ slug , ...options }) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let postData;
    try {
        postData = await apolloClient.query({
            query: postsByAuthorSlugIncludesTypes[queryIncludes],
            variables: {
                slug
            }
        });
    } catch (e) {
        console.log(`[posts][getPostsByAuthorSlug] Failed to query post data: ${e.message}`);
        throw e;
    }
    const posts = postData?.data.posts.edges.map(({ node ={}  })=>node);
    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    };
}
/**
 * getPostsByCategoryId
 */ const postsByCategoryIdIncludesTypes = {
    all: QUERY_POSTS_BY_CATEGORY_ID,
    archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
    index: QUERY_POSTS_BY_CATEGORY_ID_INDEX
};
async function getPostsByCategoryId({ categoryId , ...options }) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let postData;
    try {
        postData = await apolloClient.query({
            query: postsByCategoryIdIncludesTypes[queryIncludes],
            variables: {
                categoryId
            }
        });
    } catch (e) {
        console.log(`[posts][getPostsByCategoryId] Failed to query post data: ${e.message}`);
        throw e;
    }
    const posts = postData?.data.posts.edges.map(({ node ={}  })=>node);
    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    };
}
/**
 * getRecentPosts
 */ async function getRecentPosts({ count , ...options }) {
    const { posts  } = await getAllPosts(options);
    const sorted = (0,datetime/* sortObjectsByDate */.v)(posts);
    return {
        posts: sorted.slice(0, count)
    };
}
/**
 * sanitizeExcerpt
 */ function sanitizeExcerpt(excerpt) {
    if (typeof excerpt !== "string") {
        throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
    }
    let sanitized = excerpt;
    // If the theme includes [...] as the more indication, clean it up to just ...
    sanitized = sanitized.replace(/\s?\[&hellip;\]/, "&hellip;");
    // If after the above replacement, the ellipsis includes 4 dots, it's
    // the end of a setence
    sanitized = sanitized.replace("....", ".");
    sanitized = sanitized.replace(".&hellip;", ".");
    // If the theme is including a "Continue..." link, remove it
    sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, "");
    return sanitized;
}
/**
 * mapPostData
 */ function mapPostData(post = {}) {
    const data = {
        ...post
    };
    // Clean up the author object to avoid someone having to look an extra
    // level deeper into the node
    if (data.author) {
        data.author = {
            ...data.author.node
        };
    }
    // The URL by default that comes from Gravatar / WordPress is not a secure
    // URL. This ends up redirecting to https, but it gives mixed content warnings
    // as the HTML shows it as http. Replace the url to avoid those warnings
    // and provide a secure URL by default
    if (data.author?.avatar) {
        data.author.avatar = (0,users/* updateUserAvatar */.BA)(data.author.avatar);
    }
    // Clean up the categories to make them more easy to access
    if (data.categories) {
        data.categories = data.categories.edges.map(({ node  })=>{
            return {
                ...node
            };
        });
    }
    // Clean up the featured image to make them more easy to access
    if (data.featuredImage) {
        data.featuredImage = data.featuredImage.node;
    }
    return data;
}
/**
 * getRelatedPosts
 */ async function getRelatedPosts(categories, postId, count = 5) {
    if (!Array.isArray(categories) || categories.length === 0) return;
    let related = {
        category: categories && categories.shift()
    };
    if (related.category) {
        const { posts  } = await getPostsByCategoryId({
            categoryId: related.category.databaseId,
            queryIncludes: "archive"
        });
        const filtered = posts.filter(({ postId: id  })=>id !== postId);
        const sorted = (0,datetime/* sortObjectsByDate */.v)(filtered);
        related.posts = sorted.map((post)=>({
                title: post.title,
                slug: post.slug
            }));
    }
    if (!Array.isArray(related.posts) || related.posts.length === 0) {
        const relatedPosts = await getRelatedPosts(categories, postId, count);
        related = relatedPosts || related;
    }
    if (Array.isArray(related.posts) && related.posts.length > count) {
        return related.posts.slice(0, count);
    }
    return related;
}
/**
 * sortStickyPosts
 */ function sortStickyPosts(posts) {
    return [
        ...posts
    ].sort((post)=>post.isSticky ? -1 : 1);
}
/**
 * getPostsPerPage
 */ async function getPostsPerPage() {
    //If POST_PER_PAGE is defined at next.config.js
    if (process.env.POSTS_PER_PAGE) {
        console.warn('You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").');
        return Number(process.env.POSTS_PER_PAGE);
    }
    try {
        const apolloClient = (0,apollo_client/* getApolloClient */.W)();
        const { data  } = await apolloClient.query({
            query: QUERY_POST_PER_PAGE
        });
        return Number(data.allSettings.readingSettingsPostsPerPage);
    } catch (e) {
        console.log(`Failed to query post per page data: ${e.message}`);
        throw e;
    }
}
/**
 * getPageCount
 */ async function getPagesCount(posts, postsPerPage) {
    const _postsPerPage = postsPerPage ?? await getPostsPerPage();
    return Math.ceil(posts.length / _postsPerPage);
}
/**
 * getPaginatedPosts
 */ async function getPaginatedPosts({ currentPage =1 , ...options } = {}) {
    const { posts  } = await getAllPosts(options);
    const postsPerPage = await getPostsPerPage();
    const pagesCount = await getPagesCount(posts, postsPerPage);
    let page = Number(currentPage);
    if (typeof page === "undefined" || isNaN(page)) {
        page = 1;
    } else if (page > pagesCount) {
        return {
            posts: [],
            pagination: {
                currentPage: undefined,
                pagesCount
            }
        };
    }
    const offset = postsPerPage * (page - 1);
    const sortedPosts = sortStickyPosts(posts);
    return {
        posts: sortedPosts.slice(offset, offset + postsPerPage),
        pagination: {
            currentPage: page,
            pagesCount
        }
    };
}


/***/ }),

/***/ 2771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z0": () => (/* binding */ constructPageMetadata),
  "Oq": () => (/* binding */ getSiteMetadata),
  "iB": () => (/* binding */ helmetSettingsFromMetadata)
});

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(4393);
// EXTERNAL MODULE: ./src/lib/util.js
var util = __webpack_require__(2491);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/site.js

const QUERY_SITE_DATA = client_.gql`
  query SiteData {
    generalSettings {
      description
      language
      title
    }
  }
`;
const QUERY_SEO_DATA = client_.gql`
  query SeoData {
    seo {
      webmaster {
        yandexVerify
        msVerify
        googleVerify
        baiduVerify
      }
      social {
        youTube {
          url
        }
        wikipedia {
          url
        }
        twitter {
          username
          cardType
        }
        pinterest {
          metaTag
          url
        }
        mySpace {
          url
        }
        linkedIn {
          url
        }
        instagram {
          url
        }
        facebook {
          url
          defaultImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/site.js



/**
 * getSiteMetadata
 */ async function getSiteMetadata() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let siteData;
    let seoData;
    try {
        siteData = await apolloClient.query({
            query: QUERY_SITE_DATA
        });
    } catch (e) {
        console.log(`[site][getSiteMetadata] Failed to query site data: ${e.message}`);
        throw e;
    }
    const { generalSettings  } = siteData?.data || {};
    let { title , description , language  } = generalSettings;
    const settings = {
        title,
        siteTitle: title,
        description
    };
    // It looks like the value of `language` when US English is set
    // in WordPress is empty or "", meaning, we have to infer that
    // if there's no value, it's English. On the other hand, if there
    // is a code, we need to grab the 2char version of it to use ofr
    // the HTML lang attribute
    if (!language || language === "") {
        settings.language = "en";
    } else {
        settings.language = language.split("_")[0];
    }
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    settings.title = (0,util/* decodeHtmlEntities */.aV)(settings.title);
    return settings;
}
/**
 * constructHelmetData
 */ function constructPageMetadata(defaultMetadata = {}, pageMetadata = {}, options = {}) {
    const { router ={} , homepage =""  } = options;
    const { asPath  } = router;
    const url = `${homepage}${asPath}`;
    const pathname = new URL(url).pathname;
    const canonical = pageMetadata.canonical || `${homepage}${pathname}`;
    const metadata = {
        canonical,
        og: {
            url
        },
        twitter: {}
    };
    // Static Properties
    // Loop through top level metadata properties that rely on a non-object value
    const staticProperties = [
        "description",
        "language",
        "title"
    ];
    staticProperties.forEach((property)=>{
        const value = typeof pageMetadata[property] !== "undefined" ? pageMetadata[property] : defaultMetadata[property];
        if (typeof value === "undefined") return;
        metadata[property] = value;
    });
    // Open Graph Properties
    // Loop through Open Graph properties that rely on a non-object value
    if (pageMetadata.og) {
        const ogProperties = [
            "description",
            "imageUrl",
            "imageHeight",
            "imageSecureUrl",
            "imageWidth",
            "title",
            "type"
        ];
        ogProperties.forEach((property)=>{
            const pageOg = pageMetadata.og?.[property];
            const pageStatic = pageMetadata[property];
            const defaultOg = defaultMetadata.og?.[property];
            const defaultStatic = defaultMetadata[property];
            const value = pageOg || pageStatic || defaultOg || defaultStatic;
            if (typeof value === "undefined") return;
            metadata.og[property] = value;
        });
    }
    // Twitter Properties
    // Loop through Twitter properties that rely on a non-object value
    if (pageMetadata.twitter) {
        const twitterProperties = [
            "cardType",
            "description",
            "imageUrl",
            "title",
            "username"
        ];
        twitterProperties.forEach((property)=>{
            const pageTwitter = pageMetadata.twitter?.[property];
            const pageOg = metadata.og[property];
            const value = pageTwitter || pageOg;
            if (typeof value === "undefined") return;
            metadata.twitter[property] = value;
        });
    }
    // Article Properties
    // Loop through article properties that rely on a non-object value
    if (metadata.og.type === "article" && pageMetadata.article) {
        metadata.article = {};
        const articleProperties = [
            "author",
            "modifiedTime",
            "publishedTime",
            "publisher"
        ];
        articleProperties.forEach((property)=>{
            const value = pageMetadata.article[property];
            if (typeof value === "undefined") return;
            metadata.article[property] = value;
        });
    }
    return metadata;
}
/**
 * helmetSettingsFromMetadata
 */ function helmetSettingsFromMetadata(metadata = {}, options = {}) {
    const { link =[] , meta =[] , setTitle =true  } = options;
    const sanitizedDescription = (0,util/* removeExtraSpaces */.zm)(metadata.description);
    const settings = {
        htmlAttributes: {
            lang: metadata.language
        }
    };
    if (setTitle) {
        settings.title = metadata.title;
    }
    settings.link = [
        ...link,
        {
            rel: "canonical",
            href: metadata.canonical
        }
    ].filter(({ href  } = {})=>!!href);
    settings.meta = [
        ...meta,
        {
            name: "description",
            content: sanitizedDescription
        },
        {
            property: "og:title",
            content: metadata.og?.title || metadata.title
        },
        {
            property: "og:description",
            content: metadata.og?.description || sanitizedDescription
        },
        {
            property: "og:url",
            content: metadata.og?.url
        },
        {
            property: "og:image",
            content: metadata.og?.imageUrl
        },
        {
            property: "og:image:secure_url",
            content: metadata.og?.imageSecureUrl
        },
        {
            property: "og:image:width",
            content: metadata.og?.imageWidth
        },
        {
            property: "og:image:height",
            content: metadata.og?.imageHeight
        },
        {
            property: "og:type",
            content: metadata.og?.type || "website"
        },
        {
            property: "og:site_name",
            content: metadata.siteTitle
        },
        {
            property: "twitter:title",
            content: metadata.twitter?.title || metadata.og?.title || metadata.title
        },
        {
            property: "twitter:description",
            content: metadata.twitter?.description || metadata.og?.description || sanitizedDescription
        },
        {
            property: "twitter:image",
            content: metadata.twitter?.imageUrl || metadata.og?.imageUrl
        },
        {
            property: "twitter:site",
            content: metadata.twitter?.username && `@${metadata.twitter.username}`
        },
        {
            property: "twitter:card",
            content: metadata.twitter?.cardType
        },
        {
            property: "article:modified_time",
            content: metadata.article?.modifiedTime
        },
        {
            property: "article:published_time",
            content: metadata.article?.publishedTime
        }
    ].filter(({ content  } = {})=>!!content);
    return settings;
}


/***/ }),

/***/ 8181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h$": () => (/* binding */ authorPathByName),
  "Wt": () => (/* binding */ getUserByNameSlug),
  "BA": () => (/* binding */ updateUserAvatar)
});

// UNUSED EXPORTS: authorPathBySlug, getAllAuthors, getAllUsers, getUserBySlug, mapUserData, userSlugByName

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(4393);
// EXTERNAL MODULE: external "parameterize"
var external_parameterize_ = __webpack_require__(8541);
var external_parameterize_default = /*#__PURE__*/__webpack_require__.n(external_parameterize_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/users.js

const QUERY_ALL_USERS = client_.gql`
  query AllUsers {
    users(first: 10000) {
      edges {
        node {
          avatar {
            height
            width
            url
          }
          description
          id
          name
          roles {
            nodes {
              name
            }
          }
          slug
        }
      }
    }
  }
`;
const QUERY_ALL_USERS_SEO = client_.gql`
  query AllUsersSeo {
    users(first: 10000) {
      edges {
        node {
          id
          seo {
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            title
            social {
              youTube
              wikipedia
              twitter
              soundCloud
              pinterest
              mySpace
              linkedIn
              instagram
              facebook
            }
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/users.js



// const ROLES_AUTHOR = ['author', 'administrator'];
/**
 * postPathBySlug
 */ function authorPathBySlug(slug) {
    return `/authors/${slug}`;
}
/**
 * getUserBySlug
 */ async function getUserBySlug(slug) {
    const { users  } = await getAllUsers();
    const user = users.find((user)=>user.slug === slug);
    return {
        user
    };
}
/**
 * authorPathByName
 */ function authorPathByName(name) {
    return `/authors/${external_parameterize_default()(name)}`;
}
/**
 * getUserByNameSlug
 */ async function getUserByNameSlug(name) {
    const { users  } = await getAllUsers();
    const user = users.find((user)=>external_parameterize_default()(user.name) === name);
    return {
        user
    };
}
/**
 * userSlugByName
 */ function userSlugByName(name) {
    return parameterize(name);
}
/**
 * getAllUsers
 */ async function getAllUsers() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let usersData;
    let seoData;
    try {
        usersData = await apolloClient.query({
            query: QUERY_ALL_USERS
        });
    } catch (e) {
        console.log(`[users][getAllUsers] Failed to query users data: ${e.message}`);
        throw e;
    }
    let users = usersData?.data.users.edges.map(({ node ={}  })=>node).map(mapUserData);
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        users
    };
}
/**
 * getAllAuthors
 */ async function getAllAuthors() {
    const { users  } = await getAllUsers();
    // TODO: Roles aren't showing in response - we should be filtering here
    // const authors = users.filter(({ roles }) => {
    //   const userRoles = roles.map(({ name }) => name);
    //   const authorRoles = userRoles.filter(role => ROLES_AUTHOR.includes(role));
    //   return authorRoles.length > 0;
    // });
    return {
        authors: users
    };
}
/**
 * mapUserData
 */ function mapUserData(user) {
    return {
        ...user,
        roles: [
            ...user.roles.nodes
        ],
        avatar: user.avatar && updateUserAvatar(user.avatar)
    };
}
/**
 * updateUserAvatar
 */ function updateUserAvatar(avatar) {
    // The URL by default that comes from Gravatar / WordPress is not a secure
    // URL. This ends up redirecting to https, but it gives mixed content warnings
    // as the HTML shows it as http. Replace the url to avoid those warnings
    // and provide a secure URL by default
    return {
        ...avatar,
        url: avatar.url?.replace("http://", "https://")
    };
}


/***/ }),

/***/ 2491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aV": () => (/* binding */ decodeHtmlEntities),
/* harmony export */   "bq": () => (/* binding */ removeLastTrailingSlash),
/* harmony export */   "zm": () => (/* binding */ removeExtraSpaces)
/* harmony export */ });
/**
 * decodeHtmlEntities
 */ function decodeHtmlEntities(text) {
    if (typeof text !== "string") {
        throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`);
    }
    let decoded = text;
    const entities = {
        "&amp;": "&",
        "&quot;": '"',
        "&#039;": "'"
    };
    return decoded.replace(/&amp;|&quot;|&#039;/g, (char)=>entities[char]);
}
/**
 * removeLastTrailingSlash
 */ function removeLastTrailingSlash(url) {
    if (typeof url !== "string") return url;
    return url.replace(/\/$/, "");
}
function removeExtraSpaces(text) {
    if (typeof text !== "string") return;
    return text.replace(/\s+/g, " ").trim();
}


/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"next-wordpress-starter","homepage":"https://next-wordpress-starter.spacejelly.dev","version":"0.1.0","license":"MIT","author":"Colby Fayock <hello@colbyfayock.com>","scripts":{"build":"next build","dev":"next dev","export":"next export","format":"pnpm lint --fix","format:no-path":"pnpm lint:no-path --fix","lint":"eslint .","lint:no-path":"eslint","start":"next start -p ${PORT:=3000}","prepare":"husky install"},"lint-staged":{"**/*.js":"pnpm format:no-path","**/*.scss":"pnpm prettier --write"},"dependencies":{"@apollo/client":"^3.7.14","date-fns":"^2.30.0","dotenv":"^16.0.3","fuse.js":"^6.6.2","graphql":"^16.6.0","he":"^1.2.0","loader-utils":"^3.2.1","next":"13.4.0","nextjs-progressbar":"^0.0.16","parameterize":"^1.0.0","path":"^0.12.7","react":"18.2.0","react-dom":"18.2.0","react-helmet":"^6.1.0","react-icons":"^4.8.0","rss":"^1.2.2","sass":"^1.62.1","style.css":"^1.0.3"},"devDependencies":{"eslint":"8.39.0","eslint-config-next":"^13.4.0","eslint-config-prettier":"^8.8.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react":"^7.32.2","husky":"^8.0.3","lint-staged":"^13.2.2","playwright":"^1.33.0","prettier":"2.8.8"},"repository":{"type":"git","url":"https://github.com/colbyfayock/next-wordpress-starter"},"bugs":{"url":"https://github.com/colbyfayock/next-wordpress-starter/issues"}}');

/***/ })

};
;