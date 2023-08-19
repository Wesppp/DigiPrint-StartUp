import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MaskitoModule } from '@maskito/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchCountryModule } from '../shared/modules/search-country/search-country.module';
import { PhoneRoutingModule } from './phone-routing.module';
import { PhonePageComponent } from './components/phone-page/phone-page.component';

@NgModule({
  declarations: [
    PhonePageComponent,
  ],
  imports: [
    PhoneRoutingModule,
    CommonModule,
    IonicModule,
    SearchCountryModule,
    MaskitoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PhoneModule {
}
