import { IngresoInterface } from './ingreso.interface';
export class IngresoService {
  ingresos : IngresoInterface[] = [
    {
      descripcion: "Sueldo",
      valor: 250
    },
    {
      descripcion: "Bono",
      valor: 250
    }

  ];

  eliminarIngreso(ingreso:IngresoInterface){
    const indice = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}
