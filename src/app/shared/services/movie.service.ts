import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import * as $ from 'jquery';

/**
 * Movie service that keeps track of a list of movies
 */

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // private readonly movieItems: Movie[] = []; //here in the MovieService, we need to initialize the array

  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/movies`;

  constructor(private readonly http: HttpClient) {}

  /**
   * add a movie to the array in the backend
   */
  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  /**
   * Return all the movies
   */
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  public removeMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
    // $.ajax({
    //   url: `${this.apiUrl}/${id}`,
    //   type: 'DELETE',
    //   succcess: () => {
    //     alert('movie deleted');
    //   },
    //   error: () => {
    //     alert('Error');
    //   },
    // });
  }

  /**
   * Add a movie to the array
   */
  // public addMovie(movie: Movie): void {
  //   this.movieItems.push(movie);
  //   // alert(`Movie ${movie.title} added successfully!`);
  // }

  /**
   * Returns all the movies
   */

  // public getMovies(): Movie[] {
  //   return this.movieItems;
  // }
}
