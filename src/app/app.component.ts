import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'A great film title';
  imageSrc = 'https://image.tmdb.org/t/p/original/';
  movies: [];

  constructor(
    private movieService: MovieService
  ){
    this.movieService.getMovies()
    .subscribe(data => {
      const query: any = data;
      this.movies = query.results;
    });
  }

  chooseMovie(movie?: Movie) {
    const alertMessage = movie.active ? 'Activated' : 'Deactivated';
    alert(alertMessage + ` ${movie.title}.`);
  }

}
