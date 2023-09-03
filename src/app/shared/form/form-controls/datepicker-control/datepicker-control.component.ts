import { Component, OnInit } from '@angular/core';

import { BaseFormControlComponent } from '../base-form-control/base-form-control.component';

@Component({
  selector: 'app-datepicker-control',
  templateUrl: './datepicker-control.component.html',
  styleUrls: ['./datepicker-control.component.scss'],
})
export class DatepickerControlComponent
  extends BaseFormControlComponent
  implements OnInit {
  public minDate!: string;

  public ngOnInit(): void {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Start disabling from tomorrow
    this.minDate = currentDate.toISOString();
  }
}
