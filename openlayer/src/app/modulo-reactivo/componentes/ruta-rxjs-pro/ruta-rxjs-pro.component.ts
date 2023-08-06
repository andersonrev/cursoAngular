import { Observable, combineLatest, forkJoin } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Persona, SharingService } from './../../../core/services/sharing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-rxjs-pro',
  templateUrl: './ruta-rxjs-pro.component.html',
  styleUrls: ['./ruta-rxjs-pro.component.scss']
})
export class RutaRxjsProComponent implements OnInit {

  person$: Observable<Persona[]>;
  constructor(private _sharingService: SharingService) {

    this.person$ = combineLatest([
      this._sharingService.sharingObservable,
      this._sharingService.sharingCombinableObservable
    ]).pipe(
      first(),// cualquiera de los observables dentro del arreglo si hacen un next despues de la primera vez ya no se vuelve a subscribir.
      switchMap((people) => {
        console.log(people);
        people.forEach(
          (person) => {
            this._sharingService.sharingDependantObservableData = person.name;
          }
        )
        return this._sharingService.sharingDependantObservable;
      })
    )
  }

  ngOnInit(): void {
  }

  emitirAPerson() {
    this._sharingService.sharingObservableData = {name:'Fabian', age: 40};
  }
  mostrarEstado(){

      console.log(this._sharingService.mostrarValorObservableDependant());
  }

}
