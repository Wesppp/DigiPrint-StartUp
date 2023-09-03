import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-keyboard-tracker',
  templateUrl: './keyboard-tracker.component.html',
})
export class KeyboardTrackerComponent implements OnInit, OnDestroy {
  public isKeyboardOpened!: boolean;

  private unsubscribe$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef,
              private platform: Platform) {
  }

  public ngOnInit(): void {
    this.trackKeyboard();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private trackKeyboard(): void {
    this.platform.keyboardDidShow.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.isKeyboardOpened = true;
      this.cdr.detectChanges();
    });

    this.platform.keyboardDidHide.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.isKeyboardOpened = false;
      this.cdr.detectChanges();
    });
  }
}
