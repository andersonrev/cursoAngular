import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConvertidorComponent} from './components/convertidor/convertidor.component';
import {TareasComponent} from './components/tareas/tareas.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {ResultadoComponent} from './components/resultado/resultado.component';
import {ListaComponent} from './modulos/tabla/componentes/lista/lista.component';
import {CitasPageComponent} from './modulos/citas/citas-page/citas-page.component';
import { GastosComponent } from './modulos/gastos/componentes/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './modulos/gastos/componentes/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
    },
    {
        path: 'lista',
        component: ListaComponent,
    },
    {
        path: 'tareas',
        component: TareasComponent,
    },
    {
        path: 'convertidor',
        component: ConvertidorComponent,
    },
    {
        path: 'calculator',
        component: InicioComponent,
    },
    {
        path: 'resultado/:valor',
        component: ResultadoComponent,
    },
    {
        path: 'citas',
        component: CitasPageComponent,
    },
    {
        path: 'gastos-modulo',
        loadChildren: ()=> import('./modulos/gastos/gastos.module').then(m => m.GastosModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
