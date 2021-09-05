(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Footer.js





function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: "jsx-4207697582",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/minsoftk",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-4207697582",
        children: "@ 2021 \uAE40\uBBFC\uC131"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "4207697582",
      children: ["footer.jsx-4207697582{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}", "footer.jsx-4207697582 img.jsx-4207697582{margin-left:0.5rem;}", "footer.jsx-4207697582 a.jsx-4207697582{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "a.jsx-4207697582{color:inherit;-webkit-text-decoration:none;text-decoration:none;}", "a.jsx-4207697582:hover{opacity:0.5;color:cornflowerblue;}"]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Navigator.module.css
var Navigator_module = __webpack_require__(2575);
var Navigator_module_default = /*#__PURE__*/__webpack_require__.n(Navigator_module);
;// CONCATENATED MODULE: ./components/Navigator.js







function Navigator() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: "jsx-3773402533",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
        className: (Navigator_module_default()).navbar,
        bg: "light",
        variant: "light",
        fixed: "top",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
          className: (Navigator_module_default()).container,
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            className: (Navigator_module_default()).link,
            href: "/",
            passHref: true,
            scroll: false,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "jsx-3773402533" + " " + ((Navigator_module_default()).mainurl || ""),
              children: "AWESOME FOOD STORE"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
            className: "me-auto",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              scroll: false,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "jsx-3773402533" + " " + ((Navigator_module_default()).url || ""),
                children: "ABOUT"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/store",
              scroll: false,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "jsx-3773402533" + " " + ((Navigator_module_default()).url || ""),
                children: "STORE"
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3773402533",
      children: ["a.jsx-3773402533{-webkit-text-decoration:none;text-decoration:none;margin:10px;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Navigator, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ }),

/***/ 2575:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navigator_navbar__3jgDg",
	"container": "Navigator_container__1Opqr",
	"link": "Navigator_link__2qx4P",
	"mainurl": "Navigator_mainurl__1MEvf",
	"url": "Navigator_url__2k7DU"
};


/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,664], () => (__webpack_exec__(9019)));
module.exports = __webpack_exports__;

})();