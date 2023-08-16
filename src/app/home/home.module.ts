import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './components/home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TopBarModule } from "../shared/top-bar/top-bar.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TopBarModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
