import { DbzService } from './services/dbz.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AddPersonajeComponent } from './add-personaje/add-personaje.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AddPersonajeComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ // son los servicios que se van a espeficicar
    DbzService
  ]
})
export class DbzModule { }
