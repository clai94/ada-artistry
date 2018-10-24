/**
 * @file Handles the logic for the admin view.
 * @author Calvin Lai
 */

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
/**
 * Class representing the component.
 */
export class AdminComponent implements OnInit {

  /**
   * Creates the component.
   * @param {HttpClient} http - The http client for handling http requests.
   * @param {AngularFireAuth} auth - The handler for authentication.
   * @param {Router} router - The router for routing.
   */
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
    private router: Router
    ) { }

  password: string;
  username: string;

  endPoint = 'https://script.google.com/macros/s/AKfycbw-_o5rZAAuktOBt_IxCcyN6IuubjlBFvM_sZ_5L0EGBDzoeZw_/exec';

  /**
   * Initializes the component.
   */
  ngOnInit() {
  }

  /**
   * Signs the user in with an email and password.
   */
  submit() {
    this.auth.auth.signInWithEmailAndPassword(this.username, this.password).then(value => {
      console.log('Nice, it worked!');
      this.router.navigate(['/booking']);
  })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }
}
