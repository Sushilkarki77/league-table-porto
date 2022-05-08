import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResultItem } from 'src/app/core/interfaces/result-interfaces';
import { ResultsService } from 'src/app/core/services/results.service';
import { AppState } from 'src/app/state/app.state';
import { selectAllResults } from 'src/app/state/results.selectors';



@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  constructor(private store: Store<AppState>, private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.subscribeToRawResults();
  }

  subscribeToRawResults(): void {
    this.store.select(selectAllResults).subscribe((key: Array<ResultItem>) => {
      const computedData = this.resultsService.computeTableData(key);
      console.log(computedData);
    })
  }




}



