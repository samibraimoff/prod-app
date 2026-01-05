import { render } from "@testing-library/react";

import { LanguageSwitcher } from "./language-switcher";

describe("LanguageSwitcher", () => {
  test("renders LanguageSwitcher component with short language", () => {
    const { container, getByRole } = render(<LanguageSwitcher short />);
    const buttonElement = getByRole("button", { name: /short_language/i });
    expect(buttonElement).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  test("renders LanguageSwitcher component with long language", () => {
    const { container, getByRole } = render(<LanguageSwitcher short={false} />);
    const buttonElement = getByRole("button", { name: /language/i });
    expect(buttonElement).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
