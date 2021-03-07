import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
    selector: 'app-filtros',
    templateUrl: './filtros.component.html',
    styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

    @Input()
    totalHombres: number;

    @Input()
    totalMujeres: number;

    @Input()
    total: number;

    @Output()
    eventoFiltro = new EventEmitter<string>();

    radioButtonSeleccionado = 'Todos';

    constructor() {
        this.totalHombres = 0;
        this.totalMujeres = 0;
        this.total = 0;
    }

    ngOnInit(): void {
    }
    eventoCambioRadioButton(): void {
        this.eventoFiltro.emit(this.radioButtonSeleccionado);
    }

}
