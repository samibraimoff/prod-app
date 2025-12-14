import { render } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui-kit/button/button";

describe("Button", () => {
  it("should render Button", () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should have class", () => {
    const { getByText } = render(
      <Button theme={ThemeButton.CLEAR}>Test</Button>
    );
    expect(getByText("Test")).toHaveClass("clear");
  });
});
