import { io } from "socket.io-client";

const API_URL = "http://localhost:3000";
const socket = io(API_URL);

socket.on("connect", () => {
  console.log("⚡ Connected:", socket.id);

  socket.emit("ping");
});

socket.on("pong", (data) => {
  console.log("🏓 Pong received:", data);
});

socket.on("metrics:update", (data) => {
  console.log("📊 Real-time metrics:", data);
});

socket.on("machine:update", (machine) => {
  console.log("🏭 Machine:", machine);
});

socket.on("order:update", (order) => {
  console.log("📦 Order:", order);
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected");
});
