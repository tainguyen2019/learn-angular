import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:3001';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.baseURL}/product-list`).toPromise();
  }

  addToCart(item) {
    console.log(item);
    return this.http
      .post(
        `${this.baseURL}/cart`,
        JSON.stringify(item),
        this.httpOptions
      )
      .toPromise();
  }
}
