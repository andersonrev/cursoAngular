import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.component.html',
    styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
    bmi: number;
    resultado: string;
    interpretacion: string;

    constructor(private route: ActivatedRoute) {

        this.resultado = '';
        this.interpretacion = '';
        this.bmi = +route.snapshot.paramMap.get('valor')!;
        console.log(this.bmi);
    }

    ngOnInit(): void {
        this.getResultados();
    }

    getResultados(): void {
        if (this.bmi >= 25) {
            this.resultado = 'Exceso de peso.';
            this.interpretacion = 'Sobre peso corporal';
        } else if (this.bmi >= 18.5) {
            this.resultado = 'Normal';
            this.interpretacion = 'Tienes peso normal';
        } else {
            this.resultado = 'Bajo peso';
            this.interpretacion = 'Peso corporal bajo de lo normal';
        }
    }

}
