import { Component, OnInit } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'gi-front';

  products: any[];
  // products = [
  //   {name:'name1', description:'description1'},
  //   {name:'name2', description:'description2'},
  //   {name:'name3', description:'description3'},
  //   {name:'name4', description:'description4'},
  //   {name:'name5', description:'description5'},
  //   {name:'name6', description:'description6'}
  // ];

  
  constructor(private HttpService: HttpService) {}

  ngOnInit() {
    this.HttpService.getProducts().subscribe(product => {this.products = product});
  }
}
