import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonePageComponent } from './components/phone-page/phone-page.component';


const routes: Routes = [
  {
    path: '',
    component: PhonePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneRoutingModule {
}
