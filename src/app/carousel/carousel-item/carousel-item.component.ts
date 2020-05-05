import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit {
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
