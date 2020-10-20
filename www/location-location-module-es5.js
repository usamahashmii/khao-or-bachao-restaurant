(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLocationLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <ion-row *ngIf=\"loaderShow\" class=\"loader-gif-row\">\n    <ion-col>\n      <img class=\"loader-gif\" src=\"assets/imgs/loader.gif\">\n    </ion-col>\n  </ion-row>\n  <div #map id=\"map\"></div> \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/location/location-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/location/location-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LocationPageRoutingModule */

    /***/
    function srcAppLocationLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function () {
        return LocationPageRoutingModule;
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


      var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location.page */
      "./src/app/location/location.page.ts");

      var routes = [{
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
      }];

      var LocationPageRoutingModule = function LocationPageRoutingModule() {
        _classCallCheck(this, LocationPageRoutingModule);
      };

      LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/location/location.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/location/location.module.ts ***!
      \*********************************************/

    /*! exports provided: LocationPageModule */

    /***/
    function srcAppLocationLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
        return LocationPageModule;
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


      var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-routing.module */
      "./src/app/location/location-routing.module.ts");
      /* harmony import */


      var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location.page */
      "./src/app/location/location.page.ts");

      var LocationPageModule = function LocationPageModule() {
        _classCallCheck(this, LocationPageModule);
      };

      LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
      })], LocationPageModule);
      /***/
    },

    /***/
    "./src/app/location/location.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/location/location.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppLocationLocationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-gif-row {\n  position: absolute;\n  margin-top: 80%;\n  z-index: 9;\n  text-align: center;\n}\n\n.loader-gif {\n  width: 60%;\n}\n\n.scroll {\n  height: 100%;\n}\n\n#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1naWYtcm93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogODAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvYWRlci1naWZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuLnNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuI21hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSAgICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/location/location.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/location/location.page.ts ***!
      \*******************************************/

    /*! exports provided: LocationPage */

    /***/
    function srcAppLocationLocationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
        return LocationPage;
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


      var LocationPage = /*#__PURE__*/function () {
        function LocationPage(ngZone, geolocation, loader, restService, router, route, alertService) {
          _classCallCheck(this, LocationPage);

          this.ngZone = ngZone;
          this.geolocation = geolocation;
          this.loader = loader;
          this.restService = restService;
          this.router = router;
          this.route = route;
          this.alertService = alertService; //this.getCategoryRestaurants();
          //this.addMap();
        }

        _createClass(LocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            throw new Error("Method not implemented.");
          }
        }]);

        return LocationPage;
      }();

      LocationPage.ctorParameters = function () {
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

      LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location.page.scss */
        "./src/app/location/location.page.scss"))["default"]]
      })], LocationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=location-location-module-es5.js.map