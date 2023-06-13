import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Post } from 'src/app/models/post.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
    newPost: Post = {
        title: '',
        body: '',
      };

      postId!: number;

    constructor(private postSrv: PostServiceService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];
        this.postSrv.getPostById(this.postId).subscribe((post: Post) => {
          this.newPost = post;
        });
    }

    updatePosts() {
        this.postSrv.updatePost(this.newPost, this.postId).subscribe(
          (response) => {
            console.log('Post aggiornato:', response);
            alert('Post modificato')
            this.router.navigate(['/'])
          },
          (error) => {
            console.error('Errore durante l\'aggiornamento del post:', error);
          }
        );
      }
}
