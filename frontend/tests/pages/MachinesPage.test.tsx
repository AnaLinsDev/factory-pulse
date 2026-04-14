import { mockUseDashboard } from "../mocks/useDashboard.mock";
import { mockMachines } from "../mocks/dashboardData.mock";

import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import MachinesPage from "@/app/machines/page";

import type { Machine } from "@/types/Machine";

vi.mock("@/components/details/Table", async () => {
  const { createTableMock } = await import("../mocks/table.mock");
  return {
    default: createTableMock<Machine>(),
  };
});

describe("MachinesPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders page title", () => {
    mockUseDashboard.mockReturnValue({ machines: [] });

    render(<MachinesPage />);

    expect(screen.getByText("Machines List")).toBeInTheDocument();
  });

  it("passes machines to Table", () => {
    mockUseDashboard.mockReturnValue({ machines: mockMachines });

    render(<MachinesPage />);

    expect(screen.getByTestId("data")).toHaveTextContent("Machine A");
  });

  it("creates correct number of columns", () => {
    mockUseDashboard.mockReturnValue({ machines: mockMachines });

    render(<MachinesPage />);

    expect(screen.getByTestId("columns-length")).toHaveTextContent("3");
  });

  it("formats status using toTitleCase", () => {
    mockUseDashboard.mockReturnValue({ machines: mockMachines });

    render(<MachinesPage />);

    expect(screen.getByText("Running")).toBeInTheDocument();
  });

  it("renders currentOrderId when present", () => {
    mockUseDashboard.mockReturnValue({ machines: mockMachines });

    render(<MachinesPage />);

    expect(screen.getByText("ORD-1")).toBeInTheDocument();
  });

  it("renders fallback when currentOrderId is null", () => {
    mockUseDashboard.mockReturnValue({
      machines: [
        {
          id: 2,
          name: "Machine B",
          status: "idle",
          currentOrderId: null,
        },
      ],
    });

    render(<MachinesPage />);

    expect(screen.getByText("—")).toBeInTheDocument();
  });

  it("handles empty machines list", () => {
    mockUseDashboard.mockReturnValue({ machines: [] });

    render(<MachinesPage />);

    expect(screen.getByTestId("table")).toBeInTheDocument();
  });
});
