(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header_background\">\n  <ion-row class=\"bgh\">\n    <ion-col size=\"4\"  class=\"ion-text-left\">\n     <span (click)=\"toggleMenu()\">\n       <img src=\"assets/imgs/dots.svg\" width=\"68px\" > \n     </span> \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center mt\">\n     {{restaurantName}}\n    </ion-col>\n    <ion-col size=\"4\"  class=\"ion-text-right mt\"  >\n      Notifications\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngFor=\"let notify of notifications\" >\n  <ion-row class=\"bg_color\" *ngIf=\"notify.user_type =='Restaurant'\">\n    <ion-col text-center size=\"3\" *ngIf=\"notify\">\n      <img src=\"assets/imgs/bell.png\" class=\"bellImg\"/>\n    </ion-col>\n    <ion-col>\n      <h6>\n        {{notify.description}}\n      </h6>\n      <p class=\"time\">\n        {{notify.date_added}}\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"bg_color\" *ngIf=\"notify.user_type =='Customer'\"> \n    <ion-col text-center size=\"3\">\n      <div class=\"sidetagone\">\n        <img src=\"assets/imgs/bg_discount.png\">\n        <p class=\"bg_img_text white\" style=\"margin-top: 1.6em;\">-5%</p>\n      </div>\n    </ion-col>\n    <ion-col>\n      <h6>\n        {{notify.description}}\n      </h6>\n      <p class=\"time\">\n        {{notify.date_added}}\n      </p>\n    </ion-col>\n  </ion-row>\n</ng-container>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/notifications/notifications-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg_color:nth-child(even) {\n  background: rgba(204, 204, 204, 0.34);\n}\n\n.bg_color:nth-child(odd) {\n  background: #FFF;\n}\n\n.time {\n  margin-top: 0px;\n  color: #969595;\n  font-weight: 300;\n}\n\nion-menu-button {\n  width: 75px;\n  margin-left: 2px;\n}\n\n.bgh {\n  background: #b40404 !important;\n  color: #fff;\n  padding: 0.3em 0.7em;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.mt2 {\n  padding-left: 1em;\n  margin-top: 1px;\n}\n\n.sidetagone {\n  position: absolute;\n  right: 27%;\n  top: 15px;\n  width: 45%;\n  height: 55px;\n  background-size: cover;\n}\n\n.sidetagone p {\n  font-size: 14px;\n}\n\n.white {\n  color: #fff;\n}\n\n.bellImg {\n  width: 44%;\n  margin-top: 0.8em;\n}\n\n.bg_img_text {\n  position: absolute;\n  top: 12%;\n  left: 8px;\n}\n\n.spanTitle {\n  float: right;\n  margin-right: 1em;\n  color: #fff;\n  font-size: 16px;\n  width: 95px;\n  text-align: right;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUEyQixxQ0FBQTtBQUUzQjs7QUFESTtFQUEwQixnQkFBQTtBQUs5Qjs7QUFKSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPUjs7QUFMSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQVFOOztBQU5JO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFTTjs7QUFQSTtFQUNJLGdCQUFBO0FBVVI7O0FBUkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFXTjs7QUFUSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0FBV1I7O0FBVE07RUFDRSxlQUFBO0FBWVI7O0FBVk07RUFDRSxXQUFBO0FBYVI7O0FBWEk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFjUjs7QUFaSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFlTjs7QUFiSTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFnQkoiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnX2NvbG9yOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjM0KX1cclxuICAgIC5iZ19jb2xvcjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cclxuICAgIC50aW1le1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBjb2xvcjogIzk2OTU5NTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgICB3aWR0aDogNzVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIH1cclxuICAgIC5iZ2h7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDAuM2VtIDAuN2VtO1xyXG4gICAgfVxyXG4gICAgLm10e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubXQye1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGV0YWdvbmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNyU7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWdzL2JnX2Rpc2NvdW50LnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICAuc2lkZXRhZ29uZSBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAud2hpdGV7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIC5iZWxsSW1ne1xyXG4gICAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgICB9XHJcbiAgICAuYmdfaW1nX3RleHR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMiU7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5zcGFuVGl0bGV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _alerterror_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alerterror.service */ "./src/app/alerterror.service.ts");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toaster.service */ "./src/app/toaster.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








let NotificationsPage = class NotificationsPage {
    constructor(menuCtrl, storage, loader, alertService, toastService, restService) {
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.loader = loader;
        this.alertService = alertService;
        this.toastService = toastService;
        this.restService = restService;
        this.userId = '';
    }
    ngOnInit() {
        this.storage.get('restaurant_name').then(restaurant_name => {
            this.restaurantName = restaurant_name;
        });
    }
    ionViewWillEnter() {
        this.storage.get('restaurants_id').then(restaurants_id => {
            this.storage.get('email').then(email => {
                console.log('name' + restaurants_id);
                var stringy = JSON.stringify({
                    restaurantId: restaurants_id,
                    email: email,
                    requestType: 'restaurant'
                });
                this.loader.presentLoader();
                this.restService.getNotifications(stringy).subscribe(response => {
                    console.log(response['_body']);
                    this.notifications = JSON.parse(response['_body']);
                    this.notifications = this.notifications.notifications;
                    this.loader.hideLoader();
                }, err => {
                    this.loader.hideLoader();
                    this.alertService.presentAlertService(err);
                });
            });
        });
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _alerterror_service__WEBPACK_IMPORTED_MODULE_4__["AlerterrorService"] },
    { type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] }
];
NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
    })
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map