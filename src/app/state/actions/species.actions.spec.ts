import * as SpeciesActions from './species.actions';

describe('Species', () => {
  it('should create an instance', () => {
    expect(new SpeciesActions.LoadSpecies()).toBeTruthy();
  });
});