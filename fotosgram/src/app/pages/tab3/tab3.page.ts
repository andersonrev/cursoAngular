import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/respuesa-posts.interface';
import { NgForm } from '@angular/forms';
import { UiserviceService } from '../../services/uiservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


  usuario: Usuario= {};

  constructor(private usuarioService: UsuarioService,
    private uiService: UiserviceService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
  }


  async actualizar(fActualizar: NgForm){
     if(fActualizar.invalid){
       return;
     }

     const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);

     if(actualizado){
       // toas con el mesnaejes de actualizado
       this.uiService.presentToast('Registro Actualizado');
     }else {
       // toas con sms de error
       this.uiService.presentToast('No se pudo actualizar');
     }
  }


  logout() {

  }

}
