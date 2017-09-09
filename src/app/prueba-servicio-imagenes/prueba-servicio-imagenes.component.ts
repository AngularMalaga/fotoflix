import { Component, OnInit } from '@angular/core';
import { PFImageService } from "app/services/images/imagenes.service";
import { PFImage } from "app/models/pf-image";

@Component({
  selector: 'app-prueba-servicio-imagenes',
  templateUrl: './prueba-servicio-imagenes.component.html',
  styleUrls: ['./prueba-servicio-imagenes.component.css']
})
export class PruebaServicioImagenesComponent implements OnInit {

  imagenes: PFImage[];
  imagenesDeNaturaleza: PFImage[];
  imagenesDeComida: PFImage[];
  imagen7: PFImage;
  etiquetas: string[];

  constructor(private imagenesService: PFImageService) { }

  ngOnInit() {
    this.imagenes = this.imagenesService.imagenes();
    this.imagenesDeNaturaleza = this.imagenesService.imagenesPorEtiqueta("naturaleza");
    this.imagenesDeComida = this.imagenesService.imagenesPorEtiqueta("comida");
    this.imagen7 = this.imagenesService.imagenPorId(7);
    this.etiquetas = this.imagenesService.etiquetas();
  }

  enviaComentario(usuario: string, texto) {
    this.imagenesService.insertaComentario(7, usuario, texto);
  }

}
