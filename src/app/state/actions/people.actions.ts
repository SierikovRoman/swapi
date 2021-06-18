import { Action } from '@ngrx/store';
import { Character } from '../../models/Character.interface';

export enum PeopleActionTypes {
  LoadPeople = '[People] Load Cards',
  LoadPeopleSuccess = '[People] Load People Success',
  LoadPeopleFailure = '[People] Load People Failure'
}

export class LoadPeople implements Action {
  readonly type = PeopleActionTypes.LoadPeople;
}
export class LoadPeopleSuccess implements Action {
  readonly type = PeopleActionTypes.LoadPeopleSuccess;
  constructor(public payload: Array<Character>) { }
}

export class LoadPeopleFailure implements Action {
  readonly type = PeopleActionTypes.LoadPeopleFailure;
  constructor(public payload: { error: any }) { }
}

export type CardsActions = LoadPeople | LoadPeopleSuccess | LoadPeopleFailure;

