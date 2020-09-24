import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { stringify } from 'querystring';
=======
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

<<<<<<< HEAD
  getPosts(){
    return this.httpClient.get(`${this.apiURL}/posts`).toPromise();
=======
  getPosts(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/posts`);
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
  }

  deletePost(id) {
    return this.httpClient.delete(
      `${this.apiURL}/posts/${id}`,
      this.httpOptions
    );
  }

  getPost(id): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/posts/${id}`);
  }

  updatePost(id, post): Observable<any> {
    return this.httpClient.put(
      `${this.apiURL}/posts/${id}`,
      JSON.stringify(post),
      this.httpOptions
    );
  }
<<<<<<< HEAD

  createPost(post): Observable<any> {
    return this.httpClient.post(
      `${this.apiURL}/posts`,
      JSON.stringify(post),
      this.httpOptions
    );
  }
=======
>>>>>>> cc0fc3fbf4ab418bed52b592faa904c738f363d5
}
