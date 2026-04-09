import { Order } from "../types/Order";

const now = Date.now();

export const orders: Order[] = [
  {
    id: "O1",
    product: "Widget A",
    quantity: 100,
    produced: 40,
    machineId: "M1",
    status: "in_progress",
    updatedAt: now - 2000,
  },
  {
    id: "O2",
    product: "Widget B",
    quantity: 200,
    produced: 200,
    machineId: "M3",
    status: "done",
    updatedAt: now - 15000,
  },
  {
    id: "O3",
    product: "Gear X",
    quantity: 150,
    produced: 60,
    machineId: "M4",
    status: "in_progress",
    updatedAt: now - 3000,
  },
  {
    id: "O4",
    product: "Bolt Y",
    quantity: 300,
    produced: 120,
    machineId: "M6",
    status: "in_progress",
    updatedAt: now - 5000,
  },
  {
    id: "O5",
    product: "Panel Z",
    quantity: 80,
    produced: 20,
    machineId: "M8",
    status: "in_progress",
    updatedAt: now - 1000,
  },
  {
    id: "O6",
    product: "Frame Q",
    quantity: 50,
    produced: 0,
    machineId: "M2",
    status: "pending",
    updatedAt: now - 20000,
  },
  {
    id: "O7",
    product: "Pipe W",
    quantity: 120,
    produced: 120,
    machineId: "M5",
    status: "done",
    updatedAt: now - 10000,
  },
];