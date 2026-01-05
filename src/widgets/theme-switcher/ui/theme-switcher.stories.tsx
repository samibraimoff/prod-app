import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { ThemeSwitcher } from "./theme-switcher";

export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {};

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {};
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
