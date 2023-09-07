import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';

import {
  passwordMatchValidator,
} from '../../../shared/form/form-validators/password-match.validator';
import {
  KeyboardTrackerComponent
} from '../../../shared/components/keyboard-tracker/keyboard-tracker.component';
import { fadeInDownAnimation, fadeOutUpAnimation } from '../../../../animations/fade.animation';
import { zoomInAnimation, zoomOutAnimation } from '../../../../animations/zoom.animation';
import { AuthService } from '../../services/auth.service';
import { IRegisterFormValue } from '../../interfaces/registerFormValue.interface';

interface IRegisterForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
  firstname: FormControl<string | null>;
  lastname: FormControl<string | null>;
  birthDate: FormControl<Date | null>;
  gender: FormControl<string | null>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../../styles/components/base-auth.component.scss'],
  animations: [
    fadeOutUpAnimation,
    fadeInDownAnimation,
    zoomOutAnimation,
    zoomInAnimation
  ]
})
export class RegisterComponent
  extends KeyboardTrackerComponent
  implements OnInit {
  public form!: FormGroup;
  public fromFieldsShowNumber: number = 1;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              cdr: ChangeDetectorRef,
              platform: Platform) {
    super(cdr, platform);
  }

  public override ngOnInit(): void {
    super.ngOnInit();

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
      gender: this.fb.control('', [
        Validators.required,
      ]),
    }, {
      validators: passwordMatchValidator,
    });
  }

  public onRegister(formValue: IRegisterFormValue): void {
    this.form.reset();

    // redirect to phone page with formValue data
    this.router.navigateByUrl('/');
  }

  public onContinueRegistration(): void {
    this.fromFieldsShowNumber = 2;
  }

  public onBackRegistration(): void {
    this.fromFieldsShowNumber = 1;
  }
}
