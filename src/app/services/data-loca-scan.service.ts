import { Injectable } from '@angular/core';
import { Registro } from "../modelo/scanModel";
@Injectable({
  providedIn: 'root'
})
export class DataLocaScanService {
  abrirReg(registro: any) {
    throw new Error('Method not implemented.');
  }
  guardados: Registro[] = [];

  constructor() { }

  guardarReg(format: string, text: string){
    const nuevoReg = new Registro(format, text);
    this.guardados.unshift(nuevoReg);
    console.log(this.guardados);
  }
}
