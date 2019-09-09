import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {
  backgroundNumber = 1;
  fullScreen = false;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = fb.group({
      userName: ['admin@mediatec.org', [Validators.required, Validators.minLength(4)]],
      password: ['cleanui', [Validators.required]],
    });
  }


  changeBackground(): void {
    if (this.backgroundNumber === 5) {
      this.backgroundNumber = 1;
    } else {
      this.backgroundNumber += 1;
    }
  }

  changeScreen(): void {
    this.fullScreen = !this.fullScreen;
  }
}
