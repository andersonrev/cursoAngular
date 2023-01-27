import { Component, OnInit } from '@angular/core';
import { IngresoService } from './ingreso.service';
import { IngresoInterface } from './ingreso.interface';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  ingresos: IngresoInterface[] = [];
  constructor(private ingresoService: IngresoService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }
  
  eliminar(ingreso: IngresoInterface){
    this.ingresoService.eliminarIngreso(ingreso);
  }
}
