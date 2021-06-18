import { Injectable } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { of } from 'rxjs';
import { MoviesActionTypes, LoadMoviesSuccess, LoadMoviesFailure } from '../actions/movies.actions';

import { Response } from '../../models/Response.interface';
import { Movie } from '../../models/Movie.interface';

@Injectable()
export class MoviesEffects {

  @Effect() getMovies$ = this.actions$
  .pipe(
    ofType(MoviesActionTypes.LoadMovies),
    exhaustMap(_ => this.api.getMovieList()
        .pipe(
          map((res: Response<Movie>) => {
            return new LoadMoviesSuccess(res.results);
          }),
          catchError(error => of(new LoadMoviesFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private api: StarWarsService) {}

}
