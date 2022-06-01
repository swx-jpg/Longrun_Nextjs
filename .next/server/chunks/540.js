"use strict";
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 9540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(3841);
;// CONCATENATED MODULE: ./components/Dropdowns/PagesDropdown.js




const PagesDropdown = ()=>{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = external_react_default().useState(false);
    const btnDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const popoverDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const openDropdownPopover = ()=>{
        (0,core_.createPopper)(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = ()=>{
        setDropdownPopoverShow(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                href: "#pablo",
                ref: btnDropdownRef,
                onClick: (e)=>{
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                },
                children: "Demo Pages"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: popoverDropdownRef,
                className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400",
                        children: "Admin Layout"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/admin/dashboard",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Dashboard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/admin/settings",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Settings"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/admin/tables",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Tables"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/admin/maps",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Maps"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-0 mx-4 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400",
                        children: "Auth Layout"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/auth/login",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Login"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/auth/register",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Register"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-0 mx-4 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400",
                        children: "No Layout"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/landing",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Landing"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/profile",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Profile"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Dropdowns_PagesDropdown = (PagesDropdown);

;// CONCATENATED MODULE: ./components/Navbars/AuthNavbar.js



// components

function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = external_react_default().useState(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
                                    href: "#pablo",
                                    children: "Notus NextJS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: ()=>setNavbarOpen(!navbarOpen)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "text-white fas fa-bars"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden"),
                        id: "example-navbar-warning",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "flex flex-col lg:flex-row list-none mr-auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                        href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-auth-navbar",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
                                            }),
                                            " ",
                                            "Docs"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col lg:flex-row list-none lg:ml-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdowns_PagesDropdown, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F",
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "lg:hidden inline-block ml-2",
                                                    children: "Share"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.",
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "lg:hidden inline-block ml-2",
                                                    children: "Tweet"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-auth-navbar",
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "lg:hidden inline-block ml-2",
                                                    children: "Star"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            className: "bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                            type: "button",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-arrow-alt-circle-down"
                                                }),
                                                " Download"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ })

};
;