import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { StoreDecorator } from "shared/config/storybook/decorators/store-decorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { LoginForm } from "./login-form";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [StoreDecorator({
  loginForm: {
    username: "123",
    password: "123"
  }
})];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.args = {};
LoginFormWithError.decorators = [StoreDecorator({
  loginForm: {
    username: "123",
    password: "123",
    error: "error"
  }
})];

export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {};
LoginFormLoading.decorators = [StoreDecorator({
  loginForm: {
    isLoading: true
  }
})];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: {
    username: "123",
    password: "123"
  }
})];
