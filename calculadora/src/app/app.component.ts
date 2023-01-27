import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadora';
  resultadoPadre: number;

  enviarSuma(suma: number){
    this.resultadoPadre = suma;
  }


}
