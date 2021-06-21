import { Injectable } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { map, catchError, exhaustMap, debounceTime, expand, mergeMap } from 'rxjs/operators';
import { Actions, ofType, Effect} from '@ngrx/effects';
import { of, empty } from 'rxjs';
import { SpeciesActionTypes, LoadSpeciesSuccess, LoadSpeciesFailure, LoadSpecies } from '../actions/species.actions';

import { Response } from '../../models/Response.interface';
import { Specie } from '../../models/Species.interface';


@Injectable()
export class SpeciesEffects {

  private species: Specie[] = [];
  private total: number = 0;
  private counter: number = 1;

  @Effect() getSpecies$ = this.actions$
  .pipe(
    ofType(SpeciesActionTypes.LoadSpecies),
    exhaustMap(_ => this.api.getSpeciesList()
        .pipe(
          expand((response: Response<Specie>) => {
            this.total = response.count;
            this.counter += 1;
            if (response.next) {
              debounceTime(5000);
              return this.api.getSpeciesList(undefined, this.counter);
            } else {
              return empty();
            };
          }),
          mergeMap(({ results }) => results),
          map((res: Specie) => {
            this.species.push(res);
            if(this.species.length === this.total) {
              return new LoadSpeciesSuccess(this.species);
            } else return new LoadSpecies()
          }),
          catchError(error => of(new LoadSpeciesFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private api: StarWarsService) {}

}
