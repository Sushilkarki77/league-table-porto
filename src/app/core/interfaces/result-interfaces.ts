export interface ResultItem extends ResultFormData {
    id: number;
}

export interface ResultFormData {
    firstScore: number
    firstTeam: string
    secondScore: number
    secondTeam: string,
    date: Date
}

export interface ResultsItemGroupedWithDate {
    [key: string]: Array<ResultItem>
}


export interface LeagueTableObject {
    [key: string]: LeagueTableItem
}


export interface LeagueTableItem {
    pos?: number,
    teamName: string,
    pld: number,
    w: number,
    d: number,
    l: number,
    pts: number
}

