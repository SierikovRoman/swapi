import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { Character } from '../../../../models/Character.interface';
import { Movie } from '../../../../models/Movie.interface';
import { Specie } from '../../../../models/Species.interface';
import { Spaceship } from '../../../../models/Spaceship.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  @Input('character') public character: Character|null = null;

  private movies: Array<Movie>|null = null;
  private spaceships: Array<Spaceship>|null = null;
  private species: Array<Specie>|null = null;
  private lifeTimeObject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private store: Store<any>
  ) {
    this.store.select('movies')
    .pipe(takeUntil(this.lifeTimeObject))
    .subscribe((state: any) => {
      if (state && state.isLoaded === true) {
        this.movies = state.movies;
      }
    });
    this.store.select('spaceships')
    .pipe(takeUntil(this.lifeTimeObject))
    .subscribe((state: any) => {
      if (state && state.isLoaded === true) {
        this.spaceships = state.spaceships;
      }
    });
    this.store.select('species')
    .pipe(takeUntil(this.lifeTimeObject))
    .subscribe((state: any) => {
      if (state && state.isLoaded === true) {
        this.species = state.species;
      }
    });
  };

  public mapCharacterData(index: number, alias: string): string {
    switch (alias) {
      case 'specie':
        return (this.species as Array<Specie>) !== null ? (this.species as Array<Specie>)[index].name : '';
      case 'spaceship':
        return (this.spaceships as Array<Spaceship>) !== null ? (this.spaceships as Array<Spaceship>)[index].name : '';
      case 'film':
        return (this.movies as Array<Movie>) !== null ? (this.movies as Array<Movie>)[index].title : '';
      default:
        return '';
    }
  };

  ngOnInit(): void { };

  ngOnDestroy(): void {
    this.lifeTimeObject.next(true);
    this.lifeTimeObject.complete();
  };

}
