import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { CrearCitasComponent } from './crear-citas/crear-citas.component';
import {FormsModule} from '@angular/forms';
import { CitasPageComponent } from './citas-page/citas-page.component';



@NgModule({
  declarations: [ListarCitasComponent, CrearCitasComponent, CitasPageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CitasModule { }
