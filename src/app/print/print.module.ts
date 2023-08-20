import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { PrintComponent } from './components/print/print.component';
import { IonicModule } from '@ionic/angular';
import { PrintRoutingModule } from './print-routing.module';

@NgModule({
  declarations: [
    PrintComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PrintRoutingModule
  ],
  providers: [
    FingerprintAIO
  ]
})
export class PrintModule { }
