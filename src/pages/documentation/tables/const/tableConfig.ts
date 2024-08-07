import {
  TUColumnTypes,
  TUConfig,
  TUFilter,
  TUHeader,
} from '@/components/globals/table/types'

export const config: TUConfig = {
  pageSize: [5, 20, 50, 100],
  pagination: {
    pageIndex: 0,
    pageSize: 5,
  },
  sortBy: [
    {
      id: 'first_name',
      desc: true,
    },
    {
      id: 'email',
      desc: false,
    },
  ],
}
export const headers: TUHeader[] = [
  {
    id: 'select',
    name: 'Select',
    width: 50,
    type: TUColumnTypes.select,
  },
  {
    id: 'first_name',
    name: 'Name',
    width: 150,
    type: TUColumnTypes.sortable,
  },

  {
    id: 'email',
    name: 'Email',
    width: 150,
    type: TUColumnTypes.text,
  },
  {
    id: 'identification_number',
    name: 'Identification Number',
    width: 150,
    type: TUColumnTypes.text,
  },
  {
    id: 'user_name',
    name: 'User name',
    width: 150,
    type: TUColumnTypes.sortable,
  },
  {
    id: 'user_type',
    name: 'Type',
    width: 150,
    type: TUColumnTypes.sortable,
  },
  {
    id: 'grid-actions',
    width: 70,
    name: 'Actions',
    type: 'actions',
    title: 'User actions',
    items: [
      {
        type: TUColumnTypes.separator,
        id: 'separator',
      },
      {
        id: 'edit',
        label: 'Edit',
        icon: 'mdi mdi-pencil',
        action: (row: unknown) => console.log(row),
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: 'mdi mdi-delete',
        action: (row: unknown) => console.log(row),
      },
    ],
  },
]

export const filters: TUFilter[] = [
  {
    key: 'first_name',
    placeholder: 'Filter by name',
  },
  {
    key: 'email',
    placeholder: 'Filter by email',
  },
  {
    key: 'identification_number',
    placeholder: 'Filter by Identification number',
  },
  {
    key: 'user_type',
    placeholder: 'Filter by type',
  },
]

export const tableConfig = {
  headers,
  config,
  filters,
}
