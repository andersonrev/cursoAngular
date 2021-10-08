import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldDefaultOptions} from '@angular/material/form-field'

const apariencia: MatFormFieldDefaultOptions = {
   appearance: 'outline'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot( ),
    FormlyBootstrapModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: MAT
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
