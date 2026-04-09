type MachineStatus = "running" | "idle" | "stopped";

export interface Machine {
  id: string;
  name: string;
  status: MachineStatus;
  currentOrderId?: string;
  updatedAt: number; // Date.now()
}
