"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/PageChange/PageChange.js


// reactstrap components
// import { Spinner } from "reactstrap";
// core components
function PageChange(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-cover fixed z-40 w-full h-full top-0 left-0",
                style: {
                    backgroundImage: "url('/img/img-1-1000x600.jpg')"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-32 mx-auto max-w-sm text-center relative z-50 top-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-circle-notch animate-spin text-white mx-auto text-6xl"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        className: "text-lg font-medium text-white",
                        children: [
                            "Loading page contents for: ",
                            props.path
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js










router_default().events.on("routeChangeStart", (url)=>{
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    external_react_dom_default().render(/*#__PURE__*/ jsx_runtime_.jsx(PageChange, {
        path: url
    }), document.getElementById("page-transition"));
});
router_default().events.on("routeChangeComplete", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
router_default().events.on("routeChangeError", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
class MyApp extends app["default"] {
    componentDidMount() {
        let comment = document.createComment(`

=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
        document.insertBefore(comment, document.documentElement);
    }
    static async getInitialProps({ Component , router , ctx  }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps
        };
    }
    render() {
        const { Component , pageProps  } = this.props;
        const Layout = Component.layout || (({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: children
            })
        );
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: " Website by SWX"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            ]
        });
    }
};


/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [544], () => (__webpack_exec__(5591)));
module.exports = __webpack_exports__;

})();