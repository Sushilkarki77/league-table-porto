import { Component, Input, OnInit } from '@angular/core';
import { TableData } from './table-interfaces';

@Component({
  selector: 'lib-table',
  template: `
  <table class="table table-bordered">
    <thead>
      <tr>
        <th *ngFor="let key of leagueTableData.tableColumns">{{key.heading}}</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let key of leagueTableData.data; let i = index">
        <td  *ngFor="let x of leagueTableData.tableColumns">{{x?.key ? key[x.key] : ''}}</td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [
  ]
})
export class TableComponent implements OnInit {

  @Input()
  leagueTableData: TableData;

  constructor() { }

  ngOnInit(): void {
  }

}
