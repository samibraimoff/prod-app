import { Counter } from "./counter";
import { componentRender } from "shared/helpers/component-render/component-render";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

describe("Counter component", () => {
  test("renders initial state value", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("increments counter value", async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const incrementBtn = screen.getByTestId("increment-btn");
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });

  test("decrements counter value", async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const decrementBtn = screen.getByTestId("decrement-btn");
    await userEvent.click(decrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
