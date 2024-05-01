import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: ContactModel[] = [];
  private contactService: ContactService = Inject(ContactService);
  private router: Router = Inject(Router);

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts = this.contactService.getContacts();
  }

  showContactDetail(id: string) {
    this.router.navigate(['/contacts', id]);
  }
}
