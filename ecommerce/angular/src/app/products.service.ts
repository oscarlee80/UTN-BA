import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  save (data) {
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   
    return this.http.post("http://localhost:3000/products/add", {
      name: data.name,
      sku: data.sku,
      price: data.price,
      categoria: data.categoria,
      destacado: data.destacado

    }, {headers: headersClient});
  } 
    
}
