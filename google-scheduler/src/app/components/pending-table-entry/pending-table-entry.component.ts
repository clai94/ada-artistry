import { BookingsService } from './../../services/bookings.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pending-table-entry',
  templateUrl: './pending-table-entry.component.html',
  styleUrls: ['./pending-table-entry.component.css']
})

/**
 * Controller for the component.
 */
export class PendingTableEntryComponent implements OnInit {

  /**
   * Constructor.
   */
  constructor(
    private bookingService: BookingsService
  ) { }

  @Input() booking: any;

  /**
   * Called on initialization.
   */
  ngOnInit() {
  }

  /**
   * Confirms a booking. Adds the selected booking to the confirmed bookings table.
   */
  confirmBooking() {
    // this.bookingService.confirmBooking();
  }
}
