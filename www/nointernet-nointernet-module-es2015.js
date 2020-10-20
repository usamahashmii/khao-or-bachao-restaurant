(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nointernet-nointernet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background-img\">\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/nointernet/nointernet-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nointernet/nointernet-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NointernetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NointernetPageRoutingModule", function() { return NointernetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nointernet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nointernet.page */ "./src/app/nointernet/nointernet.page.ts");




const routes = [
    {
        path: '',
        component: _nointernet_page__WEBPACK_IMPORTED_MODULE_3__["NointernetPage"]
    }
];
let NointernetPageRoutingModule = class NointernetPageRoutingModule {
};
NointernetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NointernetPageRoutingModule);



/***/ }),

/***/ "./src/app/nointernet/nointernet.module.ts":
/*!*************************************************!*\
  !*** ./src/app/nointernet/nointernet.module.ts ***!
  \*************************************************/
/*! exports provided: NointernetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NointernetPageModule", function() { return NointernetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nointernet-routing.module */ "./src/app/nointernet/nointernet-routing.module.ts");
/* harmony import */ var _nointernet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nointernet.page */ "./src/app/nointernet/nointernet.page.ts");







let NointernetPageModule = class NointernetPageModule {
};
NointernetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__["NointernetPageRoutingModule"]
        ],
        declarations: [_nointernet_page__WEBPACK_IMPORTED_MODULE_6__["NointernetPage"]]
    })
], NointernetPageModule);



/***/ }),

/***/ "./src/app/nointernet/nointernet.page.scss":
/*!*************************************************!*\
  !*** ./src/app/nointernet/nointernet.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-img {\n  background: url('no-internet.png');\n  --background:none;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9pbnRlcm5ldC9ub2ludGVybmV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ub2ludGVybmV0L25vaW50ZXJuZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1ne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL25vLWludGVybmV0LnBuZyk7XHJcbiAgICAtLWJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/nointernet/nointernet.page.ts":
/*!***********************************************!*\
  !*** ./src/app/nointernet/nointernet.page.ts ***!
  \***********************************************/
/*! exports provided: NointernetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NointernetPage", function() { return NointernetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");



let NointernetPage = class NointernetPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
};
NointernetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
NointernetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nointernet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nointernet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nointernet.page.scss */ "./src/app/nointernet/nointernet.page.scss")).default]
    })
], NointernetPage);



/***/ })

}]);
//# sourceMappingURL=nointernet-nointernet-module-es2015.js.map