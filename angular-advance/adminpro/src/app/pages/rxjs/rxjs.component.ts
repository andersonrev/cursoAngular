import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {


  subscripciones!: Subscription;

  constructor(){


    // this.returnObservable()
    //   .pipe(retry(2))
    //   .subscribe({
    //   next: valor => console.log('Subs', valor),
    //   error: err => console.warn('Error', err),
    //   complete: () => console.info('Termino'),
    // })


    this.subscripciones = this.returnInterval().subscribe(console.log);
  }

  ngOnDestroy(): void {

    this.subscripciones.unsubscribe();
  }

  returnInterval(): Observable<number>{
    return interval( 100 )
      .pipe(
        // take( 10 ),
        map( valor => valor + 1 ),
        filter( valor => valor%2 === 0 ),
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
