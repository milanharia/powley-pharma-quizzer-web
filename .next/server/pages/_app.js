"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./theme.ts
var theme = __webpack_require__(3706);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ui/header/header.tsx





function Header() {
    const { colorMode , toggleColorMode  } = (0,react_.useColorMode)();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const btnRef = (0,external_react_.useRef)(null);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "header",
        position: [
            "unset",
            "sticky"
        ],
        top: "0",
        height: "4rem",
        zIndex: 999,
        justifyContent: "space-between",
        alignItems: "center",
        bg: colorMode === "light" ? "white" : "dark",
        boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.05)",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    padding: "4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        maxH: "4rem",
                        maxW: "4rem",
                        src: colorMode === "light" ? "./static/images/logo.png" : "./static/images/classic-mode-logo.png",
                        alt: "Powley Pharma Quizzer"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                display: [
                    "none",
                    "none",
                    "flex"
                ],
                gap: 10,
                padding: 8,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "#",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            fontSize: "2xl",
                            children: "Our App"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "#",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            fontSize: "2xl",
                            children: "Quiz"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "#",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            fontSize: "2xl",
                            children: "About Us"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        gap: 1.5,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
                                isChecked: colorMode === "dark",
                                onChange: toggleColorMode
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                variant: "link",
                "aria-label": "menu-button",
                display: [
                    "block",
                    "block",
                    "none"
                ],
                ref: btnRef,
                colorScheme: "black",
                onClick: ()=>setIsOpen(true)
                ,
                pr: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Drawer, {
                isOpen: isOpen,
                placement: "left",
                onClose: ()=>setIsOpen(false)
                ,
                finalFocusRef: btnRef,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {
                                children: "Powley Pharma Quizzer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerBody, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    gap: 4,
                                    flexDirection: "column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                fontSize: "2xl",
                                                children: "Our App"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                fontSize: "2xl",
                                                children: "Quiz"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                fontSize: "2xl",
                                                children: "About Us"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerFooter, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    gap: 1.5,
                                    justifyContent: "start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
                                            isChecked: colorMode === "dark",
                                            onChange: toggleColorMode
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./components/ui/header/index.ts


;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,706], () => (__webpack_exec__(4302)));
module.exports = __webpack_exports__;

})();