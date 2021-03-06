import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
  // no se importa porque no usa directivas de angular
})
export class ContadorModule {

}
