import {Injectable, EventEmitter} from '@angular/core';
import {CitaInterface} from '../interfaces/cita.interface';

@Injectable({
    providedIn: 'root'
})
export class CitasServiceService {

    citaNueva$ = new EventEmitter<CitaInterface>();
    constructor() {
    }
}
