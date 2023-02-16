"use strict";
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SidebarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(519);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);





const Header = ()=>{
    const isMobile = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
        base: true,
        lg: false
    });
    const { onOpen  } = (0,_contexts_SidebarContext__WEBPACK_IMPORTED_MODULE_3__/* .useSidebarContext */ .S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        as: "header",
        w: "100%",
        maxW: 1120,
        h: "20",
        mx: "auto",
        px: "2",
        py: "2",
        align: "center",
        boxShadow: "0 1px 0 #ccc",
        color: "gray.500",
        fontWeight: "bold",
        children: [
            isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    as: react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiMenu
                }),
                onClick: onOpen,
                variant: "unstyled",
                fontSize: "20",
                mr: "2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: "Farma Lopes"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                ml: "auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            children: "Iago Oliveira"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            size: "md",
                            name: "IAfgo"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/contexts/SidebarContext.js
var SidebarContext = __webpack_require__(519);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./src/components/SidebarNav.js





const SidebarNav = ()=>{
    const { asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: "6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "xs",
                        fontWeight: "bold",
                        color: "gray.400",
                        children: "CADASTRO"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            _hover: {
                                bg: "gray.100"
                            },
                            px: "4",
                            py: "2",
                            borderRadius: 5,
                            bg: asPath === "/" ? "gray.200" : "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    fontSize: "md",
                                    fontWeight: "medium",
                                    color: "gray.500",
                                    children: "PRODUTOS"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "xs",
                        fontWeight: "bold",
                        color: "gray.400",
                        children: "ESTOQUE"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                _hover: {
                                    bg: "gray.100"
                                },
                                px: "4",
                                py: "2",
                                borderRadius: 5,
                                bg: asPath === "/balance" ? "gray.200" : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/balance",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "md",
                                        fontWeight: "medium",
                                        color: "gray.500",
                                        children: "SALDO"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                _hover: {
                                    bg: "gray.100"
                                },
                                px: "4",
                                py: "2",
                                borderRadius: 5,
                                bg: asPath === "/stockEntries" ? "gray.200" : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/stockEntries",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "md",
                                        fontWeight: "medium",
                                        color: "gray.500",
                                        children: "ENTRADAS"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                _hover: {
                                    bg: "gray.100"
                                },
                                px: "4",
                                py: "2",
                                borderRadius: 5,
                                bg: asPath === "/stockOutputs" ? "gray.200" : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/stockOutputs",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "md",
                                        fontWeight: "medium",
                                        color: "gray.500",
                                        children: "SA\xcdDAS"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_SidebarNav = (SidebarNav);

;// CONCATENATED MODULE: ./src/components/Sidebar.js





const Sidebar = ()=>{
    const { isOpen , onClose  } = (0,SidebarContext/* useSidebarContext */.S)();
    const isDrawerSidebar = (0,react_.useBreakpointValue)({
        base: true,
        lg: false
    });
    if (isDrawerSidebar) {
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Drawer, {
            isOpen: isOpen,
            placement: "left",
            onClose: ()=>onClose()
            ,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                    p: "2",
                    onClick: ()=>onClose()
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerBody, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarNav, {})
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "aside",
        w: "64",
        mr: "8",
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarNav, {})
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);


/***/ }),

/***/ 519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SidebarProvider),
/* harmony export */   "S": () => (/* binding */ useSidebarContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
const SidebarProvider = ({ children  })=>{
    const disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContext.Provider, {
        value: disclosure,
        children: children
    });
};
const useSidebarContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(SidebarContext)
;


/***/ })

};
;