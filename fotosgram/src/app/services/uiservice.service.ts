import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiserviceService {

  constructor(private alertControler: AlertController,
    private toastController:ToastController) { }

  async alertaInformativa(message: string){
    const alert = await this.alertControler.create({
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message,
      position: 'top',
      duration: 1500
    });
    toast.present();
    
  }
}
