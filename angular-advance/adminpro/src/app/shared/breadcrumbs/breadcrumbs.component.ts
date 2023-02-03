import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {


  public titulo = new BehaviorSubject<string>('');

  public titulo2!: string;

  public tituloSubs$!: Subscription;

  constructor(private router: Router) {

    this.tituloSubs$ = this.getArgumentosRuta2().subscribe(({titulo})=> {
      this.titulo2 = titulo;
      document.title = `AdminPro - ${ titulo }`
    })

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();

  }


  // getArgumentosRuta(){

  //   this.router.events.pipe(
  //     filter((event: any) => event instanceof ActivationEnd),
  //     filter((event: ActivationEnd) => event.snapshot.firstChild === null),
  //     map((event: ActivationEnd) => event.snapshot.data.titulo),
  //   ).subscribe(valor => this.titulo.next(valor))
  // }


  getArgumentosRuta2(){

    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),
    );
  }

}
