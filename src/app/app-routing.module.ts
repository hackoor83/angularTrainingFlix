import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { MoviesDbComponent } from './movies-db/movies-db.component';

const routes: Routes = [
  { path: 'movies', component: CarouselContainerComponent },
  { path: 'movies/list', component: MovieListComponent },
  { path: 'movies/add', component: MovieFormComponent },
  { path: 'movies/moviesdb', component: MoviesDbComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
