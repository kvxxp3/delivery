import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})

export class MapModalComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('map') mapElementRef : ElementRef;
  @Input() center : L.LatLngExpression = [51.505, -0.09];
  mapRef: any;
  modalRef: any;
  clickListener: any;

  constructor(private modalCtrl: ModalController, private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    const viewCtrl = this.modalCtrl;
    this.modalRef = this.modalCtrl;
    const mapDiv = document.getElementById("map");
    const map = L.map(mapDiv).setView(this.center, 16); 
    this.mapRef = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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

    map.on('click', function(e) {
      const selectedCoords = {
        lat: e.latlng.lat, 
        lng: e.latlng.lng
      };
      viewCtrl.dismiss(selectedCoords);
    });
    
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {
      this.mapRef.off('click');
  }

}
