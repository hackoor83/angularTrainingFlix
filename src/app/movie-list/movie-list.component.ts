import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  /**
   * Add a movies property to store the Movie(s) when we receive them from the backend.
   */
  public movies: Movie[] = [];
  public movieItem: Movie;

  constructor(private movieService: MovieService) {
    // this.movies = movieService.getMovies();
  }

  public removeMovie() {
    this.movieService.removeMovie(this.movieItem.id).subscribe((movie) => {
      alert('Movie removed!');
    });
  }

  ngOnInit(): void {
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }
}
