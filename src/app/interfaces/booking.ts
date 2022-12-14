export interface Booking {
  id: string;
  placeId: string;
  userId: string;
  placeTitle: string;
  placeImg: string;
  firstName: string;
  lastName: string;
  guestNumber: number;
  bookedFrom: Date;
  bookedTo: Date;
}
