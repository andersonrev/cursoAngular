import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConvertidorComponent} from './components/convertidor/convertidor.component';
import {TareasComponent} from './components/tareas/tareas.component';

const routes: Routes = [
  {
    path: 'tareas',
    component: TareasComponent,
  },
  {
    path: 'convertidor',
    component: ConvertidorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
