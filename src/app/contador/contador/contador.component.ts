import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `

  <h1>{{title}}</h1>

  <h3>La base es: <strong> {{base}} </strong> </h3>

  <button (click)="acumular(base)">+ {{base}}</button>

  <span>{{number}}</span>

  <button (click)="acumular(-base)">- {{base}}</button>

  `
})
export class ContadorComponent {

  public title  = 'Contador App';
  public number = 0;
  public base   = 5;


  addCount(): void {
    this.number += 1;
  }

  decreaseCount(): void {
    this.number -= 1;
  }

  acumular(valor: number): void {
    this.number += valor;
  }

}
