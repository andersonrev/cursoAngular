import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FullcaledarproRoutingModule} from './fullcaledarpro-routing.module';
import {CalendarioComponent} from './calendario/calendario.component';
import {FullCalendarModule} from 'primeng/fullcalendar';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    FullcaledarproRoutingModule,
    FullCalendarModule
  ]
})
export class FullcaledarproModule {
}
