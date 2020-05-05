import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/models/movie';
import { Url } from 'url';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  public movieTitle: string;
  public movieYear: number;
  public movieRating: number;
  public movieUrl: Url;

  constructor(private readonly movieService: MovieService) {}

  public addMovie(): void {
    const newMovie: Movie = {
      rating: this.movieRating,
      title: this.movieTitle,
      year: this.movieYear,
      url: this.movieUrl,
    };

    this.movieService.addMovie(newMovie).subscribe((movie) => {
      // alert(`We add a movie with id ${movie.id}!`);
      alert(`We add a movie! ${movie}`);
    });
  }

  ngOnInit(): void {}
}
