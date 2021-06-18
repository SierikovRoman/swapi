import * as SpaceshipsActions from './spaceships.action';

describe('Spaceships', () => {
  it('should create an instance', () => {
    expect(new SpaceshipsActions.LoadSpaceships()).toBeTruthy();
  });
});