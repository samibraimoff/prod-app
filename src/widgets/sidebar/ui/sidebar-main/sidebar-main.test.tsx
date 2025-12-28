import { Sidebar } from "widgets/sidebar";
import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/helpers/component-render/component-render";

describe("sidebar main", () => {
  test("should render sidebar main component", () => {
    const { getByTestId } = componentRender(<Sidebar />);
    expect(getByTestId("sidebar")).toBeVisible();
    expect(getByTestId("sidebar")).toMatchSnapshot();
  });

  test("should toggle sidebar", async () => {
    const { getByTestId } = componentRender(<Sidebar />);
    const user = userEvent.setup();
    const toggleBtn = getByTestId("sidebar-toggle");
    const sidebar = getByTestId("sidebar");
    expect(sidebar).toBeVisible();

    await user.click(toggleBtn);
    expect(sidebar).toHaveClass("collapsed");
  });
});
