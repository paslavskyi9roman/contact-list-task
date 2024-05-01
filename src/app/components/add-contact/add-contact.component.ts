import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});

  constructor(
    private contactService: ContactService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
    });
  }

  addContact(): void {
    if (this.contactForm.valid) {
      const newContact: ContactModel = {
        id: this.generateId(),
        ...this.contactForm.value,
      };
      this.contactService.addContact(newContact);
      this.router.navigate(['/contacts']);
    }
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  goBack(): void {
    this.router.navigate(['/contacts']);
  }
}
