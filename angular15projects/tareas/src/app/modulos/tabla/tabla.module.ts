import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListaComponent} from './componentes/lista/lista.component';
import {FiltrosComponent} from './componentes/filtros/filtros.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        ListaComponent,
        FiltrosComponent],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        ListaComponent,
        FiltrosComponent
    ]
})
export class TablaModule {
}
