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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthEmail; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebaseui */ \"(app-pages-browser)/./node_modules/firebaseui/dist/esm.js\");\n/* harmony import */ var firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui/dist/firebaseui.css */ \"(app-pages-browser)/./node_modules/firebaseui/dist/firebaseui.css\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AuthEmail(props) {\n    _s();\n    var uiConfig = {\n        signInSuccessUrl: \"/regions\",\n        signInFlow: \"popup\",\n        signInOptions: [\n            // Leave the lines as is for the providers you want to offer your users.\n            {\n                provider: firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider.PROVIDER_ID,\n                clientId: \"\".concat(\"961263025075-cpg1jumfrcus26bhbkakad1l5d6s4ue5.apps.googleusercontent.com\"),\n                requireDisplayName: false\n            },\n            {\n                provider: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth.EmailAuthProvider.PROVIDER_ID,\n                requireDisplayName: false\n            }\n        ],\n        credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.CredentialHelper.GOOGLE_YOLO,\n        // tosUrl and privacyPolicyUrl accept either url string or a callback\n        // function.\n        // Terms of service url/callback.\n        tosUrl: \"your terms of service url\",\n        // Privacy policy url/callback.\n        privacyPolicyUrl: function privacyPolicyUrl() {\n            window.location.assign(\"<your-privacy-policy-url>\");\n        },\n        callbacks: {\n            signInSuccessWithAuthResult: function() {\n                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function(authObject, redirectURL) {\n                    var delayedOperation;\n                    return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {\n                        delayedOperation = function() {\n                            return new Promise(function(resolve) {\n                                setTimeout(function() {\n                                    console.log(\"Delayed code executed after 2000 milliseconds\");\n                                    resolve(true); // Resolve the promise after the delay\n                                }, 2000);\n                            });\n                        };\n                        // const load = await delayedOperation();\n                        // console.log(load);\n                        return [\n                            2,\n                            true\n                        ];\n                    });\n                });\n                return function(authObject, redirectURL) {\n                    return _ref.apply(this, arguments);\n                };\n            }()\n        }\n    };\n    // useEffect(() => {\n    //     uiConfig = {\n    //       signInSuccessUrl: \"/regions\",\n    //       signInFlow: \"popup\",\n    //       signInOptions: [\n    //         // Leave the lines as is for the providers you want to offer your users.\n    //         {\n    //           provider: GoogleAuthProvider.PROVIDER_ID,\n    //           clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,\n    //           requireDisplayName: false,\n    //         },\n    //         {\n    //           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,\n    //           requireDisplayName: false,\n    //         },\n    //       ],\n    //       credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,\n    //       // tosUrl and privacyPolicyUrl accept either url string or a callback\n    //       // function.\n    //       // Terms of service url/callback.\n    //       tosUrl: \"your terms of service url\",\n    //       // Privacy policy url/callback.\n    //       privacyPolicyUrl: function () {\n    //         window.location.assign(\"<your-privacy-policy-url>\");\n    //       },\n    //       callbacks: {\n    //         signInSuccessWithAuthResult: (\n    //           authObject: firebase.auth.UserCredential,\n    //           redirectURL?: string\n    //         ) => {\n    //           // console.log(authObject)\n    //           // console.log(redirectURL)\n    //           console.log(props.loading)\n    //           return props.loading;\n    //         },\n    //       },\n    //     };\n    // }, [props.loading])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ui = firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI.getInstance() || new firebaseui__WEBPACK_IMPORTED_MODULE_2__.auth.AuthUI(props.auth);\n        ui.start(\".firebase-auth-container\", uiConfig);\n        console.log(\"ui\");\n    // if (props.loading) {\n    //   window.location.assign(\"/regions\");\n    // }\n    // console.log(props.loading)\n    }, [\n        props.auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"firebase-auth-container\"\n        }, void 0, false, {\n            fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/AuthEmail.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthEmail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = AuthEmail;\nvar _c;\n$RefreshReg$(_c, \"AuthEmail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vQXV0aEVtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUlWO0FBQ0Q7QUFDRztBQU9wQjtBQU9SLFNBQVNLLFVBQVVDLEtBQWlCOztJQUVqRCxJQUFJQyxXQUFXO1FBQ2JDLGtCQUFrQjtRQUNsQkMsWUFBWTtRQUNaQyxlQUFlO1lBQ2Isd0VBQXdFO1lBQ3hFO2dCQUNFQyxVQUFVUCw2REFBa0JBLENBQUNRLFdBQVc7Z0JBQ3hDQyxVQUFVLEdBQXFDLE9BQWxDQywwRUFBaUM7Z0JBQzlDRyxvQkFBb0I7WUFDdEI7WUFDQTtnQkFDRU4sVUFBVVIsMkRBQVFBLENBQUNlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNQLFdBQVc7Z0JBQ3JESyxvQkFBb0I7WUFDdEI7U0FDRDtRQUNERyxrQkFBa0JsQiw0Q0FBZSxDQUFDbUIsZ0JBQWdCLENBQUNDLFdBQVc7UUFDOUQscUVBQXFFO1FBQ3JFLFlBQVk7UUFDWixpQ0FBaUM7UUFDakNDLFFBQVE7UUFDUiwrQkFBK0I7UUFDL0JDLGtCQUFrQixTQUFsQkE7WUFDRUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7UUFDekI7UUFDQUMsV0FBVztZQUNUQywyQkFBMkI7MkJBQUUsNEVBQzNCQyxZQUNBQzt3QkFFTUM7O3dCQUFBQSxtQkFBbUI7NEJBQ3ZCLE9BQU8sSUFBSUMsUUFBUSxTQUFDQztnQ0FDbEJDLFdBQVc7b0NBQ1RDLFFBQVFDLEdBQUcsQ0FBQztvQ0FDWkgsUUFBUSxPQUFPLHNDQUFzQztnQ0FDdkQsR0FBRzs0QkFDTDt3QkFDRjt3QkFFQSx5Q0FBeUM7d0JBQ3pDLHFCQUFxQjt3QkFDckI7OzRCQUFPOzs7Z0JBQ1Q7Z0NBZkVKLFlBQ0FDOzs7O1FBZUo7SUFDRjtJQUVBLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsbUZBQW1GO0lBQ25GLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsOERBQThEO0lBQzlELHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1FQUFtRTtJQUNuRSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLFdBQVc7SUFDWCx3RUFBd0U7SUFDeEUsOEVBQThFO0lBQzlFLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsNkNBQTZDO0lBQzdDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsK0RBQStEO0lBQy9ELFdBQVc7SUFDWCxxQkFBcUI7SUFDckIseUNBQXlDO0lBQ3pDLHNEQUFzRDtJQUN0RCxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMsdUNBQXVDO0lBQ3ZDLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFHdEI5QixnREFBU0EsQ0FDUDtRQUNHLElBQU1xQyxLQUNMcEMsNENBQWUsQ0FBQ3FDLE1BQU0sQ0FBQ0MsV0FBVyxNQUFNLElBQUl0Qyw0Q0FBZSxDQUFDcUMsTUFBTSxDQUFDakMsTUFBTVksSUFBSTtRQUUvRW9CLEdBQUdHLEtBQUssQ0FBQyw0QkFBNEJsQztRQUNyQzZCLFFBQVFDLEdBQUcsQ0FBQztJQUNaLHVCQUF1QjtJQUN2Qix3Q0FBd0M7SUFDeEMsSUFBSTtJQUNKLDZCQUE2QjtJQUMvQixHQUNBO1FBQUMvQixNQUFNWSxJQUFJO0tBQUM7SUFHZCxxQkFDRSw4REFBQ3dCO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs7Ozs7Ozs7OztBQUdyQjtHQTNHd0J0QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL0F1dGhFbWFpbC50c3g/MjVmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aSBmcm9tIFwiZmlyZWJhc2V1aVwiO1xuaW1wb3J0IFwiZmlyZWJhc2V1aS9kaXN0L2ZpcmViYXNldWkuY3NzXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcbmltcG9ydCB7XG4gIGdldEF1dGgsXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcbiAgQXV0aCxcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxuICBzaWduSW5XaXRoUG9wdXAsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmludGVyZmFjZSBhdXRoUHJvcHMge1xuICAgIGF1dGg6IGZpcmViYXNlLmF1dGguQXV0aFxuICAgIGxvYWRpbmc6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aEVtYWlsKHByb3BzIDogYXV0aFByb3BzKSB7XG5cbiAgdmFyIHVpQ29uZmlnID0ge1xuICAgIHNpZ25JblN1Y2Nlc3NVcmw6IFwiL3JlZ2lvbnNcIixcbiAgICBzaWduSW5GbG93OiBcInBvcHVwXCIsXG4gICAgc2lnbkluT3B0aW9uczogW1xuICAgICAgLy8gTGVhdmUgdGhlIGxpbmVzIGFzIGlzIGZvciB0aGUgcHJvdmlkZXJzIHlvdSB3YW50IHRvIG9mZmVyIHlvdXIgdXNlcnMuXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGVyOiBHb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgIGNsaWVudElkOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUR9YCxcbiAgICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGVyOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICByZXF1aXJlRGlzcGxheU5hbWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNyZWRlbnRpYWxIZWxwZXI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPLFxuICAgIC8vIHRvc1VybCBhbmQgcHJpdmFjeVBvbGljeVVybCBhY2NlcHQgZWl0aGVyIHVybCBzdHJpbmcgb3IgYSBjYWxsYmFja1xuICAgIC8vIGZ1bmN0aW9uLlxuICAgIC8vIFRlcm1zIG9mIHNlcnZpY2UgdXJsL2NhbGxiYWNrLlxuICAgIHRvc1VybDogXCJ5b3VyIHRlcm1zIG9mIHNlcnZpY2UgdXJsXCIsXG4gICAgLy8gUHJpdmFjeSBwb2xpY3kgdXJsL2NhbGxiYWNrLlxuICAgIHByaXZhY3lQb2xpY3lVcmw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCI8eW91ci1wcml2YWN5LXBvbGljeS11cmw+XCIpO1xuICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IGFzeW5jIChcbiAgICAgICAgYXV0aE9iamVjdDogZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbCxcbiAgICAgICAgcmVkaXJlY3RVUkw/OiBzdHJpbmdcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBkZWxheWVkT3BlcmF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsYXllZCBjb2RlIGV4ZWN1dGVkIGFmdGVyIDIwMDAgbWlsbGlzZWNvbmRzXCIpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpOyAvLyBSZXNvbHZlIHRoZSBwcm9taXNlIGFmdGVyIHRoZSBkZWxheVxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3QgbG9hZCA9IGF3YWl0IGRlbGF5ZWRPcGVyYXRpb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9hZCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICB1aUNvbmZpZyA9IHtcbiAgLy8gICAgICAgc2lnbkluU3VjY2Vzc1VybDogXCIvcmVnaW9uc1wiLFxuICAvLyAgICAgICBzaWduSW5GbG93OiBcInBvcHVwXCIsXG4gIC8vICAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcbiAgLy8gICAgICAgICAvLyBMZWF2ZSB0aGUgbGluZXMgYXMgaXMgZm9yIHRoZSBwcm92aWRlcnMgeW91IHdhbnQgdG8gb2ZmZXIgeW91ciB1c2Vycy5cbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICBwcm92aWRlcjogR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAvLyAgICAgICAgICAgY2xpZW50SWQ6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9JRH1gLFxuICAvLyAgICAgICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiBmYWxzZSxcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIHByb3ZpZGVyOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAvLyAgICAgICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiBmYWxzZSxcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICBdLFxuICAvLyAgICAgICBjcmVkZW50aWFsSGVscGVyOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTyxcbiAgLy8gICAgICAgLy8gdG9zVXJsIGFuZCBwcml2YWN5UG9saWN5VXJsIGFjY2VwdCBlaXRoZXIgdXJsIHN0cmluZyBvciBhIGNhbGxiYWNrXG4gIC8vICAgICAgIC8vIGZ1bmN0aW9uLlxuICAvLyAgICAgICAvLyBUZXJtcyBvZiBzZXJ2aWNlIHVybC9jYWxsYmFjay5cbiAgLy8gICAgICAgdG9zVXJsOiBcInlvdXIgdGVybXMgb2Ygc2VydmljZSB1cmxcIixcbiAgLy8gICAgICAgLy8gUHJpdmFjeSBwb2xpY3kgdXJsL2NhbGxiYWNrLlxuICAvLyAgICAgICBwcml2YWN5UG9saWN5VXJsOiBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIjx5b3VyLXByaXZhY3ktcG9saWN5LXVybD5cIik7XG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIGNhbGxiYWNrczoge1xuICAvLyAgICAgICAgIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdDogKFxuICAvLyAgICAgICAgICAgYXV0aE9iamVjdDogZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbCxcbiAgLy8gICAgICAgICAgIHJlZGlyZWN0VVJMPzogc3RyaW5nXG4gIC8vICAgICAgICAgKSA9PiB7XG4gIC8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdXRoT2JqZWN0KVxuICAvLyAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVkaXJlY3RVUkwpXG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5sb2FkaW5nKVxuICAvLyAgICAgICAgICAgcmV0dXJuIHByb3BzLmxvYWRpbmc7XG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIH07XG4gIC8vIH0sIFtwcm9wcy5sb2FkaW5nXSlcblxuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICAgY29uc3QgdWkgPVxuICAgICAgICBmaXJlYmFzZXVpLmF1dGguQXV0aFVJLmdldEluc3RhbmNlKCkgfHwgbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkocHJvcHMuYXV0aCk7XG5cbiAgICAgIHVpLnN0YXJ0KFwiLmZpcmViYXNlLWF1dGgtY29udGFpbmVyXCIsIHVpQ29uZmlnKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidWlcIilcbiAgICAgIC8vIGlmIChwcm9wcy5sb2FkaW5nKSB7XG4gICAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCIvcmVnaW9uc1wiKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmxvYWRpbmcpXG4gICAgfSxcbiAgICBbcHJvcHMuYXV0aF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcmViYXNlLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZXVpIiwiZmlyZWJhc2UiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJBdXRoRW1haWwiLCJwcm9wcyIsInVpQ29uZmlnIiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25JbkZsb3ciLCJzaWduSW5PcHRpb25zIiwicHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsInJlcXVpcmVEaXNwbGF5TmFtZSIsImF1dGgiLCJFbWFpbEF1dGhQcm92aWRlciIsImNyZWRlbnRpYWxIZWxwZXIiLCJDcmVkZW50aWFsSGVscGVyIiwiR09PR0xFX1lPTE8iLCJ0b3NVcmwiLCJwcml2YWN5UG9saWN5VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQiLCJhdXRoT2JqZWN0IiwicmVkaXJlY3RVUkwiLCJkZWxheWVkT3BlcmF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInVpIiwiQXV0aFVJIiwiZ2V0SW5zdGFuY2UiLCJzdGFydCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/AuthEmail.tsx\n"));

/***/ })

});