import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PFImageService } from 'app/services/images/imagenes.service';
import { PFImage } from 'app/models/pf-image';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  public photo: PFImage;
  constructor(  private router: Router,
                private routerParams: ActivatedRoute,
                private imageService: PFImageService) { }

  ngOnInit() {
    // Subscribe to Params ready event
    this.routerParams.params.subscribe((params) => {
      // console.log(params['id']);
      // Get photo from imageService given photo ID
      this.photo = this.imageService.imagenPorId(params['id']);
    });
  }

  onFollowButtonClick() {
    // TODO: Follow user
  }

  goBack() {
    this.router.navigate(['/discover']);
  }

}
