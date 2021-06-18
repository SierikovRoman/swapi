import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpaceshipsEffects } from './spaceships.effects';

describe('CardsEffects', () => {
  // tslint:disable-next-line
  let actions$: Observable<any>;
  let effects: SpaceshipsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpaceshipsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SpaceshipsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
