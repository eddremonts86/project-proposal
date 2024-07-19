import TableColumnsFilter from './TableColumnsFilter'
import TableFilters from './TableFilters'

export default function FiltersContainer({ filters, table }) {
  return (
    <div className="flex flex-col items-start justify-start gap-2 py-5 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-3">
        {filters.map((item) => (
          <TableFilters
            table={table}
            filterKey={item.key}
            key={item.key}
            placeholder={item.placeholder}
          />
        ))}
      </div>
      <TableColumnsFilter table={table} />
    </div>
  )
}
