(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule),
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'bookings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bookings_bookings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bookings/bookings.module */ 7938)).then(m => m.BookingsPageModule),
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'pruebas',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pruebas_pruebas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pruebas/pruebas.module */ 3442)).then(m => m.PruebasPageModule),
                //canLoad: [AuthGuard]
            },
            {
                path: ':restaurantId',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pruebas_pedido_pedido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pruebas/pedido/pedido.module */ 8002)).then(m => m.PedidoPageModule)
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ 384);






let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authService.userType;
    }
    onLogout() {
        this.authService.logout();
        this.router.navigateByUrl('/auth');
    }
    checar() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        if (!this.authService.userIsAuth) {
            this.router.navigateByUrl('/auth');
        }
        return this.authService.userIsAuth;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.userisAuth = false;
        this.idUser = 'abc';
        this.type = 'C';
        this.tarjeta = '';
        this.dir = 'C';
        this.aux = '';
    }
    //APP DELIVERY
    //login
    getUser(correo, contra) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/login/${correo}/${contra}`);
    }
    getUserSync(correo, contra) {
        return this.getUser(correo, contra).toPromise();
    }
    getID(correo) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/usuario/correo/${correo}`);
    }
    getIDSync(correo) {
        return this.getID(correo).toPromise();
    }
    getType(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/usuario/id/${id}`);
    }
    getTypeSync(id) {
        return this.getType(id).toPromise();
    }
    login() {
        this.userisAuth = true;
    }
    logout() {
        this.userisAuth = false;
    }
    updateUserId(id) {
        this.idUser = id;
        console.log("NUEVO USUARIO LOGEADO: " + this.idUser);
    }
    updateUserType(tipo) {
        this.type = tipo;
        console.log("NUEVO TIPO LOGEADO: " + this.type);
    }
    get userIsAuth() {
        return this.userisAuth;
    }
    get userId() {
        return this.idUser;
    }
    get userType() {
        return this.type;
    }
    //REGISTRO
    postUser(nombre, contra, correo, tipo) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/register/${nombre}/${contra}/${correo}/${tipo}`, nombre);
    }
    postUserSync(nombre, contra, correo, tipo) {
        return this.postUser(nombre, contra, correo, tipo).toPromise();
    }
    //ALTA TARJETA
    postTarjeta(tipo, clabe) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/altaTarjeta/${tipo}/${clabe}`, tipo);
    }
    postTarjetaSync(tipo, clabe) {
        return this.postTarjeta(tipo, clabe).toPromise();
    }
    //get id tarjeta
    getIDTarjeta(tipo, clabe) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/tarjeta/getID/${tipo}/${clabe}`);
    }
    getIDTarjetaSync(tipo, clabe) {
        return this.getIDTarjeta(tipo, clabe).toPromise();
    }
    updateIDTarjeta(tipo) {
        this.tarjeta = tipo;
        console.log("NUEVO TARJETA LOGEADO: " + this.tarjeta);
    }
    //ALTA DIRECCION
    postDir(calle, colonia, numero, ref) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/altaDir/${calle}/${colonia}/${numero}/${ref}`, calle);
    }
    postDirSync(calle, colonia, numero, ref) {
        return this.postDir(calle, colonia, numero, ref).toPromise();
    }
    //get id dir por la calle y numero
    getIDDIR(calle, numero) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/dir/getID/${calle}/${numero}`);
    }
    updateIDDireccion(tipo) {
        this.dir = tipo;
        console.log("NUEVO DIR LOGEADO: " + this.dir);
    }
    getIDDirSync(calle, numero) {
        return this.getIDDIR(calle, numero).toPromise();
    }
    //ALTA CLIENTE
    postCliente(nombre, app, apm, tel, usuario, tarjeta) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/altaCliente/${nombre}/${app}/${apm}/${tel}/${usuario}/${tarjeta}`, nombre);
    }
    postClienteSync(nombre, app, apm, tel, usuario, tarjeta) {
        return this.postCliente(nombre, app, apm, tel, usuario, tarjeta).toPromise();
    }
    //ALTA RESTAURANTE
    postRestaurant(nombre, tel, sucursal, usuario, dir, tarjeta) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/altaRestaurante/${nombre}/${tel}/${sucursal}/${usuario}/${dir}/${tarjeta}`, nombre);
    }
    postRestaurantSync(nombre, tel, sucursal, usuario, dir, tarjeta) {
        return this.postRestaurant(nombre, tel, sucursal, usuario, dir, tarjeta).toPromise();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 8691:
/*!*****************************************************************!*\
  !*** ./src/app/shared/account-modal/account-modal.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModalComponent": () => (/* binding */ AccountModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-modal.component.html?ngResource */ 6958);
/* harmony import */ var _account_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-modal.component.scss?ngResource */ 9852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);







let AccountModalComponent = class AccountModalComponent {
    constructor(modalCtrl, authService) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.typeCardAUX = '';
        this.cliente = {
            id: '',
            name: '',
            app: '',
            apm: '',
            number: '',
            user: '',
            card: ''
        };
        this.restaurante = {
            id: '',
            name: '',
            number: '',
            branch: '',
            user: '',
            dir: '',
            card: ''
        };
        this.card = {
            id: '',
            type: '',
            clabe: ''
        };
        this.adress = {
            id: '',
            calle: '',
            district: '',
            number: '',
            reference: ''
        };
        this.tipoUser = this.authService.userType;
        /*this.form = new FormGroup({
          nameC: new FormControl(),
          appC: new FormControl(),
          apmC: new FormControl(),
          phoneC: new FormControl(),
          nameR: new FormControl(),
          phoneR: new FormControl(),
          branchR: new FormControl(),
          streetR: new FormControl(),
          districtR: new FormControl(),
          numberR: new FormControl(),
          referenceR: new FormControl(),
          cardType: new FormControl(),
          cardClabe: new FormControl()
        });*/
    }
    ngOnInit() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            nameC: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(45)]
            }),
            appC: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(45)]
            }),
            apmC: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(45)]
            }),
            phoneC: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(20)]
            }),
            nameR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            phoneR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            branchR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            streetR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            districtR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            numberR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            referenceR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            cardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            cardClabe: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()
        });
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm() {
        if (this.tipoUser == 'C') {
            return this.modalCtrl.dismiss({
                userData: {
                    usuario: this.tipoUser,
                    nombre: this.cliente.name,
                    app: this.cliente.app,
                    apm: this.cliente.apm,
                    telefono: this.cliente.number,
                    tipo: this.typeCardAUX,
                    clabe: this.card.clabe
                }
            }, 'confirm');
        }
        else {
            return this.modalCtrl.dismiss({
                userData: {
                    usuario: this.tipoUser,
                    nombreR: this.restaurante.name,
                    telefonoR: this.restaurante.number,
                    sucursalR: this.restaurante.branch,
                    calleR: this.adress.calle,
                    coloniaR: this.adress.district,
                    numR: this.adress.number,
                    referenciaR: this.adress.reference,
                    tipoR: this.typeCardAUX,
                    clabeR: this.card.clabe
                }
            }, 'confirm');
        }
    }
    //Listener del evento del ion-radio-group para obtener el valor del ion-radio seleccionado
    selectedValue($event) {
        this.typeCardAUX = $event.target.value;
    }
};
AccountModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AccountModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account-modal',
        template: _account_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountModalComponent);



/***/ }),

/***/ 1218:
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModalComponent": () => (/* binding */ MapModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-modal.component.html?ngResource */ 6140);
/* harmony import */ var _map_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-modal.component.scss?ngResource */ 4167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);






let MapModalComponent = class MapModalComponent {
    constructor(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.center = [51.505, -0.09];
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const viewCtrl = this.modalCtrl;
        this.modalRef = this.modalCtrl;
        const mapDiv = document.getElementById("map");
        const map = leaflet__WEBPACK_IMPORTED_MODULE_2__.map(mapDiv).setView(this.center, 16);
        this.mapRef = map;
        leaflet__WEBPACK_IMPORTED_MODULE_2__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 19
        }).addTo(map);
        //L.control.scale().addTo(map);
        //L.marker(this.center).addTo(map).bindPopup("PickedLocation").openPopup();
        this.renderer.addClass(mapDiv, 'visible');
        const resizeObserver = new ResizeObserver(() => {
            map.invalidateSize();
        });
        resizeObserver.observe(mapDiv);
        map.on('click', function (e) {
            const selectedCoords = {
                lat: e.latlng.lat,
                lng: e.latlng.lng
            };
            viewCtrl.dismiss(selectedCoords);
        });
    }
    onCancel() {
        this.modalCtrl.dismiss();
    }
    ngOnDestroy() {
        this.mapRef.off('click');
    }
};
MapModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2 }
];
MapModalComponent.propDecorators = {
    mapElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['map',] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MapModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-map-modal',
        template: _map_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapModalComponent);



/***/ }),

/***/ 8042:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPickerComponent": () => (/* binding */ LocationPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _location_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-picker.component.html?ngResource */ 8765);
/* harmony import */ var _location_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-picker.component.scss?ngResource */ 9074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ 1218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);







let LocationPickerComponent = class LocationPickerComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    onPickLocation() {
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__.MapModalComponent }).then(modalEl => {
            modalEl.onDidDismiss().then(modalData => {
                if (!modalData.data) {
                    return;
                }
                var pickedLocation = null;
                var latitud = modalData.data.lat;
                var longitud = modalData.data.lng;
                this.getAddress(modalData.data.lat, modalData.data.lng)
                    .then(address => {
                    //console.log(address);
                    pickedLocation = address;
                    this.locationPick.emit(pickedLocation);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.getMapImage(latitud, longitud, 14)).subscribe(staticMapImageUrl => {
                        this.selectedLocationImage = staticMapImageUrl;
                    });
                });
            });
            modalEl.present();
        });
    }
    getAddress(lat, lng) {
        var requestOptions = {
            method: 'GET',
        };
        return fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=275b441f302b4ebeae5b95e445239c31`, requestOptions)
            .then(response => response.json())
            .then(geoData => {
            if (geoData.features.length) {
                return geoData.features[0].properties.formatted;
            }
            else {
                console.log("No address found");
                return null;
            }
        })
            .catch(error => console.log('error', error));
    }
    //To get an image from the map where the coords are given
    getMapImage(lat, lng, zoom) {
        return `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=500&height=300&center=lonlat:${lng},${lat}&zoom=${zoom}&marker=lonlat:${lng},${lat};color:%23ff0000;size:medium&apiKey=275b441f302b4ebeae5b95e445239c31`;
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
LocationPickerComponent.propDecorators = {
    locationPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
LocationPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-location-picker',
        template: _location_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_location_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocationPickerComponent);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-modal/map-modal.component */ 1218);
/* harmony import */ var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickers/location-picker/location-picker.component */ 8042);
/* harmony import */ var _account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-modal/account-modal.component */ 8691);








let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__.LocationPickerComponent, _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent, _account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_2__.AccountModalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
        exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__.LocationPickerComponent, _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent],
        entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent]
    })
], SharedModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //apiURL: 'http://UbuntuServer:5000'
    apiURL: 'http://192.168.0.103:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9852:
/*!******************************************************************************!*\
  !*** ./src/app/shared/account-modal/account-modal.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 4167:
/*!**********************************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://unpkg.com/leaflet@1.9.3/dist/leaflet.css\");\n.map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrREFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLGlDQUFBO0FBREo7QUFJQTtFQUNJLFVBQUE7QUFESiIsImZpbGUiOiJtYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXRAMS45LjMvZGlzdC9sZWFmbGV0LmNzc1wiKTtcbi5tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4ubWFwLnZpc2libGUge1xuICAgIG9wYWNpdHk6IDE7XG59Il19 */";

/***/ }),

/***/ 9074:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".picker {\n  width: 40vh;\n  max-width: 90%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.location-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJsb2NhdGlvbi1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlja2VyIHtcbiAgICB3aWR0aDogNDB2aDtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2NhdGlvbi1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-menu contentId=\"menu-content\" menuId=\"menu-content\" side=\"start\" type=\"overlay\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle menu=\"menu-content\">\n          <ion-item lines=\"none\" routerLink=\"/home/tabs/discover\">\n            <ion-icon slot=\"start\" name=\"restaurant-outline\"></ion-icon>\n            <ion-label>Explore Restaurants</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <!--\n        <ion-menu-toggle menu=\"menu-content\" *ngIf=\"tipo == 'C'\"> \n          <ion-item lines=\"none\" routerLink=\"/bookings\">\n            <ion-icon slot=\"start\" name=\"person-circle-outline\"></ion-icon>\n            <ion-label>Account</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle menu=\"menu-content\" *ngIf=\"tipo == 'R'\"> \n          <ion-item lines=\"none\" routerLink=\"/bookings\">\n            <ion-icon slot=\"start\" name=\"receipt-outline\"></ion-icon>\n            <ion-label>Manage Restaurant</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      -->\n        <ion-menu-toggle menu=\"menu-content\">\n          <ion-item lines=\"none\" (click)=\"onLogout()\" button>\n            <ion-icon slot=\"start\" name=\"exit\"></ion-icon>\n            <ion-label>Logout</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet main id=\"menu-content\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 6958:
/*!******************************************************************************!*\
  !*** ./src/app/shared/account-modal/account-modal.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Almost there</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"confirm()\" [strong]=\"true\">Finish</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"forma\">\n    <ion-grid fixed>\n      <ion-row *ngIf=\"tipoUser == 'C'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"cliente.name\" autocomplete autocorrect formControlName=\"nameC\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'C'\"> \n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Paternal Last Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"cliente.app\" autocomplete autocorrect formControlName=\"appC\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'C'\"> \n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Maternal Last Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"cliente.apm\" autocomplete autocorrect formControlName=\"apmC\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'C'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Phone Number</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"cliente.number\" autocomplete autocorrect formControlName=\"phoneC\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!--Restaurante-->\n      <ion-row *ngIf=\"tipoUser == 'R'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Restaurant Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"restaurante.name\" autocomplete autocorrect formControlName=\"nameR\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'R'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Phone Number</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"restaurante.number\" autocomplete autocorrect formControlName=\"phoneR\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'R'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Branch</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"restaurante.branch\" autocomplete autocorrect formControlName=\"branchR\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'R'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Address Street</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"adress.calle\" autocomplete autocorrect formControlName=\"streetR\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'R'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Address District</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"adress.district\" autocomplete autocorrect formControlName=\"districtR\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'R'\">\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Address Number</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"adress.number\" autocomplete autocorrect formControlName=\"numberR\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tipoUser == 'R'\"> \n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Address Reference</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"adress.reference\" autocomplete autocorrect formControlName=\"referenceR\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!--Tarjeta-->\n      <ion-row>\n        <ion-radio-group class=\"opciones\" formControlName=\"cardType\" (ionChange)=\"selectedValue($event)\">\n          <ion-label position=\"floating\">Card Type</ion-label>\n          <ion-item>\n            <ion-radio slot=\"start\" value=\"D\"></ion-radio>\n            <ion-label>Debit</ion-label> \n          </ion-item>\n          <ion-item>\n            <ion-radio slot=\"start\" value=\"C\"></ion-radio>\n            <ion-label>Credit</ion-label>\n        </ion-item>\n        </ion-radio-group>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Card Clabe</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"card.clabe\" autocomplete autocorrect formControlName=\"cardClabe\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 6140:
/*!**********************************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">{{ closeButtonText }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" id=\"map\" #map></div>\n</ion-content>\n";

/***/ }),

/***/ 8765:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img \n    role=\"button\"\n    class=\"location-image\" \n    (click)=\"onPickLocation()\"\n    [src]=\"selectedLocationImage\" \n    *ngIf=\"selectedLocationImage && !isLoading\">\n  </ion-img>\n  <ion-button color=\"primary\" (click)=\"onPickLocation()\" *ngIf=\"!selectedLocationImage && !isLoading\">\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>Select Location</ion-label>\n  </ion-button>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map