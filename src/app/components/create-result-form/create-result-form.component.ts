import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResultFormData, ResultItem } from 'src/app/core/interfaces/result-interfaces';

@Component({
  selector: 'app-create-result-form',
  templateUrl: './create-result-form.component.html',
  styleUrls: ['./create-result-form.component.scss']
})
export class CreateResultFormComponent implements OnInit {

  @Output() onFormSubmit = new EventEmitter<ResultFormData>();

  formSubmitted = false;

  @Input()
  public set resultItem(resultItem: ResultItem) {
    Object.entries(resultItem).forEach(([key, value]) => {
      this.resultsForm.patchValue({
        [key]: value
      })
    });
  }

  resultsForm = this.fb.group({
    firstTeam: ['', [Validators.required]],
    secondTeam: ['', [Validators.required]],
    firstScore: ['', [Validators.required]],
    secondScore: ['', [Validators.required]],
    date: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  get f(): any { return this.resultsForm.controls; }

  onSubmitResultsForm(): void {
    this.formSubmitted = true;
    if (this.resultsForm.invalid) { return; }

    this.onFormSubmit.emit(this.resultsForm.getRawValue());

    this.resultsForm.reset();
  }

}
