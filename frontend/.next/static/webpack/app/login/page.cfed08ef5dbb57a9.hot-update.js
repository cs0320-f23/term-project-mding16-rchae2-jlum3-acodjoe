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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebaseui/dist/firebaseui.css */ \"(app-pages-browser)/./node_modules/firebaseui/dist/firebaseui.css\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var _AuthEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthEmail */ \"(app-pages-browser)/./src/app/login/AuthEmail.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    var firebaseConfig = {\n        apiKey: \"AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs\",\n        authDomain: \"termproj-d181a.firebaseapp.com\",\n        projectId: \"termproj-d181a\",\n        storageBucket: \"termproj-d181a.appspot.com\",\n        messagingSenderId: \"961263025075\",\n        appId: \"1:961263025075:web:cabb7d919cac0c72ebe9c6\",\n        measurementId: \"G-LEFF59MXDX\"\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), id = _useState[0], setID = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), user = _useState1[0], setUser = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), regions = _useState2[0], setRegions = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), loading = _useState3[0], setLoading = _useState3[1];\n    // Initialize Firebase\n    var app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initializeApp(firebaseConfig);\n    // const analytics = getAnalytics(app);\n    var auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth();\n    var firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(app);\n    // const provider = new GoogleAuthProvider();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // var unsubscribe = \n        auth.onAuthStateChanged(function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(user) {\n                var userId, document, gotDoc, levels, data;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!user) return [\n                                3,\n                                5\n                            ];\n                            // console.log(\"here\");\n                            // User is signed in\n                            userId = user.uid;\n                            document = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(firestore, \"users\", userId);\n                            return [\n                                4,\n                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(document)\n                            ];\n                        case 1:\n                            gotDoc = _state.sent();\n                            if (!!gotDoc.exists()) return [\n                                3,\n                                3\n                            ];\n                            levels = {\n                                // Your data fields here\n                                AfriCarib: 0,\n                                Asia: 0,\n                                NorthAm: 0,\n                                Euro: 0\n                            };\n                            data = {\n                                // Your data fields here\n                                userID: user.uid,\n                                userEmail: user.email,\n                                regions: levels\n                            };\n                            return [\n                                4,\n                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(document, data).then(function() {\n                                    console.log(\"Document added with custom ID:\", document);\n                                    setID(user.uid);\n                                    var _user_email;\n                                    setUser((_user_email = user.email) !== null && _user_email !== void 0 ? _user_email : \"\");\n                                    setRegions(levels);\n                                // window.location.assign(\"/regions\");\n                                })[\"catch\"](function(error) {\n                                    console.error(\"Error adding document:\", error);\n                                })\n                            ];\n                        case 2:\n                            _state.sent();\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            console.log(\"You are already signed in!\");\n                            setID(gotDoc.id);\n                            setUser(gotDoc.data().userEmail);\n                            setRegions(gotDoc.data().regions);\n                            console.log(gotDoc.id);\n                            console.log(gotDoc.data().userEmail);\n                            console.log(gotDoc.data().regions);\n                            _state.label = 4;\n                        case 4:\n                            return [\n                                3,\n                                6\n                            ];\n                        case 5:\n                            console.log(\"Authentication error:\", user);\n                            _state.label = 6;\n                        case 6:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(user) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    }, []);\n    // if (loading) {\n    //   return <p>Loading...</p>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthEmail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            auth: auth,\n            loading: loading\n        }, void 0, false, {\n            fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/page.tsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/page.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"mtaco2ix/4zkC4nx+WS9MCElL6c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUtYO0FBQ0c7QUFFUDtBQU9SO0FBR2IsU0FBU1M7O0lBRXRCLElBQU1DLGlCQUFpQjtRQUNyQkMsUUFBUUMseUNBQXFDO1FBQzdDRyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsZUFBZTtRQUNmQyxtQkFBbUJOLGNBQTJCO1FBQzlDUSxPQUFPUiwyQ0FBMkI7UUFDbENVLGVBQWVWLGNBQTJCO0lBQzVDO0lBRUEsSUFBb0JWLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0QnNCLEtBQWF0QixjQUFUdUIsUUFBU3ZCO0lBQ3BCLElBQXdCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBMUJ3QixPQUFpQnhCLGVBQVh5QixVQUFXekI7SUFDeEIsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxDQUFDLFFBQWpDMEIsVUFBdUIxQixlQUFkMkIsYUFBYzNCO0lBQzlCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBaEM0QixVQUF1QjVCLGVBQWQ2QixhQUFjN0I7SUFHOUIsc0JBQXNCO0lBQ3RCLElBQUk4QixNQUFNN0IsMkRBQVFBLENBQUM4QixhQUFhLENBQUN2QjtJQUNqQyx1Q0FBdUM7SUFDdkMsSUFBSXdCLE9BQU8vQiwyREFBUUEsQ0FBQytCLElBQUk7SUFDeEIsSUFBTUMsWUFBWTlCLGdFQUFZQSxDQUFDMkI7SUFDL0IsNkNBQTZDO0lBRTdDL0IsZ0RBQVNBLENBQ1A7UUFFRSxxQkFBcUI7UUFDbkJpQyxLQUFLRSxrQkFBa0I7dUJBQUMsNEVBQU9WO29CQUtyQlcsUUFDQUMsVUFDQUMsUUFHSUMsUUFRQUM7Ozs7aUNBaEJSZixNQUFBQTs7Ozs0QkFDRix1QkFBdUI7NEJBQ3ZCLG9CQUFvQjs0QkFDZFcsU0FBU1gsS0FBS2dCLEdBQUc7NEJBQ2pCSixXQUFXL0IsdURBQUdBLENBQUM0QixXQUFXLFNBQVNFOzRCQUMxQjs7Z0NBQU03QiwwREFBTUEsQ0FBQzhCOzs7NEJBQXRCQyxTQUFTO2lDQUVULENBQUNBLE9BQU9JLE1BQU0sSUFBZDs7Ozs0QkFDSUgsU0FBUztnQ0FDYix3QkFBd0I7Z0NBQ3hCSSxXQUFXO2dDQUNYQyxNQUFNO2dDQUNOQyxTQUFTO2dDQUNUQyxNQUFNOzRCQUNSOzRCQUVNTixPQUFPO2dDQUNYLHdCQUF3QjtnQ0FDeEJPLFFBQVF0QixLQUFLZ0IsR0FBRztnQ0FDaEJPLFdBQVd2QixLQUFLd0IsS0FBSztnQ0FDckJ0QixTQUFTWTs0QkFDWDs0QkFDQTs7Z0NBQU1sQywwREFBTUEsQ0FBQ2dDLFVBQVVHLE1BQ3BCVSxJQUFJLENBQUM7b0NBQ0pDLFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0NmO29DQUM5Q2IsTUFBTUMsS0FBS2dCLEdBQUc7d0NBQ05oQjtvQ0FBUkMsUUFBUUQsQ0FBQUEsY0FBQUEsS0FBS3dCLEtBQUssY0FBVnhCLHlCQUFBQSxjQUFjO29DQUN0QkcsV0FBV1c7Z0NBQ1gsc0NBQXNDO2dDQUN4QyxFQUNDYyxDQUFBQSxRQUFLLENBQUMsU0FBQ0M7b0NBQ05ILFFBQVFHLEtBQUssQ0FBQywwQkFBMEJBO2dDQUMxQzs7OzRCQVZGOzs7Ozs7NEJBWUFILFFBQVFDLEdBQUcsQ0FBQzs0QkFDWjVCLE1BQU1jLE9BQU9mLEVBQUU7NEJBQ2ZHLFFBQVFZLE9BQU9FLElBQUksR0FBR1EsU0FBUzs0QkFDL0JwQixXQUFXVSxPQUFPRSxJQUFJLEdBQUdiLE9BQU87NEJBQ2hDd0IsUUFBUUMsR0FBRyxDQUFDZCxPQUFPZixFQUFFOzRCQUNyQjRCLFFBQVFDLEdBQUcsQ0FBQ2QsT0FBT0UsSUFBSSxHQUFHUSxTQUFTOzRCQUNuQ0csUUFBUUMsR0FBRyxDQUFDZCxPQUFPRSxJQUFJLEdBQUdiLE9BQU87Ozs7Ozs7OzRCQUtyQ3dCLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUIzQjs7Ozs7Ozs7WUFFekM7NEJBakQrQkE7Ozs7SUFrRGpDLEdBQUcsRUFBRTtJQUdULGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLHFCQUNFLDhEQUFDOEI7a0JBQ0MsNEVBQUNwRCxrREFBU0E7WUFBQzhCLE1BQU1BO1lBQU1KLFNBQVNBOzs7Ozs7Ozs7OztBQUd0QztHQTNGd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UudHN4P2ZjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSBcImZpcmViYXNldWlcIjtcbmltcG9ydCBcImZpcmViYXNldWkvZGlzdC9maXJlYmFzZXVpLmNzc1wiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBBdXRoRW1haWwgZnJvbSBcIi4vQXV0aEVtYWlsXCI7XG5pbXBvcnQge1xuICBnZXRGaXJlc3RvcmUsXG4gIGFkZERvYyxcbiAgY29sbGVjdGlvbixcbiAgc2V0RG9jLFxuICBkb2MsIGdldERvY1xufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblxuICBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPR0lOX0FQSV9LRVksXG4gICAgYXV0aERvbWFpbjogXCJ0ZXJtcHJvai1kMTgxYS5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwidGVybXByb2otZDE4MWFcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcInRlcm1wcm9qLWQxODFhLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01TRyxcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQLFxuICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01TUixcbiAgfTtcblxuICBjb25zdCBbaWQsIHNldElEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlZ2lvbnMsIHNldFJlZ2lvbnNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXG4gIHZhciBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgLy8gY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XG4gIHZhciBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuICBjb25zdCBmaXJlc3RvcmUgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbiAgLy8gY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIFxuICAgICAgLy8gdmFyIHVuc3Vic2NyaWJlID0gXG4gICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbSBhY3R1YWxseSBzbyBkb25lIHJpZ2h0IG5vd1wiKTtcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJoZXJlXCIpO1xuICAgICAgICAgICAgLy8gVXNlciBpcyBzaWduZWQgaW5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIudWlkO1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBkb2MoZmlyZXN0b3JlLCBcInVzZXJzXCIsIHVzZXJJZCk7XG4gICAgICAgICAgICBjb25zdCBnb3REb2MgPSBhd2FpdCBnZXREb2MoZG9jdW1lbnQpXG5cbiAgICAgICAgICAgICAgaWYgKCFnb3REb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbHMgPSB7XG4gICAgICAgICAgICAgICAgICAvLyBZb3VyIGRhdGEgZmllbGRzIGhlcmVcbiAgICAgICAgICAgICAgICAgIEFmcmlDYXJpYjogMCxcbiAgICAgICAgICAgICAgICAgIEFzaWE6IDAsXG4gICAgICAgICAgICAgICAgICBOb3J0aEFtOiAwLFxuICAgICAgICAgICAgICAgICAgRXVybzogMCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgIC8vIFlvdXIgZGF0YSBmaWVsZHMgaGVyZVxuICAgICAgICAgICAgICAgICAgdXNlcklEOiB1c2VyLnVpZCxcbiAgICAgICAgICAgICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIHJlZ2lvbnM6IGxldmVscyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF3YWl0IHNldERvYyhkb2N1bWVudCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBhZGRlZCB3aXRoIGN1c3RvbSBJRDpcIiwgZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJRCh1c2VyLnVpZCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIodXNlci5lbWFpbCA/PyBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVnaW9ucyhsZXZlbHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uYXNzaWduKFwiL3JlZ2lvbnNcIik7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgYWxyZWFkeSBzaWduZWQgaW4hXCIpO1xuICAgICAgICAgICAgICAgIHNldElEKGdvdERvYy5pZCk7XG4gICAgICAgICAgICAgICAgc2V0VXNlcihnb3REb2MuZGF0YSgpLnVzZXJFbWFpbCk7XG4gICAgICAgICAgICAgICAgc2V0UmVnaW9ucyhnb3REb2MuZGF0YSgpLnJlZ2lvbnMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdvdERvYy5pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ290RG9jLmRhdGEoKS51c2VyRW1haWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdvdERvYy5kYXRhKCkucmVnaW9ucyk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIi9yZWdpb25zXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGlvbiBlcnJvcjpcIiwgdXNlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIFtdXG4gIClcblxuICAvLyBpZiAobG9hZGluZykge1xuICAvLyAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBdXRoRW1haWwgYXV0aD17YXV0aH0gbG9hZGluZz17bG9hZGluZ30+PC9BdXRoRW1haWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZpcmViYXNlIiwiQXV0aEVtYWlsIiwiZ2V0RmlyZXN0b3JlIiwic2V0RG9jIiwiZG9jIiwiZ2V0RG9jIiwiUGFnZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0xPR0lOX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfTVNHIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19BUFAiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9QVUJMSUNfTVNSIiwiaWQiLCJzZXRJRCIsInVzZXIiLCJzZXRVc2VyIiwicmVnaW9ucyIsInNldFJlZ2lvbnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFwcCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZmlyZXN0b3JlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlcklkIiwiZG9jdW1lbnQiLCJnb3REb2MiLCJsZXZlbHMiLCJkYXRhIiwidWlkIiwiZXhpc3RzIiwiQWZyaUNhcmliIiwiQXNpYSIsIk5vcnRoQW0iLCJFdXJvIiwidXNlcklEIiwidXNlckVtYWlsIiwiZW1haWwiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});