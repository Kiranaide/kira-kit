import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const KDataTable = ({ columns, data, pagination }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <KTable>
          <KTableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <KTableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <KTableHead key={header.id}>
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </KTableHead>
                ))}
              </KTableRow>
            ))}
          </KTableHeader>
          <KTableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <KTableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <KTableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </KTableCell>
                  ))}
                </KTableRow>
              ))
            ) : (
              <KTableRow>
                <KTableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Results.
                </KTableCell>
              </KTableRow>
            )}
          </KTableBody>
        </KTable>
      </div>
    </div>
  );
};

export { KDataTable };
