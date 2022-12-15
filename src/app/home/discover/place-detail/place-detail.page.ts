import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { BookingService } from 'src/app/bookings/booking.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnDestroy {
  place = {
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
  isBookable = true;
  private placeSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private actionSheetCtrl: ActionSheetController,
    private bookingService: BookingService,
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router
  ) { }

  ionViewWillEnter(){
    this.getPlaceById(this.getIDfromURL());
  }
  //NEW
  getPlaceById(place: number){
    this.placesService.getPlaceById(place).subscribe(
      (resp: any) => {
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
      }
    );
  }
  getIDfromURL(){
    const url = this.router.url;
    const arr = url.split('/', 5);
    const id = parseInt(arr[4],10);
    console.log('el numero en el url es: '+id);
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

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
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
            this.bookingService.addBooking(
              '0',
              this.place.title,
              this.place.imageURL,
              data.first,
              data.last,
              data.guest,
              data.start,
              data.end
            ).subscribe(() => {
              loadingEl.dismiss();
            });
          });
        }
      });
  }

  ngOnDestroy(): void {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

}
