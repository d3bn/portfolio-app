import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorFound from "../error-found";

describe("ErrorFound", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ErrorFound />
      </MemoryRouter>
    );
  });

  it("should render the 404 heading", () => {
    expect(screen.getByRole("heading", { name: /404/i })).toBeInTheDocument();
  });

  it("should render the error message", () => {
    expect(
      screen.getByText(/the page you seek is in another castle. keep exploring!/i)
    ).toBeInTheDocument();
  });

  it("should render the go back button", () => {
    expect(screen.getByRole("button", { name: /go back/i })).toBeInTheDocument();
  });
});
