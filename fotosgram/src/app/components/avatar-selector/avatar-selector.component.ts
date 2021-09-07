import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {


  @Input()
  avatarActual: string = 'av-1.png';

  @Output()
  avatarSel =new EventEmitter<string>();

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];



  avatarSlide = {
    slidesPerView: 3.5
  }

  

  constructor() { }

  ngOnInit() {
    this.avatars.forEach( avatar => avatar.seleccionado = false);

    for ( const avatar of this.avatars){
      if( avatar.img === this.avatarActual){
        avatar.seleccionado = true;
        break;
      }
    }

   
   }

  seleccionarAvatar(avatar) {

    // ojo este método tiene como parámetro por referencia el objeto del arreglo, es decir, que se peude cambiar directamente el objeto.
    this.avatars.forEach(avtr => avtr.seleccionado = false);
    avatar.seleccionado = true;

    this.avatarSel.emit(avatar.img);

  }

}
