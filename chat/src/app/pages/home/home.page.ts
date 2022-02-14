import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  activeTab = 'chat';
  constructor() { }

  ngOnInit() {
  }

  segmentChange(event: any) {
    console.log(event.target)
    this.activeTab = event.target.value;
  }
}

