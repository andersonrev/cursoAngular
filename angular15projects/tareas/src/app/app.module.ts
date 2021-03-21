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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TareasComponent,
        ConvertidorComponent,
        InicioComponent,
        ResultadoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        TablaModule,
	CitasModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
