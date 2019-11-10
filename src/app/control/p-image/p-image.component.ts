import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'p-image',
  templateUrl: './p-image.component.html'
})
export class PImageComponent implements OnInit {

  @Input('isFull') size: string; 
  @Input('srcUrl') url: string; 
  key:boolean;

  constructor() { }

  ngOnInit() {
    this.key = (this.size == "true");
  }

  chengeSize(){
    this.key = !this.key;
  }

}
