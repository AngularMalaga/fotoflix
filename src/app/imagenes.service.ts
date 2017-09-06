import { Injectable } from '@angular/core';
import { IMAGENES } from './imagenes';
import { Imagen } from "app/imagen";

@Injectable()
export class ImagenesService {

  constructor() { }

  /**
   * Devuelve todas las imágenes.
   */
  imagenes(): Imagen[] {
    return IMAGENES;
  }

  /**
   * Devuelve una imagen a partir de su id.
   * 
   * @param id identificador de la imagen
   */
  imagenPorId(id: number): Imagen {
    let buscaImagen = IMAGENES.filter(i => i.id == id);
    
    if (buscaImagen.length === 0) { // No existe una imagen con el id indicado
      console.error('No se ha encontrado la imagen con id ' + id);
      return null;
    } else {
      return buscaImagen[0];
    }
  }

  /**
   * Devuelve las imágenes que incluyen una determinada etiqueta.
   * 
   * @param etiqueta etiqueta que se quiere buscar, por ej. naturaleza, comida, etc.
   */
  imagenesPorEtiqueta(etiqueta: string): Imagen[] {
    return IMAGENES.filter(i => i.etiquetas.includes(etiqueta));
  }

  /**
   * Devuelve todas las etiquetas encontradas en las imágenes.
   */
  etiquetas(): string[] {
    return IMAGENES
      .reduce((a, b) => a.concat(b.etiquetas), []) // junta todas las etiquetas
      .reduce((a, b) => a.includes(b) ? a : a.concat(b) , []); // elimina las repeticiones
  }

  /**
   * Inserta un comentario en una imagen sabiendo el id.
   * 
   * @param id identificador de la imagen
   * @param usuario nombre de usuario
   * @param comentario comentario que se quiere insertar
   */
  insertaComentario(id: number, usuario: string, comentario: string) {
    let buscaImagen = IMAGENES.filter(i => i.id == id);
    
    if (buscaImagen.length === 0) { // No existe una imagen con el id indicado
      console.error('No se ha encontrado la imagen con id ' + id);
    } else {
      // Se modifica la imagen auxiliar añadiendo el comentario
      (buscaImagen[0]['comentarios']).push({usuario, comentario});
      // Se cambia la imagen antigua por la nueva (con el nuevo comentario)
      IMAGENES.map(i => i.id == id ? buscaImagen : i);
    }
  }
}
