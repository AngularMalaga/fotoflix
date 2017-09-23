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
    this.images = this.imageService.imagenesExplorar();
  }

  selectedTabChange(index){
    switch(index){
      case 0:
        this.images = this.imageService.imagenesExplorar();
      break;
      case 1:
        this.images = this.imageService.imagenes();
      break;
      default:
        this.images = this.imageService.imagenes();
      break;
    }
  }

  
}
