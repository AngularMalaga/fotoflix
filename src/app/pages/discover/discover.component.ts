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

  public tabs = ['Explorar','Tendencias'];

  ngOnInit() {
    // Load Images structure from "server"
    this.images = this.imageService.imagenes();
  }

  //TODO tendremos uqe añadir los filtros para la imagenes en funcion de el tab seleccionado
  selectedTabChange(index){
    console.log("Índice de tab seleccionado: ", index);
  }

  
}
