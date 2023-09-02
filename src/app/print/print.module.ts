import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintComponent } from './components/print/print.component';
import { IonicModule } from '@ionic/angular';
import { PrintRoutingModule } from './print-routing.module';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx'

@NgModule({
  declarations: [
    PrintComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PrintRoutingModule
  ],
  providers:[
    FingerprintAIO
  ]
})
export class PrintModule { }
