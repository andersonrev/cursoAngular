import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  tipo:string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;
  listaSelect:string[] = ['+','-']
  operacion: string ='';

  constructor(private ingresoServicio: IngresoService,
  private egresoServicio: EgresoService) { }

  ngOnInit(): void {
    //console.log(this.operacion)
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;

  }

  agregarValor(){

  let objeto = {
	descripcion: this.descripcionInput,
	valor: this.valorInput
      }
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(objeto);
    }else {
      this.egresoServicio.egresos.push(objeto);
    }

  }

}
