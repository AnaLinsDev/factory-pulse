"use client";

import { useDashboard } from "@/hooks/useDashboard";
import MetricDashboard from "@/components/dashboard/MetricDashboard";
import OrdersDashboard from "@/components/dashboard/OrdersDashboard";
import MachinesDashboard from "@/components/dashboard/MachinesDashboard";

export default function Home() {
  const { machines, orders, metrics, loadingBase } = useDashboard();

  const loading = loadingBase;

  return (
    <div className="flex flex-col lg:flex-row p-6 mb-6 lg:mb-0 max-w-300 mx-auto">
      <div className="flex-1 lg:h-[calc(100vh-120pt)] scroll-auto pr-4 ">
        <MetricDashboard loading={loading} metrics={metrics} />

        <MachinesDashboard loading={loading} machines={machines} limit={8} />

        <OrdersDashboard loading={loading} orders={orders} limit={8} />
      </div>
    </div>
  );
}
