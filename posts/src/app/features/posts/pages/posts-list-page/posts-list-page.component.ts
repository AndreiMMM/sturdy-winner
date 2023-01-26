// core
import { ChangeDetectionStrategy, Component } from '@angular/core';
// services
import { PostsFacadeService } from '../../services/posts-facade.service';

@Component({
  selector: 'posts-list-page',
  templateUrl: './posts-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListPage {
  constructor(public readonly postsFacadeService: PostsFacadeService) {}
}
