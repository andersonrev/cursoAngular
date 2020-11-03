import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { PersonasService } from './personas.service';
import { DataService } from './data.service';
import { LoginService } from './login/login.service';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LogginService } from './loggin.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  PersonasService,
  LogginService,
  DataService,
  LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
