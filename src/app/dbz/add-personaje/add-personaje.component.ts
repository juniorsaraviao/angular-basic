import { DbzService } from './../services/dbz.service';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent implements OnInit {

  @Input() public personaje: Personaje = {
    nombre: '',
    poder : 0
  };

  @Output() public nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService ) { }

  ngOnInit(): void {
  }

  addCharacter(): void {

    if ( this.personaje.nombre.trim().length === 0 ){
      return;
    }

    // First Option
    // console.log(this.personaje);
    // this.nuevoPersonaje.emit(this.personaje);

    // Second option
    this.dbzService.agregarPersonaje(this.personaje);

    this.personaje = {nombre: '', poder: 0};
  }

}
