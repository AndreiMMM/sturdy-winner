import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as POSTS_API from '../../features/posts/public-api.posts';

const routes: Routes = [
  {
    path: '',
    component: POSTS_API.PostsListPage,
  },
  {
    path: ':id',
    component: POSTS_API.PostViewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
