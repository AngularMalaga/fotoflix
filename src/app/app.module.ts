import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PruebaServicioImagenesComponent } from './prueba-servicio-imagenes/prueba-servicio-imagenes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PFImageService } from "app/services/images/imagenes.service";
import { PhotoPreviewComponent } from "app/components/pf-preview/photo-preview.component";
import { PhotoHighlightDirective } from "app/directives/photo-highlight/photo-highlight.directive";
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';

const appRoutes: Routes = [
  { path: 'test', component: PruebaServicioImagenesComponent },
  { path: 'photo/:id', component: PhotoDetailComponent },
  { path: '**', component: DiscoverComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    PruebaServicioImagenesComponent,
    NavbarComponent,
    FooterComponent,
    DiscoverComponent,
    PhotoPreviewComponent,
    PhotoHighlightDirective,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PFImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
