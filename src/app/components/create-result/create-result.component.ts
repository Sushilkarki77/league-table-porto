import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultFormData, ResultItem } from 'src/app/core/interfaces/result-interfaces';
import { ResultsService } from 'src/app/core/services/results.service';


@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})
export class CreateResultComponent implements OnInit {


  constructor( private resultsService: ResultsService, private router: Router) { }

  ngOnInit() { }


  onSubmitResultsForm(resultFormData: ResultFormData): void {
    resultFormData.firstTeam = resultFormData.firstTeam.toLocaleLowerCase().trim();
    resultFormData.secondTeam = resultFormData.secondTeam.toLocaleLowerCase().trim();
    const rawValue: ResultItem = { id: Date.now(), ...resultFormData };
    this.resultsService.setResult(rawValue);
    this.router.navigateByUrl(`standings`);
  }

}
