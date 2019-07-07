import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCTS } from './mock.products';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private products: Product[] = Array.from(PRODUCTS);

  constructor(private http: HttpClient) { }

  url:string = `https://guidein.herokuapp.com/api/render/products`
  
  // getProducts(): Observable<any>{
         
  //   const httpOptions = {
  //         headers: new HttpHeaders({
  //           'Content-Type':  'application/json',
  //           'Access-Control-Allow-Origin': '*'
  //         })
  //       };
    
  //   return this.http.get(this.url, httpOptions); 
  // }

  getProducts(){
    return Promise.resolve(PRODUCTS);
  }

  getProductById(id:string): Observable<any>{
    
    const url = 'https://guidein.herokuapp.com/api/render/product';

    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*'
          })
        };
    
    return this.http.get(url+'/'+id, httpOptions); 
  }

  // getProductByLink(link:string): Observable<any>{
    
  //   const url = 'https://guidein.herokuapp.com/api/render/product/link';

  //   const httpOptions = {
  //         headers: new HttpHeaders({
  //           'Content-Type':  'application/json',
  //           'Access-Control-Allow-Origin': '*'
  //         })
  //       };
    
  //   return this.http.get(url+'/'+link, httpOptions); 
  // }

  getProductByLink(link:string){
    return this.products.find(x => x.link==link);    
  }
}
