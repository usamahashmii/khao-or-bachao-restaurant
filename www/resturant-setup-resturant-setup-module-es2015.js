(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resturant-setup-resturant-setup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-setup/resturant-setup.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-setup/resturant-setup.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content  no-border fullscreen=\"true\"  class=\"ion-padding background no-scroll\">\n \n  <form [formGroup]=\"resturantForm\">\n\n\n  <ion-list class=\"items-middle\" class=\"ion-text-center\">\n   <ion-row>\n      <ion-col style=\"padding-left: 0px;\" class=\"ion-text-left\" size=\"col-4\">\n          <img src=\"assets/imgs/khaobchao.png\" width=\"45%\">\n      </ion-col>\n    </ion-row>\n   \n     <h3 class=\"main_heading ion-text-left\">Resturant Setup</h3>\n    <p class=\"font-color ion-text-left\">\n      Please Enter Your Resturant Details.\n    </p>\n    <ion-item class=\"itemBottom\">\n      <ion-label color=\"ligh-grey\" position=\"floating\">Resturant Name</ion-label>\n      <ion-input \n      [(ngModel)]=\"resturantName\"\n      formControlName=\"resturantName\" \n      clearInput ></ion-input>\n      \n    </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"resturantForm.get('resturantName').hasError('required') && resturantForm.get('resturantName').touched\">\n        * Please Enter your Resturant Name\n    </div>\n    <ion-item class=\"itemBottom\">\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Branch</ion-label>\n      <ion-input \n      [(ngModel)]=\"Branch\"\n      formControlName=\"Branch\" \n      clearInput \n      ></ion-input>\n    </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"resturantForm.get('Branch').hasError('required') && resturantForm.get('Branch').touched\">\n        * Please Enter your Branch\n    </div>\n    \n\n    <ion-item class=\"itemBottom\">\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Location</ion-label>\n      <ion-input \n      [(ngModel)]=\"resturantLocation\"\n      formControlName=\"resturantLocation\" \n      clearInput \n      ></ion-input>\n    </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"resturantForm.get('resturantLocation').hasError('required') && resturantForm.get('resturantLocation').touched\">\n      * Please Enter your Resturant Location\n    </div>\n\n    <ion-item class=\"itemBottom\">\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Phone Number</ion-label>\n      <ion-input \n      [(ngModel)]=\"resturantNumber\"\n      formControlName=\"resturantNumber\" \n      clearInput \n      ></ion-input>\n    </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"resturantForm.get('resturantNumber').hasError('required') && resturantForm.get('resturantNumber').touched\">\n      * Please Enter your Phone Number\n    </div>\n    <ion-row>\n      <ion-col text-left>\n          <p class=\"openDays\">Open Days</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col size=\"4\" text-left>\n        <p>Monday</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n         <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"mondayDate1\" formControlName=\"mondayDate1\"  placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n          <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"mondayDate2\"  formControlName=\"mondayDate2\" placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\" text-left>\n        <p>Tuesday</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n         <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"tuesdayDate1\"  formControlName=\"tuesdayDate1\"  placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n          <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"tuesdayDate2\"  formControlName=\"tuesdayDate2\" placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\" text-left>\n        <p>Wednesday</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n         <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"wednesdayDate1\"  formControlName=\"wednesdayDate1\" placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n          <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"wednesdayDate2\"  formControlName=\"wednesdayDate2\" placeholder=\"00:00 pm\" ></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\" text-left>\n        <p>Thursday</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n         <ion-datetime  displayFormat=\"h:mm a\"  [(ngModel)]=\"thursdayDate1\" formControlName=\"thursdayDate1\" placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n          <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"thursdayDate2\" formControlName=\"thursdayDate2\" placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\" text-left>\n        <p>Friday</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n         <ion-datetime  displayFormat=\"h:mm a\" [(ngModel)]=\"fridayDate1\"  formControlName=\"fridayDate1\" placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item >\n          <ion-datetime  displayFormat=\"h:mm a\"  [(ngModel)]=\"fridayDate2\" formControlName=\"fridayDate2\" placeholder=\"00:00 pm\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-button class=\"button-login\" color=\"danger\" shape=\"round\" (click)=\"OpenPayment()\">Continue</ion-button>\n  </ion-list>\n</form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/resturant-setup/resturant-setup-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resturant-setup/resturant-setup-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ResturantSetupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantSetupPageRoutingModule", function() { return ResturantSetupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resturant_setup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resturant-setup.page */ "./src/app/resturant-setup/resturant-setup.page.ts");




const routes = [
    {
        path: '',
        component: _resturant_setup_page__WEBPACK_IMPORTED_MODULE_3__["ResturantSetupPage"]
    }
];
let ResturantSetupPageRoutingModule = class ResturantSetupPageRoutingModule {
};
ResturantSetupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResturantSetupPageRoutingModule);



/***/ }),

/***/ "./src/app/resturant-setup/resturant-setup.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/resturant-setup/resturant-setup.module.ts ***!
  \***********************************************************/
/*! exports provided: ResturantSetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantSetupPageModule", function() { return ResturantSetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _resturant_setup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resturant-setup-routing.module */ "./src/app/resturant-setup/resturant-setup-routing.module.ts");
/* harmony import */ var _resturant_setup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resturant-setup.page */ "./src/app/resturant-setup/resturant-setup.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let ResturantSetupPageModule = class ResturantSetupPageModule {
};
ResturantSetupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _resturant_setup_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResturantSetupPageRoutingModule"]
        ],
        declarations: [_resturant_setup_page__WEBPACK_IMPORTED_MODULE_5__["ResturantSetupPage"]]
    })
], ResturantSetupPageModule);



/***/ }),

/***/ "./src/app/resturant-setup/resturant-setup.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/resturant-setup/resturant-setup.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.new-background-color {\n  --background:transparent;\n}\n\nion-input {\n  color: #b40404;\n}\n\nion-label {\n  color: #bfbfbf !important;\n}\n\nion-icon {\n  color: #b40404;\n  margin-top: 15px;\n}\n\nion-list {\n  background: none !important;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\n.no-scroll .scroll-content {\n  overflow: hidden;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n}\n\n.itemBottom {\n  margin-bottom: 0.6em;\n}\n\n.icon {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  letter-spacing: 2px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  box-shadow: none !important;\n  margin-top: 2em;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  padding-bottom: 0px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-md.button.button-md.button-default.button-default-md.button-menutoggle.button-menutoggle-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-ios.button.button-ios.button-default.button-default-ios.button-menutoggle.button-menutoggle-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.name-validation {\n  color: #b40404;\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 1px;\n}\n\n.openDays {\n  color: #b40404;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-datetime {\n  padding: 0px;\n}\n\n.errorMessage {\n  color: #b40404;\n  text-align: left;\n  position: relative;\n  top: -7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdHVyYW50LXNldHVwL3Jlc3R1cmFudC1zZXR1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxrQkFBQTtBQUFIOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksd0JBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLDJCQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxnQkFBQTtBQVNKOztBQVBBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFVRjs7QUFSQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFUQTtFQUNJLG9CQUFBO0FBWUo7O0FBVkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFhSjs7QUFYQTtFQUNJLDJCQUFBO0FBY0o7O0FBWkE7RUFDSSwwQkFBQTtBQWVKOztBQWJBO0VBRUksa0NBQUE7QUFnQko7O0FBYkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFnQko7O0FBYkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWdCSjs7QUFkQTtFQUNJLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksY0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFtQko7O0FBaEJBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFtQkE7O0FBakJBO0VBRUksbUJBQUE7QUFtQko7O0FBakJBO0VBQ0ssa0JBQUE7RUFDRCxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFvQko7O0FBbEJBO0VBQ0ksY0FBQTtBQXFCSjs7QUFuQkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBc0JKOztBQXBCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUF1Qko7O0FBckJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBeUJKOztBQXZCQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMEJKOztBQXhCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTJCSjs7QUF6QkE7RUFDSSxZQUFBO0FBNEJKOztBQTFCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQTZCSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3R1cmFudC1zZXR1cC9yZXN0dXJhbnQtc2V0dXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2FkZXItZ2lmLXJvd3tcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2FkZXItZ2lme1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4ubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lcnsgXHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICNiZmJmYmYgIWltcG9ydGFudDtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cy5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBjb2xvcjojYjQwNDA0O1xyXG59XHJcbi5uby1zY3JvbGwgLnNjcm9sbC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4ubGFiZWx7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG59ICBcclxuLml0ZW17XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG4uaXRlbUJvdHRvbXtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNmVtO1xyXG59XHJcbi5pY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi5pdGVtLWlubmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5sYWJlbC1pb3NbZmxvYXRpbmddICwgLmxhYmVsLW1kW2Zsb2F0aW5nXSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG59XHJcblxyXG4ubWFpbl9oZWFkaW5ne1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLmZvbnQtY29sb3J7XHJcbiAgICBjb2xvcjogI2JmYmZiZjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uaW9uLWNvbG9yLWRhbmdlcntcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5pbnB1dCxhICwucGFye1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbn1cclxuLm9uZVRhcHtcclxuICAgIGNvbG9yOiAjMzg1YzhlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5vcntcclxuY29sb3I6ICNiNDA0MDQ7XHJcbm1hcmdpbjogMHB4O1xyXG59XHJcbi5uZXdVc2Vye1xyXG4gICAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgI2M3YzdjNztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLmxhc3RSb3d7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG4uaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW3N0YWNrZWRdLCAuaW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtzdGFja2VkXSwgLml0ZW0taW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtmbG9hdGluZ10sIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSB7XHJcbiAgICBjb2xvcjogI2IyMDQwNDtcclxufVxyXG5idXR0b24uZGlzYWJsZS1ob3Zlci5iYXItYnV0dG9ucy5iYXItYnV0dG9ucy1tZC5idXR0b24uYnV0dG9uLW1kLmJ1dHRvbi1kZWZhdWx0LmJ1dHRvbi1kZWZhdWx0LW1kLmJ1dHRvbi1tZW51dG9nZ2xlLmJ1dHRvbi1tZW51dG9nZ2xlLW1ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuYnV0dG9uLmRpc2FibGUtaG92ZXIuYmFyLWJ1dHRvbnMuYmFyLWJ1dHRvbnMtaW9zLmJ1dHRvbi5idXR0b24taW9zLmJ1dHRvbi1kZWZhdWx0LmJ1dHRvbi1kZWZhdWx0LWlvcy5idXR0b24tbWVudXRvZ2dsZS5idXR0b24tbWVudXRvZ2dsZS1pb3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnV0dG9uLW1ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1pb3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ubmFtZS12YWxpZGF0aW9ue1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbi5vcGVuRGF5c3tcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5lcnJvck1lc3NhZ2V7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC03cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/resturant-setup/resturant-setup.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/resturant-setup/resturant-setup.page.ts ***!
  \*********************************************************/
/*! exports provided: ResturantSetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantSetupPage", function() { return ResturantSetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let ResturantSetupPage = class ResturantSetupPage {
    constructor(router, navCtrl, formBuilder) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.isSubmit = true;
        this.resturantName = '';
        this.Branch = '';
        this.resturantLocation = '';
        this.resturantNumber = '';
        this.mondayDate1 = '';
        this.mondayDate2 = '';
        this.tuesdayDate1 = '';
        this.tuesdayDate2 = '';
        this.wednesdayDate1 = '';
        this.wednesdayDate2 = '';
        this.thursdayDate1 = '';
        this.thursdayDate2 = '';
        this.fridayDate1 = '';
        this.fridayDate2 = '';
        this.resturantForm = formBuilder.group({
            resturantName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            Branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            resturantLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            resturantNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            mondayDate1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mondayDate2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tuesdayDate1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tuesdayDate2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            wednesdayDate1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            wednesdayDate2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            thursdayDate1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            thursdayDate2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fridayDate1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fridayDate2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    OpenPayment() {
        if (!this.resturantForm.valid) {
            console.log('Please provide all the required values!');
            this.isSubmit = false;
            return false;
        }
        else {
            var ex = this.mondayDate1.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.mondayDate1 = ex1[0];
            var ex = this.mondayDate2.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.mondayDate2 = ex1[0];
            var ex = this.tuesdayDate1.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.tuesdayDate1 = ex1[0];
            var ex = this.tuesdayDate2.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.tuesdayDate2 = ex1[0];
            var ex = this.wednesdayDate1.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.wednesdayDate1 = ex1[0];
            var ex = this.wednesdayDate2.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.wednesdayDate2 = ex1[0];
            var ex = this.thursdayDate1.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.thursdayDate1 = ex1[0];
            var ex = this.thursdayDate2.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.thursdayDate2 = ex1[0];
            var ex = this.fridayDate1.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.fridayDate1 = ex1[0];
            var ex = this.fridayDate2.split('T', 5)[1];
            var ex1 = ex.split('.');
            this.fridayDate2 = ex1[0];
            var myData = JSON.stringify({
                resturantName: this.resturantName,
                Branch: this.Branch,
                resturantLocation: this.resturantLocation,
                resturantNumber: this.resturantNumber,
                mondayDate1: this.mondayDate1,
                mondayDate2: this.mondayDate2,
                tuesdayDate1: this.tuesdayDate1,
                tuesdayDate2: this.tuesdayDate2,
                wednesdayDate1: this.wednesdayDate1,
                wednesdayDate2: this.wednesdayDate2,
                thursdayDate1: this.thursdayDate1,
                thursdayDate2: this.thursdayDate2,
                fridayDate1: this.fridayDate1,
                fridayDate2: this.fridayDate2
            });
            console.log(myData);
            this.router.navigate(['/resturant-payment'], {
                queryParams: {
                    value: myData
                },
            });
        }
    }
};
ResturantSetupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ResturantSetupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resturant-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-setup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-setup/resturant-setup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-setup.page.scss */ "./src/app/resturant-setup/resturant-setup.page.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ResturantSetupPage);



/***/ })

}]);
//# sourceMappingURL=resturant-setup-resturant-setup-module-es2015.js.map