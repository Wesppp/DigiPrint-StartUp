import { Component } from '@angular/core';

import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent {
  public isKeyboardActive: boolean = false;

  protected turnOnKeyboard(): void {
    this.isKeyboardActive = true;
  }

  protected turnOffKeyboard(): void {
    this.isKeyboardActive = false;
  }

  protected initializeKeyboard(): void {
    Keyboard.addListener('keyboardWillShow', info => {
      this.turnOnKeyboard();
    });

    Keyboard.addListener('keyboardWillHide', () => {
      this.turnOffKeyboard();
    });
  }
}
