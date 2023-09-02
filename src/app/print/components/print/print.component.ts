import { Component, OnInit } from '@angular/core';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { AlertService } from '../../../shared/services/alert.service';
import { IAlert } from '../../../shared/interfaces/alert.interface';

const successPrintAlert: IAlert = {
  header: 'Success print',
  subHeader: 'Important message',
  message: 'The user is confirmed',
  buttons: ['OK']
};

const failurePrintAlert: IAlert = {
  header: 'Failure print',
  subHeader: 'Important message',
  message: 'The user is not confirmed',
  buttons: ['OK']
};

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements OnInit {
  constructor(private faio: FingerprintAIO,
              private alertService: AlertService) {
  }

  public ngOnInit(): void {
  }

  public print(): void {
    this.faio.isAvailable().then(
      ()=>{
        this.faio.show({}).then(() => {
          this.alertService.showAlert(successPrintAlert);
        });
      },
      ()=> {
        this.alertService.showAlert(failurePrintAlert);
      }
    )
  }
}
