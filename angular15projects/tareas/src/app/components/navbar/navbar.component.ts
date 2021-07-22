import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemsNavbar: any[] = [{ ruta: 'tareas', item: 'Tareas' },
  { ruta: 'convertidor', item: 'Convertidor' },
  { ruta: 'calculator', item: 'Calculadora' },
  { ruta: 'lista', item: 'Listas' },
  { ruta: 'citas', item: 'Citas' },
  { ruta: 'gastos-modulo', item: 'Gastos' },
  { ruta: 'clima', item: 'Clima' }]
  constructor() { }

  ngOnInit(): void {
  }

}
