import { Injectable } from '@angular/core';
import { TableColumns } from 'projects/table/src/public-api';
import { LeagueTableItem, LeagueTableObject, ResultItem } from '../interfaces/result-interfaces';
import { capitalizeString } from '../utils/results.utils';

const defaultResultItem: LeagueTableItem = {
  teamName: '',
  pld: 0,
  w: 0,
  d: 0,
  l: 0,
  pts: 0
};

export const leagueTableColumns: Array<TableColumns> = [
  { key: 'pos', heading: 'Pos' },
  { key: 'teamName', heading: 'Team Name' },
  { key: 'pld', heading: 'Pld' },
  { key: 'w', heading: 'W' },
  { key: 'd', heading: 'D' },
  { key: 'l', heading: 'L' },
  { key: 'pts', heading: 'Pts' }
]

const winPoint = 3;
const drawPoint = 1;

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  computeTableData(rawResults: Array<ResultItem>): Array<LeagueTableItem> {
    const sortedObject: LeagueTableObject = rawResults.reduce((acc: LeagueTableObject, curr: ResultItem) => {
      const trimmedFirstTeam = capitalizeString(curr.firstTeam.toLowerCase().trim());
      const trimmedSecondTeam = capitalizeString(curr.secondTeam.toLowerCase().trim());

      const existingItem = acc[trimmedFirstTeam] || { ...defaultResultItem };
      acc[trimmedFirstTeam] = {
        teamName: trimmedFirstTeam,
        ...this.getUpdatedTableItem(existingItem, this.checkResultType(curr.firstScore, curr.secondScore))
      }

      const existingItemSecond = acc[trimmedSecondTeam] || { ...defaultResultItem };
      acc[trimmedSecondTeam] = {
        teamName: trimmedSecondTeam,
        ...this.getUpdatedTableItem(existingItemSecond, this.checkResultType(curr.secondScore, curr.firstScore))
      }
      return acc;
    }, {});

    return Object.values(sortedObject).sort((a, b) => b.pts - a.pts).map((key, index) => { key.pos = index + 1; return key })
  }

  getUpdatedTableItem(tableItem: LeagueTableItem, resultType: 'win' | 'loose' | 'tie'): { pld: number, w: number, d: number, l: number, pts: number } {
    return {
      pld: tableItem.pld +1,
      w: resultType === 'win' ? tableItem.w+1 : tableItem.w,
      d: resultType === 'tie' ? tableItem.d+1 : tableItem.d,
      l: resultType === 'loose' ? tableItem.l+1 : tableItem.l,
      pts: resultType === 'win' ? tableItem.pts + winPoint : resultType === 'tie' ? tableItem.pts + drawPoint : tableItem.pts
    }
  }

  checkResultType(currentTeamScore: number, nextTeamScore: number): 'win' | 'loose' | 'tie' {
    return currentTeamScore > nextTeamScore ? 'win' : currentTeamScore < nextTeamScore ? 'loose' : 'tie';
  }


}
