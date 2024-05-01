import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../../services/contact.service';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.navigateToContacts();
      return;
    }

    const contact = this.contactService.getContactById(id);
    if (!contact) {
      this.navigateToContacts();
      return;
    }

    this.contactForm.patchValue(contact);
  }

  private navigateToContacts(): void {
    this.router.navigate(['/contacts']);
  }

  createForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
    });
  }

  editContact(): void {
    if (this.contactForm.valid) {
      const updatedContact: ContactModel = {
        ...this.contactForm.value,
        id: this.route.snapshot.paramMap.get('id') || '',
      };
      this.contactService.updateContact(updatedContact);
      this.router.navigate(['/contacts', updatedContact.id]);
    }
  }
}
