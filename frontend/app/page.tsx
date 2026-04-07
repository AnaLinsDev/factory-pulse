"use client";

import { useDashboard } from "@/hooks/useDashboard";
import CardMetric from "../components/CardMetric";

export default function Home() {
  const { machines, orders, metrics } = useDashboard();

  return (
    <div className="p-6">
      <div className="h-[calc(100vh-120px)] overflow-y-scroll pr-4">
        {/* Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <CardMetric title="Total Machines" value={metrics?.totalMachines} />
          <CardMetric title="Running" value={metrics?.running} />
          <CardMetric title="Idle" value={metrics?.idle} />
          <CardMetric title="Stopped" value={metrics?.stopped} />
        </div>

        {/* Machines */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Machines</h2>
          <div className="grid grid-cols-3 gap-4">
            {machines.map((m) => (
              <div key={m.id} className="p-4 rounded-xl shadow bg-white border">
                <h3>{m.name}</h3>
                <p>Status: {m.status}</p>
                <p>Order: {m.currentOrderId || "-"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Orders */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <div className="grid grid-cols-2 gap-4">
            {orders.map((o) => (
              <div key={o.id} className="p-4 rounded-xl shadow bg-white border">
                <h3>{o.product}</h3>
                <p>
                  Progress: {o.produced}/{o.quantity}
                </p>
                <p>Status: {o.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
