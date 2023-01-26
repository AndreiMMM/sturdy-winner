// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// posts feature
import * as POSTS_API from '../../features/posts/public-api.posts';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    POSTS_API.PostsListPage,
    POSTS_API.PostsListPage,
    POSTS_API.PostsListSectionComponent,
    POSTS_API.PostViewPage,
  ],
  imports: [CommonModule, PostsRoutingModule, HttpClientModule],
  providers: [POSTS_API.PostsFacadeService],
})
export class PostsModule {}
