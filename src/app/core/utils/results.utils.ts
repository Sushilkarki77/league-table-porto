import { ResultItem, ResultsItemGroupedWithDate } from "../interfaces/result-interfaces";

 export const groupResultsWithDate = (resultParam: Array<ResultItem>): ResultsItemGroupedWithDate => {
  return resultParam.reduce((acc: ResultsItemGroupedWithDate, curr: ResultItem) => {
    if (acc[curr.date.toString()]) {
      acc[curr.date.toString()] = [...acc[curr.date.toString()], curr]
    }
    else {
      acc[curr.date.toString()] = [curr]
    }
    return acc
  }, {});
}


export const capitalizeString = (text: string) => text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
