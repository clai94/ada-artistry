import { BookingsService } from './../services/bookings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor(private bookingService: BookingsService) { }
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;

  ngOnInit() {
  }

  submit() {
    this.bookingService.createBooking(this.firstName, this.lastName,
     this.phone, this.email, this.date, this.time);
  }
}
