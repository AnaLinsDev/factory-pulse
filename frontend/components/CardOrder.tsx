type Props = {
  id: string;
  product: string;
  produced: number;
  quantity: number;
  status: "pending" | "in_progress" | "done";
  updatedAt: number;
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
}: Props) {
  const LocaleUpdatedAt = new Date(updatedAt).toLocaleString().split(", ")[1];

  return (
    <div className="p-2 lg:p-3 rounded-2xl bg-card border border-white/5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-4">
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
        <div>
          {LocaleUpdatedAt ? `Updated ${LocaleUpdatedAt}` : "No updates yet"}
        </div>
      </div>
    </div>
  );
}
