export interface TConfig {
  tableClass: string
  tableStyle: {
    maxHeight: string
  }
  footer: boolean
  manual: boolean
  page: number
  pageSize: number
  pages: number
  rows: number
  loading: boolean
  sortBy: [
    {
      id: string
      desc: boolean
    },
  ]
  defaultPageSize: number
  pageSizeOptions: number[]
  sortable: boolean
  exportable: boolean
  filterable: boolean
  orderable: boolean
  excludable: boolean
  configurable: boolean
  columnOrder: string[]
  hiddenColumns: string[]
  tReady: true
}
export interface THeaders {
  id: string
  name: string
  width: number | string
  sortable: boolean
  resizable: boolean
  filterable: boolean
  minWidth: number
  minResizeWidth: number
  show: boolean
  accessor: string
  style: string
  type: string
  title: string
  items: TData[]
}

export interface TData {
  [key: string]: string | number | boolean | Date | ((arg0: TData) => void)
}
