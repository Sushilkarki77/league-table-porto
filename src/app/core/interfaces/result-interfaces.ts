export interface ResultItem extends ResultFormData {
    id: number;
}

export interface ResultFormData {
    firstScore: number
    firstTeam: string
    secondScore: number
    secondTeam: string,
    date: string
}

export interface ResultsItemGroupedWithDate {
    [key: string]: Array<ResultItem>
}

