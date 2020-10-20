(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alert-confirm-alert-confirm-module~menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert-confirm/alert-confirm.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert-confirm/alert-confirm.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-row class=\"fa_cros\">\n    <ion-col  (click)=\"DismissClick()\">\n      <ion-icon ios=\"ios-close\" md=\"md-close\" class=\"primary_color float-right icon_close\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-card >\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p><ion-icon ios=\"ios-trash\" md=\"md-trash\" class=\"basket\" ></ion-icon>\n            <span class=\"me_top\">Are you sure you want to <strong>Delete</strong></span>?</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"text-center\">\n          <ion-button class=\"button-login\" color=\"danger\" shape=\"round\" (click)=\"submit()\">Yes</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/alert-confirm/alert-confirm-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/alert-confirm/alert-confirm-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AlertConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfirmPageRoutingModule", function() { return AlertConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alert_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-confirm.page */ "./src/app/alert-confirm/alert-confirm.page.ts");




const routes = [
    {
        path: '',
        component: _alert_confirm_page__WEBPACK_IMPORTED_MODULE_3__["AlertConfirmPage"]
    }
];
let AlertConfirmPageRoutingModule = class AlertConfirmPageRoutingModule {
};
AlertConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlertConfirmPageRoutingModule);



/***/ }),

/***/ "./src/app/alert-confirm/alert-confirm.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/alert-confirm/alert-confirm.module.ts ***!
  \*******************************************************/
/*! exports provided: AlertConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfirmPageModule", function() { return AlertConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _alert_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-confirm-routing.module */ "./src/app/alert-confirm/alert-confirm-routing.module.ts");
/* harmony import */ var _alert_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-confirm.page */ "./src/app/alert-confirm/alert-confirm.page.ts");







let AlertConfirmPageModule = class AlertConfirmPageModule {
};
AlertConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alert_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertConfirmPageRoutingModule"]
        ],
        declarations: [_alert_confirm_page__WEBPACK_IMPORTED_MODULE_6__["AlertConfirmPage"]]
    })
], AlertConfirmPageModule);



/***/ }),

/***/ "./src/app/alert-confirm/alert-confirm.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/alert-confirm/alert-confirm.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n  box-shadow: none;\n}\n\n.card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.white {\n  color: #fff;\n  margin-bottom: 0;\n  margin-top: 3px;\n  width: 83%;\n}\n\n.stars {\n  color: rgba(255, 255, 255, 0.48);\n}\n\n.red {\n  color: #b40404;\n}\n\n.heart {\n  font-size: 24px;\n}\n\nion-card-header {\n  padding: 15px 34px 10px 34px;\n}\n\nion-card-header img {\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\nion-card-content {\n  text-align: left;\n  color: #a3a3a3;\n  padding-top: 20px;\n}\n\nion-card-content img {\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  margin-right: 4px;\n}\n\nion-card-subtitle {\n  color: #b40404;\n  letter-spacing: 1px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.card-content-md p {\n  display: flex;\n  font-size: 17px;\n}\n\nion-icon {\n  position: relative;\n  top: 2px;\n  margin-right: 5px;\n}\n\n.primary_color {\n  color: #b40404;\n}\n\n.float-right {\n  float: right;\n}\n\n.fa_cros {\n  position: absolute;\n  right: 0px;\n  z-index: 999;\n}\n\n.icon_close {\n  font-size: 20px;\n}\n\nstrong {\n  font-weight: 800;\n  color: #b40404;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: #b40404 !important;\n  --ion-color-tint: #b40404 !important;\n}\n\n.basket {\n  font-size: 23px;\n  color: #b40404;\n}\n\n.me_top {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQtY29uZmlybS9hbGVydC1jb25maXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0U7RUFDQSxnQ0FBQTtBQUVGOztBQUFFO0VBQ0EsY0FBQTtBQUdGOztBQURFO0VBQ0MsZUFBQTtBQUlIOztBQUZFO0VBQ0UsNEJBQUE7QUFLSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkU7RUFDRSxjQUFBO0FBV0o7O0FBVEU7RUFDRSxZQUFBO0FBWUo7O0FBVkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBYUo7O0FBWEU7RUFDRSxlQUFBO0FBY0o7O0FBWkU7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFlTjs7QUFiRTtFQUNFLG9DQUFBO0VBQ0EseUVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtBQWdCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBaUJKOztBQWZBO0VBQ0ksZUFBQTtBQWtCSiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LWNvbmZpcm0vYWxlcnQtY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgXHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzYlO1xyXG4gICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLndoaXRle1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOjNweDtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgfVxyXG4gIC5zdGFyc3tcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KTtcclxuICB9XHJcbiAgLnJlZHtcclxuICBjb2xvcjojYjQwNDA0O1xyXG4gIH1cclxuICAuaGVhcnR7XHJcbiAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzoxNXB4IDM0cHggMTBweCAzNHB4O1xyXG4gXHJcbiAgfVxyXG4gIGlvbi1jYXJkLWhlYWRlciBpbWd7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogOTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjYTNhM2EzO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnQgaW1ne1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuY2FyZC1jb250ZW50LW1kIHB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5wcmltYXJ5X2NvbG9ye1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgfVxyXG4gIC5mbG9hdC1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLmZhX2Nyb3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxuICAuaWNvbl9jbG9zZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgc3Ryb25ne1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogI2I0MDQwNDtcclxuICB9XHJcbiAgLmlvbi1jb2xvci1kYW5nZXIge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyNDAsIDY1LCA2NSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXNoYWRlOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci10aW50OiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhc2tldHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi5tZV90b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/alert-confirm/alert-confirm.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/alert-confirm/alert-confirm.page.ts ***!
  \*****************************************************/
/*! exports provided: AlertConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfirmPage", function() { return AlertConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





let AlertConfirmPage = class AlertConfirmPage {
    constructor(popoverController, storage, restService, navParams) {
        this.popoverController = popoverController;
        this.storage = storage;
        this.restService = restService;
        this.navParams = navParams;
        this.item_delete = false;
        this.storage.get('restaurants_id').then(restaurant_id => {
            this.resaturant_id = restaurant_id;
        });
        this.items_id = this.navParams.data.data;
        this.i = this.navParams.data.i;
        //console.log(this.i);
        //   this.modelId = this.navParams.data.paramID;
        // this.modalTitle = this.navParams.data.paramTitle;
    }
    ngOnInit() {
    }
    submit() {
        var stringy = JSON.stringify({
            requestType: 'delete',
            restaurantId: this.resaturant_id,
            itemId: this.items_id
        });
        this.restService.deleteItemURL(stringy).subscribe(response => {
            console.log(JSON.parse(response['_body']));
            this.item_delete = true;
            this.DismissClick();
            // this.deleteitemToast();
        });
    }
    DismissClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss({
                val: this.i,
                item_delete: this.item_delete
            });
        });
    }
};
AlertConfirmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
AlertConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert-confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert-confirm/alert-confirm.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert-confirm.page.scss */ "./src/app/alert-confirm/alert-confirm.page.scss")).default]
    })
], AlertConfirmPage);



/***/ })

}]);
//# sourceMappingURL=default~alert-confirm-alert-confirm-module~menu-menu-module-es2015.js.map