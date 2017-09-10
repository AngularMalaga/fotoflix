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

  ngOnInit() {

    // Load Images structure from "server"
    this.images = this.imageService.imagenes();
  }
}
