import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FontAwesomeModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  eyeOpen = faEye;
  eyeClose = faEyeSlash;
  showPassword: boolean = false;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      numberType: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    console.log();
  }
}
