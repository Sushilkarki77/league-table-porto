import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ResultItem, ResultsItemGroupedWithDate } from 'src/app/core/interfaces/result-interfaces';
import { groupResultsWithDate } from 'src/app/core/utils/results.utils';
import { AppState } from 'src/app/state/app.state';
import { selectAllResults } from 'src/app/state/results.selectors';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  filteredResult: ResultsItemGroupedWithDate;

  resultSubscription: Subscription;

  sortedDates: Array<string>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subScribeToState();
  }

  subScribeToState(): void {
    this.store.select(selectAllResults).subscribe((key: Array<ResultItem>) => {
      this.filteredResult = groupResultsWithDate(key);
      this.sortedDates = Object.keys(this.filteredResult).sort().reverse();
    });
  }

  redirectToEdit(id: number): void {
    this.router.navigate([`create-result/${id}`]);
  }

  ngOnDestroy(): void{
   this.resultSubscription.unsubscribe();
  }
}
