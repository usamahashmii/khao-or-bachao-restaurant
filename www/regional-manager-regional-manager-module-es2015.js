(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regional-manager-regional-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/regional-manager/regional-manager.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regional-manager/regional-manager.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header_background\">\n  <ion-row class=\"bgh\">\n    <ion-col size=\"4\"  class=\"ion-text-left\">\n     <span (click)=\"toggleMenu()\">\n       <img src=\"assets/imgs/dots.svg\" width=\"68px\" > \n     </span> \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center mt\">\n      {{restaurantName}}\n    </ion-col>\n    <ion-col size=\"4\"  class=\"ion-text-right\">\n      Regional Mananger\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"mtop\">\n      <ion-col class=\"ion-text-center\">\n        <img src=\"assets/imgs/event-img-profile.png\">\n        <label class=\"pname\">Name</label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <label>Phone Number</label>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <p>+92373747493</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <label>Whatsapp Number</label>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <p>+92373747493</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <label>Email</label>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n          <p>khaobchao@support.com</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class=\"pdh\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>\n      </ion-col>\n    </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/regional-manager/regional-manager-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/regional-manager/regional-manager-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegionalManagerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionalManagerPageRoutingModule", function() { return RegionalManagerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _regional_manager_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regional-manager.page */ "./src/app/regional-manager/regional-manager.page.ts");




const routes = [
    {
        path: '',
        component: _regional_manager_page__WEBPACK_IMPORTED_MODULE_3__["RegionalManagerPage"]
    }
];
let RegionalManagerPageRoutingModule = class RegionalManagerPageRoutingModule {
};
RegionalManagerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegionalManagerPageRoutingModule);



/***/ }),

/***/ "./src/app/regional-manager/regional-manager.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/regional-manager/regional-manager.module.ts ***!
  \*************************************************************/
/*! exports provided: RegionalManagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionalManagerPageModule", function() { return RegionalManagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _regional_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./regional-manager-routing.module */ "./src/app/regional-manager/regional-manager-routing.module.ts");
/* harmony import */ var _regional_manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./regional-manager.page */ "./src/app/regional-manager/regional-manager.page.ts");







let RegionalManagerPageModule = class RegionalManagerPageModule {
};
RegionalManagerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _regional_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegionalManagerPageRoutingModule"]
        ],
        declarations: [_regional_manager_page__WEBPACK_IMPORTED_MODULE_6__["RegionalManagerPage"]]
    })
], RegionalManagerPageModule);



/***/ }),

/***/ "./src/app/regional-manager/regional-manager.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/regional-manager/regional-manager.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgh {\n  background: #b40404 !important;\n  color: #fff;\n  padding: 0.3em 0.7em;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.pname {\n  display: block;\n  margin-top: 0.4em;\n  font-size: 25px;\n}\n\nlabel {\n  color: #b40404;\n}\n\n.mtop {\n  margin-top: 1em;\n}\n\n.pdh {\n  padding: 0em 1em;\n  text-align: center;\n}\n\np {\n  margin: 4px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaW9uYWwtbWFuYWdlci9yZWdpb25hbC1tYW5hZ2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvcmVnaW9uYWwtbWFuYWdlci9yZWdpb25hbC1tYW5hZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDAuN2VtO1xyXG59XHJcbi5tdHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnBuYW1le1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGNvbG9yOiNiNDA0MDQ7XHJcbn1cclxuLm10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuLnBkaHtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucHtcclxuICAgIG1hcmdpbjogNHB4IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/regional-manager/regional-manager.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/regional-manager/regional-manager.page.ts ***!
  \***********************************************************/
/*! exports provided: RegionalManagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionalManagerPage", function() { return RegionalManagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let RegionalManagerPage = class RegionalManagerPage {
    constructor(storage, menuCtrl, toastController) {
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.storage.get('restaurant_name').then(restaurant_name => {
            this.restaurantName = restaurant_name;
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
RegionalManagerPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
RegionalManagerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-regional-manager',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./regional-manager.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/regional-manager/regional-manager.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./regional-manager.page.scss */ "./src/app/regional-manager/regional-manager.page.scss")).default]
    })
], RegionalManagerPage);



/***/ })

}]);
//# sourceMappingURL=regional-manager-regional-manager-module-es2015.js.map