(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-item-choose-item-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/choose-item/choose-item.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-item/choose-item.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChooseItemChooseItemPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"header_background\">\n  <ion-toolbar class=\"header_background\">\n    <ion-row size=\"12\">\n      <ion-col size=\"1\">\n        <img class=\"arrowLeft\" routerLink=\"/tabs/offers\" src=\"assets/imgs/backArrow.png\">\n      </ion-col>\n      <ion-col size=\"10\" text-center>\n        <ion-title>Choose Menu</ion-title>\n      </ion-col>\n    </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n    <ion-col>\n      <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n     </ion-col>\n  </ion-row>\n \n \n  <ion-row>\n    <ion-col *ngFor=\"let data of items_data\" size=\"6\" (click)=\"openItemDiscount(data)\" >\n      <ion-card>\n        <ion-card-header>\n           <img src=\"https://dev.khaoaurbachao.com/assets/admin/images/category_images/{{data.category_image}}\"> \n        </ion-card-header>\n        <ion-card-subtitle>{{data.item_name}}</ion-card-subtitle>\n        <ion-card-content>\n          <ion-row>\n            <ion-col text-center>\n              {{data.quantity}} Pices Per {{data.measurement}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center>\n              {{data.price}} Per {{data.measurement}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  \n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/choose-item/choose-item-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/choose-item/choose-item-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ChooseItemPageRoutingModule */

    /***/
    function srcAppChooseItemChooseItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseItemPageRoutingModule", function () {
        return ChooseItemPageRoutingModule;
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


      var _choose_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choose-item.page */
      "./src/app/choose-item/choose-item.page.ts");

      var routes = [{
        path: '',
        component: _choose_item_page__WEBPACK_IMPORTED_MODULE_3__["ChooseItemPage"]
      }];

      var ChooseItemPageRoutingModule = function ChooseItemPageRoutingModule() {
        _classCallCheck(this, ChooseItemPageRoutingModule);
      };

      ChooseItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChooseItemPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/choose-item/choose-item.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/choose-item/choose-item.module.ts ***!
      \***************************************************/

    /*! exports provided: ChooseItemPageModule */

    /***/
    function srcAppChooseItemChooseItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseItemPageModule", function () {
        return ChooseItemPageModule;
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


      var _choose_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choose-item-routing.module */
      "./src/app/choose-item/choose-item-routing.module.ts");
      /* harmony import */


      var _choose_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./choose-item.page */
      "./src/app/choose-item/choose-item.page.ts");

      var ChooseItemPageModule = function ChooseItemPageModule() {
        _classCallCheck(this, ChooseItemPageModule);
      };

      ChooseItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseItemPageRoutingModule"]],
        declarations: [_choose_item_page__WEBPACK_IMPORTED_MODULE_6__["ChooseItemPage"]]
      })], ChooseItemPageModule);
      /***/
    },

    /***/
    "./src/app/choose-item/choose-item.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/choose-item/choose-item.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppChooseItemChooseItemPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  position: absolute;\n  margin-top: 80%;\n  z-index: 9;\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n  box-shadow: none;\n  border: 1px solid #b40404;\n  border-radius: 10px;\n}\n\n.card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.white {\n  color: #fff;\n  margin-bottom: 0;\n  margin-top: 3px;\n  width: 83%;\n}\n\n.stars {\n  color: rgba(255, 255, 255, 0.48);\n}\n\n.red {\n  color: #b40404;\n}\n\n.heart {\n  font-size: 24px;\n}\n\nion-card-header {\n  padding: 15px 34px 10px 34px;\n}\n\nion-card-header img {\n  width: 100px;\n  height: 100px;\n}\n\nion-card-content {\n  text-align: center;\n  color: #000000;\n  padding-top: 6px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-card-content img {\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  margin-right: 4px;\n}\n\nion-card-subtitle {\n  color: #b40404;\n  letter-spacing: 1px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.card-content-md p {\n  display: flex;\n  font-size: 12px;\n}\n\nion-icon {\n  position: relative;\n  top: 2px;\n  margin-right: 5px;\n}\n\nion-menu-button {\n  width: 75px;\n  margin-left: 2px;\n}\n\n.spanTitle {\n  float: right;\n  margin-right: 1em;\n  color: #ffff;\n  font-size: 16px;\n  width: 95px;\n  text-align: right;\n  line-height: 20px;\n}\n\nion-card-content ion-col {\n  padding: 0px;\n}\n\n.arrowLeft {\n  width: 11px;\n  margin-top: 2px;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLWl0ZW0vY2hvb3NlLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQURFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSUo7O0FBREU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0EsZ0NBQUE7QUFLRjs7QUFIRTtFQUNBLGNBQUE7QUFNRjs7QUFKRTtFQUNDLGVBQUE7QUFPSDs7QUFMRTtFQUNFLDRCQUFBO0FBUUo7O0FBTkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVNKOztBQVBFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVdKOztBQVRFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVkU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFjSjs7QUFaRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWdCSjs7QUFkRTtFQUNHLFlBQUE7QUFpQkw7O0FBZkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBa0JKIiwiZmlsZSI6InNyYy9hcHAvY2hvb3NlLWl0ZW0vY2hvb3NlLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1naWYtcm93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogODAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvYWRlci1naWZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICBpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDQwNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzYlO1xyXG4gICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLndoaXRle1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOjNweDtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgfVxyXG4gIC5zdGFyc3tcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KTtcclxuICB9XHJcbiAgLnJlZHtcclxuICBjb2xvcjojYjQwNDA0O1xyXG4gIH1cclxuICAuaGVhcnR7XHJcbiAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDM0cHggMTBweCAzNHB4O1xyXG4gIH1cclxuICBpb24tY2FyZC1oZWFkZXIgaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IFxyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50IGltZ3tcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmNhcmQtY29udGVudC1tZCBwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICBpb24tbWVudS1idXR0b257XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgfVxyXG4gIC5zcGFuVGl0bGV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtY29udGVudCBpb24tY29se1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgLmFycm93TGVmdHtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/choose-item/choose-item.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/choose-item/choose-item.page.ts ***!
      \*************************************************/

    /*! exports provided: ChooseItemPage */

    /***/
    function srcAppChooseItemChooseItemPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseItemPage", function () {
        return ChooseItemPage;
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


      var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../loader.service */
      "./src/app/loader.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _alerterror_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../alerterror.service */
      "./src/app/alerterror.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var ChooseItemPage = /*#__PURE__*/function () {
        function ChooseItemPage(loader, restService, router, storage, alertService, menuCtrl) {
          var _this = this;

          _classCallCheck(this, ChooseItemPage);

          this.loader = loader;
          this.restService = restService;
          this.router = router;
          this.storage = storage;
          this.alertService = alertService;
          this.menuCtrl = menuCtrl;
          this.storage.get('restaurants_id').then(function (restaurant_id) {
            _this.resaturant_id = restaurant_id; // this.resaturant_id = 4;
            //this.resaturant_id = 6;

            console.log(_this.resaturant_id);
            var stringy = JSON.stringify({
              requestType: 'all',
              restaurantId: _this.resaturant_id
            });
            console.log('moeed');

            _this.restService.getItems(stringy).subscribe(function (response) {
              _this.items_data = JSON.parse(response['_body']);
              console.log(_this.items_data);
              _this.items_data = _this.items_data.items_data;
              _this.categories_img_url = _this.categories_img_url;
              console.log(_this.items_data); //this.loader.hideLoader();
            }, function (err) {
              //this.loader.hideLoader();
              _this.alertService.presentAlertService(err);
            });
          });
        }

        _createClass(ChooseItemPage, [{
          key: "openItemDiscount",
          value: function openItemDiscount(data) {
            this.itemData = data;
            console.log(this.itemData);
            this.router.navigate(['/item-discount'], {
              queryParams: {
                value: JSON.stringify(this.itemData)
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChooseItemPage;
      }();

      ChooseItemPage.ctorParameters = function () {
        return [{
          type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _alerterror_service__WEBPACK_IMPORTED_MODULE_5__["AlerterrorService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }];
      };

      ChooseItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./choose-item.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/choose-item/choose-item.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./choose-item.page.scss */
        "./src/app/choose-item/choose-item.page.scss"))["default"]]
      })], ChooseItemPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=choose-item-choose-item-module-es5.js.map