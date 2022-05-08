export interface ResultItem extends ResultFormData {
    id: number;
}

export interface ResultFormData {
    firstScore: number
    firstTeam: string
    secondScore: number
    secondTeam: string,
    date: Date,
    firstTeamName?: string,
    secondTeamName?: string
}

export interface ResultsItemGroupedWithDate {
    [key: string]: Array<ResultItem>
}


export interface LeagueTableObject {
    [key: string]: LeagueTableItem
}


export interface LeagueTableItem {
    teamName: string,
    pld: number,
    w: number,
    d: number,
    l: number,
    pts: number
}

export interface TableData {
    tableColumns: TableColumns[],
    data: any
  }
  
  export interface TableColumns {
    key: string,
    heading: string
  }