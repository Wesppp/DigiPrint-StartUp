import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';


@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements OnInit {
  public s: string = '';

  constructor(private faio: FingerprintAIO) {
  }

  public ngOnInit(): void {
  }

  public print(): void {
    this.faio.isAvailable().then(
      ()=>{
        this.faio.show({}).then((val)=>{
          alert(JSON.stringify(val))
        })
      },
      (err)=>{
        alert('fingerPrint not available')
      }
    )
  }
}
