import { Injectable } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { of } from 'rxjs';
import { SpaceshipsActionTypes, LoadSpaceshipsSuccess, LoadSpaceshipsFailure } from '../actions/spaceships.action';

import { Response } from '../../models/Response.interface';
import { Spaceship } from '../../models/Spaceship.interface';


@Injectable()
export class SpaceshipsEffects {

  @Effect() getSpaceships$ = this.actions$
  .pipe(
    ofType(SpaceshipsActionTypes.LoadSpaceships),
    exhaustMap(_ => this.api.getSpaceshipList()
        .pipe(
          map((res: Response<Spaceship>) => {
            return new LoadSpaceshipsSuccess(res.results);
          }),
          catchError(error => of(new LoadSpaceshipsFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private api: StarWarsService) {}

}
