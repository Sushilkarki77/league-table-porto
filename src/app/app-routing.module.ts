import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResultComponent } from './components/create-result/create-result.component';
import { EditResultComponent } from './components/edit-result/edit-result.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-result', pathMatch: 'full' },
  { path: 'results', component: ResultsComponent },
  { path: 'create-result', component: CreateResultComponent },
  { path: 'create-result/:id', component: EditResultComponent },
  { path: 'standings', component: LeagueTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
