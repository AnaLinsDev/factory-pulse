import { MachineStatus } from "@/types/Machine";
import Skeleton from "../Skeleton";

type Props = {
  name: string;
  currentOrderId: string | undefined;
  status: MachineStatus;
  updatedAt: number;
  loading: boolean;
};

const statusStyles = {
  running: "bg-green-500/10 text-green-500",
  idle: "bg-yellow-500/10 text-yellow-500",
  stopped: "bg-stopped/10 text-stopped",
};

export default function CardMachine({
  name,
  currentOrderId,
  status,
  updatedAt,
  loading,
}: Props) {
  const LocaleUpdatedAt = new Date(updatedAt).toLocaleString().split(", ")[1];
  const containerClass = `p-2 lg:p-3 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-200 border border-white/5`;

  if (loading) {
    return (
      <div className={containerClass}>
        <Skeleton className="h-4 w-20 my-auto mb-1" />
        <Skeleton className="h-6 w-16" />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">{name}</h3>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="flex justify-between text-xs opacity-60 my-1 lg:my-2">
        <p>Order: {currentOrderId ? `#${currentOrderId}` : "---"}</p>
        <div className="ml-8">
          {LocaleUpdatedAt ? `Updated ${LocaleUpdatedAt}` : "No updates yet"}
        </div>
      </div>
    </div>
  );
}
