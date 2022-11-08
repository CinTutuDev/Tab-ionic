/* se realiza para coger los datos al escanear y poder importarlo en el servicio(data-local.service.ts)
donde luego son importados para usar en el ts de las pages scanner ye history para mostrar datos */
export class Registro {
 public format: string;
 public text: string;
 public type: string;
 public icon: string;
 public created: Date;

 constructor(format: string, text: string) {
  this.format = format;
  this.text = text;
  this.created = new Date();
  this.determinarTipo();
 }

 private determinarTipo() {
  const inicioTexto = this.text.substring(0, 4);/*geo:40.73151796986687,-74.06087294062502 ó http....*/
  console.log('TIPO', inicioTexto);

  switch (inicioTexto) {
   case 'http':
    this.type = 'http';
    this.icon = 'globe';
    break;

   case 'geo:':
    this.type = 'geo';
    this.icon = 'pin';
    break;

   default:
    this.type = 'No reconocido';
    this.icon = 'create';
  }
 }
}
