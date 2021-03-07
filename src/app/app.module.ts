import { DbzModule } from './dbz/dbz.module';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
// import { ContadorComponent } from './contador/contador/contador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
