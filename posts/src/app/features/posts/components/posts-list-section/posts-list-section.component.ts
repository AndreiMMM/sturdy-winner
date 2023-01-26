// core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
// models
import { PostsModel } from '../../models/posts.model';

@Component({
  selector: 'posts-list-section',
  templateUrl: './posts-list-section.component.html',
  styleUrls: ['./posts-list-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListSectionComponent {
  @Input() data: PostsModel[] = [];
  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();
}
