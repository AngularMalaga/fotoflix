import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagenesService } from "app/imagenes.service";
import { PruebaServicioImagenesComponent } from './prueba-servicio-imagenes/prueba-servicio-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaServicioImagenesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
