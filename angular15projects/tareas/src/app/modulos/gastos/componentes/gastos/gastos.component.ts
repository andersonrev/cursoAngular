import {Component, OnInit} from '@angular/core';
import {PresupuestoService} from '../../servicios/presupuesto.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  constructor(private _presupuestoService: PresupuestoService,
              private router: Router) {

    console.log('presupuesto', this._presupuestoService.presupuesto);
    console.log('restante', this._presupuestoService.restante);
  }

  ngOnInit(): void {
    if (this._presupuestoService.presupuesto === 0) {
      this.router.navigate(['gastos-modulo/ingreso-presupuesto']);
    }
    console.log('vivi gastos component');
  }
}
