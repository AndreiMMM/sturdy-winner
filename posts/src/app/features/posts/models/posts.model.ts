export class PostsModel {
  id?: number;
  title?: string;

  constructor() {}
}

export class CommentsModel {
  id?: string;
  body?: string;
  postId?: string;

  constructor() {}
}
