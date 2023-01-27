import {Component, OnInit} from '@angular/core';
import {EmpleadoInterface} from '../../../../interfaces/empleado-interface';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

    radioButtonSelecciondo = 'Todos';

    listaEmpleados: EmpleadoInterface[] = [
        {nombre: 'Anderson', apellido: 'Rivaldo', edad: 12, sexo: 'Masculino'},
        {nombre: 'Vero', apellido: 'Guevara', edad: 12, sexo: 'Femenino'},
        {nombre: 'Nestr', apellido: 'Guerra', edad: 12, sexo: 'Masculino'},
        {nombre: 'Sonia', apellido: 'Jurez', edad: 12, sexo: 'Femenino'}];

    constructor() {
    }

    ngOnInit(): void {
    }

    getNumerosHombres(): number {
        return this.listaEmpleados
            .filter((empleado: EmpleadoInterface) => empleado.sexo === 'Masculino').length;
    }

    getNumerosMujeres(): number {
        return this.listaEmpleados
            .filter((empleado: EmpleadoInterface) => empleado.sexo === 'Femenino').length;
    }

    obtenerEvento(event: string): void {
        this.radioButtonSelecciondo = event;
    }


}
