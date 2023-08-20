import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public isShowWaves: boolean = false;

  constructor(private location: Location) {}

  public ngOnInit(): void {
    this.isShowWaves = this.location.path().includes('auth');
  }
}
