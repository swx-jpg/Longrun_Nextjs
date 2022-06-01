"use strict";
(() => {
var exports = {};
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 7409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "chart.js"
const external_chart_js_namespaceObject = require("chart.js");
var external_chart_js_default = /*#__PURE__*/__webpack_require__.n(external_chart_js_namespaceObject);
;// CONCATENATED MODULE: ./components/Cards/CardLineChart.js



function CardLineChart() {
    external_react_default().useEffect(()=>{
        var config = {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July", 
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [
                            65,
                            78,
                            66,
                            44,
                            56,
                            67,
                            75
                        ],
                        fill: false
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#fff",
                        borderColor: "#fff",
                        data: [
                            40,
                            68,
                            86,
                            74,
                            56,
                            60,
                            87
                        ]
                    }, 
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Sales Charts",
                    fontColor: "white"
                },
                legend: {
                    labels: {
                        fontColor: "white"
                    },
                    align: "end",
                    position: "bottom"
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersect: true
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)"
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "white"
                            },
                            gridLines: {
                                display: false,
                                borderDash: [
                                    2
                                ],
                                borderDashOffset: [
                                    2
                                ],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [
                                    2
                                ],
                                zeroLineBorderDashOffset: [
                                    2
                                ]
                            }
                        }, 
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)"
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "white"
                            },
                            gridLines: {
                                borderDash: [
                                    3
                                ],
                                borderDashOffset: [
                                    3
                                ],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [
                                    2
                                ],
                                zeroLineBorderDashOffset: [
                                    2
                                ]
                            }
                        }, 
                    ]
                }
            }
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new (external_chart_js_default())(ctx, config);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-t mb-0 px-4 py-3 bg-transparent",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative w-full max-w-full flex-grow flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "uppercase text-blueGray-100 mb-1 text-xs font-semibold",
                                    children: "Overview"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-white text-xl font-semibold",
                                    children: "Sales value"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-4 flex-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-350-px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                            id: "line-chart"
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Cards/CardBarChart.js



function CardBarChart() {
    external_react_default().useEffect(()=>{
        let config = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July", 
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [
                            30,
                            78,
                            56,
                            34,
                            100,
                            45,
                            13
                        ],
                        fill: false,
                        barThickness: 8
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [
                            27,
                            68,
                            86,
                            74,
                            10,
                            4,
                            87
                        ],
                        barThickness: 8
                    }, 
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart"
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersect: true
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)"
                    },
                    align: "end",
                    position: "bottom"
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: "Month"
                            },
                            gridLines: {
                                borderDash: [
                                    2
                                ],
                                borderDashOffset: [
                                    2
                                ],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [
                                    2
                                ],
                                zeroLineBorderDashOffset: [
                                    2
                                ]
                            }
                        }, 
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value"
                            },
                            gridLines: {
                                borderDash: [
                                    2
                                ],
                                drawBorder: false,
                                borderDashOffset: [
                                    2
                                ],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [
                                    2
                                ],
                                zeroLineBorderDashOffset: [
                                    2
                                ]
                            }
                        }, 
                    ]
                }
            }
        };
        let ctx = document.getElementById("bar-chart").getContext("2d");
        window.myBar = new (external_chart_js_default())(ctx, config);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-t mb-0 px-4 py-3 bg-transparent",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative w-full max-w-full flex-grow flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "uppercase text-blueGray-400 mb-1 text-xs font-semibold",
                                    children: "Performance"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-blueGray-700 text-xl font-semibold",
                                    children: "Total orders"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-4 flex-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-350-px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                            id: "bar-chart"
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Cards/CardPageVisits.js


// components
function CardPageVisits() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-t mb-0 px-4 py-3 border-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-full px-4 max-w-full flex-grow flex-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "font-semibold text-base text-blueGray-700",
                                    children: "Page visits"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-full px-4 max-w-full flex-grow flex-1 text-right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                    type: "button",
                                    children: "See all"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "block w-full overflow-x-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "items-center w-full bg-transparent border-collapse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",
                                            children: "Page name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",
                                            children: "Visitors"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",
                                            children: "Unique users"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",
                                            children: "Bounce rate"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "/argon/"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "4,569"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "340"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-arrow-up text-emerald-500 mr-4"
                                                    }),
                                                    "46,53%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "/argon/index.html"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "3,985"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "319"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-arrow-down text-orange-500 mr-4"
                                                    }),
                                                    "46,53%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "/argon/charts.html"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "3,513"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "294"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-arrow-down text-orange-500 mr-4"
                                                    }),
                                                    "36,49%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "/argon/tables.html"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "2,050"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "147"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-arrow-up text-emerald-500 mr-4"
                                                    }),
                                                    "50,87%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "/argon/profile.html"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "1,795"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "190"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-arrow-down text-red-500 mr-4"
                                                    }),
                                                    "46,53%"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Cards/CardSocialTraffic.js


// components
function CardSocialTraffic() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-t mb-0 px-4 py-3 border-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-full px-4 max-w-full flex-grow flex-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "font-semibold text-base text-blueGray-700",
                                    children: "Social traffic"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-full px-4 max-w-full flex-grow flex-1 text-right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                    type: "button",
                                    children: "See all"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "block w-full overflow-x-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "items-center w-full bg-transparent border-collapse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                className: "thead-light",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",
                                            children: "Referral"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",
                                            children: "Visitors"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "Facebook"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "1,480"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "mr-2",
                                                            children: "60%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-red-200",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: "60%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "Facebook"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "5,480"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "mr-2",
                                                            children: "70%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-emerald-200",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: "70%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "Google"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "4,807"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "mr-2",
                                                            children: "80%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-purple-200",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: "80%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "Instagram"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "3,678"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "mr-2",
                                                            children: "75%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: "75%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left",
                                                children: "twitter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "2,645"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "mr-2",
                                                            children: "30%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-orange-200",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: "30%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                                })
                                                            })
                                                        })
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
            ]
        })
    });
};

// EXTERNAL MODULE: ./layouts/Admin.js + 7 modules
var Admin = __webpack_require__(8413);
;// CONCATENATED MODULE: ./pages/admin/dashboard.js


// components




// layout for page

function Dashboard() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardLineChart, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full xl:w-4/12 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardBarChart, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardPageVisits, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full xl:w-4/12 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardSocialTraffic, {})
                    })
                ]
            })
        ]
    });
};
Dashboard.layout = Admin/* default */.Z;


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,413], () => (__webpack_exec__(7409)));
module.exports = __webpack_exports__;

})();