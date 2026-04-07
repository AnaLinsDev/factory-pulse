"use client";

import { useEffect, useState } from "react";
import { socket } from "@/services/socket";
import { getMachines, getOrders, getMetrics } from "@/services/api";
import { Machine } from "@/types/Machine";
import { Order } from "@/types/Order";
import { Metrics } from "@/types/Metrics";

export function useDashboard() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({});

  useEffect(() => {
    // Function to load all initial data from the backend
    async function load() {
      try {
        // Call all APIs at the same time (faster than calling one by one)
        const [machinesData, ordersData, metricsData] = await Promise.all([
          getMachines(), // fetch list of machines
          getOrders(), // fetch list of orders
          getMetrics(), // fetch dashboard metrics
        ]);

        // Save data
        setMachines(machinesData);
        setOrders(ordersData);
        setMetrics(metricsData);
      } catch (error) {
        // If any request fails, log the error
        console.error("Error loading dashboard data:", error);
      }
    }

    load();

    socket.connect();

    socket.on("machine:update", (machine) => {
      // Set the machines with the data from the received machine
      setMachines((prev) =>
        prev.map((m) => (m.id === machine.id ? machine : m)),
      );
    });

    socket.on("order:update", (order) => {
      // Set the orders with the data from the received order
      setOrders((prev) => prev.map((o) => (o.id === order.id ? order : o)));
    });

    socket.on("metrics:update", (data) => {
      // Set the metrics with the received metric
      setMetrics(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return { machines, orders, metrics };
}
