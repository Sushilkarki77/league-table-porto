import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, switchMap } from 'rxjs';
import { ResultFormData, ResultItem } from 'src/app/core/interfaces/result-interfaces';
import { AppState } from 'src/app/state/app.state';
import { editResult } from 'src/app/state/results.actions';
import { selectAllResults } from 'src/app/state/results.selectors';


@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.scss']
})
export class EditResultComponent implements OnInit {

  resultId: number;

  resultItem: ResultItem | null;

  routerSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscribeToParams();
  }


  onSubmitResultsForm(resultData: ResultFormData): void {
    const item: ResultItem = { ...resultData, id: this.resultId }
    this.store.dispatch(editResult({ content: { id: this.resultId, item } }));
    this.router.navigateByUrl(`standings`);
  }

  subscribeToParams(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { return; }
    this.resultId = +id;

    this.store.select(selectAllResults).subscribe((key: Array<ResultItem>) => {
      this.resultItem = key.find(key => key.id === this.resultId) || null;
    });
  }
}
