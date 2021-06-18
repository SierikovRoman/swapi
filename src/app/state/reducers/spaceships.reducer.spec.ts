import { spaceshipsReducer, initialState } from './spaceships.reducer';

describe('Spaceships Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = spaceshipsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
