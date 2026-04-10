import { Machine } from "@/types/Machine";
import CardMachine from "../cards/CardMachine";

type Props = {
  machines: Machine[];
  limit: number;
  loading: boolean;
};

export default function MachinesDashboard({
  machines,
  loading,
  limit = 8,
}: Props) {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-2">Machines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
        {machines.slice(0, limit).map((m) => (
          <CardMachine
            key={m.id}
            name={m.name}
            status={m.status}
            currentOrderId={m.currentOrderId}
            updatedAt={m.updatedAt}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
}
