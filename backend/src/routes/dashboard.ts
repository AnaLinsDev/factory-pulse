import { Router } from "express";

import { machines } from "../data/mockedMachine";
import { calculateMetrics } from "../services/calculate-metrics";
import { orders } from "../data/mockedOrder";
import { machineStatusHistory, orderProductionHistory } from "../data/mockedHistory";

const router = Router();

// Health
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// List machines
router.get("/machines", (req, res) => {
  res.json(machines);
});

// List orders
router.get("/orders", (req, res) => {
  res.json(orders);
});

// Basic metrics
router.get("/metrics", (req, res) => {
  const metrics = calculateMetrics();
  res.json(metrics);
});

export default router;
