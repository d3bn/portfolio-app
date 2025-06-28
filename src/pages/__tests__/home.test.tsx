import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../home";

describe("Home", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it("should render the main heading", () => {
    expect(
      screen.getByRole("heading", { name: /hi, i'm dennis./i })
    ).toBeInTheDocument();
  });

  it("should render the introductory paragraph", () => {
    expect(
      screen.getByText(/i am a senior software engineer/i)
    ).toBeInTheDocument();
  });

  it("should render the banner image", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
