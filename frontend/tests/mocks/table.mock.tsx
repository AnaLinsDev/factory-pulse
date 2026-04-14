import type { ReactNode } from "react";

export function createTableMock<T>() {
  const MockTable = (props: {
    data: T[];
    columns: {
      header: string;
      accessor: keyof T | ((item: T) => ReactNode);
    }[];
  }) => {
    const first = props.data?.[0];

    const renderValue = (value: unknown): ReactNode => {
      if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        return value;
      }

      if (value === null || value === undefined) {
        return null;
      }

      // React element or fallback
      return value as ReactNode;
    };

    return (
      <div data-testid="table">
        <div data-testid="data">{JSON.stringify(props.data)}</div>
        <div data-testid="columns-length">{props.columns.length}</div>

        {first &&
          props.columns.map((col, i) => {
            let value: unknown;

            if (typeof col.accessor === "function") {
              value = col.accessor(first);
            } else {
              value = (first as Record<string, unknown>)[
                col.accessor as string
              ];
            }

            return (
              <div key={i} data-testid={`col-${i}`}>
                {renderValue(value)}
              </div>
            );
          })}
      </div>
    );
  };

  MockTable.displayName = "MockTable";

  return MockTable;
}