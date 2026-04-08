"use client";

import { useDashboard } from "@/hooks/useDashboard";
import MetricComponent from "@/components/MetricComponent";
import OrdersComponent from "@/components/OrdersComponent";
import MachinesComponent from "@/components/MachinesComponent";

export default function Home() {
  const { machines, orders, metrics } = useDashboard();

  return (
    <div className="p-6 mb-6 lg:mb-0">
      <div className="lg:h-[calc(100vh-120pt)] scroll-auto pr-4 ">
        <MetricComponent metrics={metrics} />

        <MachinesComponent machines={machines} limit={8} />

        <OrdersComponent orders={orders} limit={8} />
      </div>
    </div>
  );
}
