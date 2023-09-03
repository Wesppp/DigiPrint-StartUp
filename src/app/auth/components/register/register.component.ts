import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import {
  passwordMatchValidator,
} from '../../../shared/form/form-validators/password-match.validator';
import { KeyboardTrackerService } from '../../../shared/services/keyboard-tracker.service';

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
  firstname: string;
  lastname: string;
  birthDate: Date;
  gender: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles/base-auth.component.scss'],
})
export class RegisterComponent
  implements OnInit, OnDestroy {
  public form!: FormGroup;
  public fromFieldsShowNumber: number = 1;
  public isKeyboardOpened!: boolean;

  private unsubscribe$ = new Subject<void>();

  constructor(private fb: FormBuilder,
              private router: Router,
              private keyboardTrackerService: KeyboardTrackerService) {
  }

  public ngOnInit(): void {
    this.createForm();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
      firstname: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      lastname: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      birthDate: this.fb.control(null, [
        Validators.required,
      ]),
      gender: this.fb.control('male', [
        Validators.required,
      ]),
    }, {
      validators: passwordMatchValidator,
    });
  }

  public onRegister(formValue: IRegisterFormValue): void {
    console.log(formValue);

    this.form.reset();

    this.router.navigateByUrl('/auth/login');
  }

  public onContinueRegistration(): void {
    this.fromFieldsShowNumber = 2;
  }

  public onBackRegistration(): void {
    this.fromFieldsShowNumber = 1;
  }
}
