import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import { Tags, Text, TextTheme } from "./text";

export default {
  title: "ui-kit/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryLightTitleAndParagraph = Template.bind({});
PrimaryLightTitleAndParagraph.args = {
  title: "My title",
  paragraph: "My paragraph",
};

export const PrimaryDarkTitleAndParagraph = Template.bind({});
PrimaryDarkTitleAndParagraph.args = {
  title: "My title",
  paragraph: "My paragraph",
};
PrimaryDarkTitleAndParagraph.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLightErrorTitleAndParagraph = Template.bind({});
PrimaryLightErrorTitleAndParagraph.args = {
  title: "My title",
  paragraph: "My paragraph",
  theme: TextTheme.ERROR,
};

export const PrimaryDarkErrorTitleAndParagraph = Template.bind({});
PrimaryDarkErrorTitleAndParagraph.args = {
  title: "My title",
  paragraph: "My paragraph",
  theme: TextTheme.ERROR,
};
PrimaryDarkErrorTitleAndParagraph.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLightTitleOnly = Template.bind({});
PrimaryLightTitleOnly.args = {
  title: "My title",
  tag: Tags.HEADING_TWO,
};

export const PrimaryDarkTitleOnly = Template.bind({});
PrimaryDarkTitleOnly.args = {
  title: "My title",
  tag: Tags.HEADING_TWO,
};
PrimaryDarkTitleOnly.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLightParagraphOnly = Template.bind({});
PrimaryLightParagraphOnly.args = {
  paragraph: "My paragraph",
  tag: Tags.PARAGRAPH,
};

export const PrimaryDarkParagraphOnly = Template.bind({});
PrimaryDarkParagraphOnly.args = {
  paragraph: "My paragraph",
  tag: Tags.PARAGRAPH,
};
PrimaryDarkParagraphOnly.decorators = [ThemeDecorator(Theme.DARK)];
