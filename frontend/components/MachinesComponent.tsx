import { Machine } from "@/types/Machine";
import CardMachine from "./CardMachine";

type Props = {
  machines: Machine[];
  limit: number;
};

export default function MachinesComponent({ machines, limit = 8 }: Props) {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-2">Machines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {machines.slice(0, limit).map((m) => (
          <CardMachine
            key={m.id}
            name={m.name}
            status={m.status}
            currentOrderId={m.currentOrderId}
          />
        ))}
      </div>
    </div>
  );
}
