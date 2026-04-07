"use client";

import { useDashboard } from "@/hooks/useDashboard";

export default function MachinesPage() {
  const { machines } = useDashboard();

  return (
    <div className="p-6 h-[calc(100vh-105px)] overflow-y-auto">
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          {/* Header */}
          <thead className="bg-gray-100  text-left ">
            <tr className="border-b border-border">
              <th className="p-4 font-medium">Machine</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Current Order</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {machines.map((m) => (
              <tr
                key={m.id}
                className="border-b border-border hover:bg-muted/30 transition"
              >
                <td className="p-4 font-medium">{m.name}</td>

                <td className="p-4">
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
                </td>

                <td className="p-4">
                  {m.currentOrderId || <span className="opacity-50">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
