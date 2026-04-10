import { Metrics } from "@/types/Metrics";
import CardMetric from "../cards/CardMetric";

type Props = {
  metrics: Metrics;
  loading: boolean;
};

export default function MetricDashboard({ metrics, loading }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
      <CardMetric
        title="Total Machines"
        value={metrics?.totalMachines}
        className="border border-border"
        loading={loading}
      />

      <CardMetric
        title="Running"
        value={metrics?.running}
        className="bg-running/10 text-running border border-running/20"
        loading={loading}
      />

      <CardMetric
        title="Idle"
        value={metrics?.idle}
        className="bg-idle/10 text-idle border border-idle/20"
        loading={loading}
      />

      <CardMetric
        title="Stopped"
        value={metrics?.stopped}
        className="bg-stopped/10 text-stopped border border-stopped/20"
        loading={loading}
      />
    </div>
  );
}
