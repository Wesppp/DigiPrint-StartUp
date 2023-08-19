import { Component, OnInit, ViewChild } from '@angular/core';

import { IonModal } from '@ionic/angular';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';

import { ICountry } from '../../../shared/interface/country.interface';
import { countriesList } from '../../../../assets/static/countries';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface IPhoneForm {
  phone: FormControl<string | null>;
}

interface IPhoneFormValue {
  phone: string;
}

@Component({
  selector: 'app-phone-page',
  templateUrl: './phone-page.component.html',
  styleUrls: ['./phone-page.component.scss'],
})
export class PhonePageComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;
  public selectedCountry!: ICountry;

  public countries: ICountry[] = countriesList;
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  readonly phoneMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
      /\d/, /\d/, /\d/],
  };

  public countrySelectionChanged(country: ICountry) {
    this.selectedCountry = country;
    this.form.reset();
    this.modal.dismiss();
  }

  public ngOnInit(): void {

    this.form = this.fb.group<IPhoneForm>({
      phone: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(4),
      ]),
    });
  }

  public sendPhone(value: IPhoneFormValue) {
    console.log(value);
  }

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
}
