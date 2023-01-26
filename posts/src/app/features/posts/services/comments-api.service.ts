// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs';
import { CommentsModel } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsApiService {
  private readonly env = 'https://my-json-server.typicode.com/typicode/demo/';

  constructor(private readonly http: HttpClient) {}

  public getComments(): Observable<CommentsModel[]> {
    return this.http.get<CommentsModel[]>(`${this.env}comments`);
  }
}
