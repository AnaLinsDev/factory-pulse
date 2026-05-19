"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { socket } from "@/services/socket";

import { getMachines, getOrders, getMetrics } from "@/services/api";

import { Machine } from "@/types/Machine";
import { Order } from "@/types/Order";
import { Metrics } from "@/types/Metrics";

type DashboardContextType = {
  machines: Machine[];
  orders: Order[];
  metrics: Metrics;
  loadingBase: boolean;
  status: "connecting" | "live" | "offline";
};

export const DashboardContext = createContext<DashboardContextType | null>(
  null,
);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({});
  const [loadingBase, setLoadingBase] = useState(true);

  const [status, setStatus] = useState<"connecting" | "live" | "offline">(
    "connecting",
  );

  useEffect(() => {
    let disconnectTimeout: NodeJS.Timeout;

    async function load() {
      console.log("load base data");
      try {
        const [machinesData, ordersData, metricsData] = await Promise.all([
          getMachines(),
          getOrders(),
          getMetrics(),
        ]);

        setMachines(machinesData);
        setOrders(ordersData);
        setMetrics(metricsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingBase(false);
      }
    }

    load();

    if (!socket.connected) {
      socket.connect();
    }

    const handleConnect = () => {
      clearTimeout(disconnectTimeout);
      setStatus("live");
    };

    const handleDisconnect = () => {
      disconnectTimeout = setTimeout(() => {
        setStatus("offline");
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

    console.log("add events");
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    socket.on("machine:update", handleMachineUpdate);
    socket.on("order:update", handleOrderUpdate);
    socket.on("metrics:update", handleMetricsUpdate);

    return () => {
      console.log("remove events");
      clearTimeout(disconnectTimeout);

      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);

      socket.off("machine:update", handleMachineUpdate);
      socket.off("order:update", handleOrderUpdate);
      socket.off("metrics:update", handleMetricsUpdate);
    };
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        machines,
        orders,
        metrics,
        loadingBase,
        status,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }

  return context;
}
