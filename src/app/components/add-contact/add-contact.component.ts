import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent {
  newContact: ContactModel = {
    id: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: '',
    dateOfBirth: new Date(),
  };

  constructor(private contactService: ContactService, private router: Router) {}

  addContact(): void {
    this.newContact.id = this.generateId();
    this.contactService.addContact(this.newContact);
    this.router.navigate(['/contacts']);
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  goBack(): void {
    this.router.navigate(['/contacts']);
  }
}
