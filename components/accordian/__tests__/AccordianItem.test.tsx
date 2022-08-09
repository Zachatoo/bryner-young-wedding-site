import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AccordianItem } from "../AccordianItem";

describe("AccordianItem", () => {
  it.skip("expands and collapses", async () => {
    const mockTitle = "mock title";
    const mockContent = "This is some mock content.";
    render(<AccordianItem title={mockTitle}>{mockContent}</AccordianItem>);
    const user = userEvent.setup();

    expect(screen.getByRole("heading", { name: mockTitle }).innerHTML).toBe(
      mockTitle
    );
    // FIXME
    expect(
      screen.queryAllByText(mockContent, {
        ignore: "script, style, .hidden",
      })
    ).toHaveLength(0);
    await user.click(screen.getByRole("button", { name: `${mockTitle} +` }));
    await screen.findByText(mockContent, {
      ignore: "script, style, .hidden",
    });
    await user.click(screen.getByRole("button", { name: `${mockTitle} -` }));
    // FIXME
    expect(
      screen.queryAllByText(mockContent, {
        ignore: "script, style, .hidden",
      })
    ).toHaveLength(0);
  });
});
