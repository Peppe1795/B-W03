import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Post } from '../models/post.interface';

@Injectable({
    providedIn: 'root',
})
export class PostServiceService {
    apiURL = 'https://6487134abeba6297278fdb00.mockapi.io/Post';
    constructor(private http: HttpClient) {}

    getPosts() {
        return this.http.get<Post[]>(this.apiURL);
    }

    createPosts(post: Post) {
        return this.http.post<Post>(this.apiURL, post);
    }

    deletePost(postId?: number) {
        const url = `${this.apiURL}/${postId}`;
        return this.http.delete(url);
      }

      updatePost(post: Post, postId?: number) {
        const url = `${this.apiURL}/${postId}`;
        return this.http.put<Post>(url, post);
      }
      getPostById(postId: number) {
        const url = `${this.apiURL}/${postId}`;
        return this.http.get<Post>(url);
      }
}
