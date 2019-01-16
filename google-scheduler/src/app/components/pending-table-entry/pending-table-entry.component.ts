import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pending-table-entry',
  templateUrl: './pending-table-entry.component.html',
  styleUrls: ['./pending-table-entry.component.css']
})
export class PendingTableEntryComponent implements OnInit {

  constructor() { }

  @Input() booking: any;

  ngOnInit() {
    console.log(this.booking);
  }

}
