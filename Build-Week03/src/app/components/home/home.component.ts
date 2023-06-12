import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    postsArray: Post[] = [];
    constructor(private postSrv: PostServiceService) {}

    ngOnInit(): void {
        this.postSrv.getPosts().subscribe((data: any) => {
            this.postsArray = data;
            console.log(data)
        });
    }

    deletePost(postId?: number) {
        if (postId) {
          this.postSrv.deletePost(postId).subscribe(
            (response) => {
              console.log('Post eliminato:', response);
            },
            (error) => {
              console.error('Errore durante l\'eliminazione del post:', error);
            }
          );
        }
      }

}
