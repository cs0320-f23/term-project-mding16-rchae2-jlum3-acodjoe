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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthEmail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebaseui */ \"(app-pages-browser)/./node_modules/firebaseui/dist/esm.js\");\n/* harmony import */ var firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui/dist/firebaseui.css */ \"(app-pages-browser)/./node_modules/firebaseui/dist/firebaseui.css\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AuthEmail(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var uiConfig = {\n            signInSuccessUrl: \"/regions\",\n            signInFlow: \"popup\",\n            signInOptions: [\n                // Leave the lines as is for the providers you want to offer your users.\n                {\n                    provider: firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider.PROVIDER_ID,\n                    clientId: \"\".concat(\"961263025075-cpg1jumfrcus26bhbkakad1l5d6s4ue5.apps.googleusercontent.com\"),\n                    requireDisplayName: false\n                },\n                {\n                    provider: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth.EmailAuthProvider.PROVIDER_ID,\n                    requireDisplayName: false\n                }\n            ],\n            credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.CredentialHelper.GOOGLE_YOLO,\n            // tosUrl and privacyPolicyUrl accept either url string or a callback\n            // function.\n            // Terms of service url/callback.\n            tosUrl: \"your terms of service url\",\n            // Privacy policy url/callback.\n            privacyPolicyUrl: function privacyPolicyUrl() {\n                window.location.assign(\"<your-privacy-policy-url>\");\n            },\n            callbacks: {\n                signInSuccessWithAuthResult: function(authObject, redirectURL) {\n                    // console.log(authObject)\n                    // console.log(redirectURL)\n                    console.l;\n                    return props.loading;\n                }\n            }\n        };\n        var ui = firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI.getInstance() || new firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI(props.auth);\n        ui.start(\".firebase-auth-container\", uiConfig);\n    }, [\n        props.loading,\n        props.auth\n    ]);\n    // useEffect(\n    //   () => {\n    //      const ui =\n    //       firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);\n    //     ui.start(\".firebase-auth-container\", uiConfig);\n    //   },\n    //   [props.auth]\n    // );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"firebase-auth-container\"\n        }, void 0, false, {\n            fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthEmail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = AuthEmail;\nvar _c;\n$RefreshReg$(_c, \"AuthEmail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vQXV0aEVtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBSVY7QUFDRDtBQUNHO0FBT3BCO0FBT1IsU0FBU0ssVUFBVUMsS0FBaUI7O0lBRWpETCxnREFBU0EsQ0FBQztRQUNOLElBQUlNLFdBQVc7WUFDYkMsa0JBQWtCO1lBQ2xCQyxZQUFZO1lBQ1pDLGVBQWU7Z0JBQ2Isd0VBQXdFO2dCQUN4RTtvQkFDRUMsVUFBVVAsNkRBQWtCQSxDQUFDUSxXQUFXO29CQUN4Q0MsVUFBVSxHQUFxQyxPQUFsQ0MsMEVBQWlDO29CQUM5Q0csb0JBQW9CO2dCQUN0QjtnQkFDQTtvQkFDRU4sVUFBVVIsMkRBQVFBLENBQUNlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNQLFdBQVc7b0JBQ3JESyxvQkFBb0I7Z0JBQ3RCO2FBQ0Q7WUFDREcsa0JBQWtCbEIsNENBQWUsQ0FBQ21CLGdCQUFnQixDQUFDQyxXQUFXO1lBQzlELHFFQUFxRTtZQUNyRSxZQUFZO1lBQ1osaUNBQWlDO1lBQ2pDQyxRQUFRO1lBQ1IsK0JBQStCO1lBQy9CQyxrQkFBa0IsU0FBbEJBO2dCQUNFQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUN6QjtZQUNBQyxXQUFXO2dCQUNUQyw2QkFBNkIsU0FDM0JDLFlBQ0FDO29CQUVBLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQkMsUUFBUUMsQ0FBQztvQkFDVCxPQUFPM0IsTUFBTTRCLE9BQU87Z0JBQ3RCO1lBQ0Y7UUFDRjtRQUVBLElBQU1DLEtBQ0pqQyw0Q0FBZSxDQUFDa0MsTUFBTSxDQUFDQyxXQUFXLE1BQ2xDLElBQUluQyw0Q0FBZSxDQUFDa0MsTUFBTSxDQUFDOUIsTUFBTVksSUFBSTtRQUV2Q2lCLEdBQUdHLEtBQUssQ0FBQyw0QkFBNEIvQjtJQUN6QyxHQUFHO1FBQUNELE1BQU00QixPQUFPO1FBQUU1QixNQUFNWSxJQUFJO0tBQUM7SUFHOUIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0ZBQXdGO0lBRXhGLHNEQUFzRDtJQUN0RCxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLEtBQUs7SUFFTCxxQkFDRSw4REFBQ3FCO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs7Ozs7Ozs7OztBQUdyQjtHQS9Ed0JuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL0F1dGhFbWFpbC50c3g/MjVmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aSBmcm9tIFwiZmlyZWJhc2V1aVwiO1xuaW1wb3J0IFwiZmlyZWJhc2V1aS9kaXN0L2ZpcmViYXNldWkuY3NzXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcbmltcG9ydCB7XG4gIGdldEF1dGgsXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcbiAgQXV0aCxcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxuICBzaWduSW5XaXRoUG9wdXAsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmludGVyZmFjZSBhdXRoUHJvcHMge1xuICAgIGF1dGg6IGZpcmViYXNlLmF1dGguQXV0aFxuICAgIGxvYWRpbmc6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aEVtYWlsKHByb3BzIDogYXV0aFByb3BzKSB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHZhciB1aUNvbmZpZyA9IHtcbiAgICAgICAgc2lnbkluU3VjY2Vzc1VybDogXCIvcmVnaW9uc1wiLFxuICAgICAgICBzaWduSW5GbG93OiBcInBvcHVwXCIsXG4gICAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcbiAgICAgICAgICAvLyBMZWF2ZSB0aGUgbGluZXMgYXMgaXMgZm9yIHRoZSBwcm92aWRlcnMgeW91IHdhbnQgdG8gb2ZmZXIgeW91ciB1c2Vycy5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlcjogR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgY2xpZW50SWQ6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9JRH1gLFxuICAgICAgICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGVyOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjcmVkZW50aWFsSGVscGVyOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTyxcbiAgICAgICAgLy8gdG9zVXJsIGFuZCBwcml2YWN5UG9saWN5VXJsIGFjY2VwdCBlaXRoZXIgdXJsIHN0cmluZyBvciBhIGNhbGxiYWNrXG4gICAgICAgIC8vIGZ1bmN0aW9uLlxuICAgICAgICAvLyBUZXJtcyBvZiBzZXJ2aWNlIHVybC9jYWxsYmFjay5cbiAgICAgICAgdG9zVXJsOiBcInlvdXIgdGVybXMgb2Ygc2VydmljZSB1cmxcIixcbiAgICAgICAgLy8gUHJpdmFjeSBwb2xpY3kgdXJsL2NhbGxiYWNrLlxuICAgICAgICBwcml2YWN5UG9saWN5VXJsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIjx5b3VyLXByaXZhY3ktcG9saWN5LXVybD5cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdDogKFxuICAgICAgICAgICAgYXV0aE9iamVjdDogZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbCxcbiAgICAgICAgICAgIHJlZGlyZWN0VVJMPzogc3RyaW5nXG4gICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdXRoT2JqZWN0KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVkaXJlY3RVUkwpXG4gICAgICAgICAgICBjb25zb2xlLmxcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5sb2FkaW5nO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1aSA9XG4gICAgICAgIGZpcmViYXNldWkuYXV0aC5BdXRoVUkuZ2V0SW5zdGFuY2UoKSB8fFxuICAgICAgICBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShwcm9wcy5hdXRoKTtcblxuICAgICAgdWkuc3RhcnQoXCIuZmlyZWJhc2UtYXV0aC1jb250YWluZXJcIiwgdWlDb25maWcpO1xuICB9LCBbcHJvcHMubG9hZGluZywgcHJvcHMuYXV0aF0pXG5cblxuICAvLyB1c2VFZmZlY3QoXG4gIC8vICAgKCkgPT4ge1xuICAvLyAgICAgIGNvbnN0IHVpID1cbiAgLy8gICAgICAgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSS5nZXRJbnN0YW5jZSgpIHx8IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKHByb3BzLmF1dGgpO1xuXG4gIC8vICAgICB1aS5zdGFydChcIi5maXJlYmFzZS1hdXRoLWNvbnRhaW5lclwiLCB1aUNvbmZpZyk7XG4gIC8vICAgfSxcbiAgLy8gICBbcHJvcHMuYXV0aF1cbiAgLy8gKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcmViYXNlLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZXVpIiwiZmlyZWJhc2UiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJBdXRoRW1haWwiLCJwcm9wcyIsInVpQ29uZmlnIiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25JbkZsb3ciLCJzaWduSW5PcHRpb25zIiwicHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsInJlcXVpcmVEaXNwbGF5TmFtZSIsImF1dGgiLCJFbWFpbEF1dGhQcm92aWRlciIsImNyZWRlbnRpYWxIZWxwZXIiLCJDcmVkZW50aWFsSGVscGVyIiwiR09PR0xFX1lPTE8iLCJ0b3NVcmwiLCJwcml2YWN5UG9saWN5VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQiLCJhdXRoT2JqZWN0IiwicmVkaXJlY3RVUkwiLCJjb25zb2xlIiwibCIsImxvYWRpbmciLCJ1aSIsIkF1dGhVSSIsImdldEluc3RhbmNlIiwic3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/AuthEmail.tsx\n"));

/***/ })

});