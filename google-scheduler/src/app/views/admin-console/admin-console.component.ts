/**
 * @file The controller for the admin-console view.
 * @author Calvin Lai
 */
import { BookingsService } from './../../services/bookings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})

/**
 * Controller representing the view.
 */
export class AdminConsoleComponent implements OnInit {

  bookings: any;
  showMsg: string;

  /**
   * Constructor for the controller.
   * @param {Router} router the router for the controller
   * @param {BookingsService} bookingService the controller's booking service
   */
  constructor(
    private router: Router,
    private bookingService: BookingsService,
  ) {
    this.bookings = new Array();
    this.showMsg = 'Show Pending Appointments';
  }

  /**
   * Called on initialization.
   */
  ngOnInit() {
    if (localStorage.getItem('admin') !== 'confirmed') {
      this.router.navigate(['/']);
    }
    // this.bookingService.getBookings(this.loadingComplete.bind(this));
  }

  /**
   * Called when async loading is complete.
   * Fills this.booking with data from the database.
   * @param result
   */
  // loadingComplete(result) {
  //   for (const i in result) {
  //     if (true) {
  //       this.bookings.push(result[i]);
  //     }
  //   }
  // }

  /**
   * Updates the DOM after data has been loaded.
   */
  // showPendingAppointments() {
  //   this.showMsg = 'Pending Appointments';
  //   this.bookings = [...this.bookings];
  // }
}
