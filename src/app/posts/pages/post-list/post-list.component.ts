import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Post } from '../../../models/post.model';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { PostService } from '../../../core/services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  imports: [AlertComponent, CommonModule, RouterModule],
  standalone: true,
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  @ViewChild(AlertComponent) alert!: AlertComponent;

  constructor(
    private postService: PostService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.loadPosts();
        this.alert.message = 'Se ha eliminado con éxito la publicación ' + id;
        this.alert.type = 'success';
        this.alert.openAlert();
      },
      error: (err) => {
        this.alert.message = 'Error al guardar la publicación';
        this.alert.type = 'error';
        this.alert.openAlert();
        console.error(err.error.message);
      },
    });
  }

  view(id: number) {
    this.router.navigate(['/post', id]);
  }

  edit(id: number) {
    this.router.navigate(['/post/edit', id]);
  }
}
