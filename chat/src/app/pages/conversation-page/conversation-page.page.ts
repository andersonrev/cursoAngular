import { Component, OnInit } from '@angular/core';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.page.html',
  styleUrls: ['./conversation-page.page.scss'],
})
export class ConversationPagePage implements OnInit, ViewWillEnter {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let chatSection = document.getElementById('chat');
    // chatSection.scrollTop = chatSection.scrollHeight:
  }

}
