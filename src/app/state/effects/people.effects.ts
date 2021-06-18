import { Injectable } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { of } from 'rxjs';
import { PeopleActionTypes, LoadPeopleSuccess, LoadPeopleFailure } from '../actions/people.actions';

import { Response } from '../../models/Response.interface';
import { Character } from '../../models/Character.interface';


@Injectable()
export class PeopleEffects {

  @Effect() getPeople$ = this.actions$
  .pipe(
    ofType(PeopleActionTypes.LoadPeople),
    exhaustMap(_ => this.api.getCharacterList()
        .pipe(
          map((res: Response<Character>) => {
            return new LoadPeopleSuccess(res.results);
          }),
          catchError(error => of(new LoadPeopleFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private api: StarWarsService) {}

}
