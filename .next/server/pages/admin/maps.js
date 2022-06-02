"use strict";
(() => {
var exports = {};
exports.id = 326;
exports.ids = [326];
exports.modules = {

/***/ 7014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Maps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Maps/MapExample.js


function MapExample() {
    const mapRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        let google = window.google;
        let map = mapRef.current;
        let lat = "40.748817";
        let lng = "-73.985428";
        const myLatlng = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: 12,
            center: myLatlng,
            scrollwheel: false,
            zoomControl: true,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#444444"
                        }
                    ]
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [
                        {
                            color: "#f2f2f2"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [
                        {
                            saturation: -100
                        },
                        {
                            lightness: 45
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "simplified"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [
                        {
                            color: "#cbd5e0"
                        },
                        {
                            visibility: "on"
                        }
                    ]
                }, 
            ]
        };
        map = new google.maps.Map(map, mapOptions);
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Notus NextJS!"
        });
        const contentString = '<div class="info-window-content"><h2>Notus NextJS</h2>' + "<p>A free Admin for Tailwind CSS, React, React Hooks, and NextJS.</p></div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, "click", function() {
            infowindow.open(map, marker);
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative w-full rounded h-600-px",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded h-full",
                ref: mapRef
            })
        })
    });
}
/* harmony default export */ const Maps_MapExample = (MapExample);

// EXTERNAL MODULE: ./layouts/Admin.js + 7 modules
var Admin = __webpack_require__(8413);
;// CONCATENATED MODULE: ./pages/admin/maps.js


// components

// layout for page

function Maps() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-wrap",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full px-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Maps_MapExample, {})
                })
            })
        })
    });
};
Maps.layout = Admin/* default */.Z;


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,413], () => (__webpack_exec__(7014)));
module.exports = __webpack_exports__;

})();