import { HttpClient, HttpHandler } from '@angular/common/http';
import { BookingsService } from './services/bookings.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ScrollBar } from '@ng-bootstrap/ng-bootstrap/util/scrollbar';
import { AppRoutingModule } from './/app-routing.module';
import { ChildrenOutletContexts } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CalendarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    NgbModal,
    NgbModalStack,
    ScrollBar,
    ChildrenOutletContexts,
    BookingsService,
    HttpClient,
    HttpHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

