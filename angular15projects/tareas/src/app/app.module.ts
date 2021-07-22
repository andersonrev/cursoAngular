import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TareasComponent} from './components/tareas/tareas.component';
import {FormsModule} from '@angular/forms';
import {ConvertidorComponent} from './components/convertidor/convertidor.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {ResultadoComponent} from './components/resultado/resultado.component';
import {TablaModule} from './modulos/tabla/tabla.module';
import {CitasModule} from './modulos/citas/citas.module';
import {GastosComponent} from './modulos/gastos/componentes/gastos/gastos.component';
import {IngresarPresupuestoComponent} from './modulos/gastos/componentes/ingresar-presupuesto/ingresar-presupuesto.component';
import {IngresarGastoComponent} from './modulos/gastos/componentes/gastos/ingresar-gasto/ingresar-gasto.component';
import {ListarGastosComponent} from './modulos/gastos/componentes/gastos/listar-gastos/listar-gastos.component';
import {GastosModule} from './modulos/gastos/gastos.module';
import {FullcaledarproModule} from './modulos/fullcaledarpro/fullcaledarpro.module';
import { ClimaModule } from './modulos/clima/clima.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent,
    ConvertidorComponent,
    InicioComponent,
    ResultadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TablaModule,
    CitasModule,
    GastosModule,
    FullcaledarproModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
