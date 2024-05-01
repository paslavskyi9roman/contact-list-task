import { Injectable } from '@angular/core';

import {ContactModel} from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): ContactModel[] {
    const localStorageContacts = localStorage.getItem('contacts');
    let contacts: ContactModel[] = [];

    if (localStorageContacts) {
      contacts = JSON.parse(localStorageContacts) as ContactModel[];
    }

    return contacts;
  }
}
