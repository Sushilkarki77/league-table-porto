import { ResultItem, ResultsItemGroupedWithDate } from "../interfaces/result-interfaces";

 export function groupResultsWithDate(resultParam: Array<ResultItem>): ResultsItemGroupedWithDate  {
  return resultParam.reduce((acc: ResultsItemGroupedWithDate, curr: ResultItem) => {
    if (acc[curr.date]) {
      acc[curr.date] = [...acc[curr.date], curr]
    }
    else {
      acc[curr.date] = [curr]
    }
    return acc
  }, {});
}