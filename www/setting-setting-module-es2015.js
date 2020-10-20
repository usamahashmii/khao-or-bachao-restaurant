(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header_background\">\n  <ion-row class=\"bgh\">\n    <ion-col size=\"4\"  class=\"ion-text-left\">\n     <span (click)=\"toggleMenu()\">\n       <img src=\"assets/imgs/dots.svg\" width=\"68px\" > \n     </span> \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center mt\">\n      {{restaurantName}}\n    </ion-col>\n    <ion-col size=\"4\"  class=\"ion-text-right mt\">\n      Setting\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n    <ion-col>\n      <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n    </ion-col>\n  </ion-row>\n  \n  <ion-item>\n    <h3 class=\"red\">Resturant Discount</h3>\n  </ion-item>\n <ion-item>\n    <ion-label>Allow Discount</ion-label>\n    <ion-toggle [(ngModel)]=\"allowDiscount\" ></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Per Time slot booking</ion-label>\n    <ion-input  [(ngModel)]=\"perTimeslotBookings\" class=\"ion-text-right\" placeholder=\"1\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Opening time</ion-label>\n    <ion-datetime  displayFormat=\"h:mm a\"  [(ngModel)]=\"openingTime\" class=\"ion-text-right\" placeholder=\"00:00 pm\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Address</ion-label>\n    <ion-input  [(ngModel)]=\"address\" class=\"ion-text-right\" placeholder=\"UAE\"></ion-input>\n  </ion-item>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <ion-button class=\"button-login\" color=\"danger\" shape=\"round\" (click)=\"updatebtn()\">Update</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/setting/setting-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "./src/app/setting/setting.page.ts");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ "./src/app/setting/setting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/setting/setting-routing.module.ts");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/setting/setting.page.ts");







let SettingPageModule = class SettingPageModule {
};
SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"]
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })
], SettingPageModule);



/***/ }),

/***/ "./src/app/setting/setting.page.scss":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-gif {\n  width: 60%;\n}\n\n.red {\n  color: #b40404;\n}\n\n.bgh {\n  background: #b40404 !important;\n  color: #fff;\n  padding: 0.3em 0.7em;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.profile-photo {\n  border-radius: 50% !important;\n  overflow: hidden;\n  height: 65px;\n  width: 65px;\n}\n\n.ProfleName {\n  margin-bottom: 0px;\n  margin-top: 16px !important;\n  color: #b40404;\n}\n\n.ProfleCity {\n  margin: 0px;\n}\n\nion-select {\n  padding-top: 0px !important;\n}\n\n.select-md .select-icon .select-icon-inner {\n  color: #b40404;\n}\n\n.language {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n  margin-bottom: 0.9em;\n}\n\n.radio-md .radio-checked {\n  border-color: #b20404;\n}\n\n.radio-md .radio-inner {\n  background-color: #b20404;\n}\n\n.item-radio-checked.item-md ion-label {\n  color: #b20404;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nion-toggle {\n  --background:#fff;\n  --background-checked:#b20404;\n  --handle-background:#fff;\n  --handle-background-checked:#fff;\n}\n\n.toggle-inner {\n  --border: 1px solid rgba(180, 4, 4, 0.26);\n}\n\n.toggle-md.toggle-checked .toggle-icon {\n  background-color: #b40404;\n}\n\n.toggle-ios.toggle-checked .toggle-icon {\n  background-color: #b40404;\n}\n\n.toggle-md.toggle-checked .toggle-inner {\n  background-color: #ffffff;\n}\n\n.toggle-ios.toggle-checked .toggle-inner {\n  background-color: #ffffff;\n}\n\n.toggle-md {\n  height: 19px;\n}\n\n.toggle-md .toggle-inner {\n  top: -1px;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.updatebtn.button-md, .updatebtn.button-ios {\n  background-color: #b40404 !important;\n  box-shadow: none !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: #b40404 !important;\n  --ion-color-tint: #b40404 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\nion-menu-button {\n  width: 75px;\n  margin-left: 9px;\n}\n\n.spanTitle {\n  float: right;\n  margin-right: 1em;\n  color: #fff !important;\n  font-size: 16px;\n  width: 106px;\n  text-align: right;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7QUFRSjs7QUFOQTtFQUNJLDJCQUFBO0FBU0o7O0FBUEE7RUFDSSxjQUFBO0FBVUo7O0FBUkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFXSjs7QUFSQTtFQUNJLHFCQUFBO0FBV0o7O0FBVEE7RUFDSSx5QkFBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksY0FBQTtBQWNKOztBQVpBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUFlSjs7QUFaRTtFQUNFLHlDQUFBO0FBZUo7O0FBYkU7RUFDRSx5QkFBQTtBQWdCSjs7QUFkQTtFQUNJLHlCQUFBO0FBaUJKOztBQWZBO0VBQ0kseUJBQUE7QUFrQko7O0FBaEJBO0VBQ0kseUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksWUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxTQUFBO0FBcUJKOztBQW5CQTtFQUNJLGlCQUFBO0FBc0JKOztBQW5CQTtFQUNJLG9DQUFBO0VBQ0EsMkJBQUE7QUFzQko7O0FBbkJBO0VBQ0ksb0NBQUE7RUFDQSx5RUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0FBc0JKOztBQXBCQTtFQUNJLGtCQUFBO0FBdUJKOztBQXBCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQXVCSjs7QUFwQkU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXVCSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWdpZntcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLnJlZHtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi5iZ2h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDAuN2VtO1xyXG59XHJcbi5tdHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lcntcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLnByb2ZpbGUtcGhvdG8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbn1cclxuLlByb2ZsZU5hbWV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxufVxyXG4uUHJvZmxlQ2l0eXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbmlvbi1zZWxlY3R7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlbGVjdC1tZCAuc2VsZWN0LWljb24gLnNlbGVjdC1pY29uLWlubmVye1xyXG4gICAgY29sb3I6I2I0MDQwNDtcclxufVxyXG4ubGFuZ3VhZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOWVtO1xyXG4gICAgXHJcbn1cclxuLnJhZGlvLW1kIC5yYWRpby1jaGVja2VkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2IyMDQwNDtcclxufVxyXG4ucmFkaW8tbWQgLnJhZGlvLWlubmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyMDQwNDtcclxufVxyXG4uaXRlbS1yYWRpby1jaGVja2VkLml0ZW0tbWQgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICNiMjA0MDQ7XHJcbn1cclxuLml0ZW0taW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtzdGFja2VkXSwgLmlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbc3RhY2tlZF0sIC5pdGVtLWlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbZmxvYXRpbmddLCAuaW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtmbG9hdGluZ10ge1xyXG4gICAgY29sb3I6ICNiMjA0MDQ7XHJcbn1cclxuaW9uLXRvZ2dsZXtcclxuICAgIC0tYmFja2dyb3VuZDojZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6I2IyMDQwNDtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6I2ZmZjtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDojZmZmO1xyXG4gICAgXHJcbiAgfVxyXG4gIC50b2dnbGUtaW5uZXJ7XHJcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTgwLCA0LCA0LCAwLjI2KTtcclxuICB9XHJcbiAgLnRvZ2dsZS1tZC50b2dnbGUtY2hlY2tlZCAudG9nZ2xlLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0MDQwNDtcclxufVxyXG4udG9nZ2xlLWlvcy50b2dnbGUtY2hlY2tlZCAudG9nZ2xlLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0MDQwNDtcclxufVxyXG4udG9nZ2xlLW1kLnRvZ2dsZS1jaGVja2VkIC50b2dnbGUtaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi50b2dnbGUtaW9zLnRvZ2dsZS1jaGVja2VkIC50b2dnbGUtaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi50b2dnbGUtbWR7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbn1cclxuLnRvZ2dsZS1tZCAudG9nZ2xlLWlubmVye1xyXG4gICAgdG9wOiAtMXB4O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLnVwZGF0ZWJ0bi5idXR0b24tbWQgLC51cGRhdGVidG4uYnV0dG9uLWlvc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1kYW5nZXIge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyNDAsIDY1LCA2NSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXNoYWRlOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci10aW50OiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b257XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgfVxyXG5cclxuICAuc3BhblRpdGxle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/setting/setting.page.ts":
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _alerterror_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alerterror.service */ "./src/app/alerterror.service.ts");
/* harmony import */ var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseauth.service */ "./src/app/firebaseauth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");







let SettingPage = class SettingPage {
    constructor(menuCtrl, toastController, restService, storage, alertService, firebase) {
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.restService = restService;
        this.storage = storage;
        this.alertService = alertService;
        this.firebase = firebase;
        this.userId = '';
        this.name = '';
        this.profileImage = '';
        this.loaderShow = false;
        this.allowDiscount = false;
    }
    ngOnInit() {
        this.storage.get('restaurant_name').then(restaurant_name => {
            this.restaurantName = restaurant_name;
        });
        this.storage.get('perTimeslotBookings').then(perTimeslotBookings => {
            this.storage.get('allowDiscount').then(allowDiscount => {
                this.perTimeslotBookings = perTimeslotBookings;
                this.allowDiscount = allowDiscount;
            });
        });
        this.storage.get('restaurants_id').then(restaurants_id => {
            var stringy = JSON.stringify({
                requestType: 'get_settings',
                restaurantId: restaurants_id
            });
            this.restService.setting(stringy).subscribe(response => {
                this.getSetting = JSON.parse(response['_body']);
                console.log('setting:  ' + this.getSetting);
                this.perTimeslotBookings = this.getSetting.settings.per_time_slot_booking_cont;
                this.address = this.getSetting.settings.location;
                console.log(this.address.settings);
                this.openingTime = this.getSetting.settings.opening_time;
                if (this.getSetting.settings.allow_discounts == 'Yes') {
                    this.allowDiscount = true;
                }
                else {
                    this.allowDiscount = false;
                }
            }, err => {
                //this.loader.hideLoader();
                this.alertService.presentAlertService(err);
            });
        });
    }
    updatebtn() {
        this.storage.get('restaurants_id').then(restaurants_id => {
            if (this.allowDiscount == true) {
                this.allowDiscounts = 'Yes';
            }
            else {
                this.allowDiscounts = 'No';
            }
            console.log(this.allowDiscounts);
            var stringy = JSON.stringify({
                requestType: 'update_settings',
                restaurantId: restaurants_id,
                perTimeslotBookings: this.perTimeslotBookings,
                allowDiscounts: this.allowDiscounts,
                openingTime: this.openingTime,
                address: this.address
            });
            this.restService.updateRestaurantSettings(stringy).subscribe(response => {
                this.settingData = JSON.parse(response['_body']);
                console.log(this.settingData);
                if (this.settingData.status == 'success') {
                    this.storage.set('perTimeslotBookings', this.perTimeslotBookings);
                    this.storage.set('allowDiscount', this.allowDiscount);
                    this.presentToast();
                }
            }, err => {
                //this.loader.hideLoader();
                this.alertService.presentAlertService(err);
            });
        });
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Settings Updated Successfully!',
                duration: 2000
            });
            toast.present();
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _alerterror_service__WEBPACK_IMPORTED_MODULE_2__["AlerterrorService"] },
    { type: _firebaseauth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseauthService"] }
];
SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting.page.scss */ "./src/app/setting/setting.page.scss")).default]
    })
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=setting-setting-module-es2015.js.map