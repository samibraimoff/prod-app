import { render } from "@testing-library/react";
import { Navbar } from "./navbar";
import userEvent from "@testing-library/user-event";

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
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  test("should render modal when button is clicked", async () => {
    const user = userEvent.setup();
    const { getByRole, findByTestId, queryByTestId } = render(<Navbar />);
    const buttonElement = getByRole("button", {
      name: /navbar.signIn/i
    });
    expect(document.getElementById("modal-root")).toBeInTheDocument();
    const modalElement = queryByTestId("modal");
    expect(modalElement).not.toBeInTheDocument();
    await user.click(buttonElement);
    expect(await findByTestId("modal")).toBeInTheDocument();
  });
});
