import { AppLink, ThemeLink } from "./app-link";
import { componentRender } from "shared/helpers/component-render/component-render";

describe("AppLink component", () => {
  test("renders app primary link", () => {
    const { getByTestId } = componentRender(<AppLink to={"/"} theme={ThemeLink.PRIMARY}>link</AppLink>);
    const appLink = getByTestId("app-link");
    expect(appLink).toBeVisible();
    expect(appLink).toMatchSnapshot();
  });

  test("renders app secondary link", () => {
    const { getByTestId } = componentRender(<AppLink to={"/"} theme={ThemeLink.SECONDARY}>link</AppLink>);
    const appLink = getByTestId("app-link");
    expect(appLink).toHaveClass("secondary");
    expect(appLink).toMatchSnapshot();
  });
});