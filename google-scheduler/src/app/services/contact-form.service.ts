import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

class ContactForm{
	constructor(
		public fname: string,
		public lname: string,
		public email: string,
		public comment: string,
		){
	}
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(
  	private http: HttpClient,
  	private database: AngularFireDatabase) { }

  createSubmission(fname: string, lname: string, email: string, comment: string){
  	const submission = new ContactForm(fname,lname,email,comment);
  	const name = fname.concat(" "+ lname);

  	var submitRef = this.database.database.ref('/contactForm').child(name);
  	submitRef.set(submission);
  }

}
