import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Booking } from './create-booking/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private booking = new BehaviorSubject<Booking[]>([]);

  constructor(private authService: AuthService) { }

  get bookings() {
    return this.booking.asObservable();
  }

  addBooking(
    placeId: string,
    placeTitle: string,
    placeImg: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newBooking = new Booking(
      Math.random().toString(),
      placeId,
      this.authService.userId,
      placeTitle,
      placeImg,
      firstName,
      lastName,
      guestNumber,
      dateFrom,
      dateTo
    );
    return this.bookings.pipe(take(1), delay(1000), tap(bookings => {
      this.booking.next(bookings.concat(newBooking));
    })
    );
  }

  cancelBooking(bookingId: string) {
    return this.bookings.pipe(take(1), delay(1000), tap(bookings => {
      this.booking.next(bookings.filter(b => b.id !== bookingId));
    })
    );
   }
}
