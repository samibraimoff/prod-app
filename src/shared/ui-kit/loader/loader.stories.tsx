import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { Loader } from "./loader";

export default {
  title: "ui-kit/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
