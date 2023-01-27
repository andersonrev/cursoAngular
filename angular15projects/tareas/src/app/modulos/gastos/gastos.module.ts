import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './componentes/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './componentes/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastosComponent } from './componentes/gastos/listar-gastos/listar-gastos.component';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from './servicios/presupuesto.service';

@NgModule({
  declarations: [
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastosComponent,
  ],
  imports: [CommonModule, GastosRoutingModule, FormsModule],
  providers: [PresupuestoService],
})
export class GastosModule {}
