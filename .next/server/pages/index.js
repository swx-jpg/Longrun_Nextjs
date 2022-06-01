"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2518:
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
;// CONCATENATED MODULE: ./components/Dropdowns/IndexDropdown.js




const IndexDropdown = ()=>{
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
                "data-tf-popup": "V1X1ud9P",
                className: "aTypeForm hover:text-white text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                "data-tf-iframe-props": "title=Booking Form Template (Longrun)",
                "data-tf-medium": "snippet",
                children: "Contacte-nos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "//embed.typeform.com/next/embed.js"
            })
        ]
    });
};
/* harmony default export */ const Dropdowns_IndexDropdown = (IndexDropdown);

;// CONCATENATED MODULE: ./components/Navbars/IndexNavbar.js



// components

function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = external_react_default().useState(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            id: "idNavHeader",
            className: "top-0 left-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent",
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
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "",
                                        src: "./img/Slider/longrun_logo.png",
                                        alt: "Longrun Music Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: ()=>setNavbarOpen(!navbarOpen)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-bars text-white"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lg:flex flex-grow items-center bg-black lg:border-1 lg:border-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block" : " hidden"),
                        id: "example-navbar-warning",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "flex flex-col lg:flex-row list-none lg:ml-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdowns_IndexDropdown, {})
                            })
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2518);
/* harmony import */ var components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3289);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8123);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3920);
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prettier__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_7__]);
framer_motion__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react/jsx-no-target-blank */ 



// import { FaSpotify } from '@react-icons/all-files/fa/FaSpotify';
// import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
// import { FaYoutubeSquare } from 'react-icons/fa';

// import { FaInstagram, FaYouTube } from 'react-icons/fa';





//projects 
//https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c
// const images = ['./public/img/Slider/Ficheiro_1.jpg'];
const imagesCarousel = [
    {
        key: 2,
        url: "./img/Slider/Ficheiro_2.jpg",
        title: "Transformamos as tuas ideias em realidade",
        subText: "Fala connosco.",
        btnText: "Contacte-nos",
        btnUrl: "#"
    },
    {
        key: 3,
        url: "./img/Slider/Ficheiro_3.jpg",
        title: "Transformamos as tuas ideias em realidade",
        subText: "Fala connosco.",
        btnText: "Contacte-nos",
        btnUrl: "#"
    }
];
const cardsConst = [
    {
        key: 1,
        urlImage: "./img/Slider/Ficheiro_3.jpg",
        alt: "Image 1",
        url: "#",
        text: "Grava\xe7\xe3o",
        animation: "animation"
    },
    {
        key: 2,
        urlImage: "./img/Slider/Ficheiro_2.jpg",
        alt: "Image 2",
        url: "#",
        text: "Mixing/Mastering",
        animation: "animationReverse"
    },
    {
        key: 3,
        urlImage: "./img/Slider/Ficheiro_1.jpg",
        alt: "Image 3",
        url: "#",
        text: "V\xeddeo",
        animation: "animationReverse"
    }
];
const welcomeTo = [
    {
        key: 1,
        title: "Welcome" + /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}) + "to our" + /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}) + "studio",
        textContent: "Somos um est\xfadio de grava\xe7\xe3o situado em Torres Vedras, Portugal. A nossa promessa \xe9 cobrir desde grava\xe7\xe3o de \xe1udio, a gest\xe3o de artistas e planeamento e grava\xe7\xe3o de v\xeddeo."
    }
];
const workingArtists = [
    {
        key: 1,
        artistName: "Ricko Sicko"
    },
    {
        key: 2,
        artistName: "Raptil"
    }
];
const studios = [
    {
        key: 1,
        urlImage: "./img/Studio/Ficheiro_1.jpg",
        alt: "Image Studio A",
        heading: "Est\xfadio A",
        textContent: "Este est\xfadio tem equipamento de grava\xe7\xe3o, colunas monitoras, cabine de grava\xe7\xe3o e isolamento, para que possa ter uma experi\xeancia de capta\xe7\xe3o de \xe1udio agrad\xe1vel.",
        btnText: "Contacte-nos"
    }
];
const featuredWorks = [
    //image resolution 1300x1300 ou 3000x3000
    {
        key: 1,
        urlImage: "./img/Works/artwork_lowkey.jpg",
        artistName: "Ricko Sicko",
        songName: "LOWKEY",
        year: "2022",
        YoutubeLink: "https://www.youtube.com/watch?v=FKZThNEChyo",
        SpotifyLink: "https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0",
        ArtistInsta: "https://www.instagram.com/ricardoventuras/"
    },
    {
        key: 2,
        urlImage: "./img/Works/artwork_pensamentoClean.png",
        artistName: "Raptil",
        songName: "Pensamento Clean",
        year: "2022",
        YoutubeLink: "https://www.youtube.com/watch?v=bDk6q4219mw",
        SpotifyLink: "https://open.spotify.com/track/5f84wLErw3TjcsZE0bTHs8?si=c48aeba37a8948f9",
        ArtistInsta: "https://www.instagram.com/raptil_2560/"
    },
    {
        key: 3,
        urlImage: "./img/Works/artwork_Sacrificios.jpeg",
        artistName: "Ricko Sicko",
        songName: "Sacrif\xedcios",
        year: "2021",
        YoutubeLink: "https://www.youtube.com/watch?v=zKlHUYGG3qc",
        SpotifyLink: "https://open.spotify.com/track/7FxLDllwOFxDYvckxKZb9S?si=d7559e5ed17e4d0e&nd=1",
        ArtistInsta: "https://www.instagram.com/ricardoventuras/"
    }
];
const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
function Index() {
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useViewportScroll)();
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__.useInView)({
        threshold: 0.4
    });
    // const {ref2, inView2} = useInView({
    //   threshold: 0.5
    // });
    const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();
    const animationWorks = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();
    // const animationReverse  = useAnimation();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //when ref object is inView, inView returns true and useEffect code runs
        animation.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                duration: 2,
                bounce: 0.3
            }
        });
        if (inView) {
            animation.start({
                x: 0,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 2,
                    bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({
                x: "100vw",
                y: "0vh",
                transition: {
                    type: "spring",
                    duration: 2,
                    bounce: 0.3
                }
            });
        }
    }, [
        inView
    ]);
    // useEffect(()=> {
    //   //when ref object is inView, inView returns true and useEffect code runs
    //   animationWorks.start({
    //     x: 0,
    //     y: 0,
    //     transition:{
    //       type: 'spring', duration: 2, bounce: 0.3
    //     }
    //   });
    //   if ( inView ) {
    //     animationWorks.start({
    //       x: 0,
    //       y: '0vh',
    //       transition:{
    //         type: 'spring', duration: 2, bounce: 0.3
    //       }
    //     });
    //   }
    //   if ( !inView){
    //     animationWorks.start({
    //       x: '100vw',
    //       y: '0vh',
    //       transition:{
    //         type: 'spring', duration: 2, bounce: 0.3
    //       }
    //     });
    //   }
    // }, [inView]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Client-side-only code
        window.addEventListener("scroll", (e)=>{
            const nav = document.querySelector("#idNavHeader");
            if (window.pageYOffset > 0) {
                nav.classList.add("navScrolled");
                nav.classList.remove("navFixed");
            } else {
                nav.classList.remove("navScrolled");
                nav.classList.add("navFixed");
            }
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fixed: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_alice_carousel__WEBPACK_IMPORTED_MODULE_6___default()), {
                autoPlay: true,
                autoPlayInterval: "1500",
                autoHeight: "true",
                touchTracking: "true",
                disableButtonsControls: "true",
                className: "classAliceCarousel",
                children: imagesCarousel.map((e, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " w-full flex justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: e.url,
                                alt: "image_{e.url}"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full mb-2 text-center centerTextOverImage",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: " mx-auto text-5xl text-white border-solid border-b-6 pb-4 font-bold text-center px-6 leading-4",
                                        children: e.title.toUpperCase()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xl text-white px-6 leading-4 mb-6",
                                        children: e.subText
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btnTypeForm leading-20",
                                        "data-tf-popup": "V1X1ud9P",
                                        "data-tf-iframe-props": "title=Booking Form Template (Longrun)",
                                        "data-tf-medium": "snippet",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "leading-normal",
                                            children: e.btnText
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                                        src: "//embed.typeform.com/next/embed.js"
                                    })
                                ]
                            })
                        ]
                    }, key)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full justify-center px-6 bg-black topOverSlider",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: ref,
                    className: "w-full md:w-full flex flex-wrap justify-left z-20",
                    children: cardsConst.map((e, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                            className: "w-1/3 mb-10 px-4 relative divCards cardsServices z-20",
                            animate: animation,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: e.url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: e.urlImage,
                                        alt: e.alt
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: e.url,
                                    className: "justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "mb-2 p-2 bg-black border centerTextOverImage text-2xl font-bold tracking-tight text-white dark:text-white ",
                                        children: e.text
                                    })
                                })
                            ]
                        }, key)
                    )
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "pb-20 pt-10 relative bg-black ",
                children: welcomeTo.map((e, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full md:w-full flex fullwidthTitle justify-center px-6 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " mb-2 w-1/3 sm:w-full ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "text-5xl text-white font-bold text-right title px-6 leading-4",
                                    children: [
                                        " BEM-VINDOS ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " AO NOSSO ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " EST\xdaDIO  "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " w-2/3 sm:w-full justify-center px-mb-2 align-self-center ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl text-white px-6 leading-4",
                                    children: e.textContent
                                })
                            })
                        ]
                    }, key)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: " pb-20 pt-20 relative bg-white studio_background",
                children: studios.map((e, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " w-full md:w-full flex justify-center px-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full sm:w-full mb-2 text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: " text-5xl width_fit mx-auto text-white border-solid border-b-6 pb-2 font-bold text-center px-6 leading-4",
                                    children: e.heading.toUpperCase()
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl text-white px-6 leading-4 mb-6",
                                    children: e.textContent
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "btnTypeForm leading-20",
                                    "data-tf-popup": "V1X1ud9P",
                                    "data-tf-iframe-props": "title=Booking Form Template (Longrun)",
                                    "data-tf-medium": "snippet",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "leading-normal",
                                        children: e.btnText
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                                    src: "//embed.typeform.com/next/embed.js"
                                })
                            ]
                        })
                    }, key)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "pb-20 pt-20 relative bg-black",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " w-full md:w-full flex fullwidthTitle justify-center px-6 mb-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " w-1/3 sm:w-full mb-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "text-5xl text-white font-bold text-right title px-6 leading-4",
                                    children: [
                                        " OS NOSSOS ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " ARTISTAS"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-2/3 flex mb-2 items-center align-self-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl text-white px-6 leading-4 ",
                                    children: "Aqui est\xe1 uma lista de alguns artistas com quem trabalhamos de momento. Esperemos aumentar em breve."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " w-full md:w-full flex flex-wrap justify-center artistList",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full md:w-full flex flex-wrap justify-left p-4 pb-0",
                            children: workingArtists.map((e, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-1/2 md:w-1/2 text-center mb-2 pl-2 ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-white",
                                        children: e.artistName
                                    })
                                }, key)
                            )
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "pb-20 pt-20 relative bg-white",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " w-full sm:w-full justify-center flex fullwidthTitle px-6 mb-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-1/3 sm:w-full mb-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "text-5xl text-black font-bold title text-right px-6 leading-4",
                                    children: [
                                        " TRABALHOS ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " REALIZADOS "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " w-2/3 sm:w-full mb-2 items-center align-self-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl text-black px-6 leading-4",
                                    children: "Estes s\xe3o alguns dos nossos lan\xe7amentos mais recentes. Sinta-se \xe0 vontade para nos contactar em caso de d\xfavidas."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " w-full justify-center px-6 container mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full md:w-full flex flex-wrap justify-left",
                            children: featuredWorks.map((e, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-1/3 md:w-1/3 text-left mb-6 featuredWorksDiv ",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "featuredWorks_uppertext p-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                    className: "text-white",
                                                    children: [
                                                        " ",
                                                        e.songName,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                    className: "text-white",
                                                    children: [
                                                        " por ",
                                                        e.artistName,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-white",
                                                    children: e.year
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "p-2 featuredWorks",
                                            src: e.urlImage,
                                            alt: e.artistName + e.songName
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "featuredWorks_bottomtext p-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: e.YoutubeLink,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaYoutube, {})
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: e.SpotifyLink,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaSpotify, {})
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: e.ArtistInsta,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaInstagram, {})
                                                })
                                            ]
                                        })
                                    ]
                                }, key)
                            )
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3841:
/***/ ((module) => {

module.exports = require("@popperjs/core");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

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

/***/ 3920:
/***/ ((module) => {

module.exports = require("prettier");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8123:
/***/ ((module) => {

module.exports = require("react-alice-carousel");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 9785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,289], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();