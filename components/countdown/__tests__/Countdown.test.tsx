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

  it.each([
    [new Date(2022, 8, 9, 0, 0, 0), new Date(2022, 8, 10, 1, 2, 3), 1, 1, 2, 3],
    [
      new Date(2022, 8, 8, 12, 0, 0),
      new Date(2022, 8, 9, 12, 0, 0),
      1,
      0,
      0,
      0,
    ],
    [
      new Date(2022, 8, 8, 12, 0, 1),
      new Date(2022, 8, 9, 12, 0, 0),
      0,
      23,
      59,
      59,
    ],
  ])(
    "handles days, hours, minutes, and seconds",
    (
      mockDate,
      mockTargetDate,
      expectedDays,
      expectedHours,
      expectedMinutes,
      expectedSeconds
    ) => {
      vi.setSystemTime(mockDate);
      render(<Countdown targetTime={mockTargetDate} />);

      const daysValue = screen.getByTestId("countdown-days").innerHTML;
      const hoursValue = screen.getByTestId("countdown-hours").innerHTML;
      const minutesValue = screen.getByTestId("countdown-minutes").innerHTML;
      const secondsValue = screen.getByTestId("countdown-seconds").innerHTML;
      expect(daysValue).toEqual(expectedDays.toString());
      expect(hoursValue).toEqual(expectedHours.toString());
      expect(minutesValue).toEqual(expectedMinutes.toString());
      expect(secondsValue).toEqual(expectedSeconds.toString());
    }
  );

  it("shows all zeroes at target date", () => {
    const mockTargetDate = new Date("2022-09-09 14:30:00.000-06:00");
    vi.setSystemTime(mockTargetDate);
    render(<Countdown targetTime={mockTargetDate} />);

    const daysValue = screen.getByTestId("countdown-days").innerHTML;
    const hoursValue = screen.getByTestId("countdown-hours").innerHTML;
    const minutesValue = screen.getByTestId("countdown-minutes").innerHTML;
    const secondsValue = screen.getByTestId("countdown-seconds").innerHTML;
    expect(daysValue).toEqual("0");
    expect(hoursValue).toEqual("0");
    expect(minutesValue).toEqual("0");
    expect(secondsValue).toEqual("0");
  });

  it("shows negative numbers past target date", () => {
    const mockDate = new Date("2022-09-09 14:30:01.000-06:00");
    const mockTargetDate = new Date("2022-09-09 14:30:00.000-06:00");
    vi.setSystemTime(mockDate);
    render(<Countdown targetTime={mockTargetDate} />);

    const daysValue = screen.getByTestId("countdown-days").innerHTML;
    const hoursValue = screen.getByTestId("countdown-hours").innerHTML;
    const minutesValue = screen.getByTestId("countdown-minutes").innerHTML;
    const secondsValue = screen.getByTestId("countdown-seconds").innerHTML;
    expect(daysValue).toEqual("0");
    expect(hoursValue).toEqual("0");
    expect(minutesValue).toEqual("0");
    expect(secondsValue).toEqual("-1");
  });
});
