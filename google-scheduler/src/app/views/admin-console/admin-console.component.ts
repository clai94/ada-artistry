import { BookingsService } from './../../services/bookings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {

  bookings: any;

  constructor(
    private router: Router,
    private bookingService: BookingsService,
  ) {
    this.bookings = new Array();
  }


  ngOnInit() {
    if (localStorage.getItem('admin') !== 'confirmed') {
      this.router.navigate(['/']);
    }
    this.bookingService.getBookings(this.loadingComplete.bind(this));
  }

  loadingComplete(result) {
    console.log(Object.keys(result));
    for (const i in result) {
      if (true) {
        this.bookings.push(result[i]);
      }
    }
  }
}
