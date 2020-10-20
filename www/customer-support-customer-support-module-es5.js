(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-support-customer-support-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-support/customer-support.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-support/customer-support.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerSupportCustomerSupportPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"header_background\">\n  <ion-row class=\"bgh\">\n    <ion-col size=\"4\"  class=\"ion-text-left\">\n     <span (click)=\"toggleMenu()\">\n       <img src=\"assets/imgs/dots.svg\" width=\"68px\" > \n     </span> \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center mt\">\n      {{restaurantName}}\n    </ion-col>\n    <ion-col size=\"4\"  class=\"ion-text-right\">\n      Customer Support\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"mtop\">\n      <ion-col class=\"ion-text-center\">\n        <img src=\"assets/imgs/event-img-profile.png\">\n        <label class=\"pname\">Ali Shah</label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <label>Phone Number</label>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <p>+92373747493</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <label>Whatsapp Number</label>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <p>+92373747493</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <label>Email</label>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <p>khaobchao@support.com</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class=\"pdh\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>\n      </ion-col>\n    </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customer-support/customer-support-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/customer-support/customer-support-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CustomerSupportPageRoutingModule */

    /***/
    function srcAppCustomerSupportCustomerSupportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerSupportPageRoutingModule", function () {
        return CustomerSupportPageRoutingModule;
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


      var _customer_support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-support.page */
      "./src/app/customer-support/customer-support.page.ts");

      var routes = [{
        path: '',
        component: _customer_support_page__WEBPACK_IMPORTED_MODULE_3__["CustomerSupportPage"]
      }];

      var CustomerSupportPageRoutingModule = function CustomerSupportPageRoutingModule() {
        _classCallCheck(this, CustomerSupportPageRoutingModule);
      };

      CustomerSupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerSupportPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customer-support/customer-support.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/customer-support/customer-support.module.ts ***!
      \*************************************************************/

    /*! exports provided: CustomerSupportPageModule */

    /***/
    function srcAppCustomerSupportCustomerSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerSupportPageModule", function () {
        return CustomerSupportPageModule;
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


      var _customer_support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customer-support-routing.module */
      "./src/app/customer-support/customer-support-routing.module.ts");
      /* harmony import */


      var _customer_support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customer-support.page */
      "./src/app/customer-support/customer-support.page.ts");

      var CustomerSupportPageModule = function CustomerSupportPageModule() {
        _classCallCheck(this, CustomerSupportPageModule);
      };

      CustomerSupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_support_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerSupportPageRoutingModule"]],
        declarations: [_customer_support_page__WEBPACK_IMPORTED_MODULE_6__["CustomerSupportPage"]]
      })], CustomerSupportPageModule);
      /***/
    },

    /***/
    "./src/app/customer-support/customer-support.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/customer-support/customer-support.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerSupportCustomerSupportPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgh {\n  background: #b40404 !important;\n  color: #fff;\n  padding: 0.3em 0.7em;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.pname {\n  display: block;\n  margin-top: 0.4em;\n  font-size: 25px;\n}\n\nlabel {\n  color: #b40404;\n}\n\n.mtop {\n  margin-top: 1em;\n}\n\n.pdh {\n  padding: 0em 1em;\n  text-align: center;\n}\n\np {\n  margin: 4px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItc3VwcG9ydC9jdXN0b21lci1zdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItc3VwcG9ydC9jdXN0b21lci1zdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDAuN2VtO1xyXG59XHJcbi5tdHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnBuYW1le1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGNvbG9yOiNiNDA0MDQ7XHJcbn1cclxuLm10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuLnBkaHtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucHtcclxuICAgIG1hcmdpbjogNHB4IDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/customer-support/customer-support.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/customer-support/customer-support.page.ts ***!
      \***********************************************************/

    /*! exports provided: CustomerSupportPage */

    /***/
    function srcAppCustomerSupportCustomerSupportPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerSupportPage", function () {
        return CustomerSupportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var CustomerSupportPage = /*#__PURE__*/function () {
        function CustomerSupportPage(storage, menuCtrl, toastController) {
          _classCallCheck(this, CustomerSupportPage);

          this.storage = storage;
          this.menuCtrl = menuCtrl;
          this.toastController = toastController;
        }

        _createClass(CustomerSupportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('restaurant_name').then(function (restaurant_name) {
              _this.restaurantName = restaurant_name;
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Settings Updated Successfully!',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CustomerSupportPage;
      }();

      CustomerSupportPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }];
      };

      CustomerSupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-customer-support',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customer-support.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-support/customer-support.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customer-support.page.scss */
        "./src/app/customer-support/customer-support.page.scss"))["default"]]
      })], CustomerSupportPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customer-support-customer-support-module-es5.js.map