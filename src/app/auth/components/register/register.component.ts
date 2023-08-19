import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { passwordMatchValidator } from '../../../shared/form-validators/password-match.validator';

interface IRegisterForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
}

interface IRegisterFormValue {
  email: string;
  password: string;
  repeatPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group<IRegisterForm>({
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/), // only for eng language
      ]),
      repeatPassword: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    }, {
      validators: passwordMatchValidator,
    });
  }

  public get email(): AbstractControl<string> | null {
    return this.form.get('email');
  }

  public get password(): AbstractControl<string> | null {
    return this.form.get('password');
  }

  public get repeatPassword(): AbstractControl<string> | null {
    return this.form.get('repeatPassword');
  }

  public onRegister(formValue: IRegisterFormValue): void {
    const { email, password } = formValue;

    console.log(email, password);

    this.form.reset();
  }
}
