import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { BookingsService } from './services/bookings.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    NgbModal,
    NgbModalStack,
    ScrollBar,
    ChildrenOutletContexts,
    BookingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
