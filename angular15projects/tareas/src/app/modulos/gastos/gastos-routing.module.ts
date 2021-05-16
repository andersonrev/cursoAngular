import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GastosComponent} from './componentes/gastos/gastos.component';
import {IngresarPresupuestoComponent} from './componentes/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingreso-presupuesto',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-presupuesto',
    component: IngresarPresupuestoComponent
  }
  ,
  {
    path: 'gasto',
    component: GastosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosRoutingModule {
}
