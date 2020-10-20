(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"header_background\">\n  <!--ion-toolbar class=\"header_background\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><img src=\"assets/imgs/dot-menu.png\" class=\"dot_icon\"> <img  src=\"assets/imgs/headerLogo.png\" class=\"logo_icon\"></ion-menu-button>\n    </ion-buttons>\n    <span>\n      {{restaurantName}}\n    </span>\n    <span class=\"spanTitle\" (click)=\"showtimePeriod()\">\n     Last {{periodReservation}}\n    </span>\n  </ion-toolbar-->\n <ion-row class=\"bgh\">\n   <ion-col size=\"4\"  class=\"ion-text-left\">\n    <span (click)=\"toggleMenu()\">\n      <img src=\"assets/imgs/dots.svg\" width=\"68px\" > \n    </span> \n   </ion-col>\n   <ion-col size=\"4\" class=\"ion-text-center mt\">\n    {{restaurantName}}\n   </ion-col>\n   <ion-col size=\"4\"  class=\"ion-text-right mt\" (click)=\"showtimePeriod()\" *ngIf=\"showSort ==false\">\n    Last {{periodReservation}}\n   </ion-col>\n   <ion-col size=\"4\"  class=\"ion-text-right mt\" (click)=\"showtimePeriod()\" *ngIf=\"showSort\">\n    Sort\n   </ion-col>\n </ion-row>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n    <ion-col>\n      <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n     </ion-col>\n  </ion-row>\n \n  <!-- Custom Refresher Content -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-row *ngIf=\"reservation_data?.length == 0\">\n    <ion-col size=\"12\">\n        <p class=\"no-reservation\">There is no current reservations</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let data of reservation_data\" size=\"6\">\n      <ion-card (click)=\"GotoDetail(data)\">\n        <ion-card-header>\n          <ion-avatar>\n            <img src=\"assets/imgs/profile-img.png\">\n          </ion-avatar>\n        </ion-card-header>\n        <ion-card-subtitle>{{data.bookedby_username}}</ion-card-subtitle>\n        <ion-card-content>\n          <p><img src=\"assets/imgs/clock.png\">{{data.reservation_date}}</p>\n          <p><img src=\"assets/imgs/mUsers.png\">{{data.number_of_users}} persons</p>\n          <p><img src=\"assets/imgs/percent.png\">{{data.discount_value}}% off behari kebab</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  \n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _time_period_time_period_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../time-period/time-period.module */
      "./src/app/time-period/time-period.module.ts");
      /* harmony import */


      var _reservation_detail_reservation_detail_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../reservation-detail/reservation-detail.module */
      "./src/app/reservation-detail/reservation-detail.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"], _reservation_detail_reservation_detail_module__WEBPACK_IMPORTED_MODULE_2__["ReservationDetailPageModule"], _time_period_time_period_module__WEBPACK_IMPORTED_MODULE_1__["TimePeriodPageModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  position: absolute;\n  margin-top: 80%;\n  z-index: 9;\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.bgh {\n  background: #b40404 !important;\n  color: #fff;\n  padding: 0.3em 0.7em;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n  box-shadow: none;\n  border: 1px solid #b40404;\n  border-radius: 10px;\n}\n\n.card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.white {\n  color: #fff;\n  margin-bottom: 0;\n  margin-top: 3px;\n  width: 83%;\n}\n\n.stars {\n  color: rgba(255, 255, 255, 0.48);\n}\n\n.red {\n  color: #b40404;\n}\n\n.heart {\n  font-size: 24px;\n}\n\nion-avatar {\n  margin: 0 auto;\n}\n\n/*ion-card-header img{\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  margin: 0 auto;\n} */\n\nion-card-content {\n  text-align: left;\n  color: #a3a3a3;\n  padding-top: 6px;\n}\n\nion-card-content img {\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  margin-right: 4px;\n}\n\nion-card-subtitle {\n  color: #b40404;\n  letter-spacing: 1px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.card-content-md p {\n  display: flex;\n  font-size: 12px;\n}\n\nion-icon {\n  position: relative;\n  top: 2px;\n  margin-right: 5px;\n}\n\nion-menu-button {\n  width: 75px;\n  margin-left: 9px;\n}\n\n.spanTitle {\n  float: right;\n  margin-right: 1em;\n  color: #fff !important;\n  font-size: 16px;\n  width: 106px;\n  text-align: right;\n  line-height: 20px;\n}\n\n.no-reservation {\n  text-align: center;\n  color: #b40404;\n  font-weight: 550;\n  font-size: 17px;\n  margin-top: 10%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.containers {\n  position: relative;\n  width: 50%;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 100%;\n  right: 0;\n  background-color: #008CBA;\n  overflow: hidden;\n  width: 0;\n  height: 100%;\n  transition: 0.5s ease;\n}\n\n.containers:hover .overlay {\n  width: 100%;\n  left: 0;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n\n.card-content-ios p {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsVUFBQTtBQUVKOztBQUFFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpFO0VBQ0EsZ0NBQUE7QUFPRjs7QUFMRTtFQUNBLGNBQUE7QUFRRjs7QUFORTtFQUNDLGVBQUE7QUFTSDs7QUFQQztFQUNDLGNBQUE7QUFVRjs7QUFSRTs7Ozs7R0FBQTs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBV0o7O0FBVEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVZFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBWEU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFlSjs7QUFiRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFiRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWRFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWlCSjs7QUFmRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFoQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFtQko7O0FBakJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQW9CSjs7QUFqQkU7RUFDRSxXQUFBO0VBQ0EsT0FBQTtBQW9CSjs7QUFqQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSxnQ0FBQTtFQUNBLG1CQUFBO0FBb0JKOztBQWxCRTtFQUNDLGFBQUE7QUFxQkgiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1naWYtcm93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogODAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvYWRlci1naWZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAuYmdoe1xyXG4gICAgYmFja2dyb3VuZDogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjdlbTtcclxuICB9XHJcbiAgLm10e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNDA0MDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM2JTtcclxuICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC53aGl0ZXtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDozcHg7XHJcbiAgICB3aWR0aDogODMlO1xyXG4gIH1cclxuICAuc3RhcnN7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCk7XHJcbiAgfVxyXG4gIC5yZWR7XHJcbiAgY29sb3I6I2I0MDQwNDtcclxuICB9XHJcbiAgLmhlYXJ0e1xyXG4gICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gaW9uLWF2YXRhcntcclxuICBtYXJnaW46IDAgYXV0bztcclxuIH1cclxuICAvKmlvbi1jYXJkLWhlYWRlciBpbWd7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogOTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH0gKi9cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjYTNhM2EzO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtY29udGVudCBpbWd7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQtbWQgcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gIH1cclxuXHJcbiAgLnNwYW5UaXRsZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxMDZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5uby1yZXNlcnZhdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jb250YWluZXJzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcnM6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAudGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQtaW9zIHB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _reservation_detail_reservation_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../reservation-detail/reservation-detail.page */
      "./src/app/reservation-detail/reservation-detail.page.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _alerterror_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../alerterror.service */
      "./src/app/alerterror.service.ts");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../loader.service */
      "./src/app/loader.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _time_period_time_period_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../time-period/time-period.page */
      "./src/app/time-period/time-period.page.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js"); //import { TimePeriodPage } from './../time-period/time-period.page';


      var HomePage = /*#__PURE__*/function () {
        function HomePage(loader, restService, router, splash, popoverController, activatedRoute, alertService, storage, menuCtrl) {
          _classCallCheck(this, HomePage);

          this.loader = loader;
          this.restService = restService;
          this.router = router;
          this.splash = splash;
          this.popoverController = popoverController;
          this.activatedRoute = activatedRoute;
          this.alertService = alertService;
          this.storage = storage;
          this.menuCtrl = menuCtrl;
          this.showSort = false;
          /* this.activatedRoute.queryParams.subscribe((res)=>{
            console.log(JSON.parse(res.value));
          
            // alert(this.jobId);
           }); */
        }

        _createClass(HomePage, [{
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('restaurant_name').then(function (restaurant_name) {
              console.log('name' + restaurant_name);
              _this.restaurantName = restaurant_name;
            });
            this.storage.get('user_accounts_id').then(function (user_accounts_id) {
              console.log('user_accounts_id' + user_accounts_id);
            });
            this.storage.get('restaurants_id').then(function (restaurants_id) {
              _this.storage.get('periodReservation').then(function (periodReservation) {
                console.log('period reservation' + periodReservation);

                if (periodReservation) {
                  var stringy = JSON.stringify({
                    requestType: 'rest_search_by_filters',
                    restaurantId: restaurants_id,
                    duration: periodReservation
                  });

                  _this.restService.timePeriod(stringy).subscribe(function (response) {
                    _this.reservation_data = JSON.parse(response['_body']);
                    _this.reservation_data = _this.reservation_data.reservation;
                    _this.periodReservation = periodReservation;
                  }, function (err) {
                    //this.loader.hideLoader();
                    _this.alertService.presentAlertService(err);
                  });
                } else {
                  if (restaurants_id != '' && restaurants_id != 0 && restaurants_id != null) {
                    _this.resaturant_id = restaurants_id; // this.resaturant_id = 4;

                    var stringy = JSON.stringify({
                      requestType: 'get_by_id',
                      restaurantId: _this.resaturant_id
                    });

                    _this.restService.getReservation(stringy).subscribe(function (response) {
                      _this.reservation_data = JSON.parse(response['_body']);
                      _this.reservation_data = _this.reservation_data.reservation;
                      console.log(_this.reservation_data);
                      _this.periodReservation = '1 Month';
                      _this.showSort = true; //  this.reservation_data = [];
                      //this.loader.hideLoader();
                    }, function (err) {
                      //this.loader.hideLoader();
                      _this.alertService.presentAlertService(err);
                    });
                  }
                }
              });
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            this.storage.get('restaurants_id').then(function (restaurants_id) {
              _this2.storage.get('periodReservation').then(function (periodReservation) {
                console.log(periodReservation);

                if (periodReservation) {
                  var stringy = JSON.stringify({
                    requestType: 'rest_search_by_filters',
                    restaurantId: restaurants_id,
                    duration: periodReservation
                  });

                  _this2.restService.timePeriod(stringy).subscribe(function (response) {
                    _this2.reservation_data = JSON.parse(response['_body']);
                    _this2.reservation_data = _this2.reservation_data.reservation;
                    _this2.periodReservation = periodReservation;
                    event.target.complete();
                  }, function (err) {
                    //this.loader.hideLoader();
                    event.target.complete();

                    _this2.alertService.presentAlertService(err);
                  });
                } else {
                  if (restaurants_id != '' && restaurants_id != 0 && restaurants_id != null) {
                    _this2.resaturant_id = restaurants_id; // this.resaturant_id = 4;

                    var stringy = JSON.stringify({
                      requestType: 'get_by_id',
                      restaurantId: _this2.resaturant_id
                    });

                    _this2.restService.getReservation(stringy).subscribe(function (response) {
                      _this2.reservation_data = JSON.parse(response['_body']);
                      _this2.reservation_data = _this2.reservation_data.reservation;
                      console.log(_this2.reservation_data);
                      _this2.periodReservation = '1 Month';
                      event.target.complete(); //  this.reservation_data = [];
                      //this.loader.hideLoader();
                    }, function (err) {
                      //this.loader.hideLoader();
                      event.target.complete();

                      _this2.alertService.presentAlertService(err);
                    });
                  }
                }
              });
            });
          }
        }, {
          key: "GotoDetail",
          value: function GotoDetail(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(data);
                      _context.next = 3;
                      return this.popoverController.create({
                        component: _reservation_detail_reservation_detail_page__WEBPACK_IMPORTED_MODULE_1__["ReservationDetailPage"],
                        componentProps: {
                          "data": data
                        },
                        translucent: true
                      });

                    case 3:
                      popover = _context.sent;
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
          key: "showtimePeriod",
          value: function showtimePeriod(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: _time_period_time_period_page__WEBPACK_IMPORTED_MODULE_9__["TimePeriodPage"],
                        translucent: true
                      });

                    case 2:
                      popover = _context2.sent;
                      popover.onWillDismiss().then(function (data) {
                        if (data.data) {
                          console.log(data.data.val);
                          _this3.reservation_data = data.data.val;

                          _this3.storage.get('periodReservation').then(function (periodReservation) {
                            _this3.periodReservation = periodReservation;
                            console.log(_this3.periodReservation);
                          });
                        } // this.popoverReturnVal = data.data.val;

                      });
                      _context2.next = 6;
                      return popover.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "swipeEvent",
          value: function swipeEvent(e) {
            if (e.direction == 4) {
              //direction 2 = right to left swipe.
              alert('right');
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _alerterror_service__WEBPACK_IMPORTED_MODULE_4__["AlerterrorService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map