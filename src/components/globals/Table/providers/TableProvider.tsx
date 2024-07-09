import { createContext, useState, useMemo, useCallback } from "react";

export const TableContext = createContext(null);
export default function TableContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = useCallback(
    (value: number| null) => {
      if (value) {
        setPage(value);
      }
    },
    [setPage]
  );

  const handleChangeRowsPerPage = useCallback((value: number| null) => {
    if (value) {
      setRowsPerPage(value);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      data,
      page,
      rowsPerPage,
      setData,
      handleChangePage,
      handleChangeRowsPerPage,
    }),
    [
      data,
      page,
      rowsPerPage,
      setData,
      handleChangePage,
      handleChangeRowsPerPage,
    ]
  );

  return (
    <TableContext.Provider value={contextValue as any}>
      {children}
    </TableContext.Provider>
  );
}
