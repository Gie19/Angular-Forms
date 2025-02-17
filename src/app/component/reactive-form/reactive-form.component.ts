import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title = 'Registration Form';
  submittedData: any = null;
  formData: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    userName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  onClickSubmit(data: any) {
    if (this.formData.valid) {
      const { password, ...formDataWithoutPassword } = data;
      this.submittedData = formDataWithoutPassword;
    }
  }
}