"use client";

import { useDashboard } from "@/hooks/useDashboard";
import MetricComponent from "@/components/dashboard/MetricComponent";
import OrdersComponent from "@/components/dashboard/OrdersComponent";
import MachinesComponent from "@/components/dashboard/MachinesComponent";

export default function Home() {
  const { machines, orders, metrics, loadingBase } = useDashboard();

  const loading = loadingBase;

  return (
    <div className="flex flex-col lg:flex-row p-6 mb-6 lg:mb-0">
      <div className="flex-1 lg:h-[calc(100vh-120pt)] scroll-auto pr-4 ">
        <MetricComponent loading={loading} metrics={metrics} />

        <MachinesComponent loading={loading} machines={machines} limit={8} />

        <OrdersComponent loading={loading} orders={orders} limit={8} />
      </div>
    </div>
  );
}
