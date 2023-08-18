import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface ILoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

interface ILoginFormValue {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/base-auth.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group<ILoginForm>({
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/) // only for eng language
      ])
    });
  }

  public get email(): AbstractControl<string> | null {
    return this.form.get('email');
  }

  public get password(): AbstractControl<string> | null {
    return this.form.get('password');
  }

  public onRegister(formValue: ILoginFormValue): void {
    const { email, password } = formValue;

    console.log(email, password);

    this.form.reset();
  }
}
