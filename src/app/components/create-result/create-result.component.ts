import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ResultFormData, ResultItem } from 'src/app/core/interfaces/result-interfaces';
import { ResultsService } from 'src/app/core/services/results.service';
import { addResult } from 'src/app/state/results.actions';


@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})
export class CreateResultComponent implements OnInit {


  constructor(private router: Router, private store: Store) { }

  ngOnInit() { }


  onSubmitResultsForm(resultFormData: ResultFormData): void {
    const rawValue: ResultItem = {
      id: Date.now(),
      ...resultFormData
    };

    this.store.dispatch(addResult({ content: rawValue }));
    this.router.navigateByUrl(`standings`);
  }

}
