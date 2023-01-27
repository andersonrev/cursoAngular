import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Productos',
      icon: 'list',
      path: '/products'
    },
    {
      title: 'About',
      icon: 'information',
      path: '/about'
    },

  ];
  title = '';
  constructor(private menuCtrl: MenuController,
    private platform: Platform) { }

  ngOnInit() {
    const width = this.platform.width();
    this.toggleMenu(width);
  }
  setTitle(title: string) {
    this.title = title;
  }

  toggleMenu(width: number){
    if(width > 768){
      this.menuCtrl.enable(false, 'myMenu');
    }else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event:any){
    const newWidth = event.target.innerWidth;
    console.log(' on rize host - newWidrg', newWidth);
    this.toggleMenu(newWidth);
  }
}
