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
  showMsg = 'Show Pending Appointments';

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
    for (const i in result) {
      if (true) {
        this.bookings.push(result[i]);
      }
    }
  }

  showPendingAppointments() {
    this.showMsg = 'Pending Appointments';
    this.bookings = [...this.bookings];
  }
}
