import { describe, it, expect } from "vitest";
import { validateTimerForm } from "./validation";

describe("validateTimerForm", () => {
  // Test for required title
  it("should return false if title is empty", () => {
    const result = validateTimerForm({
      title: "",
      description: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    expect(result).toBe(false);
  });

  // Test for title length
  it("should return false if title exceeds 50 characters", () => {
    const result = validateTimerForm({
      title: "A".repeat(51),
      description: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    expect(result).toBe(false);
  });

  // Test for negative time values
  it("should return false if any time value is negative", () => {
    const result = validateTimerForm({
      title: "Valid Title",
      description: "",
      hours: -1,
      minutes: 0,
      seconds: 0,
    });
    expect(result).toBe(false);
  });

  // Test for minutes and seconds range
  it("should return false if minutes or seconds are greater than 59", () => {
    const result = validateTimerForm({
      title: "Valid Title",
      description: "",
      hours: 0,
      minutes: 60,
      seconds: 0,
    });
    expect(result).toBe(false);
  });

  // Test for total time being zero
  it("should return false if total time is zero", () => {
    const result = validateTimerForm({
      title: "Valid Title",
      description: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    expect(result).toBe(false);
  });

  // Test for exceeding 24 hours
  it("should return false if total time exceeds 24 hours", () => {
    const result = validateTimerForm({
      title: "Valid Title",
      description: "",
      hours: 25,
      minutes: 0,
      seconds: 0,
    });
    expect(result).toBe(false);
  });

  // Test for valid input
  it("should return true for valid timer form data", () => {
    const result = validateTimerForm({
      title: "Valid Title",
      description: "",
      hours: 1,
      minutes: 30,
      seconds: 0,
    });
    expect(result).toBe(true);
  });
});
