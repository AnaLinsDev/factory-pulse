import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";

import { mockUseDashboard } from "../mocks/useDashboard.mock";

import Home from "@/app/page";

import { MachinesProps } from "@/components/dashboard/MachinesDashboard";
import { MetricProps } from "@/components/dashboard/MetricDashboard";
import { OrdersProps } from "@/components/dashboard/OrdersDashboard";

vi.mock("@/components/dashboard/MetricDashboard", () => ({
  default: (props: MetricProps) => (
    <div data-testid="metric">{JSON.stringify(props)}</div>
  ),
}));

vi.mock("@/components/dashboard/MachinesDashboard", () => ({
  default: (props: MachinesProps) => (
    <div data-testid="machines">{JSON.stringify(props)}</div>
  ),
}));

vi.mock("@/components/dashboard/OrdersDashboard", () => ({
  default: (props: OrdersProps) => (
    <div data-testid="orders">{JSON.stringify(props)}</div>
  ),
}));

describe("Home", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders dashboards", () => {
    mockUseDashboard.mockReturnValue({
      machines: [],
      orders: [],
      metrics: {},
      loadingBase: false,
    });

    render(<Home />);

    expect(screen.getByTestId("metric")).toBeInTheDocument();
    expect(screen.getByTestId("machines")).toBeInTheDocument();
    expect(screen.getByTestId("orders")).toBeInTheDocument();
  });
});
