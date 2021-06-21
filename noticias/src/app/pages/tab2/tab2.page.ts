import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticasService } from 'src/app/services/noticas.service';
import { Article, RespuestoTopHeadlines } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];
  segment = "";

  constructor(private noticiasServices: NoticasService) {
  }

  ngOnInit() {
    this.segment = this.categorias[0];
    this.cargarNoticias(this.segment);
  }

  cambioCategoria(event: any) {
    this.noticias = [];
    console.log(event.detail.value);
    this.segment = event.detail.value;
    this.cargarNoticias(this.segment);


  }

  cargarNoticias(categoria: string) {
    this.noticiasServices.getTopHeadLinesCategorias(categoria)
      .subscribe(resp => {
        this.noticias.push(...resp.articles);
      });

  }

}
