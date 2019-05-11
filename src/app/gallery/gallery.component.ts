import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  @Input() images:[string];

  constructor() { }

  ngOnInit() {
    function addGalleryObject(imgLink:string) {
      return {
        small:imgLink,
        medium:imgLink,
        big:imgLink
      };
    }

    this.galleryOptions = [
      {
          width: '100%',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.images.forEach(v => this.galleryImages.push(addGalleryObject(v)));

//   this.galleryImages = [
//     {
//         small: 'assets/catalog/t-rocket-horse/t-rocket-horse-finish-big.jpg',
//         medium: 'assets/catalog/t-rocket-horse/t-rocket-horse-finish-big.jpg',
//         big: 'assets/catalog/t-rocket-horse/t-rocket-horse-finish-big.jpg'
//     },
//     {
//         small: 'assets/catalog/t-rocket-horse/t-rocket-horse-no-sit-big.jpg',
//         medium: 'assets/catalog/t-rocket-horse/t-rocket-horse-no-sit-big.jpg',
//         big: 'assets/catalog/t-rocket-horse/t-rocket-horse-no-sit-big.jpg'
//     },
//     {
//         small: 'assets/catalog/t-rocket-horse/t-rocket-horse-rope-big.jpg',
//         medium: 'assets/catalog/t-rocket-horse/t-rocket-horse-rope-big.jpg',
//         big: 'assets/catalog/t-rocket-horse/t-rocket-horse-rope-big.jpg'
//     }
// ];

  }

}
