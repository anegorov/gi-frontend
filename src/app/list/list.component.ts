import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import { Product } from '../Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  products: Product[];

  constructor(private HttpService: HttpService) { }

  ngOnInit() {
    this.HttpService.getProducts()
      .then(product => this.products = product);
  }

}
