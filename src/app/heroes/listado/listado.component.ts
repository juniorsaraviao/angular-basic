import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deleteHeroe?: string;

  borrarHeroe(): void{
    // this.heroes.splice(this.heroes.indexOf('Hulk'), 1);
    this.deleteHeroe = this.heroes.shift();
  }
}
