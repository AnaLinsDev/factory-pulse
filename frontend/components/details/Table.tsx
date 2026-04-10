export type Column<T> =
  | {
      header: string;
      accessor: keyof T;
    }
  | {
      header: string;
      accessor: (row: T) => React.ReactNode;
    };

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export default function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-blue-100 text-left">
          <tr className="border-b border-border">
            {columns.map((col, index) => (
              <th key={index} className="p-4 font-medium">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border hover:bg-gray-50 transition"
            >
              {columns.map((col, j) => {
                const value =
                  typeof col.accessor === "function"
                    ? col.accessor(row)
                    : (row[col.accessor] as React.ReactNode);

                return (
                  <td key={j} className="p-4">
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
