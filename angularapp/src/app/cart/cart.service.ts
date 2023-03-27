import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl : string;
  userId:any;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:5000/cart/'; 
  }

  setid(data:any){
    this.userId = data;
    this.apiUrl = 'http://localhost:5000/cart/'+this.userId;
    console.log(this.apiUrl);
  }

  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.apiUrl);
  }

  delete(id:String):Observable<String>{
    this.apiUrl = 'http://localhost:5000/cart/delete';
    console.log(this.apiUrl);
    return this.http.post<String>(this.apiUrl,id);
  }

  placeOrder(cart:String):Observable<String>{
    this.apiUrl = 'http://localhost:5000/saveOrder';
    return this.http.post<String>(this.apiUrl,cart);
  }
}
