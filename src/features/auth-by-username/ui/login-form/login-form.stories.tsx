import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginForm } from "./login-form";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];