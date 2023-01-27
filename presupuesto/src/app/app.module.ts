import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent,
    CabeceroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IngresoService,
    EgresoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
