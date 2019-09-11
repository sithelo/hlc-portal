import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: ['admin@mediatec.org', [Validators.required, Validators.minLength(4)]],
    });
  }

  get username() {
    return this.form.controls.username;
  }

  submitForm(): void {
    this.username.markAsDirty();
    this.username.updateValueAndValidity();
    ;
    if (this.username.invalid) return;
    //this.authService.SignIn(this.email.value, this.password.value)
  }
  ngOnInit() {}
}
