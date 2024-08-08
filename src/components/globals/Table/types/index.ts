import { PaginationState } from '@tanstack/react-table'

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
  pageIndex: number
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

export enum TUColumnTypes {
  select = 'select',
  text = 'text',
  date = 'date',
  actions = 'actions',
  sortable = 'sortable',
  separator = 'separator',
}

export interface TUFilter {
  key: string
  placeholder: string
}

export interface TUActions {
  id: string
  type: TUColumnTypes
  action: (arg0: TData) => void
  icon?: string
}

export interface TUHeader {
  id: string
  name: string
  type: TUColumnTypes
  title?: string
  width?: number
  items?: TUActions[]
}

export interface TUSortBy {
  id: string
  desc: boolean
}

export interface TUConfig {
  pagination?: PaginationState
  sortBy?: TUSortBy[]
  orderBy?: string[]
  pageSize?: number[]
  rows?: number
  pages?: number
  footer?: boolean
}
