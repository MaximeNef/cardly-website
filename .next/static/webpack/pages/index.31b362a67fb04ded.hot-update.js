"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home/Hero/HeroHeader/HeroHeader.jsx":
/*!************************************************************!*\
  !*** ./src/components/home/Hero/HeroHeader/HeroHeader.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst HeroHeader = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_1___default().init({\n            duration: 800,\n            once: true\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-2 mb-[42px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-aos\": \"fade-up\",\n            className: \"text-4xl tracking-[-0.085px] leading-[60px] font-[1000] text-transparent bg-clip-text purpleGradient w-fit sm:m-auto\",\n            children: \"Transf\\xe9rez vos informations avec votre carte digitale!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Propri\\xe9taire\\\\Documents\\\\Cours_IFAPME\\\\Stage-IFAPME\\\\Clients\\\\cardly-website\\\\src\\\\components\\\\home\\\\Hero\\\\HeroHeader\\\\HeroHeader.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Propri\\xe9taire\\\\Documents\\\\Cours_IFAPME\\\\Stage-IFAPME\\\\Clients\\\\cardly-website\\\\src\\\\components\\\\home\\\\Hero\\\\HeroHeader\\\\HeroHeader.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroHeader, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = HeroHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroHeader);\nvar _c;\n$RefreshReg$(_c, \"HeroHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0hlcm8vSGVyb0hlYWRlci9IZXJvSGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBc0I7QUFDSTtBQUNRO0FBQ2xDLE1BQU1FLGFBQWEsSUFBTTs7SUFDdkJELGdEQUFTQSxDQUFDLElBQU07UUFDZEQsK0NBQVEsQ0FBQztZQUFFSSxVQUFVO1lBQUtDLE1BQU0sSUFBSTtRQUFDO0lBQ3ZDLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUViLDRFQUFDQztZQUNDQyxZQUFTO1lBQ1RGLFdBQVU7c0JBQ1g7Ozs7Ozs7Ozs7O0FBTVA7R0FoQk1MO0tBQUFBO0FBa0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvSGVyby9IZXJvSGVhZGVyL0hlcm9IZWFkZXIuanN4P2MyZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IEhlcm9IZWFkZXIgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5pbml0KHsgZHVyYXRpb246IDgwMCwgb25jZTogdHJ1ZSB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgbXgtMiBtYi1bNDJweF0nPlxyXG5cclxuICAgICAgPHBcclxuICAgICAgICBkYXRhLWFvcz0nZmFkZS11cCdcclxuICAgICAgICBjbGFzc05hbWU9J3RleHQtNHhsIHRyYWNraW5nLVstMC4wODVweF0gIGxlYWRpbmctWzYwcHhdIGZvbnQtWzEwMDBdIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHB1cnBsZUdyYWRpZW50IHctZml0IHNtOm0tYXV0bydcclxuICAgICAgPlxyXG4gICAgICAgIFRyYW5zZsOpcmV6IHZvcyBpbmZvcm1hdGlvbnMgYXZlYyB2b3RyZSBjYXJ0ZSBkaWdpdGFsZSFcclxuICAgICAgPC9wPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiQU9TIiwidXNlRWZmZWN0IiwiSGVyb0hlYWRlciIsImluaXQiLCJkdXJhdGlvbiIsIm9uY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiZGF0YS1hb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/Hero/HeroHeader/HeroHeader.jsx\n"));

/***/ })

});