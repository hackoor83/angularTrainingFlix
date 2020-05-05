import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { MoviesDbComponent } from './movies-db/movies-db.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MovieFormComponent,
    MovieListComponent,
    NavBarComponent,
    CarouselComponent,
    CarouselContainerComponent,
    SelectedMovieComponent,
    CarouselItemComponent,
    MoviesDbComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
