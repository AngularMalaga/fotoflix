import { Component, OnInit } from '@angular/core';
import { PFImageService } from 'app/services/images/imagenes.service';
import { PFImage } from 'app/models/pf-image';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  public images: PFImage[] = [];
  constructor( public imageService: PFImageService) { }

  // Tarea 8. Añade otro tab y filtra la lista de imagenes en funcion del tab seleccionado
  //Pueces apoyarte en la funcion getImagenesForOtherTabs() del servicio imageService
  public tabs = ['Explorar'];

  ngOnInit() {
    // Obtiene las imagenes
    this.images = this.imageService.getImagenes();
  }

  //Detecta los cambio en el tabs
  selectedTabChange(index){
    
  }

  
}
