import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeSwitcher } from "./theme-switcher";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

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
