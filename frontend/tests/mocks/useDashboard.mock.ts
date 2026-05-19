import { vi } from "vitest";

export const mockUseDashboard = vi.fn();

vi.mock("@/contexts/DashboardContext", () => ({
  useDashboard: () => mockUseDashboard(),
}));