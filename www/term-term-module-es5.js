(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["term-term-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/term/term.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/term/term.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTermTermPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"header_background\">\n  <ion-toolbar class=\"header_background\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button> <img  src=\"assets/imgs/menu.png\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Term of Use</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <h4 class=\"red\">1.Authentication</h4>\n      <p class=\"marginZero\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <h4 class=\"red\">2.Verification</h4>\n      <p class=\"marginZero\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <h4 class=\"red\">3.Attributes</h4>\n      <p class=\"marginZero\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/term/term-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/term/term-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TermPageRoutingModule */

    /***/
    function srcAppTermTermRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermPageRoutingModule", function () {
        return TermPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _term_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./term.page */
      "./src/app/term/term.page.ts");

      var routes = [{
        path: '',
        component: _term_page__WEBPACK_IMPORTED_MODULE_3__["TermPage"]
      }];

      var TermPageRoutingModule = function TermPageRoutingModule() {
        _classCallCheck(this, TermPageRoutingModule);
      };

      TermPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/term/term.module.ts":
    /*!*************************************!*\
      !*** ./src/app/term/term.module.ts ***!
      \*************************************/

    /*! exports provided: TermPageModule */

    /***/
    function srcAppTermTermModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermPageModule", function () {
        return TermPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _term_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./term-routing.module */
      "./src/app/term/term-routing.module.ts");
      /* harmony import */


      var _term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./term.page */
      "./src/app/term/term.page.ts");

      var TermPageModule = function TermPageModule() {
        _classCallCheck(this, TermPageModule);
      };

      TermPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _term_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermPageRoutingModule"]],
        declarations: [_term_page__WEBPACK_IMPORTED_MODULE_6__["TermPage"]]
      })], TermPageModule);
      /***/
    },

    /***/
    "./src/app/term/term.page.scss":
    /*!*************************************!*\
      !*** ./src/app/term/term.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTermTermPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu-button {\n  width: 100px;\n}\n\n.red {\n  color: #b40404;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybS90ZXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFlBQUE7QUFDSDs7QUFDQTtFQUNJLGNBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Rlcm0vdGVybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b257XHJcbiAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ucmVke1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/term/term.page.ts":
    /*!***********************************!*\
      !*** ./src/app/term/term.page.ts ***!
      \***********************************/

    /*! exports provided: TermPage */

    /***/
    function srcAppTermTermPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermPage", function () {
        return TermPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TermPage = /*#__PURE__*/function () {
        function TermPage() {
          _classCallCheck(this, TermPage);
        }

        _createClass(TermPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermPage;
      }();

      TermPage.ctorParameters = function () {
        return [];
      };

      TermPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-term',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./term.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/term/term.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./term.page.scss */
        "./src/app/term/term.page.scss"))["default"]]
      })], TermPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=term-term-module-es5.js.map