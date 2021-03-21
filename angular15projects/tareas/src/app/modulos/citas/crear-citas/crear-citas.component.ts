import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(): void{
    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    if(this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === ''){
      this.formularioIncorrecto = true; 
    }else {
      console.log(cita);
      this.formularioIncorrecto = false;
    }

  }

}
