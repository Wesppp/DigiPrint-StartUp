import { Component, OnInit } from '@angular/core';
import { BiometricWrapper } from '@awesome-cordova-plugins/biometric-wrapper/ngx';

// import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements OnInit {
  public s: string = '';

  constructor(private biometricWrapper: BiometricWrapper) {
  }

  public ngOnInit(): void {
  }

  public print(): void {
    this.biometricWrapper.activateFingerprint({
      title: 'HELLO',
    })
      .then((res: any) => {
        this.s = 'result' + res;
        console.log('result: ', res);
      })
      .catch((error: any) => {
        this.s = 'error' + error;
        console.log('error: ', error);
      });
  }
}
