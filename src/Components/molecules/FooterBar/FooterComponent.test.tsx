import { render, screen } from "@testing-library/react";
import FooterComponent from "./FooterComponent";

describe("Footer bar test", () => {
  test("footer image test", () => {
    render(<FooterComponent />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "BlinkistLogo.svg");
    expect(logo).toHaveAttribute("alt", "My logo"); 
  });

  test("footer heading test", () => {
    render(<FooterComponent />)
    const heading = screen.getByRole("heading")
    expect(heading).toHaveTextContent("Big ideas in small packagesStart learning now")
  })

});
