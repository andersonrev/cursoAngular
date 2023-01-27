import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarioComponent} from './calendario/calendario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calendario',
    pathMatch: 'full'
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullcaledarproRoutingModule {
}
