import * as PeopleActions from './people.actions';

describe('People', () => {
  it('should create an instance', () => {
    expect(new PeopleActions.LoadPeople()).toBeTruthy();
  });
});