import { Component, OnInit, Input } from '@angular/core';
import { PFImage } from 'app/models/pf-image';
import { Router } from '@angular/router';
import { PhotoDetailComponent } from 'app/pages/photo-detail/photo-detail.component';

@Component({
  selector: 'pf-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  @Input('photo') image: PFImage;

  public isHovered: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Change div class to hide info or show it when hovered
  onHighLightChange(isHovered) {
    this.isHovered = isHovered;
  }

}
