import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageLoader } from "./page-loader";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "widgets/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/ban-ts-comment
  // @ts-ignore - Storybook args are always an object
  <PageLoader {...args} />
);

export const PageLoaderLight = Template.bind({});
PageLoaderLight.args = {};

export const PageLoaderDark = Template.bind({});
PageLoaderDark.args = {};
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
