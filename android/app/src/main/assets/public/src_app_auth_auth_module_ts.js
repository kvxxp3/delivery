"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 3561);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 3561);







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 3561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var _home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.html?ngResource */ 2708);
/* harmony import */ var _auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.page.scss?ngResource */ 7783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _shared_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/account-modal/account-modal.component */ 8691);











let AuthPage = class AuthPage {
  constructor(authService, router, loadingCtrl, alertController, modalCtrl) {
    this.authService = authService;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.alertController = alertController;
    this.modalCtrl = modalCtrl;
    this.isLoading = false;
    this.isLogged = false;
    this.emailAUX = '';
    this.typeAUX = '';
    this.user = {
      id: 0,
      type: '',
      email: '',
      psw: 'string',
      userId: ''
    };
    this.userAux = {
      id: 0,
      type: '',
      email: '',
      psw: 'string',
      userId: ''
    };
    this.existeE = false;
    this.existeU = false;
    this.msg = 'a';
    this.auxCl = {
      id: '',
      name: '',
      app: '',
      apm: '',
      number: '',
      user: '',
      card: ''
    };
    this.auxRes = {
      id: '',
      name: '',
      number: '',
      branch: '',
      user: '',
      dir: '',
      card: ''
    };
    this.auxTarj = {
      id: '',
      type: '',
      clabe: ''
    };
    this.auxDir = {
      id: '',
      calle: '',
      district: '',
      number: '',
      reference: ''
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
        userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_this.userAux.userId, {
          updateOn: 'blur'
        }),
        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_this.userAux.type, {
          updateOn: 'blur'
        }),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, {
          updateOn: 'blur',
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        }),
        psw: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, {
          updateOn: 'blur',
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        })
      });
      _this.userAux.email = _this.form.value.email;
      _this.userAux.type = _this.typeAUX;
      _this.userAux.psw = _this.form.value.psw;
      _this.userAux.userId = _this.form.value.userId;
      yield _this.login();
    })();
  }

  onSwitch() {
    this.isLogged = !this.isLogged;
    console.log('SE ENCUENTRA EN Signup: ' + this.isLogged);
  }

  presentAlert() {
    var _this2 = this;

    return (0,_home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Invalid credentials. Try again.',
        buttons: [{
          text: 'OK',
          role: 'confirm'
        }]
      });
      yield alert.present();
    })();
  }

  login() {
    var _this3 = this;

    return (0,_home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.form.valid) {
        return;
      }

      _this3.loadingCtrl.create({
        message: 'Loading...'
      }).then( /*#__PURE__*/function () {
        var _ref = (0,_home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (loadingEl) {
          loadingEl.present();
          _this3.userAux.email = _this3.form.value.email;
          _this3.userAux.type = _this3.typeAUX;
          _this3.userAux.psw = _this3.form.value.psw;
          _this3.userAux.userId = _this3.form.value.userId;
          console.log('INFO DEL FORM');
          console.log(_this3.userAux.email, _this3.userAux.type, _this3.userAux.psw, _this3.userAux.userId); //si esta para registrarse

          if (_this3.isLogged) {
            let data = yield _this3.authService.postUserSync(_this3.userAux.userId, _this3.userAux.psw, _this3.userAux.email, _this3.userAux.type);
            console.log('SE AUTORIZA EL REGISTRO: ' + data);

            if (data == true) {
              //si las credenciales son correctas
              //busca el id de usuario
              let id = yield _this3.authService.getIDSync(_this3.userAux.email); //guarda el nuevo id en el servicio

              _this3.authService.updateUserId(id); //guarda el nuevo tipo en el servicio


              _this3.authService.updateUserType(_this3.userAux.type);

              _this3.idGlobal = id; //el estado de login cambia a true en el servicio

              _this3.authService.login(); //termina loading screen


              loadingEl.dismiss();

              _this3.form.reset(); //this.openModal();


              _this3.darAltaUser();

              _this3.router.navigate(['/home/tabs/discover']);

              return;
            } else {
              //si las credenciales son incorrectas
              loadingEl.dismiss();

              _this3.form.reset();

              _this3.presentAlert();
            } //si esta para login

          } else {
            let data = yield _this3.authService.getUserSync(_this3.userAux.email, _this3.userAux.psw);
            console.log('SE AUTORIZA EL LOGIN: ' + data);

            if (data == true) {
              //si las credenciales son correctas
              //busca el id de usuario
              let id = yield _this3.authService.getIDSync(_this3.userAux.email); //guarda el nuevo id en el servicio

              _this3.authService.updateUserId(id); //busca el tipo de usuario


              let tipo = yield _this3.authService.getTypeSync(id); //guarda el nuevo tipo en el servicio

              _this3.authService.updateUserType(tipo); //el estado de login cambia a true en el servicio


              _this3.authService.login(); //termina loading screen


              loadingEl.dismiss();

              _this3.form.reset();

              _this3.router.navigate(['/home/tabs/discover']);

              return;
            } else {
              //si las credenciales son incorrectas
              loadingEl.dismiss();

              _this3.form.reset();

              _this3.presentAlert();
            }
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  } //Listener del evento del ion-radio-group para obtener el valor del ion-radio seleccionado


  selectedValue($event) {
    console.log($event.target.value);
    this.typeAUX = $event.target.value;
  }

  openModal() {
    var _this4 = this;

    return (0,_home_karla_Documentos_booking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component: _shared_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_4__.AccountModalComponent
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(resultData => {
        if (resultData.role === 'confirm') {
          _this4.loadingCtrl.create({
            message: 'Creating user...'
          }).then(loadingEl => {
            loadingEl.present();
            const data = resultData.data.userData;
            console.log(data);

            if (data.usuario == 'C') {
              /*this.auxCl.name = data.nombre;
              this.auxCl.app = data.app;
              this.auxCl.apm = data.apm;
              this.auxCl.number = data.telefono;
              this.auxTarj.type = data.tipo;
              this.auxTarj.clabe = data.clabe;*/
            } else if (data.usuario == 'R') {
              /*this.auxRes.name = data.nombreR;
              this.auxRes.number = data.telefonoR;
              this.auxRes.branch = data.sucursalR;
              this.auxDir.calle = data.calleR;
              this.auxDir.district = data.coloniaR;
              this.auxDir.number = data.numR;
              this.auxDir.reference = data.referenciaR;
              this.auxTarj.type = data.tipoR;
              this.auxTarj.clabe = data.clabeR;*/
            }
          });
        }
      });
    })();
  }

  darAltaUser() {
    if (this.userAux.type == 'C') {
      this.auxCl.name = "Paola";
      this.auxCl.app = "Alba";
      this.auxCl.apm = "Bugarin";
      this.auxCl.number = "4494140663";
      this.auxTarj.type = 'D';
      this.auxTarj.clabe = "1234567890";
    }

    if (this.userAux.type == 'R') {
      this.auxRes.name = "Michiladas";
      this.auxRes.number = "4491234567";
      this.auxRes.branch = "Norte";
      this.auxDir.calle = "Av. Universidad";
      this.auxDir.district = "Fatima";
      this.auxDir.number = "102";
      this.auxDir.reference = "Junto a la UAA";
      this.auxTarj.type = "C";
      this.auxTarj.clabe = "1109876543";
    } //IF el tipo usuario es R da de alta direccion


    if (this.userAux.type == 'R') {
      //let dir = 
      this.authService.postDirSync(this.auxDir.calle, this.auxDir.district, Number(this.auxDir.number), this.auxDir.reference); //console.log('SE REGISTRA LA DIR: ' + dir);
      //get id de la dir

      this.idDir = this.authService.getIDDIR(this.auxDir.calle, Number(this.auxDir.number));
      this.authService.updateIDDireccion(this.idDir);
    } //AMBOS DAN ALTA TARJETA
    //let tarjeta = 


    this.authService.postTarjetaSync(this.auxTarj.type, this.auxTarj.clabe);
    console.log('SE REGISTRA LA TARJETA: '); //get id de la dir

    this.idTarj = this.authService.getIDDIR(this.auxDir.calle, Number(this.auxDir.number));
    this.authService.updateIDTarjeta(this.idTarj); //IF R DA DE ALTA RESTAURANTE

    if (this.userAux.type == 'R') {
      //let res = 
      //this.authService.postRestaurantSync(this.auxRes.name, this.auxRes.number, this.auxRes.branch, this.idGlobal, this.idDir, this.idTarj);
      this.authService.postRestaurant(this.auxRes.name, this.auxRes.number, this.auxRes.branch, this.idGlobal, this.idDir, this.idTarj); //console.log('SE REGISTRA EL RESTAURANTE: ' + res);
    } else {
      //ELSE ALTA CLIENTE
      ///let cl = 
      //this.authService.postClienteSync(this.auxCl.name, this.auxCl.app, this.auxCl.apm, this.auxCl.number, this.idGlobal, this.idTarj);
      this.authService.postCliente(this.auxCl.name, this.auxCl.app, this.auxCl.apm, this.auxCl.number, this.idGlobal, this.idTarj); //console.log('SE REGISTRA EL CLIENTE: ' + cl);
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

};

AuthPage.ctorParameters = () => [{
  type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}];

AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-auth',
  template: _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AuthPage);


/***/ }),

/***/ 7783:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#logoimg {\n  height: 115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.opciones {\n  margin-top: 5px;\n}\n\nion-radio-group {\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  justify-items: center;\n}\n\nimg {\n  width: 100px;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n  margin-top: 15px;\n}\n\nion-radio::part(container) {\n  width: 25px;\n  height: 25px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #6815ec;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\n@media (min-width: 768px) {\n  .opciones {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  #logoimg {\n    height: 265px;\n  }\n  img {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQUROO0VBSUU7SUFDSSxhQUFBO0VBRk47RUFJRTtJQUNJLFlBQUE7RUFGTjtBQUNGIiwiZmlsZSI6ImF1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ29pbWd7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ub3BjaW9uZXN7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5pb24tcmFkaW8tZ3JvdXB7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi1yYWRpbzo6cGFydChjb250YWluZXIpIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIGlvbi1yYWRpbzo6cGFydChtYXJrKSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIFxuICBpb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChjb250YWluZXIpIHtcbiAgICBiYWNrZ3JvdW5kOiAjNjgxNWVjO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIGlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KG1hcmspIHtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMnB4IDJweCAwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5vcGNpb25lc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2xvZ29pbWd7XG4gICAgICAgIGhlaWdodDogMjY1cHg7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 2708:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ isLogged ? 'Sign Up' : 'Login' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contenedor\">\n  <ion-content id=\"logoimg\">\n    <img src=\"assets/LogoNamNam.png\" alt=\"\">\n  </ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item *ngIf=\"isLogged\">\n              <ion-label position=\"floating\">Username</ion-label>\n              <ion-input\n                type=\"text\"\n                autocomplete\n                autocorrect\n                formControlName=\"userId\"\n              ></ion-input>\n            </ion-item>\n            <!--\n            <ion-item *ngIf=\"isLogged\">\n              <ion-label position=\"floating\">Type</ion-label>\n              <ion-input\n                type=\"text\"\n                autocomplete\n                autocorrect\n                formControlName=\"type\"\n              ></ion-input>\n            </ion-item>\n            -->\n            <ion-row class=\"opciones\" *ngIf=\"isLogged\">\n              <ion-radio-group class=\"opciones\" formControlName=\"type\" (ionChange)=\"selectedValue($event)\">\n                <ion-item>\n                  <ion-radio slot=\"start\" value=\"R\"></ion-radio>\n                  <ion-label>Restaurant</ion-label> \n                </ion-item>\n                <ion-item>\n                  <ion-radio slot=\"start\" value=\"C\"></ion-radio>\n                  <ion-label>Client</ion-label>\n              </ion-item>\n              </ion-radio-group>\n            </ion-row>\n            <ion-item>\n              <ion-label position=\"floating\">E-mail</ion-label>\n              <ion-input\n                type=\"email\"\n                autocomplete\n                autocorrect\n                formControlName=\"email\"\n              ></ion-input>\n            </ion-item>\n            <ion-item\n              *ngIf=\"!form.get('email').valid && form.get('email').touched\"\n              lines=\"none\"\n            >\n              <ion-label>Enter a valid email</ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                type=\"password\"\n                autocomplete\n                autocorrect\n                formControlName=\"psw\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!form.get('psw').valid && form.get('psw').touched\">\n              <ion-label>Enter a valid password</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button type=\"button\" expand=\"block\" fill=\"clear\" shape=\"round\" (click)=\"onSwitch()\">\n            Switch to {{ isLogged ? 'Login' : 'Sign Up' }}\n          </ion-button>\n          <ion-button\n            type=\"submit\"\n            (click)=\"login()\"\n            expand=\"block\"\n            *ngIf=\"!isLoading\"\n            [disabled]=\"!form.valid\"\n          >\n          {{ isLogged ? 'Sign Up' : 'Login' }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map