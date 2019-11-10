import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: ['canvas { border-style: solid }']
})
export class ContactComponent implements OnInit {
    
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;  
  
  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  
  animate(): void {}

}
