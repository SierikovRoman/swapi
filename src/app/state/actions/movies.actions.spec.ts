import * as MoviesActions from './movies.actions';

describe('Movies', () => {
  it('should create an instance', () => {
    expect(new MoviesActions.LoadMovies()).toBeTruthy();
  });
});