import { speciesReducer, initialState } from './species.reducer';

describe('Species Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = speciesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});