import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { EmailControlComponent } from "./email-control/email-control.component";
import { PasswordControlComponent } from "./password-control/password-control.component";
import { RepeatPasswordControlComponent } from "./repeat-password-control/repeat-password-control.component";
import { TextControlComponent } from "./text-control/text-control.component";
import { DatepickerControlComponent } from './datepicker-control/datepicker-control.component';
import { FocusTrackerDirective } from '../../directives/focus-tracker.directive';

@NgModule({
  declarations: [
    EmailControlComponent,
    PasswordControlComponent,
    RepeatPasswordControlComponent,
    TextControlComponent,
    DatepickerControlComponent,
    FocusTrackerDirective
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    TextControlComponent,
    EmailControlComponent,
    PasswordControlComponent,
    RepeatPasswordControlComponent,
    DatepickerControlComponent
  ]
})
export class FormControlsModule { }
