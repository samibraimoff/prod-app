import { Portal } from "./portal";
import { render, screen } from "@testing-library/react";

describe("Portal", () => {
  test("should successfully create a portal and render child elements", () => {
    const target = document.createElement("div");
    target.setAttribute("id", "my-portal-root");
    document.body.appendChild(target);

    render(
      <Portal elementId={"my-portal-root"}>
        <div data-testid={"modal"}>
          <p>Testing portal</p>
        </div>
      </Portal>
    );
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(modal).toMatchSnapshot();
  });
});