import { Injectable } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { of } from 'rxjs';
import { SpeciesActionTypes, LoadSpeciesSuccess, LoadSpeciesFailure } from '../actions/species.actions';

import { Response } from '../../models/Response.interface';
import { Specie } from '../../models/Species.interface';


@Injectable()
export class SpeciesEffects {

  @Effect() getSpecies$ = this.actions$
  .pipe(
    ofType(SpeciesActionTypes.LoadSpecies),
    exhaustMap(_ => this.api.getSpeciesList()
        .pipe(
          map((res: Response<Specie>) => {
            return new LoadSpeciesSuccess(res.results);
          }),
          catchError(error => of(new LoadSpeciesFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private api: StarWarsService) {}

}
