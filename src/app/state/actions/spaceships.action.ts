import { Action } from '@ngrx/store';
import { Spaceship } from '../../models/Spaceship.interface';

export enum SpaceshipsActionTypes {
  LoadSpaceships = '[Spaceships] Load Cards',
  LoadSpaceshipsSuccess = '[Spaceships] Load Spaceships Success',
  LoadSpaceshipsFailure = '[Spaceships] Load Spaceships Failure'
}

export class LoadSpaceships implements Action {
  readonly type = SpaceshipsActionTypes.LoadSpaceships;
}
export class LoadSpaceshipsSuccess implements Action {
  readonly type = SpaceshipsActionTypes.LoadSpaceshipsSuccess;
  constructor(public payload: Array<Spaceship>) { }
}

export class LoadSpaceshipsFailure implements Action {
  readonly type = SpaceshipsActionTypes.LoadSpaceshipsFailure;
  constructor(public payload: { error: any }) { }
}

export type SpaceshipsActions = LoadSpaceships | LoadSpaceshipsSuccess | LoadSpaceshipsFailure;

