type Props = {
  name: string;
  currentOrderId: string | undefined;
  status: "running" | "idle" | "stopped";
};

const statusStyles = {
  running: "bg-green-500/10 text-green-500",
  idle: "bg-yellow-500/10 text-yellow-500",
  stopped: "bg-blue-500/10 text-blue-500",
};

export default function CardMachine({ name, currentOrderId, status }: Props) {
  return (
    <div className="p-5 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-200 border border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <p>Order: {currentOrderId}</p>
    </div>
  );
}
