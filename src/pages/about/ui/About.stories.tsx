import type { ComponentStory, ComponentMeta } from "@storybook/react";

import About from "./About";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "pages/About",
  component: About,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const AboutLight = Template.bind({});
AboutLight.args = {};

export const AboutDark = Template.bind({});
AboutDark.args = {};
AboutDark.decorators = [ThemeDecorator(Theme.DARK)];
