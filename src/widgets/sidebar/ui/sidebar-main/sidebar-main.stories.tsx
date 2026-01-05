import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { Sidebar } from "./sidebar-main";

export default {
  title: "widgets/Sidebar/SidebarMain",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const SidebarMainLight = Template.bind({});
SidebarMainLight.args = {};

export const SidebarMainDark = Template.bind({});
SidebarMainDark.args = {};
SidebarMainDark.decorators = [ThemeDecorator(Theme.DARK)];
