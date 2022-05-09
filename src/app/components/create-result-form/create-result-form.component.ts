import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    firstTeam: ['', [Validators.required,]],
    secondTeam: ['', [Validators.required, this.duplicateTeamValidation]],
    firstScore: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
    secondScore: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
    date: ['', Validators.required]
  }, {
    validator: this.duplicateTeamValidation('firstTeam', 'secondTeam')
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  duplicateTeamValidation(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['shouldNotMatch']) {
        return;
      }

      if (control.value === matchingControl.value) {
        matchingControl.setErrors({ shouldNotMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }


  get f(): any { return this.resultsForm.controls; }

  onSubmitResultsForm(): void {
    this.formSubmitted = true;
    if (this.resultsForm.invalid) { return; }

    this.onFormSubmit.emit(this.resultsForm.getRawValue());

    this.resultsForm.reset();
  }

}
