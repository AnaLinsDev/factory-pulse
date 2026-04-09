const API_URL = process.env.NEXT_PUBLIC_API_URL;

const prefix = `${API_URL}/api/dashboard`;

export async function getMachines() {
  const res = await fetch(`${prefix}/machines`);
  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${prefix}/orders`);
  return res.json();
}

export async function getMetrics() {
  const res = await fetch(`${prefix}/metrics`);
  return res.json();
}

export async function getMachineHistory(machineId: string) {
  const res = await fetch(`${prefix}/machines/${machineId}/history`);
  return res.json();
}

export async function getOrderHistory(orderId: string) {
  const res = await fetch(`${prefix}/orders/${orderId}/history`);
  return res.json();
}
