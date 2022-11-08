import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DataLocaScanService } from 'src/app/services/data-loca-scan.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  swiperOpts = {
    sllowSliderPrev: false,
    allowSliderNext: false,
  };
  dataLocalRegService: any;

  ionViewWillEnter() {
    console.log('muestra');
  }
  ionViewDidEnter() {
    console.log('termina');
    this.scan();
  }
  ionViewWillLeave() {
    console.log('a punto');
  }
  ionViewDidLeave() {
    console.log('termina');
  }
  constructor(private barcodeScanner: BarcodeScanner, private dataLocalScan: DataLocaScanService) {}
  scan() {
    this.barcodeScanner
      .scan()
      .then((dataLocalScan) => {
        console.log('Barcode data', dataLocalScan);

         if (!dataLocalScan.cancelled) {
          this.dataLocalScan.guardarReg(
            dataLocalScan.format,
            dataLocalScan.text
          );
        }
      })
      .catch((err) => {
        console.log('Error', err);
        
        this.dataLocalScan.guardarReg('QRCode', 'https://fernando-herrera.com') ; 
        
        /* simulador de http para ver si funciona en pc */
        /* geo:40.73151796986687,-74.06087294062502 */
        /* this.dataLocalRegService.guardoReg('QRCode', 'https://gist.github.com/Klerith/6a12c5721108b9d064d1c231e2a3b58d') ; */
        /*     this.dataLocalRegService.guardoReg(
          'QRCode',
          'geo:40.73151796986687,-74.06087294062502 '
        ); */
      });
  }
}
