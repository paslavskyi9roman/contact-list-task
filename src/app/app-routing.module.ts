import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
