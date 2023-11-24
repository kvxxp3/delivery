import { Component, OnDestroy, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BookingService } from './booking.service';
import { BookingModel } from './create-booking/booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
  loadedBookings: BookingModel[];
  bookable: BookingModel[];

  private bookingSub: Subscription;

  constructor(private bookingService: BookingService, private authService: AuthService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.bookingSub = this.bookingService.bookings.subscribe(bookings => {
      this.loadedBookings = bookings;
    });
  }

  ionViewWillEnter() {
    this.loadBookings();
  }

  async loadBookings(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles'
    }
    );
    await loading.present();
    //convertir data json recibido del servidor a string
    this.bookingService.listBookings().subscribe(
      (resp) => {
        loading.dismiss();
        const listString = JSON.stringify(resp);
        //lista todos los lugares
        this.loadedBookings = JSON.parse(listString);
        //lista solos los que puede hacer reservacion
        this.bookable = JSON.parse(listString);
        console.log('userId: ' + this.authService.userId);
        //let j=0;
        for (let i = 0; i < this.bookable.length; i++) {
          console.log('JSON Places ' + i + ': ' + this.bookable[i].placeTitle);

          if (this.bookable[i].userId === this.authService.userId) {
            console.log('entro a filtro '+this.bookable[i].placeTitle);
            this.bookable.splice(i,i);
            if(i!==0){i--;}
          }

        }
        event?.target.complete();
      },
      (err) => {
        console.log(err.message);
        loading.dismiss();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }

}
