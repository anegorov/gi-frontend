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
  txt:Array<string>;
  description:string='NoN';
  items: MenuItem[];

  constructor(
    private route: ActivatedRoute,
    private HttpService: HttpService
    ) { }

  ngOnInit() {
    function pText(param:string) {
      const param1 = param.split('|').join('\n');
      return {value:param1};
    }

    this.items = [
      {label:'Главная', url: 'http://localhost:4200'}
  ];
      
    this.route.params.subscribe((params: Params) => {
      //let userId = params['_id'];//'5c72c445ac61c00a80224473'
      let productLink = params['link'];
      this.HttpService.getProductByLink(productLink).subscribe(
        product => {
          this.product = product;
          this.description = product.description;
          this.description = this.description.split('|').join('\n');
          this.txt = product.text.map(v => v = pText(v));
          this.items.push({label:this.product.sname, url: 'https://guidein.ru/'+this.product.link})
        }
      );
    
    });
            
  }

}
