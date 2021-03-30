import {Component, OnInit} from '@angular/core';
import {CitasServiceService} from '../servicios-front/citas-service.service';
import {CitaInterface} from '../interfaces/cita.interface';

@Component({
    selector: 'app-listar-citas',
    templateUrl: './listar-citas.component.html',
    styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

    listadoCitas: CitaInterface[] = [];

    constructor(private readonly citasService: CitasServiceService) {
    }

    ngOnInit(): void {
        this.citasService.citaNueva$.subscribe(
            (data: CitaInterface) => this.listadoCitas.push(data)
        );
        console.log(this.listadoCitas);
    }

    eliminarCita(indice: number): void {
        this.listadoCitas.splice(indice, 1);
    }

}
