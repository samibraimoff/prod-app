import { render } from "@testing-library/react";

import { PageWithErrorMessage } from "./page-with-error-message";

describe("PageWithErrorMessage component", () => {
  test("should render correctly", () => {
    const { getByText } = render(<PageWithErrorMessage />);
    const errorMessageElement = getByText("errorMessage.text");
    expect(errorMessageElement).toBeVisible();
    expect(errorMessageElement).toMatchSnapshot();
  });
});
