import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgChartsModule} from 'ng2-charts';

import {IncrementarComponent} from './incrementar/incrementar.component';
import { DonaComponent } from './dona/dona.component';


@NgModule({
  declarations: [
    IncrementarComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementarComponent,
    DonaComponent
  ]
})
export class ComponentsModule {
}
