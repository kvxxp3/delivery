import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Clientes } from 'src/app/interfaces/clientes';
import { Restaurantes } from 'src/app/interfaces/restaurantes';
import { Tarjeta } from 'src/app/interfaces/tarjeta';
import { Direccion } from 'src/app/interfaces/direccion';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.scss'],
})
export class AccountModalComponent implements OnInit {
  name: string;
  forma: FormGroup;
  typeCardAUX: string = '';
  tipoUser: any;

  cliente: Clientes = {
    id: '',
    name: '',
    app: '',
    apm: '',
    number: '',
    user: '',
    card: ''
  };

  restaurante: Restaurantes = {
    id: '',
    name: '',
    number: '',
    branch: '',
    user: '',
    dir: '',
    card: ''
  };

  card: Tarjeta = {
    id: '',
    type: '',
    clabe: ''
  };

  adress: Direccion = {
    id: '',
    calle: '',
    district: '',
    number: '',
    reference: ''
  };

  constructor(private modalCtrl: ModalController, private authService: AuthService) {
    this.tipoUser=this.authService.userType;
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

  ngOnInit(){   
    
    this.forma = new FormGroup({
      nameC: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(45)]
      }),
      appC: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(45)]
      }),
      apmC: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(45)]
      }),
      phoneC: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(20)]
      }),
      nameR:new FormControl(),
      phoneR: new FormControl(),
      branchR: new FormControl(),
      streetR: new FormControl(),
      districtR: new FormControl(),
      numberR: new FormControl(),
      referenceR: new FormControl(),
      cardType: new FormControl(),
      cardClabe: new FormControl()
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if(this.tipoUser == 'C'){
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
    }else{
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
  selectedValue($event){
    this.typeCardAUX = $event.target.value;
  }

}
