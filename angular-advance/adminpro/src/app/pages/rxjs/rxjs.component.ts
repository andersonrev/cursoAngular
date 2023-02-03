import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

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
          i = 0;
          observer.error('Errosito');
        }

      },1000);

    });

    obs$
      .pipe(retry(2))
      .subscribe({
      next: valor => console.log('Subs', valor),
      error: err => console.warn('Error', err),
      complete: () => console.info('Termino'),
    })
  }
}
