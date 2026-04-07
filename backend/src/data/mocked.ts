import { Machine } from "../types/Machine";
import { Order } from "../types/Order";

export const machines: Machine[] = [
  { id: "M1", name: "Cutter", status: "running", currentOrderId: "O1" },
  { id: "M2", name: "Assembler", status: "idle" },
  { id: "M3", name: "Painter", status: "stopped" },
  { id: "M4", name: "Welder", status: "running", currentOrderId: "O3" },
  { id: "M5", name: "Driller", status: "idle" },
  { id: "M6", name: "Polisher", status: "running", currentOrderId: "O4" },
  { id: "M7", name: "Inspector", status: "idle" },
  { id: "M8", name: "Packager", status: "running", currentOrderId: "O5" },
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
  {
    id: "O3",
    product: "Gear X",
    quantity: 150,
    produced: 60,
    machineId: "M4",
    status: "in_progress",
  },
  {
    id: "O4",
    product: "Bolt Y",
    quantity: 300,
    produced: 120,
    machineId: "M6",
    status: "in_progress",
  },
  {
    id: "O5",
    product: "Panel Z",
    quantity: 80,
    produced: 20,
    machineId: "M8",
    status: "in_progress",
  },
  {
    id: "O6",
    product: "Frame Q",
    quantity: 50,
    produced: 0,
    machineId: "M2",
    status: "pending",
  },
  {
    id: "O7",
    product: "Pipe W",
    quantity: 120,
    produced: 120,
    machineId: "M5",
    status: "done",
  },
];