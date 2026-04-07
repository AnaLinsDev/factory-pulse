"use client";

import { useDashboard } from "@/hooks/useDashboard";

export default function MachinesPage() {
  const { machines } = useDashboard();

  return (
    <div className="p-6 space-y-6 h-[calc(100vh-105px)]">
      {machines.map((m) => (
        <h1 key={m.id}>{m.name}</h1>
      ))}
    </div>
  );
}
