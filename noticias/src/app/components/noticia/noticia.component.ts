import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../interfaces/interfaces';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ActionSheetController} from '@ionic/angular';
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

  constructor(private iap: InAppBrowser,
              private actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing,
              private datalocalService: DataLocalService) {
  }

  ngOnInit() {
  }

  abrirNoticia() {
    console.log(this.noticia.url);
    const browser = this.iap.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {

    const actionSheet = await this.actionSheetController.create({

      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass:'action-dark',
          handler: () => {
            this.socialSharing.share(this.noticia.title,this.noticia.source.name, '', this.noticia.url);
            console.log('Share clicked');
          }
        }, {
          text: 'Favorito',
          icon: 'heart',
          cssClass:'action-dark',
          handler: () => {
            this.datalocalService.guardarNoticia(this.noticia);
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          cssClass:'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

}
