import { BookingsService } from './../../services/bookings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-table',
  templateUrl: './pending-table.component.html',
  styleUrls: ['./pending-table.component.css']
})

/**
 * Component controller.
 */
export class PendingTableComponent implements OnInit {

  bookings: any;
  headers: any;
  showMsg = 'Show Pending Appointments';

  /**
   * Constructor.
   * @param {BookingsService} bookingService service for controller
   */
  constructor(
    private bookingService: BookingsService
  ) {
    this.bookings = new Array();
   }

  /**
   * Called on init.
   */
  ngOnInit() {
    this.bookingService.getBookings(this.loadingComplete.bind(this));
  }

  /**
  * Called when async loading is complete.
  * Fills this.booking with data from the database.
  * @param result
  */
  loadingComplete(result) {
    for (const i in result) {
      if (true) {
        this.bookings.push(result[i]);
      }
    }
  }

  /**
   * Gets the table headers.
   */
  getHeaders() {
    return ['Date', 'Time', 'Name', 'Email', 'Approve', 'Decline'];
  }

  /**
  * Updates the DOM after data has been loaded.
  */
  showPendingAppointments() {
    this.showMsg = 'Pending Appointments';
    this.bookings = [...this.bookings];
    this.headers = this.getHeaders();
  }
}
