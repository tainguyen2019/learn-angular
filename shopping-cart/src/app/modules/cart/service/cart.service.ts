import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseURL = 'http://localhost:3001';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get(`${this.baseURL}/cart`).toPromise();
  }

  deleteItem(item_id) {
    return this.http
      .delete(`${this.baseURL}/cart/${item_id}`, this.httpOptions)
      .toPromise();
  }
}
