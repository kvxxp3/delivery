"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_home_discover_place-detail_place-detail_module_ts"],{

/***/ 3118:
/*!*********************************************!*\
  !*** ./src/app/bookings/booking.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingService": () => (/* binding */ BookingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _create_booking_booking_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-booking/booking.model */ 6851);






let BookingService = class BookingService {
    constructor(authService) {
        this.authService = authService;
        this.booking = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get bookings() {
        return this.booking.asObservable();
    }
    addBooking(placeId, placeTitle, placeImg, firstName, lastName, guestNumber, dateFrom, dateTo) {
        const newBooking = new _create_booking_booking_model__WEBPACK_IMPORTED_MODULE_1__.Booking(Math.random().toString(), placeId, this.authService.userId, placeTitle, placeImg, firstName, lastName, guestNumber, dateFrom, dateTo);
        return this.bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(bookings => {
            this.booking.next(bookings.concat(newBooking));
        }));
    }
    cancelBooking(bookingId) {
        return this.bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(bookings => {
            this.booking.next(bookings.filter(b => b.id !== bookingId));
        }));
    }
};
BookingService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
BookingService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({ providedIn: 'root' })
], BookingService);



/***/ }),

/***/ 6851:
/*!**********************************************************!*\
  !*** ./src/app/bookings/create-booking/booking.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Booking": () => (/* binding */ Booking)
/* harmony export */ });
class Booking {
    constructor(id, placeId, userId, placeTitle, placeImg, firstName, lastName, guestNumber, bookedFrom, bookedTo) {
        this.id = id;
        this.placeId = placeId;
        this.userId = userId;
        this.placeTitle = placeTitle;
        this.placeImg = placeImg;
        this.firstName = firstName;
        this.lastName = lastName;
        this.guestNumber = guestNumber;
        this.bookedFrom = bookedFrom;
        this.bookedTo = bookedTo;
    }
}


/***/ }),

/***/ 7004:
/*!*********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBookingComponent": () => (/* binding */ CreateBookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_booking_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-booking.component.html?ngResource */ 9103);
/* harmony import */ var _create_booking_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-booking.component.scss?ngResource */ 3120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



/* eslint-disable @typescript-eslint/dot-notation */


let CreateBookingComponent = class CreateBookingComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        const availableFrom = new Date(this.selectedPlace.availableFrom);
        const availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            this.startDate = new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime()
                - 7 * 24 * 60 * 60 * 1000 - availableFrom.getTime())).toISOString();
            this.endDate = new Date(new Date(this.startDate).getTime() + Math.random() * (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 -
                new Date(this.startDate).getTime())).toISOString();
        }
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    onBookPlace() {
        if (!this.form.valid || !this.validDate) {
            return;
        }
        this.modalCtrl.dismiss({
            bookingData: {
                first: this.form.value['firstName'],
                last: this.form.value['lastName'],
                guest: +this.form.value['guestNumber'],
                start: new Date(this.form.value['dateFrom']),
                end: new Date(this.form.value['dateTo'])
            }
        }, 'confirm');
    }
    validDate() {
        const startDate = new Date(this.form.value['dateFrom']);
        const endDate = new Date(this.form.value['dateTo']);
        return endDate > startDate;
    }
};
CreateBookingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
CreateBookingComponent.propDecorators = {
    selectedPlace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['f', { static: true },] }]
};
CreateBookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-create-booking',
        template: _create_booking_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_booking_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateBookingComponent);



/***/ }),

/***/ 8150:
/*!***************************************************************************!*\
  !*** ./src/app/home/discover/place-detail/place-detail-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageRoutingModule": () => (/* binding */ PlaceDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail.page */ 7331);




const routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPage
    }
];
let PlaceDetailPageRoutingModule = class PlaceDetailPageRoutingModule {
};
PlaceDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlaceDetailPageRoutingModule);



/***/ }),

/***/ 5257:
/*!*******************************************************************!*\
  !*** ./src/app/home/discover/place-detail/place-detail.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageModule": () => (/* binding */ PlaceDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail-routing.module */ 8150);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page */ 7331);
/* harmony import */ var src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bookings/create-booking/create-booking.component */ 7004);








let PlaceDetailPageModule = class PlaceDetailPageModule {
};
PlaceDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPageRoutingModule
        ],
        declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_1__.PlaceDetailPage, src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent],
        entryComponents: [src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent]
    })
], PlaceDetailPageModule);



/***/ }),

/***/ 7331:
/*!*****************************************************************!*\
  !*** ./src/app/home/discover/place-detail/place-detail.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPage": () => (/* binding */ PlaceDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _place_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail.page.html?ngResource */ 3116);
/* harmony import */ var _place_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page.scss?ngResource */ 3521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var src_app_bookings_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bookings/booking.service */ 3118);
/* harmony import */ var src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bookings/create-booking/create-booking.component */ 7004);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../places.service */ 546);










let PlaceDetailPage = class PlaceDetailPage {
    constructor(navCtrl, modalCtrl, route, placesService, actionSheetCtrl, bookingService, loadingController, authService, router) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.placesService = placesService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bookingService = bookingService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.router = router;
        this.place = {
            id: 0,
            title: 'place',
            description: 'string',
            imageURL: 'string',
            price: 0,
            availableFrom: 'string',
            availableTo: 'string',
            userId: 'string',
            location: 'string'
        };
        this.isBookable = true;
    }
    ionViewWillEnter() {
        this.getPlaceById(this.getIDfromURL());
    }
    //NEW
    getPlaceById(place) {
        this.placesService.getPlaceById(place).subscribe((resp) => {
            this.place = {
                id: resp[0].id,
                title: resp[0].title,
                description: resp[0].description,
                imageURL: resp[0].imageURL,
                price: resp[0].price,
                availableFrom: resp[0].availableFrom,
                availableTo: resp[0].availableTo,
                userId: resp[0].userId,
                location: resp[0].location
            };
        });
    }
    getIDfromURL() {
        const url = this.router.url;
        const arr = url.split('/', 5);
        const id = parseInt(arr[4], 10);
        console.log('el numero en el url es: ' + id);
        return id;
    }
    //PAST
    onBookPlace() {
        this.actionSheetCtrl.create({
            header: 'Choose an action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => {
                        this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        })
            .then(actionSheetEL => {
            actionSheetEL.present();
        });
    }
    openBookingModal(mode) {
        console.log(mode);
        this.modalCtrl
            .create({
            component: src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__.CreateBookingComponent,
            componentProps: { selectedPlace: this.place, selectedMode: mode },
        })
            .then((modal) => {
            modal.present();
            return modal.onDidDismiss();
        })
            .then(resultData => {
            if (resultData.role === 'confirm') {
                this.loadingController.create({
                    message: 'Booking place...'
                }).then(loadingEl => {
                    loadingEl.present();
                    const data = resultData.data.bookingData;
                    this.bookingService.addBooking('0', this.place.title, this.place.imageURL, data.first, data.last, data.guest, data.start, data.end).subscribe(() => {
                        loadingEl.dismiss();
                    });
                });
            }
        });
    }
    ngOnDestroy() {
        if (this.placeSub) {
            this.placeSub.unsubscribe();
        }
    }
};
PlaceDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_5__.PlacesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: src_app_bookings_booking_service__WEBPACK_IMPORTED_MODULE_3__.BookingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
PlaceDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-place-detail',
        template: _place_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_place_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlaceDetailPage);



/***/ }),

/***/ 3120:
/*!**********************************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3521:
/*!******************************************************************************!*\
  !*** ./src/app/home/discover/place-detail/place-detail.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZS1kZXRhaWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9103:
/*!**********************************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ selectedPlace.description }}!</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <form (ngSubmit)=\"onBookPlace()\" #f=\"ngForm\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"firstName\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"lastName\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Number of guest</ion-label>\n            <ion-select [ngModel]=\"'2'\" name=\"guestNumber\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-datetime-button datetime=\"datetime\"></ion-datetime-button>\n            <ion-modal [keepContentsMounted]=\"true\">\n              <ng-template>\n                <ion-datetime\n                  presentation=\"date\"\n                  slot=\"date-target\"\n                  id=\"datetime\"\n                  [min]=\"selectedPlace.availableFrom.toISOString()\"\n                  [max]=\"selectedPlace.availableTo.toISOString()\"\n                  [ngModel]=\"startDate\"\n                  name=\"dateFrom\"\n                  required\n                  #startDateCtrl=\"ngModel\"\n                >\n                  <span slot=\"title\">Available From</span></ion-datetime\n                >\n              </ng-template>\n            </ion-modal>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-datetime-button datetime=\"datetime2\"></ion-datetime-button>\n            <ion-modal [keepContentsMounted]=\"true\">\n              <ng-template>\n                <ion-datetime\n                  presentation=\"date\"\n                  slot=\"date-target\"\n                  id=\"datetime2\"\n                  [min]=\"selectedPlace.availableFrom.toISOString()\"\n                  [max]=\"selectedPlace.availableTo.toISOString()\"\n                  [ngModel]=\"endDate\"\n                  name=\"dateTo\"\n                  required\n                >\n                  <span slot=\"title\">Available To</span></ion-datetime\n                >\n              </ng-template>\n            </ion-modal>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button\n            type=\"submit\"\n            expand=\"block\"\n            shape=\"round\"\n            [disabled]=\"!f.valid || !validDate()\"\n          >\n            Book Now!\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 3116:
/*!******************************************************************************!*\
  !*** ./src/app/home/discover/place-detail/place-detail.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ place.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col sizeSm=\"6\" offsetSm=\"3\">\n        <ion-img [src]=\"place.imageURL\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col sizeSm=\"6\" offsetSm=\"3\">\n        <p>{{ place.description }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row>\n    <ion-col sizeSm=\"6\" offsetSm=\"3\" text-center>\n      <p>{{ place.location }}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"isBookable\">\n    <ion-col sizeSm=\"6\" offsetSm=\"3\">\n      <ion-button\n        (click)=\"onBookPlace()\"\n        expand=\"block\"\n        fill=\"clear\"\n        shape=\"round\"\n      >\n        Book\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_home_discover_place-detail_place-detail_module_ts.js.map