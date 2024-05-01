import { Injectable } from '@angular/core';

import { ContactModel } from '../models/contact.model';
import { contactMock } from '../mock-data/initial-data.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
    this.populateInitialData();
  }


  getContacts(): ContactModel[] {
    const localStorageContacts = localStorage.getItem('contacts');
    let contacts: ContactModel[] = [];

    if (localStorageContacts) {
      contacts = JSON.parse(localStorageContacts) as ContactModel[];
    }
    return contacts;
  }

  populateInitialData() {
    localStorage.setItem('contacts', JSON.stringify(contactMock));
  }
}
