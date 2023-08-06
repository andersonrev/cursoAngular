import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Persona {
  name: string;
  age?: number;
}
@Injectable()
export class SharingService {

  private arrayOfPeople: Persona[] = [
    { name: 'Fabian', age: 29 },
    { name: 'Roberto', age: 21 }
  ];
  private sharingObservablePrivate$: BehaviorSubject<Persona> = new BehaviorSubject<Persona>({ name: 'Fabian' });

  private sharingCombinableObservablePrivate$: BehaviorSubject<Persona> = new BehaviorSubject<Persona>({ name: 'Roberto' });

  private sharingDependantObservablePrivate$: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);

  constructor() { }

  get sharingObservable() {
    return this.sharingObservablePrivate$.asObservable();
  }

  get sharingCombinableObservable() {
    return this.sharingCombinableObservablePrivate$.asObservable();
  }

  get sharingDependantObservable() {
    return this.sharingDependantObservablePrivate$.asObservable();
  }

  set sharingObservableData(data: Persona) {
    this.sharingObservablePrivate$.next(data);
  }

  set sharingDependantObservableData(name: string) {
    const foundPerson = this.arrayOfPeople.find(
      (person) => person.name === name
    );
    if (foundPerson) this.sharingDependantObservablePrivate$.next([
      ...this.sharingDependantObservablePrivate$.getValue(),
      foundPerson
    ])
    else console.log('person not found')
  }

  mostrarValorObservableDependant(){
    return this.sharingDependantObservablePrivate$.getValue();
  }

}
