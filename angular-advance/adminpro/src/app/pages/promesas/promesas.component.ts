import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
    this.getUsuarios().then( console.log );
  }
  getUsuarios(){
   return new Promise(resolve => {
    fetch('https://regres.in/api/users')
    .then( resp => resp.json())
    .then( body => resolve(body.data))
    });
  }
}
