import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) { }

  password: string;
  username: string;
  endPoint = 'https://script.google.com/macros/s/AKfycbw-_o5rZAAuktOBt_IxCcyN6IuubjlBFvM_sZ_5L0EGBDzoeZw_/exec';

  ngOnInit() {
  }

  submit() {
    const mockResponse = {
      data: [
        { id: 2313, value: 'Value for 2313' },
        { id: 1231, value: 'Value for 1231' },
      ]
    };

    this.http.get(this.endPoint).subscribe();

    // this.http.post<any>(this.endPoint, {'firstName': firstName, 'lastName' : lastName, 'phone': phone,
    // 'email': email, 'date': date, 'time': time}, {headers: header}).subscribe(res => {
    //   console.log(res);
    // });  }
  }
}
