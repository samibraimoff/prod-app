import { render } from "@testing-library/react";
import userInput from "@testing-library/user-event";

import { Input } from "./input";

describe("Input component", () => {
  test("renders correctly", () => {
    const label = "Enter user name";
    const { getByLabelText, container } = render(
      <Input onChange={jest.fn()} placeholder={"User name"} label={label} />
    );
    expect(getByLabelText(label)).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  test("calls onChange", async () => {
    const user = userInput.setup();
    const label = "Enter user name";
    const onChange = jest.fn();
    const { getByLabelText, container } = render(
      <Input onChange={onChange} placeholder={"User name"} label={label} />
    );
    await user.type(getByLabelText(label), "test");
    expect(onChange).toBeCalledTimes(4);
    expect(container).toMatchSnapshot();
  });
});
