import { Action } from '@ngrx/store';
import { Movie } from '../../models/Movie.interface';

export enum MoviesActionTypes {
  LoadMovies = '[Movies] Load Cards',
  LoadMoviesSuccess = '[Movies] Load Movies Success',
  LoadMoviesFailure = '[Movies] Load Movies Failure'
}

export class LoadMovies implements Action {
  readonly type = MoviesActionTypes.LoadMovies;
}
export class LoadMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.LoadMoviesSuccess;
  constructor(public payload: Array<Movie>) { }
}

export class LoadMoviesFailure implements Action {
  readonly type = MoviesActionTypes.LoadMoviesFailure;
  constructor(public payload: { error: any }) { }
}

export type CardsActions = LoadMovies | LoadMoviesSuccess | LoadMoviesFailure;

