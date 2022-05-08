import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/core/interfaces/result-interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input()
  leagueTableData: TableData;


  constructor() { }

  ngOnInit(): void {
  }

}
