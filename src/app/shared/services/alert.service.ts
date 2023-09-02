import { Injectable } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { IAlert } from '../interfaces/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private alertController: AlertController) { }

  public async showAlert(alertData: IAlert): Promise<void> {
    const alert = await this.alertController.create({
      header: alertData.header,
      subHeader: alertData.subHeader,
      message: alertData.message,
      buttons: alertData.buttons
    });

    await alert.present();
  }
}
