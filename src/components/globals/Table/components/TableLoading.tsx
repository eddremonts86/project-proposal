interface TableLoadingProps {
  colspan?: number;
  className?: string;
}

export default function TableLoading({
  colspan = 1,
  className = "p-2 text-center border border-slate-300",
}: Readonly<TableLoadingProps>) {
  return (
    <tr className={className}>
      <td
        colSpan={colspan}
        className="py-12 text-center"
      >
        Loading...
      </td>
    </tr>
  );
}
