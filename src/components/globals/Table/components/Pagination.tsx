import TablePagination from "@mui/material/TablePagination";

interface TablePaginationProps {
  rowsLength: number;
  rowsPerPage: number;
  page: number;
  rowsPerPageOptions?: number[];
  handleChangePage: (newPage: number) => void;
  handleChangeRowsPerPage: (value: number) => void;
}

export default function Pagination({
  rowsPerPageOptions = [5, 10, 25, 50, 100], // Declare and assign a default value to rowsPerPageOptions
  ...props
}: Readonly<TablePaginationProps>) {
  const {
    rowsLength,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;

  return (
    <TablePagination
      className="w-full border-0"
      rowsPerPageOptions={rowsPerPageOptions}
      count={rowsLength}
      rowsPerPage={rowsPerPage}
      page={page}
      onRowsPerPageChange={(e) =>
        handleChangeRowsPerPage(e.target.value as unknown as number)
      }
      onPageChange={(_, value) => {
        handleChangePage(value as unknown as number);
      }}
    />
  );
}
