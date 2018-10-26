/**
 * @file Handles the logic for the booking component.
 * @author Calvin Lai
 */
import { BookingsService } from './../services/bookings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})

/**
 * Class representing the component.
 */
export class TestFormComponent implements OnInit {

  /**
   * Constructor for the class.
   * @param {BookingsService} bookingService - The service provider for bookings.
   */
  constructor(
    private bookingService: BookingsService
    ) { }

  firstName = null;
  lastName = null;
  phone = null;
  email = null;
  date = null;
  time = null;
  bookings: any;

  /**
   * Initializes the component.
   */
  ngOnInit() {
    this.bookingService.getBookings(this.loadingComplete.bind(this));
  }

  /**
   * Completion callback called when bookings are loaded.
   */
  loadingComplete(result: any) {
    this.bookings = result;
    console.log((this.bookings));
  }

  /**
   * Creates a booking request using user input.
   */
  submit() {
    if (this.firstName === null) {
      this.display('Missing field(s)!');
      return;
    }
    if (this.lastName === null) {
      this.display('Missing field(s)!');
      return;
    }
    if (this.phone === null) {
      this.display('Missing field(s)!');
      return;
    }
    if (this.email === null) {
      this.display('Missing field(s)!');
      return;
    }
    if (this.date === null) {
      this.display('Missing field(s)!');
      return;
    }
    if (this.time === null) {
      this.display('Missing field(s)!');
      return;
    }

    if (!this.checkExistingBooking(this.date, this.time)) {
      if (this.bookingService.createBooking(this.firstName, this.lastName,
        this.phone, this.email, this.date, this.time)) {
          this.display('Successfully booked!');
          this.bookingService.getBookings(this.loadingComplete.bind(this));
        } else {
          this.display('Could not book!');
        }
    } else {
      this.display('Could not book, existing appointment exists');
    }
  }

  /**
   * Checks if there is an existing booking.
   * @param date the date of the booking
   * @param time the time of the booking
   * @return returns true if exists, else false
   */
  checkExistingBooking(date: string, time: string) {
    for (const i in this.bookings) {
      if (this.bookings[i].date === date && this.bookings[i].time === time) {
        console.log('func checkExistingBooking says: Booking exists!');
        return true;
      }
    }
    return false;
  }

  /**
   * Displays an alert with the specified message.
   * @param {string} message the message to display
   */
  display(message) {
    alert(message);
  }
}
