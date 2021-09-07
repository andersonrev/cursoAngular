import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiserviceService } from '../../services/uiservice.service';
import { Usuario } from '../../interfaces/respuesa-posts.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

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

  userLogueado = {
    email: 'anderson@gmail.com',
    password: '1234'
  }

  registerUser: Usuario = {
    email: 'test@gmail.com',
    password: '1234',
    nombre: 'test',
    avatar: 'av-1.png'
  }
  avatarSlide = {
    slidesPerView: 3.5
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiSerivice: UiserviceService) { }

  ngOnInit() {
    // this.slides.lockSwipeToNext(true);
  }

  ionViewWillEnter() {

    this.slides.lockSwipes(true);
  }
  async login(flogin: NgForm) {
    if (flogin.invalid) {
      return;
    }

    const valido = await this.usuarioService.login(this.userLogueado.email, this.userLogueado.password);
    if (valido) {
      this.navCtrl.navigateRoot('main/tabs/tab1', { animated: true });
    } else {
      this.uiSerivice.alertaInformativa('Usuario o contraseña no son correctos');
    }

  }

  async registro(fRegistro: NgForm) {
    if (fRegistro.invalid) {
      return;
    }
    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      this.navCtrl.navigateRoot('main/tabs/tab1', { animated: true });
    } else {
      this.uiSerivice.alertaInformativa('El correo ya existe');
    }

  }

  seleccionarAvatar(avatar) {

    // ojo este método tiene como parámetro por referencia el objeto del arreglo, es decir, que se peude cambiar directamente el objeto.
    this.avatars.forEach(avtr => avtr.seleccionado = false);
    avatar.seleccionado = true;

  }

  mostrarRegistro() {

    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);

  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);

  }

}
