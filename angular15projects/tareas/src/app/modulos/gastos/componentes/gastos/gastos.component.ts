import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../servicios/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  constructor(private _presupuestoService: PresupuestoService) {
    console.log(this._presupuestoService.presupuesto);
    console.log(this._presupuestoService.restante);
  }

  ngOnInit(): void {
    console.log('vivi gastos component');
  }
}
