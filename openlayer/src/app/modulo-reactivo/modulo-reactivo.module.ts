import { SharingService } from './../core/services/sharing.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutaRxjsProComponent } from './componentes/ruta-rxjs-pro/ruta-rxjs-pro.component';
import { ModuloReactivoRoutingModule } from './modulo-reactivo-routing.module';



@NgModule({
  declarations: [
    RutaRxjsProComponent
  ],
  imports: [
    CommonModule,
    ModuloReactivoRoutingModule,
  ],
  providers: [
    SharingService,
  ]
})
export class ModuloReactivoModule { }
