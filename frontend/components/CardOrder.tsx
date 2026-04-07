type Props = {
  product: string;
  produced: number;
  quantity: number;
  status: "pending" | "in_progress" | "done";
};

const statusStyles = {
  pending: "bg-green-500/10 text-green-500",
  in_progress: "bg-yellow-500/10 text-yellow-500",
  done: "bg-blue-500/10 text-blue-500",
};

export default function CardOrder({
  product,
  produced,
  quantity,
  status,
}: Props) {
  const progress = Math.floor((produced / quantity) * 100);

  return (
    <div className="p-5 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-200 border border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-semibold text-lg">{product}</h3>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="opacity-70">Progress</span>
        <span className="font-medium"> {progress}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 dark:bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
