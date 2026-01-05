import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { PageWithErrorMessage } from "./page-with-error-message";

export default {
  title: "widgets/PageWithErrorMessage",
  component: PageWithErrorMessage,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageWithErrorMessage>;

const Template: ComponentStory<typeof PageWithErrorMessage> = (args) => (
  <PageWithErrorMessage {...args} />
);

export const PageWithErrorMessageLight = Template.bind({});
PageWithErrorMessageLight.args = {};

export const PageWithErrorMessageDark = Template.bind({});
PageWithErrorMessageDark.args = {};
PageWithErrorMessageDark.decorators = [ThemeDecorator(Theme.DARK)];
