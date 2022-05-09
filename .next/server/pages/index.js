"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/test/mock/auth_result.ts
const beforeAuthorize = ()=>false
;
const authorizeFail = ()=>{
    setTimeout(()=>console.log("case fail")
    , 100);
    return "fail";
};
const authorizeSuccess = ()=>{
    setTimeout(()=>console.log("case success")
    , 100);
    return "success";
};
const authorizeRefresh = ()=>{
    setTimeout(()=>console.log("case refresh")
    , 100);
    return "refresh";
};
const isAuthorized = (secret)=>secret === "success" || secret === "refresh"
;

;// CONCATENATED MODULE: ./pages/index.tsx


const App = ({ status  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "Main"
    });
};
/* harmony default export */ const pages = (App);
const getServerSideProps = ()=>{
    const authStatus = beforeAuthorize();
    if (!authStatus) return {
        redirect: {
            permanent: false,
            destination: "/login"
        },
        props: {
            status: "non-member"
        }
    };
    return {
        props: {
            status: "member"
        }
    };
};


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
var __webpack_exports__ = (__webpack_exec__(608));
module.exports = __webpack_exports__;

})();