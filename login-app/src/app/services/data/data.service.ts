import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http:HttpClient) {}

  getAccountList(){
    return this.http.get(`${this.baseURL}/accounts`).toPromise();
  }

  getAccount(id){
    return this.http.get(`${this.baseURL}/accounts/${id}`).toPromise();
  }
}
