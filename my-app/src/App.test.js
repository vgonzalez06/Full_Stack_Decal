import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  );
}

test("renders the welcome content at /home", () => {
  renderAt("/home");
  expect(screen.getByRole("heading", { name: /welcome/i })).toBeInTheDocument();
});

test("counter starts at 0 at /counter", () => {
  renderAt("/counter");
  expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  expect(screen.queryByText("You passed 5!")).not.toBeInTheDocument();
});

test("clicking Increase 6 times shows the passed 5 message", () => {
  renderAt("/counter");
  const increase = screen.getByRole("button", { name: "Increase" });
  for (let i = 0; i < 6; i++) {
    fireEvent.click(increase);
  }
  expect(screen.getByText("Counter: 6")).toBeInTheDocument();
  expect(screen.getByText("You passed 5!")).toBeInTheDocument();
});

test("clicking Decrease from 0 keeps the counter at 0", () => {
  renderAt("/counter");
  fireEvent.click(screen.getByRole("button", { name: "Decrease" }));
  expect(screen.getByText("Counter: 0")).toBeInTheDocument();
});

test("theme button toggles the navbar from light to dark", () => {
  renderAt("/home");
  const nav = screen.getByRole("navigation");
  expect(nav).toHaveClass("navbar-light");
  fireEvent.click(screen.getByRole("button", { name: "Toggle Theme" }));
  expect(nav).toHaveClass("navbar-dark");
});
