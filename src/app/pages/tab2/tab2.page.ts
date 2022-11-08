import { Component, OnInit } from '@angular/core';
import { DataLocaScanService } from '../../services/data-loca-scan.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

/* publicooo */
/* tiene que ser publica para poder llamarlo desde el html */
constructor(public dataLocalScan: DataLocaScanService) { }

enviarCorreo(){
  console.log('Enviado correo ...');
}

abrirReg(reg){
  console.log('Registro ',reg);
}

}
