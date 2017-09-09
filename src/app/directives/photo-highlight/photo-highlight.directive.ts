import { Directive, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[photoHighLight]',
  outputs:['onPhotoHighLight'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class PhotoHighlightDirective {

  onPhotoHighLight: EventEmitter<boolean> = new EventEmitter();

  private _defaultColor = 'blue';
  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }


  onMouseEnter() { 
      this.onPhotoHighLight.emit(true);
  }
  onMouseLeave() { 
    this.onPhotoHighLight.emit(false);
  }
}