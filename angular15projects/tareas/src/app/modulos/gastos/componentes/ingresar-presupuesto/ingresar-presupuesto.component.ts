import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../servicios/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css'],
})
export class IngresarPresupuestoComponent implements OnInit, OnDestroy {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(
    private presupuestoService: PresupuestoService,
    private router: Router
  ) {
    this.cantidadIncorrecta = false;
    this.cantidad = 0;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('mori ingreso presupuesto');
  }

  agregar() {
    this.cantidad > 0
      ? this.redirigirPantallaGastos()
      : (this.cantidadIncorrecta = true);
  }

  redirigirPantallaGastos() {
    this.cantidadIncorrecta = false;
    this.presupuestoService.presupuesto = this.cantidad;
    this.presupuestoService.restante = this.cantidad;
    this.router.navigate(['gastos-modulo/gasto']);
  }
}
