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
    this.noticiasServices.getTopHeadLines().subscribe((resp) => {
      console.log('noticias', resp)
      //this.noticias = resp.articles;
      this.noticias.push(...resp.articles);
    });

  }

}
