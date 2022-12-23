import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArpanProductsService {
  public url = 'https://arpancart-73abb-default-rtdb.firebaseio.com/products.json';
  private header = new HttpHeaders({'Content-Type': 'AngularApplication/json'})
  constructor(private http:HttpClient) { }

  saveProduct(products:any[]){
    // return this.http.post(this.url,products)
    return this.http.put(this.url,products, {headers:this.header})
  }

  fetchProduct(){
    return this.http.get(this.url)
  }
}
