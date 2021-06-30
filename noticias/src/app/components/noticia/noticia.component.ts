import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../interfaces/interfaces';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ActionSheetController, Platform, ToastController} from '@ionic/angular';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {DataLocalService} from '../../services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input()
  noticia: Article;

  @Input()
  i: number;

  @Input()
  enFavoritos;

  constructor(private iap: InAppBrowser,
              private actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing,
              private datalocalService: DataLocalService,
              private toastCtrl: ToastController,
              private platform: Platform) {
  }

  ngOnInit() {
  }

  abrirNoticia() {
    console.log(this.noticia.url);
    const browser = this.iap.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {

    let guardarBorrarBtn;

    if (this.enFavoritos) {
      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.borrarNoticia(this.noticia);
          console.log('Favorite borrar');
        }
      };
    } else {
      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.guardarNoticia(this.noticia);
          console.log('Favorite clicked');
        }
      };
    }

    const actionSheet = await this.actionSheetController.create({

      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            this.compartirNoticia();
            console.log('Share clicked');
          }
        },
        guardarBorrarBtn,
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  compartirNoticia() {

    // SI existe cordova

    if (this.platform.is('capacitor')) {
      this.socialSharing.share(
        this.noticia.title,
        this.noticia.source.name,
        '',
        this.noticia.url);
    } else {
      if (navigator.share) {
        navigator.share({
          title: this.noticia.title,
          text: this.noticia.description,
          url: this.noticia.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('NO se pudo compartir');
      }
    }

  }

}
