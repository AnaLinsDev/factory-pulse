import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import "dotenv/config";

import { machines } from "../data/mockedMachine";
import { calculateMetrics } from "../services/calculate-metrics";
import { orders } from "../data/mockedOrder";
import { MachineStatus } from "../types/Machine";
import { MetricStatus } from "../types/Order";

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3001";
const PORT = process.env.PORT || "3000";

// ----------------------
// EVENTS (centralized)
// ----------------------
export const EVENTS = {
  MACHINE_UPDATE: "machine:update",
  ORDER_UPDATE: "order:update",
  METRICS_UPDATE: "metrics:update",
};

// ----------------------
// IO INSTANCE
// ----------------------
let io: Server;
let simulationStarted = false;

export function getIO(): Server {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
}

// ----------------------
// INIT SOCKET
// ----------------------
export function initSocket(server: HttpServer): Server {
  io = new Server(server, {
    cors: {
      origin: `${CLIENT_URL}`,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`⚡ Client connected: ${socket.id}`);

    // Send initial snapshot
    socket.emit(EVENTS.METRICS_UPDATE, calculateMetrics());
    socket.emit(
      EVENTS.MACHINE_UPDATE,
      machines.map((m) => ({
        ...m,
        updatedAt: Date.now(),
      })),
    );
    socket.emit(EVENTS.ORDER_UPDATE, orders);

    socket.on("disconnect", () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });

  // Prevent multiple intervals (important in dev with reload)
  if (!simulationStarted) {
    startSimulation(PORT);
    simulationStarted = true;
  }

  return io;
}

// ----------------------
// SIMULATION
// ----------------------
function getRandomStatus(): MachineStatus {
  const statuses: MachineStatus[] = ["running", "idle", "stopped"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomMetricStatus(): MetricStatus {
  const statuses: MetricStatus[] = ["pending", "in_progress", "done"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function startSimulation(port: string) {
  setInterval(() => {
    let hasMachineUpdate = false;
    let hasOrderUpdate = false;

    machines.forEach((machine) => {
      machine.updatedAt = Date.now()

      const prevStatus = machine.status;
      const newStatus = getRandomStatus();

      // Only update if changed (reduce noise)
      if (prevStatus !== newStatus) {
        machine.status = newStatus;
        hasMachineUpdate = true;
      }

      // Production logic
      if (machine.status === "running" && machine.currentOrderId) {
        const order = orders.find((o) => o.id === machine.currentOrderId);

        if (order) {
          order.updatedAt = Date.now()
          order.status = getRandomMetricStatus();
          order.produced = Math.floor(Math.random() * 5) + 1;

          if (order.status !== "done") {
            if (order.produced >= order.quantity) {
              order.produced = order.quantity;
              order.status = "done";
              machine.status = "idle";
            }

            hasOrderUpdate = true;

            getIO().emit(EVENTS.ORDER_UPDATE, order);
          }
        }
      }

      if (hasMachineUpdate) {
        getIO().emit(EVENTS.MACHINE_UPDATE, machine);
      }
    });

    // Always update metrics
    const metrics = calculateMetrics();
    getIO().emit(EVENTS.METRICS_UPDATE, metrics);
  }, Number(port));
}
