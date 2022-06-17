"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MainPage/Works2.js":
/*!***************************************!*\
  !*** ./components/MainPage/Works2.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Works; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar featuredWorks = [\n    //image resolution 1300x1300 ou 3000x3000\n    {\n        key: 1,\n        urlImage: \"./img/Works/artwork_lowkey.jpg\",\n        artistName: \"Ricko Sicko\",\n        songName: \"LOWKEY\",\n        year: \"2022\",\n        YoutubeLink: \"https://www.youtube.com/watch?v=FKZThNEChyo\",\n        SpotifyLink: \"https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0\",\n        ArtistInsta: \"https://www.instagram.com/ricardoventuras/\"\n    },\n    {\n        key: 2,\n        urlImage: \"./img/Works/artwork_pensamentoClean.png\",\n        artistName: \"Raptil\",\n        songName: \"Pensamento Clean\",\n        year: \"2022\",\n        YoutubeLink: \"https://www.youtube.com/watch?v=bDk6q4219mw\",\n        SpotifyLink: \"https://open.spotify.com/track/5f84wLErw3TjcsZE0bTHs8?si=c48aeba37a8948f9\",\n        ArtistInsta: \"https://www.instagram.com/raptil_2560/\"\n    },\n    {\n        key: 3,\n        urlImage: \"./img/Works/artwork_Sacrificios.jpeg\",\n        artistName: \"Ricko Sicko\",\n        songName: \"Sacrif\\xedcios\",\n        year: \"2021\",\n        YoutubeLink: \"https://www.youtube.com/watch?v=zKlHUYGG3qc\",\n        SpotifyLink: \"https://open.spotify.com/track/7FxLDllwOFxDYvckxKZb9S?si=d7559e5ed17e4d0e&nd=1\",\n        ArtistInsta: \"https://www.instagram.com/ricardoventuras/\"\n    },\n    {\n        key: 4,\n        urlImage: \"./img/Works/artwork_lowkey.jpg\",\n        artistName: \"Ricko Sicko\",\n        songName: \"LOWKEY\",\n        year: \"2022\",\n        YoutubeLink: \"https://www.youtube.com/watch?v=FKZThNEChyo\",\n        SpotifyLink: \"https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0\",\n        ArtistInsta: \"https://www.instagram.com/ricardoventuras/\"\n    },\n    {\n        key: 5,\n        urlImage: \"./img/Works/artwork_pensamentoClean.png\",\n        Raptil: \"Raptil\",\n        songName: \"Pensamento Clean\",\n        year: \"2022\",\n        YoutubeLink: \"https://www.youtube.com/watch?v=bDk6q4219mw\",\n        SpotifyLink: \"https://open.spotify.com/track/5f84wLErw3TjcsZE0bTHs8?si=c48aeba37a8948f9\",\n        ArtistInsta: \"https://www.instagram.com/raptil_2560/\"\n    },\n    {\n        key: 6,\n        urlImage: \"./img/Works/artwork_lowkey.jpg\",\n        artistName: \"Ricko Sicko\",\n        songName: \"LOWKEY\",\n        year: \"2022\",\n        YoutubeLink: \"https://www.youtube.com/watch?v=FKZThNEChyo\",\n        SpotifyLink: \"https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0\",\n        ArtistInsta: \"https://www.instagram.com/ricardoventuras/\"\n    }\n];\nfunction Works() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(featuredWorks), works = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3), numberOfitemsShown = ref1[0], setNumberOfItemsToShown = ref1[1];\n    var showMore = function() {\n        if (numberOfitemsShown + 3 <= works.length) {\n            setNumberOfItemsToShown(numberOfitemsShown + 3);\n        } else {\n            setNumberOfItemsToShown(works.length);\n        }\n    };\n    var itemsToShow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var _this1 = _this;\n        return works.slice(0, numberOfitemsShown).map(function(work, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                animate: animation,\n                className: \"w-1/3 md:w-1/3 text-left mb-6 featuredWorksDiv\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featuredWorks_uppertext p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white\",\n                                children: [\n                                    \" \",\n                                    work.songName,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-white\",\n                                children: [\n                                    \" por \",\n                                    work.artistName,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-white\",\n                                children: work.year\n                            }, void 0, false, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-full p-2 featuredWorks\",\n                        src: work.urlImage,\n                        alt: work.artistName + work.songName\n                    }, void 0, false, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featuredWorks_bottomtext p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: work.YoutubeLink,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaYoutube, {}, void 0, false, {\n                                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 40\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: work.SpotifyLink,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpotify, {}, void 0, false, {\n                                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 40\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: work.ArtistInsta,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {}, void 0, false, {\n                                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 40\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                lineNumber: 76,\n                columnNumber: 8\n            }, _this1);\n        });\n    }, [\n        works,\n        numberOfitemsShown\n    ]);\n    var ref2 = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({\n        threshold: 0.4\n    }), ref3 = ref2.ref, inView = ref2.inView;\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //when ref object is inView, inView returns true and useEffect code runs\n        // TODO: está a passar duas vezes no onClick\n        animation.start({\n            x: 0,\n            y: \"100vh\",\n            transition: {\n                type: \"spring\",\n                duration: 2,\n                bounce: 0.3\n            }\n        });\n        if (inView) {\n            animation.start({\n                x: 0,\n                y: 0,\n                transition: {\n                    type: \"spring\",\n                    duration: 2,\n                    bounce: 0.3\n                }\n            });\n        }\n        if (!inView) {\n            animation.start({\n                x: 0,\n                y: \"100vh\",\n                transition: {\n                    type: \"spring\",\n                    duration: 2,\n                    bounce: 0.3\n                }\n            });\n        }\n    }, [\n        inView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pb-20 pt-20 relative bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full sm:w-full justify-center flex fullwidthTitle px-6 mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3 sm:w-full mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-5xl text-black font-bold title text-right px-6 leading-4\",\n                            children: [\n                                \" TRABALHOS \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                                    lineNumber: 140,\n                                    columnNumber: 100\n                                }, this),\n                                \" REALIZADOS \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-2/3 sm:w-full mb-2 items-center align-self-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl text-black px-6 leading-4\",\n                            children: \"Estes s\\xe3o alguns dos nossos lan\\xe7amentos mais recentes. Sinta-se \\xe0 vontade para nos contactar em caso de d\\xfavidas.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full md:w-full justify-center px-6 container mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: ref3,\n                        className: \"w-full md:w-full flex flex-wrap justify-left limitedWorkElements\",\n                        children: itemsToShow.length ? itemsToShow : \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btnTypeForm\",\n                            onClick: showMore,\n                            children: \"Mostrar Mais\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                            lineNumber: 157,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                        lineNumber: 156,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/afonsocarvalho/Documents/code_Projects/Longrun/Longrun_Nextjs/components/MainPage/Works2.js\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n};\n_s(Works, \"0ROu68Aiqe+50TT25B+vhUOUmTQ=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation\n    ];\n});\n_c = Works;\nvar _c;\n$RefreshReg$(_c, \"Works\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO1FBQUNQLE1BQU07S0FBQyxDQUFDLENBQUM7SUFHYixxQkFDRSw4REFBQ1EsU0FBTztRQUFDbEIsU0FBUyxFQUFDLCtCQUErQjs7MEJBQ2hELDhEQUFDSCxLQUFHO2dCQUFDRyxTQUFTLEVBQUMsZ0VBQWdFOztrQ0FDN0UsOERBQUNILEtBQUc7d0JBQUNHLFNBQVMsRUFBQyxzQkFBc0I7a0NBQ25DLDRFQUFDQyxJQUFFOzRCQUFDRCxTQUFTLEVBQUMsK0RBQStEOztnQ0FBQyxhQUFXOzhDQUFBLDhEQUFDbUIsSUFBRTs7Ozt3Q0FBRztnQ0FBQSxjQUFZOzs7Ozs7Z0NBQUs7Ozs7OzRCQUM1RztrQ0FDTiw4REFBQ3RCLEtBQUc7d0JBQUNHLFNBQVMsRUFBQyxzREFBc0Q7a0NBQ25FLDRFQUFDb0IsR0FBQzs0QkFBQ3BCLFNBQVMsRUFBQyxtQ0FBbUM7c0NBQUMsOEhBQWdIOzs7OztnQ0FBSTs7Ozs7NEJBQ2pLOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNILEtBQUc7Z0JBQUNHLFNBQVMsRUFBQyx5REFBeUQ7O2tDQUNwRSw4REFBQ0gsS0FBRzt3QkFBRVksR0FBRyxFQUFFQSxJQUFHO3dCQUFFVCxTQUFTLEVBQUMsa0VBQWtFO2tDQUt2RlIsV0FBVyxDQUFDRCxNQUFNLEdBQUdDLFdBQVcsR0FBRyxZQUFZOzs7Ozs0QkFHbEQ7a0NBQ04sOERBQUNLLEtBQUc7d0JBQUNHLFNBQVMsRUFBQyxvQkFBb0I7a0NBQ2pDLDRFQUFDcUIsUUFBTTs0QkFBQ3JCLFNBQVMsRUFBQyxhQUFhOzRCQUFDc0IsT0FBTyxFQUFFaEMsUUFBUTtzQ0FBRSxjQUFZOzs7OztnQ0FBUzs7Ozs7NEJBQ3BFOzs7Ozs7b0JBRUY7Ozs7OztZQUNLLENBQ1g7Q0FDSDtHQXRHdUJKLEtBQUs7O1FBa0NIZCxrRUFBUztRQUdmRCx1REFBWTs7O0FBckNSZSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpblBhZ2UvV29ya3MyLmpzP2VjMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cblxuaW1wb3J0IHsgRmFJbnN0YWdyYW0sIEZhWW91dHViZSwgRmFTcG90aWZ5IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5jb25zdCBmZWF0dXJlZFdvcmtzID0gW1xuICAvL2ltYWdlIHJlc29sdXRpb24gMTMwMHgxMzAwIG91IDMwMDB4MzAwMFxuICB7XG4gICAga2V5OiAxLCB1cmxJbWFnZTogXCIuL2ltZy9Xb3Jrcy9hcnR3b3JrX2xvd2tleS5qcGdcIixcbiAgICBhcnRpc3ROYW1lOiBcIlJpY2tvIFNpY2tvXCIsIHNvbmdOYW1lOiBcIkxPV0tFWVwiLCB5ZWFyOiBcIjIwMjJcIixcbiAgICBZb3V0dWJlTGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUZLWlRoTkVDaHlvXCIsXG4gICAgU3BvdGlmeUxpbms6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzJUM2M5R3p0T3dqT2dvNWlvMXF5Vlo/c2k9N2NhMzFkN2IzZjhhNGNiMFwiLFxuICAgIEFydGlzdEluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmljYXJkb3ZlbnR1cmFzL1wiXG4gIH0sXG5cbiAge1xuICAgIGtleTogMiwgdXJsSW1hZ2U6IFwiLi9pbWcvV29ya3MvYXJ0d29ya19wZW5zYW1lbnRvQ2xlYW4ucG5nXCIsXG4gICAgYXJ0aXN0TmFtZTogXCJSYXB0aWxcIiwgc29uZ05hbWU6IFwiUGVuc2FtZW50byBDbGVhblwiLCB5ZWFyOiBcIjIwMjJcIixcbiAgICBZb3V0dWJlTGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWJEazZxNDIxOW13XCIsXG4gICAgU3BvdGlmeUxpbms6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVmODR3TEVydzNUamNzWkUwYlRIczg/c2k9YzQ4YWViYTM3YTg5NDhmOVwiLFxuICAgIEFydGlzdEluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmFwdGlsXzI1NjAvXCJcbiAgfSxcblxuICB7XG4gICAga2V5OiAzLCB1cmxJbWFnZTogXCIuL2ltZy9Xb3Jrcy9hcnR3b3JrX1NhY3JpZmljaW9zLmpwZWdcIixcbiAgICBhcnRpc3ROYW1lOiBcIlJpY2tvIFNpY2tvXCIsIHNvbmdOYW1lOiBcIlNhY3JpZsOtY2lvc1wiLCB5ZWFyOiBcIjIwMjFcIixcbiAgICBZb3V0dWJlTGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXpLbEhVWUdHM3FjXCIsXG4gICAgU3BvdGlmeUxpbms6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzdGeExEbGx3T0Z4RFl2Y2t4S1piOVM/c2k9ZDc1NTllNWVkMTdlNGQwZSZuZD0xXCIsXG4gICAgQXJ0aXN0SW5zdGE6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yaWNhcmRvdmVudHVyYXMvXCJcbiAgfSxcblxuICB7XG4gICAga2V5OiA0LCB1cmxJbWFnZTogXCIuL2ltZy9Xb3Jrcy9hcnR3b3JrX2xvd2tleS5qcGdcIixcbiAgICBhcnRpc3ROYW1lOiBcIlJpY2tvIFNpY2tvXCIsIHNvbmdOYW1lOiBcIkxPV0tFWVwiLCB5ZWFyOiBcIjIwMjJcIixcbiAgICBZb3V0dWJlTGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUZLWlRoTkVDaHlvXCIsXG4gICAgU3BvdGlmeUxpbms6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzJUM2M5R3p0T3dqT2dvNWlvMXF5Vlo/c2k9N2NhMzFkN2IzZjhhNGNiMFwiLFxuICAgIEFydGlzdEluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmljYXJkb3ZlbnR1cmFzL1wiXG4gIH0sXG5cbiAge1xuICAgIGtleTogNSwgdXJsSW1hZ2U6IFwiLi9pbWcvV29ya3MvYXJ0d29ya19wZW5zYW1lbnRvQ2xlYW4ucG5nXCIsXG4gICAgUmFwdGlsOiBcIlJhcHRpbFwiLCBzb25nTmFtZTogXCJQZW5zYW1lbnRvIENsZWFuXCIsIHllYXI6IFwiMjAyMlwiLFxuICAgIFlvdXR1YmVMaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YkRrNnE0MjE5bXdcIixcbiAgICBTcG90aWZ5TGluazogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNWY4NHdMRXJ3M1RqY3NaRTBiVEhzOD9zaT1jNDhhZWJhMzdhODk0OGY5XCIsXG4gICAgQXJ0aXN0SW5zdGE6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yYXB0aWxfMjU2MC9cIlxuICB9LFxuXG4gIHtcbiAgICBrZXk6IDYsIHVybEltYWdlOiBcIi4vaW1nL1dvcmtzL2FydHdvcmtfbG93a2V5LmpwZ1wiLFxuICAgIGFydGlzdE5hbWU6IFwiUmlja28gU2lja29cIiwgc29uZ05hbWU6IFwiTE9XS0VZXCIsIHllYXI6IFwiMjAyMlwiLFxuICAgIFlvdXR1YmVMaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RktaVGhORUNoeW9cIixcbiAgICBTcG90aWZ5TGluazogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMlQzYzlHenRPd2pPZ281aW8xcXlWWj9zaT03Y2EzMWQ3YjNmOGE0Y2IwXCIsXG4gICAgQXJ0aXN0SW5zdGE6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yaWNhcmRvdmVudHVyYXMvXCJcbiAgfVxuXG5dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtzKCkge1xuICBjb25zdCBbd29ya3NdID0gdXNlU3RhdGUoZmVhdHVyZWRXb3Jrcyk7XG4gIGNvbnN0IFtudW1iZXJPZml0ZW1zU2hvd24sIHNldE51bWJlck9mSXRlbXNUb1Nob3duXSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBzaG93TW9yZSA9ICgpID0+IHtcbiAgICBpZiAobnVtYmVyT2ZpdGVtc1Nob3duICsgMyA8PSB3b3Jrcy5sZW5ndGgpIHtcbiAgICAgIHNldE51bWJlck9mSXRlbXNUb1Nob3duKG51bWJlck9maXRlbXNTaG93biArIDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXROdW1iZXJPZkl0ZW1zVG9TaG93bih3b3Jrcy5sZW5ndGgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXRlbXNUb1Nob3cgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gd29ya3NcbiAgICAgIC5zbGljZSgwLCBudW1iZXJPZml0ZW1zU2hvd24pXG4gICAgICAubWFwKCh3b3JrLCBpbmRleCkgPT5cbiAgICAgIFxuICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGFuaW1hdGU9e2FuaW1hdGlvbn1cbiAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgbWQ6dy0xLzMgdGV4dC1sZWZ0IG1iLTYgZmVhdHVyZWRXb3Jrc0RpdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWRXb3Jrc191cHBlcnRleHQgcC0yXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPiB7d29yay5zb25nTmFtZX0gPC9oMj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+IHBvciB7d29yay5hcnRpc3ROYW1lfSA8L2g0PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57d29yay55ZWFyfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGZlYXR1cmVkV29ya3NcIiBzcmM9e3dvcmsudXJsSW1hZ2V9IGFsdD17d29yay5hcnRpc3ROYW1lICsgd29yay5zb25nTmFtZX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkV29ya3NfYm90dG9tdGV4dCBwLTJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3dvcmsuWW91dHViZUxpbmt9PjxGYVlvdXR1YmUgLz48L2E+XG4gICAgICAgICAgICA8YSBocmVmPXt3b3JrLlNwb3RpZnlMaW5rfT48RmFTcG90aWZ5IC8+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17d29yay5BcnRpc3RJbnN0YX0+PEZhSW5zdGFncmFtIC8+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApO1xuICB9LCBbd29ya3MsIG51bWJlck9maXRlbXNTaG93bl0pO1xuXG5cbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICB0aHJlc2hvbGQ6IDAuNFxuICB9KTtcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3doZW4gcmVmIG9iamVjdCBpcyBpblZpZXcsIGluVmlldyByZXR1cm5zIHRydWUgYW5kIHVzZUVmZmVjdCBjb2RlIHJ1bnNcbiAgICAvLyBUT0RPOiBlc3TDoSBhIHBhc3NhciBkdWFzIHZlemVzIG5vIG9uQ2xpY2tcbiAgICBcblxuXG4gICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAnMTAwdmgnLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiAnc3ByaW5nJywgZHVyYXRpb246IDIsIGJvdW5jZTogMC4zXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBhbmltYXRpb24uc3RhcnQoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ3NwcmluZycsIGR1cmF0aW9uOiAyLCBib3VuY2U6IDAuM1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWluVmlldykge1xuICAgICAgYW5pbWF0aW9uLnN0YXJ0KHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogJzEwMHZoJyxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLCBkdXJhdGlvbjogMiwgYm91bmNlOiAwLjNcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaW5WaWV3XSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTIwIHB0LTIwIHJlbGF0aXZlIGJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgc206dy1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXggZnVsbHdpZHRoVGl0bGUgcHgtNiBtYi02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgc206dy1mdWxsIG1iLTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ibGFjayBmb250LWJvbGQgdGl0bGUgdGV4dC1yaWdodCBweC02IGxlYWRpbmctNFwiPiBUUkFCQUxIT1MgPGJyIC8+IFJFQUxJWkFET1MgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctMi8zIHNtOnctZnVsbCBtYi0yIGl0ZW1zLWNlbnRlciBhbGlnbi1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ibGFjayBweC02IGxlYWRpbmctNFwiPkVzdGVzIHPDo28gYWxndW5zIGRvcyBub3Nzb3MgbGFuw6dhbWVudG9zIG1haXMgcmVjZW50ZXMuIFNpbnRhLXNlIMOgIHZvbnRhZGUgcGFyYSBub3MgY29udGFjdGFyIGVtIGNhc28gZGUgZMO6dmlkYXMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIG1kOnctZnVsbCBqdXN0aWZ5LWNlbnRlciBweC02IGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiAgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LWZ1bGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1sZWZ0IGxpbWl0ZWRXb3JrRWxlbWVudHNcIj5cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmRpdlxuICAgICAgICAgICAgYW5pbWF0ZT17YW5pbWF0aW9ufVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctZnVsbCB0ZXh0LWxlZnQgbWItNiBmZWF0dXJlZFdvcmtzRGl2XCJcbiAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgIHtpdGVtc1RvU2hvdy5sZW5ndGggPyBpdGVtc1RvU2hvdyA6IFwiTG9hZGluZy4uLlwifVxuICAgICAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5UeXBlRm9ybVwiIG9uQ2xpY2s9e3Nob3dNb3JlfT5Nb3N0cmFyIE1haXM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uID5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJGYUluc3RhZ3JhbSIsIkZhWW91dHViZSIsIkZhU3BvdGlmeSIsImZlYXR1cmVkV29ya3MiLCJrZXkiLCJ1cmxJbWFnZSIsImFydGlzdE5hbWUiLCJzb25nTmFtZSIsInllYXIiLCJZb3V0dWJlTGluayIsIlNwb3RpZnlMaW5rIiwiQXJ0aXN0SW5zdGEiLCJSYXB0aWwiLCJXb3JrcyIsIndvcmtzIiwibnVtYmVyT2ZpdGVtc1Nob3duIiwic2V0TnVtYmVyT2ZJdGVtc1RvU2hvd24iLCJzaG93TW9yZSIsImxlbmd0aCIsIml0ZW1zVG9TaG93Iiwic2xpY2UiLCJtYXAiLCJ3b3JrIiwiaW5kZXgiLCJkaXYiLCJhbmltYXRlIiwiYW5pbWF0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJoNCIsImltZyIsInNyYyIsImFsdCIsImEiLCJocmVmIiwidGhyZXNob2xkIiwicmVmIiwiaW5WaWV3Iiwic3RhcnQiLCJ4IiwieSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZHVyYXRpb24iLCJib3VuY2UiLCJzZWN0aW9uIiwiYnIiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainPage/Works2.js\n");

/***/ })

});