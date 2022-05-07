import { Injectable } from '@angular/core';
import { ResultItem } from '../interfaces/result-interfaces';

const results:  Array<ResultItem> = [
  {
      "id": 1651920282125,
      "firstTeam": "team 1",
      "secondTeam": "team 2",
      "firstScore": 4,
      "secondScore": 1,
      "date": "2022-05-08"
  },
  {
      "id": 1651920286209,
      "firstTeam": "team 1",
      "secondTeam": "team 2",
      "firstScore": 4,
      "secondScore": 1,
      "date": "2022-05-08"
  },
  {
      "id": 1651920287294,
      "firstTeam": "team 1",
      "secondTeam": "team 2",
      "firstScore": 4,
      "secondScore": 1,
      "date": "2022-05-08"
  },
  {
      "id": 1651920287878,
      "firstTeam": "team 1",
      "secondTeam": "team 2",
      "firstScore": 4,
      "secondScore": 1,
      "date": "2022-05-08"
  },
  {
      "id": 1651920288342,
      "firstTeam": "team 1",
      "secondTeam": "team 2",
      "firstScore": 4,
      "secondScore": 1,
      "date": "2022-05-08"
  }
]


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private rawResults: Array<ResultItem> = results;

  constructor() { }

  setResult(resultItem: ResultItem): void{
   this.rawResults.push(resultItem);
  }

  getResult(): Array<ResultItem> {
    console.log(this.rawResults);
    return this.rawResults;
  }
}
