import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getPosts() {
    return this.httpClient.get(`${this.apiURL}/posts`).toPromise();
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
}
