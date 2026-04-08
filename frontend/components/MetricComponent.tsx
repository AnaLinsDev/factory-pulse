import { Metrics } from "@/types/Metrics";
import CardMetric from "./CardMetric";

type Props = {
  metrics: Metrics;
};

export default function MetricComponent({ metrics }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
      <CardMetric
        title="Total Machines"
        value={metrics?.totalMachines}
        className="border border-border"
      />

      <CardMetric
        title="Running"
        value={metrics?.running}
        className="bg-running/10 text-running border border-running/20"
      />

      <CardMetric
        title="Idle"
        value={metrics?.idle}
        className="bg-idle/10 text-idle border border-idle/20"
      />

      <CardMetric
        title="Stopped"
        value={metrics?.stopped}
        className="bg-stopped/10 text-stopped border border-stopped/20"
      />
    </div>
  );
}
