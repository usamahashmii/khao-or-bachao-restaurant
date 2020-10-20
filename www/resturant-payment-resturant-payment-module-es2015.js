(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resturant-payment-resturant-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-payment/resturant-payment.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-payment/resturant-payment.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content  no-border fullscreen=\"true\"  class=\"ion-padding background no-scroll\">\n \n  <form [formGroup]=\"paymentForm\">\n  <ion-list class=\"items-middle\" class=\"ion-text-center\">\n   <ion-row>\n      <ion-col style=\"padding-left: 0px;\" class=\"ion-text-left\" size=\"col-4\">\n          <img src=\"assets/imgs/khaobchao.png\" width=\"45%\">\n      </ion-col>\n    </ion-row>\n   \n     <h3 class=\"main_heading ion-text-left\">Resturant Setup</h3>\n    <p class=\"font-color ion-text-left\">\n      Please Enter Your Resturant Details.\n    </p>\n    <ion-item class=\"itemBottom\">\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Recommended</ion-label>\n      <ion-textarea  rows=\"3\"  [(ngModel)]=\"recommended\"  formControlName=\"recommended\" ></ion-textarea>\n    </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"paymentForm.get('recommended').hasError('required') && paymentForm.get('recommended').touched\">\n      * Please Enter Recommended\n    </div>\n    <ion-item class=\"itemBottom\">\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Terms and Conditions</ion-label>\n      <ion-textarea  rows=\"3\"  [(ngModel)]=\"terms\"  formControlName=\"terms\" ></ion-textarea>\n    </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"paymentForm.get('terms').hasError('required') && paymentForm.get('terms').touched\">\n      * Please Enter Terms and Conditions\n    </div>\n    <ion-row>\n        <ion-col size=\"10\">\n          <ion-item class=\"itemInput\">\n            <ion-label color=\"ligh-grey\"  position=\"floating\">Payment Method</ion-label>\n            <ion-input\n            [(ngModel)]=\"pMethod\"  formControlName=\"pMethod\" \n            clearInput ></ion-input>\n          </ion-item>\n          <div class=\"errorMessage\" *ngIf=\"paymentForm.get('pMethod').hasError('required') && paymentForm.get('pMethod').touched\">\n            * Please Enter payment method\n          </div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon ios=\"ios-add\" md=\"md-add\" style=\" font-size: 30px;color: #b40404;\"></ion-icon>\n        </ion-col>\n    </ion-row>\n   \n    <ion-row>\n      <ion-col text-left>\n        <ion-button class=\"button-login\" color=\"danger\" shape=\"round\">\n          Cash <ion-icon ios=\"ios-remove\" md=\"md-remove\" style=\"margin-top: 0px;color:#fff;\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-button class=\"button-login\" color=\"danger\" shape=\"round\" (click)=\"openImagePage()\" style=\"margin-top: 2em;\">Continue</ion-button>\n  </ion-list>\n</form>\n</ion-content> \n");

/***/ }),

/***/ "./src/app/resturant-payment/resturant-payment-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resturant-payment/resturant-payment-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ResturantPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantPaymentPageRoutingModule", function() { return ResturantPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resturant_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resturant-payment.page */ "./src/app/resturant-payment/resturant-payment.page.ts");




const routes = [
    {
        path: '',
        component: _resturant_payment_page__WEBPACK_IMPORTED_MODULE_3__["ResturantPaymentPage"]
    }
];
let ResturantPaymentPageRoutingModule = class ResturantPaymentPageRoutingModule {
};
ResturantPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResturantPaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/resturant-payment/resturant-payment.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/resturant-payment/resturant-payment.module.ts ***!
  \***************************************************************/
/*! exports provided: ResturantPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantPaymentPageModule", function() { return ResturantPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _resturant_payment_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resturant-payment-routing.module */ "./src/app/resturant-payment/resturant-payment-routing.module.ts");
/* harmony import */ var _resturant_payment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resturant-payment.page */ "./src/app/resturant-payment/resturant-payment.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let ResturantPaymentPageModule = class ResturantPaymentPageModule {
};
ResturantPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _resturant_payment_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResturantPaymentPageRoutingModule"]
        ],
        declarations: [_resturant_payment_page__WEBPACK_IMPORTED_MODULE_5__["ResturantPaymentPage"]]
    })
], ResturantPaymentPageModule);



/***/ }),

/***/ "./src/app/resturant-payment/resturant-payment.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/resturant-payment/resturant-payment.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.new-background-color {\n  --background:transparent;\n}\n\nion-input {\n  color: #b40404;\n}\n\nion-label {\n  color: #bfbfbf !important;\n}\n\nion-icon {\n  color: #b40404;\n  margin-top: 15px;\n}\n\nion-list {\n  background: none !important;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\n.no-scroll .scroll-content {\n  overflow: hidden;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n}\n\n.itemBottom {\n  margin-bottom: 0.6em;\n}\n\n.icon {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  letter-spacing: 2px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  box-shadow: none !important;\n  margin-top: 2em;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  padding-bottom: 0px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-md.button.button-md.button-default.button-default-md.button-menutoggle.button-menutoggle-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-ios.button.button-ios.button-default.button-default-ios.button-menutoggle.button-menutoggle-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.name-validation {\n  color: #b40404;\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 1px;\n}\n\n.openDays {\n  color: #b40404;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-datetime {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdHVyYW50LXBheW1lbnQvcmVzdHVyYW50LXBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQztFQUNJLFVBQUE7QUFDTDs7QUFDQztFQUNJLFlBQUE7QUFFTDs7QUFBQztFQUNJLHdCQUFBO0FBR0w7O0FBREM7RUFDSSxjQUFBO0FBSUw7O0FBRkM7RUFDSSx5QkFBQTtBQUtMOztBQUhDO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBTUw7O0FBSkM7RUFDSSwyQkFBQTtBQU9MOztBQUxDO0VBQ0ksY0FBQTtBQVFMOztBQU5DO0VBQ0ksZ0JBQUE7QUFTTDs7QUFQQztFQUNFLFdBQUE7RUFDQSxlQUFBO0FBVUg7O0FBUkM7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBV0w7O0FBVEM7RUFDSSxvQkFBQTtBQVlMOztBQVZDO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBYUw7O0FBWEM7RUFDSSwyQkFBQTtBQWNMOztBQVpDO0VBQ0ksMEJBQUE7QUFlTDs7QUFiQztFQUVJLGtDQUFBO0FBZ0JMOztBQWJDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZ0JMOztBQWJDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFnQkw7O0FBZEM7RUFDSSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWlCTDs7QUFmQztFQUNJLGNBQUE7QUFrQkw7O0FBaEJDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBbUJMOztBQWhCQztFQUNBLGNBQUE7RUFDQSxXQUFBO0FBbUJEOztBQWpCQztFQUVJLG1CQUFBO0FBbUJMOztBQWpCQztFQUNLLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBb0JMOztBQWxCQztFQUNJLGNBQUE7QUFxQkw7O0FBbkJDO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQXNCTDs7QUFwQkM7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBdUJMOztBQXJCQztFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUF3Qkw7O0FBdEJDO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQXlCTDs7QUF2QkM7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTBCTDs7QUF4QkM7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEyQkw7O0FBekJDO0VBQ0ksWUFBQTtBQTRCTCIsImZpbGUiOiJzcmMvYXBwL3Jlc3R1cmFudC1wYXltZW50L3Jlc3R1cmFudC1wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9hZGVyLWdpZi1yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAubG9hZGVyLWdpZntcclxuICAgICB3aWR0aDogNjAlO1xyXG4gfVxyXG4gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXJ7IFxyXG4gICAgIGJvcmRlcjpub25lO1xyXG4gfVxyXG4gLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuIH1cclxuIGlvbi1pbnB1dHtcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuIH1cclxuIGlvbi1sYWJlbHtcclxuICAgICBjb2xvcjogI2JmYmZiZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gaW9uLWljb257XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuIH1cclxuIGlvbi1saXN0e1xyXG4gICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuIC5pdGVtLWhhcy1mb2N1cy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaHtcclxuICAgICBjb2xvcjojYjQwNDA0O1xyXG4gfVxyXG4gLm5vLXNjcm9sbCAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIH1cclxuIC5sYWJlbHtcclxuICAgbWFyZ2luOiAwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDZweDtcclxuIH0gIFxyXG4gLml0ZW17XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDQwNDtcclxuICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gfVxyXG4gLml0ZW1Cb3R0b217XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMC42ZW07XHJcbiB9XHJcbiAuaWNvbntcclxuICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gfVxyXG4gLml0ZW0taW5uZXJ7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLnRleHQtaW5wdXR7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7IFxyXG4gfVxyXG4gLmxhYmVsLWlvc1tmbG9hdGluZ10gLCAubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcclxuIH1cclxuIFxyXG4gLm1haW5faGVhZGluZ3tcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiB9XHJcbiBcclxuIC5mb250LWNvbG9ye1xyXG4gICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuIH1cclxuIC5pb24tY29sb3ItZGFuZ2Vye1xyXG4gICAgIC0taW9uLWNvbG9yLWJhc2U6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gfVxyXG4gaW5wdXQsYSAsLnBhcntcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuIH1cclxuIC5vbmVUYXB7XHJcbiAgICAgY29sb3I6ICMzODVjOGU7XHJcbiAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgIG1hcmdpbjogMHB4O1xyXG4gfVxyXG4gXHJcbiAub3J7XHJcbiBjb2xvcjogI2I0MDQwNDtcclxuIG1hcmdpbjogMHB4O1xyXG4gfVxyXG4gLm5ld1VzZXJ7XHJcbiAgICAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgI2M3YzdjNztcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gfVxyXG4gLmxhc3RSb3d7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3R0b206IDBweDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBsZWZ0OiAwcHg7XHJcbiB9XHJcbiAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW3N0YWNrZWRdLCAuaW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtzdGFja2VkXSwgLml0ZW0taW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtmbG9hdGluZ10sIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSB7XHJcbiAgICAgY29sb3I6ICNiMjA0MDQ7XHJcbiB9XHJcbiBidXR0b24uZGlzYWJsZS1ob3Zlci5iYXItYnV0dG9ucy5iYXItYnV0dG9ucy1tZC5idXR0b24uYnV0dG9uLW1kLmJ1dHRvbi1kZWZhdWx0LmJ1dHRvbi1kZWZhdWx0LW1kLmJ1dHRvbi1tZW51dG9nZ2xlLmJ1dHRvbi1tZW51dG9nZ2xlLW1ke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuIH1cclxuIGJ1dHRvbi5kaXNhYmxlLWhvdmVyLmJhci1idXR0b25zLmJhci1idXR0b25zLWlvcy5idXR0b24uYnV0dG9uLWlvcy5idXR0b24tZGVmYXVsdC5idXR0b24tZGVmYXVsdC1pb3MuYnV0dG9uLW1lbnV0b2dnbGUuYnV0dG9uLW1lbnV0b2dnbGUtaW9ze1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuIH1cclxuIC5idXR0b24tbWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gLmJ1dHRvbi1pb3N7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gLm5hbWUtdmFsaWRhdGlvbntcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiB9XHJcbiAub3BlbkRheXN7XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgIG1hcmdpbjogMHB4O1xyXG4gfVxyXG4gaW9uLWRhdGV0aW1le1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/resturant-payment/resturant-payment.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/resturant-payment/resturant-payment.page.ts ***!
  \*************************************************************/
/*! exports provided: ResturantPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantPaymentPage", function() { return ResturantPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");






let ResturantPaymentPage = class ResturantPaymentPage {
    constructor(activatedRoute, router, navCtrl, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.isSubmit = true;
        this.resturantDetail = '';
        this.terms = '';
        this.pMethod = '';
        this.recommended = '';
        this.activatedRoute.queryParams.subscribe((res) => {
            console.log(JSON.parse(res.value));
            this.resturantDetail = res.value;
        });
        this.paymentForm = formBuilder.group({
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pMethod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            recommended: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    openImagePage() {
        if (!this.paymentForm.valid) {
            console.log('Please provide all the required values!');
            this.isSubmit = false;
            return false;
        }
        else {
            var myData = JSON.stringify({
                terms: this.terms,
                pMethod: this.pMethod,
                recommended: this.recommended
            });
            console.log(myData);
            this.router.navigate(['/resturant-image'], {
                queryParams: {
                    paymentSetup: myData,
                    resturantSetup: this.resturantDetail
                },
            });
        }
    }
};
ResturantPaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ResturantPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resturant-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-payment/resturant-payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-payment.page.scss */ "./src/app/resturant-payment/resturant-payment.page.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ResturantPaymentPage);



/***/ })

}]);
//# sourceMappingURL=resturant-payment-resturant-payment-module-es2015.js.map