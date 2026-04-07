"use client";

import { useDashboard } from "@/hooks/useDashboard";

export default function OrderPage() {
  const { orders } = useDashboard();

  return (
    <div className="p-6 h-[calc(100vh-105px)] overflow-y-auto">
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          {/* Header */}
          <thead className="bg-gray-100 text-left">
            <tr className="border-b border-border">
              <th className="p-4 font-medium">Product</th>
              <th className="p-4 font-medium">Machine</th>
              <th className="p-4 font-medium">Produced</th>
              <th className="p-4 font-medium">Quantity</th>
              <th className="p-4 font-medium">Progress</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {orders.map((o) => {
              const progress = Math.round((o.produced / o.quantity) * 100);

              return (
                <tr
                  key={o.id}
                  className="border-b border-border hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">{o.product}</td>

                  <td className="p-4">{o.machineId}</td>

                  <td className="p-4">{o.produced}</td>

                  <td className="p-4">{o.quantity}</td>

                  <td className="p-4 w-50">
                    <div className="w-full bg-gray-200 dark:bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-xs opacity-70">{progress}%</span>
                  </td>

                  {/* Status */}
                  <td className="p-4">
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
