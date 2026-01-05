import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { LanguageSwitcher } from "./language-switcher";

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

export const LanguageSwitcherShortLangLight = Template.bind({});
LanguageSwitcherShortLangLight.args = {
  short: true,
};

export const LanguageSwitcherDark = Template.bind({});
LanguageSwitcherDark.args = {};

export const LanguageSwitcherShortDark = Template.bind({});
LanguageSwitcherShortDark.args = {
  short: true,
};

LanguageSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
