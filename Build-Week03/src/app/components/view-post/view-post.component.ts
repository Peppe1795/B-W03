import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { PostServiceService } from 'src/app/service/post-service.service';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
    post!: Post;

  constructor(private postSrv: PostServiceService, private route: ActivatedRoute) {
    this.post = {
      title: '',
      body: ''
    };
   }
   ngOnInit(): void {
    const postId = this.route.snapshot.params['id'];
    this.postSrv.getPostById(postId).subscribe((post: Post) => {
      this.post = post;
    });
  }

}
