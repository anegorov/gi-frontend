import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url:string = `https://guidein.herokuapp.com/api/render/products`
  
  getProducts(): Observable<any>{
         
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*'
          })
        };
    
    return this.http.get(this.url, httpOptions); 
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
}
