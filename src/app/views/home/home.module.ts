import { HeaderComponent } from './../../shared/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MeusProdutosComponent } from './../meus-produtos/meus-produtos.component';
import { InicioComponent } from './../inicio/inicio.component';
import { HomeComponent } from './home.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'meus-produtos', component: MeusProdutosComponent },
    ] },
];

@NgModule({
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    InicioComponent,
    MeusProdutosComponent,
    HeaderComponent,
  ]
})
export class HomeModule { }
