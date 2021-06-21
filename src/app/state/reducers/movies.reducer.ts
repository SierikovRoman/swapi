import { MoviesActionTypes } from '../actions/movies.actions';
import { Movie } from 'src/app/models/Movie.interface';

export const moviesFeatureKey = 'movies';

export interface State {
  movies: Array<Movie> | [];
  isLoaded: boolean;
}

export const initialState: State = {
  movies: [],
  isLoaded: false
};

export function moviesReducer(state = initialState, action: any): State {
  switch (action.type) {
    case MoviesActionTypes.LoadMoviesSuccess: {
      const updateState = {...state};
      updateState.movies = action.payload;
      updateState.isLoaded = true;
      return updateState;
    }
    case MoviesActionTypes.LoadMoviesFailure: {
      if (action.payload)  {
        console.log('fall', action.payload);
      }
      return {...state};
    }
    default:
      return {...state};
  }
}

