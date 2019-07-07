import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../http.service";
import {Product} from "../Product";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  product:Product;
  txt:Array<any>;
  description:string='NoN';
  items: MenuItem[];

  constructor(
    private route: ActivatedRoute,
    private HttpService: HttpService
    ) { }

  ngOnInit() {
    function pText(param:string) {
      const param1 = param.split('|').join('\n');
      return param1;
    }

    this.items = [
      {label:'Главная', url: 'http://localhost:4200'}
  ];
      
    this.route.params.subscribe((params: Params) => {
      //let userId = params['_id'];//'5c72c445ac61c00a80224473'
      let productLink = params['link'];
      // this.HttpService.getProducts()
      // .then(product => this.products = product);
      this.product = this.HttpService.getProductByLink(productLink);
      
          this.description = this.product.description.split('|').join('\n');
          this.txt = this.product.text.map(v => v = pText(v));
          this.items.push({label:this.product.sname, url: 'https://guidein.ru/'+this.product.link});
    
    });
            
  }

}
