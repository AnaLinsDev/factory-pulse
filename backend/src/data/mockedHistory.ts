const now = Date.now();
const oneDay = 24 * 60 * 60 * 1000;

export const machineStatusHistory = [
  {
    machineId: "M1",
    history: [
      { status: "running", timestamp: now - 1000 * 60 * 2 },
      { status: "idle", timestamp: now - 1000 * 60 * 10 },
      { status: "running", timestamp: now - 1000 * 60 * 30 },
    ],
  },
  {
    machineId: "M3",
    history: [
      { status: "stopped", timestamp: now - 1000 * 60 * 5 },
      { status: "running", timestamp: now - 1000 * 60 * 20 },
    ],
  },
];

export const orderProductionHistory = [
  {
    orderId: "O1",
    daily: [
      { date: new Date(now - 3 * oneDay).toISOString(), produced: 10 },
      { date: new Date(now - 2 * oneDay).toISOString(), produced: 15 },
      { date: new Date(now - 1 * oneDay).toISOString(), produced: 15 },
    ],
  },
  {
    orderId: "O4",
    daily: [
      { date: new Date(now - 3 * oneDay).toISOString(), produced: 40 },
      { date: new Date(now - 2 * oneDay).toISOString(), produced: 50 },
      { date: new Date(now - 1 * oneDay).toISOString(), produced: 30 },
    ],
  },
];