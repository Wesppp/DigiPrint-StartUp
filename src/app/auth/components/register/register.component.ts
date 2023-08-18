import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { passwordMatchValidator } from "../../../shared/form/form-validators/password-match.validator";

interface IRegisterForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
  firstname: FormControl<string | null>;
  lastname: FormControl<string | null>;
  birthDate: FormControl<Date | null>;
  gender: FormControl<string | null>;
}

interface IRegisterFormValue {
  email: string;
  password: string;
  repeatPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles/base-auth.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;
  public fromFieldsShowNumber: number = 1;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group<IRegisterForm>({
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/) // only for eng language
      ]),
      repeatPassword: this.fb.control('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      firstname: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]),
      lastname: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]),
      birthDate: this.fb.control(null, [
        Validators.required
      ]),
      gender: this.fb.control('', [

      ]),
    }, {
      validators: passwordMatchValidator
    });
  }

  public onRegister(formValue: IRegisterFormValue): void {
    const { email, password } = formValue;

    console.log(email, password);

    this.form.reset();
  }

  public onContinueRegistration(): void {
    this.fromFieldsShowNumber = 2;
  }

  public onBackRegistration(): void {
    this.fromFieldsShowNumber = 1;
  }
}
