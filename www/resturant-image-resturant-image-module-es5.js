(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resturant-image-resturant-image-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-image/resturant-image.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-image/resturant-image.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppResturantImageResturantImagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content  no-border fullscreen=\"true\"  class=\"ion-padding background no-scroll\">\n  <ion-list class=\"items-middle\" class=\"ion-text-center\">\n   <ion-row>\n      <ion-col style=\"padding-left: 0px;\" class=\"ion-text-left\" size=\"col-4\">\n          <img src=\"assets/imgs/khaobchao.png\" width=\"45%\">\n          <img *ngIf=\"profileImage != null && profileImage != ''\" class=\"profile-photo\"  src=\"{{ profileImage }}\" width=\"100%\">\n      </ion-col>\n    </ion-row>\n   \n     <h3 class=\"main_heading ion-text-left\">Resturant Setup</h3>\n    <p class=\"font-color ion-text-left\">\n      Please Enter Your Resturant Details.\n    </p>\n    <ion-row *ngFor=\"let imageArray of imageArray\">\n      <ion-col>\n          <img src=\"{{ imageArray }}\" class=\"imge\" >\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"imageLength\">\n      <ion-col class=\"addImage\" (click)=\"takeProfilePicture()\" text-center>\n         <ion-icon ios=\"ios-add\" md=\"md-add\"   ></ion-icon>\n      </ion-col>\n    </ion-row>\n    \n    <ion-button class=\"button-login\" color=\"danger\" (click)=\"submitDetail()\"shape=\"round\">Continue</ion-button>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/resturant-image/resturant-image-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/resturant-image/resturant-image-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ResturantImagePageRoutingModule */

    /***/
    function srcAppResturantImageResturantImageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResturantImagePageRoutingModule", function () {
        return ResturantImagePageRoutingModule;
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


      var _resturant_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resturant-image.page */
      "./src/app/resturant-image/resturant-image.page.ts");

      var routes = [{
        path: '',
        component: _resturant_image_page__WEBPACK_IMPORTED_MODULE_3__["ResturantImagePage"]
      }];

      var ResturantImagePageRoutingModule = function ResturantImagePageRoutingModule() {
        _classCallCheck(this, ResturantImagePageRoutingModule);
      };

      ResturantImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResturantImagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/resturant-image/resturant-image.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/resturant-image/resturant-image.module.ts ***!
      \***********************************************************/

    /*! exports provided: ResturantImagePageModule */

    /***/
    function srcAppResturantImageResturantImageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResturantImagePageModule", function () {
        return ResturantImagePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _resturant_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resturant-image-routing.module */
      "./src/app/resturant-image/resturant-image-routing.module.ts");
      /* harmony import */


      var _resturant_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resturant-image.page */
      "./src/app/resturant-image/resturant-image.page.ts");

      var ResturantImagePageModule = function ResturantImagePageModule() {
        _classCallCheck(this, ResturantImagePageModule);
      };

      ResturantImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resturant_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResturantImagePageRoutingModule"]],
        declarations: [_resturant_image_page__WEBPACK_IMPORTED_MODULE_6__["ResturantImagePage"]]
      })], ResturantImagePageModule);
      /***/
    },

    /***/
    "./src/app/resturant-image/resturant-image.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/resturant-image/resturant-image.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppResturantImageResturantImagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.new-background-color {\n  --background:transparent;\n}\n\nion-input {\n  color: #b40404;\n}\n\nion-label {\n  color: #bfbfbf !important;\n}\n\nion-icon {\n  color: #b40404;\n  font-size: 40px;\n  color: #b40404;\n  vertical-align: middle;\n  padding: 1.7em 0em;\n}\n\nion-list {\n  background: none !important;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\n.no-scroll .scroll-content {\n  overflow: hidden;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n}\n\n.itemBottom {\n  margin-bottom: 0.6em;\n}\n\n.icon {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  letter-spacing: 2px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  box-shadow: none !important;\n  margin-top: 2em;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  padding-bottom: 0px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-md.button.button-md.button-default.button-default-md.button-menutoggle.button-menutoggle-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-ios.button.button-ios.button-default.button-default-ios.button-menutoggle.button-menutoggle-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.name-validation {\n  color: #b40404;\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 1px;\n}\n\n.openDays {\n  color: #b40404;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-datetime {\n  padding: 0px;\n}\n\n.imge {\n  border: 1px solid #b40404;\n  border-radius: 16px;\n}\n\n.addImage {\n  border: 1px solid #b40404;\n  border-radius: 16px;\n  margin: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdHVyYW50LWltYWdlL3Jlc3R1cmFudC1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQUFKOztBQUVDO0VBQ0ksVUFBQTtBQUNMOztBQUNDO0VBQ0ksWUFBQTtBQUVMOztBQUFDO0VBQ0ksd0JBQUE7QUFHTDs7QUFEQztFQUNJLGNBQUE7QUFJTDs7QUFGQztFQUNJLHlCQUFBO0FBS0w7O0FBSEM7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBTUw7O0FBSkM7RUFDSSwyQkFBQTtBQU9MOztBQUxDO0VBQ0ksY0FBQTtBQVFMOztBQU5DO0VBQ0ksZ0JBQUE7QUFTTDs7QUFQQztFQUNFLFdBQUE7RUFDQSxlQUFBO0FBVUg7O0FBUkM7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBV0w7O0FBVEM7RUFDSSxvQkFBQTtBQVlMOztBQVZDO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBYUw7O0FBWEM7RUFDSSwyQkFBQTtBQWNMOztBQVpDO0VBQ0ksMEJBQUE7QUFlTDs7QUFiQztFQUVJLGtDQUFBO0FBZ0JMOztBQWJDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZ0JMOztBQWJDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFnQkw7O0FBZEM7RUFDSSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWlCTDs7QUFmQztFQUNJLGNBQUE7QUFrQkw7O0FBaEJDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBbUJMOztBQWhCQztFQUNBLGNBQUE7RUFDQSxXQUFBO0FBbUJEOztBQWpCQztFQUVJLG1CQUFBO0FBbUJMOztBQWpCQztFQUNLLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBb0JMOztBQWxCQztFQUNJLGNBQUE7QUFxQkw7O0FBbkJDO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQXNCTDs7QUFwQkM7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBdUJMOztBQXJCQztFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUF3Qkw7O0FBdEJDO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQXlCTDs7QUF2QkM7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTBCTDs7QUF4QkM7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEyQkw7O0FBekJDO0VBQ0ksWUFBQTtBQTRCTDs7QUExQkM7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0FBNkJKOztBQTNCQztFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBOEJKIiwiZmlsZSI6InNyYy9hcHAvcmVzdHVyYW50LWltYWdlL3Jlc3R1cmFudC1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvYWRlci1naWYtcm93e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmxvYWRlci1naWZ7XHJcbiAgICAgd2lkdGg6IDYwJTtcclxuIH1cclxuIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyeyBcclxuICAgICBib3JkZXI6bm9uZTtcclxuIH1cclxuIC5uZXctYmFja2dyb3VuZC1jb2xvcntcclxuICAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiB9XHJcbiBpb24taW5wdXR7XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiB9XHJcbiBpb24tbGFiZWx7XHJcbiAgICAgY29sb3I6ICNiZmJmYmYgIWltcG9ydGFudDtcclxuIH1cclxuIGlvbi1pY29ue1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgIHBhZGRpbmc6IDEuN2VtIDBlbTtcclxuIH1cclxuIGlvbi1saXN0e1xyXG4gICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuIC5pdGVtLWhhcy1mb2N1cy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaHtcclxuICAgICBjb2xvcjojYjQwNDA0O1xyXG4gfVxyXG4gLm5vLXNjcm9sbCAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIH1cclxuIC5sYWJlbHtcclxuICAgbWFyZ2luOiAwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDZweDtcclxuIH0gIFxyXG4gLml0ZW17XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDQwNDtcclxuICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gfVxyXG4gLml0ZW1Cb3R0b217XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMC42ZW07XHJcbiB9XHJcbiAuaWNvbntcclxuICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gfVxyXG4gLml0ZW0taW5uZXJ7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLnRleHQtaW5wdXR7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7IFxyXG4gfVxyXG4gLmxhYmVsLWlvc1tmbG9hdGluZ10gLCAubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcclxuIH1cclxuIFxyXG4gLm1haW5faGVhZGluZ3tcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiB9XHJcbiBcclxuIC5mb250LWNvbG9ye1xyXG4gICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuIH1cclxuIC5pb24tY29sb3ItZGFuZ2Vye1xyXG4gICAgIC0taW9uLWNvbG9yLWJhc2U6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gfVxyXG4gaW5wdXQsYSAsLnBhcntcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuIH1cclxuIC5vbmVUYXB7XHJcbiAgICAgY29sb3I6ICMzODVjOGU7XHJcbiAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgIG1hcmdpbjogMHB4O1xyXG4gfVxyXG4gXHJcbiAub3J7XHJcbiBjb2xvcjogI2I0MDQwNDtcclxuIG1hcmdpbjogMHB4O1xyXG4gfVxyXG4gLm5ld1VzZXJ7XHJcbiAgICAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgI2M3YzdjNztcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gfVxyXG4gLmxhc3RSb3d7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3R0b206IDBweDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBsZWZ0OiAwcHg7XHJcbiB9XHJcbiAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW3N0YWNrZWRdLCAuaW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtzdGFja2VkXSwgLml0ZW0taW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtmbG9hdGluZ10sIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSB7XHJcbiAgICAgY29sb3I6ICNiMjA0MDQ7XHJcbiB9XHJcbiBidXR0b24uZGlzYWJsZS1ob3Zlci5iYXItYnV0dG9ucy5iYXItYnV0dG9ucy1tZC5idXR0b24uYnV0dG9uLW1kLmJ1dHRvbi1kZWZhdWx0LmJ1dHRvbi1kZWZhdWx0LW1kLmJ1dHRvbi1tZW51dG9nZ2xlLmJ1dHRvbi1tZW51dG9nZ2xlLW1ke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuIH1cclxuIGJ1dHRvbi5kaXNhYmxlLWhvdmVyLmJhci1idXR0b25zLmJhci1idXR0b25zLWlvcy5idXR0b24uYnV0dG9uLWlvcy5idXR0b24tZGVmYXVsdC5idXR0b24tZGVmYXVsdC1pb3MuYnV0dG9uLW1lbnV0b2dnbGUuYnV0dG9uLW1lbnV0b2dnbGUtaW9ze1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuIH1cclxuIC5idXR0b24tbWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gLmJ1dHRvbi1pb3N7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gLm5hbWUtdmFsaWRhdGlvbntcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiB9XHJcbiAub3BlbkRheXN7XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgIG1hcmdpbjogMHB4O1xyXG4gfVxyXG4gaW9uLWRhdGV0aW1le1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuIH1cclxuIC5pbWdle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDQwNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiB9XHJcbiAuYWRkSW1hZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/resturant-image/resturant-image.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/resturant-image/resturant-image.page.ts ***!
      \*********************************************************/

    /*! exports provided: ResturantImagePage */

    /***/
    function srcAppResturantImageResturantImagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResturantImagePage", function () {
        return ResturantImagePage;
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


      var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../firebaseauth.service */
      "./src/app/firebaseauth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../cameraimage.service */
      "./src/app/cameraimage.service.ts");

      var ResturantImagePage = /*#__PURE__*/function () {
        function ResturantImagePage(activatedRoute, firebaseAuthService, imageService, alertCtrl, router) {
          var _this = this;

          _classCallCheck(this, ResturantImagePage);

          this.activatedRoute = activatedRoute;
          this.firebaseAuthService = firebaseAuthService;
          this.imageService = imageService;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.userId = '';
          this.resturantExist = '';
          this.loaderShow = false;
          this.profileImage = '';
          this.imageLength = true;
          this.activatedRoute.queryParams.subscribe(function (res) {
            _this.paymentSetup = res.paymentSetup;
            _this.resturantSetup = res.resturantSetup;
            console.log(_this.paymentSetup);
            console.log(_this.resturantSetup);
          });
        }

        _createClass(ResturantImagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitDetail",
          value: function submitDetail() {
            /*firebase.database().ref('resturantSetupData/' + this.userId ).set({
              resturantExist: 'Exist'
            
            }).then(()=>{
              console.log('Something Wrong');
            })*/
            this.router.navigate(['/resturant-menu'], {
              queryParams: {
                paymentSetup: this.paymentSetup,
                resturantSetup: this.resturantSetup,
                imageArray: this.imageArray
              }
            });
          } //Take profile picture

        }, {
          key: "takeProfilePicture",
          value: function takeProfilePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        message: 'Upload profile picture?',
                        buttons: [{
                          text: 'Take a photo',
                          handler: function handler() {
                            _this2.takeImageFromCamera();
                          }
                        }, {
                          text: 'Get photo from gallery',
                          handler: function handler() {
                            _this2.getImageFromGallery();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera() {
            var _this3 = this;

            this.imageService.selectImageInCamera().then(function (imageData) {
              _this3.profileImage = "data:image/png;base64,".concat(imageData);
              _this3.imageArray = _this3.profileImage;

              if (_this3.imageArray.length == 1) {
                _this3.imageLength = false;
              } else {
                _this3.imageLength = true;
              }

              console.log(_this3.profileImage);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "getImageFromGallery",
          value: function getImageFromGallery() {
            var _this4 = this;

            this.imageService.selectImageInGallery().then(function (imageData) {
              _this4.profileImage = "data:image/png;base64,".concat(imageData);
              _this4.imageArray = _this4.profileImage;

              if (_this4.imageArray.length == 1) {
                _this4.imageLength = false;
              } else {
                _this4.imageLength = true;
              }
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }]);

        return ResturantImagePage;
      }();

      ResturantImagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _firebaseauth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseauthService"]
        }, {
          type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__["CameraimageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ResturantImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resturant-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./resturant-image.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/resturant-image/resturant-image.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./resturant-image.page.scss */
        "./src/app/resturant-image/resturant-image.page.scss"))["default"]]
      })], ResturantImagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=resturant-image-resturant-image-module-es5.js.map