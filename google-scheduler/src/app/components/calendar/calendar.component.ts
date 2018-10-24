import { NgModule, Component, enableProdMode } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {

    dataSource: any;
    currentDate: Date = new Date(2017, 4, 25);

    constructor(private http: HttpClient) {
    }

    private getData(options: any, requestOptions: any) {
        const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k',
            CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';
        const dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
                CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

        return this.http.get(dataUrl, requestOptions).toPromise().then((data: any) => data.items);
    }
}
