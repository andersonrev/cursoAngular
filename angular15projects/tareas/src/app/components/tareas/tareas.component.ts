import {Component, OnInit} from '@angular/core';
import {TareaInterface} from '../../interfaces/tarea-interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: TareaInterface[] = [];

  tarea = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  agregarTarea(): void {
    // Crear un objetto ateas
    const tareaAAgregar: TareaInterface = {
      nombre: this.tarea,
      estado: false
    };
    // Agregar el objeto tarea la array
    this.listaTareas.push(tareaAAgregar);
    // reset form
    this.tarea = '';
  }

  eliminarTarea(indice: number): void {
    this.listaTareas.splice(indice, 1);
  }

  actualizarTarea(indice: number, tarea: TareaInterface): void {
    this.listaTareas[indice].estado = !tarea.estado;
  }

}
