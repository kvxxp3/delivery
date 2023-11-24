"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_home_places_service_ts"],{

/***/ 9940:
/*!*************************************!*\
  !*** ./src/app/home/place.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Place": () => (/* binding */ Place)
/* harmony export */ });
class Place {
    constructor(id, title, description, imageURL, price, availableFrom, availableTo, userId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.price = price;
        this.availableFrom = availableFrom;
        this.availableTo = availableTo;
        this.userId = userId;
    }
}


/***/ }),

/***/ 546:
/*!****************************************!*\
  !*** ./src/app/home/places.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesService": () => (/* binding */ PlacesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place.model */ 9940);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);

/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */







let PlacesService = class PlacesService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        //PAST PROJECT
        this.placess = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([
            new _place_model__WEBPACK_IMPORTED_MODULE_1__.Place('ORIGINAL1', 'Villamartin Mansion', 'Mediterranean style villa.', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuc2lvbnxlbnwwfHwwfHw%3D&auto', 249.99, new Date('2023-01-01'), new Date('2023-09-01'), 'abc'),
            new _place_model__WEBPACK_IMPORTED_MODULE_1__.Place('ORIGINAL2', 'Killarney Mansion', "His majesty's manor", 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto', 399.99, new Date('2023-04-01'), new Date('2023-04-28'), 'abc'),
            new _place_model__WEBPACK_IMPORTED_MODULE_1__.Place('ORIGINAL3', 'Ciudad Maderas Mansion', 'One of the best places to stay in Mexico', 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto', 159.99, new Date('2023-06-24'), new Date('2023-12-31'), 'abc')
        ]);
        this.productoAux = {
            nombre: 'product',
            des: 'string',
            precio: 'string',
            res: 0,
            imagen: 'string'
        };
        this.productoUpdateAux = {
            nombre: 'product',
            des: 'string',
            precio: 'string',
            imagen: 'string'
        };
    }
    //toma todos los productos por el id del restaurante
    getProductsByID(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/productos/restaurante/${id}`);
    }
    //toma un producto por su id
    getProductByID(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/productos/${id}`);
    }
    ////////////////////////////////////////////////
    //addProduct(name: string, desc: string, price: string, rest: number, foto: string): Observable<any>{
    //  return this.http.post<any>(`${environment.apiURL}/producto/add`, {nombre: {name}, des: {desc}, precio: {price}, res: {rest}, imagen: {foto}});
    //}
    addProduct(name, desc, price, rest, foto) {
        this.productoAux.nombre = name;
        this.productoAux.des = desc;
        this.productoAux.precio = price;
        this.productoAux.res = rest;
        this.productoAux.imagen = foto;
        console.log("OBJETO ANTES DE ENVIAR: " + this.productoAux.res);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/producto/add`, this.productoAux);
    }
    deleteProduct(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/producto/delete/${id}`);
    }
    updateProduct(id, name, desc, price, foto) {
        this.productoUpdateAux.nombre = name;
        this.productoUpdateAux.des = desc;
        this.productoUpdateAux.precio = price;
        this.productoUpdateAux.imagen = foto;
        console.log("OBJETO ANTES DE ENVIAR: " + this.productoUpdateAux.nombre);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/producto/update/${id}`, this.productoUpdateAux);
    }
    getRestaurants() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/restaurantes`);
    }
    ////////////////////////////////////////////////
    //PAST PROJECT
    get places() {
        return this.placess.asObservable();
    }
    getPlace(id) {
        return this.places.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(places => ({ ...places.find(p => p.id === id) })));
    }
    //NEW
    listPlaces() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/places`);
    }
    getPlaceById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/places/?id=${id}`);
    }
    newPlace(newPlace) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/places`, newPlace);
    }
    updatePlace(place) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/places/${place.id}`, place);
    }
    deletePlace(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL}/places/${id}`);
    }
    addPlace(title, description, price, from, to) {
        const newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_1__.Place(Math.random().toString(), title, description, 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto', price, from, to, this.authService.userId);
        return this.places.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(places => {
            this.placess.next(places.concat(newPlace));
        }));
    }
};
PlacesService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient }
];
PlacesService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
    })
], PlacesService);



/***/ }),

/***/ 7928:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification),
/* harmony export */   "NotificationKind": () => (/* binding */ NotificationKind)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/empty */ 6439);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/of */ 4139);
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/throwError */ 6587);



var NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));

class Notification {
  constructor(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }

  observe(observer) {
    switch (this.kind) {
      case 'N':
        return observer.next && observer.next(this.value);

      case 'E':
        return observer.error && observer.error(this.error);

      case 'C':
        return observer.complete && observer.complete();
    }
  }

  do(next, error, complete) {
    const kind = this.kind;

    switch (kind) {
      case 'N':
        return next && next(this.value);

      case 'E':
        return error && error(this.error);

      case 'C':
        return complete && complete();
    }
  }

  accept(nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  }

  toObservable() {
    const kind = this.kind;

    switch (kind) {
      case 'N':
        return (0,_observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);

      case 'E':
        return (0,_observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);

      case 'C':
        return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();
    }

    throw new Error('unexpected notification kind value');
  }

  static createNext(value) {
    if (typeof value !== 'undefined') {
      return new Notification('N', value);
    }

    return Notification.undefinedValueNotification;
  }

  static createError(err) {
    return new Notification('E', undefined, err);
  }

  static createComplete() {
    return Notification.completeNotification;
  }

}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);

/***/ }),

/***/ 1925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
  constructor(SchedulerAction, now = Scheduler.now) {
    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  schedule(work, delay = 0, state) {
    return new this.SchedulerAction(this, work).schedule(state, delay);
  }

}

Scheduler.now = () => Date.now();

/***/ }),

/***/ 5843:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 1293);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ 7928);




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  const absoluteDelay = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
  const delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
  return source => source.lift(new DelayOperator(delayFor, scheduler));
}

class DelayOperator {
  constructor(delay, scheduler) {
    this.delay = delay;
    this.scheduler = scheduler;
  }

  call(subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  }

}

class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
  constructor(destination, delay, scheduler) {
    super(destination);
    this.delay = delay;
    this.scheduler = scheduler;
    this.queue = [];
    this.active = false;
    this.errored = false;
  }

  static dispatch(state) {
    const source = state.source;
    const queue = source.queue;
    const scheduler = state.scheduler;
    const destination = state.destination;

    while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
      queue.shift().notification.observe(destination);
    }

    if (queue.length > 0) {
      const delay = Math.max(0, queue[0].time - scheduler.now());
      this.schedule(state, delay);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  }

  _schedule(scheduler) {
    this.active = true;
    const destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: scheduler
    }));
  }

  scheduleNotification(notification) {
    if (this.errored === true) {
      return;
    }

    const scheduler = this.scheduler;
    const message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);

    if (this.active === false) {
      this._schedule(scheduler);
    }
  }

  _next(value) {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
  }

  _error(err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  }

  _complete() {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
    this.unsubscribe();
  }

}

class DelayMessage {
  constructor(time, notification) {
    this.time = time;
    this.notification = notification;
  }

}

/***/ }),

/***/ 5353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }

  schedule(state, delay = 0) {
    return this;
  }

}

/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 5353);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }

  schedule(state, delay = 0) {
    if (this.closed) {
      return this;
    }

    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }

  requestAsyncId(scheduler, id, delay = 0) {
    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  }

  recycleAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  }

  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    const error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }

  _execute(state, delay) {
    let errored = false;
    let errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }

  _unsubscribe() {
    const id = this.id;
    const scheduler = this.scheduler;
    const actions = scheduler.actions;
    const index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  }

}

/***/ }),

/***/ 2901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1925);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, () => {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    });
    this.actions = [];
    this.active = false;
    this.scheduled = undefined;
  }

  schedule(work, delay = 0, state) {
    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return super.schedule(work, delay, state);
    }
  }

  flush(action) {
    const {
      actions
    } = this;

    if (this.active) {
      actions.push(action);
      return;
    }

    let error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  }

}

/***/ }),

/***/ 328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 1293:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* binding */ isDate)
/* harmony export */ });
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_home_places_service_ts.js.map