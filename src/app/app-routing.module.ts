import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/Componants/PostSubject/post-dashboard/post-dashboard.component';
import { MovieDashboardComponent } from './shared/Componants/MovieSubject/movie-dashboard/movie-dashboard.component';
import { ProductDashboardComponent } from './shared/Componants/ProductSubject/product-dashboard/product-dashboard.component';

const routes: Routes = [


{
  path:'posts',
  component: PostDashboardComponent

},
{
  path: '',
  redirectTo: 'posts',
  pathMatch: 'full'
},
{
  path:'products',
  component: ProductDashboardComponent

},
{
  path:'movies',
  component: MovieDashboardComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
