import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../http.service";
import {Product} from "../Product";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  product:Product;
  description:string='NoN';

  constructor(
    private route: ActivatedRoute,
    private HttpService: HttpService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //let userId = params['_id'];//'5c72c445ac61c00a80224473'
      let productLink = params['link'];
      this.HttpService.getProductByLink(productLink).subscribe(
        product => {
          this.product = product;
          this.description = product.description;
          this.description = this.description.replace('<br>','\n');
        }
      );
    
    });
            
  }

}
