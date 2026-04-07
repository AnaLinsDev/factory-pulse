import { Machine } from "../types/Machine";
import { Order } from "../types/Order";

export const machines: Machine[] = [
  { id: "M1", name: "Cutter", status: "running", currentOrderId: "O1" },
  { id: "M2", name: "Assembler", status: "idle" },
  { id: "M3", name: "Painter", status: "stopped" },
];

export const orders: Order[] = [
  {
    id: "O1",
    product: "Widget A",
    quantity: 100,
    produced: 40,
    machineId: "M1",
    status: "in_progress",
  },
  {
    id: "O2",
    product: "Widget B",
    quantity: 200,
    produced: 200,
    machineId: "M3",
    status: "done",
  },
];