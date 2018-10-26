import { ContactFormService } from '../../services/contact-form.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor(
		private contactFormService: ContactFormService
		){}

	name: string;
	//lname: string;
	email: string;
	comment: string;
  ngOnInit() {
  }


  submit(){
  	//console.log(this.name);
  	//console.log(this.lname);
  	//console.log(this.email);
  	//console.log(this.comment);
  	const POST_URL='https://script.google.com/macros/s/AKfycbwADAMzBNO_ZRzlKwki6fxpHCNS8zTU6SLoJp1I-jzW2JtTZYSL/exec';

  	const postRequest ={
  		name: this.name,
  		email: this.email,
  		comment: this.comment
  	};

  	console.log(postRequest);
  	
  	/*
  	if(POST_URL){
  		$.post(POST_URL, JSON.stringify(postRequest))
  	} else {
  		alert('you must set POST_URL');
  	}
  	*/

  	try{
  		$.post(POST_URL, JSON.stringify(postRequest));
  		this.name = '';
  		this.email= '';
  		this.comment= '';
  		return (alert('Thanks for contacting me!'));
  	} catch(err){
  		return (alert('Something went wrong!'));
  	}
  }
}
