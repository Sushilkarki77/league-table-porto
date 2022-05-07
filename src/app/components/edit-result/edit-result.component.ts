import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ResultFormData, ResultItem } from 'src/app/core/interfaces/result-interfaces';
import { ResultsService } from 'src/app/core/services/results.service';
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
    private resultService: ResultsService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscribeToParams();

  }


  onSubmitResultsForm(resultData: ResultFormData): void {
    // this.resultService.updateResultItem(this.resultId, { ...resultData, id: this.resultId })

    this.store.dispatch(editResult({content: {id: this.resultId, item: { ...resultData, id: this.resultId } }}));
    
    this.router.navigateByUrl(`standings`);
  }

  subscribeToParams(): void {
    this.routerSubscription = this.route.paramMap.subscribe(params => {
      //TODO: use merge map

      const resultId = params?.get('id');
      if (!resultId) { return; }

      this.resultId = +resultId;

      this.store.select(selectAllResults).subscribe((key: Array<ResultItem>) => {
        this.resultItem = key.find(key => key.id === this.resultId) || null;
      });

    });
  }



}
