import { render, fireEvent, act } from "@testing-library/react";
import { Modal } from "./modal";

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

describe("Modal", () => {
  test("Renders modal when isOpen set to TRUE", () => {
    const { getByTestId } = render(<Modal isOpen={true} />);
    const modal = getByTestId("modal");
    expect(modal).toBeVisible();
    expect(modal).toMatchSnapshot();
  });

  test("Applies css opened class when isOpen set to TRUE", () => {
    const { getByTestId } = render(<Modal isOpen={true} />);
    const modal = getByTestId("modal");
    expect(modal).toBeVisible();
    expect(modal).toHaveClass("opened");
    expect(modal).toMatchSnapshot();
  });

  test("Does not show modal when isOpen set to FALSE", () => {
    const { queryByTestId } = render(<Modal isOpen={false} />);
    const modal = queryByTestId("modal");
    expect(modal).not.toBeInTheDocument();
    expect(modal).toMatchSnapshot();
  });

  test("Calls onClose when user clicks Escape", async () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    const { findByTestId } = render(<Modal isOpen={true} onClose={onClose} />);
    const modal = await findByTestId("modal");
    expect(modal).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(0);
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });
});