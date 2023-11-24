"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_offers_offers_module_ts"],{

/***/ 9764:
/*!****************************************************************!*\
  !*** ./src/app/home/offers/offer-item/offer-item.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferItemComponent": () => (/* binding */ OfferItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _offer_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-item.component.html?ngResource */ 2660);
/* harmony import */ var _offer_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-item.component.scss?ngResource */ 5044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let OfferItemComponent = class OfferItemComponent {
    constructor() { }
    ngOnInit() { }
    getDummyDate() {
        return new Date();
    }
};
OfferItemComponent.ctorParameters = () => [];
OfferItemComponent.propDecorators = {
    offer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
OfferItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-offer-item',
        template: _offer_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_offer_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OfferItemComponent);



/***/ }),

/***/ 5111:
/*!******************************************************!*\
  !*** ./src/app/home/offers/offers-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageRoutingModule": () => (/* binding */ OffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.page */ 1487);




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_0__.OffersPage
    },
    {
        path: 'new-offer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./new-offer/new-offer.module */ 7731)).then(m => m.NewOfferPageModule)
    },
    {
        path: 'place-bookings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./place-bookings/place-bookings.module */ 1019)).then(m => m.PlaceBookingsPageModule)
    },
    {
        path: 'edit-offer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-offer/edit-offer.module */ 7415)).then(m => m.EditOfferPageModule)
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ 861:
/*!**********************************************!*\
  !*** ./src/app/home/offers/offers.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageModule": () => (/* binding */ OffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-routing.module */ 5111);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page */ 1487);
/* harmony import */ var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer-item/offer-item.component */ 9764);








let OffersPageModule = class OffersPageModule {
};
OffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.OffersPageRoutingModule
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_1__.OffersPage, _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_2__.OfferItemComponent]
    })
], OffersPageModule);



/***/ }),

/***/ 1487:
/*!********************************************!*\
  !*** ./src/app/home/offers/offers.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPage": () => (/* binding */ OffersPage)
/* harmony export */ });
/* harmony import */ var _home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _offers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page.html?ngResource */ 3472);
/* harmony import */ var _offers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers.page.scss?ngResource */ 2874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../places.service */ 546);




/* eslint-disable max-len */






let OffersPage = class OffersPage {
  constructor(placesService, router, authService, alertController) {
    this.placesService = placesService;
    this.router = router;
    this.authService = authService;
    this.alertController = alertController;
    this.products = [];
  }

  ionViewWillEnter() {
    let id = parseInt(this.authService.userId);
    this.getProductsById(id);
  }

  getProductsById(restaurant) {
    //convertir datos json del servidor a string
    this.placesService.getProductsByID(restaurant).subscribe(resp => {
      const listString = JSON.stringify(resp); //lista todos los productos

      this.products = JSON.parse(listString);
    }, err => {
      console.log(err.message);
    });
  }

  onClickItem(i) {
    this.router.navigate(['/pruebas/pedido/' + i]);
  }

  onEdit(offerId, slidingItem) {
    slidingItem.close();
    this.router.navigate(['/', 'home', 'tabs', 'offers', 'edit', offerId]);
    console.log('editing item', offerId);
  }

  onDelete(offerId, slidingItem) {
    slidingItem.close();
    console.log('[SUCCESS] deleting item', offerId); //convert to number

    const id = +offerId;
    this.placesService.deleteProduct(id).subscribe();
    this.ionViewWillEnter();
    this.reload();
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.someSubscription = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        // Here is the dashing line comes in the picture.
        // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
        this.router.navigated = false;
      }
    });
  }

  presentAlert(offerId, slidingItem) {
    var _this = this;

    return (0,_home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Are you sure you want to delete this offer?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'OK',
          role: 'confirm'
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      console.log('ROLE: ' + role);

      if (role === 'confirm') {
        _this.onDelete(offerId, slidingItem);
      }
    })();
  }

  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.products.splice(0, this.products.length);
      let id = parseInt(this.authService.userId);
      this.getProductsById(id);
      event.target.complete();
    }, 2000);
  }

};

OffersPage.ctorParameters = () => [{
  type: _places_service__WEBPACK_IMPORTED_MODULE_4__.PlacesService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

OffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-offers',
  template: _offers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_offers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], OffersPage);


/***/ }),

/***/ 5044:
/*!*****************************************************************************!*\
  !*** ./src/app/home/offers/offer-item/offer-item.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  font-size: 18px;\n  border: 1px solid var(--ion-color-danger);\n  padding: 8px;\n  border-radius: 5px;\n  color: var(--ion-color-danger);\n}\n\n.offerDetails {\n  display: flex;\n  align-items: center;\n}\n\n.offerDetails .space-left {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtBQUNKIiwiZmlsZSI6Im9mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLm9mZmVyRGV0YWlsc3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc3BhY2UtbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 2874:
/*!*********************************************************!*\
  !*** ./src/app/home/offers/offers.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2660:
/*!*****************************************************************************!*\
  !*** ./src/app/home/offers/offer-item/offer-item.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item [routerLink]=\"['/', 'home', 'tabs', 'offers', offer.id]\">\n  <ion-thumbnail slot=\"start\">\n    <img [src]=\"offer.foto\" />\n  </ion-thumbnail>\n  <ion-label>\n    <h1>{{ offer.nombre }}</h1>\n    <div class=\"offerDetails\">\n      <!--<ion-icon slot=\"start\" name=\"calendar\" color=\"primary\"></ion-icon>-->\n      <ion-text color=\"danger\" class=\"space-left\">\n        ${{ offer.precio}}\n      </ion-text>\n      <span class=\"space-left\"></span>\n      <ion-icon slot=\"start\" name=\"chatbox-ellipses-outline\" class=\"space-left\" color=\"primary\"></ion-icon>\n      <ion-text color=\"secondary\" class=\"space-left\" style=\"width: 35%\">\n        {{ offer.des }}\n      </ion-text>\n      \n    </div>\n  </ion-label>\n</ion-item>\n";

/***/ }),

/***/ 3472:
/*!*********************************************************!*\
  !*** ./src/app/home/offers/offers.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menu-content\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Products</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/home/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offsetSm=\"2\">\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let offer of products\" #slidingItem>\n            <app-offer-item [offer]=\"offer\"></app-offer-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option color=\"primary\" (click)=\"onEdit(offer.id, slidingItem)\">\n                <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"secondary\" (click)=\"presentAlert(offer.id, slidingItem)\">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_offers_offers_module_ts.js.map