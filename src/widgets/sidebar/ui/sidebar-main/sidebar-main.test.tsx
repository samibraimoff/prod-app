import { Sidebar } from "widgets/sidebar";
import { screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/helpers/render-with-translation/render-with-translation";

describe("sidebar main", () => {
  it("should render sidebar main component", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
