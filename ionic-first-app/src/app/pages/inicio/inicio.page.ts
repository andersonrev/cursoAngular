import {Component, OnInit} from '@angular/core';

interface Componente {
    icon: string;
    name: string;
    redirecTo: string;
}

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    components: Componente[] = [
        {
            icon: 'american-football-outline',
            name: 'Action Sheet',
            redirecTo: '/action-sheet'
        },
        {
            icon: 'logo-apple-appstore',
            name: 'Alert',
            redirecTo: '/alert'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
