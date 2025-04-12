import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const sharedImports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FooterComponent,
  NavbarComponent,
  AlertComponent,
];
