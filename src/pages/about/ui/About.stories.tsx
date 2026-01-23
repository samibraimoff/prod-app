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

const Template: ComponentStory<typeof About> = () => <About />;

export const AboutLight = Template.bind({});
AboutLight.args = {};

export const AboutDark = Template.bind({});
AboutDark.args = {};
AboutDark.decorators = [ThemeDecorator(Theme.DARK)];
