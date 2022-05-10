import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TableData } from 'projects/table/src/public-api';
import { Subscription } from 'rxjs';
import { ResultItem } from 'src/app/core/interfaces/result-interfaces';
import { leagueTableColumns, ResultsService } from 'src/app/core/services/results.service';
import { AppState } from 'src/app/state/app.state';
import { selectAllResults } from 'src/app/state/results.selectors';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit, OnDestroy {

  leagueTableData: TableData;

  resultsSubscription: Subscription;


  constructor(private store: Store<AppState>, private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.subscribeToRawResults();
  }

  subscribeToRawResults(): void {
    this.resultsSubscription = this.store.select(selectAllResults).subscribe((key: Array<ResultItem>) => {
      this.leagueTableData = {
        tableColumns: [...leagueTableColumns],
        data: this.resultsService.computeTableData(key)
      };
    })
  }

 ngOnDestroy(): void{
  this.resultsSubscription.unsubscribe();
 }
}



