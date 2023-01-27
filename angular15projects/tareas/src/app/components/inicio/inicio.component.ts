import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    edad = 25;
    peso = 60;
    altura = 200;
    sexo = 'Masculino';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    cambiarAltura(evento: any): void {
        // console.log(evento.target.value);
        this.altura = evento.target.value;
    }

    masculino(): void {
        this.sexo = 'Masculino';
    }

    femenino(): void {
        this.sexo = 'Femenino';
    }

    calcularBMI(): void {
        const BMI = this.peso / Math.pow(this.altura / 100, 2);
        this.router.navigate(['/resultado', BMI.toFixed(1)]);
    }


}
