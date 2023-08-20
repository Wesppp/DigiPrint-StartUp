import { Component, OnInit } from '@angular/core';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent  implements OnInit {

  constructor(private faio: FingerprintAIO) { }

  public ngOnInit(): void {}

  public print(): void {
    this.faio.show({
      description: "Some biometric description"
    }).then(result => {
      console.log('success');
    })
      .catch(err => {
        console.log('Err: ', err);
      });
  }
}
