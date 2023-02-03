import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor(){

    let i = -1;

    const obs$ = new Observable(observer => {
      const intervalo = setInterval(()=> {

        i++;
        observer.next(i);

        if( i === 4 ){
          clearInterval(intervalo);
          observer.complete();
        }

        if( i == 2 ){
          observer.error('Errosito');
        }

      },1000);

    });

    obs$.subscribe({
      next: valor => console.log('Subs', valor),
      error: err => console.warn('Error', err),
      complete: () => console.info('Termino'),
    })
  }
}
