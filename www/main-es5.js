(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
      var map = {
        "./tabs/tabs.module": ["./src/app/tabs/tabs.module.ts", "tabs-tabs-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 1],
        "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 2],
        "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 3],
        "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 4],
        "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 5],
        "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 6],
        "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 7],
        "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 8],
        "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 9],
        "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 10],
        "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 11],
        "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 0, "common", 12],
        "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 0, "common", 13],
        "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 14],
        "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 15],
        "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 16],
        "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 17],
        "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 18],
        "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 19],
        "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 20],
        "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 21],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 22],
        "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 23],
        "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 24],
        "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 25],
        "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 26],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 27],
        "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 28],
        "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 29],
        "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 30],
        "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 31],
        "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 32],
        "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 33],
        "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 34],
        "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 35],
        "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 36],
        "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 37],
        "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", 0, "common", 38],
        "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", 0, "common", 39],
        "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 40],
        "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 41],
        "./ion-nav_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_4.entry.js", "common", 42],
        "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 43],
        "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 44],
        "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 45],
        "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 46],
        "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 47],
        "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 48],
        "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 49],
        "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 50],
        "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 51],
        "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 52],
        "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 53],
        "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 54],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 55],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 56],
        "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 57],
        "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 58],
        "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 59],
        "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 60],
        "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 61],
        "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 62],
        "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "common", 63],
        "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "common", 64],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 65],
        "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 66],
        "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 67],
        "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 68],
        "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 69],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 70],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 71],
        "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 72],
        "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 73],
        "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 74],
        "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 75],
        "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 76],
        "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 77],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 78]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-header>\n        <ion-toolbar (click)=\"toggleMenu()\">\n          <ion-title><img src=\"assets/imgs/menu.png\" style=\"margin: 1em 0px 1em 0em;width: 38%;\"/></ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <!--Page with No auth-->\n        <ion-list *ngIf=\"checkauthenticationState == false\" lines=\"none\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPagesNoAuth\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n              <!--<ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>-->\n              <img src=\"assets/imgs/{{p.img}}\" style=\"width: 16px;margin-right: 1em;\">\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <!--Page with auth-->\n        <ion-list *ngIf=\"checkauthenticationState == true\" lines=\"none\">  \n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPagesAuth\">\n            <ng-container *ngIf=\"p.title !='Logout'\">\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n                 <!--<ion-icon slot=\"start\" [name]=\"\"></ion-icon>-->\n                 <img src=\"assets/imgs/{{p.img}}\" style=\"width: 16px;margin-right: 1em;\">\n                 <ion-label>\n                   {{p.title}}\n                 </ion-label>\n               </ion-item>\n             </ng-container>\n            <ng-container *ngIf=\"p.title =='Logout'\">\n            <ion-item [routerDirection]=\"'root'\" (click)=\"logout()\">\n              <!--<ion-icon slot=\"start\" [name]=\"\"></ion-icon>-->\n              <img src=\"assets/imgs/{{p.img}}\" style=\"width: 16px;margin-right: 1em;\">\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ng-container>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    \n  </ion-split-pane>\n  \n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content  no-border fullscreen=\"true\"  class=\"ion-padding background no-scroll\">\n  <!--<ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>-->\n  \n  <ion-list class=\"items-middle\" class=\"ion-text-center\">\n   <ion-row>\n      <ion-col style=\"padding-left: 0px;\" class=\"ion-text-left\" size=\"col-4\">\n          <img src=\"assets/imgs/khaobchao.png\" width=\"40%\">\n      </ion-col>\n      <ion-col size=\"3\" offset=\"3\">\n\n      </ion-col>\n    </ion-row>\n    <!--<p class=\"oneTap\">One Tap Login</p>\n    <p (click)=\"loginwithFacebook()\" class=\"ion-text-center\"> <img src=\"assets/imgs/fblogin.png\" width=\"60%\"></p>\n    <p class=\"or\">Or</p>-->\n     <h3 class=\"main_heading ion-text-left\">Login</h3>\n    <p class=\"font-color ion-text-left\">\n      Please Enter Your Login Details.\n    </p>\n    <ion-item>\n      <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\" position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"email\"\n      clearInput\n      type=\"email\"\n      (ionFocus)=\"checkFocusEmail()\"\n      (ionBlur)=\"checkBlurEmail()\" \n      (ionChange)=\"emailKeyUp()\"\n       ></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationEmail\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"keyupEmailBool\" class=\"name-validation\">Your Email is Invalid</h4>\n    <ion-item >\n      <ion-icon name=\"lock\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Password</ion-label>\n      <ion-input [(ngModel)]=\"password\" \n      clearInput \n      type=\"password\" \n      (ionFocus)=\"checkFocusPassword()\"\n      (ionBlur)=\"checkBlurPassword()\" \n      (ionChange)=\"passwordKeyUp()\" \n      [value]=\"password\"\n      ></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationPassword\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"characterLengthPasswordBool\" class=\"name-validation\">Password is too weak</h4>\n    <p class=\"par\" class=\"ion-text-center\">Forgot Password? <a (click)=\"resetPassword()\">Reset here</a></p>\n    <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n      <ion-col>\n        <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n      </ion-col>\n    </ion-row>\n    <ion-button class=\"button-login\" color=\"danger\" (click)=\"login()\" shape=\"round\">Login</ion-button>\n  </ion-list>\n  <!--<ion-row class=\"lastRow\" class=\"ion-padding\">\n    <ion-col class=\"ion-text-center\">\n        <p style=\"color:#bfbfbf;margin: 0px;\"><span class=\"newUser\">New User?<a (click)=\"signupPage()\">Signup here</a></span></p>\n    </ion-col>\n  </ion-row>-->\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMapMapPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n    <ion-col>\n      <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n    </ion-col>\n  </ion-row>\n  <div #map id=\"map\"></div> \n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"header_background\">\n  <ion-toolbar class=\"header_background\">\n    <ion-row size=\"12\">\n      <ion-col size=\"1\">\n        <img class=\"arrowLeft\" routerLink=\"/tabs/home\" src=\"assets/imgs/backArrow.png\">\n      </ion-col>\n      <ion-col size=\"10\" text-center>\n        <ion-title>Profile</ion-title>\n      </ion-col>\n      <ion-col size=\"1\">\n        <img class=\"settingRight\"  routerLink=\"/setting\"  src=\"assets/imgs/svs.png\">\n      </ion-col>\n    </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n    <ion-col>\n      <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n    </ion-col>\n  </ion-row>\n  <ion-list class=\"items-middle\" class=\"ion-text-center\">\n   <ion-row style=\"margin-bottom: 2em;\"> \n    <ion-col class=\"ion-text-right\" size=\"3\">\n      <img *ngIf=\"profileImage == null || profileImage == ''\" class=\"profile-photo\" (click)=\"takeProfilePicture()\" src=\"assets/imgs/profile-img.png\" width=\"100%\">\n      <img *ngIf=\"profileImage != null && profileImage != ''\" class=\"profile-photo\" (click)=\"takeProfilePicture()\" src=\"{{ profileImage }}\" width=\"100%\">\n    </ion-col>\n     <ion-col class=\"ion-text-left\" size=\"8\">\n       <h2 class=\"ProfleName\">{{ name }}</h2>\n       <p class=\"ProfleCity\">{{city}}</p> \n     </ion-col>\n   </ion-row>\n    <ion-item >\n      <ion-icon class=\"icon-color\" class=\"ion-text-left\" ios=\"ios-person\" md=\"md-person\" slot=\"start\"></ion-icon>\n       <ion-label color=\"ligh-grey\"  position=\"floating\">\n        Full Name\n      </ion-label>\n      <ion-input [value]=\"name\"\n      [(ngModel)]=\"name\"\n      clearInput\n      type=\"text\" \n      (ionFocus)=\"checkFocusName()\"\n      (ionBlur)=\"checkBlurName()\"\n      (ionChange)=\"nameKeyUp()\"\n      ></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationName\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"keyupNameBool\" class=\"name-validation\">Your name is invalid</h4>\n    <h4 *ngIf=\"characterLengthNameBool\" class=\"name-validation\">Characters length is too long</h4>\n    <ion-item >\n      <ion-icon class=\"icon-color\" class=\"ion-text-left\" name=\"mail\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\"  position=\"floating\">Email</ion-label>\n      <ion-input [value]=\"email\"\n      [(ngModel)]=\"email\"\n      type=\"email\"\n      clearInput \n      type=\"email\"\n      (ionFocus)=\"checkFocusEmail()\"\n      (ionBlur)=\"checkBlurEmail()\" \n      (ionChange)=\"emailKeyUp()\" \n      [disabled]=\"!showPasswordInput\"></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationEmail\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"keyupEmailBool\" class=\"name-validation\">Your Email is Invalid</h4>\n    <h4 *ngIf=\"checkEmailExist\" class=\"name-validation\">Your entered email already exists</h4>\n    <ion-item >\n      <ion-icon class=\"icon-color\" class=\"ion-text-left\" ios=\"ios-call\" md=\"md-call\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\"  position=\"floating\">cell phone Number</ion-label>\n      <ion-input [value]=\"number\"\n      [(ngModel)]=\"number\" type=\"tel\"\n      maxlength=\"10\"\n      (ionFocus)=\"checkFocusMobile()\"\n      (ionBlur)=\"checkBlurMobile()\" \n      (ionChange)=\"numberKeyUp()\"\n      ></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationMobile\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"keyupNumberBool\" class=\"name-validation\">Phone Number is Invalid</h4>\n    <h4 *ngIf=\"characterLengthNumberBool\" class=\"name-validation\">Characters Length is too Long</h4>\n    <!--*ngIf=\"showPasswordInput\"-->\n    <ion-item >\n      <ion-icon class=\"icon-color\" class=\"ion-text-left\" name=\"lock\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\"  position=\"floating\">Password</ion-label>\n      <ion-input [(ngModel)]=\"password\"\n      clearInput\n      (ionFocus)=\"checkFocusPassword()\"\n      (ionBlur)=\"checkBlurPassword()\" \n      (ionChange)=\"passwordKeyUp()\" \n       type=\"password\"></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationPassword\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"characterLengthPasswordBool\" class=\"name-validation\">Password is too weak</h4>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"update()\" class=\"updatebtn\" shape=\"round\" color=\"danger\">Update</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"logout()\" shape=\"round\" fill=\"outline\" color=\"medium\">Logout</ion-button>\n      </ion-col>\n    </ion-row>\n   \n  </ion-list>\n  <ion-row class=\"lastRow\" class=\"ion-padding\">\n    <ion-col class=\"ion-text-center\">\n        <p style=\"color:#bfbfbf;\"><span class=\"newUser\" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"background ion-padding\">\n  <!--<ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>-->\n \n  <ion-list class=\"items-middle ion-text-center\">\n    <ion-row>\n      <ion-col style=\"padding-left: 0px;\" class=\"ion-text-left\" col-6>\n          <img src=\"assets/imgs/khaobchao.png\" width=\"40%\">\n      </ion-col>\n    </ion-row>\n    <p class=\"oneTap\">One Tap Login</p>\n    <p class=\"ion-text-center\"> <img (click)=\"loginwithFacebook()\" src=\"assets/imgs/fblogin.png\" width=\"60%\"></p>\n    <p class=\"or\">Or</p>\n     <h3 class=\"main_heading ion-text-left\">Signup</h3>\n    <p class=\"font-color ion-text-left\">\n      Please Enter Your Login Details.\n    </p> \n    <ion-item >\n      <ion-icon  ios=\"ios-person\" md=\"md-person\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Full Name</ion-label>\n      <ion-input [(ngModel)]=\"name\"\n       clearInput\n       type=\"text\" \n      (ionFocus)=\"checkFocusName()\"\n      (ionBlur)=\"checkBlurName()\"\n      (ionChange)=\"nameKeyUp()\"\n      [value]=\"name\"\n       ></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationName\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"keyupNameBool\" class=\"name-validation\">Your name is invalid</h4>\n    <h4 *ngIf=\"characterLengthNameBool\" class=\"name-validation\">Characters length is too long</h4>\n    <ion-item >\n      <ion-icon  name=\"mail\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Email</ion-label>\n      <ion-input [(ngModel)]=\"email\" \n      clearInput \n      type=\"email\"\n      (ionFocus)=\"checkFocusEmail()\"\n      (ionBlur)=\"checkBlurEmail()\" \n      (ionChange)=\"emailKeyUp()\" \n      [value]=\"email\"\n      ></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationEmail\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"keyupEmailBool\" class=\"name-validation\">Your Email is Invalid</h4>\n    <h4 *ngIf=\"checkEmailExist\" class=\"name-validation\">Your entered email already exists</h4>\n    <ion-item >\n      <ion-icon ios=\"ios-call\" md=\"md-call\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\" position=\"floating\" >Your cell Number</ion-label>\n      <ion-input [(ngModel)]=\"number\"\n      type=\"tel\"\n      maxlength=\"10\"\n      (ionFocus)=\"checkFocusMobile()\"\n      (ionBlur)=\"checkBlurMobile()\" \n      (keyup)=\"numberKeyUp()\"></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationMobile\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"keyupNumberBool\" class=\"name-validation\">Phone Number is Invalid</h4>\n    <h4 *ngIf=\"characterLengthNumberBool\" class=\"name-validation\">Characters Length is too Long</h4>\n    <ion-item >\n      <ion-icon  name=\"lock\" slot=\"start\"></ion-icon>\n      <ion-label color=\"ligh-grey\" position=\"floating\"  >Password</ion-label>\n      <ion-input \n      type=\"password\" clearInput\n      (ionFocus)=\"checkFocusPassword()\"\n      (ionBlur)=\"checkBlurPassword()\" \n      (ionChange)=\"passwordKeyUp()\" \n      [(ngModel)]=\"password\" ></ion-input>\n    </ion-item>\n    <h4 *ngIf=\"validationPassword\" class=\"name-validation\">Please fill the required field</h4>\n    <h4 *ngIf=\"characterLengthPasswordBool\" class=\"name-validation\">Password is too weak</h4>\n    <!--loader-->\n    <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n      <ion-col>\n        <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n      </ion-col>\n    </ion-row>\n  <ion-button class=\"button-signup\" color=\"danger\" (click)=\"signup()\" shape=\"round\">Signup</ion-button>\n  </ion-list>\n  <ion-row class=\"lastRow\" class=\"ion-padding\">\n    <ion-col class=\"ion-text-center\">\n        <p style=\"color:#bfbfbf;\"><span class=\"newUser\">Already a User?<a (click)=\"loginPage()\">Login here</a></span></p>\n    </ion-col>\n  </ion-row>\n  <div id=\"recaptcha-container\"></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs (ionTabsDidChange)=\"tabChange($event)\">\n\n  <ion-tab-bar slot=\"bottom\" class=\"tab_s\">\n    <ion-tab-button tab=\"home\"> \n      <img src=\"assets/imgs/home_active.png\" *ngIf=\"selectTab==='home'\">\n      <img src=\"assets/imgs/home_1.png\" *ngIf=\"selectTab!=='home'\">\n      <ion-label class=\"menu_img\">Bookings</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"offers\">\n      <img src=\"assets/imgs/offer_active.png\" *ngIf=\"selectTab==='offers'\">\n      <img src=\"assets/imgs/offers.png\" *ngIf=\"selectTab!=='offers'\">\n      <ion-label class=\"menu_img\">Discount</ion-label>\n    </ion-tab-button>\n    \n    <ion-tab-button tab=\"menu\">\n      <img src=\"assets/imgs/menu_active.png\" *ngIf=\"selectTab==='menu'\">\n      <img src=\"assets/imgs/menu_1.png\" *ngIf=\"selectTab!=='menu'\">\n      <ion-label class=\"menu_img\" style=\"top:6px\">Menu</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notifications\">\n      <img src=\"assets/imgs/notify_active.png\" *ngIf=\"selectTab==='notifications'\">\n      <img src=\"assets/imgs/notify.png\" *ngIf=\"selectTab!=='notifications'\">\n      <ion-label class=\"menu_img\">Notifications</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>";
      /***/
    },

    /***/
    "./src/app/alerterror.service.ts":
    /*!***************************************!*\
      !*** ./src/app/alerterror.service.ts ***!
      \***************************************/

    /*! exports provided: AlerterrorService */

    /***/
    function srcAppAlerterrorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlerterrorService", function () {
        return AlerterrorService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");

      var AlerterrorService = /*#__PURE__*/function () {
        function AlerterrorService(http, alertCtrl) {
          _classCallCheck(this, AlerterrorService);

          this.http = http;
          this.alertCtrl = alertCtrl;
          console.log('Hello AlerterrorProvider Provider');
        }

        _createClass(AlerterrorService, [{
          key: "presentAlertAuth",
          value: function presentAlertAuth(err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Error!',
                        subHeader: err.message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      return _context.abrupt("return", alert.present());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlertService",
          value: function presentAlertService(err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'Error!',
                        subHeader: err,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      return _context2.abrupt("return", alert.present());

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //resetting password Error

        }, {
          key: "presentAlertErrorPasswordReset",
          value: function presentAlertErrorPasswordReset() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: 'Error!',
                        subHeader: 'Password resetting error',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      return _context3.abrupt("return", alert.present());

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertErrorWrongOTP",
          value: function presentAlertErrorWrongOTP() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: 'OTP Alert',
                        message: 'You Entered Wrong OTP.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      return _context4.abrupt("return", alert.present());

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return AlerterrorService;
      }();

      AlerterrorService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      AlerterrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlerterrorService);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: './tabs/tabs.module#TabsPageModule'
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "./src/app/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'map',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./map/map.module */
          "./src/app/map/map.module.ts")).then(function (m) {
            return m.MapPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'setting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-setting-module */
          "setting-setting-module").then(__webpack_require__.bind(null,
          /*! ./setting/setting.module */
          "./src/app/setting/setting.module.ts")).then(function (m) {
            return m.SettingPageModule;
          });
        }
      }, {
        path: 'nointernet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | nointernet-nointernet-module */
          "nointernet-nointernet-module").then(__webpack_require__.bind(null,
          /*! ./nointernet/nointernet.module */
          "./src/app/nointernet/nointernet.module.ts")).then(function (m) {
            return m.NointernetPageModule;
          });
        }
      }, {
        path: 'location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | location-location-module */
          "location-location-module").then(__webpack_require__.bind(null,
          /*! ./location/location.module */
          "./src/app/location/location.module.ts")).then(function (m) {
            return m.LocationPageModule;
          });
        }
      }, {
        path: 'term',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | term-term-module */
          "term-term-module").then(__webpack_require__.bind(null,
          /*! ./term/term.module */
          "./src/app/term/term.module.ts")).then(function (m) {
            return m.TermPageModule;
          });
        }
      }, {
        path: 'offers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | offers-offers-module */
          "offers-offers-module").then(__webpack_require__.bind(null,
          /*! ./offers/offers.module */
          "./src/app/offers/offers.module.ts")).then(function (m) {
            return m.OffersPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notifications-notifications-module */
          "notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ./notifications/notifications.module */
          "./src/app/notifications/notifications.module.ts")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'selection',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | selection-selection-module */
          "selection-selection-module").then(__webpack_require__.bind(null,
          /*! ./selection/selection.module */
          "./src/app/selection/selection.module.ts")).then(function (m) {
            return m.SelectionPageModule;
          });
        }
      }, {
        path: 'resturant-setup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resturant-setup-resturant-setup-module */
          "resturant-setup-resturant-setup-module").then(__webpack_require__.bind(null,
          /*! ./resturant-setup/resturant-setup.module */
          "./src/app/resturant-setup/resturant-setup.module.ts")).then(function (m) {
            return m.ResturantSetupPageModule;
          });
        }
      }, {
        path: 'resturant-payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resturant-payment-resturant-payment-module */
          "resturant-payment-resturant-payment-module").then(__webpack_require__.bind(null,
          /*! ./resturant-payment/resturant-payment.module */
          "./src/app/resturant-payment/resturant-payment.module.ts")).then(function (m) {
            return m.ResturantPaymentPageModule;
          });
        }
      }, {
        path: 'resturant-image',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resturant-image-resturant-image-module */
          "resturant-image-resturant-image-module").then(__webpack_require__.bind(null,
          /*! ./resturant-image/resturant-image.module */
          "./src/app/resturant-image/resturant-image.module.ts")).then(function (m) {
            return m.ResturantImagePageModule;
          });
        }
      }, {
        path: 'resturant-menu',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resturant-menu-resturant-menu-module */
          "resturant-menu-resturant-menu-module").then(__webpack_require__.bind(null,
          /*! ./resturant-menu/resturant-menu.module */
          "./src/app/resturant-menu/resturant-menu.module.ts")).then(function (m) {
            return m.ResturantMenuPageModule;
          });
        }
      }, {
        path: 'congrats',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | congrats-congrats-module */
          "congrats-congrats-module").then(__webpack_require__.bind(null,
          /*! ./congrats/congrats.module */
          "./src/app/congrats/congrats.module.ts")).then(function (m) {
            return m.CongratsPageModule;
          });
        }
      }, {
        path: 'congrats-accepted',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | congrats-accepted-congrats-accepted-module */
          "congrats-accepted-congrats-accepted-module").then(__webpack_require__.bind(null,
          /*! ./congrats-accepted/congrats-accepted.module */
          "./src/app/congrats-accepted/congrats-accepted.module.ts")).then(function (m) {
            return m.CongratsAcceptedPageModule;
          });
        }
      }, {
        path: 'menu',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | menu-menu-module */
          [__webpack_require__.e("default~alert-confirm-alert-confirm-module~menu-menu-module"), __webpack_require__.e("menu-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./menu/menu.module */
          "./src/app/menu/menu.module.ts")).then(function (m) {
            return m.MenuPageModule;
          });
        }
      }, {
        path: 'discount',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | discount-discount-module */
          "discount-discount-module").then(__webpack_require__.bind(null,
          /*! ./discount/discount.module */
          "./src/app/discount/discount.module.ts")).then(function (m) {
            return m.DiscountPageModule;
          });
        }
      }, {
        path: 'qr-reader',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | qr-reader-qr-reader-module */
          "qr-reader-qr-reader-module").then(__webpack_require__.bind(null,
          /*! ./qr-reader/qr-reader.module */
          "./src/app/qr-reader/qr-reader.module.ts")).then(function (m) {
            return m.QrReaderPageModule;
          });
        }
      }, {
        path: 'choose-item',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | choose-item-choose-item-module */
          "choose-item-choose-item-module").then(__webpack_require__.bind(null,
          /*! ./choose-item/choose-item.module */
          "./src/app/choose-item/choose-item.module.ts")).then(function (m) {
            return m.ChooseItemPageModule;
          });
        }
      }, {
        path: 'item-discount',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | item-discount-item-discount-module */
          "item-discount-item-discount-module").then(__webpack_require__.bind(null,
          /*! ./item-discount/item-discount.module */
          "./src/app/item-discount/item-discount.module.ts")).then(function (m) {
            return m.ItemDiscountPageModule;
          });
        }
      }, {
        path: 'reservation-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | reservation-detail-reservation-detail-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./reservation-detail/reservation-detail.module */
          "./src/app/reservation-detail/reservation-detail.module.ts")).then(function (m) {
            return m.ReservationDetailPageModule;
          });
        }
      }, {
        path: 'time-period',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | time-period-time-period-module */
          "default~home-home-module~time-period-time-period-module").then(__webpack_require__.bind(null,
          /*! ./time-period/time-period.module */
          "./src/app/time-period/time-period.module.ts")).then(function (m) {
            return m.TimePeriodPageModule;
          });
        }
      }, {
        path: 'item-edit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | item-edit-item-edit-module */
          "item-edit-item-edit-module").then(__webpack_require__.bind(null,
          /*! ./item-edit/item-edit.module */
          "./src/app/item-edit/item-edit.module.ts")).then(function (m) {
            return m.ItemEditPageModule;
          });
        }
      }, {
        path: 'edit-day-discount',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-day-discount-edit-day-discount-module */
          "edit-day-discount-edit-day-discount-module").then(__webpack_require__.bind(null,
          /*! ./edit-day-discount/edit-day-discount.module */
          "./src/app/edit-day-discount/edit-day-discount.module.ts")).then(function (m) {
            return m.EditDayDiscountPageModule;
          });
        }
      }, {
        path: 'alert-confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | alert-confirm-alert-confirm-module */
          "default~alert-confirm-alert-confirm-module~menu-menu-module").then(__webpack_require__.bind(null,
          /*! ./alert-confirm/alert-confirm.module */
          "./src/app/alert-confirm/alert-confirm.module.ts")).then(function (m) {
            return m.AlertConfirmPageModule;
          });
        }
      }, {
        path: 'offer-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | offer-detail-offer-detail-module */
          "offer-detail-offer-detail-module").then(__webpack_require__.bind(null,
          /*! ./offer-detail/offer-detail.module */
          "./src/app/offer-detail/offer-detail.module.ts")).then(function (m) {
            return m.OfferDetailPageModule;
          });
        }
      }, {
        path: 'customer-support',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customer-support-customer-support-module */
          "customer-support-customer-support-module").then(__webpack_require__.bind(null,
          /*! ./customer-support/customer-support.module */
          "./src/app/customer-support/customer-support.module.ts")).then(function (m) {
            return m.CustomerSupportPageModule;
          });
        }
      }, {
        path: 'regional-manager',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | regional-manager-regional-manager-module */
          "regional-manager-regional-manager-module").then(__webpack_require__.bind(null,
          /*! ./regional-manager/regional-manager.module */
          "./src/app/regional-manager/regional-manager.module.ts")).then(function (m) {
            return m.RegionalManagerPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "[_nghost-myc-c3] input[_ngcontent-myc-c3] {\n  font-size: 16px;\n  /* margin: 6px 0; */\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #b40404;\n  background: none;\n  border-radius: 29px;\n}\n\n.list-md .item-block .item-inner {\n  border-bottom: none !important;\n}\n\n.toolbar .toolbar-background {\n  background-color: #b40404;\n}\n\n.toolbar-title-md {\n  color: #fff !important;\n}\n\n.header-md::after, .tabs-md[tabsPlacement=top] > .tabbar::after, .footer-md::before, .tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  background-image: none !important;\n}\n\n.sidebarIcon {\n  width: 18px;\n  margin-right: 5px;\n}\n\n.sidebaeTitle {\n  position: relative;\n  top: -3px;\n  font-size: 18px;\n}\n\n.label-md {\n  margin: 10px 8px 10px 0;\n}\n\n.bar-button-menutoggle-md ion-icon {\n  color: #fff;\n}\n\n.bar-button-menutoggle-ios ion-icon {\n  color: #fff;\n}\n\n.tabs-md .tab-button {\n  color: #080808;\n}\n\n.tabs-ios .tab-button {\n  color: #080808;\n}\n\n.tabs-md .tab-button-icon {\n  color: #080808;\n}\n\n.tabs-ios .tab-button-icon {\n  color: #080808;\n}\n\n.tabs-md .tab-button[aria-selected=true] .tab-button-icon {\n  color: #b40404;\n}\n\n.tabs-ios .tab-button[aria-selected=true] .tab-button-icon {\n  color: #b40404;\n}\n\n.tabs-md .tab-button[aria-selected=true] {\n  color: #b40404;\n}\n\n.tabs-ios .tab-button[aria-selected=true] {\n  color: #b40404;\n}\n\n.toast-wrapper.toast-bottom {\n  border-radius: 10px;\n  width: 95%;\n  margin-bottom: 10px;\n}\n\n.toast-wrapper.toast-top {\n  border-radius: 10px;\n  width: 95%;\n  margin-top: 10px;\n}\n\n.toast-md .toast-message {\n  font-size: 1.5rem;\n  color: #fff;\n  padding-left: 10px;\n}\n\n.toast-ios .toast-message {\n  font-size: 1.5rem;\n  color: #fff;\n  padding-left: 10px;\n}\n\n.toast-container {\n  border-radius: 5px;\n}\n\n.alert-md .alert-button, .alert-ios .alert-button {\n  border-radius: 2px;\n  position: relative;\n  overflow: hidden;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #b40404;\n  background-color: transparent;\n  margin: 5px 8px 0 0;\n  font-size: 15px;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.alert-md .alert-title, .alert-ios .alert-title {\n  color: #b40404;\n  font-size: 17px;\n  text-align: center;\n}\n\n.alert-md .alert-wrapper, .alert-ios .alert-wrapper {\n  border-radius: 10px;\n}\n\n.cstomHeader .toolbar-background-md {\n  background: #ffff !important;\n}\n\n.cstomHeader .toolbar-background-ios {\n  background: #ffff !important;\n}\n\n.segment-md .segment-button.activated, .segment-md .segment-button.segment-activated {\n  border-color: #b40404;\n  color: #b40404;\n}\n\n.segment-ios .segment-button.activated, .segment-ios .segment-button.segment-activated {\n  border-color: #b40404;\n  color: #b40404;\n}\n\n.segment-md .segment-button {\n  color: #080808;\n  font-size: 1rem;\n}\n\n.segment-ios .segment-button {\n  color: #080808;\n  font-size: 1rem;\n}\n\nion-split-pane {\n  --border: none !important;\n}\n\nion-split-pane ion-menu {\n  --background: #b40404 !important;\n}\n\nion-split-pane ion-menu ion-content {\n  --background: #b40404 !important;\n}\n\nion-split-pane ion-menu ion-content ion-list-header {\n  --background: #b40404 !important;\n  --color: #FFFFFF !important;\n}\n\nion-split-pane ion-menu ion-content ion-item {\n  --background: #b40404 !important;\n  --color: #FFFFFF !important;\n}\n\nion-split-pane ion-menu ion-content ion-item ion-icon {\n  color: #FFFFFF !important;\n}\n\n.list-md {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #b40404 !important;\n}\n\n.sc-ion-loading-md {\n  --background: none;\n  box-shadow: none;\n}\n\n.loading-wrapper.sc-ion-loading-ios {\n  --background: none;\n  box-shadow: none;\n}\n\n.loading-spinner.sc-ion-loading-md, .loading-spinner.sc-ion-loading-ios {\n  display: none;\n}\n\n.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLDhCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQUFBO0VBQ0ksc0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlDQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLHVCQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxjQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0FBZUo7O0FBYkE7RUFDSSxjQUFBO0FBZ0JKOztBQWRBO0VBQ0ksY0FBQTtBQWlCSjs7QUFmQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBa0JKOztBQWhCQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0FBb0JKOztBQWpCQTtFQUNHLGtCQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFvQko7O0FBbEJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxtQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSw0QkFBQTtBQXVCSjs7QUFyQkU7RUFDRSw0QkFBQTtBQXdCSjs7QUF0QkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUF5Qko7O0FBdkJFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBMEJKOztBQXhCRTtFQUNHLGNBQUE7RUFDQSxlQUFBO0FBMkJMOztBQXpCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBNEJKOztBQXpCQztFQUNHLHlCQUFBO0FBNEJKOztBQTNCSTtFQUNBLGdDQUFBO0FBNkJKOztBQTVCSTtFQUNBLGdDQUFBO0FBOEJKOztBQTdCSTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7QUErQko7O0FBN0JJO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtBQStCSjs7QUE5Qkk7RUFBVSx5QkFBQTtBQWlDZDs7QUEzQkk7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUE2QlI7O0FBM0JJO0VBQ0ksZ0NBQUE7QUE4QlI7O0FBMUJJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQTZCUjs7QUEzQkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBOEJSOztBQTNCSTtFQUNJLGFBQUE7QUE4QlI7O0FBNUJJO0VBQ0ksYUFBQTtBQStCUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltfbmdob3N0LW15Yy1jM10gaW5wdXRbX25nY29udGVudC1teWMtYzNdIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8qIG1hcmdpbjogNnB4IDA7ICovXHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNDA0MDQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjlweDtcclxufVxyXG4ubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvb2xiYXIgLnRvb2xiYXItYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNDA0MDQ7XHJcbiBcclxufVxyXG4udG9vbGJhci10aXRsZS1tZHtcclxuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyLW1kOjphZnRlciwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cInRvcFwiXSA+IC50YWJiYXI6OmFmdGVyLCAuZm9vdGVyLW1kOjpiZWZvcmUsIC50YWJzLW1kW3RhYnNQbGFjZW1lbnQ9XCJib3R0b21cIl0gPiAudGFiYmFyOjpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZGViYXJJY29ue1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uc2lkZWJhZVRpdGxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sYWJlbC1tZCB7XHJcbiAgICBtYXJnaW46IDEwcHggOHB4IDEwcHggMDtcclxufVxyXG4uYmFyLWJ1dHRvbi1tZW51dG9nZ2xlLW1kIGlvbi1pY29ue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJhci1idXR0b24tbWVudXRvZ2dsZS1pb3MgaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4udGFicy1tZCAudGFiLWJ1dHRvbntcclxuICAgIGNvbG9yOiAjMDgwODA4O1xyXG59XHJcbi50YWJzLWlvcyAudGFiLWJ1dHRvbntcclxuICAgIGNvbG9yOiAjMDgwODA4O1xyXG59XHJcbi50YWJzLW1kIC50YWItYnV0dG9uLWljb257XHJcbiAgICBjb2xvcjogIzA4MDgwODtcclxufVxyXG4udGFicy1pb3MgLnRhYi1idXR0b24taWNvbntcclxuICAgIGNvbG9yOiAjMDgwODA4O1xyXG59XHJcbi50YWJzLW1kIC50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0gLnRhYi1idXR0b24taWNvbntcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi50YWJzLWlvcyAudGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVdIC50YWItYnV0dG9uLWljb257XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxufVxyXG4udGFicy1tZCAudGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVde1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbn1cclxuLnRhYnMtaW9zIC50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV17XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxufVxyXG4udG9hc3Qtd3JhcHBlci50b2FzdC1ib3R0b20ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi50b2FzdC13cmFwcGVyLnRvYXN0LXRvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvL3BhZGRpbmc6IDIwcHg7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi50b2FzdC1pb3MgLnRvYXN0LW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vcGFkZGluZzogMjBweDsgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnRvYXN0LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLy9hbGVydCBib3ggc2Nzc1xyXG4uYWxlcnQtbWQgLmFsZXJ0LWJ1dHRvbiAsIC5hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbiB7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiA1cHggOHB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5hbGVydC1tZCAuYWxlcnQtdGl0bGUgLCAuYWxlcnQtaW9zIC5hbGVydC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxlcnQtbWQgLmFsZXJ0LXdyYXBwZXIgLCAuYWxlcnQtaW9zIC5hbGVydC13cmFwcGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY3N0b21IZWFkZXIgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY3N0b21IZWFkZXIgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCwgLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjQwNDA0O1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgfVxyXG4gIC5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLCAuc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjQwNDA0O1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgfVxyXG4gIC5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbntcclxuICAgICBjb2xvcjogIzA4MDgwODtcclxuICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIC5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b257XHJcbiAgICBjb2xvcjogIzA4MDgwODtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuIH1cclxuXHJcbiBpb24tc3BsaXQtcGFuZXtcclxuICAgIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tbWVudXtcclxuICAgIC0tYmFja2dyb3VuZDogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgIGlvbi1saXN0LWhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgIGlvbi1pY29ueyBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50OyB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtbWQge1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvL2xvYWRlclxyXG4gICAgLy9iYWNrZ3JvdW5kL3NoYWRvdyBvZiBsb2FkZXJcclxuICAgIC5zYy1pb24tbG9hZGluZy1tZCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLWlvcyB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAvL2hpZGUgbG9hZGVyIHNwaW5uZXJcclxuICAgIC5sb2FkaW5nLXNwaW5uZXIuc2MtaW9uLWxvYWRpbmctbWQgLCAubG9hZGluZy1zcGlubmVyLnNjLWlvbi1sb2FkaW5nLWlvcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zcGlubmVyLWJ1YmJsZXMuc2MtaW9uLWxvYWRpbmctbWQsIC5zcGlubmVyLWNpcmNsZXMuc2MtaW9uLWxvYWRpbmctbWQsIC5zcGlubmVyLWNyZXNjZW50LnNjLWlvbi1sb2FkaW5nLW1kLCAuc3Bpbm5lci1kb3RzLnNjLWlvbi1sb2FkaW5nLW1kLCAuc3Bpbm5lci1saW5lcy5zYy1pb24tbG9hZGluZy1tZCwgLnNwaW5uZXItbGluZXMtc21hbGwuc2MtaW9uLWxvYWRpbmctbWR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _firebaseconfig_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./firebaseconfig.service */
      "./src/app/firebaseconfig.service.ts");
      /* harmony import */


      var _network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./network.service */
      "./src/app/network.service.ts");
      /* harmony import */


      var _toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./toaster.service */
      "./src/app/toaster.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./tabs/tabs.page */
      "./src/app/tabs/tabs.page.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, firebaseConfiguration, networkProvider, events, toaster, router, restService, menuCtrl, storage, navCtrl, oneSignal, toastService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.firebaseConfiguration = firebaseConfiguration;
          this.networkProvider = networkProvider;
          this.events = events;
          this.toaster = toaster;
          this.router = router;
          this.restService = restService;
          this.menuCtrl = menuCtrl;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.oneSignal = oneSignal;
          this.toastService = toastService;
          this.checkauthenticationState = true;
          this.checkShopSetup = false;
          this.appPagesNoAuth = [{
            title: 'Home',
            url: '/tabs/home',
            img: 'home.png'
          }, {
            title: 'login',
            url: '/login',
            img: 'svp.png'
          }, {
            title: 'Term of Use',
            url: '/term',
            img: 'svt.png'
          }];
          this.appPagesAuth = [{
            title: 'Home',
            url: '/tabs/home',
            img: 'home.png'
          }, {
            title: 'Add Item',
            url: '/resturant-menu',
            img: 'svt.png'
          }, {
            title: 'QR Reader',
            url: '/qr-reader',
            img: 'share.png'
          }, {
            title: 'Profile',
            url: '/profile',
            img: 'svp.png'
          }, {
            title: 'Setting',
            url: '/setting',
            img: 'svs.png'
          }, {
            title: 'Customer Support',
            url: '/customer-support',
            img: 'customerCare.png'
          }, {
            title: 'Sales Person',
            url: '/customer-support',
            img: 'salesManager.png'
          }, {
            title: 'Regional Manager',
            url: '/regional-manager',
            img: 'regionalManager.png'
          }, {
            title: 'Logout',
            url: '/login',
            img: 'logout_icon.png'
          }];
          var routes = [{
            path: 'tabs',
            component: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"],
            children: [{
              path: 'schedule',
              children: [{
                path: '',
                loadChildren: '../schedule/schedule.module#ScheduleModule'
              }]
            }, {
              path: '',
              redirectTo: '/app/tabs/schedule',
              pathMatch: 'full'
            }]
          }]; // Initialize Firebase

          this.firebaseConfiguration.firebaseConfiguration();
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.oneSignal.startInit('e4c2c002-efd7-4cc5-9aa2-cc16376f8d8d', '879857704440');

              _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);

              _this.oneSignal.handleNotificationReceived().subscribe(function () {// do something when notification is received
              });

              _this.oneSignal.handleNotificationOpened().subscribe(function () {// this.router.navigate(['/owner-profile'])
              });

              _this.oneSignal.endInit();

              _this.networkProvider.initializeNetworkEvents(); // Offline event


              _this.events.subscribe('network:offline', function () {
                _this.router.navigate(['/nointernet']);

                _this.toaster.presentToastDisconnect();
              }); // Online event


              _this.events.subscribe('network:online', function () {
                _this.router.navigate(['/tabs/home']);

                _this.toaster.presentToastConnect();
              });

              _this.storage.get('restaurants_id').then(function (restaurants_id) {
                console.log('restaurants_id' + restaurants_id);

                if (restaurants_id != '' && restaurants_id != 0 && restaurants_id != null) {
                  _this.splashScreen.hide();

                  _this.menuCtrl.enable(true);

                  _this.navCtrl.navigateRoot('/tabs/home'); //this.checkauthenticationState = true;

                } else {
                  _this.splashScreen.hide(); //this.checkauthenticationState = false;


                  _this.menuCtrl.enable(false);

                  _this.navCtrl.navigateRoot('/login');
                }
              }); // this.userId = firebase.auth().currentUser.uid;
              //  console.log(user);
              // if(user) {

              /*   console.log('true');
                // this.router.navigate(['/tabs/home']);
                 firebase.database().ref('resturantSetupData/'+user.uid).once("value",snapshot => {
                   console.log('Moeed');
                   if(snapshot.val()){
                     var restId = snapshot.val().restaurant_id;
                     var stringy = JSON.stringify({
                       restaurantId: restId
                     });
                     
                       this.restService.checkStatus(stringy).subscribe(data => {
                         console.log(JSON.parse(data['_body']));
                         var status = JSON.parse(data['_body']).status;
                         if(status == 'Approved'){
                           firebase.database().ref('restaurnatOrderStatus/'+user.uid).once("value" , snapshot => {
                             console.log(snapshot.val());
                             if(snapshot.val()){
                               ////menu enable
                               this.menuCtrl.enable(true);
                               this.checkShopSetup = true;
                               this.checkauthenticationState = true;
                               console.log(this.checkauthenticationState);
                               console.log(user.uid);
                               this.router.navigate(['/tabs/home']);
                               this.splashScreen.hide();
                             }else {
                               this.menuCtrl.enable(false);
                               this.checkShopSetup = true;
                               this.checkauthenticationState = true;
                               this.router.navigate(['/congrats-accepted']);
                               this.splashScreen.hide();
                             }
                              
                           })
                         }else{
                           //this.checkShopSetup = true;
                           //this.checkauthenticationState = true;
                           //console.log(this.checkauthenticationState);
                           //console.log(user.uid);
                           //menu dis
                           this.checkShopSetup = true;
                               this.checkauthenticationState = true;
                           this.menuCtrl.enable(false);
                           this.router.navigate(['/congrats']);
                           this.splashScreen.hide();
                         }
                         
                     } , err => {
                       console.log(err);
                     })
                   }else{
                     this.menuCtrl.enable(false);
                     this.checkauthenticationState = true;
                     console.log(this.checkauthenticationState);
                     this.router.navigate(['/selection']);////////resturant-menu
                     this.splashScreen.hide();
                   }
                 }); */

              /*  }else {
                  this.menuCtrl.enable(false);
                  this.checkauthenticationState = false;
                  console.log(this.checkauthenticationState);
                  this.router.navigate(['/login']);
                  this.splashScreen.hide();
                }*/


              _this.statusBar.styleDefault();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var users_null = null; //check if user is logged in

            this.storage.set('restaurants_id', users_null);
            this.storage.set('user_accounts_id', users_null);
            this.storage.set('email', users_null);
            this.toastService.presentToastFirebaseLogout();
            this.router.navigate(['/login']);
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _firebaseconfig_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseconfigService"]
        }, {
          type: _network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
        }, {
          type: _toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_10__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"]
        }, {
          type: _toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _firebaseconfig_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./firebaseconfig.service */
      "./src/app/firebaseconfig.service.ts");
      /* harmony import */


      var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./firebaseauth.service */
      "./src/app/firebaseauth.service.ts");
      /* harmony import */


      var _signup_signup_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./signup/signup.module */
      "./src/app/signup/signup.module.ts");
      /* harmony import */


      var _login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./login/login.module */
      "./src/app/login/login.module.ts");
      /* harmony import */


      var _profile_profile_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./profile/profile.module */
      "./src/app/profile/profile.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _map_map_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./map/map.module */
      "./src/app/map/map.module.ts");
      /* harmony import */


      var _distance_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./distance.pipe */
      "./src/app/distance.pipe.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _distance_pipe__WEBPACK_IMPORTED_MODULE_22__["DistancePipe"]],
        entryComponents: [],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _signup_signup_module__WEBPACK_IMPORTED_MODULE_11__["SignupPageModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginPageModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_13__["ProfilePageModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_21__["MapPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _firebaseconfig_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseconfigService"], _firebaseauth_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseauthService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__["QRScanner"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_18__["BarcodeScanner"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_25__["OneSignal"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/cameraimage.service.ts":
    /*!****************************************!*\
      !*** ./src/app/cameraimage.service.ts ***!
      \****************************************/

    /*! exports provided: CameraimageService */

    /***/
    function srcAppCameraimageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraimageService", function () {
        return CameraimageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

      var CameraimageService = /*#__PURE__*/function () {
        function CameraimageService(http, camera) {
          _classCallCheck(this, CameraimageService);

          this.http = http;
          this.camera = camera;
          console.log('Hello TakeimageProvider Provider');
        } // click image from camera


        _createClass(CameraimageService, [{
          key: "selectImageInCamera",
          value: function selectImageInCamera() {
            var CAMERA_OPTIONS = {
              allowEdit: true,
              quality: 20,
              targetHeight: 300,
              targetWidth: 300,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.CAMERA,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE
            };
            return this.camera.getPicture(CAMERA_OPTIONS);
          } // choose image from gallery

        }, {
          key: "selectImageInGallery",
          value: function selectImageInGallery() {
            var CAMERA_OPTIONS = {
              allowEdit: true,
              quality: 20,
              targetHeight: 300,
              targetWidth: 300,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE
            };
            return this.camera.getPicture(CAMERA_OPTIONS);
          }
        }]);

        return CameraimageService;
      }();

      CameraimageService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
        }];
      };

      CameraimageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], CameraimageService);
      /***/
    },

    /***/
    "./src/app/distance.pipe.ts":
    /*!**********************************!*\
      !*** ./src/app/distance.pipe.ts ***!
      \**********************************/

    /*! exports provided: DistancePipe */

    /***/
    function srcAppDistancePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DistancePipe", function () {
        return DistancePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DistancePipe = /*#__PURE__*/function () {
        function DistancePipe() {
          _classCallCheck(this, DistancePipe);
        }

        _createClass(DistancePipe, [{
          key: "transform",
          value: function transform(value) {
            return null;
          }
        }]);

        return DistancePipe;
      }();

      DistancePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'distance'
      })], DistancePipe);
      /***/
    },

    /***/
    "./src/app/firebaseauth.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/firebaseauth.service.ts ***!
      \*****************************************/

    /*! exports provided: FirebaseauthService */

    /***/
    function srcAppFirebaseauthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseauthService", function () {
        return FirebaseauthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FirebaseauthService = function FirebaseauthService(http) {
        _classCallCheck(this, FirebaseauthService);

        this.http = http;
        console.log('Hello FirebaseauthProvider Provider');
      };

      FirebaseauthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      FirebaseauthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], FirebaseauthService);
      /***/
    },

    /***/
    "./src/app/firebaseconfig.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/firebaseconfig.service.ts ***!
      \*******************************************/

    /*! exports provided: FirebaseconfigService */

    /***/
    function srcAppFirebaseconfigServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseconfigService", function () {
        return FirebaseconfigService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FirebaseconfigService = /*#__PURE__*/function () {
        function FirebaseconfigService() {
          _classCallCheck(this, FirebaseconfigService);
        }

        _createClass(FirebaseconfigService, [{
          key: "firebaseConfiguration",
          value: function firebaseConfiguration() {
            var firebaseConfig = {
              apiKey: "AIzaSyCLNGs4cMWaP7oh97peA7iWHh--qjYK-tw",
              authDomain: "khaobachaorestaurant.firebaseapp.com",
              databaseURL: "https://khaobachaorestaurant.firebaseio.com",
              projectId: "khaobachaorestaurant",
              storageBucket: "khaobachaorestaurant.appspot.com",
              messagingSenderId: "343591894427",
              appId: "1:343591894427:web:ed505a0fc9ceacab31f53e",
              measurementId: "G-R79Q9JSLQF"
            }; // Initialize Firebase
            //   return firebase.initializeApp(firebaseConfig);
          }
        }]);

        return FirebaseconfigService;
      }();

      FirebaseconfigService.ctorParameters = function () {
        return [];
      };

      FirebaseconfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FirebaseconfigService);
      /***/
    },

    /***/
    "./src/app/loader.service.ts":
    /*!***********************************!*\
      !*** ./src/app/loader.service.ts ***!
      \***********************************/

    /*! exports provided: LoaderService */

    /***/
    function srcAppLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");

      var LoaderService = /*#__PURE__*/function () {
        function LoaderService(http, loadingCtrl) {
          _classCallCheck(this, LoaderService);

          this.http = http;
          this.loadingCtrl = loadingCtrl;
          console.log('Hello LoadersProvider Provider');
        }

        _createClass(LoaderService, [{
          key: "presentLoader",
          value: function presentLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingCtrl.create({
                        message: "\n      <div class=\"custom-spinner-container\">\n      <div class=\"custom-spinner-box\"><img src=\"assets/imgs/loader.gif\"></div>\n      </div>"
                      });

                    case 2:
                      this.loader = _context5.sent;
                      return _context5.abrupt("return", this.loader.present());

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loader.dismiss();

                    case 2:
                      return _context6.abrupt("return", _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoaderService);
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.new-background-color {\n  --background:transparent;\n}\n\nion-input {\n  color: #b40404;\n}\n\nion-label {\n  color: #bfbfbf !important;\n}\n\nion-icon {\n  color: #b40404;\n  margin-top: 15px;\n}\n\nion-list {\n  background: none !important;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\n.no-scroll .scroll-content {\n  overflow: hidden;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n  margin-bottom: 0.6em;\n}\n\n.icon {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: bolder;\n  margin-bottom: 0px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  box-shadow: none !important;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  padding-bottom: 0px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-md.button.button-md.button-default.button-default-md.button-menutoggle.button-menutoggle-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-ios.button.button-ios.button-default.button-default-ios.button-menutoggle.button-menutoggle-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.name-validation {\n  color: #b40404;\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 1px;\n}\n\n.label-floating.sc-ion-label-ios-h {\n  transform: translate3d(0, 8px, 0);\n}\n\n.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value .label-floating.sc-ion-label-ios-h {\n  transform: translateZ(0) scale(0.8) !important;\n}\n\nion-input {\n  position: absolute;\n  top: 25%;\n}\n\nion-item {\n  --min-height: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBSUksa0JBQUE7QUFISjs7QUFLQTtFQUNJLFVBQUE7QUFGSjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUNJLHdCQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSwyQkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksMkJBQUE7QUFVSjs7QUFSQTtFQUNJLDBCQUFBO0FBV0o7O0FBVEE7RUFFSSxrQ0FBQTtBQVlKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBWUo7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksb0NBQUE7RUFDQSwyQkFBQTtBQWFKOztBQVhBO0VBQ0ksY0FBQTtBQWNKOztBQVpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBZUo7O0FBWkE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWVBOztBQWJBO0VBRUksbUJBQUE7QUFlSjs7QUFiQTtFQUNLLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZ0JKOztBQWRBO0VBQ0ksY0FBQTtBQWlCSjs7QUFmQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBb0JKOztBQWxCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFzQko7O0FBcEJBO0VBQ0UsaUNBQUE7QUF1QkY7O0FBckJBO0VBRUksOENBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBeUJKOztBQXZCQTtFQUNJLGtCQUFBO0FBMEJKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2FkZXItZ2lmLXJvd3tcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9tYXJnaW4tdG9wOiA2MCU7XHJcbiAgICAvL3otaW5kZXg6IDk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvYWRlci1naWZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyeyBcclxuICAgIGJvcmRlcjpub25lO1xyXG59XHJcbi5uZXctYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogI2JmYmZiZiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pdGVtLWhhcy1mb2N1cy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaHtcclxuICAgIGNvbG9yOiNiNDA0MDQ7XHJcbn1cclxuLm5vLXNjcm9sbCAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbi5sYWJlbHtcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn0gIFxyXG4uaXRlbXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNDA0MDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42ZW07XHJcbn1cclxuLmljb257XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbn1cclxuLml0ZW0taW5uZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLmxhYmVsLWlvc1tmbG9hdGluZ10gLCAubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbn1cclxuXHJcbi5tYWluX2hlYWRpbmd7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb250LWNvbG9ye1xyXG4gICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmlvbi1jb2xvci1kYW5nZXJ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQsYSAsLnBhcntcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi5vbmVUYXB7XHJcbiAgICBjb2xvcjogIzM4NWM4ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ub3J7XHJcbmNvbG9yOiAjYjQwNDA0O1xyXG5tYXJnaW46IDBweDtcclxufVxyXG4ubmV3VXNlcntcclxuICAgIC8vYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi5sYXN0Um93e1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn1cclxuLml0ZW0taW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtzdGFja2VkXSwgLmlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbc3RhY2tlZF0sIC5pdGVtLWlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbZmxvYXRpbmddLCAuaW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtmbG9hdGluZ10ge1xyXG4gICAgY29sb3I6ICNiMjA0MDQ7XHJcbn1cclxuYnV0dG9uLmRpc2FibGUtaG92ZXIuYmFyLWJ1dHRvbnMuYmFyLWJ1dHRvbnMtbWQuYnV0dG9uLmJ1dHRvbi1tZC5idXR0b24tZGVmYXVsdC5idXR0b24tZGVmYXVsdC1tZC5idXR0b24tbWVudXRvZ2dsZS5idXR0b24tbWVudXRvZ2dsZS1tZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmJ1dHRvbi5kaXNhYmxlLWhvdmVyLmJhci1idXR0b25zLmJhci1idXR0b25zLWlvcy5idXR0b24uYnV0dG9uLWlvcy5idXR0b24tZGVmYXVsdC5idXR0b24tZGVmYXVsdC1pb3MuYnV0dG9uLW1lbnV0b2dnbGUuYnV0dG9uLW1lbnV0b2dnbGUtaW9ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1tZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idXR0b24taW9ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLm5hbWUtdmFsaWRhdGlvbntcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oe1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCw4cHgsMCk7XHJcbn1cclxuLml0ZW0taGFzLWZvY3VzLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy1wbGFjZWhvbGRlci5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy1wbGFjZWhvbGRlciAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtdmFsdWUubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtdmFsdWUgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSguOCkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSguOCkgIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tbWluLWhlaWdodDogNThweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../firebaseauth.service */
      "./src/app/firebaseauth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _alerterror_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../alerterror.service */
      "./src/app/alerterror.service.ts");
      /* harmony import */


      var _toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../toaster.service */
      "./src/app/toaster.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(firebaseAuthService, router, alertCtrl, restService, menuCtrl, //public loader: LoaderService,
        navCtrl, storage, alertError, toastService) {
          _classCallCheck(this, LoginPage);

          this.firebaseAuthService = firebaseAuthService;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.restService = restService;
          this.menuCtrl = menuCtrl;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.alertError = alertError;
          this.toastService = toastService;
          this.email = '';
          this.password = '';
          this.name = '';
          this.userId = ''; //loader

          this.loaderShow = false;
          this.menuCtrl.enable(false);
        }

        _createClass(LoginPage, [{
          key: "login",
          value: function login() {
            var _this2 = this;

            // check the condition for email
            if (this.email == '') {
              this.validationEmail = true;
            }

            if (this.keyupEmailBool == true) {
              this.keyupEmailBool = true;
            }

            if (this.password == '') {
              this.validationPassword = true;
            }

            if (this.keyupEmailBool == false && this.validationEmail == false && this.characterLengthPasswordBool == false && this.validationPassword == false) {
              //this.loader.presentLoader();
              this.loaderShow = true;
              var stringy = JSON.stringify({
                requestType: 'restaurant_login',
                email: this.email,
                password: this.password
              });
              this.restService.authentication(stringy).subscribe(function (response) {
                console.log(JSON.parse(response['_body']));
                _this2.loginData = JSON.parse(response['_body']);

                if (_this2.loginData.message == 'Status Active' && _this2.loginData.status == 'success') {
                  //call here  
                  _this2.storage.set('restaurants_id', _this2.loginData.user_data.restaurants_id);

                  _this2.storage.set('user_accounts_id', _this2.loginData.user_data.user_accounts_id);

                  _this2.storage.set('email', _this2.loginData.user_data.email);

                  _this2.storage.set('restaurant_name', _this2.loginData.user_data.user_name);

                  _this2.toastService.presentToastFirebaseLogin();

                  _this2.loaderShow = false;
                  _this2.email = '';
                  _this2.password = '';

                  _this2.menuCtrl.enable(true);

                  _this2.navCtrl.navigateRoot('/tabs/home');
                } else if (_this2.loginData.status == 'error') {
                  _this2.alertError.presentAlertService(_this2.loginData.message);

                  _this2.loaderShow = false;
                  _this2.email = '';
                  _this2.password = '';
                } else {
                  _this2.alertError.presentAlertService(_this2.loginData.message);

                  _this2.loaderShow = false;
                  _this2.email = '';
                  _this2.password = '';
                }
                /*   this.loaderShow = false;
                   this.email = '';
                   this.password = '';
                   this.toastService.presentToastFirebaseLogin();
                   this.router.navigate(['/tabs/home']);*/

              }, function (err) {
                //this.loader.hideLoader();
                _this2.alertError.presentAlertService(err);

                _this2.loaderShow = false;
              });
            } else {
              console.log('No');
            }
          } //login with facebook

        }, {
          key: "resetPassword",
          value: function resetPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertCtrl.create({
                        header: 'Enter your Email',
                        message: 'A new password will be sent to you',
                        inputs: [{
                          name: 'recoverEmail',
                          placeholder: 'you@example.com'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          handler: function handler(data) {
                            console.log('cancel clicked');
                          }
                        }, {
                          text: 'Submit',
                          handler: function handler(data) {
                            //this.loader.presentLoader();
                            _this3.loaderShow = true; // call user service

                            var forgot = JSON.stringify({
                              requestType: 'send_password',
                              email: data.recoverEmail
                            });
                            console.log(forgot);

                            _this3.restService.forgotPassword(forgot).subscribe(function (response) {
                              _this3.loaderShow = false;

                              _this3.toastService.presentToastFirebaseResetPassword();
                            }, function (err) {
                              _this3.loaderShow = false;

                              _this3.alertError.presentAlertErrorPasswordReset();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "signupPage",
          value: function signupPage() {
            this.router.navigate(['/signup']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {} //validation of email and password
          //password valid

        }, {
          key: "passwordKeyUp",
          value: function passwordKeyUp() {
            if (this.password.length <= 5) {
              this.characterLengthPasswordBool = true;
            } else {
              this.characterLengthPasswordBool = false;
            }
          }
        }, {
          key: "checkFocusPassword",
          value: function checkFocusPassword() {
            this.colorPasswordBool = true;
          }
        }, {
          key: "checkBlurPassword",
          value: function checkBlurPassword() {
            this.colorPasswordBool = false;

            if (this.password != '') {
              this.validationPassword = false;
            } else {
              this.validationPassword = true;
            }
          } //email valid

        }, {
          key: "emailKeyUp",
          value: function emailKeyUp() {
            var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");

            if (expression.test(this.email) && regexdob.test(this.email)) {
              /*if(this.email.length <= 25){
              this.characterLengthEmailBool = false;
              }else {
                this.characterLengthEmailBool = true;
              }*/
              this.keyupEmailBool = false;
            } else {
              console.log('Invalid');
              this.keyupEmailBool = true;
            }
          }
        }, {
          key: "checkFocusEmail",
          value: function checkFocusEmail() {
            this.colorEmailBool = true;
          }
        }, {
          key: "checkBlurEmail",
          value: function checkBlurEmail() {
            this.colorEmailBool = false;

            if (this.email != '') {
              this.validationEmail = false;
            } else {
              this.validationEmail = true;
            }

            if (this.email != '' && !this.validationEmail && !this.keyupEmailBool) {//check the email from server that if that email exists or not
            }
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _firebaseauth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseauthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _alerterror_service__WEBPACK_IMPORTED_MODULE_5__["AlerterrorService"]
        }, {
          type: _toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "./src/app/map/map-routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/map/map-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: MapPageRoutingModule */

    /***/
    function srcAppMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
        return MapPageRoutingModule;
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


      var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map.page */
      "./src/app/map/map.page.ts");

      var routes = [{
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
      }];

      var MapPageRoutingModule = function MapPageRoutingModule() {
        _classCallCheck(this, MapPageRoutingModule);
      };

      MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/map/map.module.ts":
    /*!***********************************!*\
      !*** ./src/app/map/map.module.ts ***!
      \***********************************/

    /*! exports provided: MapPageModule */

    /***/
    function srcAppMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
        return MapPageModule;
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


      var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-routing.module */
      "./src/app/map/map-routing.module.ts");
      /* harmony import */


      var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./map.page */
      "./src/app/map/map.page.ts");

      var MapPageModule = function MapPageModule() {
        _classCallCheck(this, MapPageModule);
      };

      MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
      })], MapPageModule);
      /***/
    },

    /***/
    "./src/app/map/map.page.scss":
    /*!***********************************!*\
      !*** ./src/app/map/map.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppMapMapPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  position: absolute;\n  margin-top: 80%;\n  z-index: 9;\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.scroll {\n  height: 100%;\n}\n\n#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDRTtFQUNFLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItZ2lmLXJvd3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sb2FkZXItZ2lme1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbi5zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbiNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0gICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/map/map.page.ts":
    /*!*********************************!*\
      !*** ./src/app/map/map.page.ts ***!
      \*********************************/

    /*! exports provided: MapPage */

    /***/
    function srcAppMapMapPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPage", function () {
        return MapPage;
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../loader.service */
      "./src/app/loader.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _alerterror_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../alerterror.service */
      "./src/app/alerterror.service.ts"); //import { googlemaps } from 'googlemaps';


      var MapPage = /*#__PURE__*/function () {
        function MapPage(ngZone, geolocation, loader, restService, router, route, alertService) {
          _classCallCheck(this, MapPage);

          this.ngZone = ngZone;
          this.geolocation = geolocation;
          this.loader = loader;
          this.restService = restService;
          this.router = router;
          this.route = route;
          this.alertService = alertService;
          this.loaderShow = false;
          this.centerCords = {
            lat: 30.208372,
            lng: 71.471559
          }; //this.getCategoryRestaurants();
          //this.addMap();
        }

        _createClass(MapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            throw new Error("Method not implemented.");
          }
        }]);

        return MapPage;
      }();

      MapPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
        }, {
          type: _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _alerterror_service__WEBPACK_IMPORTED_MODULE_6__["AlerterrorService"]
        }];
      };

      MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./map.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./map.page.scss */
        "./src/app/map/map.page.scss"))["default"]]
      })], MapPage);
      /***/
    },

    /***/
    "./src/app/network.service.ts":
    /*!************************************!*\
      !*** ./src/app/network.service.ts ***!
      \************************************/

    /*! exports provided: ConnectionStatusEnum, NetworkService */

    /***/
    function srcAppNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionStatusEnum", function () {
        return ConnectionStatusEnum;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
        return NetworkService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");

      var ConnectionStatusEnum;

      (function (ConnectionStatusEnum) {
        ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
        ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
      })(ConnectionStatusEnum || (ConnectionStatusEnum = {}));

      var NetworkService = /*#__PURE__*/function () {
        function NetworkService(alertCtrl, network, eventCtrl) {
          _classCallCheck(this, NetworkService);

          this.alertCtrl = alertCtrl;
          this.network = network;
          this.eventCtrl = eventCtrl;
          console.log('Hello NetworkProvider Provider');
          this.previousStatus = ConnectionStatusEnum.Online;
        }

        _createClass(NetworkService, [{
          key: "initializeNetworkEvents",
          value: function initializeNetworkEvents() {
            var _this4 = this;

            this.network.onDisconnect().subscribe(function () {
              if (_this4.previousStatus === ConnectionStatusEnum.Online) {
                _this4.eventCtrl.publish('network:offline');

                console.log('network:offline');
              }

              _this4.previousStatus = ConnectionStatusEnum.Offline;
            });
            this.network.onConnect().subscribe(function () {
              if (_this4.previousStatus === ConnectionStatusEnum.Offline) {
                _this4.eventCtrl.publish('network:online');

                console.log('network:online');
              }

              _this4.previousStatus = ConnectionStatusEnum.Online;
            });
          }
        }]);

        return NetworkService;
      }();

      NetworkService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
        }];
      };

      NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NetworkService);
      /***/
    },

    /***/
    "./src/app/pipes.module.ts":
    /*!*********************************!*\
      !*** ./src/app/pipes.module.ts ***!
      \*********************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _roundoff_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./roundoff.pipe */
      "./src/app/roundoff.pipe.ts");
      /* harmony import */


      var _setdate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./setdate.pipe */
      "./src/app/setdate.pipe.ts");
      /* harmony import */


      var _settime_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settime.pipe */
      "./src/app/settime.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_roundoff_pipe__WEBPACK_IMPORTED_MODULE_3__["RoundoffPipe"], _setdate_pipe__WEBPACK_IMPORTED_MODULE_4__["SetdatePipe"], _settime_pipe__WEBPACK_IMPORTED_MODULE_5__["SettimePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_roundoff_pipe__WEBPACK_IMPORTED_MODULE_3__["RoundoffPipe"], _setdate_pipe__WEBPACK_IMPORTED_MODULE_4__["SetdatePipe"], _settime_pipe__WEBPACK_IMPORTED_MODULE_5__["SettimePipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../pipes.module */
      "./src/app/pipes.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfilePageRoutingModule"], _pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n  margin-bottom: 0.6em;\n}\n\n.icon-color {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: bolder;\n  margin-bottom: 0px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.updatebtn.button-md, .updatebtn.button-ios {\n  background-color: #b40404 !important;\n  box-shadow: none !important;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  border-bottom: 3px solid #c7c7c7;\n  padding-bottom: 3px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.profile-photo {\n  border-radius: 50% !important;\n  overflow: hidden;\n  height: 65px;\n}\n\n.ProfleName {\n  margin-bottom: 0px;\n  margin-top: 10px !important;\n  color: #b40404;\n}\n\n.ProfleCity {\n  margin: 0px;\n}\n\n.button-outline-md {\n  border-color: #b40404;\n  color: #b40404;\n}\n\n.button-outline-ios {\n  border-color: #b40404;\n  color: #b40404;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\n.arrowLeft {\n  width: 11px;\n  margin-top: 2px;\n  margin-left: 1em;\n}\n\n.settingRight {\n  width: 18px;\n  margin-top: 3px;\n  margin-left: -1em;\n}\n\n.loading-spinner.sc-ion-loading-md, .loading-spinner.sc-ion-loading-ios {\n  display: none;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\nion-input {\n  color: #b40404;\n}\n\n.name-validation {\n  color: #b40404;\n  font-size: 14px;\n  margin: 0;\n  text-align: left;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: #b40404 !important;\n  --ion-color-tint: #b40404 !important;\n}\n\n.label-floating.sc-ion-label-ios-h {\n  transform: translate3d(0, 8px, 0);\n}\n\n.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value .label-floating.sc-ion-label-ios-h {\n  transform: translateZ(0) scale(0.8) !important;\n}\n\nion-input {\n  position: absolute;\n  top: 25%;\n}\n\nion-item {\n  --min-height: 58px;\n}\n\nion-toolbar.ios {\n  --padding-bottom: 0.5em;\n  --padding-top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxVQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLDJCQUFBO0FBSUo7O0FBRkE7RUFDSSwwQkFBQTtBQUtKOztBQUhBO0VBRUksa0NBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLG9DQUFBO0VBQ0EsMkJBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFZQTs7QUFWQTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNLLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBY0o7O0FBWkE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWVKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0FBaUJKOztBQWZBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWhCQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQW1CSjs7QUFqQkE7RUFDSSxjQUFBO0FBb0JKOztBQWpCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXFCSjs7QUFsQkE7RUFDSSxhQUFBO0FBcUJKOztBQW5CQTtFQUNJLGNBQUE7QUFzQko7O0FBcEJBO0VBQ0ksY0FBQTtBQXVCSjs7QUFyQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxvQ0FBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksaUNBQUE7QUEwQko7O0FBeEJBO0VBRUksOENBQUE7QUEyQko7O0FBekJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBNEJKOztBQTFCQTtFQUNJLGtCQUFBO0FBNkJKOztBQTNCQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7QUE4QkoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1naWYtcm93e1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL21hcmdpbi10b3A6IDYwJTtcclxuICAgIC8vei1pbmRleDogOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9hZGVyLWdpZntcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXJ7IFxyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuLmxhYmVse1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufSAgXHJcbi5pdGVte1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDQwNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcclxufVxyXG4uaWNvbi1jb2xvcntcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxufVxyXG4uaXRlbS1pbm5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1pbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50OyBcclxufVxyXG4ubGFiZWwtaW9zW2Zsb2F0aW5nXSAsIC5sYWJlbC1tZFtmbG9hdGluZ10ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcclxufVxyXG4ubWFpbl9oZWFkaW5ne1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5mb250LWNvbG9ye1xyXG4gICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLnVwZGF0ZWJ0bi5idXR0b24tbWQgLC51cGRhdGVidG4uYnV0dG9uLWlvc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dCxhICwucGFye1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbn1cclxuLm9uZVRhcHtcclxuICAgIGNvbG9yOiAjMzg1YzhlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm9ye1xyXG5jb2xvcjogI2I0MDQwNDtcclxubWFyZ2luOiAwcHg7XHJcbn1cclxuLm5ld1VzZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2M3YzdjNztcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuLmxhc3RSb3d7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG4ucHJvZmlsZS1waG90byB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6NjVweDtcclxufVxyXG4uUHJvZmxlTmFtZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi5Qcm9mbGVDaXR5e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmJ1dHRvbi1vdXRsaW5lLW1ke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjQwNDA0O1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbn1cclxuLmJ1dHRvbi1vdXRsaW5lLWlvc3tcclxuICAgIGJvcmRlci1jb2xvcjogI2I0MDQwNDtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi5pdGVtLWlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbc3RhY2tlZF0sIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW3N0YWNrZWRdLCAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSwgLmlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICAgIGNvbG9yOiAjYjIwNDA0O1xyXG59XHJcblxyXG4uYXJyb3dMZWZ0e1xyXG4gICAgd2lkdGg6IDExcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcbi5zZXR0aW5nUmlnaHR7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG59XHJcbi8vaGlkZSBsb2FkZXIgc3Bpbm5lclxyXG4ubG9hZGluZy1zcGlubmVyLnNjLWlvbi1sb2FkaW5nLW1kICwgLmxvYWRpbmctc3Bpbm5lci5zYy1pb24tbG9hZGluZy1pb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cy5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBjb2xvcjojYjQwNDA0O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGNvbG9yOiNiNDA0MDQ7XHJcbn1cclxuLm5hbWUtdmFsaWRhdGlvbntcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaW9uLWNvbG9yLWRhbmdlciB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjYjQwNDA0ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDI0MCwgNjUsIDY1KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6ICNiNDA0MDQgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXRpbnQ6ICNiNDA0MDQgIWltcG9ydGFudDtcclxufVxyXG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oe1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDhweCwwKTtcclxufVxyXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy12YWx1ZS5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy12YWx1ZSAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKC44KSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKC44KSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjUlO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1taW4taGVpZ2h0OiA1OHB4O1xyXG59XHJcbmlvbi10b29sYmFyLmlvc3tcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMC41ZW07XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../firebaseauth.service */
      "./src/app/firebaseauth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../cameraimage.service */
      "./src/app/cameraimage.service.ts");
      /* harmony import */


      var _alerterror_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../alerterror.service */
      "./src/app/alerterror.service.ts");
      /* harmony import */


      var _toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../toaster.service */
      "./src/app/toaster.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(firebase, router, alertCtrl, imageService, alertError, toastService, //public loader: LoaderService,
        storage, restService) {
          _classCallCheck(this, ProfilePage);

          this.firebase = firebase;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.imageService = imageService;
          this.alertError = alertError;
          this.toastService = toastService;
          this.storage = storage;
          this.restService = restService;
          this.userId = '';
          this.name = '';
          this.email = '';
          this.password = '';
          this.number = '';
          this.profileImage = '';
          this.showPasswordInput = false; //loader show bool

          this.loaderShow = false;
          this.test = '';
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            console.log('ionViewDidLoad ProfilePage');
            this.storage.get('user_accounts_id').then(function (user_accounts_id) {
              console.log(user_accounts_id);
              _this5.userId = user_accounts_id;
              var stringy = JSON.stringify({
                userId: user_accounts_id
              });

              _this5.restService.getUserData(stringy).subscribe(function (response) {
                _this5.user_data = JSON.parse(response['_body']);
                _this5.name = _this5.user_data.user_data.user_name;
                _this5.city = _this5.user_data.user_data.city;
                _this5.email = _this5.user_data.user_data.email;
                _this5.number = _this5.user_data.user_data.mobile;
                _this5.password = _this5.user_data.user_data.password;
                _this5.profileImage = "https://dev.khaoaurbachao.com/image.php?image=assets/admin/images/restaurants_images/" + _this5.profileImage + "&height=100px&width=100px&zc=1&ct=0";
              }, function (err) {
                //this.loader.hideLoader();
                _this5.alertError.presentAlertService(err);
              });
            }); //check if user is already logged in

            /*  this.userId = firebase.auth().currentUser.uid;
              console.log(firebase.auth().currentUser);
              if(firebase.auth().currentUser){
                if (firebase.auth().currentUser.providerData[0].providerId == 'password') {
                  console.log('login with normal');
                  this.showPasswordInput = true;
                }else if(firebase.auth().currentUser.providerData[0].providerId == 'facebook.com'){
                  console.log('login with Facebook');
                  this.showPasswordInput = false;
                }
              }
            
              //this.loader.presentLoader();
              this.loaderShow = true;
              console.log(this.userId);
              firebase.database().ref('userSignData/' + this.userId).once("value" , snapshot => {
                //this.loader.hideLoader();
                
                this.loaderShow = false;
                if(snapshot.val()){
                  this.characterLengthNameBool = false;
                  this.keyupNameBool = false;
                  this.validationName = false;
                  this.keyupEmailBool = false;
                  this.validationEmail = false;
                  this.characterLengthPasswordBool = false;
                  this.validationPassword = false;
                  this.validationMobile = false;
                  this.keyupNumberBool = false;
                         this.name = snapshot.val().name;
                  this.email = snapshot.val().email;
                  //making a check to avoid undefined value
                  if(snapshot.val().number){
                    this.number = snapshot.val().number;
                  }else {
                    this.number = '';
                  }
                  if(snapshot.val().profileImage){
                    this.profileImage = snapshot.val().profileImage;
                  }else {
                    this.profileImage = '';
                  }
                }else {
                  console.log('No data');
                }
              }).catch(err => {
                this.loaderShow = false;
                  //this.alertError.presentAlertAuth(err);
              }); */
          } //update data

        }, {
          key: "update",
          value: function update() {
            var _this6 = this;

            //check the condition for name
            if (this.name == '') {
              this.validationName = true;
            }

            if (this.keyupNameBool == true) {
              this.keyupNameBool = true;
            }

            if (this.name.length > 12) {
              this.characterLengthNameBool = true;
            } // check the condition for email


            if (this.email == '') {
              this.validationEmail = true;
            }

            if (this.keyupEmailBool == true) {
              this.keyupEmailBool = true;
            }
            /*if(this.email.length > 25){
              this.characterLengthEmailBool = true;
            }*/
            // check the condition for password


            if (this.password == '') {
              this.validationPassword = true;
            } // check the condition for re password


            if (this.number == '') {
              this.validationMobile = true;
            }

            if (this.keyupNumberBool == true) {
              this.keyupNumberBool = true;
            }

            console.log(this.characterLengthNameBool, this.keyupNameBool, this.validationName, this.keyupEmailBool, this.characterLengthPasswordBool, this.validationPassword, this.validationMobile, this.keyupNumberBool); //finalizing the request

            if (this.characterLengthNameBool == false && this.keyupNameBool == false && this.validationName == false && this.keyupEmailBool == false && this.characterLengthPasswordBool == false && this.validationPassword == false && this.validationMobile == false && this.keyupNumberBool == false) {
              //updating data in firebase
              //this.loader.presentLoader();
              this.loaderShow = true;
              var stringy = JSON.stringify({
                userId: this.userId,
                email: this.email,
                name: this.name,
                number: this.number,
                password: this.password
              });
              this.restService.updateProfileData(stringy).subscribe(function (response) {
                console.log(JSON.parse(response['_body']));
                _this6.loaderShow = false;
              }, function (err) {
                //this.loader.hideLoader();
                _this6.alertError.presentAlertService(err);
              });
              /*  this.firebase.updatePasswordEmail(this.password , this.email , this.showPasswordInput).then(data => {
                  this.firebase.updateProfileData(this.userId , this.name , this.email , this.number , this.profileImage).then(data => {
                    //this.loader.hideLoader();
                    ////check if user is logged in
                    var stringy = JSON.stringify({
                      userId: this.userId,
                      name: this.name,
                      number: this.number,
                      email: this.email,
                      profilePicture: this.profileImage
                    });
                    //updating data on server
                    
                    this.restService.updateUserData(stringy).subscribe(response => {
                      console.log(response);
                      //this.loader.hideLoader();
                      this.loaderShow = false;
                      this.toastService.presentToastFirebaseUpdateData();
                    } , err => {
                      
                      this.alertError.presentAlertService(err);
                    });
                    
                  }).catch(err => {
                     //this.loader.hideLoader();
                     this.loaderShow = false;
                    this.alertError.presentAlertAuth(err);
                  });
                }).catch(err => {
                  //this.loader.hideLoader();
                  this.loaderShow = false;
                  this.alertError.presentAlertAuth(err);
                });
                */
            } else {
              console.log('No');
            }
          } //Take profile picture

        }, {
          key: "takeProfilePicture",
          value: function takeProfilePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertCtrl.create({
                        message: 'Upload profile picture?',
                        buttons: [{
                          text: 'Take a photo',
                          handler: function handler() {
                            _this7.takeImageFromCamera();
                          }
                        }, {
                          text: 'Get photo from gallery',
                          handler: function handler() {
                            _this7.getImageFromGallery();
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera() {
            var _this8 = this;

            this.imageService.selectImageInCamera().then(function (imageData) {
              _this8.profileImage = "data:image/png;base64,".concat(imageData);
              console.log(_this8.profileImage);

              _this8.updateImage(_this8.profileImage);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "getImageFromGallery",
          value: function getImageFromGallery() {
            var _this9 = this;

            this.imageService.selectImageInGallery().then(function (imageData) {
              _this9.profileImage = "data:image/png;base64,".concat(imageData);

              _this9.updateImage(_this9.profileImage);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "updateImage",
          value: function updateImage(image) {
            var _this10 = this;

            var stringy = JSON.stringify({
              userId: this.userId,
              profileImage: image
            });
            this.restService.updateProfileData(stringy).subscribe(function (response) {
              console.log(JSON.parse(response['_body']));
              _this10.loaderShow = false;
            }, function (err) {
              //this.loader.hideLoader();
              _this10.alertError.presentAlertService(err);
            });
          } //logout profile

        }, {
          key: "logout",
          value: function logout() {
            var users_null = null; //check if user is logged in

            this.storage.set('restaurants_id', users_null);
            this.storage.set('user_accounts_id', users_null);
            this.storage.set('email', users_null);
            this.toastService.presentToastFirebaseLogout();
            this.router.navigate(['/login']);
          } //validations of fields
          //validations of input fields
          //name

        }, {
          key: "nameKeyUp",
          value: function nameKeyUp() {
            console.log('sd');
            var regex = new RegExp(/^[A-Za-z ]+$/);
            var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");

            if (regex.test(this.name) && regexdob.test(this.name)) {
              console.log('sd');

              if (this.name.length <= 30) {
                this.characterLengthNameBool = false;
              } else {
                this.characterLengthNameBool = true;
              }

              this.keyupNameBool = false;
            } else {
              console.log('sd');
              this.keyupNameBool = true;
            }
          }
        }, {
          key: "checkFocusName",
          value: function checkFocusName() {
            this.colorNameBool = true;
          }
        }, {
          key: "checkBlurName",
          value: function checkBlurName() {
            this.colorNameBool = false;
            console.log('blur name');

            if (this.name != '') {
              this.validationName = false;
            } else {
              this.validationName = true;
            }
          } //password valid

        }, {
          key: "passwordKeyUp",
          value: function passwordKeyUp() {
            console.log(this.password.length);

            if (this.password.length <= 5) {
              this.characterLengthPasswordBool = true;
            } else {
              this.characterLengthPasswordBool = false;
            }
          }
        }, {
          key: "checkFocusPassword",
          value: function checkFocusPassword() {
            this.colorPasswordBool = true;
          }
        }, {
          key: "checkBlurPassword",
          value: function checkBlurPassword() {
            this.colorPasswordBool = false;

            if (this.password != '') {
              this.validationPassword = false;
            } else {
              this.validationPassword = true;
            }
          } //email valid

        }, {
          key: "emailKeyUp",
          value: function emailKeyUp() {
            var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");

            if (expression.test(this.email) && regexdob.test(this.email)) {
              /*if(this.email.length <= 25){
                this.characterLengthEmailBool = false;
              }else {
                this.characterLengthEmailBool = true;
              }*/
              this.keyupEmailBool = false;
            } else {
              console.log('Invalid');
              this.keyupEmailBool = true;
            }
          }
        }, {
          key: "checkFocusEmail",
          value: function checkFocusEmail() {
            this.colorEmailBool = true;
          }
        }, {
          key: "checkBlurEmail",
          value: function checkBlurEmail() {
            this.colorEmailBool = false;

            if (this.email != '') {
              this.validationEmail = false;
            } else {
              this.validationEmail = true;
            }

            if (this.email != '' && !this.validationEmail && !this.keyupEmailBool) {//check the email from server that if that email exists or not
            }
          } // for cell number

        }, {
          key: "checkFocusMobile",
          value: function checkFocusMobile() {}
        }, {
          key: "checkBlurMobile",
          value: function checkBlurMobile() {
            if (this.number != '') {
              this.validationMobile = false;
            } else {
              this.validationMobile = true;
            }
          }
        }, {
          key: "numberKeyUp",
          value: function numberKeyUp() {
            var regex = new RegExp("^[0-9]*$");
            var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");

            if (regex.test(this.number) && regexdob.test(this.number)) {
              if (this.number.length <= 10) {
                this.characterLengthNumberBool = false;
              } else {
                console.log('Mobile Number is too long');
                this.characterLengthNumberBool = true;
              }

              console.log('Ok');
              this.keyupNumberBool = false;
            } else {
              console.log('Invalid');
              this.keyupNumberBool = true;
            }
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _firebaseauth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseauthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__["CameraimageService"]
        }, {
          type: _alerterror_service__WEBPACK_IMPORTED_MODULE_6__["AlerterrorService"]
        }, {
          type: _toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "./src/app/rest.service.ts":
    /*!*********************************!*\
      !*** ./src/app/rest.service.ts ***!
      \*********************************/

    /*! exports provided: RestService */

    /***/
    function srcAppRestServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestService", function () {
        return RestService;
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


      var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

      var RestService = /*#__PURE__*/function () {
        function RestService(http) {
          _classCallCheck(this, RestService);

          this.http = http;
          this.createAccountUrl = 'http://dev.khaoaurbachao.com/Webservices/signup';
          this.UpdateProfileUrl = 'http://dev.khaoaurbachao.com/Webservices/update_user';
          this.getAllRestaurantsUrl = 'http://dev.khaoaurbachao.com/Webservices/get_restaurants'; //get all retaurants , top restaurrants,new restaurants

          this.getSingleCategoryRestauranyUrl = 'http://dev.khaoaurbachao.com/Webservices/get_restaurants';
          this.filtersUrl = 'http://dev.khaoaurbachao.com/Webservices/filters';
          this.singleRestaurantDetailUrl = 'http://dev.khaoaurbachao.com/Webservices/restaurant_details';
          this.getAboutDataUrl = 'http://dev.khaoaurbachao.com/Webservices/restaurant_details';
          this.getRestaurantReviewsUrl = 'http://dev.khaoaurbachao.com/Webservices/restaurant_details';
          this.sendRestaurantReviewsUrl = 'http://dev.khaoaurbachao.com/Webservices/save_review';
          this.confirmReservationForUserUrl = 'http://dev.khaoaurbachao.com/Webservices/reservations';
          this.favouriteRestaurantUrl = 'https://dev.khaoaurbachao.com/Webservices/fav_restaurants';
          this.allhereRestaurantsUrl = 'https://dev.khaoaurbachao.com/Webservices/get_restaurants';
          this.restaurant_data = 'https://dev.khaoaurbachao.com/Webservices/restaurant_data';
          this.menu_categories = 'http://dev.khaoaurbachao.com/webservices/get_categories'; //https://dev.khaoaurbachao.com/Webservices/item_categories

          this.getReservationURL = 'https://dev.khaoaurbachao.com/Webservices/reservations';
          this.getItemsURL = 'https://dev.khaoaurbachao.com/Webservices/items';
          this.postdiscountURL = 'https://dev.khaoaurbachao.com/Webservices/discounts';
          this.checkStatusUrl = 'https://dev.khaoaurbachao.com/Webservices/check_status_rest';
          this.discountShowUrl = 'https://dev.khaoaurbachao.com/Webservices/discounts';
          this.saveitemUrl = 'https://dev.khaoaurbachao.com/Webservices/discounts';
          this.singleItemSave = 'https://dev.khaoaurbachao.com/Webservices/save_item';
          this.reservationsURL = 'https://dev.khaoaurbachao.com/Webservices/reservations';
          this.loginURl = 'https://dev.khaoaurbachao.com/Webservices/login';
          this.getUserDataURl = "https://dev.khaoaurbachao.com/Webservices/get_user_data";
          this.updateProfiledataURL = "https://dev.khaoaurbachao.com/Webservices/update_restaurant_profile";
          this.deleteitemURL = "https://dev.khaoaurbachao.com/Webservices/items";
          this.updateRestaurantSetting = "https://dev.khaoaurbachao.com/Webservices/restaurant_settings";
          this.updateDayDiscount = "https://dev.khaoaurbachao.com/Webservices/discounts";
          this.addSingleitem = "https://dev.khaoaurbachao.com/Webservices/items";
          this.forgotPasswordUrl = "https://dev.khaoaurbachao.com/Webservices/forgot_password";
          this.discountdeleteUrl = "https://dev.khaoaurbachao.com/Webservices/discounts";
          this.getSettingsUrl = "https://dev.khaoaurbachao.com/Webservices/restaurant_settings";
          this.getNotificationURL = "https://dev.khaoaurbachao.com/Webservices/notifications";
          this.getTopRestaurantsUrl = '';
          this.getNewRestaurantsUrl = '';
          this.getAZRestaurantsUrl = '';
          this.getReservationDetailsUrl = '';
          this.getFavoritesUrl = '';
          this.getpreviousReservationsUrl = '';
          this.getupcomingReservationsUrl = '';
          this.getNotificationsUrl = '';
          console.log('Hello RestProvider Provider');
        } //get notifications


        _createClass(RestService, [{
          key: "getNotifications",
          value: function getNotifications(data) {
            console.log(data);
            return this.http.post(this.getNotificationURL, data);
          } //send discount delete data

        }, {
          key: "setting",
          value: function setting(data) {
            console.log(data);
            return this.http.post(this.getSettingsUrl, data);
          } //send discount delete data

        }, {
          key: "discountDelete",
          value: function discountDelete(data) {
            console.log(data);
            return this.http.post(this.discountdeleteUrl, data);
          } //send resturant data

        }, {
          key: "createRestaurantCall",
          value: function createRestaurantCall(data) {
            console.log(data);
            return this.http.post(this.restaurant_data, data);
          } //get menu categories

        }, {
          key: "getMenuCategories",
          value: function getMenuCategories() {
            return this.http.get(this.menu_categories);
          } //getReservation

        }, {
          key: "getReservation",
          value: function getReservation(data) {
            console.log(data);
            return this.http.post(this.getReservationURL, data);
          }
        }, {
          key: "savemultipleItems",
          value: function savemultipleItems(data) {
            return this.http.post(this.singleItemSave, data);
          } //postOnDaysDiscount

        }, {
          key: "postOnDaysDiscount",
          value: function postOnDaysDiscount(data) {
            console.log(data);
            return this.http.post(this.postdiscountURL, data);
          } //getitems

        }, {
          key: "getItems",
          value: function getItems(data) {
            console.log(data);
            return this.http.post(this.getItemsURL, data);
          } //getitems

        }, {
          key: "saveItems",
          value: function saveItems(data) {
            console.log(data);
            return this.http.post(this.saveitemUrl, data);
          } //create user account

        }, {
          key: "createAccountCall",
          value: function createAccountCall(data) {
            console.log(data);
            return this.http.post(this.createAccountUrl, data);
          } //update user data

        }, {
          key: "updateUserData",
          value: function updateUserData(data) {
            console.log(data);
            return this.http.post(this.UpdateProfileUrl, data);
          } //get all restaurants data

        }, {
          key: "getAllRestaurants",
          value: function getAllRestaurants(data) {
            return this.http.post(this.getAllRestaurantsUrl, data);
          } //notifications

        }, {
          key: "getSingleCategoryRestaurant",
          value: function getSingleCategoryRestaurant(data) {
            console.log(data);
            return this.http.post(this.getSingleCategoryRestauranyUrl, data);
          } //single restaurant details

        }, {
          key: "getSingleRestaurantDetails",
          value: function getSingleRestaurantDetails(data) {
            console.log(data);
            return this.http.post(this.singleRestaurantDetailUrl, data);
          } //single restaurant details

        }, {
          key: "getAboutSection",
          value: function getAboutSection(data) {
            console.log(data);
            return this.http.post(this.getAboutDataUrl, data);
          } //single restaurant details

        }, {
          key: "getReviewSection",
          value: function getReviewSection(data) {
            console.log(data);
            return this.http.post(this.getRestaurantReviewsUrl, data);
          } //single restaurant details

        }, {
          key: "sendReviewSection",
          value: function sendReviewSection(data) {
            console.log(data);
            return this.http.post(this.sendRestaurantReviewsUrl, data);
          } //single restaurant details

        }, {
          key: "confirmReservationForUser",
          value: function confirmReservationForUser(data) {
            console.log(data);
            return this.http.post(this.confirmReservationForUserUrl, data);
          } //favourite restaurant details

        }, {
          key: "favouriteRestaurant",
          value: function favouriteRestaurant(data) {
            console.log(data);
            return this.http.post(this.favouriteRestaurantUrl, data);
          } //get all here restaurant details

        }, {
          key: "getHereRestaurants",
          value: function getHereRestaurants(data) {
            console.log(data);
            return this.http.post(this.allhereRestaurantsUrl, data);
          } //notifications

        }, {
          key: "getFiltersRestaurant",
          value: function getFiltersRestaurant(data) {
            console.log(data);
            return this.http.post(this.filtersUrl, data);
          } //get all restaurants data

        }, {
          key: "getTopRestaurants",
          value: function getTopRestaurants() {
            return this.http.get(this.getTopRestaurantsUrl);
          } //get all restaurants data

        }, {
          key: "getNewRestaurants",
          value: function getNewRestaurants() {
            return this.http.get(this.getNewRestaurantsUrl);
          } //get az restaurants data

        }, {
          key: "getAZRestaurants",
          value: function getAZRestaurants() {
            return this.http.get(this.getAZRestaurantsUrl);
          } //reservations details

        }, {
          key: "reservations",
          value: function reservations(data) {
            return this.http.post(this.getReservationDetailsUrl, data);
          } //reservations details

        }, {
          key: "favorites",
          value: function favorites(data) {
            return this.http.post(this.getFavoritesUrl, data);
          } //reservations

        }, {
          key: "previousReservations",
          value: function previousReservations(data) {
            return this.http.post(this.getpreviousReservationsUrl, data);
          }
        }, {
          key: "upcomingReservations",
          value: function upcomingReservations(data) {
            return this.http.post(this.getupcomingReservationsUrl, data);
          } //notifications

        }, {
          key: "notifications",
          value: function notifications(data) {
            return this.http.post(this.getNotificationsUrl, data);
          } //check status of user

        }, {
          key: "checkStatus",
          value: function checkStatus(data) {
            return this.http.post(this.checkStatusUrl, data);
          } //check status of user

        }, {
          key: "discountShow",
          value: function discountShow(data) {
            return this.http.post(this.discountShowUrl, data);
          }
        }, {
          key: "getDiscounts",
          value: function getDiscounts(data) {
            return this.http.post(this.discountShowUrl, data);
          }
        }, {
          key: "timePeriod",
          value: function timePeriod(data) {
            console.log(data);
            return this.http.post(this.reservationsURL, data);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(data) {
            return this.http.post(this.forgotPasswordUrl, data);
          }
        }, {
          key: "authentication",
          value: function authentication(data) {
            console.log(data);
            return this.http.post(this.loginURl, data);
          }
        }, {
          key: "getUserData",
          value: function getUserData(data) {
            console.log(data);
            return this.http.post(this.getUserDataURl, data);
          }
        }, {
          key: "updateProfileData",
          value: function updateProfileData(data) {
            return this.http.post(this.updateProfiledataURL, data);
          }
        }, {
          key: "deleteItemURL",
          value: function deleteItemURL(data) {
            return this.http.post(this.deleteitemURL, data);
          }
        }, {
          key: "updateRestaurantSettings",
          value: function updateRestaurantSettings(data) {
            return this.http.post(this.updateRestaurantSetting, data);
          }
        }, {
          key: "updateOnDaysDiscount",
          value: function updateOnDaysDiscount(data) {
            return this.http.post(this.updateDayDiscount, data);
          }
        }, {
          key: "saveSingleItem",
          value: function saveSingleItem(data) {
            return this.http.post(this.addSingleitem, data);
          }
        }]);

        return RestService;
      }();

      RestService.ctorParameters = function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
        }];
      };

      RestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RestService);
      /***/
    },

    /***/
    "./src/app/roundoff.pipe.ts":
    /*!**********************************!*\
      !*** ./src/app/roundoff.pipe.ts ***!
      \**********************************/

    /*! exports provided: RoundoffPipe */

    /***/
    function srcAppRoundoffPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoundoffPipe", function () {
        return RoundoffPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RoundoffPipe = /*#__PURE__*/function () {
        function RoundoffPipe() {
          _classCallCheck(this, RoundoffPipe);
        }

        _createClass(RoundoffPipe, [{
          key: "transform",
          value: function transform(value) {
            return Math.round(value);
          }
        }]);

        return RoundoffPipe;
      }();

      RoundoffPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'roundoff'
      })], RoundoffPipe);
      /***/
    },

    /***/
    "./src/app/setdate.pipe.ts":
    /*!*********************************!*\
      !*** ./src/app/setdate.pipe.ts ***!
      \*********************************/

    /*! exports provided: SetdatePipe */

    /***/
    function srcAppSetdatePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetdatePipe", function () {
        return SetdatePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SetdatePipe = /*#__PURE__*/function () {
        function SetdatePipe() {
          _classCallCheck(this, SetdatePipe);
        }

        _createClass(SetdatePipe, [{
          key: "transform",
          value: function transform(value) {
            var dateString = value;
            this.date_split = dateString.split(" ");
            return this.date_split[0];
          }
        }]);

        return SetdatePipe;
      }();

      SetdatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'setdate'
      })], SetdatePipe);
      /***/
    },

    /***/
    "./src/app/settime.pipe.ts":
    /*!*********************************!*\
      !*** ./src/app/settime.pipe.ts ***!
      \*********************************/

    /*! exports provided: SettimePipe */

    /***/
    function srcAppSettimePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettimePipe", function () {
        return SettimePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SettimePipe = /*#__PURE__*/function () {
        function SettimePipe() {
          _classCallCheck(this, SettimePipe);
        }

        _createClass(SettimePipe, [{
          key: "transform",
          value: function transform(value) {
            var dateString = value;
            this.date_split = dateString.split(" ");
            return this.date_split[1];
          }
        }]);

        return SettimePipe;
      }();

      SettimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'settime'
      })], SettimePipe);
      /***/
    },

    /***/
    "./src/app/signup/signup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.list-md .item-block .item-inner {\n  border: none;\n}\n\n.new-background-color {\n  --background:transparent;\n}\n\nion-input {\n  color: #b40404;\n}\n\nion-label {\n  color: #bfbfbf !important;\n}\n\nion-icon {\n  color: #b40404;\n  margin-top: 15px;\n}\n\nion-list {\n  background: none !important;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #b40404;\n}\n\n.no-scroll .scroll-content {\n  overflow: hidden;\n}\n\n.label {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.item {\n  border: 1px solid #b40404;\n  border-radius: 40px;\n  margin-bottom: 0.6em;\n}\n\n.icon {\n  font-size: 1.4em;\n  color: #b40404;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.text-input {\n  margin-top: 0px !important;\n}\n\n.label-ios[floating], .label-md[floating] {\n  transform: translate3d(0, 10px, 0);\n}\n\n.main_heading {\n  color: #b40404;\n  font-size: 30px;\n  font-weight: bolder;\n  margin-bottom: 0px;\n}\n\n.font-color {\n  color: #bfbfbf;\n  margin-top: 0px;\n}\n\n.ion-color-danger {\n  --ion-color-base: #b40404 !important;\n  box-shadow: none !important;\n}\n\ninput, a, .par {\n  color: #b40404;\n}\n\n.oneTap {\n  color: #385c8e;\n  font-size: 17px;\n  margin: 0px;\n}\n\n.or {\n  color: #b40404;\n  margin: 0px;\n}\n\n.newUser {\n  padding-bottom: 3px;\n}\n\n.lastRow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n}\n\n.item-input-has-focus .label-md[stacked], .input-has-focus .label-md[stacked], .item-input-has-focus .label-md[floating], .input-has-focus .label-md[floating] {\n  color: #b20404;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-md.button.button-md.button-default.button-default-md.button-menutoggle.button-menutoggle-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\nbutton.disable-hover.bar-buttons.bar-buttons-ios.button.button-ios.button-default.button-default-ios.button-menutoggle.button-menutoggle-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-md {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.button-ios {\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.name-validation {\n  color: #b40404;\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLDJCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtBQU9KOztBQUxBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUkE7RUFDSSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksMEJBQUE7QUFZSjs7QUFWQTtFQUVJLGtDQUFBO0FBYUo7O0FBVkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFWQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxvQ0FBQTtFQUNBLDJCQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0FBZUo7O0FBYkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFnQko7O0FBYkE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWdCQTs7QUFkQTtFQUVJLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ssa0JBQUE7RUFDRCxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFpQko7O0FBZkE7RUFDSSxjQUFBO0FBa0JKOztBQWhCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBcUJKOztBQW5CQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFzQko7O0FBcEJBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF1QkoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItZ2lmLXJvd3tcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9tYXJnaW4tdG9wOiA2MCU7XHJcbiAgICAvL3otaW5kZXg6IDk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvYWRlci1naWZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyeyBcclxuICAgIGJvcmRlcjpub25lO1xyXG59XHJcbi5uZXctYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogI2JmYmZiZiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyBcclxufVxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cy5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBjb2xvcjojYjQwNDA0O1xyXG59XHJcbi5uby1zY3JvbGwgLnNjcm9sbC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4ubGFiZWx7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG59ICBcclxuLml0ZW17XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjQwNDA0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNmVtO1xyXG59XHJcbi5pY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGNvbG9yOiAjYjQwNDA0O1xyXG59XHJcbi5pdGVtLWlubmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5sYWJlbC1pb3NbZmxvYXRpbmddICwgLmxhYmVsLW1kW2Zsb2F0aW5nXSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG59XHJcblxyXG4ubWFpbl9oZWFkaW5ne1xyXG4gICAgY29sb3I6ICNiNDA0MDQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZm9udC1jb2xvcntcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5pb24tY29sb3ItZGFuZ2Vye1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2I0MDQwNCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0LGEgLC5wYXJ7XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxufVxyXG4ub25lVGFwe1xyXG4gICAgY29sb3I6ICMzODVjOGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLm9ye1xyXG5jb2xvcjogI2I0MDQwNDtcclxubWFyZ2luOiAwcHg7XHJcbn1cclxuLm5ld1VzZXJ7XHJcbiAgLy8gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG4ubGFzdFJvd3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcbi5pdGVtLWlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbc3RhY2tlZF0sIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW3N0YWNrZWRdLCAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSwgLmlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICAgIGNvbG9yOiAjYjIwNDA0O1xyXG59XHJcbmJ1dHRvbi5kaXNhYmxlLWhvdmVyLmJhci1idXR0b25zLmJhci1idXR0b25zLW1kLmJ1dHRvbi5idXR0b24tbWQuYnV0dG9uLWRlZmF1bHQuYnV0dG9uLWRlZmF1bHQtbWQuYnV0dG9uLW1lbnV0b2dnbGUuYnV0dG9uLW1lbnV0b2dnbGUtbWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5idXR0b24uZGlzYWJsZS1ob3Zlci5iYXItYnV0dG9ucy5iYXItYnV0dG9ucy1pb3MuYnV0dG9uLmJ1dHRvbi1pb3MuYnV0dG9uLWRlZmF1bHQuYnV0dG9uLWRlZmF1bHQtaW9zLmJ1dHRvbi1tZW51dG9nZ2xlLmJ1dHRvbi1tZW51dG9nZ2xlLWlvc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idXR0b24tbWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnV0dG9uLWlvc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5uYW1lLXZhbGlkYXRpb257XHJcbiAgICBjb2xvcjogI2I0MDQwNDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/signup/signup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../firebaseauth.service */
      "./src/app/firebaseauth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../toaster.service */
      "./src/app/toaster.service.ts");
      /* harmony import */


      var _alerterror_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../alerterror.service */
      "./src/app/alerterror.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(alertCtrl, firebaseAuthService, router, toastService, //public loader: LoaderService,
        alertError, restService) {
          _classCallCheck(this, SignupPage);

          this.alertCtrl = alertCtrl;
          this.firebaseAuthService = firebaseAuthService;
          this.router = router;
          this.toastService = toastService;
          this.alertError = alertError;
          this.restService = restService; //ngModels

          this.name = '';
          this.email = '';
          this.number = '';
          this.password = '';
          this.userId = ''; //loader bool

          this.loaderShow = false;
          this.test = '';
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signup",
          value: function signup() {
            //check the condition for name
            if (this.name == '') {
              this.validationName = true;
            }

            if (this.keyupNameBool == true) {
              this.keyupNameBool = true;
            }

            if (this.name.length > 12) {
              this.characterLengthNameBool = true;
            } // check the condition for email


            if (this.email == '') {
              this.validationEmail = true;
            }

            if (this.keyupEmailBool == true) {
              this.keyupEmailBool = true;
            }
            /*if(this.email.length > 25){
              this.characterLengthEmailBool = true;
            }*/
            // check the condition for password


            if (this.password == '') {
              this.validationPassword = true;
            } // check the condition for re password


            if (this.number == '') {
              this.validationMobile = true;
            }

            if (this.keyupNumberBool == true) {
              this.keyupNumberBool = true;
            } //finalizing the request


            if (this.characterLengthNameBool == false && this.keyupNameBool == false && this.validationName == false && this.keyupEmailBool == false && this.validationEmail == false && this.characterLengthPasswordBool == false && this.validationPassword == false && this.validationMobile == false && this.keyupNumberBool == false) {
              ///
              if (this.number.length == 10) {
                this.loaderShow = true; //this.loader.presentLoader();
              } else {
                this.toastService.presentToastMessage('Please enter last 10 characters of your cell number!');
              }
            } else {
              console.log('No');
            }
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(confirmationResult) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this11 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertCtrl.create({
                        header: 'Enter the Confirmation code!',
                        inputs: [{
                          name: 'confirmationCode',
                          placeholder: 'Confirmation Code'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          handler: function handler(data) {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Send',
                          handler: function handler(data) {
                            _this11.loaderShow = true;
                            confirmationResult.confirm(data.confirmationCode).then(function (result) {
                              // User signed in successfully.
                              console.log(result.user);
                            })["catch"](function (error) {
                              // User couldn't sign in (bad verification code?)
                              _this11.alertError.presentAlertErrorWrongOTP();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context9.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "loginPage",
          value: function loginPage() {
            this.router.navigate(['/login']);
          } //validations of input fields
          //name

        }, {
          key: "nameKeyUp",
          value: function nameKeyUp() {
            var regex = new RegExp(/^[A-Za-z ]+$/);
            var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");

            if (regex.test(this.name) && regexdob.test(this.name)) {
              if (this.name.length <= 20) {
                this.characterLengthNameBool = false;
              } else {
                this.characterLengthNameBool = true;
              }

              this.keyupNameBool = false;
            } else {
              this.keyupNameBool = true;
            }
          }
        }, {
          key: "checkFocusName",
          value: function checkFocusName() {
            this.colorNameBool = true;
          }
        }, {
          key: "checkBlurName",
          value: function checkBlurName() {
            this.colorNameBool = false;

            if (this.name != '') {
              this.validationName = false;
            } else {
              this.validationName = true;
            }
          } //password valid

        }, {
          key: "passwordKeyUp",
          value: function passwordKeyUp() {
            console.log(this.password.length);

            if (this.password.length <= 5) {
              this.characterLengthPasswordBool = true;
            } else {
              this.characterLengthPasswordBool = false;
            }
          }
        }, {
          key: "checkFocusPassword",
          value: function checkFocusPassword() {
            this.colorPasswordBool = true;
          }
        }, {
          key: "checkBlurPassword",
          value: function checkBlurPassword() {
            this.colorPasswordBool = false;

            if (this.password != '') {
              this.validationPassword = false;
            } else {
              this.validationPassword = true;
            }
          } //email valid

        }, {
          key: "emailKeyUp",
          value: function emailKeyUp() {
            var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");

            if (expression.test(this.email) && regexdob.test(this.email)) {
              /*if(this.email.length <= 25){
                this.characterLengthEmailBool = false;
              }else {
                this.characterLengthEmailBool = true;
              }*/
              this.keyupEmailBool = false;
            } else {
              console.log('Invalid');
              this.keyupEmailBool = true;
            }
          }
        }, {
          key: "checkFocusEmail",
          value: function checkFocusEmail() {
            this.colorEmailBool = true;
          }
        }, {
          key: "checkBlurEmail",
          value: function checkBlurEmail() {
            this.colorEmailBool = false;

            if (this.email != '') {
              this.validationEmail = false;
            } else {
              this.validationEmail = true;
            }

            if (this.email != '' && !this.validationEmail && !this.keyupEmailBool) {//check the email from server that if that email exists or not
            }
          } // for cell number

        }, {
          key: "checkFocusMobile",
          value: function checkFocusMobile() {}
        }, {
          key: "checkBlurMobile",
          value: function checkBlurMobile() {
            if (this.number != '') {
              this.validationMobile = false;
            } else {
              this.validationMobile = true;
            }
          }
        }, {
          key: "numberKeyUp",
          value: function numberKeyUp() {
            var regex = new RegExp("^[0-9]*$");
            var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");

            if (regex.test(this.number) && regexdob.test(this.number)) {
              if (this.number.length <= 10) {
                this.characterLengthNumberBool = false;
              } else {
                console.log('Mobile Number is too long');
                this.characterLengthNumberBool = true;
              }

              console.log('Ok');
              this.keyupNumberBool = false;
            } else {
              console.log('Invalid');
              this.keyupNumberBool = true;
            }
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _firebaseauth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseauthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
        }, {
          type: _alerterror_service__WEBPACK_IMPORTED_MODULE_6__["AlerterrorService"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tab_s {\n  box-shadow: 0px -1px 11px 2px #0000000f;\n}\n\nion-tab-button img {\n  width: 22px;\n}\n\nion-tab-button ion-label {\n  color: #a0a0a0;\n}\n\n.tab-selected ion-label {\n  color: #b40404 !important;\n}\n\n.menu_img {\n  top: 2px;\n  position: relative;\n}\n\n.tab_s.ios {\n  padding: 7px 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLHVDQUFBO0FBQ0g7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQURBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBSUE7O0FBRkM7RUFDRyxnQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJfc3tcclxuICAgYm94LXNoYWRvdzogMHB4IC0xcHggMTFweCAycHggIzAwMDAwMDBmO1xyXG59XHJcbmlvbi10YWItYnV0dG9uIGltZ3tcclxuICAgIHdpZHRoOjIycHg7XHJcbn1cclxuaW9uLXRhYi1idXR0b24gaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICNhMGEwYTA7XHJcbn1cclxuXHJcbi50YWItc2VsZWN0ZWQgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6I2I0MDQwNCAhaW1wb3J0YW50O1xyXG59XHJcbi5tZW51X2ltZ3tcclxudG9wOiAycHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gLnRhYl9zLmlvc3tcclxuICAgIHBhZGRpbmc6IDdweCAwZW07XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage() {
          _classCallCheck(this, TabsPage);

          this.selectTab = 'tab1';
        }

        _createClass(TabsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "tabChange",
          value: function tabChange(e) {
            this.selectTab = e.tab;
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "./src/app/toaster.service.ts":
    /*!************************************!*\
      !*** ./src/app/toaster.service.ts ***!
      \************************************/

    /*! exports provided: ToasterService */

    /***/
    function srcAppToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
        return ToasterService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");

      var ToasterService = /*#__PURE__*/function () {
        function ToasterService(http, toastCtrl) {
          _classCallCheck(this, ToasterService);

          this.http = http;
          this.toastCtrl = toastCtrl;
          console.log('Hello ToasterProvider Provider');
        } //firebase auth toasters


        _createClass(ToasterService, [{
          key: "presentToastFirebaseLogin",
          value: function presentToastFirebaseLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastCtrl.create({
                        message: 'You are logged in Successfully',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context10.sent;
                      return _context10.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "presentToastFirebaseSignup",
          value: function presentToastFirebaseSignup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var toast;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.toastCtrl.create({
                        message: 'You are Signed up Successfully',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context11.sent;
                      return _context11.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "presentToastFirebaseLogout",
          value: function presentToastFirebaseLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var toast;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.toastCtrl.create({
                        message: 'You are logged out Successfully',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context12.sent;
                      return _context12.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "presentToastDisconnect",
          value: function presentToastDisconnect() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var toast;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.toastCtrl.create({
                        message: 'Network was disconnected',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context13.sent;
                      return _context13.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "presentToastConnect",
          value: function presentToastConnect() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var toast;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.toastCtrl.create({
                        message: 'We got a wifi connection, woohoo!',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context14.sent;
                      return _context14.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } //update data

        }, {
          key: "presentToastFirebaseUpdateData",
          value: function presentToastFirebaseUpdateData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var toast;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.toastCtrl.create({
                        message: 'Your profile is updated Successfully',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context15.sent;
                      return _context15.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } //password reset Successfully

        }, {
          key: "presentToastFirebaseResetPassword",
          value: function presentToastFirebaseResetPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var toast;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.toastCtrl.create({
                        message: 'Please Check your Email!',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context16.sent;
                      return _context16.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          } //present toast message

        }, {
          key: "presentToastMessage",
          value: function presentToastMessage(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var toast;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        position: 'top',
                        duration: 2600,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context17.sent;
                      return _context17.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } //item edit

        }, {
          key: "presentToastItemEdit",
          value: function presentToastItemEdit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var toast;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.toastCtrl.create({
                        message: 'Item Updated Successfully!',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context18.sent;
                      return _context18.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          } //item edit

        }, {
          key: "presentToastItemAdd",
          value: function presentToastItemAdd() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var toast;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.toastCtrl.create({
                        message: 'Item Added Successfully!',
                        position: 'top',
                        duration: 1800,
                        cssClass: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context19.sent;
                      return _context19.abrupt("return", toast.present());

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }]);

        return ToasterService;
      }();

      ToasterService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      ToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToasterService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Volumes/Office/Apps/restaurant/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map