import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pages-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  backgroundNumber = 1;
  fullScreen = false;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = fb.group({
      userName: ['admin@mediatec.org', [Validators.required, Validators.minLength(4)]],
      password: ['cleanui', [Validators.required]],
      confirm: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
  }

  changeBackground(): void {
    if (this.backgroundNumber === 5) {
      this.backgroundNumber = 1;
    } else {
      this.backgroundNumber += 1;
    }
  }
  submitForm(): void {

  }
  changeScreen(): void {
    this.fullScreen = !this.fullScreen;
  }
}
