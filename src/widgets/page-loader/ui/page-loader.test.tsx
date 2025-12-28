import { render } from "@testing-library/react";
import { PageLoader } from "./page-loader";

describe("PageLoader component", () => {
  test("renders Page loader component", () => {
    const { container, getByTestId } = render(<PageLoader />);
    expect(getByTestId("page-loader")).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
