import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
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
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    userName: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
    password: new FormControl("")
  });

  onClickSubmit(data: any) {
    const { password, ...formDataWithoutPassword } = data;
    this.submittedData = formDataWithoutPassword;
  }
}