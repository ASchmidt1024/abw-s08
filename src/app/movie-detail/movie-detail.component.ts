import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  @Input() movie: Movie;

  @Output() chooseRequest = new EventEmitter<Movie>();

  choose() {
    this.movie.active = !this.movie.active;
    this.chooseRequest.emit(this.movie);
  }

}
