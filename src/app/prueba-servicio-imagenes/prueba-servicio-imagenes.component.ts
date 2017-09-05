import { Component, OnInit } from '@angular/core';
import { ImagenesService } from "app/imagenes.service";
import { Imagen } from "app/imagen";

@Component({
  selector: 'app-prueba-servicio-imagenes',
  templateUrl: './prueba-servicio-imagenes.component.html',
  styleUrls: ['./prueba-servicio-imagenes.component.css']
})
export class PruebaServicioImagenesComponent implements OnInit {

  imagenes: Imagen[];
  imagenesDeNaturaleza: Imagen[];
  imagenesDeComida: Imagen[];
  imagen7: Imagen;
  etiquetas: string[];

  constructor(private imagenesService: ImagenesService) { }

  ngOnInit() {
    this.imagenes = this.imagenesService.imagenes();
    this.imagenesDeNaturaleza = this.imagenesService.imagenesPorEtiqueta("naturaleza");
    this.imagenesDeComida = this.imagenesService.imagenesPorEtiqueta("comida");
    this.imagen7 = this.imagenesService.imagenPorId(7);
    this.etiquetas = this.imagenesService.etiquetas();
  }

}
