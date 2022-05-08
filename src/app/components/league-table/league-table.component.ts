import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResultItem, TableColumns, TableData } from 'src/app/core/interfaces/result-interfaces';
import { ResultsService } from 'src/app/core/services/results.service';
import { AppState } from 'src/app/state/app.state';
import { selectAllResults } from 'src/app/state/results.selectors';

const leagueTableColumns: TableColumns[] = [
  { key: 'index', heading: 'Pos' },
  { key: 'teamName', heading: 'Team Name' },
  { key: 'pld', heading: 'Pld' },
  { key: 'w', heading: 'W' },
  { key: 'd', heading: 'D' },
  { key: 'l', heading: 'L' },
  { key: 'pts', heading: 'Pts' }
]




@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  leagueTableData: TableData;


  constructor(private store: Store<AppState>, private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.subscribeToRawResults();
  }

  subscribeToRawResults(): void {
    this.store.select(selectAllResults).subscribe((key: Array<ResultItem>) => {

      this.leagueTableData = {
        tableColumns: [...leagueTableColumns],
        data: this.resultsService.computeTableData(key)
      };
    })
  }




}



