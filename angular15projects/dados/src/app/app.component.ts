import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dados';
  sourceDadoUno = "../assets/img/dice1.png";
  sourceDadoDos = "../assets/img/dice4.png"
  numeroDadoUno = 1;
  numeroDadoDos = 2;

  tirarDados(){
    this.numeroDadoUno = Math.round(Math.random()* 5 + 1);
    this.numeroDadoDos = Math.round(Math.random()* 5 + 1);

    this.sourceDadoUno = `/assets/img/dice${this.numeroDadoUno}.png`;
    this.sourceDadoDos = `/assets/img/dice${this.numeroDadoDos}.png`;
  }
}
