import { Component, OnInit } from '@angular/core';
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
  filteredContacts: ContactModel[] = [];
  searchTerm: string = '';

  constructor(private contactService: ContactService, private router: Router) {
  }


  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = this.contacts;
  }

  showContactDetail(id: string): void {
    this.router.navigate(['/contacts', id]);
  }

  searchContacts(): void {
    if (this.searchTerm) {
      this.filteredContacts = this.contacts.filter(contact =>
        (contact.name + ' ' + contact.surname).toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
    } else {
      this.filteredContacts = this.contacts;
    }
  }

}
