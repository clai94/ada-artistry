import { ContactFormService } from '../../services/bookings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor(
		private contactFormService: ContactFormService
		){}

	fname: string;
	lname: string;
	email: string;
	comment: string;

  ngOnInit() {
  }


  submit(){

  }

}
