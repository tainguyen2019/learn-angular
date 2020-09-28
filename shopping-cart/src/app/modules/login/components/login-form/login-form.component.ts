import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  @Output() user: User;

  // user: User = {username: 'TaiNguyen', password: '1234'};
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  submitForm() {
    if (this.form.valid) {
      this.user = this.form.value;
      console.log(
        `Hello ${this.user.username}. Your password is ${this.user.password}`
      );
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigateByUrl('home');
    }
    this.submitted = true;
  }
}
