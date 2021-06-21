import { SpaceshipsActionTypes } from '../actions/spaceships.action';
import { Spaceship } from 'src/app/models/Spaceship.interface';

export const spaceshipsFeatureKey = 'spaceships';

export interface State {
  spaceships: Array<Spaceship> | [];
  isLoaded: boolean;
}

export const initialState: State = {
  spaceships: [],
  isLoaded: false
};

export function spaceshipsReducer(state = initialState, action: any): State {
  switch (action.type) {
    case SpaceshipsActionTypes.LoadSpaceshipsSuccess: {
      const updateState = {...state};
      updateState.spaceships = action.payload;
      updateState.isLoaded = true;
      return updateState;
    }
    case SpaceshipsActionTypes.LoadSpaceshipsFailure: {
      if (action.payload)  {
        console.log('fall', action.payload);
      }
      return {...state};
    }
    default:
      return {...state};
  }
}