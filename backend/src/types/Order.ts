export interface Order {
  id: string;
  product: string;
  quantity: number;
  produced: number;
  machineId: string;
  status: "pending" | "in_progress" | "done";
  updatedAt: number; // Date.now()
}