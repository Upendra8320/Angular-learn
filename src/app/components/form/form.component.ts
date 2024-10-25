import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  multiInputForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.multiInputForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(1)]],
      acceptTerms: [false, Validators.requiredTrue],
      gender: ['', Validators.required],
      color: ['#000000'],
      dateOfBirth: [null],
      appointmentTime: [null],
      feedback: [''],
      range: [50],
      options: ['', Validators.required],
      file: [null],
      phone: [''],
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    this.multiInputForm.patchValue({ file });
  }

  onSubmit() {
    console.log(this.multiInputForm.value);
  }

}
