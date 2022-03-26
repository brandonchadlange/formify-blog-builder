export interface Post {
  title: string;
  summary: string;
  displayImageUrl: string;
}

export interface GetPostsResponse {
  posts: Post[];
}

export interface GetPostResponse {
  post: Post;
}

export interface BlogAPI {
  getPosts(): Promise<GetPostsResponse>;
  getPost(slug: string): Promise<GetPostResponse>;
}
