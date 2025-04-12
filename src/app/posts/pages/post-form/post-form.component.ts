import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { PostService } from '../../../core/services/post.service';
import { sharedImports } from '../../../shared/shared-imports';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  standalone: true,
  imports: [AlertComponent, ...sharedImports, RouterModule],
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
  editing = false;
  postId!: number;
  errorMessage = '';
  status = false;
  @ViewChild(AlertComponent) alert!: AlertComponent;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      user_id: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', Validators.required],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editing = true;
      this.postId = Number(idParam);
      this.postService
        .getPost(this.postId)
        .subscribe((post) => this.postForm.patchValue(post));
    }
  }

  save() {
    if (this.postForm.invalid) return;
    const data = this.postForm.value;
    const request = this.editing
      ? this.postService.updatePost(this.postId, data)
      : this.postService.createPost(data);

    request.subscribe({
      next: (data) => {
        this.alert.message =
          'Publicación guardada con éxito, el id es es: ' + data.id;
        this.alert.type = 'success';
        this.alert.openAlert();
        this.status = true;
        setTimeout(() => {
          // this.router.navigate(['/']);
        }, 2000);
      },
      error: (err) => {
        // console.error('Error al guardar el post:', err);
        if(err.status === 401){
          this.alert.message = "No tiene autorización para realizar esta acción, configura el token";
        }else{
          const msg = err.error[0].message;
          this.alert.message =
            msg == 'must exist'
              ? 'El usuario no existe, porfavor verifica tus datos'
              : 'Error al guardar el post. Por favor verifica los datos.';
        }
        this.alert.type = 'error';
        this.alert.openAlert();
      },
    });
  }
}
