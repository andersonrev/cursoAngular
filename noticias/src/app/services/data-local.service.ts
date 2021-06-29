import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Article} from '../interfaces/interfaces';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article[] = [];

  constructor(private storage: Storage,
              private toastController: ToastController) {
    this.storage.create();
    this.cargarFavoritos();
  }

  guardarNoticia(noticia: Article) {
    const exite = this.noticias.find(noti => noti.title === noticia.title);
    if (!exite) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
    }

    this.presentToast('Agregado a Favoritos');
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');
    console.log('async awaitpro', favoritos);
    if ( favoritos) {
      this.noticias = favoritos;
    }
  }

  borrarNoticia( noticia: Article){
   this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
   this.storage.set('favoritos', this.noticias);
   this.presentToast('Borrado de Favoritos');
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }


}
