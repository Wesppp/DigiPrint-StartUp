import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardTrackerService {
  private isKeyboardOpened: Subject<boolean> = new Subject<boolean>();
  public isKeyboardOpenedState$: Observable<boolean> = this.isKeyboardOpened.asObservable();

  public updateDisplaySizeDecreasedState(value: boolean): void {
    this.isKeyboardOpened.next(value);
  }
}
