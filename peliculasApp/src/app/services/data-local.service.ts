import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor(private storage: Storage,
    private toastCtrl: ToastController) {
    this.storage.create();
  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 1000
    });
    toast.present();
  }
  guardarPelicula(pelicula: PeliculaDetalle) {
    let existe = false;
    let mensaje = '';

    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';
    }else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregadda a favoritos';
    }
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
  }
}
