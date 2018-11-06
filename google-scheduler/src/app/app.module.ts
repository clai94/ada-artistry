import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { BookingsService } from './services/bookings.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ScrollBar } from '@ng-bootstrap/ng-bootstrap/util/scrollbar';
import { AppRoutingModule } from './/app-routing.module';
import { ChildrenOutletContexts } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { BookingComponent } from './views/booking/booking.component';
import { AboutComponent } from './views/about/about.component';
import { FaqComponent } from './views/faq/faq.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { AftercareComponent } from './views/aftercare/aftercare.component';
import { PolicyComponent } from './views/policy/policy.component';
import { ContactComponent } from './views/contact/contact.component';
import { RatesComponent } from './views/rates/rates.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './views/admin/admin.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminConsoleComponent } from './views/admin-console/admin-console.component';
import { PendingTableEntryComponent } from './components/pending-table-entry/pending-table-entry.component';
import { PendingTableComponent } from './components/pending-table/pending-table.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyCBUtuOCz1iGv3CwhHVguVy_EVZw6ZS7nM',
    authDomain: 'adas-artistry.firebaseapp.com',
    databaseURL: 'https://adas-artistry.firebaseio.com',
    projectId: 'adas-artistry',
    storageBucket: 'adas-artistry.appspot.com',
    messagingSenderId: '237915865962'
};

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CalendarComponent,
    NavbarComponent,
    LandingComponent,
    BookingComponent,
    AboutComponent,
    FaqComponent,
    GalleryComponent,
    AftercareComponent,
    PolicyComponent,
    ContactComponent,
    RatesComponent,
    FooterComponent,
    AdminComponent,
    PaymentComponent
    AdminConsoleComponent,
    PendingTableEntryComponent,
    PendingTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    NgbModal,
    NgbModalStack,
    ScrollBar,
    ChildrenOutletContexts,
    BookingsService,
    AngularFireModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
