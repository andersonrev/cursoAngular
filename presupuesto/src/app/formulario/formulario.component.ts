import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  listaSelect:string[] = ['+','-']
  operacion: string ='';
  descripcion : string;
  valor: number;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.operacion)
  }

  tipoOperacion(evento){

  }


}
