"use strict";
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 8413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Admin)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(3841);
;// CONCATENATED MODULE: ./components/Dropdowns/UserDropdown.js



const UserDropdown = ()=>{
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
                className: "text-blueGray-500 block",
                href: "#pablo",
                ref: btnDropdownRef,
                onClick: (e)=>{
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "items-center flex",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "...",
                            className: "w-full rounded-full align-middle border-none shadow-lg",
                            src: "/img/team-1-800x800.jpg"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: popoverDropdownRef,
                className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Another action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Something else here"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-0 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Seprated link"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Dropdowns_UserDropdown = (UserDropdown);

;// CONCATENATED MODULE: ./components/Navbars/AdminNavbar.js



function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-white text-sm uppercase hidden lg:inline-block font-semibold",
                        href: "#pablo",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Dashboard"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        className: "md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex w-full flex-wrap items-stretch",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-search"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Search here...",
                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex-col md:flex-row list-none items-center hidden md:flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdowns_UserDropdown, {})
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Dropdowns/NotificationDropdown.js



const NotificationDropdown = ()=>{
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
                className: "text-blueGray-500 block py-1 px-3",
                href: "#pablo",
                ref: btnDropdownRef,
                onClick: (e)=>{
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-bell"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: popoverDropdownRef,
                className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Another action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Something else here"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-0 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Seprated link"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Dropdowns_NotificationDropdown = (NotificationDropdown);

;// CONCATENATED MODULE: ./components/Sidebar/Sidebar.js






function Sidebar() {
    const [collapseShow, setCollapseShow] = external_react_default().useState("hidden");
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
                        type: "button",
                        onClick: ()=>setCollapseShow("bg-white m-2 py-3 px-6")
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#pablo",
                            className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
                            children: "Notus NextJS"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "md:hidden items-center flex flex-wrap list-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "inline-block relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdowns_NotificationDropdown, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "inline-block relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdowns_UserDropdown, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-6/12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
                                                    children: "LongRun Logo"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-6/12 flex justify-end",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
                                                onClick: ()=>setCollapseShow("hidden")
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-times"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                className: "mt-6 mb-4 md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-3 pt-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        placeholder: "Search",
                                        className: "border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                className: "my-4 md:min-w-full"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
                                children: "Admin Layout Pages"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "md:flex-col md:min-w-full flex flex-col list-none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/admin/dashboard",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-tv mr-2 text-sm " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Dashboard"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/admin/settings",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/settings") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-tools mr-2 text-sm " + (router.pathname.indexOf("/admin/settings") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Settings"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/admin/tables",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/tables") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/tables") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Tables"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/admin/maps",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/maps") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-map-marked mr-2 text-sm " + (router.pathname.indexOf("/admin/maps") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Maps"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                className: "my-4 md:min-w-full"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
                                children: "Auth Layout Pages"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "md:flex-col md:min-w-full flex flex-col list-none md:mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/auth/login",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-fingerprint text-blueGray-400 mr-2 text-sm"
                                                    }),
                                                    " ",
                                                    "Login"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/auth/register",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"
                                                    }),
                                                    " ",
                                                    "Register"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                className: "my-4 md:min-w-full"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
                                children: "No Layout Pages"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "md:flex-col md:min-w-full flex flex-col list-none md:mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/landing",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-newspaper text-blueGray-400 mr-2 text-sm"
                                                    }),
                                                    " ",
                                                    "Landing Page"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/profile",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#pablo",
                                                className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-user-circle text-blueGray-400 mr-2 text-sm"
                                                    }),
                                                    " ",
                                                    "Profile Page"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                className: "my-4 md:min-w-full"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
                                children: "Documentation"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "md:flex-col md:min-w-full flex flex-col list-none md:mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-paint-brush mr-2 text-blueGray-300 text-base"
                                                }),
                                                "Styles"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-css3-alt mr-2 text-blueGray-300 text-base"
                                                }),
                                                "CSS Components"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-angular mr-2 text-blueGray-300 text-base"
                                                }),
                                                "Angular"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-js-square mr-2 text-blueGray-300 text-base"
                                                }),
                                                "Javascript"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-react mr-2 text-blueGray-300 text-base"
                                                }),
                                                "NextJS"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-react mr-2 text-blueGray-300 text-base"
                                                }),
                                                "React"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-link mr-2 text-blueGray-300 text-base"
                                                }),
                                                "Svelte"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "inline-flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus",
                                            target: "_blank",
                                            className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-vuejs mr-2 text-blueGray-300 text-base"
                                                }),
                                                "VueJS"
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

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./components/Cards/CardStats.js



function CardStats({ statSubtitle , statTitle , statArrow , statPercent , statPercentColor , statDescripiron , statIconName , statIconColor ,  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-auto p-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full pr-4 max-w-full flex-grow flex-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "text-blueGray-400 uppercase font-bold text-xs",
                                        children: statSubtitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-semibold text-xl text-blueGray-700",
                                        children: statTitle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-auto pl-4 flex-initial",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " + statIconColor,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: statIconName
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-sm text-blueGray-400 mt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: statPercentColor + " mr-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: statArrow === "up" ? "fas fa-arrow-up" : statArrow === "down" ? "fas fa-arrow-down" : ""
                                    }),
                                    " ",
                                    statPercent,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "whitespace-nowrap",
                                children: statDescripiron
                            })
                        ]
                    })
                ]
            })
        })
    });
};
CardStats.defaultProps = {
    statSubtitle: "Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500"
};
CardStats.propTypes = {
    statSubtitle: (external_prop_types_default()).string,
    statTitle: (external_prop_types_default()).string,
    statArrow: external_prop_types_default().oneOf([
        "up",
        "down"
    ]),
    statPercent: (external_prop_types_default()).string,
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: (external_prop_types_default()).string,
    statDescripiron: (external_prop_types_default()).string,
    statIconName: (external_prop_types_default()).string,
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./components/Headers/HeaderStats.js


// components

function HeaderStats() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative bg-blueGray-800 md:pt-32 pb-32 pt-12",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-4 md:px-10 mx-auto w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStats, {
                                    statSubtitle: "TRAFFIC",
                                    statTitle: "350,897",
                                    statArrow: "up",
                                    statPercent: "3.48",
                                    statPercentColor: "text-emerald-500",
                                    statDescripiron: "Since last month",
                                    statIconName: "far fa-chart-bar",
                                    statIconColor: "bg-red-500"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStats, {
                                    statSubtitle: "NEW USERS",
                                    statTitle: "2,356",
                                    statArrow: "down",
                                    statPercent: "3.48",
                                    statPercentColor: "text-red-500",
                                    statDescripiron: "Since last week",
                                    statIconName: "fas fa-chart-pie",
                                    statIconColor: "bg-orange-500"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStats, {
                                    statSubtitle: "SALES",
                                    statTitle: "924",
                                    statArrow: "down",
                                    statPercent: "1.10",
                                    statPercentColor: "text-orange-500",
                                    statDescripiron: "Since yesterday",
                                    statIconName: "fas fa-users",
                                    statIconColor: "bg-pink-500"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStats, {
                                    statSubtitle: "PERFORMANCE",
                                    statTitle: "49,65%",
                                    statArrow: "up",
                                    statPercent: "12",
                                    statPercentColor: "text-emerald-500",
                                    statDescripiron: "Since last month",
                                    statIconName: "fas fa-percent",
                                    statIconColor: "bg-lightBlue-500"
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Footers/FooterAdmin.js


function FooterAdmin() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "block py-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "mb-4 border-b-1 border-blueGray-200"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap items-center md:justify-between justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-4/12 px-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left",
                                    children: [
                                        "Copyright \xa9 ",
                                        new Date().getFullYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com?ref=nnjs-footer-admin",
                                            className: "text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1",
                                            children: "Creative Tim"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-8/12 px-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "flex flex-wrap list-none md:justify-end justify-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.creative-tim.com?ref=nnjs-footer-admin",
                                                className: "text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",
                                                children: "Creative Tim"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.creative-tim.com/presentation?ref=nnjs-footer-admin",
                                                className: "text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",
                                                children: "About Us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://blog.creative-tim.com?ref=nnjs-footer-admin",
                                                className: "text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",
                                                children: "Blog"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-admin",
                                                className: "text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",
                                                children: "MIT License"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./layouts/Admin.js


// components




function Admin({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative md:ml-64 bg-blueGray-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderStats, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-4 md:px-10 mx-auto w-full -m-24",
                        children: [
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(FooterAdmin, {})
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;