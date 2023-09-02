import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { PrintComponent } from './components/print/print.component';
import { PrintRoutingModule } from './print-routing.module';
import { OceanWavesModule } from '../shared/modules/ocean-waves/ocean-waves.module';

@NgModule({
  declarations: [
    PrintComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PrintRoutingModule,
    OceanWavesModule
  ],
  providers: [
    FingerprintAIO,
  ]
})
export class PrintModule {
}
