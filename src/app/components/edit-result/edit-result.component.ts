import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResultFormData, ResultItem } from 'src/app/core/interfaces/result-interfaces';
import { ResultsService } from 'src/app/core/services/results.service';

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.scss']
})
export class EditResultComponent implements OnInit {

  resultId: number;

  resultItem: ResultItem;

  routerSubscription: Subscription;

  constructor(private route: ActivatedRoute, private resultService: ResultsService,  private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToParams();
  }


  onSubmitResultsForm(resultData: ResultFormData): void {
    this.resultService.updateResultItem(this.resultId, {...resultData, id: this.resultId})
    this.router.navigateByUrl(`standings`);
  }

  subscribeToParams(): void {
    this.routerSubscription = this.route.paramMap.subscribe(params => {
      
       const resultId  = params?.get('id');
      if (!resultId) { return; }

      this.resultId = +resultId;
      const resultItem = this.resultService.getSingleResultItem(this.resultId);
      if (!resultItem) { return; }

      this.resultItem = resultItem;
    });
  }



}
