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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebaseui/dist/firebaseui.css */ \"(app-pages-browser)/./node_modules/firebaseui/dist/firebaseui.css\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var _AuthEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthEmail */ \"(app-pages-browser)/./src/app/login/AuthEmail.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n// import { signInWithGoogle } from \"./AuthGoogle\";\n// const firebaseConfig = {\n//   apiKey: \"AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs\",\n//   authDomain: \"termproj-d181a.firebaseapp.com\",\n//   projectId: \"termproj-d181a\",\n//   storageBucket: \"termproj-d181a.appspot.com\",\n//   messagingSenderId: \"961263025075\",\n//   appId: \"1:961263025075:web:cabb7d919cac0c72ebe9c6\",\n//   measurementId: \"G-LEFF59MXDX\",\n// };\n// // Initialize Firebase\n// var app = firebase.initializeApp(firebaseConfig);\n// // const analytics = getAnalytics(app);\n// var auth = firebase.auth();\n// const provider = new GoogleAuthProvider();\n// var auth2 = getAuth(app);\n// export const signInWithGoogle = () => {\n//   signInWithPopup(auth2, provider)\n//     .then((result) => {\n//       const name = result.user.displayName;\n//       const email = result.user.email;\n//       const profilePic = result.user.photoURL;\n//       localStorage.setItem(\"name\", name ?? \"\");\n//       localStorage.setItem(\"email\", email ?? \"\");\n//       localStorage.setItem(\"profilePic\", profilePic ?? \"\");\n//     })\n//     .catch((error) => {\n//       console.log(error);\n//     });\n// };\nfunction Page() {\n    _s();\n    // TODO: Add SDKs for Firebase products that you want to use\n    // https://firebase.google.com/docs/web/setup#available-libraries\n    // Your web app's Firebase configuration\n    // For Firebase JS SDK v7.20.0 and later, measurementId is optional\n    var firebaseConfig = {\n        apiKey: \"AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs\",\n        authDomain: \"termproj-d181a.firebaseapp.com\",\n        projectId: \"termproj-d181a\",\n        storageBucket: \"termproj-d181a.appspot.com\",\n        messagingSenderId: \"AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs\",\n        appId: \"AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs\",\n        measurementId: \"AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs\"\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), id = _useState[0], setID = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), user = _useState1[0], setUser = _useState1[1];\n    // Initialize Firebase\n    firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initializeApp(firebaseConfig);\n    // const analytics = getAnalytics(app);\n    var auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth();\n    // const provider = new GoogleAuthProvider();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // var unsubscribe = \n        auth.onAuthStateChanged(function(user) {\n            console.log(\"im actually so done right now\");\n            if (user) {\n                console.log(\"here\");\n                // User is signed in\n                setID(user.uid);\n                var _user_email;\n                setUser((_user_email = user.email) !== null && _user_email !== void 0 ? _user_email : \"\");\n                console.log(user);\n            } else {\n                console.log(\"Authentication error:\", user);\n            }\n        });\n    // return () => unsubscribe();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthEmail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            auth: auth\n        }, void 0, false, {\n            fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/page.tsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremylum/Desktop/cs32/term-project-mding16-rchae2-jlum3-acodjoe/frontend/src/app/login/page.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"jN+JPyZun/PmyCGG3Oxs+5jRDcs=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFLWDtBQUNHO0FBRVA7QUFDcEMsbURBQW1EO0FBRW5ELDJCQUEyQjtBQUMzQix1REFBdUQ7QUFDdkQsa0RBQWtEO0FBQ2xELGlDQUFpQztBQUNqQyxpREFBaUQ7QUFDakQsdUNBQXVDO0FBQ3ZDLHdEQUF3RDtBQUN4RCxtQ0FBbUM7QUFDbkMsS0FBSztBQUVMLHlCQUF5QjtBQUN6QixvREFBb0Q7QUFDcEQsMENBQTBDO0FBQzFDLDhCQUE4QjtBQUM5Qiw2Q0FBNkM7QUFDN0MsNEJBQTRCO0FBRTVCLDBDQUEwQztBQUMxQyxxQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCLDhDQUE4QztBQUM5Qyx5Q0FBeUM7QUFDekMsaURBQWlEO0FBRWpELGtEQUFrRDtBQUNsRCxvREFBb0Q7QUFDcEQsOERBQThEO0FBQzlELFNBQVM7QUFDVCwwQkFBMEI7QUFDMUIsNEJBQTRCO0FBQzVCLFVBQVU7QUFDVixLQUFLO0FBR1UsU0FBU0s7O0lBQ3RCLDREQUE0RDtJQUM1RCxpRUFBaUU7SUFFakUsd0NBQXdDO0lBQ3hDLG1FQUFtRTtJQUNuRSxJQUFNQyxpQkFBaUI7UUFDckJDLFFBQVFDLHlDQUFxQztRQUM3Q0csWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLGVBQWU7UUFDZkMsbUJBQW1CTix5Q0FBcUM7UUFDeERPLE9BQU9QLHlDQUFxQztRQUM1Q1EsZUFBZVIseUNBQXFDO0lBQ3REO0lBRUEsSUFBb0JOLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0QmUsS0FBYWYsY0FBVGdCLFFBQVNoQjtJQUNwQixJQUF3QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQTFCaUIsT0FBaUJqQixlQUFYa0IsVUFBV2xCO0lBR3hCLHNCQUFzQjtJQUN0QkMsMkRBQVFBLENBQUNrQixhQUFhLENBQUNmO0lBQ3ZCLHVDQUF1QztJQUN2QyxJQUFJZ0IsT0FBT25CLDJEQUFRQSxDQUFDbUIsSUFBSTtJQUN4Qiw2Q0FBNkM7SUFFN0NyQixnREFBU0EsQ0FDUDtRQUNFLHFCQUFxQjtRQUNyQnFCLEtBQUtDLGtCQUFrQixDQUFDLFNBQUNKO1lBQ3ZCSyxRQUFRQyxHQUFHLENBQUM7WUFDWixJQUFJTixNQUFNO2dCQUNSSyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osb0JBQW9CO2dCQUNwQlAsTUFBTUMsS0FBS08sR0FBRztvQkFDTlA7Z0JBQVJDLFFBQVFELENBQUFBLGNBQUFBLEtBQUtRLEtBQUssY0FBVlIseUJBQUFBLGNBQWM7Z0JBQ3RCSyxRQUFRQyxHQUFHLENBQUNOO1lBQ2QsT0FBTztnQkFDTEssUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qk47WUFDdkM7UUFDRjtJQUVBLDhCQUE4QjtJQUdsQztJQUVBLHFCQUNFLDhEQUFDUztrQkFJQyw0RUFBQ3hCLGtEQUFTQTtZQUFDa0IsTUFBTUE7Ozs7Ozs7Ozs7O0FBR3ZCO0dBdkR3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aSBmcm9tIFwiZmlyZWJhc2V1aVwiO1xuaW1wb3J0IFwiZmlyZWJhc2V1aS9kaXN0L2ZpcmViYXNldWkuY3NzXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCwgR29vZ2xlQXV0aFByb3ZpZGVyLCBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IEF1dGhFbWFpbCBmcm9tIFwiLi9BdXRoRW1haWxcIjtcbi8vIGltcG9ydCB7IHNpZ25JbldpdGhHb29nbGUgfSBmcm9tIFwiLi9BdXRoR29vZ2xlXCI7XG5cbi8vIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuLy8gICBhcGlLZXk6IFwiQUl6YVN5RGV1WTM3MXZNS1FBb2w3aGwtamYwcms0UG5uU3FTblJzXCIsXG4vLyAgIGF1dGhEb21haW46IFwidGVybXByb2otZDE4MWEuZmlyZWJhc2VhcHAuY29tXCIsXG4vLyAgIHByb2plY3RJZDogXCJ0ZXJtcHJvai1kMTgxYVwiLFxuLy8gICBzdG9yYWdlQnVja2V0OiBcInRlcm1wcm9qLWQxODFhLmFwcHNwb3QuY29tXCIsXG4vLyAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjk2MTI2MzAyNTA3NVwiLFxuLy8gICBhcHBJZDogXCIxOjk2MTI2MzAyNTA3NTp3ZWI6Y2FiYjdkOTE5Y2FjMGM3MmViZTljNlwiLFxuLy8gICBtZWFzdXJlbWVudElkOiBcIkctTEVGRjU5TVhEWFwiLFxuLy8gfTtcblxuLy8gLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuLy8gdmFyIGFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuLy8gLy8gY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XG4vLyB2YXIgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbi8vIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuLy8gdmFyIGF1dGgyID0gZ2V0QXV0aChhcHApO1xuXG4vLyBleHBvcnQgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcbi8vICAgc2lnbkluV2l0aFBvcHVwKGF1dGgyLCBwcm92aWRlcilcbi8vICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICBjb25zdCBuYW1lID0gcmVzdWx0LnVzZXIuZGlzcGxheU5hbWU7XG4vLyAgICAgICBjb25zdCBlbWFpbCA9IHJlc3VsdC51c2VyLmVtYWlsO1xuLy8gICAgICAgY29uc3QgcHJvZmlsZVBpYyA9IHJlc3VsdC51c2VyLnBob3RvVVJMO1xuXG4vLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgbmFtZSA/PyBcIlwiKTtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgZW1haWwgPz8gXCJcIik7XG4vLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2ZpbGVQaWNcIiwgcHJvZmlsZVBpYyA/PyBcIlwiKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9KTtcbi8vIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXG4gIC8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbiAgLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuICAvLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9HSU5fQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBcInRlcm1wcm9qLWQxODFhLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJ0ZXJtcHJvai1kMTgxYVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwidGVybXByb2otZDE4MWEuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9HSU5fQVBJX0tFWSxcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9HSU5fQVBJX0tFWSxcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0dJTl9BUElfS0VZLFxuICB9O1xuXG4gIGNvbnN0IFtpZCwgc2V0SURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgLy8gY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XG4gIHZhciBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuICAvLyBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgLy8gdmFyIHVuc3Vic2NyaWJlID0gXG4gICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImltIGFjdHVhbGx5IHNvIGRvbmUgcmlnaHQgbm93XCIpXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuICAgICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIGluXG4gICAgICAgICAgc2V0SUQodXNlci51aWQpO1xuICAgICAgICAgIHNldFVzZXIodXNlci5lbWFpbCA/PyBcIlwiKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGlvbiBlcnJvcjpcIiwgdXNlcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcblxuXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW4td2l0aC1nb29nbGUtYnRuXCIgb25DbGljaz17c2lnbkluV2l0aEdvb2dsZX0+XG4gICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcbiAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgIDxBdXRoRW1haWwgYXV0aD17YXV0aH0+PC9BdXRoRW1haWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZpcmViYXNlIiwiQXV0aEVtYWlsIiwiUGFnZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0xPR0lOX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiaWQiLCJzZXRJRCIsInVzZXIiLCJzZXRVc2VyIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwidWlkIiwiZW1haWwiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});