"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_discover_discover_module_ts"],{

/***/ 3030:
/*!**********************************************************!*\
  !*** ./src/app/home/discover/discover-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageRoutingModule": () => (/* binding */ DiscoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover.page */ 415);




const routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage
    },
    {
        path: 'place-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_home_discover_place-detail_place-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./place-detail/place-detail.module */ 5257)).then(m => m.PlaceDetailPageModule)
    }
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ 4534:
/*!**************************************************!*\
  !*** ./src/app/home/discover/discover.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageModule": () => (/* binding */ DiscoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover-routing.module */ 3030);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page */ 415);







let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscoverPageRoutingModule
        ],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_1__.DiscoverPage]
    })
], DiscoverPageModule);



/***/ }),

/***/ 415:
/*!************************************************!*\
  !*** ./src/app/home/discover/discover.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPage": () => (/* binding */ DiscoverPage)
/* harmony export */ });
/* harmony import */ var _home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _discover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page.html?ngResource */ 4825);
/* harmony import */ var _discover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discover.page.scss?ngResource */ 803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../places.service */ 546);








let DiscoverPage = class DiscoverPage {
  constructor(placesService, authService, loadingController) {
    this.placesService = placesService;
    this.authService = authService;
    this.loadingController = loadingController;
    this.filter = 'all';
    this.userId = 'new';
  }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.loadedPlaces = places;
      this.onFilterUpdate(this.filter);
    });
  }

  onFilterUpdate(filter) {
    const isShown = place => filter === 'all' || place.userId !== this.authService.userId;

    this.relevant = this.loadedPlaces.filter(isShown);
    this.userId = this.authService.userId;
    this.filter = filter;
    console.log('value it: ' + this.filter);
  }

  ionViewWillEnter() {
    this.loadPlaces();
  }

  loadPlaces(event) {
    var _this = this;

    return (0,_home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Loading...',
        spinner: 'bubbles'
      });
      yield loading.present(); //convertir data json recibido del servidor a string

      _this.placesService.listPlaces().subscribe(resp => {
        loading.dismiss();
        const listString = JSON.stringify(resp); //lista todos los lugares

        _this.places = JSON.parse(listString); //lista solos los que puede hacer reservacion

        _this.bookable = JSON.parse(listString);
        console.log('userId: ' + _this.authService.userId); //let j=0;

        for (let i = 0; i < _this.bookable.length; i++) {
          console.log('JSON Places ' + i + ': ' + _this.bookable[i].title);

          if (_this.bookable[i].userId === _this.authService.userId) {
            console.log('entro a filtro ' + _this.bookable[i].title);

            _this.bookable.splice(i, i);

            if (i !== 0) {
              i--;
            }
          }
        }

        event?.target.complete();
      }, err => {
        console.log(err.message);
        loading.dismiss();
      });
    })();
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }

};

DiscoverPage.ctorParameters = () => [{
  type: _places_service__WEBPACK_IMPORTED_MODULE_4__.PlacesService
}, {
  type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

DiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-discover',
  template: _discover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_discover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DiscoverPage);


/***/ }),

/***/ 803:
/*!*************************************************************!*\
  !*** ./src/app/home/discover/discover.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3Zlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4825:
/*!*************************************************************!*\
  !*** ./src/app/home/discover/discover.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menu-content\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Discover Places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"onFilterUpdate($event.detail.value)\">\n    <ion-segment-button value=\"all\">\n      <ion-label>All Places</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"bookable\">\n      <ion-label>Bookable Places</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid *ngIf=\"!places || places.length <= 0\" fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offsetSm=\"2\" class=\"ion-text-center\">\n        <p>There are no bookable places right now, plase come back later.</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ng-container *ngIf=\"filter==='all'\">\n    <ion-grid *ngIf=\"relevant.length > 0\" fixed>\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"8\" offsetSm=\"2\" class=\"ion-text-center\">\n          <ion-list>\n            <ng-container\n              *ngFor=\"let place of places; let indexArray = index\"\n            >\n              <ion-item\n                [routerLink]=\"['/', 'home', 'tabs', 'discover', place.id]\"\n                detail\n              >\n                <ion-thumbnail slot=\"start\">\n                  <ion-img [src]=\"place.imageURL\"></ion-img>\n                </ion-thumbnail>\n                <ion-label color=\"primary\">\n                  <h1>{{ place.title }}</h1>\n                  <h2>Host: {{place.userId}}</h2>\n                  <p>{{ place.description }}</p>\n                  <p>Price: {{place.price}}</p>\n                  <p>{{ place.availableFrom }} - {{place.availableTo}}</p>\n                </ion-label>\n              </ion-item>\n            </ng-container>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf=\"filter==='bookable'\">\n    <ion-grid *ngIf=\"bookable.length > 0\" fixed>\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"8\" offsetSm=\"2\" class=\"ion-text-center\">\n          <ion-list>\n            <ng-container *ngFor=\"let book of bookable; let indexArray = index\">\n              <ion-item\n                *ngIf=\"book.userId!==userId\"\n                [routerLink]=\"['/', 'home', 'tabs', 'discover', book.id]\"\n                detail\n              >\n                <ion-thumbnail slot=\"start\">\n                  <ion-img [src]=\"book.imageURL\"></ion-img>\n                </ion-thumbnail>\n                <ion-label color=\"primary\">\n                  <h1>{{ book.title }}</h1>\n                  <h2>Host: {{book.userId}}</h2>\n                  <p>{{ book.description }}</p>\n                  <p>Price: {{book.price}}</p>\n                  <p>{{ book.availableFrom }} - {{book.availableTo}}</p>\n                </ion-label>\n              </ion-item>\n            </ng-container>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_discover_discover_module_ts.js.map