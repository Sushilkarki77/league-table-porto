
export interface TableData {
  tableColumns: Array<TableColumns>,
  data: any
}

export interface TableColumns {
  key: string,
  heading: string
}