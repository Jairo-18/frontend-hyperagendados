import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIcon,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  formStep1: FormGroup;
  formStep2: FormGroup;
  eyeOpen = faEye;
  eyeClose = faEyeSlash;
  currentStep: string = 'one';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private _fb: FormBuilder) {
    this.formStep1 = this._fb.group({
      identificationTypeId: ['', Validators.required],
      identification: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^3\\d{9}$')]],
    });
    this.formStep2 = this._fb.group({
      avatarUrl: [''],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  register() {
    console.log();
  }

  nextStep() {
    if (this.formStep1.valid) {
      this.currentStep = 'two';
    }
  }

  /**
   * @param togglePasswordVisibility - Ver contraseña.
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * @param toggleConfirmPasswordVisibility - Ver confirmar contraseña.
   */
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
