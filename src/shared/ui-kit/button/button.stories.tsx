import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ThemeButton } from "./button";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "ui-kit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Click me",
  theme: ThemeButton.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Click me",
  theme: ThemeButton.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Click me",
  theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
  children: "Click me",
  theme: ThemeButton.CLEAR,
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: "Click me",
  theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Click me",
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
