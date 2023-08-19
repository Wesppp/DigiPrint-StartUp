import { Component, OnInit, ViewChild } from '@angular/core';

import { IonModal } from '@ionic/angular';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';

import { ICountry } from '../../../shared/interface/country.interface';
import { countriesList } from '../../../../assets/static/countries';



@Component({
  selector: 'app-phone-page',
  templateUrl: './phone-page.component.html',
  styleUrls: ['./phone-page.component.scss'],
})
export class PhonePageComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;
  public selectedCountry!: ICountry;
  public phoneNumber: string = '';

  public countries: ICountry[] = countriesList;

  readonly phoneMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/],
  };

  public countrySelectionChanged(country: ICountry) {
    this.selectedCountry = country;
    this.phoneNumber = '';
    this.modal.dismiss();
  }

  public ngOnInit(): void {
  }

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
}
