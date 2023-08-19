import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SearchCountryComponent } from './components/search-country/search-country.component';


@NgModule({
  declarations: [
    SearchCountryComponent,
  ],
  exports: [
    SearchCountryComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class SearchCountryModule {
}
