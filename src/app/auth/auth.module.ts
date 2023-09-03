import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./components/register/register.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { FormControlsModule } from "../shared/form/form-controls/form-controls.module";
import { OceanWavesComponent } from '../shared/components/ocean-waves/ocean-waves.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    OceanWavesComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormControlsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
