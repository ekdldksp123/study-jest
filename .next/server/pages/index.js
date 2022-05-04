"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_test_mock_auth_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/test/mock/auth_result */ \"./src/test/mock/auth_result.ts\");\n\n\nconst App = ({ status  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nconst getServerSideProps = ()=>{\n    const authStatus = (0,_src_test_mock_auth_result__WEBPACK_IMPORTED_MODULE_1__.beforeAuthorize)();\n    if (!authStatus) return {\n        redirect: {\n            permanent: false,\n            destination: \"/login\"\n        },\n        props: {\n            status: \"non-member\"\n        }\n    };\n    return {\n        props: {\n            status: \"member\"\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUU4RDtBQUc5RCxNQUFNQyxHQUFHLEdBQWEsQ0FBQyxFQUFFQyxNQUFNLEdBQTBELEdBQUs7SUFDMUYscUJBQU8sNklBQUs7Q0FDZjtBQUVELGlFQUFlRCxHQUFHO0FBRVgsTUFBTUUsa0JBQWtCLEdBQXVCLElBQVc7SUFDN0QsTUFBTUMsVUFBVSxHQUFHSiwyRUFBZSxFQUFFO0lBRXBDLElBQUksQ0FBQ0ksVUFBVSxFQUFFLE9BQU87UUFDcEJDLFFBQVEsRUFBRTtZQUNOQyxTQUFTLEVBQUUsS0FBSztZQUNoQkMsV0FBVyxFQUFFLFFBQVE7U0FDeEI7UUFDREMsS0FBSyxFQUFFO1lBQUVOLE1BQU0sRUFBRSxZQUFZO1NBQUU7S0FDbEM7SUFFRCxPQUFPO1FBQUVNLEtBQUssRUFBRTtZQUFFTixNQUFNLEVBQUUsUUFBUTtTQUFFO0tBQUU7Q0FDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeS1qZXN0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IGJlZm9yZUF1dGhvcml6ZSB9IGZyb20gJy4uL3NyYy90ZXN0L21vY2svYXV0aF9yZXN1bHQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBBcHA6IE5leHRQYWdlID0gKHsgc3RhdHVzIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikgPT4ge1xuICAgIHJldHVybiA8PjwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gKCk6IGFueSA9PiB7XG4gICAgY29uc3QgYXV0aFN0YXR1cyA9IGJlZm9yZUF1dGhvcml6ZSgpXG5cbiAgICBpZiAoIWF1dGhTdGF0dXMpIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7IHN0YXR1czogJ25vbi1tZW1iZXInIH0sXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgc3RhdHVzOiAnbWVtYmVyJyB9IH1cbn0iXSwibmFtZXMiOlsiYmVmb3JlQXV0aG9yaXplIiwiQXBwIiwic3RhdHVzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiYXV0aFN0YXR1cyIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiZGVzdGluYXRpb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/test/mock/auth_result.ts":
/*!**************************************!*\
  !*** ./src/test/mock/auth_result.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authorizeFail\": () => (/* binding */ authorizeFail),\n/* harmony export */   \"authorizeRefresh\": () => (/* binding */ authorizeRefresh),\n/* harmony export */   \"authorizeSuccess\": () => (/* binding */ authorizeSuccess),\n/* harmony export */   \"beforeAuthorize\": () => (/* binding */ beforeAuthorize),\n/* harmony export */   \"isAuthorized\": () => (/* binding */ isAuthorized)\n/* harmony export */ });\nconst beforeAuthorize = ()=>false\n;\nconst authorizeFail = ()=>{\n    setTimeout(()=>console.log(\"case fail\")\n    , 100);\n    return \"fail\";\n};\nconst authorizeSuccess = ()=>{\n    setTimeout(()=>console.log(\"case success\")\n    , 100);\n    return \"success\";\n};\nconst authorizeRefresh = ()=>{\n    setTimeout(()=>console.log(\"case refresh\")\n    , 100);\n    return \"refresh\";\n};\nconst isAuthorized = (secret)=>secret === \"success\" || secret === \"refresh\"\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdC9tb2NrL2F1dGhfcmVzdWx0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsZUFBZSxHQUFHLElBQU0sS0FBSztBQUFBO0FBRW5DLE1BQU1DLGFBQWEsR0FBRyxJQUFNO0lBQy9CQyxVQUFVLENBQUMsSUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQUEsRUFBRSxHQUFHLENBQUM7SUFDL0MsT0FBTyxNQUFNO0NBQ2hCO0FBQ00sTUFBTUMsZ0JBQWdCLEdBQUcsSUFBTTtJQUNsQ0gsVUFBVSxDQUFDLElBQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUFBLEVBQUUsR0FBRyxDQUFDO0lBQ2xELE9BQU8sU0FBUztDQUNuQjtBQUNNLE1BQU1FLGdCQUFnQixHQUFHLElBQWM7SUFDMUNKLFVBQVUsQ0FBQyxJQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFBQSxFQUFFLEdBQUcsQ0FBQztJQUNsRCxPQUFPLFNBQVM7Q0FDbkI7QUFDTSxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0MsTUFBYyxHQUFjQSxNQUFNLEtBQUssU0FBUyxJQUFJQSxNQUFNLEtBQUssU0FBUztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHktamVzdC8uL3NyYy90ZXN0L21vY2svYXV0aF9yZXN1bHQudHM/M2RmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmVmb3JlQXV0aG9yaXplID0gKCkgPT4gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGF1dGhvcml6ZUZhaWwgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjb25zb2xlLmxvZygnY2FzZSBmYWlsJyksIDEwMClcbiAgICByZXR1cm4gJ2ZhaWwnXG59XG5leHBvcnQgY29uc3QgYXV0aG9yaXplU3VjY2VzcyA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnNvbGUubG9nKCdjYXNlIHN1Y2Nlc3MnKSwgMTAwKVxuICAgIHJldHVybiAnc3VjY2Vzcydcbn1cbmV4cG9ydCBjb25zdCBhdXRob3JpemVSZWZyZXNoID0gKCk6IHN0cmluZyA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjb25zb2xlLmxvZygnY2FzZSByZWZyZXNoJyksIDEwMClcbiAgICByZXR1cm4gJ3JlZnJlc2gnXG59XG5leHBvcnQgY29uc3QgaXNBdXRob3JpemVkID0gKHNlY3JldDogc3RyaW5nKTogYm9vbGVhbiA9PiBzZWNyZXQgPT09ICdzdWNjZXNzJyB8fCBzZWNyZXQgPT09ICdyZWZyZXNoJ1xuIl0sIm5hbWVzIjpbImJlZm9yZUF1dGhvcml6ZSIsImF1dGhvcml6ZUZhaWwiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImF1dGhvcml6ZVN1Y2Nlc3MiLCJhdXRob3JpemVSZWZyZXNoIiwiaXNBdXRob3JpemVkIiwic2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/test/mock/auth_result.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();