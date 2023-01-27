import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CitasServiceService} from '../servicios-front/citas-service.service';
import {CitaInterface} from '../interfaces/cita.interface';

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

    constructor(private citasService: CitasServiceService) {
    }

    ngOnInit(): void {
    }

    agregarCita(): void {
        const cita: CitaInterface = {
            nombre: this.nombre,
            fecha: this.fecha,
            hora: this.hora,
            sintomas: this.sintomas
        };
        if (this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === '') {
            this.formularioIncorrecto = true;
        } else {
            this.resetCampos();
            console.log(cita);
            this.citasService.citaNueva$.emit(cita);
            this.formularioIncorrecto = false;
        }

    }

    resetCampos(): void {
        this.nombre = '';
        this.fecha = '';
        this.hora = '';
        this.sintomas = '';
    }

}
