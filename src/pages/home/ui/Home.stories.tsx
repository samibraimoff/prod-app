import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import Home from "./Home";

export default {
  title: "pages/Home",
  component: Home,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/ban-ts-comment
  // @ts-ignore - Storybook args are always an object
  <Home {...args} />
);

export const HomeLight = Template.bind({});
HomeLight.args = {};

export const HomeDark = Template.bind({});
HomeDark.args = {};
HomeDark.decorators = [ThemeDecorator(Theme.DARK)];
