import { ThemeSwitcher } from "./theme-switcher";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useTheme, Theme } from "app/providers/theme";

jest.mock("app/providers/theme", () => ({
  ...jest.requireActual("app/providers/theme"),
  useTheme: jest.fn()
}));

const mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

describe("ThemeSwitcher", () => {
  test("renders dark icon correctly", () => {
    mockedUseTheme.mockReturnValue({
      theme: Theme.DARK,
      toggleTheme: jest.fn()
    });
    const { getByTestId, queryByTestId } = render(<ThemeSwitcher />);
    const themeSwitcherElement = getByTestId("theme-switcher");
    expect(themeSwitcherElement).toBeVisible();

    const iconDarkElement = getByTestId("dark-theme-icon");
    expect(iconDarkElement).toBeVisible();

    const iconLightElement = queryByTestId("light-theme-icon");
    expect(iconLightElement).not.toBeInTheDocument();
    expect(themeSwitcherElement).toMatchSnapshot();
  });

  test("renders light icon correctly", () => {
    mockedUseTheme.mockReturnValue({
      theme: Theme.LIGHT,
      toggleTheme: jest.fn()
    });
    const { getByTestId, queryByTestId } = render(<ThemeSwitcher />);
    const themeSwitcherElement = getByTestId("theme-switcher");
    expect(themeSwitcherElement).toBeVisible();

    const iconLightElement = getByTestId("light-theme-icon");
    expect(iconLightElement).toBeVisible();

    const iconDarkElement = queryByTestId("dark-theme-icon");
    expect(iconDarkElement).not.toBeInTheDocument();
    expect(themeSwitcherElement).toMatchSnapshot();
  });

  test("calls toggleTheme on button click", async () => {
    const user = userEvent.setup();
    const toggleTheme = jest.fn();
    mockedUseTheme.mockReturnValue({
      theme: Theme.LIGHT,
      toggleTheme
    });
    const { getByTestId } = render(<ThemeSwitcher />);
    const themeSwitcherElement = getByTestId("theme-switcher");
    const iconLightElement = getByTestId("light-theme-icon");
    expect(iconLightElement).toBeVisible();

    await user.click(themeSwitcherElement);
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
