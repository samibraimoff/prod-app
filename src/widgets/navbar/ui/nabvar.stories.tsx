import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { StoreDecorator } from "shared/config/storybook/decorators/store-decorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { Navbar } from "./navbar";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [StoreDecorator({
  loginForm: {
    username: "123",
    password: "123"
  }
})];

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: {
    username: "123",
    password: "123"
  }
})];
