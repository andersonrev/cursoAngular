import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

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

  constructor(private iap:InAppBrowser) { }

  ngOnInit() {}

  abrirNoticia(){
    console.log(this.noticia.url);
    const browser = this.iap.create(this.noticia.url,'_system');
  }

}
