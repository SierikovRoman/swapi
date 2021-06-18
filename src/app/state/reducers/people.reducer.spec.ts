import { peopleReducer, initialState } from './people.reducer';

describe('People Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = peopleReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
