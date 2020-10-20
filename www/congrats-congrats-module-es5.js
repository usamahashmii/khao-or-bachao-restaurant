(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["congrats-congrats-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/congrats/congrats.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/congrats/congrats.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCongratsCongratsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content  no-border fullscreen=\"true\"  class=\"ion-padding background no-scroll\" >\n \n  \n  <ion-list class=\"items-middle\" class=\"ion-text-center bothPadding\">\n   <ion-row>\n      <ion-col style=\"padding-left: 0px;\" class=\"ion-text-left\" size=\"col-4\">\n          <img src=\"assets/imgs/khaobchao.png\" width=\"45%\">\n      </ion-col>\n    </ion-row>\n   \n     <h3 class=\"main_heading ion-text-left\">Congratulations</h3>\n    <p class=\"font-color ion-text-left\">\n      You Have Successfully made your resturant\n      We will review your resturant and will\n      get back to you in few working days.\n    </p>\n    <ion-row>\n      <ion-col text-center>\n          <img src=\"assets/imgs/congrats.png\"  >\n      </ion-col>\n    </ion-row>\n    \n    <ion-button class=\"button-login\" color=\"danger\" shape=\"round\">Sure</ion-button>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/congrats/congrats-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/congrats/congrats-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CongratsPageRoutingModule */

    /***/
    function srcAppCongratsCongratsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratsPageRoutingModule", function () {
        return CongratsPageRoutingModule;
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


      var _congrats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./congrats.page */
      "./src/app/congrats/congrats.page.ts");

      var routes = [{
        path: '',
        component: _congrats_page__WEBPACK_IMPORTED_MODULE_3__["CongratsPage"]
      }];

      var CongratsPageRoutingModule = function CongratsPageRoutingModule() {
        _classCallCheck(this, CongratsPageRoutingModule);
      };

      CongratsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CongratsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/congrats/congrats.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/congrats/congrats.module.ts ***!
      \*********************************************/

    /*! exports provided: CongratsPageModule */

    /***/
    function srcAppCongratsCongratsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratsPageModule", function () {
        return CongratsPageModule;
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


      var _congrats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./congrats-routing.module */
      "./src/app/congrats/congrats-routing.module.ts");
      /* harmony import */


      var _congrats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./congrats.page */
      "./src/app/congrats/congrats.page.ts");

      var CongratsPageModule = function CongratsPageModule() {
        _classCallCheck(this, CongratsPageModule);
      };

      CongratsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _congrats_routing_module__WEBPACK_IMPORTED_MODULE_5__["CongratsPageRoutingModule"]],
        declarations: [_congrats_page__WEBPACK_IMPORTED_MODULE_6__["CongratsPage"]]
      })], CongratsPageModule);
      /***/
    },

    /***/
    "./src/app/congrats/congrats.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/congrats/congrats.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCongratsCongratsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.new-background-color {\n  --background:transparent;\n}\n\nion-input {\n  color: #b40404;\n}\n\nion-label {\n  color: #bfbfbf !important;\n}\n\nion-icon {\n  color: #b40404;\n  font-size: 40px;\n  color: #b40404;\n  vertical-align: middle;\n  padding: 1.7em 0em;\n}\n\nion-list {\n  background: none !important;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\n.no-scroll .scroll-content {\n  overflow: hidden;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n}\n\n.itemBottom {\n  margin-bottom: 0.6em;\n}\n\n.icon {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  letter-spacing: 2px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  box-shadow: none !important;\n  margin-top: 2em;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  padding-bottom: 0px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-md.button.button-md.button-default.button-default-md.button-menutoggle.button-menutoggle-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-ios.button.button-ios.button-default.button-default-ios.button-menutoggle.button-menutoggle-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.name-validation {\n  color: #b40404;\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 1px;\n}\n\n.openDays {\n  color: #b40404;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-datetime {\n  padding: 0px;\n}\n\n.imge {\n  border: 1px solid #b40404;\n  border-radius: 16px;\n}\n\n.addImage {\n  border: 1px solid #b40404;\n  border-radius: 16px;\n  margin: 6px;\n}\n\n.bothPadding {\n  padding: 1em 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZ3JhdHMvY29uZ3JhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQztFQUNJLFVBQUE7QUFDTDs7QUFDQztFQUNJLFlBQUE7QUFFTDs7QUFBQztFQUNJLHdCQUFBO0FBR0w7O0FBREM7RUFDSSxjQUFBO0FBSUw7O0FBRkM7RUFDSSx5QkFBQTtBQUtMOztBQUhDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQU1MOztBQUpDO0VBQ0ksMkJBQUE7QUFPTDs7QUFMQztFQUNJLGNBQUE7QUFRTDs7QUFOQztFQUNJLGdCQUFBO0FBU0w7O0FBUEM7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVVIOztBQVJDO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQVdMOztBQVRDO0VBQ0ksb0JBQUE7QUFZTDs7QUFWQztFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQWFMOztBQVhDO0VBQ0ksMkJBQUE7QUFjTDs7QUFaQztFQUNJLDBCQUFBO0FBZUw7O0FBYkM7RUFFSSxrQ0FBQTtBQWdCTDs7QUFiQztFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWdCTDs7QUFiQztFQUNJLGNBQUE7RUFDQSxlQUFBO0FBZ0JMOztBQWRDO0VBQ0ksb0NBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFpQkw7O0FBZkM7RUFDSSxjQUFBO0FBa0JMOztBQWhCQztFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQW1CTDs7QUFoQkM7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQW1CRDs7QUFqQkM7RUFFSSxtQkFBQTtBQW1CTDs7QUFqQkM7RUFDSyxrQkFBQTtFQUNELFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQW9CTDs7QUFsQkM7RUFDSSxjQUFBO0FBcUJMOztBQW5CQztFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFzQkw7O0FBcEJDO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQXVCTDs7QUFyQkM7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBd0JMOztBQXRCQztFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUF5Qkw7O0FBdkJDO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEwQkw7O0FBeEJDO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMkJMOztBQXpCQztFQUNJLFlBQUE7QUE0Qkw7O0FBMUJDO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtBQTZCSjs7QUEzQkM7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQThCSjs7QUE1QkM7RUFDRyxrQkFBQTtBQStCSiIsImZpbGUiOiJzcmMvYXBwL2NvbmdyYXRzL2NvbmdyYXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9hZGVyLWdpZi1yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAubG9hZGVyLWdpZntcclxuICAgICB3aWR0aDogNjAlO1xyXG4gfVxyXG4gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXJ7IFxyXG4gICAgIGJvcmRlcjpub25lO1xyXG4gfVxyXG4gLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuIH1cclxuIGlvbi1pbnB1dHtcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuIH1cclxuIGlvbi1sYWJlbHtcclxuICAgICBjb2xvcjogI2JmYmZiZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gaW9uLWljb257XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgcGFkZGluZzogMS43ZW0gMGVtO1xyXG4gfVxyXG4gaW9uLWxpc3R7XHJcbiAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLml0ZW0taGFzLWZvY3VzLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtZm9jdXMubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oe1xyXG4gICAgIGNvbG9yOiNiNDA0MDQ7XHJcbiB9XHJcbiAubm8tc2Nyb2xsIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgfVxyXG4gLmxhYmVse1xyXG4gICBtYXJnaW46IDBweDtcclxuICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gfSAgXHJcbiAuaXRlbXtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiB9XHJcbiAuaXRlbUJvdHRvbXtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcclxuIH1cclxuIC5pY29ue1xyXG4gICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgY29sb3I6ICNiNDA0MDQ7XHJcbiB9XHJcbiAuaXRlbS1pbm5lcntcclxuICAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAudGV4dC1pbnB1dHtcclxuICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgXHJcbiB9XHJcbiAubGFiZWwtaW9zW2Zsb2F0aW5nXSAsIC5sYWJlbC1tZFtmbG9hdGluZ10ge1xyXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG4gfVxyXG4gXHJcbiAubWFpbl9oZWFkaW5ne1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuIH1cclxuIFxyXG4gLmZvbnQtY29sb3J7XHJcbiAgICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gfVxyXG4gLmlvbi1jb2xvci1kYW5nZXJ7XHJcbiAgICAgLS1pb24tY29sb3ItYmFzZTogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiB9XHJcbiBpbnB1dCxhICwucGFye1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gfVxyXG4gLm9uZVRhcHtcclxuICAgICBjb2xvcjogIzM4NWM4ZTtcclxuICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgbWFyZ2luOiAwcHg7XHJcbiB9XHJcbiBcclxuIC5vcntcclxuIGNvbG9yOiAjYjQwNDA0O1xyXG4gbWFyZ2luOiAwcHg7XHJcbiB9XHJcbiAubmV3VXNlcntcclxuICAgICAvL2JvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiB9XHJcbiAubGFzdFJvd3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGJvdHRvbTogMHB4O1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGxlZnQ6IDBweDtcclxuIH1cclxuIC5pdGVtLWlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbc3RhY2tlZF0sIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW3N0YWNrZWRdLCAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSwgLmlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICAgICBjb2xvcjogI2IyMDQwNDtcclxuIH1cclxuIGJ1dHRvbi5kaXNhYmxlLWhvdmVyLmJhci1idXR0b25zLmJhci1idXR0b25zLW1kLmJ1dHRvbi5idXR0b24tbWQuYnV0dG9uLWRlZmF1bHQuYnV0dG9uLWRlZmF1bHQtbWQuYnV0dG9uLW1lbnV0b2dnbGUuYnV0dG9uLW1lbnV0b2dnbGUtbWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gYnV0dG9uLmRpc2FibGUtaG92ZXIuYmFyLWJ1dHRvbnMuYmFyLWJ1dHRvbnMtaW9zLmJ1dHRvbi5idXR0b24taW9zLmJ1dHRvbi1kZWZhdWx0LmJ1dHRvbi1kZWZhdWx0LWlvcy5idXR0b24tbWVudXRvZ2dsZS5idXR0b24tbWVudXRvZ2dsZS1pb3N7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gfVxyXG4gLmJ1dHRvbi1tZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiB9XHJcbiAuYnV0dG9uLWlvc3tcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiB9XHJcbiAubmFtZS12YWxpZGF0aW9ue1xyXG4gICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuIH1cclxuIC5vcGVuRGF5c3tcclxuICAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgbWFyZ2luOiAwcHg7XHJcbiB9XHJcbiBpb24tZGF0ZXRpbWV7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG4gfVxyXG4gLmltZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuIH1cclxuIC5hZGRJbWFnZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNDA0MDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiB9XHJcbiAuYm90aFBhZGRpbmd7XHJcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/congrats/congrats.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/congrats/congrats.page.ts ***!
      \*******************************************/

    /*! exports provided: CongratsPage */

    /***/
    function srcAppCongratsCongratsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratsPage", function () {
        return CongratsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CongratsPage = /*#__PURE__*/function () {
        function CongratsPage() {
          _classCallCheck(this, CongratsPage);
        }

        _createClass(CongratsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CongratsPage;
      }();

      CongratsPage.ctorParameters = function () {
        return [];
      };

      CongratsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-congrats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./congrats.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/congrats/congrats.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./congrats.page.scss */
        "./src/app/congrats/congrats.page.scss"))["default"]]
      })], CongratsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=congrats-congrats-module-es5.js.map