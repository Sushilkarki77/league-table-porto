import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResultItem } from 'src/app/interfaces/result-interfaces';
import { ResultsService } from 'src/app/services/results.service';


@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})
export class CreateResultComponent implements OnInit {

  resultsForm = this.fb.group({
    firstTeam: ['', [Validators.required]],
    secondTeam: ['', [Validators.required]],
    firstScore: ['', [Validators.required]],
    secondScore: ['', [Validators.required]],
    date: [null, Validators.required]
  });

  public formSubmitted = false;

  constructor(private fb: FormBuilder, private resultsService: ResultsService) { }

  ngOnInit() { }

  get f(): any { return this.resultsForm.controls; }

  onSubmitResultsForm(): void {
    this.formSubmitted = true;
    if (this.resultsForm.invalid) { return; }

    const rawValue: ResultItem = { id: Date.now(), ...this.resultsForm.getRawValue() };

    rawValue.firstTeam = rawValue.firstTeam.toLocaleLowerCase().trim();
    rawValue.secondTeam = rawValue.secondTeam.toLocaleLowerCase().trim();

    this.resultsService.setResult(rawValue);
  }

}
