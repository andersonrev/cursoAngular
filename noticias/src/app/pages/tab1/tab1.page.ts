import { Component, OnInit } from '@angular/core';
import { NoticasService } from '../../services/noticas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private noticiasServices: NoticasService) { }
   ngOnInit(){
     this.noticiasServices.getTopHeadLines().subscribe(val => console.log('noticias',val));
   }

}
