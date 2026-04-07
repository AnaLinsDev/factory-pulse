const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getMachines() {
  const res = await fetch(`${API_URL}/api/dashboard/machines`);
  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${API_URL}/api/dashboard/orders`);
  return res.json();
}

export async function getMetrics() {
  const res = await fetch(`${API_URL}/api/dashboard/metrics`);
  return res.json();
}