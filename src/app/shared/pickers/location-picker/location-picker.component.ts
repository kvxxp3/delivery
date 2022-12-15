import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MapModalComponent } from '../../map-modal/map-modal.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  @Output() locationPick = new EventEmitter<string>();
  selectedLocationImage: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  onPickLocation(){
    this.modalCtrl.create({component: MapModalComponent}).then(modalEl => {
      modalEl.onDidDismiss().then(modalData => {
        if(!modalData.data){
          return;
        }

        var pickedLocation : string = null;
        var latitud: number = modalData.data.lat;
        var longitud: number = modalData.data.lng;

        this.getAddress(modalData.data.lat, modalData.data.lng)
        .then(address => {
          //console.log(address);
          pickedLocation = address;
          this.locationPick.emit(pickedLocation);
          return of(this.getMapImage(latitud, longitud, 14)).subscribe(staticMapImageUrl => {
            this.selectedLocationImage = staticMapImageUrl;
          });
        });
        
      });
      modalEl.present();
    });
  }
  

  private getAddress(lat: number, lng: number){
    var requestOptions = {
      method: 'GET',
    };
    
    return fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=275b441f302b4ebeae5b95e445239c31`, requestOptions)
      .then(response => response.json())
      .then(geoData => {
        if (geoData.features.length) {
          return geoData.features[0].properties.formatted;
        } else {
          console.log("No address found");
          return null;
        }
      })
      .catch(error => console.log('error', error));
    
  }

  //To get an image from the map where the coords are given
  private getMapImage(lat: number, lng: number, zoom: number){
    return `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=500&height=300&center=lonlat:${lng},${lat}&zoom=${zoom}&marker=lonlat:${lng},${lat};color:%23ff0000;size:medium&apiKey=275b441f302b4ebeae5b95e445239c31`;
  }
}