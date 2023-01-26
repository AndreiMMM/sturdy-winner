// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs';
// models
import { PostsModel } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  private readonly env = 'https://my-json-server.typicode.com/typicode/demo/';

  constructor(private readonly http: HttpClient) {}

  public getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(`${this.env}posts`);
  }
}
