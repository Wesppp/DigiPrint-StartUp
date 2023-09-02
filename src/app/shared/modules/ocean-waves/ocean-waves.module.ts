import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OceanWavesComponent } from './components/ocean-waves/ocean-waves.component';

@NgModule({
  declarations: [
    OceanWavesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OceanWavesComponent
  ]
})
export class OceanWavesModule { }
