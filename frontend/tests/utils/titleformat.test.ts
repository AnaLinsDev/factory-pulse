import { describe, it, expect } from "vitest";
import { toTitleCase } from "@/utils/titleFormat";

describe("toTitleCase", () => {
  it("should convert underscore strings to title case", () => {
    expect(toTitleCase("machine_running")).toBe("Machine Running");
  });

  it("should convert space-separated strings to title case", () => {
    expect(toTitleCase("machine running")).toBe("Machine Running");
  });

  it("should handle mixed separators", () => {
    expect(toTitleCase("machine_running fast")).toBe("Machine Running Fast");
  });

  it("should handle already formatted strings", () => {
    expect(toTitleCase("Machine Running")).toBe("Machine Running");
  });

  it("should handle single word", () => {
    expect(toTitleCase("running")).toBe("Running");
  });

  it("should handle empty string", () => {
    expect(toTitleCase("")).toBe("");
  });
});