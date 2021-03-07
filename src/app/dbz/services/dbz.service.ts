import { Personaje } from './../interface/dbz.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder : 15000
    },
    {
      nombre: 'Vegeta',
      poder : 8500
    }
  ];

  constructor() {
    console.log('Servicio Inicializado');
  }

  // First Option
  // getPersonajes(): Personaje[] {
  //   return this._personajes;
  // }

  // Second option
  get personajes(): Personaje[] {
    return [...this._personajes]; // javascript best practices :D
  }

  agregarPersonaje(personaje: Personaje): void {
    console.log('Servicio add personaje');
    this._personajes.push(personaje);
  }
}
