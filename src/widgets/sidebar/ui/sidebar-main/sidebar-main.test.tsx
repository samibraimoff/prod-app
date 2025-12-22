import { Sidebar } from "widgets/sidebar";
import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/helpers/component-render/component-render";

describe("sidebar main", () => {
  test("should render sidebar main component", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("should toggle sidebar", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
