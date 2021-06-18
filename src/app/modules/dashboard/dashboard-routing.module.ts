import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CurrentComponent } from './pages/current/current.component';

const routes: Routes = [
  { path: 'characters', component: DashboardComponent },
  { path: 'characters/:id', component: CurrentComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: '**', redirectTo: 'characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
