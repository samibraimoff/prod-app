import { render } from "@testing-library/react";
import { Navbar } from "./navbar";
import userEvent from "@testing-library/user-event";

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
