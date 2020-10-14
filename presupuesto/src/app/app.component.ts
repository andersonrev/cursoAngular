import { Component } from '@angular/core';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';
import { EgresoInterface } from './egreso/egreso.interface';
import { IngresoInterface } from './ingreso/ingreso.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'presupuesto';
  constructor(private ingresoService: IngresoService,
	      private egresoService: EgresoService) { }

  obtenerEgresoTotal(){
    return this.egresoService.egresos.reduce((acc,el: EgresoInterface)=>{
      acc+=el.valor;
      return acc;
    },0);
  }

  obtenerIngresoTotal(){
    return this.ingresoService.ingresos.reduce((acc,el:IngresoInterface )=>{
      acc+=el.valor;
      return acc;
    },0);
  }


}
