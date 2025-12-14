import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotFoundPage } from "./not-found-page";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
);

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
