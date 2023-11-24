import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Booking } from '../interfaces/booking';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookingModel } from './create-booking/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private bookingss = new BehaviorSubject<Booking[]>([]);

  constructor(private authService: AuthService, private http: HttpClient) { }
  
  get bookings() {
    return this.bookingss.asObservable();
  }

  listBookings(): Observable<Booking>{
    return this.http.get<Booking>(`${environment.apiURL}/bookings`);
  }

  getBookingById(id: number): Observable<Booking>{
    return this.http.get<Booking>(`${environment.apiURL}/bookings/?id=${id}`);
  }

  newBooking(newPlace: Booking): Observable<Booking>{
    return this.http.post<Booking>(`${environment.apiURL}/bookings`, newPlace);
  }

  updateBooking(booking: any): Observable<Booking>{
    return this.http.put<Booking>(`${environment.apiURL}/bookings/${booking.id}`, booking);
  }

  deleteBooking(id: number): Observable<Booking>{
    return this.http.delete<Booking>(`${environment.apiURL}/bookings/${id}`);
  }

  addBooking(
    placeId: string,
    placeTitle: string,
    placeImg: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date) {
    const newBooking = new BookingModel(
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
    return this.bookings.pipe(take(1), delay(1000), tap(booking => {
      this.bookingss.next(booking.concat(newBooking));
    })
    );
  }
}
