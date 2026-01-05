import { render } from "@testing-library/react";

import { LoginForm } from "./login-form";

describe("LoginForm", () => {
  test.skip("renders without crashing", async () => {
    const userNameLabel = "loginForm.username";
    const passwordLabel = "loginForm.password";
    const loginFormButton = "loginForm.signIn";

    const { getByLabelText, getByRole } = render(<LoginForm />);
    expect(getByLabelText(userNameLabel)).toBeVisible();
    expect(getByLabelText(passwordLabel)).toBeVisible();
    expect(getByRole("button", { name: loginFormButton })).toBeVisible();
  });

  test.todo("loginForm.signIn");
});
