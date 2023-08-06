import { RouterModule, Routes } from '@angular/router';
import { ModuloReactivoModule } from './modulo-reactivo.module';
import { NgModule } from '@angular/core';
import { RutaRxjsProComponent } from './componentes/ruta-rxjs-pro/ruta-rxjs-pro.component';

const routes: Routes = [
    {
        path: '',
        component: RutaRxjsProComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class ModuloReactivoRoutingModule { }
