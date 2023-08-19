import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICountry } from '../../../../interface/country.interface';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss'],
})
export class SearchCountryComponent implements OnInit {
  @Input() public items: ICountry[] = [];
  @Input() public title = 'Select Items';

  @Output() public selectionCancel = new EventEmitter<void>();
  @Output() public selectionChange = new EventEmitter<ICountry>();

  public filteredItems: ICountry[] = [];

  public ngOnInit() {
    this.filteredItems = [...this.items];
  }

  public trackItems(index: number, item: ICountry) {
    return item.name;
  }

  public cancelChanges() {
    this.selectionCancel.emit();
  }

  public searchbarInput(ev: any) {
    this.filterList(ev.target.value);
  }

  public filterList(searchQuery: string | undefined) {
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.name.toLowerCase().includes(normalizedQuery);
      });
    }
  }


  public chooseCountry(country: ICountry) {
    this.selectionChange.emit(country);
  }
}
