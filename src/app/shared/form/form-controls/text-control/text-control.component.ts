import {Component, Input} from '@angular/core';

import { BaseFormControlComponent } from "../base-form-control/base-form-control.component";

@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html'
})
export class TextControlComponent extends BaseFormControlComponent {
  @Input() public label!: string;
  @Input() public placeholder!: string;
}
