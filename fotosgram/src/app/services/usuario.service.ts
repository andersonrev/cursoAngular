import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/respuesa-posts.interface';
import { NavController } from '@ionic/angular';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  private usuario: Usuario = {};

  constructor(private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController) {

    this.storage.create();

  }

  login(email: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      const user = { email, password };
      this.http.post(`${URL}/user/login`, user).subscribe(
       async res => {
          console.log(res);

          if (res['ok']) {
            await this.guardarToken(res['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        }
      )
    });


  }

  getUsuario() {

    if (!this.usuario._id) {
      this.validaToken();
    }

    return { ...this.usuario }; // tener una referencias de otro objeto y no del usuario del servicio.. 
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);

    await this.validaToken();

  }


  registro(usuario: Usuario): Promise<boolean> {
    return new Promise(resolve => {
      this.http.post(`${URL}/user/create`, usuario).subscribe(
        async res => {
          if (res['ok']) {
            await this.guardarToken(res['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        }
      )
    });

  }

  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }


    return new Promise<boolean>(resolve => {
      const headers = new HttpHeaders(
        {
          'x-token': this.token
        }
      );

      this.http.get(`${URL}/user/`, { headers }).subscribe(
        res => {
          if (res['ok']) {
            this.usuario = res['usuario'];
            resolve(true);
          } else {

            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        }
      )
    });
  }

  actualizarUsuario(usuario: Usuario): Promise<boolean>{
    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise<boolean>(resolve => {
      this.http.post(`${URL}/user/update`, usuario, { headers })
      .subscribe(
        resp => {
          if(resp['ok']){
            this.guardarToken(resp['token']);
            resolve(true);
          }else {
            resolve(false);
          }
        }
      )
    });

  }

  logout(){
    this.token = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true});
  }

}
