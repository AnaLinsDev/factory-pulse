export type MetricStatus = "pending" | "in_progress" | "done";

export interface Order {
  id: string;
  product: string;
  quantity: number;
  produced: number;
  machineId: string;
  status: MetricStatus;
  updatedAt: number; // Date.now()
}