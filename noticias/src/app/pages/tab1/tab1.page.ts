import { Component, OnInit } from '@angular/core';
import { NoticasService } from '../../services/noticas.service';
import { Article, RespuestoTopHeadlines } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor(private noticiasServices: NoticasService) { }
  ngOnInit() {

    this.cargarNoticias();
  }
  loadData(event) {

    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {

    this.noticiasServices.getTopHeadLines()
      .subscribe(resp => {
        console.log('noticias', resp);

        if( resp.articles.length === 0){
          console.log(resp.articles.length);
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.noticias.push(...resp?.articles);

        if (event) {
          event.target.complete();
        }
      });

  }

}
