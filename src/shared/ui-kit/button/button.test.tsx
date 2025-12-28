import { render } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui-kit";

describe("Button", () => {
  test("should render Button", () => {
    const { getByText } = render(<Button>Test</Button>);
    const button = getByText("Test");
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });

  test("should have class", () => {
    const { getByText } = render(
      <Button theme={ButtonTheme.CLEAR}>Test</Button>
    );
    const button = getByText("Test");
    expect(button).toHaveClass("clear");
    expect(button).toMatchSnapshot();
  });
});
