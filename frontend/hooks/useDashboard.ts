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

  const [status, setStatus] = useState<"connecting" | "live" | "offline">("connecting");
  const [isLive, setIsLive] = useState(socket.connected);

  useEffect(() => {
    let disconnectTimeout: NodeJS.Timeout;

    async function load() {
      try {
        // Get the base data
        const [machinesData, ordersData, metricsData] = await Promise.all([
          getMachines(),
          getOrders(),
          getMetrics(),
        ]);

        //Set the base data
        setMachines(machinesData);
        setOrders(ordersData);
        setMetrics(metricsData);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      }
    }

    load();

    if (!socket.connected) {
      socket.connect();
    }

    const handleConnect = () => {
      clearTimeout(disconnectTimeout);
      setStatus("live")
      setIsLive(true);
    };

    const handleDisconnect = () => {
      disconnectTimeout = setTimeout(() => {
        setStatus("offline");
        setIsLive(false);
      }, 3000);
    };

    const handleMachineUpdate = (machine: Machine) => {
      setMachines((prev) =>
        prev.map((m) => (m.id === machine.id ? machine : m)),
      );
    };

    const handleOrderUpdate = (order: Order) => {
      setOrders((prev) => prev.map((o) => (o.id === order.id ? order : o)));
    };

    const handleMetricsUpdate = (data: Metrics) => {
      setMetrics(data);
    };

    // Add Events
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("machine:update", handleMachineUpdate);
    socket.on("order:update", handleOrderUpdate);
    socket.on("metrics:update", handleMetricsUpdate);

    return () => {
      //Remove events

      clearTimeout(disconnectTimeout);

      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("machine:update", handleMachineUpdate);
      socket.off("order:update", handleOrderUpdate);
      socket.off("metrics:update", handleMetricsUpdate);
    };
  }, []);

  return { machines, orders, metrics, status };
}
