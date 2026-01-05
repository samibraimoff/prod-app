import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import About from "./About";

export default {
  title: "pages/About",
  component: About,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/ban-ts-comment
  // @ts-ignore - Storybook args are always an object
  <About {...args} />
);

export const AboutLight = Template.bind({});
AboutLight.args = {};

export const AboutDark = Template.bind({});
AboutDark.args = {};
AboutDark.decorators = [ThemeDecorator(Theme.DARK)];
