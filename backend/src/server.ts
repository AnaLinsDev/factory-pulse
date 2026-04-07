import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";

import dashboardRoutes from "./routes/dashboard";
import { initSocket } from "./sockets";

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3001";

export const app = express();

// CORS
app.use(
  cors({
    origin: `${CLIENT_URL}:${PORT}`,
    methods: ["GET", "POST"],
  }),
);

app.use(express.json());

// Routes
app.use("/api/dashboard", dashboardRoutes);

// HTTP server
const server = http.createServer(app);

// Init socket
initSocket(server);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
