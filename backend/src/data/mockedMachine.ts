import { Machine } from "../types/Machine";

const now = Date.now();

export const machines: Machine[] = [
  {
    id: "M1",
    name: "Cutter",
    status: "running",
    currentOrderId: "O1",
    updatedAt: now - 2000,
  },
  {
    id: "M2",
    name: "Assembler",
    status: "idle",
    updatedAt: now - 5000,
  },
  {
    id: "M3",
    name: "Painter",
    status: "stopped",
    updatedAt: now - 12000,
  },
  {
    id: "M4",
    name: "Welder",
    status: "running",
    currentOrderId: "O3",
    updatedAt: now - 1000,
  },
  {
    id: "M5",
    name: "Driller",
    status: "idle",
    updatedAt: now - 8000,
  },
  {
    id: "M6",
    name: "Polisher",
    status: "running",
    currentOrderId: "O4",
    updatedAt: now - 3000,
  },
  {
    id: "M7",
    name: "Inspector",
    status: "idle",
    updatedAt: now - 15000,
  },
  {
    id: "M8",
    name: "Packager",
    status: "running",
    currentOrderId: "O5",
    updatedAt: now - 700,
  },
];
