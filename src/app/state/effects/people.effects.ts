import { Injectable } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { map, exhaustMap, debounceTime, catchError, mergeMap, expand } from 'rxjs/operators';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { PeopleActionTypes, LoadPeopleSuccess, LoadPeopleFailure, LoadPeople} from '../actions/people.actions';

import { Response } from '../../models/Response.interface';
import { Character } from '../../models/Character.interface';
import { of, empty } from 'rxjs';


@Injectable()
export class PeopleEffects {

  private characters: Character[] = [];
  private total: number = 0;
  private counter: number = 1;

  @Effect() getPeople$ = this.actions$
  .pipe(
    ofType(PeopleActionTypes.LoadPeople),
    exhaustMap(_ => this.api.getCharacterList()
        .pipe(
          expand((response: Response<Character>) => {
            this.total = response.count;
            this.counter += 1;
            if (response.next) {
              debounceTime(5000);
              return this.api.getCharacterList(undefined, this.counter);
            } else {
              return empty();
            };
          }),
          mergeMap(({ results }) => results),
          map((res: Character) => {
            this.characters.push(res);
            if(this.characters.length === this.total) {
              return new LoadPeopleSuccess(this.characters);
            } else return new LoadPeople()
          }),
          catchError(error => of(new LoadPeopleFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private api: StarWarsService) {}

}
