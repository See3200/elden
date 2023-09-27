import { screen, fireEvent } from "@testing-library/react"
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("appearance", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  });
  test("toggle", () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});