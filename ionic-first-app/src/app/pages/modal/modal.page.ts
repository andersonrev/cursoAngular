import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalInfoPage} from '../modal-info/modal-info.page';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    async mostrarModal() {
        const modal = await this.modalCtrl.create(
            {
                component: ModalInfoPage,
                componentProps: {
                    nombre: 'Anderson',
                    pais: 'Ecuador',
                }
            }
        );
        await modal.present();

        // para recibir los que manda el hijo
        const {data} = await modal.onDidDismiss();
        console.log('Los datos son')
        console.log(JSON.stringify(data));

        // diferencia entre ondisdismois y onwilldismis
        // con willdismiss los datos son enviados hasta antes de la animacion de cierre del modal
    }
}
