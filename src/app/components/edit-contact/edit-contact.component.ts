import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contact: ContactModel | undefined = {
    id: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: '',
    dateOfBirth: new Date(),
  };

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contact = this.contactService.getContactById(id);
    } else {
      this.router.navigate(['/contacts']);
    }
  }

  editContact(): void {
    if (!this.contact) {
      return;
    }
    this.contactService.updateContact(this.contact);
    this.router.navigate(['/contacts', this.contact.id]);
  }
}
