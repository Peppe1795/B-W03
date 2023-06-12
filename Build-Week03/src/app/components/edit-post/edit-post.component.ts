import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Post } from 'src/app/models/post.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
    newPost!: Post;
    postsArray: Post[] = [];
    postId!: number
    constructor(private postSrv: PostServiceService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.newPost = {
            title: '',
            body: '',
        };
    }

    updatePosts(post: Post) {
        this.postSrv.updatePost(post).subscribe(
          (response) => {
            console.log('Post aggiornato:', response);
          },
          (error) => {
            console.error('Errore durante l\'aggiornamento del post:', error);
          }
        );
      }
}
