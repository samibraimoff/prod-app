import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { NotFoundPage } from "./not-found-page";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
