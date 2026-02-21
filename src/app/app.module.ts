import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardComponent } from './shared/Componants/PostSubject/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/Componants/PostSubject/post-dashboard/post-card/post-card.component';
import { PostFormComponent } from './shared/Componants/PostSubject/post-dashboard/post-form/post-form.component';
import { GetConfirmComponent } from './shared/Componants/PostSubject/get-confirm/get-confirm.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/Services/auth.interceptor';
import { NavbarComponent } from "./shared/Componants/navbar/navbar.component";
import { ProductDashboardComponent } from './shared/Componants/ProductSubject/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/Componants/ProductSubject/product-dashboard/product-form/product-form.component';
import { MovieDashboardComponent } from './shared/Componants/MovieSubject/movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './shared/Componants/MovieSubject/movie-dashboard/movie-card/movie-card.component';
import { MovieFormComponent } from './shared/Componants/MovieSubject/movie-dashboard/movie-form/movie-form.component';
import {ProductCardComponent } from "./shared/Componants/ProductSubject/product-dashboard/product-card/product-card.component";



@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostCardComponent,
    PostFormComponent,
    GetConfirmComponent,
    NavbarComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    MovieDashboardComponent,
    MovieCardComponent,
    MovieFormComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
