"use client";

import Table, { Column } from "@/components/details/Table";
import { useDashboard } from "@/hooks/useDashboard";
import { Order } from "@/types/Order";

export default function OrderPage() {
  const { orders } = useDashboard();

  const columns = [
    {
      header: "Product",
      accessor: "product",
    },
    {
      header: "Machine",
      accessor: "machineId",
    },
    {
      header: "Produced",
      accessor: "produced",
    },
    {
      header: "Quantity",
      accessor: "quantity",
    },
    {
      header: "Progress",
      accessor: (o: Order) => {
        const progress = Math.round((o.produced / o.quantity) * 100);

        return (
          <div className="w-40">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs opacity-70">{progress}%</span>
          </div>
        );
      },
    },
    {
      header: "Status",
      accessor: (o: Order) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            o.status === "in_progress"
              ? "bg-running/20 text-running"
              : o.status === "done"
                ? "bg-idle/20 text-idle"
                : "bg-maintenance/20 text-maintenance"
          }`}
        >
          {o.status}
        </span>
      ),
    },
  ] satisfies Column<Order>[];

  return (
    <div className="p-6 h-[calc(100vh-105px)] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Production Orders List</h1>
      <Table<Order> data={orders} columns={columns} />
    </div>
  );
}
