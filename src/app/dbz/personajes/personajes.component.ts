import { DbzService } from './../services/dbz.service';
import { Personaje } from './../interface/dbz.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // @Input() public personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

}
