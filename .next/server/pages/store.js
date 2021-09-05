(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 4887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/Modal.module.css
var Modal_module = __webpack_require__(797);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Modal.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/** components **/


/** css **/





function StoreModal(props) {
  let str = props.data.description.split('\n');
  let newStr = str.map(line => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: [line, /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    });
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, _objectSpread(_objectSpread({}, props), {}, {
      centered: true,
      size: "lg",
      "aria-labelledby": "example-modal-sizes-title-lg",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Title, {
          children: props.data.name
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
        className: (Modal_module_default()).foodStore,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: props.data.image,
            width: 800,
            height: 1000
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Modal_module_default()).description,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (Modal_module_default()).descriptionTitle,
            children: props.data.name
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (Modal_module_default()).descriptionText,
            children: newStr
          })]
        })]
      }), props.haveUrl ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Modal_module_default()).foodStoreInfo,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Modal_module_default()).foodStoreInfo__Url,
          href: props.data.url,
          children: "\uB9E4\uC7A5 \uC0AC\uC774\uD2B8 \uBC14\uB85C \uAC00\uAE30"
        })
      }) : null]
    }))
  });
}
// EXTERNAL MODULE: ./pages/store.module.css
var store_module = __webpack_require__(1965);
var store_module_default = /*#__PURE__*/__webpack_require__.n(store_module);
;// CONCATENATED MODULE: ./pages/store.js



/* components */


/* css */


/** rest api 데이터 호출 **/




async function getStaticProps() {
  const res = await fetch(`http://localhost:9000/stores`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    } // will be passed to the page component as props

  };
}
/** getStaticProps를 통해서 Store 컴포넌트에 props로 데이터 전달 **/

const Store = props => {
  let {
    0: modal,
    1: setModal
  } = (0,external_react_.useState)(false); // modal창 on,off

  let {
    0: foodId,
    1: setFoodId
  } = (0,external_react_.useState)(1); // 음식점 List의 id값을 입력받음.

  let {
    0: haveUrl,
    1: setHaveUrl
  } = (0,external_react_.useState)(false); // Modal에 표시할 URL이 있는지 없는지 상태 저장
  // Modal 창 닫힐 때의 로직

  const onHide = () => {
    setModal(false);
    setHaveUrl(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Food Store Lists"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "Keywords",
        content: "Awesome food store List"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "Description",
        content: "\uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8 store \uD398\uC774\uC9C0"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "Title",
        content: "\uB9DB\uC9D1 \uB9AC\uC2A4\uD2B8 store \uD398\uC774\uC9C0"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (store_module_default()).title,
        children: "EAT"
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (store_module_default()).container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        className: (store_module_default()).main,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (store_module_default()).b_title,
          children: "EAT"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (store_module_default()).grid,
          children: props.data.map((stores, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (store_module_default()).linkBox,
              onClick: () => {
                setModal(true);
                setFoodId(i); // 어떤 idx의 store 인지 상태 저장
                //만약 가게의 url을 가지고 있다면 state에 저장

                if (stores.url) {
                  setHaveUrl(true);
                } else setHaveUrl(false);
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: stores.thumb,
                alt: "food-store",
                width: 150,
                height: 150
              })
            }, i);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(StoreModal, {
          data: props.data[foodId] // 해당 가게의 데이터 전달
          ,
          haveUrl: haveUrl //해당 가게의 url 유무
          ,
          show: modal,
          onHide: onHide
        })]
      })
    })]
  });
};

/* harmony default export */ const store = (Store);

/***/ }),

/***/ 797:
/***/ ((module) => {

// Exports
module.exports = {
	"foodStore": "Modal_foodStore__F2_B_",
	"description": "Modal_description__PENux",
	"descriptionTitle": "Modal_descriptionTitle__2pN8j",
	"descriptionText": "Modal_descriptionText__2wNZL",
	"foodStoreInfo": "Modal_foodStoreInfo__3jiPP",
	"foodStoreInfo__Url": "Modal_foodStoreInfo__Url__3zqDa"
};


/***/ }),

/***/ 1965:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "store_title__2GhcG",
	"b_title": "store_b_title__um4cQ",
	"grid": "store_grid__1jvzE",
	"linkBox": "store_linkBox__3tFNe"
};


/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,675], () => (__webpack_exec__(4887)));
module.exports = __webpack_exports__;

})();