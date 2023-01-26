// core
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// rxjs
import {
  map,
  merge,
  Observable,
  shareReplay,
  of,
  mergeMap,
  startWith,
  catchError,
  combineLatestWith,
  BehaviorSubject
} from 'rxjs';
// services
import { PostsApiService } from './posts-api.service';
import { CommentsApiService } from './comments-api.service';
// models
import { CommentsModel, PostsModel } from '../models/posts.model';
import { HttpRequestState } from '../../../modules/core/models/http.models';

@Injectable({
  providedIn: 'root',
})
export class PostsFacadeService {
  public getPosts$: Observable<HttpRequestState<PostsModel[]>> = merge(
    // default request
    of(true),
  ).pipe(
    mergeMap(() => {
       return this.postsApiService.getPosts().pipe(
          map((value) => ({isLoading: false, value})),
          catchError((error) => of({isLoading: false, error})),
          startWith({isLoading: true})
        )
      }
    ),
    // caching multicasting
    shareReplay(1)
  );

  public selectedPost$: BehaviorSubject<PostsModel> = new BehaviorSubject<PostsModel>(new PostsModel());

  public getComments$: Observable<HttpRequestState<CommentsModel[]>> = merge(
    // default request
    of(true),
  ).pipe(
    combineLatestWith(this.selectedPost$),
    mergeMap(([_, selectedPost]) => {
        return this.commentsApiService.getComments().pipe(
          map((comments) => ({isLoading: false, value: comments.filter(c => c.postId === selectedPost.id)})),
          catchError((error) => of({isLoading: false, error})),
          startWith({isLoading: true})
        )
      }
    ),
    // caching multicasting
    shareReplay(1)
  );

  public posts$: Observable<HttpRequestState<PostsModel[]>> = this.getPosts$;

  public comments$: Observable<HttpRequestState<CommentsModel[]>>  = this.getComments$.pipe();

  constructor(
    private readonly postsApiService: PostsApiService,
    private readonly commentsApiService: CommentsApiService,
    private readonly router: Router
  ) {}

  public navigateToViewPost($event: number): void {
    this.router.navigate([`/posts/${$event}`]);
  }
}
