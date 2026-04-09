import { useDashboard } from "@/hooks/useDashboard";

export default function LiveInfo() {
  const { status } = useDashboard();

  return (
    <div className="flex items-center gap-2 my-auto bg-background px-4 py-2 rounded-2xl">
      <span
        className={`
                w-3 h-3 rounded-full
                ${
                  status === "live"
                    ? "bg-green-500 animate-pulse"
                    : status === "offline"
                      ? "bg-red-500"
                      : "bg-yellow-500 animate-pulse"
                }
            `}
      />

      <span
        className={`
                text-sm font-semibold
                ${
                  status === "live"
                    ? "text-green-600"
                    : status === "offline"
                      ? "text-red-600"
                      : "text-yellow-600"
                }
              `}
      >
        {status === "live"
          ? "LIVE"
          : status === "offline"
            ? "OFFLINE"
            : "CONNECTING"}
      </span>
    </div>
  );
}
