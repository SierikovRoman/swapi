import { Action } from '@ngrx/store';
import { Specie } from '../../models/Species.interface';

export enum SpeciesActionTypes {
  LoadSpecies = '[Species] Load Cards',
  LoadSpeciesSuccess = '[Species] Load Species Success',
  LoadSpeciesFailure = '[Species] Load Species Failure'
}

export class LoadSpecies implements Action {
  readonly type = SpeciesActionTypes.LoadSpecies;
}
export class LoadSpeciesSuccess implements Action {
  readonly type = SpeciesActionTypes.LoadSpeciesSuccess;
  constructor(public payload: Array<Specie>) { }
}

export class LoadSpeciesFailure implements Action {
  readonly type = SpeciesActionTypes.LoadSpeciesFailure;
  constructor(public payload: { error: any }) { }
}

export type SpeciesActions = LoadSpecies | LoadSpeciesSuccess | LoadSpeciesFailure;

