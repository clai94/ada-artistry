import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  endPoint = 'https://script.google.com/macros/s/AKfycbxrZdSrah88Qah8Ksm8bBcXMPiZpVXlXc4An4MSKQ/exec';

  createBooking(firstName: string, lastName: string, phone: string, email: string,
    date: string, time: string) {
      const header = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post<any>(this.endPoint, {'firstName': firstName, 'lastName' : lastName, 'phone': phone,
      'email': email, 'date': date, 'time': time}, {headers: header})
      .subscribe(res => {
        console.log(res);
      } );
  }
}
