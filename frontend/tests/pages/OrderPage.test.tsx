import { mockUseDashboard } from "../mocks/useDashboard.mock";
import { mockOrders } from "../mocks/dashboardData.mock";

import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import OrderPage from "@/app/orders/page";

import type { Order } from "@/types/Order";

vi.mock("@/components/details/Table", async () => {
  const { createTableMock } = await import("../mocks/table.mock");
  return {
    default: createTableMock<Order>(),
  };
});
 
describe("OrderPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders page title", () => {
    mockUseDashboard.mockReturnValue({ orders: [] });

    render(<OrderPage />);

    expect(screen.getByText("Production Orders List")).toBeInTheDocument();
  });

  it("passes orders to Table", () => {
    mockUseDashboard.mockReturnValue({ orders: mockOrders });

    render(<OrderPage />);

    expect(screen.getByTestId("data")).toHaveTextContent("Widget A");
  });

  it("creates correct number of columns", () => {
    mockUseDashboard.mockReturnValue({ orders: mockOrders });

    render(<OrderPage />);

    expect(screen.getByTestId("columns-length")).toHaveTextContent("6");
  });

  it("calculates progress correctly", () => {
    mockUseDashboard.mockReturnValue({ orders: mockOrders });

    render(<OrderPage />);

    // 50 / 100 = 50%
    expect(screen.getByText(/50%/)).toBeInTheDocument();
  });

  it("formats status using toTitleCase", () => {
    mockUseDashboard.mockReturnValue({ orders: mockOrders });

    render(<OrderPage />);

    expect(screen.getByText(/in progress/i)).toBeInTheDocument();
  });

  it("handles empty orders", () => {
    mockUseDashboard.mockReturnValue({ orders: [] });

    render(<OrderPage />);

    expect(screen.getByTestId("table")).toBeInTheDocument();
  });
});
