// This file was added for Step 15

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactComponent {
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      form_name: ['', Validators.required],
      form_lastname: ['', Validators.required],
      form_email: ['', [Validators.required, Validators.email]],
      form_phone: ['', Validators.required],
      form_message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
