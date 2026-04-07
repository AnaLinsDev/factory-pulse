import { machines, orders } from "../data/mocked";
import { Metrics } from "../types/Metrics";

export function calculateMetrics(): Metrics {
  const totalMachines = machines.length;

  const running = machines.filter((m) => m.status === "running").length;
  const idle = machines.filter((m) => m.status === "idle").length;
  const stopped = machines.filter((m) => m.status === "stopped").length;

  const efficiency =
    orders.reduce((acc, o) => acc + o.produced / o.quantity, 0) /
    orders.length;

  return {
    totalMachines,
    running,
    idle,
    stopped,
    efficiency: Number((efficiency * 100).toFixed(2)),
  };
}