import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { PersonasService } from './personas.service';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LogginService } from './loggin.service';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  PersonasService,
  LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
