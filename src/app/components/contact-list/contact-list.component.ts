import {Component, Inject, OnInit} from '@angular/core';

import {ContactModel} from "../../models/contact.model";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: ContactModel[] = [];
  private contactService: ContactService = Inject(ContactService)

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts = this.contactService.getContacts();
  }

}
