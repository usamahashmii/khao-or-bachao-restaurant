(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selection-selection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selection/selection.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selection/selection.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content no-border fullscreen=\"true\"  class=\"ion-padding work no-scroll\">\n  <ion-row>\n    <ion-col size=\"12\" >\n      <img src=\"assets/imgs/whiteLogo.png\" style=\"width:45%\">\n   </ion-col>\n  </ion-row>\n  <ion-slides class=\"workSlider\" pager #slides (ionSlideWillChange)=\"doCheck()\">\n    <ion-slide>\n      <ion-row size=\"12\" padding>\n        <ion-col size=\"12\"  text-center >\n          <h1 class=\"white\">How It Works?</h1>\n        </ion-col>\n      \n        <ion-col size=\"12\"  text-center >\n           <img src=\"assets/imgs/forks.png\" style=\"width:60%\">\n        </ion-col>\n        <ion-col size=\"12\"  text-center >\n        <p class=\"parah\">\n          Register Your Resturant\n          and add menu items.\n          users will book tables and\n          you should be ready for them :)\n        </p>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide>\n      <ion-row size=\"12\" padding>\n        <ion-col size=\"12\"  text-center >\n          <h1 class=\"white\">How It Works?</h1>\n        </ion-col>\n      \n        <ion-col size=\"12\"  text-center >\n           <img src=\"assets/imgs/barcode.png\" style=\"width:60%\">\n        </ion-col>\n        <ion-col size=\"12\"  text-center >\n        <p class=\"parah\">\n          Customer Will visit your \n          Resturant and will scan a QR-Code\n          that we will provide you.\n          They scan it to mark their attandance.\n        </p>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide>\n      <ion-row size=\"12\" padding>\n        <ion-col size=\"12\"  text-center >\n          <h1 class=\"white\">How It Works?</h1>\n        </ion-col>\n      \n        <ion-col size=\"12\"  text-center >\n           <img src=\"assets/imgs/faq.png\" style=\"width:60%\">\n        </ion-col>\n        <ion-col size=\"12\"  text-center >\n        <p class=\"parah\">\n          If you have any query and question. you can contact us anytime.\n        </p>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n  <ion-row size=\"12\" padding>\n    <ion-col size=\"6\"  text-left >\n      <ion-button  *ngIf=\"!disableSkipBtn\" color=\"light\" shape=\"round\" class=\"opacity skip\" routerLink=\"/resturant-setup\" routerDirection=\"root\">skip</ion-button>\n      <ion-button  *ngIf=\"!disableContactBtn\" color=\"light\" shape=\"round\"  class=\"opacity\">Contact</ion-button>\n    </ion-col>\n    \n    <ion-col size=\"6\"  text-right >\n      <ion-button *ngIf=\"!disableNextBtn\" color=\"light\"  shape=\"round\" class=\"skip\" (click)=\"nextSlide()\" >Next</ion-button>\n      <ion-button *ngIf=\"!disableSetupBtn\" color=\"light\"  shape=\"round\" class=\"skip\"  routerLink=\"/resturant-setup\"  >Next</ion-button>\n    </ion-col>\n  </ion-row>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/selection/selection-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/selection/selection-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SelectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionPageRoutingModule", function() { return SelectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _selection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selection.page */ "./src/app/selection/selection.page.ts");




const routes = [
    {
        path: '',
        component: _selection_page__WEBPACK_IMPORTED_MODULE_3__["SelectionPage"]
    }
];
let SelectionPageRoutingModule = class SelectionPageRoutingModule {
};
SelectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectionPageRoutingModule);



/***/ }),

/***/ "./src/app/selection/selection.module.ts":
/*!***********************************************!*\
  !*** ./src/app/selection/selection.module.ts ***!
  \***********************************************/
/*! exports provided: SelectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionPageModule", function() { return SelectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _selection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection-routing.module */ "./src/app/selection/selection-routing.module.ts");
/* harmony import */ var _selection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection.page */ "./src/app/selection/selection.page.ts");







let SelectionPageModule = class SelectionPageModule {
};
SelectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _selection_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectionPageRoutingModule"]
        ],
        declarations: [_selection_page__WEBPACK_IMPORTED_MODULE_6__["SelectionPage"]]
    })
], SelectionPageModule);



/***/ }),

/***/ "./src/app/selection/selection.page.scss":
/*!***********************************************!*\
  !*** ./src/app/selection/selection.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background-active:#fff;\n}\n\n.white {\n  color: #fff;\n  font-weight: 600;\n  letter-spacing: 2px;\n  font-size: 30px;\n}\n\n.parah {\n  color: #fff;\n  padding: 0px 2em;\n  letter-spacing: 2px;\n  font-size: 16px;\n}\n\nion-button.skip {\n  --padding-start: 40px;\n  --padding-end: 40px;\n}\n\n.ion-color-light {\n  --ion-color-contrast: #b40404 !important;\n}\n\n.opacity {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0aW9uL3NlbGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRywrQkFBQTtBQUNIOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLHdDQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Rpb24vc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXN7XHJcbiAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiNmZmY7XHJcbn1cclxuLndoaXRle1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ucGFyYWh7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweCAyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLnNraXAge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNDBweDtcclxuICB9XHJcbiAgLmlvbi1jb2xvci1saWdodHtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vcGFjaXR5eyAgXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/selection/selection.page.ts":
/*!*********************************************!*\
  !*** ./src/app/selection/selection.page.ts ***!
  \*********************************************/
/*! exports provided: SelectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionPage", function() { return SelectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SelectionPage = class SelectionPage {
    constructor() {
        this.disableSkipBtn = false;
        this.disablePrevBtn = true;
        this.disableNextBtn = false;
        this.disableContactBtn = true;
        this.disableSetupBtn = true;
    }
    ngOnInit() {
    }
    nextSlide() {
        this.slides.slideNext();
    }
    prevSlide() {
        this.slides.slidePrev();
    }
    doCheck() {
        let prom1 = this.slides.isBeginning();
        let prom2 = this.slides.isEnd();
        Promise.all([prom1, prom2]).then((data) => {
            data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
            data[1] ? this.disableNextBtn = false : this.disableNextBtn = false;
            data[1] ? this.disableSkipBtn = true : this.disableSkipBtn = false;
            data[1] ? this.disableContactBtn = false : this.disableContactBtn = true;
            data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
            data[1] ? this.disableSetupBtn = false : this.disableSetupBtn = true;
            // this.router.navigate(['/resturant-setup']
        });
    }
};
SelectionPage.ctorParameters = () => [];
SelectionPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides', { static: false },] }]
};
SelectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./selection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/selection/selection.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./selection.page.scss */ "./src/app/selection/selection.page.scss")).default]
    })
], SelectionPage);



/***/ })

}]);
//# sourceMappingURL=selection-selection-module-es2015.js.map