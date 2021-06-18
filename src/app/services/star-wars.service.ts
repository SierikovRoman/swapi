import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoadPeople } from '../state/actions/people.actions';
import { LoadMovies } from '../state/actions/movies.actions';
import { LoadSpaceships } from '../state/actions/spaceships.action';
import { LoadSpecies } from '../state/actions/species.actions';

import { Response } from '../models/Response.interface';
import { Character } from '../models/Character.interface';
import { Movie } from '../models/Movie.interface';
import { Spaceship } from '../models/Spaceship.interface';
import { Specie } from '../models/Species.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private _movies$ = new Subject<Array<Movie>>();
  public movieList: Array<Movie> = []; 
  public movies$ = this._movies$.asObservable();

  constructor(
    private store: Store,
    private http: HttpClient
  ) { }

  public getCharacterList(filter?: string): Observable<Response<Character>> {
    let url = `${environment.basePath}people/`;
    return this.http.get<Response<Character>>(url);
  };

  public getCharacter(id: number): Observable<Character> {
    let url = `${environment.basePath}people/${id}/`;
    return this.http.get<Character>(url);
  };

  public getMovieList(): Observable<Response<Movie>> {
    let url = `${environment.basePath}films/`;
    return this.http.get<Response<Movie>>(url);
  };

  public getSpaceshipList(): Observable<Response<Spaceship>> {
    let url = `${environment.basePath}starships/`;
    return this.http.get<Response<Spaceship>>(url);
  };

  public getSpeciesList(filter?: string): Observable<Response<Specie>> {
    let url = `${environment.basePath}species/`;
    if(filter !== undefined) {
      `${environment.basePath}species/?search=${filter}`;
    }
    return this.http.get<Response<Specie>>(url);
  };

  public initStore() {
    this.store.dispatch(new LoadPeople());
    this.store.dispatch(new LoadMovies());
    this.store.dispatch(new LoadSpaceships());
    this.store.dispatch(new LoadSpecies());
  };

}
