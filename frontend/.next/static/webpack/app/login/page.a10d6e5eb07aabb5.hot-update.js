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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthEmail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebaseui */ \"(app-pages-browser)/./node_modules/firebaseui/dist/esm.js\");\n/* harmony import */ var firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui/dist/firebaseui.css */ \"(app-pages-browser)/./node_modules/firebaseui/dist/firebaseui.css\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AuthEmail(props) {\n    _s();\n    var uiConfig = {\n        signInSuccessUrl: \"/regions\",\n        signInFlow: \"popup\",\n        signInOptions: [\n            // Leave the lines as is for the providers you want to offer your users.\n            {\n                provider: firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider.PROVIDER_ID,\n                clientId: \"\".concat(\"961263025075-cpg1jumfrcus26bhbkakad1l5d6s4ue5.apps.googleusercontent.com\"),\n                requireDisplayName: false\n            },\n            {\n                provider: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth.EmailAuthProvider.PROVIDER_ID,\n                requireDisplayName: false\n            }\n        ],\n        credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.CredentialHelper.GOOGLE_YOLO,\n        // tosUrl and privacyPolicyUrl accept either url string or a callback\n        // function.\n        // Terms of service url/callback.\n        tosUrl: \"your terms of service url\",\n        // Privacy policy url/callback.\n        privacyPolicyUrl: function privacyPolicyUrl() {\n            window.location.assign(\"<your-privacy-policy-url>\");\n        },\n        callbacks: {\n            signInSuccessWithAuthResult: function(authObject, redirectURL) {\n                // console.log(authObject)\n                // console.log(redirectURL)\n                var load = false;\n                setTimeout(function() {\n                    // Your delayed code here...\n                    load = true;\n                    console.log(\"here\");\n                }, 2000);\n                return load;\n            }\n        }\n    };\n    // useEffect(() => {\n    //     uiConfig = {\n    //       signInSuccessUrl: \"/regions\",\n    //       signInFlow: \"popup\",\n    //       signInOptions: [\n    //         // Leave the lines as is for the providers you want to offer your users.\n    //         {\n    //           provider: GoogleAuthProvider.PROVIDER_ID,\n    //           clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,\n    //           requireDisplayName: false,\n    //         },\n    //         {\n    //           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,\n    //           requireDisplayName: false,\n    //         },\n    //       ],\n    //       credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,\n    //       // tosUrl and privacyPolicyUrl accept either url string or a callback\n    //       // function.\n    //       // Terms of service url/callback.\n    //       tosUrl: \"your terms of service url\",\n    //       // Privacy policy url/callback.\n    //       privacyPolicyUrl: function () {\n    //         window.location.assign(\"<your-privacy-policy-url>\");\n    //       },\n    //       callbacks: {\n    //         signInSuccessWithAuthResult: (\n    //           authObject: firebase.auth.UserCredential,\n    //           redirectURL?: string\n    //         ) => {\n    //           // console.log(authObject)\n    //           // console.log(redirectURL)\n    //           console.log(props.loading)\n    //           return props.loading;\n    //         },\n    //       },\n    //     };\n    // }, [props.loading])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ui = firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI.getInstance() || new firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI(props.auth);\n        ui.start(\".firebase-auth-container\", uiConfig);\n        console.log(\"ui\");\n    // if (props.loading) {\n    //   window.location.assign(\"/regions\");\n    // }\n    // console.log(props.loading)\n    }, [\n        props.auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"firebase-auth-container\"\n        }, void 0, false, {\n            fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n            lineNumber: 123,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthEmail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = AuthEmail;\nvar _c;\n$RefreshReg$(_c, \"AuthEmail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vQXV0aEVtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBSVY7QUFDRDtBQUNHO0FBT3BCO0FBT1IsU0FBU0ssVUFBVUMsS0FBaUI7O0lBRWpELElBQUlDLFdBQVc7UUFDYkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7WUFDYix3RUFBd0U7WUFDeEU7Z0JBQ0VDLFVBQVVQLDZEQUFrQkEsQ0FBQ1EsV0FBVztnQkFDeENDLFVBQVUsR0FBcUMsT0FBbENDLDBFQUFpQztnQkFDOUNHLG9CQUFvQjtZQUN0QjtZQUNBO2dCQUNFTixVQUFVUiwyREFBUUEsQ0FBQ2UsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ1AsV0FBVztnQkFDckRLLG9CQUFvQjtZQUN0QjtTQUNEO1FBQ0RHLGtCQUFrQmxCLDRDQUFlLENBQUNtQixnQkFBZ0IsQ0FBQ0MsV0FBVztRQUM5RCxxRUFBcUU7UUFDckUsWUFBWTtRQUNaLGlDQUFpQztRQUNqQ0MsUUFBUTtRQUNSLCtCQUErQjtRQUMvQkMsa0JBQWtCLFNBQWxCQTtZQUNFQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztRQUN6QjtRQUNBQyxXQUFXO1lBQ1RDLDZCQUE2QixTQUMzQkMsWUFDQUM7Z0JBRUEsMEJBQTBCO2dCQUMxQiwyQkFBMkI7Z0JBQzNCLElBQUlDLE9BQU87Z0JBQ1hDLFdBQVc7b0JBQ1QsNEJBQTRCO29CQUM1QkQsT0FBTztvQkFDUEUsUUFBUUMsR0FBRyxDQUFDO2dCQUNkLEdBQUc7Z0JBQ0gsT0FBT0g7WUFDVDtRQUNGO0lBQ0Y7SUFFQSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1GQUFtRjtJQUNuRixZQUFZO0lBQ1osc0RBQXNEO0lBQ3RELDhEQUE4RDtJQUM5RCx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLFlBQVk7SUFDWixtRUFBbUU7SUFDbkUsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0VBQXdFO0lBQ3hFLDhFQUE4RTtJQUM5RSxxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLDZDQUE2QztJQUM3Qyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLCtEQUErRDtJQUMvRCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlDQUF5QztJQUN6QyxzREFBc0Q7SUFDdEQsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBR3RCL0IsZ0RBQVNBLENBQ1A7UUFDRyxJQUFNbUMsS0FDTGxDLDRDQUFlLENBQUNtQyxNQUFNLENBQUNDLFdBQVcsTUFBTSxJQUFJcEMsNENBQWUsQ0FBQ21DLE1BQU0sQ0FBQy9CLE1BQU1ZLElBQUk7UUFFL0VrQixHQUFHRyxLQUFLLENBQUMsNEJBQTRCaEM7UUFDckMyQixRQUFRQyxHQUFHLENBQUM7SUFDWix1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLElBQUk7SUFDSiw2QkFBNkI7SUFDL0IsR0FDQTtRQUFDN0IsTUFBTVksSUFBSTtLQUFDO0lBR2QscUJBQ0UsOERBQUNzQjtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7Ozs7Ozs7Ozs7QUFHckI7R0F4R3dCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2dpbi9BdXRoRW1haWwudHN4PzI1ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSBcImZpcmViYXNldWlcIjtcbmltcG9ydCBcImZpcmViYXNldWkvZGlzdC9maXJlYmFzZXVpLmNzc1wiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XG5pbXBvcnQge1xuICBnZXRBdXRoLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIEF1dGgsXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcbiAgc2lnbkluV2l0aFBvcHVwLFxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5pbnRlcmZhY2UgYXV0aFByb3BzIHtcbiAgICBhdXRoOiBmaXJlYmFzZS5hdXRoLkF1dGhcbiAgICBsb2FkaW5nOiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhFbWFpbChwcm9wcyA6IGF1dGhQcm9wcykge1xuXG4gIHZhciB1aUNvbmZpZyA9IHtcbiAgICBzaWduSW5TdWNjZXNzVXJsOiBcIi9yZWdpb25zXCIsXG4gICAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxuICAgIHNpZ25Jbk9wdGlvbnM6IFtcbiAgICAgIC8vIExlYXZlIHRoZSBsaW5lcyBhcyBpcyBmb3IgdGhlIHByb3ZpZGVycyB5b3Ugd2FudCB0byBvZmZlciB5b3VyIHVzZXJzLlxuICAgICAge1xuICAgICAgICBwcm92aWRlcjogR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICBjbGllbnRJZDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lEfWAsXG4gICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjcmVkZW50aWFsSGVscGVyOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTyxcbiAgICAvLyB0b3NVcmwgYW5kIHByaXZhY3lQb2xpY3lVcmwgYWNjZXB0IGVpdGhlciB1cmwgc3RyaW5nIG9yIGEgY2FsbGJhY2tcbiAgICAvLyBmdW5jdGlvbi5cbiAgICAvLyBUZXJtcyBvZiBzZXJ2aWNlIHVybC9jYWxsYmFjay5cbiAgICB0b3NVcmw6IFwieW91ciB0ZXJtcyBvZiBzZXJ2aWNlIHVybFwiLFxuICAgIC8vIFByaXZhY3kgcG9saWN5IHVybC9jYWxsYmFjay5cbiAgICBwcml2YWN5UG9saWN5VXJsOiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKFwiPHlvdXItcHJpdmFjeS1wb2xpY3ktdXJsPlwiKTtcbiAgICB9LFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiAoXG4gICAgICAgIGF1dGhPYmplY3Q6IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWwsXG4gICAgICAgIHJlZGlyZWN0VVJMPzogc3RyaW5nXG4gICAgICApID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXV0aE9iamVjdClcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVkaXJlY3RVUkwpXG4gICAgICAgIHZhciBsb2FkID0gZmFsc2VcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gWW91ciBkZWxheWVkIGNvZGUgaGVyZS4uLlxuICAgICAgICAgIGxvYWQgPSB0cnVlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpXG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgICByZXR1cm4gbG9hZDtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgdWlDb25maWcgPSB7XG4gIC8vICAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6IFwiL3JlZ2lvbnNcIixcbiAgLy8gICAgICAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxuICAvLyAgICAgICBzaWduSW5PcHRpb25zOiBbXG4gIC8vICAgICAgICAgLy8gTGVhdmUgdGhlIGxpbmVzIGFzIGlzIGZvciB0aGUgcHJvdmlkZXJzIHlvdSB3YW50IHRvIG9mZmVyIHlvdXIgdXNlcnMuXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgcHJvdmlkZXI6IEdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgLy8gICAgICAgICAgIGNsaWVudElkOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUR9YCxcbiAgLy8gICAgICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogZmFsc2UsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgLy8gICAgICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogZmFsc2UsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgXSxcbiAgLy8gICAgICAgY3JlZGVudGlhbEhlbHBlcjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8sXG4gIC8vICAgICAgIC8vIHRvc1VybCBhbmQgcHJpdmFjeVBvbGljeVVybCBhY2NlcHQgZWl0aGVyIHVybCBzdHJpbmcgb3IgYSBjYWxsYmFja1xuICAvLyAgICAgICAvLyBmdW5jdGlvbi5cbiAgLy8gICAgICAgLy8gVGVybXMgb2Ygc2VydmljZSB1cmwvY2FsbGJhY2suXG4gIC8vICAgICAgIHRvc1VybDogXCJ5b3VyIHRlcm1zIG9mIHNlcnZpY2UgdXJsXCIsXG4gIC8vICAgICAgIC8vIFByaXZhY3kgcG9saWN5IHVybC9jYWxsYmFjay5cbiAgLy8gICAgICAgcHJpdmFjeVBvbGljeVVybDogZnVuY3Rpb24gKCkge1xuICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCI8eW91ci1wcml2YWN5LXBvbGljeS11cmw+XCIpO1xuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBjYWxsYmFja3M6IHtcbiAgLy8gICAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IChcbiAgLy8gICAgICAgICAgIGF1dGhPYmplY3Q6IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWwsXG4gIC8vICAgICAgICAgICByZWRpcmVjdFVSTD86IHN0cmluZ1xuICAvLyAgICAgICAgICkgPT4ge1xuICAvLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXV0aE9iamVjdClcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlZGlyZWN0VVJMKVxuICAvLyAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMubG9hZGluZylcbiAgLy8gICAgICAgICAgIHJldHVybiBwcm9wcy5sb2FkaW5nO1xuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9O1xuICAvLyB9LCBbcHJvcHMubG9hZGluZ10pXG5cblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgIGNvbnN0IHVpID1cbiAgICAgICAgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSS5nZXRJbnN0YW5jZSgpIHx8IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKHByb3BzLmF1dGgpO1xuXG4gICAgICB1aS5zdGFydChcIi5maXJlYmFzZS1hdXRoLWNvbnRhaW5lclwiLCB1aUNvbmZpZyk7XG4gICAgICBjb25zb2xlLmxvZyhcInVpXCIpXG4gICAgICAvLyBpZiAocHJvcHMubG9hZGluZykge1xuICAgICAgLy8gICB3aW5kb3cubG9jYXRpb24uYXNzaWduKFwiL3JlZ2lvbnNcIik7XG4gICAgICAvLyB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5sb2FkaW5nKVxuICAgIH0sXG4gICAgW3Byb3BzLmF1dGhdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJlYmFzZS1hdXRoLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiZmlyZWJhc2V1aSIsImZpcmViYXNlIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiQXV0aEVtYWlsIiwicHJvcHMiLCJ1aUNvbmZpZyIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5GbG93Iiwic2lnbkluT3B0aW9ucyIsInByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJyZXF1aXJlRGlzcGxheU5hbWUiLCJhdXRoIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJjcmVkZW50aWFsSGVscGVyIiwiQ3JlZGVudGlhbEhlbHBlciIsIkdPT0dMRV9ZT0xPIiwidG9zVXJsIiwicHJpdmFjeVBvbGljeVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzaWduIiwiY2FsbGJhY2tzIiwic2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0IiwiYXV0aE9iamVjdCIsInJlZGlyZWN0VVJMIiwibG9hZCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwidWkiLCJBdXRoVUkiLCJnZXRJbnN0YW5jZSIsInN0YXJ0IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/AuthEmail.tsx\n"));

/***/ })

});