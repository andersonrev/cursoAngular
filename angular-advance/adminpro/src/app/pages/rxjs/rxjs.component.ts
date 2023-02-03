import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor(){


    // this.returnObservable()
    //   .pipe(retry(2))
    //   .subscribe({
    //   next: valor => console.log('Subs', valor),
    //   error: err => console.warn('Error', err),
    //   complete: () => console.info('Termino'),
    // })


    this.returnInterval().subscribe(console.log);
  }

  returnInterval(): Observable<number>{
    return interval( 1000 )
      .pipe(
        take( 4 ),
        map( valor => valor + 1 )
      );
  }

  returnObservable(): Observable<number>{
    let i = -1;

    return new Observable<number>(observer => {
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

      }, 1000 );

    });
  }
}
