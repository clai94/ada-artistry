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

  /**
   * Initializes the component.
   */
  ngOnInit() {
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
    console.log((this.bookingService.checkExistingBooking(this.date, this.time)));

    if (!this.bookingService.checkExistingBooking(this.date, this.time)) {
      if (this.bookingService.createBooking(this.firstName, this.lastName,
        this.phone, this.email, this.date, this.time)) {
          this.display('Successfully booked!');
        } else {
          this.display('Could not book!');
        }
    } else {
      this.display('Could not book, existing appointment exists');
    }
  }

  /**
   * Displays an alert with the specified message.
   * @param {string} message the message to display
   */
  display(message) {
    alert(message);
  }
}
