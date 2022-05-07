import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ResultItem, ResultsItemGroupedWithDate } from 'src/app/core/interfaces/result-interfaces';
import { ResultsService } from 'src/app/core/services/results.service';
import { groupResultsWithDate } from 'src/app/core/utils/results.utils';
import { AppState } from 'src/app/state/app.state';
import { selectAllResults, selectResults } from 'src/app/state/results.selectors';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  filteredResult: ResultsItemGroupedWithDate = {};

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subScribeToState();
  }

  subScribeToState(): void{
     this.store.select(selectAllResults).subscribe((key: Array<ResultItem>) => {
      this.filteredResult = groupResultsWithDate(key);
    });
  }

  redirectToEdit(id: number): void{
    this.router.navigate([`edit-result/${id}`]);
  }
}
