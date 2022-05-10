import { Injectable } from '@angular/core';

export interface TableData {
  tableColumns: Array<TableColumns>,
  data: any
}

export interface TableColumns {
  key: string,
  heading: string
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
}
