import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'createPost',
        component: CreatePostComponent,
    },
    {
        path: 'editPost/:id',
        component: EditPostComponent,
    },
    {
        path: 'viewPost/:id',
        component: ViewPostComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CreatePostComponent,
        EditPostComponent,
        ViewPostComponent,
        NavBarComponent,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
