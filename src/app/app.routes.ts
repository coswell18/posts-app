import { Routes } from '@angular/router';
import { PostListComponent } from './posts/pages/post-list/post-list.component';
import { PostDetailComponent } from './posts/pages/post-detail/post-detail.component';
import { PostFormComponent } from './posts/pages/post-form/post-form.component';

export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/new', component: PostFormComponent },
  { path: 'post/edit/:id', component: PostFormComponent },
  { path: 'post/:id', component: PostDetailComponent },
];
