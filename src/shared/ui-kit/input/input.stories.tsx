import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { Input } from "./input";

export default {
  title: "ui-kit/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputPrimaryLight = Template.bind({});
InputPrimaryLight.args = {
  label: "User name",
  type: "text",
  placeholder: "Enter user name",
};

export const InputPrimaryDark = Template.bind({});
InputPrimaryDark.args = {
  label: "User name",
  type: "text",
  placeholder: "Enter user name",
};
InputPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
