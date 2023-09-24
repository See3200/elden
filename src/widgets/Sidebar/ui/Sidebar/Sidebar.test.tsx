import { screen, fireEvent } from "@testing-library/react"
import { 
  renderWithTranslation
} from "shared/lib/tests/renderWithTranslation/renderWithtranslation";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("appearance", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  });
  test("toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});