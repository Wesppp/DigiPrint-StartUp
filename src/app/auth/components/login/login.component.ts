import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Platform } from '@ionic/angular';

import {
  KeyboardTrackerComponent
} from '../../../shared/components/keyboard-tracker/keyboard-tracker.component';
import { zoomInAnimation, zoomOutAnimation } from '../../../../animations/zoom.animation';
import { fadeInDownAnimation, fadeOutUpAnimation } from '../../../../animations/fade.animation';
import { ILoginRequest } from '../../interfaces/loginRequest.interface';
import { AuthService } from '../../services/auth.service';

interface ILoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../styles/components/base-auth.component.scss'],
  animations: [
    fadeOutUpAnimation,
    fadeInDownAnimation,
    zoomOutAnimation,
    zoomInAnimation
  ]
})
export class LoginComponent
  extends KeyboardTrackerComponent
  implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder,
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

  public onRegister(formValue: ILoginRequest): void {
    const { email, password } = formValue;

    this.form.reset();
  }

  protected readonly FormControl = FormControl;
}
