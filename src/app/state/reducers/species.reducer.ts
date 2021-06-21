import { SpeciesActionTypes } from '../actions/species.actions';
import { Specie } from 'src/app/models/Species.interface';

export const speciesFeatureKey = 'species';

export interface State {
    species: Array<Specie> | [];
    isLoaded: boolean;
}

export const initialState: State = {
    species: [],
    isLoaded: false
};

export function speciesReducer(state = initialState, action: any): State {
  switch (action.type) {
    case SpeciesActionTypes.LoadSpeciesSuccess: {
      const updateState = {...state};
      updateState.species = action.payload;
      updateState.isLoaded = true;
      return updateState;
    }
    case SpeciesActionTypes.LoadSpeciesFailure: {
      if (action.payload)  {
        console.log('fall', action.payload);
      }
      return {...state};
    }
    default:
      return {...state};
  }
}

