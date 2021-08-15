import { ApplicationRef, Component, OnInit } from '@angular/core';
import { PushService } from '../services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mensajes: OSNotificationPayload[] = [];
  constructor(public pushService: PushService,
    private applicationRef: ApplicationRef) { }


  ngOnInit() {
    this.pushService.pushListener.subscribe(noti => {
      this.mensajes.unshift(noti);
      this.applicationRef.tick(); // hacer que angular realice la deteccion de cambios nuevamente
    })
  }

  async ionViewWillEnter() {
    this.mensajes = await this.pushService.getMensajes();
  }

  async borrarMensajes() {
    await this.pushService.borrarMensajes();
    this.mensajes = [];
  }
}
