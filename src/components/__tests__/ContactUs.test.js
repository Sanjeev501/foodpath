import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("Contact Us page should be rendered", () => {
    render(<ContactUs />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
  });

  it("Contact Us page should contain 3 input fields", () => {
    render(<ContactUs />);
    const button = screen.getAllByRole("textbox");
    expect(button.length).toBe(3);
  });

  it("Contact Us page should contain a Submit button", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
