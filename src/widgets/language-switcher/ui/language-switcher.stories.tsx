import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { LanguageSwitcher } from "./language-switcher";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "widgets/LanguageSwitcher",
  component: LanguageSwitcher,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => (
  <LanguageSwitcher {...args} />
);

export const LanguageSwitcherLight = Template.bind({});
LanguageSwitcherLight.args = {};

export const LanguageSwitcherDark = Template.bind({});
LanguageSwitcherDark.args = {};
LanguageSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
