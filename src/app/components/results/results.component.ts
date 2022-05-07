import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsItemGroupedWithDate } from 'src/app/interfaces/result-interfaces';
import { ResultsService } from 'src/app/services/results.service';
import { groupResultsWithDate } from 'src/app/utils/results.utils';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  filteredResult: ResultsItemGroupedWithDate = {};

  constructor(private resultsService: ResultsService, private router: Router) { }

  ngOnInit(): void {
    this.filteredResult = groupResultsWithDate(this.resultsService.getResult());
  }

  redirectToEdit(id: number): void{
    this.router.navigate([`edit-result/${id}`]);
  }

}
