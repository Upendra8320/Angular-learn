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


  // if you want to send the form data to an API, you can use the following code:


  // onFileSelect(event: any) {
  //   const file = event.target.files[0];
  //   this.multiInputForm.patchValue({ file });
  //   this.multiInputForm.get('file')?.updateValueAndValidity();
  // }

  // onSubmit() {
  //   const formData = new FormData();

  //   // Append each form control's value to FormData
  //   formData.append('name', this.multiInputForm.get('name')?.value);
  //   formData.append('password', this.multiInputForm.get('password')?.value);
  //   formData.append('email', this.multiInputForm.get('email')?.value);
  //   formData.append('age', this.multiInputForm.get('age')?.value);
  //   formData.append('acceptTerms', this.multiInputForm.get('acceptTerms')?.value);
  //   formData.append('gender', this.multiInputForm.get('gender')?.value);
  //   formData.append('color', this.multiInputForm.get('color')?.value);
  //   formData.append('dateOfBirth', this.multiInputForm.get('dateOfBirth')?.value);
  //   formData.append('appointmentTime', this.multiInputForm.get('appointmentTime')?.value);
  //   formData.append('feedback', this.multiInputForm.get('feedback')?.value);
  //   formData.append('range', this.multiInputForm.get('range')?.value);
  //   formData.append('options', this.multiInputForm.get('options')?.value);
  //   formData.append('phone', this.multiInputForm.get('phone')?.value);

  //   // Append the file if it exists
  //   const file = this.multiInputForm.get('file')?.value;
  //   if (file) {
  //     formData.append('file', file);
  //   }

  //   // Send the FormData to the API
  //   this.http.post('https://your-api-url.com/upload', formData).subscribe(
  //     (response) => console.log('Upload success', response),
  //     (error) => console.error('Upload error', error)
  //   );
  // }

}
