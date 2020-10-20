(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"header_background\">\n  \n  <ion-row class=\"bgh\">\n    <ion-col size=\"4\"  class=\"ion-text-left\">\n     <span (click)=\"toggleMenu()\">\n       <img src=\"assets/imgs/dots.svg\" width=\"68px\" > \n     </span> \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center mt\">\n     {{restaurantName}}\n    </ion-col>\n    <ion-col size=\"4\"  class=\"ion-text-right mt\"  >\n      Current Menu\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n    <ion-col>\n      <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n     </ion-col>\n  </ion-row>\n \n  <!-- Custom Refresher Content -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-row>\n    <ion-col *ngFor=\"let data of items_data;let i=index\" size=\"6\" class=\"item_{{i}}\"  >\n      <ion-card (click)=\"itemEdit(data,i)\" >\n        <ion-card-header>\n           <img src=\"{{data.item_image_url}}\"> \n        </ion-card-header>\n        <ion-card-subtitle>{{data.item_name}}</ion-card-subtitle>\n        <ion-card-content>\n          <ion-row>\n            <ion-col text-center>\n              {{data.quantity}} Pices Per {{data.measurement}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center>\n              {{data.price}} Per {{data.measurement}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    \n    <ion-col size=\"6\"  text-center>\n      <ion-card class=\"addImage\" routerLink=\"/resturant-menu\"  >\n        <ion-icon ios=\"ios-add\" md=\"md-add\"   ></ion-icon>\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  \n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/menu/menu-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/menu/menu-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: MenuPageRoutingModule */

    /***/
    function srcAppMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
        return MenuPageRoutingModule;
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


      var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu.page */
      "./src/app/menu/menu.page.ts");

      var routes = [{
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
      }];

      var MenuPageRoutingModule = function MenuPageRoutingModule() {
        _classCallCheck(this, MenuPageRoutingModule);
      };

      MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/menu.module.ts":
    /*!*************************************!*\
      !*** ./src/app/menu/menu.module.ts ***!
      \*************************************/

    /*! exports provided: MenuPageModule */

    /***/
    function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
        return MenuPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _alert_confirm_alert_confirm_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../alert-confirm/alert-confirm.module */
      "./src/app/alert-confirm/alert-confirm.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-routing.module */
      "./src/app/menu/menu-routing.module.ts");
      /* harmony import */


      var _menu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./menu.page */
      "./src/app/menu/menu.page.ts");
      /* harmony import */


      var _pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes.module */
      "./src/app/pipes.module.ts");

      var MenuPageModule = function MenuPageModule() {
        _classCallCheck(this, MenuPageModule);
      };

      MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__["MenuPageRoutingModule"], _alert_confirm_alert_confirm_module__WEBPACK_IMPORTED_MODULE_1__["AlertConfirmPageModule"], _pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"]]
      })], MenuPageModule);
      /***/
    },

    /***/
    "./src/app/menu/menu.page.scss":
    /*!*************************************!*\
      !*** ./src/app/menu/menu.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  position: absolute;\n  margin-top: 80%;\n  z-index: 9;\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.bgh {\n  background: #b40404 !important;\n  color: #fff;\n  padding: 0.3em 0.7em;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.mt2 {\n  padding-left: 1em;\n  margin-top: 1px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n  box-shadow: none;\n  border: 1px solid #b40404;\n  border-radius: 10px;\n}\n\n.card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.white {\n  color: #fff;\n  margin-bottom: 0;\n  margin-top: 3px;\n  width: 83%;\n}\n\n.stars {\n  color: rgba(255, 255, 255, 0.48);\n}\n\n.red {\n  color: #b40404;\n}\n\n.heart {\n  font-size: 24px;\n}\n\nion-card-header {\n  padding: 15px 34px 10px 34px;\n}\n\nion-card-header img {\n  width: 100px;\n  height: 100px;\n}\n\nion-card-content {\n  text-align: center;\n  color: #000000;\n  padding-top: 6px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-card-content img {\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  margin-right: 4px;\n}\n\nion-card-subtitle {\n  color: #b40404;\n  letter-spacing: 1px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.card-content-md p {\n  display: flex;\n  font-size: 12px;\n}\n\nion-icon {\n  position: relative;\n  top: 2px;\n  margin-right: 5px;\n}\n\nion-menu-button {\n  width: 75px;\n  margin-left: 2px;\n}\n\n.spanTitle {\n  float: right;\n  margin-right: 1em;\n  color: #fff;\n  font-size: 16px;\n  width: 95px;\n  text-align: right;\n  line-height: 20px;\n}\n\nion-card-content ion-col {\n  padding: 0px;\n}\n\n.addImage {\n  border: 1px solid #b40404;\n  border-radius: 16px;\n  height: 90.99%;\n}\n\n.addImage ion-icon {\n  font-size: 40px;\n  color: #b40404;\n  vertical-align: middle;\n  padding: 1.9em 0em;\n  margin: 0px;\n}\n\nion-toolbar.ios {\n  padding: 1.5em 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsVUFBQTtBQUVKOztBQUFFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFERTtFQUNJLGdCQUFBO0FBSU47O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBT0o7O0FBSkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFPSjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBT0o7O0FBTEU7RUFDQSxnQ0FBQTtBQVFGOztBQU5FO0VBQ0EsY0FBQTtBQVNGOztBQVBFO0VBQ0MsZUFBQTtBQVVIOztBQVJFO0VBQ0UsNEJBQUE7QUFXSjs7QUFURTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBWUo7O0FBVkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWkU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBZ0JKOztBQWRFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFpQko7O0FBZkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBaEJFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQW1CSjs7QUFqQkU7RUFDRyxZQUFBO0FBb0JMOztBQWpCRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBb0JKOztBQWxCQztFQUNHLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFxQko7O0FBbkJBO0VBQ0Usa0JBQUE7QUFzQkYiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1naWYtcm93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogODAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvYWRlci1naWZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAuYmdoe1xyXG4gICAgYmFja2dyb3VuZDogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjdlbTtcclxuICB9XHJcbiAgLm10e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAubXQye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNiU7XHJcbiAgICBmb250LXNpemU6IDIuMGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAud2hpdGV7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6M3B4O1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICB9XHJcbiAgLnN0YXJze1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpO1xyXG4gIH1cclxuICAucmVke1xyXG4gIGNvbG9yOiNiNDA0MDQ7XHJcbiAgfVxyXG4gIC5oZWFydHtcclxuICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOjE1cHggMzRweCAxMHB4IDM0cHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWhlYWRlciBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgXHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnQgaW1ne1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuY2FyZC1jb250ZW50LW1kIHB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIGlvbi1tZW51LWJ1dHRvbntcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcbiAgLnNwYW5UaXRsZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWNvbHtcclxuICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gXHJcbiAgLmFkZEltYWdle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDQwNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDkwLjk5JTtcclxuIH1cclxuIC5hZGRJbWFnZSBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6MS45ZW0gMGVtO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXIuaW9ze1xyXG4gIHBhZGRpbmc6IDEuNWVtIDBlbTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/menu/menu.page.ts":
    /*!***********************************!*\
      !*** ./src/app/menu/menu.page.ts ***!
      \***********************************/

    /*! exports provided: MenuPage */

    /***/
    function srcAppMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
        return MenuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _alert_confirm_alert_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../alert-confirm/alert-confirm.page */
      "./src/app/alert-confirm/alert-confirm.page.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../loader.service */
      "./src/app/loader.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _alerterror_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../alerterror.service */
      "./src/app/alerterror.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var MenuPage = /*#__PURE__*/function () {
        function MenuPage(loader, restService, router, alertService, storage, menuCtrl, toastController, popoverController, alertController) {
          _classCallCheck(this, MenuPage);

          this.loader = loader;
          this.restService = restService;
          this.router = router;
          this.alertService = alertService;
          this.storage = storage;
          this.menuCtrl = menuCtrl;
          this.toastController = toastController;
          this.popoverController = popoverController;
          this.alertController = alertController;
        }

        _createClass(MenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('restaurant_name').then(function (restaurant_name) {
              _this.restaurantName = restaurant_name;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storage.get('restaurants_id').then(function (restaurant_id) {
              _this2.resaturant_id = restaurant_id; //this.resaturant_id = 6;

              console.log(_this2.resaturant_id);
              var stringy = JSON.stringify({
                requestType: 'all',
                restaurantId: _this2.resaturant_id
              });

              _this2.restService.getItems(stringy).subscribe(function (response) {
                _this2.items_data = JSON.parse(response['_body']);
                console.log(_this2.items_data);
                _this2.items_data = _this2.items_data.items_data;
                _this2.items_img_url = _this2.items_data.items_img_url;
                console.log(_this2.items_data); //this.loader.hideLoader();
              }, function (err) {
                //this.loader.hideLoader();
                _this2.alertService.presentAlertService(err);
              });
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this3 = this;

            this.storage.get('restaurants_id').then(function (restaurant_id) {
              _this3.resaturant_id = restaurant_id; //this.resaturant_id = 6;

              console.log(_this3.resaturant_id);
              var stringy = JSON.stringify({
                requestType: 'all',
                restaurantId: _this3.resaturant_id
              });

              _this3.restService.getItems(stringy).subscribe(function (response) {
                _this3.items_data = JSON.parse(response['_body']);
                console.log(_this3.items_data);
                _this3.items_data = _this3.items_data.items_data;
                _this3.items_img_url = _this3.items_data.items_img_url;
                console.log(_this3.items_data); //this.loader.hideLoader();

                event.target.complete();
              }, function (err) {
                event.target.complete(); //this.loader.hideLoader();

                _this3.alertService.presentAlertService(err);
              });
            });
          }
        }, {
          key: "itemEdit",
          value: function itemEdit(data, i) {
            var _this4 = this;

            console.log(data);
            var html = '';
            html += '<ion-card class="ed" ><ion-row class="main_top">';
            html += '<p class="m_b2">' + data.item_name + '</p>';
            html += '<ion-row class="md_left">';
            html += '<ion-col class="m_b1 single_item_delete_' + i + '" size="12">';
            html += '<ion-icon ios="ios-trash" md="md-trash" ></ion-icon>';
            html += '<span>Delete</span>';
            html += '</ion-col>';
            html += '<ion-col class="m_b1 single_item_edit_' + i + '" size="12" >';
            html += '<ion-icon ios="ios-create" md="md-create" ></ion-icon>';
            html += '<span>Edit</span>';
            html += '</ion-col>';
            html += '<ion-col class="m_b1 btn_dismiss_' + i + '" size="12">';
            html += '<ion-icon ios="ios-close" md="md-close" ></ion-icon>';
            html += '<span>Dismiss</span>';
            html += '</ion-col>';
            html += '</ion-row>';
            html += '</ion-row>';
            html += '</ion-card >';
            var obj = document.querySelector('.item_' + i + '');
            obj.innerHTML = html;
            /* btn dismiss */

            var btn = document.querySelector('.btn_dismiss_' + i + '');
            btn.addEventListener("click", function (e) {
              return _this4.itemdismiss(data, i);
            });
            /* btn dismiss */

            /* btn edit */

            var btnEdit = document.querySelector('.single_item_edit_' + i + '');
            btnEdit.addEventListener("click", function (e) {
              return _this4.signleitemEdit(data, i);
            });
            /* btn edit */

            /* btn delete */

            var btnDelete = document.querySelector('.single_item_delete_' + i + '');
            btnDelete.addEventListener("click", function (e) {
              return _this4.itemdelete(data, i);
            });
            /* btn delete */
          }
        }, {
          key: "itemdelete",
          value: function itemdelete(data, i) {
            this.AlertConfirm(data.items_id, i);
          }
        }, {
          key: "AlertConfirm",
          value: function AlertConfirm(items_id, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _alert_confirm_alert_confirm_page__WEBPACK_IMPORTED_MODULE_1__["AlertConfirmPage"],
                        componentProps: {
                          "data": items_id,
                          "i": i
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      popover.onWillDismiss().then(function (data) {
                        if (data.data) {
                          console.log(data.data.val);
                          console.log(data.data.item_delete);

                          if (data.data.item_delete == true) {
                            document.querySelector('.item_' + data.data.val + '').remove();

                            _this5.deleteitemToast();
                          }
                        } // this.popoverReturnVal = data.data.val;

                      });
                      _context.next = 6;
                      return popover.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(items_id, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        // header: '',
                        message: '<ion-icon ios="ios-trash" md="md-trash" ></ion-icon>Are you sure you want to <strong>Delete</strong>?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            var stringy = JSON.stringify({
                              requestType: 'delete',
                              restaurantId: _this6.resaturant_id,
                              itemId: items_id
                            });

                            _this6.restService.deleteItemURL(stringy).subscribe(function (response) {
                              console.log(JSON.parse(response['_body']));
                              document.querySelector('.item_' + i + '').remove();

                              _this6.deleteitemToast();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteitemToast",
          value: function deleteitemToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'Item Deleted Successfully.',
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "signleitemEdit",
          value: function signleitemEdit(data, i) {
            console.log(data);
            var myData = JSON.stringify({
              data: data
            });
            this.router.navigate(['/item-edit'], {
              queryParams: {
                value: myData
              }
            });
          }
        }, {
          key: "itemdismiss",
          value: function itemdismiss(data, i) {
            var _this7 = this;

            var html = '';
            var url = "https://dev.khaoaurbachao.com/image.php?image=assets/admin/images/items_images/item_here&height=300px&width=300px&zc=1&ct=0";
            var data_img = url.replace('item_here', data.item_image);
            console.log(data);
            html += '<ion-card class="g_card item_edit_' + i + '">';
            html += '<ion-card-header class="g_header">';
            html += '  <img src="' + data_img + '" class="g_img"> ';
            html += '</ion-card-header>';
            html += '<ion-card-subtitle class="g_subtitle">' + data.item_name + '</ion-card-subtitle>';
            html += '<ion-card-content class="g_content">';
            html += '  <ion-row>';
            html += '    <ion-col class="g_pad"  text-center>';
            html += '      ' + data.quantity + ' Pices Per ' + data.measurement + '';
            html += '    </ion-col>';
            html += '  </ion-row>';
            html += '  <ion-row>';
            html += '    <ion-col class="g_pad" text-center>';
            html += '      ' + data.price + ' Per ' + data.measurement + '';
            html += '   </ion-col>';
            html += '  </ion-row>';
            html += '</ion-card-content>';
            html += '</ion-card>';
            var obj = document.querySelector('.item_' + i + '');
            obj.innerHTML = html;
            var btn = document.querySelector('.item_edit_' + i + '');
            btn.addEventListener("click", function (e) {
              return _this7.itemEdit(data, i);
            });
          }
        }]);

        return MenuPage;
      }();

      MenuPage.ctorParameters = function () {
        return [{
          type: _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _alerterror_service__WEBPACK_IMPORTED_MODULE_6__["AlerterrorService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menu.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menu.page.scss */
        "./src/app/menu/menu.page.scss"))["default"]]
      })], MenuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-menu-module-es5.js.map