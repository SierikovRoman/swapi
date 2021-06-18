import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounce, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Specie } from 'src/app/models/Species.interface';
import { Response } from 'src/app/models/Response.interface';
import { Character } from 'src/app/models/Character.interface';

import { StarWarsService } from '../../../../services/star-wars.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @Input('character') public character: ElementRef|null = null;

  public specieList: Array<Specie> = [];

  public characterList: Array<Character> = [];
  private lifeTimeObject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private store: Store<any>,
    private starWarService: StarWarsService
  ) {
    this.store.select('people')
    .pipe(takeUntil(this.lifeTimeObject))
    .subscribe((state: any) => {
      if (state && state.isLoaded === true) {
        this.characterList = state.people;
      }
    });
    this.store.select('species')
    .pipe(takeUntil(this.lifeTimeObject))
    .subscribe((state: any) => {
      if (state && state.isLoaded === true) {
        this.specieList = state.species;
      }
    });

    fromEvent((this.character as ElementRef).nativeElement, 'input')
    .pipe(
      map((event: any) => event.taret.value),
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.lifeTimeObject)
    )
    .subscribe(
      (res: any) => {

      }
    );
  };

  public onSpecie(specie: string) {
    this.starWarService.getSpeciesList(specie)
    .pipe(
      takeUntil(this.lifeTimeObject)
    )
    .subscribe(
      (res: Response<Specie>) => {
        console.log(`Specie type ${specie}`, res.results);
      }
    )
  };

  ngOnInit(): void {
  };

  ngOnDestroy(): void {
    this.lifeTimeObject.next(true);
    this.lifeTimeObject.complete();
  };

}
