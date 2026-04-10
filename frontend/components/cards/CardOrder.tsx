import { MetricStatus } from "@/types/Order";
import Skeleton from "../Skeleton";

type Props = {
  id: string;
  product: string;
  produced: number;
  quantity: number;
  status: MetricStatus;
  updatedAt: number;
  loading: boolean;
};

const statusStyles = {
  pending: "bg-green-500/10 text-green-500",
  in_progress: "bg-yellow-500/10 text-yellow-500",
  done: "bg-blue-500/10 text-blue-500",
};

export default function CardOrder({
  id,
  product,
  produced,
  quantity,
  status,
  updatedAt,
  loading,
}: Props) {
  const LocaleUpdatedAt = new Date(updatedAt).toLocaleString().split(", ")[1];
  const containerClass =
    "p-2 lg:p-3 rounded-2xl bg-card border border-white/5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col";

  if (loading) {
    return (
      <div className={containerClass}>
        <Skeleton className="h-4 w-20 mb-1" />
        <Skeleton className="h-6 w-16" />
      </div>
    );
  }

  return (
    <div className={`gap-4 ${containerClass}`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm leading-tight">{product}</h3>
          <span className="text-xs opacity-60">Order #{id}</span>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${statusStyles[status]}`}
        >
          {status.replace("_", " ")}
        </span>
      </div>

      {/* Timestamp */}
      <div className="flex justify-between text-xs opacity-60">
        <p>{`${produced}/${quantity}`}</p>
        <div className="ml-8">
          {LocaleUpdatedAt ? `Updated ${LocaleUpdatedAt}` : "No updates yet"}
        </div>
      </div>
    </div>
  );
}
