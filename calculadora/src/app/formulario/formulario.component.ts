import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output()suma= new  EventEmitter<number>();

  operador1: number;
  operador2: number;
  
  constructor() { }


  ngOnInit(): void {
  }

  sumar(){
    let sumaOperadores = this.operador1 + this.operador2;
    this.suma.emit(sumaOperadores);
  }

}
