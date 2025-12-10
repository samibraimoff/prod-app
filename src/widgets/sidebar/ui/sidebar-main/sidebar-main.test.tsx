import { Sidebar } from "widgets/sidebar";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/helpers/render-with-translation/render-with-translation";

describe("sidebar main", () => {
  it("should render sidebar main component", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should toggle sidebar", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
