import { Directive, HostListener } from '@angular/core';

import { KeyboardTrackerService } from '../services/keyboard-tracker.service';

@Directive({
  selector: '[focusTracker]'
})
export class FocusTrackerDirective {
  constructor(private keyboardTrackerService: KeyboardTrackerService) {
  }

  @HostListener('ionFocus', ['$event'])
  onFocus(event: FocusEvent) {
    console.log('focus');
    // Обработка события фокусировки
    this.keyboardTrackerService.updateDisplaySizeDecreasedState(true);
  }

  @HostListener('ionBlur', ['$event'])
  onBlur(event: FocusEvent) {
    console.log('blur');
    // Обработка события разфокусировки
    this.keyboardTrackerService.updateDisplaySizeDecreasedState(false);
  }
}
