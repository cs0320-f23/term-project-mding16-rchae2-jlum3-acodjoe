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

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebaseui/dist/firebaseui.css */ \"(app-pages-browser)/./node_modules/firebaseui/dist/firebaseui.css\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var _AuthEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthEmail */ \"(app-pages-browser)/./src/app/login/AuthEmail.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    var firebaseConfig = {\n        apiKey: \"AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs\",\n        authDomain: \"termproj-d181a.firebaseapp.com\",\n        projectId: \"termproj-d181a\",\n        storageBucket: \"termproj-d181a.appspot.com\",\n        messagingSenderId: \"961263025075\",\n        appId: \"1:961263025075:web:cabb7d919cac0c72ebe9c6\",\n        measurementId: \"G-LEFF59MXDX\"\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), id = _useState[0], setID = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), user = _useState1[0], setUser = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), regions = _useState2[0], setRegions = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), loading = _useState3[0], setLoading = _useState3[1];\n    // Initialize Firebase\n    var app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initializeApp(firebaseConfig);\n    // const analytics = getAnalytics(app);\n    var auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth();\n    var firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(app);\n    // const provider = new GoogleAuthProvider();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // var unsubscribe = \n        auth.onAuthStateChanged(function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(user) {\n                var userId, document, gotDoc, levels, data;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!user) return [\n                                3,\n                                5\n                            ];\n                            // console.log(\"here\");\n                            // User is signed in\n                            userId = user.uid;\n                            document = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(firestore, \"users\", userId);\n                            return [\n                                4,\n                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(document)\n                            ];\n                        case 1:\n                            gotDoc = _state.sent();\n                            if (!!gotDoc.exists()) return [\n                                3,\n                                3\n                            ];\n                            levels = {\n                                // Your data fields here\n                                AfriCarib: 0,\n                                Asia: 0,\n                                NorthAm: 0,\n                                Euro: 0\n                            };\n                            data = {\n                                // Your data fields here\n                                userID: user.uid,\n                                userEmail: user.email,\n                                regions: levels\n                            };\n                            return [\n                                4,\n                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(document, data).then(function() {\n                                    console.log(\"Document added with custom ID:\", document);\n                                    setID(user.uid);\n                                    var _user_email;\n                                    setUser((_user_email = user.email) !== null && _user_email !== void 0 ? _user_email : \"\");\n                                    setRegions(levels);\n                                    // window.location.assign(\"/regions\");\n                                    setLoading(true);\n                                })[\"catch\"](function(error) {\n                                    console.error(\"Error adding document:\", error);\n                                })\n                            ];\n                        case 2:\n                            _state.sent();\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            console.log(\"You are already signed in!\");\n                            setID(gotDoc.id);\n                            setUser(gotDoc.data().userEmail);\n                            setRegions(gotDoc.data().regions);\n                            console.log(gotDoc.id);\n                            console.log(gotDoc.data().userEmail);\n                            console.log(gotDoc.data().regions);\n                            setLoading(true);\n                            _state.label = 4;\n                        case 4:\n                            return [\n                                3,\n                                6\n                            ];\n                        case 5:\n                            console.log(\"Authentication error:\", user);\n                            setLoading(false);\n                            _state.label = 6;\n                        case 6:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(user) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    }, [\n        auth\n    ]);\n    // if (loading) {\n    //   return <p>Loading...</p>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthEmail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            auth: auth,\n            loading: loading\n        }, void 0, false, {\n            fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/page.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/page.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"mtaco2ix/4zkC4nx+WS9MCElL6c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUtYO0FBQ0c7QUFFUDtBQU9SO0FBR2IsU0FBU1M7O0lBRXRCLElBQU1DLGlCQUFpQjtRQUNyQkMsUUFBUUMseUNBQXFDO1FBQzdDRyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsZUFBZTtRQUNmQyxtQkFBbUJOLGNBQTJCO1FBQzlDUSxPQUFPUiwyQ0FBMkI7UUFDbENVLGVBQWVWLGNBQTJCO0lBQzVDO0lBRUEsSUFBb0JWLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0QnNCLEtBQWF0QixjQUFUdUIsUUFBU3ZCO0lBQ3BCLElBQXdCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBMUJ3QixPQUFpQnhCLGVBQVh5QixVQUFXekI7SUFDeEIsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxDQUFDLFFBQWpDMEIsVUFBdUIxQixlQUFkMkIsYUFBYzNCO0lBQzlCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBaEM0QixVQUF1QjVCLGVBQWQ2QixhQUFjN0I7SUFHOUIsc0JBQXNCO0lBQ3RCLElBQUk4QixNQUFNN0IsMkRBQVFBLENBQUM4QixhQUFhLENBQUN2QjtJQUNqQyx1Q0FBdUM7SUFDdkMsSUFBSXdCLE9BQU8vQiwyREFBUUEsQ0FBQytCLElBQUk7SUFDeEIsSUFBTUMsWUFBWTlCLGdFQUFZQSxDQUFDMkI7SUFDL0IsNkNBQTZDO0lBRTdDL0IsZ0RBQVNBLENBQ1A7UUFFRSxxQkFBcUI7UUFDbkJpQyxLQUFLRSxrQkFBa0I7dUJBQUMsNEVBQU9WO29CQUtyQlcsUUFDQUMsVUFDQUMsUUFHRUMsUUFRQUM7Ozs7aUNBaEJOZixNQUFBQTs7Ozs0QkFDRix1QkFBdUI7NEJBQ3ZCLG9CQUFvQjs0QkFDZFcsU0FBU1gsS0FBS2dCLEdBQUc7NEJBQ2pCSixXQUFXL0IsdURBQUdBLENBQUM0QixXQUFXLFNBQVNFOzRCQUMxQjs7Z0NBQU03QiwwREFBTUEsQ0FBQzhCOzs7NEJBQXRCQyxTQUFTO2lDQUVYLENBQUNBLE9BQU9JLE1BQU0sSUFBZDs7Ozs0QkFDSUgsU0FBUztnQ0FDYix3QkFBd0I7Z0NBQ3hCSSxXQUFXO2dDQUNYQyxNQUFNO2dDQUNOQyxTQUFTO2dDQUNUQyxNQUFNOzRCQUNSOzRCQUVNTixPQUFPO2dDQUNYLHdCQUF3QjtnQ0FDeEJPLFFBQVF0QixLQUFLZ0IsR0FBRztnQ0FDaEJPLFdBQVd2QixLQUFLd0IsS0FBSztnQ0FDckJ0QixTQUFTWTs0QkFDWDs0QkFDQTs7Z0NBQU1sQywwREFBTUEsQ0FBQ2dDLFVBQVVHLE1BQ3BCVSxJQUFJLENBQUM7b0NBQ0pDLFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0NmO29DQUM5Q2IsTUFBTUMsS0FBS2dCLEdBQUc7d0NBQ05oQjtvQ0FBUkMsUUFBUUQsQ0FBQUEsY0FBQUEsS0FBS3dCLEtBQUssY0FBVnhCLHlCQUFBQSxjQUFjO29DQUN0QkcsV0FBV1c7b0NBQ1gsc0NBQXNDO29DQUN0Q1QsV0FBVztnQ0FDYixFQUNDdUIsQ0FBQUEsUUFBSyxDQUFDLFNBQUNDO29DQUNOSCxRQUFRRyxLQUFLLENBQUMsMEJBQTBCQTtnQ0FDMUM7Ozs0QkFYRjs7Ozs7OzRCQWFBSCxRQUFRQyxHQUFHLENBQUM7NEJBQ1o1QixNQUFNYyxPQUFPZixFQUFFOzRCQUNmRyxRQUFRWSxPQUFPRSxJQUFJLEdBQUdRLFNBQVM7NEJBQy9CcEIsV0FBV1UsT0FBT0UsSUFBSSxHQUFHYixPQUFPOzRCQUNoQ3dCLFFBQVFDLEdBQUcsQ0FBQ2QsT0FBT2YsRUFBRTs0QkFDckI0QixRQUFRQyxHQUFHLENBQUNkLE9BQU9FLElBQUksR0FBR1EsU0FBUzs0QkFDbkNHLFFBQVFDLEdBQUcsQ0FBQ2QsT0FBT0UsSUFBSSxHQUFHYixPQUFPOzRCQUNqQ0csV0FBVzs7Ozs7Ozs7NEJBSWJxQixRQUFRQyxHQUFHLENBQUMseUJBQXlCM0I7NEJBQ3JDSyxXQUFXOzs7Ozs7OztZQUVmOzRCQW5EK0JMOzs7O0lBb0RqQyxHQUFHO1FBQUNRO0tBQUs7SUFHYixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLElBQUk7SUFFSixxQkFDRSw4REFBQ3NCO2tCQUNDLDRFQUFDcEQsa0RBQVNBO1lBQUM4QixNQUFNQTtZQUFNSixTQUFTQTs7Ozs7Ozs7Ozs7QUFHdEM7R0E3RndCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeD9mYzYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpIGZyb20gXCJmaXJlYmFzZXVpXCI7XG5pbXBvcnQgXCJmaXJlYmFzZXVpL2Rpc3QvZmlyZWJhc2V1aS5jc3NcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgQXV0aEVtYWlsIGZyb20gXCIuL0F1dGhFbWFpbFwiO1xuaW1wb3J0IHtcbiAgZ2V0RmlyZXN0b3JlLFxuICBhZGREb2MsXG4gIGNvbGxlY3Rpb24sXG4gIHNldERvYyxcbiAgZG9jLCBnZXREb2Ncbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG5cbiAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0dJTl9BUElfS0VZLFxuICAgIGF1dGhEb21haW46IFwidGVybXByb2otZDE4MWEuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcInRlcm1wcm9qLWQxODFhXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXJtcHJvai1kMTgxYS5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NU0csXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUCxcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NU1IsXG4gIH07XG5cbiAgY29uc3QgW2lkLCBzZXRJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZWdpb25zLCBzZXRSZWdpb25zXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICB2YXIgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIC8vIGNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xuICB2YXIgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbiAgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG4gIC8vIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBcbiAgICAgIC8vIHZhciB1bnN1YnNjcmliZSA9IFxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZChhc3luYyAodXNlcikgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW0gYWN0dWFsbHkgc28gZG9uZSByaWdodCBub3dcIik7XG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICAgICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIGluXG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSB1c2VyLnVpZDtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZG9jKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCB1c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgZ290RG9jID0gYXdhaXQgZ2V0RG9jKGRvY3VtZW50KTtcblxuICAgICAgICAgICAgaWYgKCFnb3REb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgbGV2ZWxzID0ge1xuICAgICAgICAgICAgICAgIC8vIFlvdXIgZGF0YSBmaWVsZHMgaGVyZVxuICAgICAgICAgICAgICAgIEFmcmlDYXJpYjogMCxcbiAgICAgICAgICAgICAgICBBc2lhOiAwLFxuICAgICAgICAgICAgICAgIE5vcnRoQW06IDAsXG4gICAgICAgICAgICAgICAgRXVybzogMCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIC8vIFlvdXIgZGF0YSBmaWVsZHMgaGVyZVxuICAgICAgICAgICAgICAgIHVzZXJJRDogdXNlci51aWQsXG4gICAgICAgICAgICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHJlZ2lvbnM6IGxldmVscyxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYXdhaXQgc2V0RG9jKGRvY3VtZW50LCBkYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgYWRkZWQgd2l0aCBjdXN0b20gSUQ6XCIsIGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICAgIHNldElEKHVzZXIudWlkKTtcbiAgICAgICAgICAgICAgICAgIHNldFVzZXIodXNlci5lbWFpbCA/PyBcIlwiKTtcbiAgICAgICAgICAgICAgICAgIHNldFJlZ2lvbnMobGV2ZWxzKTtcbiAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCIvcmVnaW9uc1wiKTtcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGFyZSBhbHJlYWR5IHNpZ25lZCBpbiFcIik7XG4gICAgICAgICAgICAgIHNldElEKGdvdERvYy5pZCk7XG4gICAgICAgICAgICAgIHNldFVzZXIoZ290RG9jLmRhdGEoKS51c2VyRW1haWwpO1xuICAgICAgICAgICAgICBzZXRSZWdpb25zKGdvdERvYy5kYXRhKCkucmVnaW9ucyk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdvdERvYy5pZCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdvdERvYy5kYXRhKCkudXNlckVtYWlsKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZ290RG9jLmRhdGEoKS5yZWdpb25zKTtcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIi9yZWdpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0aW9uIGVycm9yOlwiLCB1c2VyKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBbYXV0aF1cbiAgKVxuXG4gIC8vIGlmIChsb2FkaW5nKSB7XG4gIC8vICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEF1dGhFbWFpbCBhdXRoPXthdXRofSBsb2FkaW5nPXtsb2FkaW5nfT48L0F1dGhFbWFpbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmlyZWJhc2UiLCJBdXRoRW1haWwiLCJnZXRGaXJlc3RvcmUiLCJzZXREb2MiLCJkb2MiLCJnZXREb2MiLCJQYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTE9HSU5fQVBJX0tFWSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19NU0ciLCJhcHBJZCIsIk5FWFRfUFVCTElDX0FQUCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19NU1IiLCJpZCIsInNldElEIiwidXNlciIsInNldFVzZXIiLCJyZWdpb25zIiwic2V0UmVnaW9ucyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGgiLCJmaXJlc3RvcmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VySWQiLCJkb2N1bWVudCIsImdvdERvYyIsImxldmVscyIsImRhdGEiLCJ1aWQiLCJleGlzdHMiLCJBZnJpQ2FyaWIiLCJBc2lhIiwiTm9ydGhBbSIsIkV1cm8iLCJ1c2VySUQiLCJ1c2VyRW1haWwiLCJlbWFpbCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});