"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/AuthEmail.tsx":
/*!*************************************!*\
  !*** ./src/app/login/AuthEmail.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthEmail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebaseui */ \"(app-pages-browser)/./node_modules/firebaseui/dist/esm.js\");\n/* harmony import */ var firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui/dist/firebaseui.css */ \"(app-pages-browser)/./node_modules/firebaseui/dist/firebaseui.css\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AuthEmail(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var uiConfig1 = {\n            signInSuccessUrl: \"/regions\",\n            signInFlow: \"popup\",\n            signInOptions: [\n                // Leave the lines as is for the providers you want to offer your users.\n                {\n                    provider: firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider.PROVIDER_ID,\n                    clientId: \"\".concat(\"961263025075-cpg1jumfrcus26bhbkakad1l5d6s4ue5.apps.googleusercontent.com\"),\n                    requireDisplayName: false\n                },\n                {\n                    provider: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth.EmailAuthProvider.PROVIDER_ID,\n                    requireDisplayName: false\n                }\n            ],\n            credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.CredentialHelper.GOOGLE_YOLO,\n            // tosUrl and privacyPolicyUrl accept either url string or a callback\n            // function.\n            // Terms of service url/callback.\n            tosUrl: \"your terms of service url\",\n            // Privacy policy url/callback.\n            privacyPolicyUrl: function privacyPolicyUrl() {\n                window.location.assign(\"<your-privacy-policy-url>\");\n            },\n            callbacks: {\n                signInSuccessWithAuthResult: function(authObject, redirectURL) {\n                    // console.log(authObject)\n                    // console.log(redirectURL)\n                    return false;\n                }\n            }\n        };\n    }, [\n        props.loading\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ui = firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI.getInstance() || new firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI(props.auth);\n        ui.start(\".firebase-auth-container\", uiConfig);\n    }, [\n        props.auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"firebase-auth-container\"\n        }, void 0, false, {\n            fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthEmail, \"3ubReDTFssvu4DHeldAg55cW/CI=\");\n_c = AuthEmail;\nvar _c;\n$RefreshReg$(_c, \"AuthEmail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vQXV0aEVtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBSVY7QUFDRDtBQUNHO0FBT3BCO0FBT1IsU0FBU0ssVUFBVUMsS0FBaUI7O0lBRWpETCxnREFBU0EsQ0FBQztRQUNOLElBQUlNLFlBQVc7WUFDYkMsa0JBQWtCO1lBQ2xCQyxZQUFZO1lBQ1pDLGVBQWU7Z0JBQ2Isd0VBQXdFO2dCQUN4RTtvQkFDRUMsVUFBVVAsNkRBQWtCQSxDQUFDUSxXQUFXO29CQUN4Q0MsVUFBVSxHQUFxQyxPQUFsQ0MsMEVBQWlDO29CQUM5Q0csb0JBQW9CO2dCQUN0QjtnQkFDQTtvQkFDRU4sVUFBVVIsMkRBQVFBLENBQUNlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNQLFdBQVc7b0JBQ3JESyxvQkFBb0I7Z0JBQ3RCO2FBQ0Q7WUFDREcsa0JBQWtCbEIsNENBQWUsQ0FBQ21CLGdCQUFnQixDQUFDQyxXQUFXO1lBQzlELHFFQUFxRTtZQUNyRSxZQUFZO1lBQ1osaUNBQWlDO1lBQ2pDQyxRQUFRO1lBQ1IsK0JBQStCO1lBQy9CQyxrQkFBa0IsU0FBbEJBO2dCQUNFQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUN6QjtZQUNBQyxXQUFXO2dCQUNUQyw2QkFBNkIsU0FDM0JDLFlBQ0FDO29CQUVBLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQixPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtJQUNKLEdBQUc7UUFBQ3pCLE1BQU0wQixPQUFPO0tBQUM7SUFHbEIvQixnREFBU0EsQ0FDUDtRQUNHLElBQU1nQyxLQUNML0IsNENBQWUsQ0FBQ2dDLE1BQU0sQ0FBQ0MsV0FBVyxNQUFNLElBQUlqQyw0Q0FBZSxDQUFDZ0MsTUFBTSxDQUFDNUIsTUFBTVksSUFBSTtRQUUvRWUsR0FBR0csS0FBSyxDQUFDLDRCQUE0QjdCO0lBQ3ZDLEdBQ0E7UUFBQ0QsTUFBTVksSUFBSTtLQUFDO0lBR2QscUJBQ0UsOERBQUNtQjtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7Ozs7Ozs7Ozs7QUFHckI7R0F4RHdCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2dpbi9BdXRoRW1haWwudHN4PzI1ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSBcImZpcmViYXNldWlcIjtcbmltcG9ydCBcImZpcmViYXNldWkvZGlzdC9maXJlYmFzZXVpLmNzc1wiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XG5pbXBvcnQge1xuICBnZXRBdXRoLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIEF1dGgsXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcbiAgc2lnbkluV2l0aFBvcHVwLFxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5pbnRlcmZhY2UgYXV0aFByb3BzIHtcbiAgICBhdXRoOiBmaXJlYmFzZS5hdXRoLkF1dGhcbiAgICBsb2FkaW5nOiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhFbWFpbChwcm9wcyA6IGF1dGhQcm9wcykge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB2YXIgdWlDb25maWcgPSB7XG4gICAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6IFwiL3JlZ2lvbnNcIixcbiAgICAgICAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxuICAgICAgICBzaWduSW5PcHRpb25zOiBbXG4gICAgICAgICAgLy8gTGVhdmUgdGhlIGxpbmVzIGFzIGlzIGZvciB0aGUgcHJvdmlkZXJzIHlvdSB3YW50IHRvIG9mZmVyIHlvdXIgdXNlcnMuXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZXI6IEdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgIGNsaWVudElkOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUR9YCxcbiAgICAgICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlcjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8sXG4gICAgICAgIC8vIHRvc1VybCBhbmQgcHJpdmFjeVBvbGljeVVybCBhY2NlcHQgZWl0aGVyIHVybCBzdHJpbmcgb3IgYSBjYWxsYmFja1xuICAgICAgICAvLyBmdW5jdGlvbi5cbiAgICAgICAgLy8gVGVybXMgb2Ygc2VydmljZSB1cmwvY2FsbGJhY2suXG4gICAgICAgIHRvc1VybDogXCJ5b3VyIHRlcm1zIG9mIHNlcnZpY2UgdXJsXCIsXG4gICAgICAgIC8vIFByaXZhY3kgcG9saWN5IHVybC9jYWxsYmFjay5cbiAgICAgICAgcHJpdmFjeVBvbGljeVVybDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCI8eW91ci1wcml2YWN5LXBvbGljeS11cmw+XCIpO1xuICAgICAgICB9LFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IChcbiAgICAgICAgICAgIGF1dGhPYmplY3Q6IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWwsXG4gICAgICAgICAgICByZWRpcmVjdFVSTD86IHN0cmluZ1xuICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXV0aE9iamVjdClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlZGlyZWN0VVJMKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICB9LCBbcHJvcHMubG9hZGluZ10pXG5cblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgIGNvbnN0IHVpID1cbiAgICAgICAgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSS5nZXRJbnN0YW5jZSgpIHx8IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKHByb3BzLmF1dGgpO1xuXG4gICAgICB1aS5zdGFydChcIi5maXJlYmFzZS1hdXRoLWNvbnRhaW5lclwiLCB1aUNvbmZpZyk7XG4gICAgfSxcbiAgICBbcHJvcHMuYXV0aF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcmViYXNlLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZXVpIiwiZmlyZWJhc2UiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJBdXRoRW1haWwiLCJwcm9wcyIsInVpQ29uZmlnIiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25JbkZsb3ciLCJzaWduSW5PcHRpb25zIiwicHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsInJlcXVpcmVEaXNwbGF5TmFtZSIsImF1dGgiLCJFbWFpbEF1dGhQcm92aWRlciIsImNyZWRlbnRpYWxIZWxwZXIiLCJDcmVkZW50aWFsSGVscGVyIiwiR09PR0xFX1lPTE8iLCJ0b3NVcmwiLCJwcml2YWN5UG9saWN5VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQiLCJhdXRoT2JqZWN0IiwicmVkaXJlY3RVUkwiLCJsb2FkaW5nIiwidWkiLCJBdXRoVUkiLCJnZXRJbnN0YW5jZSIsInN0YXJ0IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/AuthEmail.tsx\n"));

/***/ })

});