import { render } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui-kit";

describe("Button", () => {
  it("should render Button", () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should have class", () => {
    const { getByText } = render(
      <Button theme={ButtonTheme.CLEAR}>Test</Button>
    );
    expect(getByText("Test")).toHaveClass("clear");
  });
});
