import { PeopleActionTypes } from '../actions/people.actions';
import { Character } from 'src/app/models/Character.interface';

export const peopleFeatureKey = 'people';

export interface State {
  people: Array<Character> | [];
  isLoaded: boolean;
}

export const initialState: State = {
  people: [],
  isLoaded: false
};

export function peopleReducer(state = initialState, action: any): State {
  switch (action.type) {
    case PeopleActionTypes.LoadPeopleSuccess: {
      const updateState = {...state};
      updateState.people = action.payload;
      updateState.isLoaded = true;
      return updateState;
    }
    case PeopleActionTypes.LoadPeopleFailure: {
      if (action.payload)  {
        console.log('fall', action.payload);
      }
      return {...state};
    }
    default:
      return {...state};
  }
}

