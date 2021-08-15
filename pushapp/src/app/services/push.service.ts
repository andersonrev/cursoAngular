import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
@Injectable({
  providedIn: 'root'
})
export class PushService {



  mensajes: OSNotificationPayload[] = [
    // {
    //   title: 'Titulo de l push',
    //   body: ' Este es el body de la push',
    //   date: new Date()
    // }

  ];

  pushListener = new EventEmitter<OSNotificationPayload>();




  constructor(private oneSignal: OneSignal,
    private storage: Storage) {

    this.storage.create();
    this.cargarMensajes();

  }

  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  configuracionInicial() {
    this.oneSignal.startInit('f5795f09-c1d1-4706-b1c0-599a8d97c800', '146837911831');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log('Notificacion recibida', noti);
      this.notificacionRecibida(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
       await this.notificacionRecibida(noti.notification);
    });

    this.oneSignal.endInit();
  }

  async notificacionRecibida(noti: OSNotification) {

    await this.cargarMensajes();



    const payload = noti.payload;

    const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);

    if (existePush) {
      return;
    }

    this.mensajes.unshift(payload);
    this.pushListener.emit(payload);
    await this.guardarMensajes();

  }

  guardarMensajes() {
    this.storage.set('mensajes', this.mensajes);
  }

  async cargarMensajes() {
    this.mensajes = await this.storage.get('mensajes') || [];

    return this.mensajes;
  }


}
