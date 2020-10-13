import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasService } from './personas.service';
import { FormularioComponent } from './formulario/formulario.component';
import { LogginService } from './loggin.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  PersonasService,
  LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
