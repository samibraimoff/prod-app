import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppLink, ThemeLink } from "./app-link";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "ui-kit/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const AppLinkPrimaryLight = Template.bind({});
AppLinkPrimaryLight.args = {
  children: "Click me",
  theme: ThemeLink.PRIMARY,
};

export const AppLinkSecondaryLight = Template.bind({});
AppLinkSecondaryLight.args = {
  children: "Click me",
  theme: ThemeLink.SECONDARY,
};

export const AppLinkPrimaryDark = Template.bind({});
AppLinkPrimaryDark.args = {
  children: "Click me",
  theme: ThemeLink.PRIMARY,
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkSecondaryDark = Template.bind({});
AppLinkSecondaryDark.args = {
  children: "Click me",
  theme: ThemeLink.SECONDARY,
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
