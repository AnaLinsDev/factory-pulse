"use client";

import Table, { Column } from "@/components/details/Table";
import { useDashboard } from "@/hooks/useDashboard";
import { Machine } from "@/types/Machine";

export default function MachinesPage() {
  const { machines } = useDashboard();

  const columns = [
    {
      header: "Machine",
      accessor: "name",
    },
    {
      header: "Status",
      accessor: (m: Machine) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            m.status === "running"
              ? "bg-running/20 text-running"
              : m.status === "idle"
                ? "bg-idle/20 text-idle"
                : "bg-stopped/20 text-stopped"
          }`}
        >
          {m.status}
        </span>
      ),
    },
    {
      header: "Current Order",
      accessor: (m: Machine) =>
        m.currentOrderId || <span className="opacity-50">—</span>,
    },
  ] satisfies Column<Machine>[];

  return (
    <div className="p-6 h-[calc(100vh-105px)] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Machines List</h1>
      <Table<Machine> data={machines} columns={columns} />
    </div>
  );
}
