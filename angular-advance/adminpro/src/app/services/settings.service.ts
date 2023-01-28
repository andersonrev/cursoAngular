import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  public links!: NodeListOf<Element>;


  constructor() {
    let url  = localStorage.getItem('theme') || `./assets/css/colors/red-dark.css`;
    //@ts-ignore
    this.linkTheme.setAttribute('href',url);
  }
  
  changeTheme(theme: string){
    
    const url = `./assets/css/colors/${theme}.css`;
    // @ts-ignore 
    this.linkTheme.setAttribute('href',url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme(this.links);

  }


  checkCurrentTheme(links: NodeListOf<Element>){
    this.links = links;

    this.links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      
      const currentTheme = this.linkTheme?.getAttribute('href');

      if( currentTheme === btnThemeUrl){
        elem.classList.add('working');
      }
    })
  }

}
