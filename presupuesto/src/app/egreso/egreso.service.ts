import { EgresoInterface } from './egreso.interface';
export class EgresoService {
  egresos: EgresoInterface[] = [
    {
      descripcion: "Pago",
      valor: 100
    },
    {
      descripcion: "Arriendo",
      valor:300
    }
  ];
  
  eliminarEgreso(egreso: EgresoInterface){
    const indice = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }


}
