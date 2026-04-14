import type { Order } from "@/types/Order";
import type { Machine } from "@/types/Machine";

export const mockOrders: Order[] = [
  {
    id: "1",
    product: "Widget A",
    machineId: "M-01",
    produced: 50,
    quantity: 100,
    status: "in_progress",
    updatedAt: Date.now(),
  },
];

export const mockMachines: Machine[] = [
  {
    id: "1",
    name: "Machine A",
    status: "running",
    currentOrderId: "ORD-1",
    updatedAt: Date.now(),
  },
];
