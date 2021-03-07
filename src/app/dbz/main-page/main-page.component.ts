import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // first option
  // public personajes: Personaje[];

  // second option
  // get personajes(): Personaje[] {
  //   return this.dbzService.getPersonajes();
  // }

  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder : 200
  };

  constructor( )
  { }

  ngOnInit(): void {
  }

  // agregarPersonaje(personaje: Personaje): void {
  //   this.dbzService.agregarPersonaje(personaje);
  // }

}
