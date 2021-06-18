import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Specie } from 'src/app/models/Species.interface';
import { Response } from 'src/app/models/Response.interface';
import { Character } from 'src/app/models/Character.interface';
import { Movie } from 'src/app/models/Movie.interface';

import { StarWarsService } from '../../../../services/star-wars.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild('character')
  public character!: ElementRef;

  @ViewChild('movie')
  public movie!: ElementRef;

  @ViewChild('specie')
  public specie!: ElementRef;

  public movieList: Array<Movie> = [];
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

  ngAfterViewInit() {
    // search by name
    fromEvent<any>(this.character.nativeElement, 'keyup')
    .pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.starWarService.getCharacterList(query)),
      takeUntil(this.lifeTimeObject)
    )
    .subscribe(
      (res: Response<Character>) => {
        this.characterList = res.results;
      }
    );

    // search by movie
    fromEvent<any>(this.movie.nativeElement, 'change')
    .pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.starWarService.getMovieList(query)),
      takeUntil(this.lifeTimeObject)
    )
    .subscribe(
      (res: Response<Movie>) => {
        let characters: Array<string> = [];
        (res.results as Array<Movie>)
        .forEach((m: Movie, index: number) => {
          let character = m.characters[index].replace(/http:\/\/swapi.dev\/api\/films\//g,'').replace('/', '');
          characters.push(character);
        });
        if (!!characters.length) {
          //TODO update characterList
        }
      }
    );

    // search by specie
    fromEvent<any>(this.specie.nativeElement, 'change')
    .pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.starWarService.getSpeciesList(query)),
      takeUntil(this.lifeTimeObject)
    )
    .subscribe(
      (res: Response<Specie>) => {
        //TODO update characterList
      }
    );
  }

  ngOnInit(): void {
  };

  ngOnDestroy(): void {
    this.lifeTimeObject.next(true);
    this.lifeTimeObject.complete();
  };

}
