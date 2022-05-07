export interface ResultItem {
    id: number;
    firstScore: number
    firstTeam: string
    secondScore: number
    secondTeam: string,
    date: string
}

export interface ResultsItemGroupedWithDate {
    [key: string]: Array<ResultItem>
}

