import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styleUrls: ['./incrementar.component.css']
})
export class IncrementarComponent implements OnInit {


  @Input()
  valor: number = 50;

  @Input()
  btnClase: string = 'btn-primary'

  @Output()
  valorNuevo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.btnClase = `btn ${this.btnClase}`
  }


  cambiarValor(adicion: number) {
    if (this.valor >= 100 && adicion >= 0) {
      this.valor = 100;
      this.valorNuevo.emit(this.valor);
      return;
    } else if (this.valor <= 0 && adicion < 0) {
      this.valor = 0;
      this.valorNuevo.emit(this.valor);
      return;
    }
    this.valor = this.valor + adicion;
    this.valorNuevo.emit(this.valor);
  }

  cambioInput(valorInput: number) {
    if (valorInput >= 100) {
      this.valor = 100;

    } else if (valorInput <= 0) {
      this.valor = 0;
    } else {
      this.valor = valorInput;
    }
    this.valorNuevo.emit(this.valor);

  }
}
