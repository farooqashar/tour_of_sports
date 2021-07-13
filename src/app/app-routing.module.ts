import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SportDetailComponent } from './sport-detail/sport-detail.component';

const routes: Routes = [
  { path: 'sports', component: SportsComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: "full"},
  { path: 'detail/:id', component: SportDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
