// core
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
// rxjs
import { Subscription } from "rxjs";
// services
import { PostsFacadeService } from '../../services/posts-facade.service';

@Component({
  selector: 'post-view-page',
  templateUrl: './post-view-page.component.html',
  styleUrls: ['./post-view-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostViewPage implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  constructor(
    public readonly postsFacadeService: PostsFacadeService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.subscriptions.push(
    this.postsFacadeService.getPosts$.subscribe((posts) => {
      const selectedPost = posts.value?.find((post) => post.id === Number(this.activatedRoute?.snapshot?.paramMap?.get('id')));
      if (selectedPost) {
        this.postsFacadeService.selectedPost$.next(selectedPost);
      }
      if (!selectedPost && !posts.isLoading) {
        this.router.navigate(['/posts/']);
      }
    })
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub && sub.unsubscribe();
    })
  }
}
