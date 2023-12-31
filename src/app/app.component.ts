import { Component, OnInit } from '@angular/core';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private screenOrientation: ScreenOrientation) {
  }

  public ngOnInit(): void {
    this.screenOrientation.lock('portrait');
  }
}
