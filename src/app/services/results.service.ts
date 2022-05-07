import { Injectable } from '@angular/core';
import { ResultItem } from '../interfaces/result-interfaces';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private rawResults: Array<ResultItem> = [];

  constructor() { }

  setResult(resultItem: ResultItem): void{
   this.rawResults.push(resultItem);
  }

  getResult(): Array<ResultItem> {
    return this.rawResults;
  }
}
