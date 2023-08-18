import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { EmailControlComponent } from "./email-control/email-control.component";
import { PasswordControlComponent } from "./password-control/password-control.component";
import { RepeatPasswordControlComponent } from "./repeat-password-control/repeat-password-control.component";

@NgModule({
  declarations: [
    EmailControlComponent,
    PasswordControlComponent,
    RepeatPasswordControlComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    EmailControlComponent,
    PasswordControlComponent,
    RepeatPasswordControlComponent
  ]
})
export class FormControlsModule { }
