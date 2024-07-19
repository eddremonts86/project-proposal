interface TableLoadingProps {
  colspan?: number
  className?: string
}

/**
 * Renders a loading state for the table.
 *
 * @component
 * @param {number} colspan - The number of columns the loading state should span. Default is 1.
 * @param {string} className - The CSS class name for the loading state container. Default is 'p-2 text-center border border-slate-300'.
 * @returns {JSX.Element} The loading state component.
 */
export default function TableLoading({
  colspan = 1,
  className = 'p-2 text-center border border-slate-300',
}: Readonly<TableLoadingProps>) {
  return (
    <tr className={className}>
      <td colSpan={colspan} className="py-12 text-center">
        Loading...
      </td>
    </tr>
  )
}
