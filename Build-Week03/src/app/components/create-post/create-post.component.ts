import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
    newPost!: Post;
    constructor(private postSrv: PostServiceService, private router: Router) {}

    ngOnInit(): void {
        this.newPost = {
            title: '',
            body: '',
        };
    }
    createPosts() {
        this.postSrv.createPosts(this.newPost).subscribe(
            (response) => {
                console.log('Post creato:', response);
                alert('Post creato');
                this.router.navigate(['/']);
            },
            (error) => {
                console.error('Errore durante la creazione del post:', error);
            }
        );
    }
}
