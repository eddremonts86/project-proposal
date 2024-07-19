interface IWidgetData {
  Id: number
  WidgetId: string
  Name: string
  WidgetType: number
  DataSource: string
  FilterId: number
  DefaultOptions: string
  IsDefault: number
  CreationUser: number
  CreationDate: string
  ModificationUser: number
  ModificationDate: string
}

export const config = {
  footer: true,
  manual: true,
  page: 0,
  pageSize: 20,
  pages: 6,
  rows: 102,
  loading: false,
  sortBy: [
    {
      id: 'CreationDate',
      desc: true,
    },
  ],
  defaultPageSize: 20,
  pageSizeOptions: [20, 50, 100],
  sortable: true,
  exportable: false,
  filterable: true,
  orderable: false,
  excludable: false,
  configurable: false,
  activeFilter: null,
}

export const headers = [
  {
    type: 'select',
    id: 'select',
    name: 'Select',
  },
  {
    width: 150,
    sortable: true,
    resizable: true,
    filterable: false,
    minWidth: 100,
    minResizeWidth: 100,
    show: true,
    id: 'WidgetId',
    accessor: 'WidgetId',
    style: {},
    name: 'Widget Id',
  },
  {
    width: 110,
    sortable: true,
    resizable: true,
    filterable: false,
    minWidth: 100,
    minResizeWidth: 100,
    show: true,
    id: 'Name',
    name: 'Name',
    accessor: 'Name',
    style: {},
    type: 'sortable',
  },
  {
    width: 110,
    sortable: true,
    resizable: true,
    filterable: false,
    minWidth: 100,
    minResizeWidth: 100,
    show: true,
    id: 'WidgetType',
    name: 'Widget Type',
    accessor: 'WidgetType',
    type: 'sortable',
    style: {},
  },
  {
    width: 150,
    sortable: true,
    resizable: true,
    filterable: false,
    minWidth: 100,
    minResizeWidth: 100,
    show: true,
    id: 'CreationDate',
    name: 'Creation date',
    style: {},
    type: 'date',
  },
  {
    Header: '',
    id: 'grid-actions',
    name: 'Actions',
    sortable: false,
    resizable: false,
    type: 'actions',
    title: 'Actions',
    items: [
      {
        type: 'separator',
        id: 'separator',
        action: () => console.log('separator'),
      },
      {
        id: 'edit',
        label: 'Edit',
        action: (row: IWidgetData) => console.log(row),
      },
      {
        id: 'delete',
        label: 'Delete',
        action: (row: IWidgetData) => console.log(row),
      },
    ],
  },
]

export const data = [
  {
    Id: 1,
    WidgetId: '1',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 2,
    WidgetId: '2',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 3,
    WidgetId: '3',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 4,
    WidgetId: '4',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
  {
    Id: 5,
    WidgetId: '5',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 6,
    WidgetId: '6',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 7,
    WidgetId: '7',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 8,
    WidgetId: '8',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
  {
    Id: 9,
    WidgetId: '9',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 10,
    WidgetId: '10',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 11,
    WidgetId: '11',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 12,
    WidgetId: '12',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
  {
    Id: 13,
    WidgetId: '13',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 14,
    WidgetId: '14',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 15,
    WidgetId: '16',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 17,
    WidgetId: '17',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
  {
    Id: 18,
    WidgetId: '18',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 19,
    WidgetId: '19',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 20,
    WidgetId: '20',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 21,
    WidgetId: '21',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
  {
    Id: 23,
    WidgetId: '23',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 24,
    WidgetId: '24',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 25,
    WidgetId: '25',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 26,
    WidgetId: '26',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
  {
    Id: 27,
    WidgetId: '27',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 28,
    WidgetId: '28',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 29,
    WidgetId: '29',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 30,
    WidgetId: '30',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
  {
    Id: 31,
    WidgetId: '31',
    Name: 'schilling_dashboard_demo',
    WidgetType: 2,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"schilling_dashboard_demo","Function":"Sum","CategorizeBy":"CustomerNumber","AggBy":"CustomerTransactionAmount","SortBy":{"id":"CustomerNumber","desc":false}}',
    FilterId: 259,
    DefaultOptions:
      '{"Theme":"blue","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-07-01T13:28:34+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-07-01T13:28:34+02:00',
  },
  {
    Id: 32,
    WidgetId: '32',
    Name: 'progress',
    WidgetType: 7,
    DataSource:
      '{"View":"VwDebtorTransactionsV01","Description":"progress test","Filter2":259}',
    FilterId: 1785,
    DefaultOptions: '{"Theme":"green"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:42:49+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:42:49+02:00',
  },
  {
    Id: 33,
    WidgetId: '33',
    Name: 'martins egen widget',
    WidgetType: 2,
    DataSource:
      '{"View":"VwRightsSalesAggrV01","Description":"martins egen widget","Function":"Sum","CategorizeBy":"Year","AggBy":"TotalIncome","SortBy":{"id":"Year","desc":false}}',
    FilterId: 1794,
    DefaultOptions:
      '{"Theme":"red","BarFill":"solid","ScalingFunction":"sqrt"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-18T13:39:20+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-18T13:39:20+02:00',
  },
  {
    Id: 34,
    WidgetId: '34',
    Name: 'Min Fine Widget',
    WidgetType: 7,
    DataSource:
      '{"View":"VwRAgentAgreementV01","Description":"Min Fine Widget2","Filter2":244}',
    FilterId: 59,
    DefaultOptions: '{"Theme":"blue"}',
    IsDefault: 0,
    CreationUser: 500,
    CreationDate: '2024-06-12T11:49:31+02:00',
    ModificationUser: 500,
    ModificationDate: '2024-06-12T11:49:31+02:00',
  },
]

export const filters = [
  {
    key: 'Name',
    placeholder: 'Filter by name',
  },
  {
    key: 'WidgetId',
    placeholder: 'Filter by widgetId',
  },
  {
    key: 'WidgetType',
    placeholder: 'Filter by widgetType',
  },
  {
    key: 'CreationDate',
    placeholder: 'Filter by Creation date',
  },
]
export const PokeFilters = [
  {
    key: 'name',
    placeholder: 'Search by name',
  },
  {
    key: 'url',
    placeholder: 'Search by URL',
  },
]

export const pokeHeaders = [
  {
    type: 'select',
    id: 'select',
    name: 'Select',
  },
  { id: 'name', label: 'Name', name: 'Poke name', type: 'sortable' },
  { id: 'url', label: 'URL', name: 'Poke URL', type: 'sortable' },
  {
    Header: '',
    id: 'grid-actions',
    name: 'Actions',
    sortable: false,
    resizable: false,
    type: 'actions',
    title: 'Actions',
    items: [
      {
        type: 'separator',
        id: 'separator',
        action: () => console.log('separator'),
      },
      {
        id: 'edit',
        label: 'Edit',
        action: (row: IWidgetData) => console.log(row),
      },
      {
        id: 'delete',
        label: 'Delete',
        action: (row: IWidgetData) => console.log(row),
      },
    ],
  },
]

export const tableExampleData = {
  headers,
  data,
  config,
  filters,
  PokeFilters,
  pokeHeadersExample: pokeHeaders,
}
