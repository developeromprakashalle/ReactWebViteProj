import { describe, test, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("should render initial count of 0", () => {
    render(<App />);
    expect(screen.getByText("Count status 0")).toBeInTheDocument();
  });

  test("should increment count when button is clicked", () => {
    render(<App />);
    const button = screen.getByText("Increment by 1");

    fireEvent.click(button);
    expect(screen.getByText("Count status 1")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText("Count status 2")).toBeInTheDocument();
  });
});
