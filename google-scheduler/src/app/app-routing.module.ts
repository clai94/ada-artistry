import { TestFormComponent } from './test-form/test-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TestFormComponent },
  { path: 'booking', component: TestFormComponent },
  // { path: 'about', component: },
  // { path: 'faq' , component: },
  // { path: 'gallery', component: },
  // { path: 'aftercare', component: },
  // { path: 'policy', component: },
  // { path: 'contact', component: },
  // { path: 'rates', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
