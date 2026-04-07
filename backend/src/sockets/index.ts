import { Server } from "socket.io";
import { Server as HttpServer } from "http";

import { machines, orders } from "../data/mocked";
import { calculateMetrics } from "../services/calculate-metrics";

// ----------------------
// 📡 EVENTS (centralized)
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
      origin: "http://localhost:3001",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`⚡ Client connected: ${socket.id}`);

    // Send initial snapshot
    socket.emit(EVENTS.METRICS_UPDATE, calculateMetrics());
    socket.emit(EVENTS.MACHINE_UPDATE, machines);
    socket.emit(EVENTS.ORDER_UPDATE, orders);

    socket.on("disconnect", () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });

  // Prevent multiple intervals (important in dev with reload)
  if (!simulationStarted) {
    startSimulation();
    simulationStarted = true;
  }

  return io;
}

// ----------------------
// SIMULATION
// ----------------------
type MachineStatus = "running" | "idle" | "stopped";

function getRandomStatus(): MachineStatus {
  const statuses: MachineStatus[] = ["running", "idle", "stopped"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function startSimulation() {
  setInterval(() => {
    let hasMachineUpdate = false;
    let hasOrderUpdate = false;

    machines.forEach((machine) => {
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

        if (order && order.status !== "done") {
          order.status = "in_progress";

          const producedNow = Math.floor(Math.random() * 5) + 1;
          order.produced += producedNow;

          if (order.produced >= order.quantity) {
            order.produced = order.quantity;
            order.status = "done";
            machine.status = "idle";
          }

          hasOrderUpdate = true;

          getIO().emit(EVENTS.ORDER_UPDATE, order);
        }
      }

      if (hasMachineUpdate) {
        getIO().emit(EVENTS.MACHINE_UPDATE, machine);
      }
    });

    // Always update metrics
    const metrics = calculateMetrics();
    getIO().emit(EVENTS.METRICS_UPDATE, metrics);
  }, 3000);
}
