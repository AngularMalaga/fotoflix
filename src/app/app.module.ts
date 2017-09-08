import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImagenesService } from 'app/imagenes.service';
import { PruebaServicioImagenesComponent } from './prueba-servicio-imagenes/prueba-servicio-imagenes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiscoverComponent } from './pages/discover/discover.component';

const appRoutes: Routes = [
  { path: 'test', component: PruebaServicioImagenesComponent },
  { path: 'item/:id', component: DiscoverComponent },
  { path: '**', component: DiscoverComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    PruebaServicioImagenesComponent,
    NavbarComponent,
    FooterComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
