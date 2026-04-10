import { useDashboard } from "@/hooks/useDashboard";

export default function LiveInfo() {
  const { status } = useDashboard();

  return (
    <div className="flex items-center gap-2 my-auto bg-background px-2 py-1 mb-5 lg:mb-0 lg:px-4 lg:py-2 rounded-2xl">
      <span
        className={`
                w-2 h-2 lg:w-3 lg:h-3 rounded-full
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
                text-xs lg:text-sm font-semibold
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
