import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  /**
   * Add field array to store the movies list
   */
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const movie$ = this.movieService.getMovies();
    movie$.subscribe((movies) => {
      this.movies = movies;
    });
  }
}
