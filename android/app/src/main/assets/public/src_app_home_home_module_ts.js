"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: 'tabs',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: 'discover',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_home_places_service_ts"), __webpack_require__.e("src_app_home_discover_discover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./discover/discover.module */ 4534)).then(m => m.DiscoverPageModule)
                    },
                    {
                        path: ':placeId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_home_places_service_ts"), __webpack_require__.e("default-src_app_home_discover_place-detail_place-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./discover/place-detail/place-detail.module */ 5257)).then(m => m.PlaceDetailPageModule)
                    }
                ]
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_home_places_service_ts"), __webpack_require__.e("src_app_home_offers_offers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offers/offers.module */ 861)).then(m => m.OffersPageModule)
                    },
                    {
                        path: 'new',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_home_places_service_ts"), __webpack_require__.e("default-src_app_home_offers_new-offer_new-offer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offers/new-offer/new-offer.module */ 7731)).then(m => m.NewOfferPageModule)
                    },
                    {
                        path: 'edit/:placeId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_home_places_service_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offers/edit-offer/edit-offer.module */ 7415)).then(m => m.EditOfferPageModule)
                    },
                    {
                        path: ':placeId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_home_places_service_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offers/place-bookings/place-bookings.module */ 1019)).then(m => m.PlaceBookingsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/tabs/discover',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/discover',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ 384);





let HomePage = class HomePage {
    constructor(authService) {
        this.authService = authService;
        this.tipo = this.authService.userType;
    }
};
HomePage.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"discover\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>Discover</ion-label>\n    </ion-tab-button>\n    <ion-tab-button *ngIf=\"tipo == 'R'\" tab=\"offers\">\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\n      <ion-label>Food</ion-label>\n    </ion-tab-button>\n    <ion-tab-button *ngIf=\"tipo == 'R'\" tab=\"offers\">\n      <ion-icon name=\"receipt-outline\"></ion-icon>\n      <ion-label>Manage</ion-label>\n    </ion-tab-button>\n    <ion-tab-button *ngIf=\"tipo == 'R'\" tab=\"offers\" routerLink=\"/\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n    <ion-tab-button *ngIf=\"tipo == 'C'\" tab=\"offers\" routerLink=\"/\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map