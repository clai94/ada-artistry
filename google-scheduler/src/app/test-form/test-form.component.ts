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

  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;

  /**
   * Initializes the component.
   */
  ngOnInit() {
  }

  /**
   * Creates a booking request using user input.
   */
  submit() {
    if (this.bookingService.createBooking(this.firstName, this.lastName,
     this.phone, this.email, this.date, this.time)) {
      console.log('success');
     } else {
       console.log('fail');
     }
  }

}
