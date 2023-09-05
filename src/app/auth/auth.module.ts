import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from "@ionic/angular";

import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./components/register/register.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { OceanWavesModule } from '../shared/modules/ocean-waves/ocean-waves.module';
import { LoginComponent } from "./components/login/login.component";
import { FormControlsModule } from "../shared/form/form-controls/form-controls.module";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    OceanWavesModule,
    FormControlsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
