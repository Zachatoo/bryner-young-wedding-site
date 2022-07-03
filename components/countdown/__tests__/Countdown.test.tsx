import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Countdown } from "../Countdown";

describe("Countdown", () => {
  beforeEach(() => {
    cleanup();
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  it("handles days, hours, minutes, and seconds", () => {
    const mockDate = new Date(2022, 8, 9, 0, 0, 0);
    vi.setSystemTime(mockDate);
    const mockTargetDate = new Date(2022, 8, 10, 1, 2, 3);
    render(<Countdown targetTime={mockTargetDate} />);

    const daysValue = screen.getByTestId("countdown-days").innerHTML;
    const hoursValue = screen.getByTestId("countdown-hours").innerHTML;
    const minutesValue = screen.getByTestId("countdown-minutes").innerHTML;
    const secondsValue = screen.getByTestId("countdown-seconds").innerHTML;
    expect(daysValue).toEqual("1");
    expect(hoursValue).toEqual("1");
    expect(minutesValue).toEqual("2");
    expect(secondsValue).toEqual("3");
  });

  // Skipping as this won't work in a UTC server
  it.skip("handles timezone changes", () => {
    const mockDate = new Date(2022, 8, 9, 0, 0, 0);
    vi.setSystemTime(mockDate);
    const mockTargetDate = new Date(2022, 10, 9, 0, 0, 0);
    render(<Countdown targetTime={mockTargetDate} />);

    const daysValue = screen.getByTestId("countdown-days").innerHTML;
    const hoursValue = screen.getByTestId("countdown-hours").innerHTML;
    const minutesValue = screen.getByTestId("countdown-minutes").innerHTML;
    const secondsValue = screen.getByTestId("countdown-seconds").innerHTML;
    expect(daysValue).toEqual("61");
    expect(hoursValue).toEqual("1"); // add one hour due to change in timezone
    expect(minutesValue).toEqual("0");
    expect(secondsValue).toEqual("0");
  });
});
