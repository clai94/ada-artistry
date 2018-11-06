import { AdminConsoleComponent } from './views/admin-console/admin-console.component';
import { AdminComponent } from './views/admin/admin.component';
import { LandingComponent } from './views/landing/landing.component';
import { ContactComponent } from './views/contact/contact.component';
import { PolicyComponent } from './views/policy/policy.component';
import { AftercareComponent } from './views/aftercare/aftercare.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { FaqComponent } from './views/faq/faq.component';
import { AboutComponent } from './views/about/about.component';
import { TestFormComponent } from './test-form/test-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatesComponent } from './views/rates/rates.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'booking', component: TestFormComponent},
  { path: 'about', component: AboutComponent},
  { path: 'faq' , component: FaqComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'aftercare', component: AftercareComponent},
  { path: 'policies', component: PolicyComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'rates', component: RatesComponent},
  { path: 'adawiththebrows', component: AdminComponent},
  { path: 'admin-console', component: AdminConsoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
