import { vi } from "vitest";

export const mockUseDashboard = vi.fn();

vi.mock("@/hooks/useDashboard", () => ({
  useDashboard: () => mockUseDashboard(),
}));