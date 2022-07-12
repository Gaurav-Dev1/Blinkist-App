import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";
import BlinkistLogo from "./BlinkistLogo.svg";

describe("Logo", () => {
  test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
    render(<Logo src={BlinkistLogo} />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "BlinkistLogo.svg");
    expect(logo).toHaveAttribute("alt", "My logo");
  });
});
