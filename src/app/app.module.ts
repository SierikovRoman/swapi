import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { PeopleEffects } from './state/effects/people.effects';
import { peopleReducer } from './state/reducers/people.reducer';

import { MoviesEffects } from './state/effects/movies.effects';
import { moviesReducer } from './state/reducers/movies.reducer';

import { SpaceshipsEffects } from './state/effects/spaceships.effects';
import { spaceshipsReducer } from './state/reducers/spaceships.reducer';

import { SpeciesEffects } from './state/effects/species.effects';
import { speciesReducer } from './state/reducers/species.reducer'

import { StarWarsService } from './services/star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([PeopleEffects, MoviesEffects, SpaceshipsEffects, SpeciesEffects]),
    StoreModule.forRoot({
      people: peopleReducer,
      movies: moviesReducer,
      spaceships: spaceshipsReducer,
      species: speciesReducer
    })
  ],
  providers: [
    StarWarsService,
    {
        provide: APP_INITIALIZER,
        useFactory: (starWarsService: StarWarsService) =>
            () => starWarsService.initStore(),
        deps: [StarWarsService],
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
