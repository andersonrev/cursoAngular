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

  usuario: Usuario = {};

  constructor(private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController) {

    this.storage.create();

  }

  login(email: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      const user = { email, password };
      this.http.post(`${URL}/user/login`, user).subscribe(
        res => {
          console.log(res);

          if (res['ok']) {
            this.guardarToken(res['token']);
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

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);

  }


  registro(usuario: Usuario): Promise<boolean> {
    return new Promise(resolve => {
      this.http.post(`${URL}/user/create`, usuario).subscribe(
        res => {
          if (res['ok']) {
            this.guardarToken(res['token']);
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

}
