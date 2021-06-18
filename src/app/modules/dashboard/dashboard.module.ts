import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CurrentComponent } from './pages/current/current.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CurrentComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
