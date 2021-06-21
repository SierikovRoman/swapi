import { Injectable } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { map, catchError, exhaustMap, debounceTime, expand, mergeMap } from 'rxjs/operators';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { of, empty } from 'rxjs';
import { SpaceshipsActionTypes, LoadSpaceshipsSuccess, LoadSpaceshipsFailure, LoadSpaceships } from '../actions/spaceships.action';

import { Response } from '../../models/Response.interface';
import { Spaceship } from '../../models/Spaceship.interface';


@Injectable()
export class SpaceshipsEffects {

  private spaceships: Spaceship[] = [];
  private total: number = 0;
  private counter: number = 1;

  @Effect() getSpaceships$ = this.actions$
  .pipe(
    ofType(SpaceshipsActionTypes.LoadSpaceships),
    exhaustMap(_ => this.api.getSpaceshipList()
        .pipe(
          expand((response: Response<Spaceship>) => {
            this.total = response.count;
            this.counter += 1;
            if (response.next) {
              debounceTime(5000);
              return this.api.getSpaceshipList(undefined, this.counter);
            } else {
              return empty();
            };
          }),
          mergeMap(({ results }) => results),
          map((res: Spaceship) => {
            this.spaceships.push(res);
            if(this.spaceships.length === this.total) {
              return new LoadSpaceshipsSuccess(this.spaceships);
            } else return new LoadSpaceships()
          }),
          catchError(error => of(new LoadSpaceshipsFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private api: StarWarsService) {}

}
