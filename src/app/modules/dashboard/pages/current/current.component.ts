import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { StarWarsService } from '../../../../services/star-wars.service';
import { Character } from '../../../../models/Character.interface';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  public character: Character|null = null;

  private lifeTimeObject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private starWarsService: StarWarsService
  ) {
    this.router.params.subscribe(
      (res: Params) => {
        this.starWarsService.getCharacter(res.id)
        .pipe(
          takeUntil(this.lifeTimeObject)
        )
        .subscribe(
          (res: Character) => {
            this.character = res;
          }
        )
      }
    )
  };

  public goBack() {
    this.route.navigate(['../']);
  };

  ngOnInit(): void {
  }

}
