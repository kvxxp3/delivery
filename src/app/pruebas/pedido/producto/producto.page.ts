import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  form: FormGroup;
  product: Producto = {
    id: 0,
    nombre: 'product',
    des: 'string',
    precio: 'string',
    restaurante: 'string',
    foto: 'string'
  };

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private productoService: ProductoService,
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      cantidad: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  ionViewWillEnter(){
    this.getProductById(this.getIDfromURL());
  }

  getIDfromURL(){
    console.log('entra a funcion get id by url')
    const url = this.router.url;
    const arr = url.split('/', 4);
    const id = parseInt(arr[3],10);
    console.log('el numero en el url es: '+id);
    return id;
  }
  //
  getProductById(product: number){
    this.productoService.getProductByID(product).subscribe(
      (resp: any) => {
        this.product = {
          id: resp.id,
          nombre: resp.nombre,
          des: resp.des,
          precio: resp.precio,
          restaurante: resp.restaurante,
          foto: resp.foto
        };
      }
    );
  }

  onAddProduct(){
    this.loadingController.create({
      message: 'Adding to Cart...'
    }).then(loadingEl => {
      loadingEl.present();

      this.productoService.updateAuxCantidad(this.form.value.cantidad);
      const precioFinal = this.form.value.cantidad * parseFloat(this.product.precio);
      console.log("PRECIO FINAL ANTES DE ENVIAR: " + precioFinal);
      this.productoService.updateAuxPrecioFinal(precioFinal);
      //concatena los precios si es que ya lleva mas de un producto
      const precio = this.productoService.precioTotal + precioFinal;
      this.productoService.updateAuxPrecioTotal(precio);
      this.productoService.updateIdProducto(this.getIDfromURL());

      loadingEl.dismiss();
    });
  }

}
