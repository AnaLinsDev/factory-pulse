"use client";

import { useDashboard } from "@/hooks/useDashboard";

export default function OrderPage() {
  const { orders } = useDashboard();

  return (
    <div className="p-6 space-y-6 h-[calc(100vh-105px)]">
      {orders.map((m) => (
        <h1 key={m.id}>{m.produced}</h1>
      ))}
    </div>
  );
}
