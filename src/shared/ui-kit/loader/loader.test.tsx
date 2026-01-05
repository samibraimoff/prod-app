import { render } from "@testing-library/react";

import { Loader } from "./loader";

describe("Loader component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");
    expect(loader).toBeVisible();
    expect(loader).toMatchSnapshot();
  });
});
