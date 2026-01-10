import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/helpers/component-render/component-render";

import { Navbar } from "./navbar";

beforeEach(() => {
  const existing = document.getElementById("modal-root");
  if (!existing) {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(portalRoot);
  }
});

afterEach(() => {
  document.getElementById("modal-root")?.remove();
});

describe("Navbar", () => {
  test("should render navbar", () => {
    const { container } = componentRender(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  test.skip("should render modal when button is clicked", async () => {
    const user = userEvent.setup();
    const { getByRole, findByTestId, queryByTestId } = componentRender(
      <Navbar />
    );
    const buttonElement = getByRole("button", {
      name: /navbar.signIn/i,
    });
    expect(document.getElementById("modal-root")).toBeInTheDocument();
    screen.debug(buttonElement);
    await user.click(buttonElement);
    expect(await findByTestId("modal")).toBeVisible();
  });
});
