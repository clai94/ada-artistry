/**
 * @file The service that handles the http requests for bookings.
 * @author Calvin Lai
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

class Booking {

  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public email: string,
    public date: string,
    public time: string) {
  }
}

/**
 * Class representing the service.
 */
@Injectable({
  providedIn: 'root'
})

export class BookingsService {

  /**
   * The constructor for the service
   * @param {HttpClient} http - The http client responsible for HTTP requests.
   */
  constructor(
    private http: HttpClient,
    private database: AngularFireDatabase
    ) { }

  endPoint = 'https://script.google.com/macros/s/AKfycbxrZdSrah88Qah8Ksm8bBcXMPiZpVXlXc4An4MSKQ/exec';

  /**
   * Creates a booking with the specified user info.
   * @param firstName - Someone's first name.
   * @param lastName - Someone's last name.
   * @param phone - Someone's phone number.
   * @param email - Someone's email address.
   * @param date - The date of the appointment.
   * @param time - The time of the appointment.
   * @return Returns true if booking was created succesfuly, else false.
   */
  async createBooking(firstName: string, lastName: string, phone: string, email: string,
    date: string, time: string) {
      const booking = new Booking(firstName, lastName, phone, email, date, time);
      return this.database.database.ref('/requests').child(date).child(time).child(phone).set(booking).then(() => {
        console.log('Successfully written');
      }, () => {
        console.log('Error');
      });
  }

  /**
   * Checks if a booking already exists.
   * @param {string} date - The date of the appointment.
   * @param {string} time - The time of the appointment.
   * @returns Returns true if the appointment exists, else false.
   */
  checkExistingBooking(date: string, time: string) {
    let nib = false;
    this.database.database.ref('/requests').child(date).child(time).on('value', function(snapshot) {
      console.log(snapshot.val());
      if (snapshot.val() != null) {
        console.log('exists');
        nib = true;
        console.log(nib);
      } else {
        console.log('does not exists');
        nib = false;
        console.log(nib);
      }
    }, function (errorObject) {
      console.log('The read failed' + errorObject.code);
    });
    return this.beb(nib);
  }

  beb(nib) {
    return nib;
  }
}
