import express from "express";
import cors from "cors";
import http from "http";

import dashboardRoutes from "./routes/dashboard";
import { initSocket } from "./sockets";

export const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// Routes
app.use("/api/dashboard", dashboardRoutes);

// HTTP server
const server = http.createServer(app);

// Init socket
initSocket(server);

const PORT: number = 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});