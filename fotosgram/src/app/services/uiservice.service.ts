import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiserviceService {

  constructor(private alertControler: AlertController) { }

  async alertaInformativa(message: string){
    const alert = await this.alertControler.create({
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
