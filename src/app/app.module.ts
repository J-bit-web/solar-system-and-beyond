import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanetsComponent } from './planets/planets.component';
import { KiperBeltComponent } from './kiper-belt/kiper-belt.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetsComponent,
    KiperBeltComponent,
    PlanetInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
