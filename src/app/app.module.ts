import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PruebaServicioImagenesComponent } from './prueba-servicio-imagenes/prueba-servicio-imagenes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PFImageService } from 'app/services/images/imagenes.service';
import { PhotoPreviewComponent } from 'app/components/pf-preview/photo-preview.component';
import { PhotoHighlightDirective } from 'app/directives/photo-highlight/photo-highlight.directive';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'photo/:id', component: PhotoDetailComponent },
  { path: '**', component: DiscoverComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PruebaServicioImagenesComponent,
    NavbarComponent,
    FooterComponent,
    DiscoverComponent,
    PhotoPreviewComponent,
    // Reto 1 -> Añadir componente de detalle de foto
    PhotoHighlightDirective,
    PhotoDetailComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PFImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
