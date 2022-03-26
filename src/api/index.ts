import axios from "axios";

import type {
  BlogAPI,
  GetPostResponse,
  GetPostsResponse,
} from "../../types/api";

const ENDPOINT_URL =
  "https://formify-platform-tqk2g.ondigitalocean.app/api/blog/";
// const ENDPOINT_URL = "http://localhost:3000/api/blog/";

const endpoints = {
  getPostsURL() {
    return ENDPOINT_URL + "post";
  },
  getPostURL(slug: string) {
    return ENDPOINT_URL + "post/" + slug;
  },
};

export class Blog implements BlogAPI {
  constructor() {}

  async getPosts(): Promise<GetPostsResponse> {
    return getFetch<GetPostsResponse>(endpoints.getPostsURL());
  }

  async getPost(slug: string): Promise<GetPostResponse> {
    return getFetch<GetPostResponse>(endpoints.getPostURL(slug));
  }
}

async function getFetch<T>(url: string): Promise<T> {
  const fetchResponse = await axios.get<T>(url);
  return fetchResponse.data;
}
