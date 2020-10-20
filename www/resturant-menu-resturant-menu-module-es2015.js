(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resturant-menu-resturant-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-menu/resturant-menu.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-menu/resturant-menu.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header_background\">\n  <ion-row class=\"bgh\">\n    <ion-col size=\"4\"  class=\"ion-text-left\">\n     <span (click)=\"toggleMenu()\">\n       <img src=\"assets/imgs/dots.svg\" width=\"68px\" > \n     </span> \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center mt\">\n      {{restaurantName}}\n    </ion-col>\n    <ion-col size=\"4\"  class=\"ion-text-right mt\">\n      Menu\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content  no-border fullscreen=\"true\"  class=\"ion-padding background no-scroll\">\n  <!--<img (click)=\"toggleMenu()\" *ngIf=\"!resturantSetup\" src=\"assets/imgs/headerLogo.png\">-->\n\n  <ion-list class=\"items-middle\" class=\"ion-text-center\">\n    <h3 class=\"main_heading ion-text-left\">Menu Adding</h3>\n    <p class=\"font-color ion-text-left\">\n      Please Enter Your Resturant Menu Details.\n    </p>\n  </ion-list>\n  <!--Array in form-->\n  <ion-list  class=\"items-middle\" class=\"ion-text-center\">\n   \n    <ion-row *ngIf=\"menuImg == null || menuImg == ''\"  >\n      <ion-col class=\"addImage\" (click)=\"takeProfilePicture()\" text-center>\n         <ion-icon ios=\"ios-add\" md=\"md-add\"   ></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"menuImg != null && menuImg != ''\"  >\n      <ion-col class=\"addImage \" (click)=\"takeProfilePicture()\" text-center>\n          <img src=\"{{ menuImg }}\" class=\"img_height\" >\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"addMenuform\">\n\n     <ion-item class=\"itemBottom\">\n       <ion-icon class=\"icon-color\" class=\"ion-text-left\" ios=\"ios-locate\" md=\"md-locate\" slot=\"start\"></ion-icon>\n       <ion-label color=\"ligh-grey\" position=\"floating\">Categories</ion-label>\n     \n      <ion-select [(ngModel)]=\"categoryItemValue\" formControlName=\"categoryItemValue\" >\n        <ion-select-option *ngFor=\"let cat of category\"value=\"{{cat.categories_id}}\">\n          {{cat.name}}\n        </ion-select-option>\n      </ion-select>\n     </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"addMenuform.get('categoryItemValue').hasError('required') && addMenuform.get('categoryItemValue').touched\">\n      * Please select a category\n    </div>\n     <ion-item class=\"itemBottom\">\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Item Name</ion-label>\n      <ion-input \n       clearInput [(ngModel)]=\"inputItemValue\" formControlName=\"inputItemValue\"\n       ></ion-input>\n    </ion-item>\n    <div class=\"errorMessage\" *ngIf=\"addMenuform.get('inputItemValue').hasError('required') && addMenuform.get('inputItemValue').touched\">\n      * Please enter item name\n    </div>\n    <ion-item class=\"itemBottom\">\n       <ion-icon class=\"icon-color\" class=\"ion-text-left\" ios=\"ios-disc\" md=\"md-disc\" slot=\"start\"></ion-icon>\n        <ion-label color=\"ligh-grey\" position=\"floating\" >Meaurment</ion-label>\n        <ion-select [(ngModel)]=\"selectMeasurementValue\" formControlName=\"selectMeasurementValue\">\n        <ion-select-option value=\"plate\">Plate</ion-select-option>\n        <ion-select-option value=\"dish\">Dish</ion-select-option>\n      </ion-select>\n   </ion-item>\n   <div class=\"errorMessage\" *ngIf=\"addMenuform.get('selectMeasurementValue').hasError('required') && addMenuform.get('selectMeasurementValue').touched\">\n    * Please select a meaurment\n    </div>\n   <ion-item class=\"itemBottom\">\n    <ion-icon class=\"icon-color\" class=\"ion-text-left\" ios=\"ios-disc\" md=\"md-disc\" slot=\"start\"></ion-icon>\n    <ion-label color=\"ligh-grey\" position=\"floating\" >Quantity</ion-label>\n    <ion-select [(ngModel)]=\"selectQuantityValue\" formControlName=\"selectQuantityValue\">\n     <ion-select-option value=\"1\">Plate 1</ion-select-option>\n     <ion-select-option value=\"2\">Plate 2</ion-select-option>\n     <ion-select-option value=\"3\">Plate 3</ion-select-option>\n   </ion-select>\n  </ion-item>\n  <div class=\"errorMessage\" *ngIf=\"addMenuform.get('selectQuantityValue').hasError('required') && addMenuform.get('selectQuantityValue').touched\">\n    * Please select a quantity\n  </div>\n  <ion-item class=\"itemBottom\">\n    <ion-icon class=\"icon-color\" class=\"ion-text-left\" ios=\"ios-disc\" md=\"md-disc\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Price Range</ion-label>\n      <ion-select [(ngModel)]=\"priceRange\" formControlName=\"priceRange\">\n      <ion-select-option value=\"$\">$</ion-select-option>\n      <ion-select-option value=\"$$\">$$</ion-select-option>\n      <ion-select-option value=\"$$$\">$$$</ion-select-option>\n      <ion-select-option value=\"$$$$\">$$$$</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div class=\"errorMessage\" *ngIf=\"addMenuform.get('priceRange').hasError('required') && addMenuform.get('priceRange').touched\">\n    * Please select a Price Range\n  </div>\n  <ion-item class=\"itemBottom\">\n    <ion-icon ios=\"ios-cash\" class=\"ion-text-left\" md=\"md-cash\" slot=\"start\"></ion-icon>\n    <ion-label color=\"ligh-grey\" position=\"floating\" >Price</ion-label>\n    <ion-input \n    clearInput [(ngModel)]=\"inputPriceValue\" formControlName=\"inputPriceValue\"\n    ></ion-input>\n  </ion-item>\n  <div class=\"errorMessage\" *ngIf=\"addMenuform.get('inputPriceValue').hasError('required') && addMenuform.get('inputPriceValue').touched\">\n    * Please enter a price\n  </div>  \n\n<ion-row>\n  <ion-col size=\"12\" text-center>\n    <ion-button (click)=\"submitItemData()\" class=\"button-login\" color=\"danger\" shape=\"round\" >Continue</ion-button>\n  </ion-col>\n</ion-row>\n</form>\n   </ion-list>\n  \n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/resturant-menu/resturant-menu-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/resturant-menu/resturant-menu-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResturantMenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantMenuPageRoutingModule", function() { return ResturantMenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resturant_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resturant-menu.page */ "./src/app/resturant-menu/resturant-menu.page.ts");




const routes = [
    {
        path: '',
        component: _resturant_menu_page__WEBPACK_IMPORTED_MODULE_3__["ResturantMenuPage"]
    }
];
let ResturantMenuPageRoutingModule = class ResturantMenuPageRoutingModule {
};
ResturantMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResturantMenuPageRoutingModule);



/***/ }),

/***/ "./src/app/resturant-menu/resturant-menu.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/resturant-menu/resturant-menu.module.ts ***!
  \*********************************************************/
/*! exports provided: ResturantMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantMenuPageModule", function() { return ResturantMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _resturant_menu_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resturant-menu-routing.module */ "./src/app/resturant-menu/resturant-menu-routing.module.ts");
/* harmony import */ var _resturant_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resturant-menu.page */ "./src/app/resturant-menu/resturant-menu.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let ResturantMenuPageModule = class ResturantMenuPageModule {
};
ResturantMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
            _resturant_menu_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResturantMenuPageRoutingModule"]
        ],
        declarations: [_resturant_menu_page__WEBPACK_IMPORTED_MODULE_5__["ResturantMenuPage"]]
    })
], ResturantMenuPageModule);



/***/ }),

/***/ "./src/app/resturant-menu/resturant-menu.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/resturant-menu/resturant-menu.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.new-background-color {\n  --background:transparent;\n}\n\nion-input {\n  color: #b40404;\n}\n\nion-label {\n  color: #bfbfbf !important;\n}\n\nion-icon {\n  color: #b40404;\n  margin-top: 15px;\n  margin-right: 0.5em;\n}\n\nion-list {\n  background: none !important;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\n.no-scroll .scroll-content {\n  overflow: hidden;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n}\n\n.itemBottom {\n  margin-bottom: 0.6em;\n}\n\n.icon {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  letter-spacing: 2px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  box-shadow: none !important;\n  margin-top: 2em;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  padding-bottom: 0px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-md.button.button-md.button-default.button-default-md.button-menutoggle.button-menutoggle-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-ios.button.button-ios.button-default.button-default-ios.button-menutoggle.button-menutoggle-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.name-validation {\n  color: #b40404;\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 1px;\n}\n\n.openDays {\n  color: #b40404;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-datetime {\n  padding: 0px;\n}\n\n.oneLine {\n  display: flex;\n  width: 100%;\n  margin: 0px;\n}\n\n.half {\n  width: 50%;\n}\n\n.add_more {\n  color: #b40404;\n  font-size: 19px;\n  margin: 0px;\n  position: absolute;\n  top: -16px;\n}\n\n.add_more ion-icon {\n  font-size: 32px;\n  margin: 0px;\n  margin-top: 4px;\n  position: relative;\n  top: 7px;\n}\n\nion-menu-button {\n  width: 75px;\n  margin-left: 9px;\n}\n\n.spanTitle {\n  float: right;\n  margin-right: 1em;\n  color: #fff !important;\n  font-size: 16px;\n  width: 106px;\n  text-align: right;\n  line-height: 20px;\n}\n\n.addImage {\n  border: 1px solid #b40404;\n  border-radius: 16px;\n  margin: 6px;\n}\n\n.addImage ion-icon {\n  font-size: 40px;\n  color: #b40404;\n  vertical-align: middle;\n  padding: 1.7em 0em;\n  margin: 0px;\n}\n\n.img_height {\n  height: 168px;\n}\n\n.errorMessage {\n  color: #b40404;\n  text-align: left;\n  position: relative;\n  top: -7px;\n}\n\n.ion-invalid.label-floating.sc-ion-label-md-h, .ion-invalid .label-floating.sc-ion-label-md-h {\n  transform: translate3d(0, 100%, 0);\n}\n\n.ion-invalid ion-select {\n  position: relative;\n  top: -8px;\n}\n\n.bgh {\n  background: #b40404 !important;\n  color: #fff;\n  padding: 0.3em 0.7em;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.label-floating.sc-ion-label-ios-h {\n  transform: translate3d(0, 8px, 0);\n}\n\n.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value .label-floating.sc-ion-label-ios-h {\n  transform: translateZ(0) scale(0.8) !important;\n}\n\nion-input {\n  position: absolute;\n  top: 25%;\n}\n\nion-item {\n  --min-height: 58px;\n}\n\nion-select.ios {\n  top: -15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdHVyYW50LW1lbnUvcmVzdHVyYW50LW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQztFQUNJLFVBQUE7QUFDTDs7QUFDQztFQUNJLFlBQUE7QUFFTDs7QUFBQztFQUNJLHdCQUFBO0FBR0w7O0FBREM7RUFDSSxjQUFBO0FBSUw7O0FBRkM7RUFDSSx5QkFBQTtBQUtMOztBQUhDO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNTDs7QUFKQztFQUNJLDJCQUFBO0FBT0w7O0FBTEM7RUFDSSxjQUFBO0FBUUw7O0FBTkM7RUFDSSxnQkFBQTtBQVNMOztBQVBDO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFVSDs7QUFSQztFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFXTDs7QUFUQztFQUNJLG9CQUFBO0FBWUw7O0FBVkM7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFhTDs7QUFYQztFQUNJLDJCQUFBO0FBY0w7O0FBWkM7RUFDSSwwQkFBQTtBQWVMOztBQWJDO0VBRUksa0NBQUE7QUFnQkw7O0FBYkM7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFnQkw7O0FBYkM7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWdCTDs7QUFkQztFQUNJLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBaUJMOztBQWZDO0VBQ0ksY0FBQTtBQWtCTDs7QUFoQkM7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFtQkw7O0FBaEJDO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFtQkQ7O0FBakJDO0VBRUksbUJBQUE7QUFtQkw7O0FBakJDO0VBQ0ssa0JBQUE7RUFDRCxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFvQkw7O0FBbEJDO0VBQ0ksY0FBQTtBQXFCTDs7QUFuQkM7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBc0JMOztBQXBCQztFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUF1Qkw7O0FBckJDO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQXdCTDs7QUF0QkM7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBeUJMOztBQXZCQztFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMEJMOztBQXhCQztFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTJCTDs7QUF6QkM7RUFDSSxZQUFBO0FBNEJMOztBQTFCQztFQUNHLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQTZCSjs7QUEzQkM7RUFDRyxVQUFBO0FBOEJKOztBQTVCQztFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQStCSjs7QUE1QkM7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUErQko7O0FBNUJDO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0FBK0JKOztBQTVCRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBK0JKOztBQTdCRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBZ0NKOztBQTlCQztFQUNHLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksYUFBQTtBQWtDSjs7QUFoQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFtQ0o7O0FBaENBO0VBRUksa0NBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBb0NKOztBQWxDQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBcUNKOztBQW5DQTtFQUNJLGdCQUFBO0FBc0NKOztBQXBDQTtFQUNJLGlDQUFBO0FBdUNKOztBQXJDQTtFQUVJLDhDQUFBO0FBd0NKOztBQXRDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQXlDSjs7QUF2Q0E7RUFDSSxrQkFBQTtBQTBDSjs7QUF4Q0E7RUFDSSxxQkFBQTtBQTJDSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3R1cmFudC1tZW51L3Jlc3R1cmFudC1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9hZGVyLWdpZi1yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAubG9hZGVyLWdpZntcclxuICAgICB3aWR0aDogNjAlO1xyXG4gfVxyXG4gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXJ7IFxyXG4gICAgIGJvcmRlcjpub25lO1xyXG4gfVxyXG4gLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuIH1cclxuIGlvbi1pbnB1dHtcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuIH1cclxuIGlvbi1sYWJlbHtcclxuICAgICBjb2xvcjogI2JmYmZiZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gaW9uLWljb257XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gfVxyXG4gaW9uLWxpc3R7XHJcbiAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLml0ZW0taGFzLWZvY3VzLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtZm9jdXMubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oe1xyXG4gICAgIGNvbG9yOiNiNDA0MDQ7XHJcbiB9XHJcbiAubm8tc2Nyb2xsIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgfVxyXG4gLmxhYmVse1xyXG4gICBtYXJnaW46IDBweDtcclxuICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gfSAgXHJcbiAuaXRlbXtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiB9XHJcbiAuaXRlbUJvdHRvbXtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcclxuIH1cclxuIC5pY29ue1xyXG4gICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiB9XHJcbiAuaXRlbS1pbm5lcntcclxuICAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAudGV4dC1pbnB1dHtcclxuICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgXHJcbiB9XHJcbiAubGFiZWwtaW9zW2Zsb2F0aW5nXSAsIC5sYWJlbC1tZFtmbG9hdGluZ10ge1xyXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG4gfVxyXG4gXHJcbiAubWFpbl9oZWFkaW5ne1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuIH1cclxuIFxyXG4gLmZvbnQtY29sb3J7XHJcbiAgICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gfVxyXG4gLmlvbi1jb2xvci1kYW5nZXJ7XHJcbiAgICAgLS1pb24tY29sb3ItYmFzZTogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiB9XHJcbiBpbnB1dCxhICwucGFye1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gfVxyXG4gLm9uZVRhcHtcclxuICAgICBjb2xvcjogIzM4NWM4ZTtcclxuICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgbWFyZ2luOiAwcHg7XHJcbiB9XHJcbiBcclxuIC5vcntcclxuIGNvbG9yOiAjYjQwNDA0O1xyXG4gbWFyZ2luOiAwcHg7XHJcbiB9XHJcbiAubmV3VXNlcntcclxuICAgICAvL2JvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiB9XHJcbiAubGFzdFJvd3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGJvdHRvbTogMHB4O1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGxlZnQ6IDBweDtcclxuIH1cclxuIC5pdGVtLWlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbc3RhY2tlZF0sIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW3N0YWNrZWRdLCAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSwgLmlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICAgICBjb2xvcjogI2IyMDQwNDtcclxuIH1cclxuIGJ1dHRvbi5kaXNhYmxlLWhvdmVyLmJhci1idXR0b25zLmJhci1idXR0b25zLW1kLmJ1dHRvbi5idXR0b24tbWQuYnV0dG9uLWRlZmF1bHQuYnV0dG9uLWRlZmF1bHQtbWQuYnV0dG9uLW1lbnV0b2dnbGUuYnV0dG9uLW1lbnV0b2dnbGUtbWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gYnV0dG9uLmRpc2FibGUtaG92ZXIuYmFyLWJ1dHRvbnMuYmFyLWJ1dHRvbnMtaW9zLmJ1dHRvbi5idXR0b24taW9zLmJ1dHRvbi1kZWZhdWx0LmJ1dHRvbi1kZWZhdWx0LWlvcy5idXR0b24tbWVudXRvZ2dsZS5idXR0b24tbWVudXRvZ2dsZS1pb3N7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gLmJ1dHRvbi1tZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiB9XHJcbiAuYnV0dG9uLWlvc3tcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiB9XHJcbiAubmFtZS12YWxpZGF0aW9ue1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuIH1cclxuIC5vcGVuRGF5c3tcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgbWFyZ2luOiAwcHg7XHJcbiB9XHJcbiBpb24tZGF0ZXRpbWV7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG4gfVxyXG4gLm9uZUxpbmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuIH1cclxuIC5oYWxme1xyXG4gICAgd2lkdGg6IDUwJTtcclxuIH1cclxuIC5hZGRfbW9yZXtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNnB4O1xyXG4gfVxyXG4gXHJcbiAuYWRkX21vcmUgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogN3B4O1xyXG4gfVxyXG4gXHJcbiBpb24tbWVudS1idXR0b257XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgfVxyXG5cclxuICAuc3BhblRpdGxle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLmFkZEltYWdle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDQwNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXJnaW46IDZweDtcclxuIH1cclxuIC5hZGRJbWFnZSBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDEuN2VtIDBlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5pbWdfaGVpZ2h0e1xyXG4gICAgaGVpZ2h0OjE2OHB4O1xyXG59XHJcbi5lcnJvck1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtN3B4O1xyXG59XHJcblxyXG4uaW9uLWludmFsaWQubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pb24taW52YWxpZCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwxMDAlLDApO1xyXG59XHJcbi5pb24taW52YWxpZCBpb24tc2VsZWN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtOHB4O1xyXG59XHJcbi5iZ2h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDAuN2VtO1xyXG59XHJcbi5tdHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCw4cHgsMCk7XHJcbn1cclxuLml0ZW0taGFzLWZvY3VzLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy1wbGFjZWhvbGRlci5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy1wbGFjZWhvbGRlciAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtdmFsdWUubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtdmFsdWUgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSguOCkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSguOCkgIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tbWluLWhlaWdodDogNThweDtcclxufVxyXG5pb24tc2VsZWN0Lmlvc3tcclxuICAgIHRvcDogLTE1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/resturant-menu/resturant-menu.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/resturant-menu/resturant-menu.page.ts ***!
  \*******************************************************/
/*! exports provided: ResturantMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantMenuPage", function() { return ResturantMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _alerterror_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alerterror.service */ "./src/app/alerterror.service.ts");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toaster.service */ "./src/app/toaster.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











let ResturantMenuPage = class ResturantMenuPage {
    constructor(activatedRoute, restService, loader, alertService, toastService, menuCtrl, storage, alertCtrl, imageService, formBuilder, router) {
        this.activatedRoute = activatedRoute;
        this.restService = restService;
        this.loader = loader;
        this.alertService = alertService;
        this.toastService = toastService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.imageService = imageService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isSubmit = true;
        this.itemName = '';
        this.measurement = '';
        this.quantity = '';
        this.itemPrice = '';
        this.inputArray = [];
        this.inputArrayBool = true;
        this.userId = '';
        //addSingleitem
        this.storage.get('restaurants_id').then(restaurant_id => {
            this.resaturant_id = restaurant_id;
            console.log(this.resaturant_id);
        });
        this.addMenuform = formBuilder.group({
            categoryItemValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            inputItemValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            selectMeasurementValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            selectQuantityValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            priceRange: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            inputPriceValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]
        });
    }
    ionViewWillEnter() {
        var categories = JSON.stringify({
            requestType: 'all',
        });
        this.restService.getMenuCategories().subscribe(response => {
            console.log(response);
            this.category = JSON.parse(response['_body']);
            //this.responseCat = response;
            console.log(this.category);
            this.category = this.category.category_data;
            console.log(this.category);
        }, err => {
            this.alertService.presentAlertService(err);
        });
    }
    ngOnInit() {
        this.storage.get('restaurant_name').then(restaurant_name => {
            this.restaurantName = restaurant_name;
        });
        this.activatedRoute.queryParams.subscribe((res) => {
            this.paymentSetup = res.paymentSetup;
            this.resturantSetup = res.resturantSetup;
            this.imageArray = res.imageArray;
            console.log(this.resturantSetup);
        });
        var categories = JSON.stringify({
            requestType: 'all',
        });
        this.restService.getMenuCategories().subscribe(response => {
            console.log(response);
            this.category = JSON.parse(response['_body']);
            //this.responseCat = response;
            console.log(this.category);
            this.category = this.category.category_data;
            console.log(this.category);
        }, err => {
            this.alertService.presentAlertService(err);
        });
    }
    //Take profile picture
    takeProfilePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: 'Upload profile picture?',
                buttons: [
                    {
                        text: 'Take a photo',
                        handler: () => {
                            this.takeImageFromCamera();
                        }
                    },
                    {
                        text: 'Get photo from gallery',
                        handler: () => {
                            this.getImageFromGallery();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    takeImageFromCamera() {
        this.imageService.selectImageInCamera().then((imageData) => {
            this.menuImg = `data:image/png;base64,${imageData}`;
            var data = this.menuImg.split(';base64,');
            this.serverImageData = data[1];
        }).catch(err => console.error(err));
    }
    getImageFromGallery() {
        this.imageService.selectImageInGallery().then((imageData) => {
            this.menuImg = `data:image/png;base64,${imageData}`;
            var data = this.menuImg.split(';base64,');
            this.serverImageData = data[1];
        }).catch(err => console.error(err));
    }
    submitItemData() {
        if (!this.addMenuform.valid) {
            console.log('Please provide all the required values!');
            this.isSubmit = false;
            return false;
        }
        else {
            this.storage.get('user_accounts_id').then(user_accounts_id => {
                this.userId = user_accounts_id;
                var stringy = JSON.stringify({
                    requestType: 'add',
                    restaurantId: this.resaturant_id,
                    itemName: this.inputItemValue,
                    price: this.inputPriceValue,
                    categoryId: this.categoryItemValue,
                    measurement: this.selectMeasurementValue,
                    quantity: this.selectQuantityValue,
                    itemImage: this.serverImageData,
                    priceRange: this.priceRange
                });
                console.log(stringy);
                this.loader.presentLoader();
                this.restService.saveSingleItem(stringy).subscribe(response => {
                    this.restaurant_data = JSON.parse(response['_body']);
                    console.log(this.restaurant_data);
                    this.menuImg = '';
                    this.categoryItemValue = '';
                    this.inputItemValue = '';
                    this.selectMeasurementValue = '';
                    this.selectQuantityValue = '';
                    this.priceRange = '';
                    this.inputPriceValue = '';
                    this.toastService.presentToastItemAdd();
                    this.router.navigate(['/tabs/menu']);
                    this.loader.hideLoader();
                }, err => {
                    this.loader.hideLoader();
                    this.alertService.presentAlertService(err);
                });
            });
        }
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
};
ResturantMenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _alerterror_service__WEBPACK_IMPORTED_MODULE_5__["AlerterrorService"] },
    { type: _toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_9__["CameraimageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ResturantMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resturant-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resturant-menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-menu/resturant-menu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resturant-menu.page.scss */ "./src/app/resturant-menu/resturant-menu.page.scss")).default]
    })
], ResturantMenuPage);



/***/ })

}]);
//# sourceMappingURL=resturant-menu-resturant-menu-module-es2015.js.map