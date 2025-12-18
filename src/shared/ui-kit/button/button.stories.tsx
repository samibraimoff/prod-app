import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./button";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "ui-kit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Click me",
  theme: ButtonTheme.PRIMARY
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Click me",
  theme: ButtonTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLightSizeM = Template.bind({});
PrimaryLightSizeM.args = {
  children: "Click me",
  theme: ButtonTheme.PRIMARY,
  size: ButtonSize.M
};

export const PrimaryLightSizeL = Template.bind({});
PrimaryLightSizeL.args = {
  children: "Click me",
  theme: ButtonTheme.PRIMARY,
  size: ButtonSize.L
};

export const PrimaryLightSizeXL = Template.bind({});
PrimaryLightSizeXL.args = {
  children: "Click me",
  theme: ButtonTheme.PRIMARY,
  size: ButtonSize.XL
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Click me",
  theme: ButtonTheme.CLEAR
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
  children: "Click me",
  theme: ButtonTheme.CLEAR
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: "Click me",
  theme: ButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Click me",
  theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ButtonSizeM = Template.bind({});
ButtonSizeM.args = {
  children: "<",
  size: ButtonSize.M,
  square: true,
  theme: ButtonTheme.BACKGROUND
};

export const ButtonSizeL = Template.bind({});
ButtonSizeL.args = {
  children: "<",
  size: ButtonSize.L,
  square: true,
  theme: ButtonTheme.BACKGROUND
};

export const ButtonSizeXL = Template.bind({});
ButtonSizeXL.args = {
  children: "<",
  size: ButtonSize.XL,
  square: true,
  theme: ButtonTheme.BACKGROUND
};
