import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: 'app-base-form-control',
  templateUrl: './base-form-control.component.html'
})
export class BaseFormControlComponent {
  @Input() public control!: AbstractControl;

  public get formControl(): FormControl {
    return this.control as FormControl;
  }
}
